<!-- pages/profile.vue -->
<template>
  <div class="min-h-full bg-gray-50 py-12">
    <div class="mx-auto max-w-3xl px-6 lg:px-8">
      <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <div class="space-y-12">
          <div class="pb-12">
            <h2 class="text-xl font-semibold leading-7 text-gray-900">Profile</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Update your personal information and profile photo.
            </p>

            <FormKit v-if="!isLoading" type="form" :actions="false" :onSubmit="handleUpdateProfile">
              <!-- Profile Photo Section -->
              <div class="mt-10 flex flex-col gap-y-8">
                <div>
                  <h3 class="text-sm font-medium leading-6 text-gray-900">Profile photo</h3>
                  <div class="mt-4 flex items-center gap-x-6">
                    <img
                        v-if="photoURL"
                        :src="photoURL"
                        alt="Profile photo"
                        class="h-24 w-24 rounded-full object-cover border border-black"
                    />
                    <div
                        v-else
                        class="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100"
                    >
                      <svg class="h-12 w-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <FormKit
                          type="file"
                          name="photo"
                          accept="image/*"
                          @change="handlePhotoChange"
                      />
                      <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                    </div>
                  </div>
                </div>

                <!-- Personal Information -->
                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <FormKit
                        type="text"
                        name="displayName"
                        label="Full name"
                        :value="user?.displayName || ''"
                        validation="required"
                    />
                  </div>

                  <div class="sm:col-span-3">
                    <FormKit
                        type="email"
                        name="email"
                        label="Email"
                        :value="user?.email || ''"
                        disabled
                    />
                  </div>

                  <div class="sm:col-span-3">
                    <FormKit
                        type="date"
                        name="birthDate"
                        label="Birth date"
                        :value="userData?.birthDate || ''"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-8 flex">
                <button
                    type="submit"
                    :disabled="loading"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {{ loading ? 'Saving...' : 'Save changes' }}
                </button>
              </div>
            </FormKit>
            <div v-if="isLoading">Please wait...</div>
          </div>
        </div>
      </div>
    </div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { updateProfile } from 'firebase/auth'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import {toastError, toastSuccess} from '~/composables/helpers'

const auth = useFirebaseAuth()
const storage = useFirebaseStorage()
const db = useFirestore()

const user = computed(() => auth?.currentUser)
const loading = ref(false)
const photoURL = ref(user.value?.photoURL || '')
const userData = ref<any>(null)

// Fetch user data from Firestore
const isLoading = ref(false)
const fetchUserData = async () => {
  if (!user.value?.uid) return

  isLoading.value = true
  try {
    const userDoc = await getDoc(doc(db, 'users', user.value.uid))
    console.log(userDoc.data()?.birthDate)
    if (userDoc.exists()) {
      userData.value = userDoc.data()
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  } finally {
    isLoading.value = false
  }
}

// Call fetchUserData when component mounts
onMounted(() => {
  fetchUserData()
})

// Handle profile photo change
const handlePhotoChange = async (event: any) => {
  const file = event?.target?.files?.[0]
  if (!file || !user.value?.uid) return

  try {
    loading.value = true

    // Create a storage reference
    const photoRef = storageRef(storage, `profile-photos/${user.value.uid}`)

    // Upload file
    await uploadBytes(photoRef, file)

    // Get download URL
    const downloadURL = await getDownloadURL(photoRef)
    photoURL.value = downloadURL

    // Update user profile
    await updateProfile(user.value, {
      photoURL: downloadURL
    })
  } catch (error) {
    toastError('', 'Error uploading profile photo')
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}

// Handle profile update
const handleUpdateProfile = async (formData: any) => {
  if (!user.value?.uid) return

  try {
    loading.value = true

    // Update user profile in Firebase Auth
    await updateProfile(user.value, {
      displayName: formData.displayName
    })

    // Update user data in Firestore
    await setDoc(doc(db, 'users', user.value.uid), {
      displayName: formData.displayName,
      birthDate: formData.birthDate,
      email: user.value.email,
      updatedAt: new Date()
    }, { merge: true })

    // Show success message
    toastSuccess('Success', 'Profile updated successfully' )
  } catch (error) {
    toastError('', 'Error updating profile')
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
}
</script>
