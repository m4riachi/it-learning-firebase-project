<!-- pages/signup.vue -->
<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <FormKit type="form" :actions="false" :onSubmit="handleSignup">
        <FormKit
            type="text"
            name="name"
            label="Full name"
            validation="required"
        />

        <FormKit
            type="email"
            name="email"
            label="Email address"
            validation="required|email"
        />

        <FormKit
            type="password"
            name="password"
            label="Password"
            validation="required|length:6"
            :validation-messages="{
          'length': 'Minimum 6 charactéres'
          }"
        />

        <FormKit
            type="password"
            name="confirmPassword"
            label="Confirm password"
            validation="required|confirm"
            validation-label="Password confirmation"
            :validation-rules="{ confirm: confirmPassword }"
            :validation-messages="{
          'confirm': 'Les deux mot de pass ne sont pas identique'
          }"
        />

        <div>
          <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </FormKit>

      <LoginGoogleBtn />
    </div>

    <LoginSigninLink />
  </div>
</template>

<script setup lang="ts">
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

definePageMeta({
  layout: 'auth'
})

const router = useRouter()
const auth = useFirebaseAuth()

// Password confirmation validation
const confirmPassword = (node: any) => {
  return node.value === node.parent.value.password
}

// Handle signup
const handleSignup = async (formData: any) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
    )

    // Update user profile with name
    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: formData.name
      })
    }

    // Successful signup
    router.push('/') // or wherever you want to redirect after signup
  } catch (e: any) {
    const errorMessage = getErrorMessage(e?.code)
    toastError('', errorMessage)
  }
}
</script>
