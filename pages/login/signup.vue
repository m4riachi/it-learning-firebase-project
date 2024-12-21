<!-- pages/signup.vue -->
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
           alt="Your Company"/>
      <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create your account</h2>
    </div>

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
          'length': 'Password must be at least 6 characters long'
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
          'confirm': 'Passwords do not match'
          }"
          />

          <div class="flex items-center gap-3 mb-6">
            <div class="flex h-6 shrink-0 items-center">
              <div class="group grid size-4 grid-cols-1">
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
                />
                <svg
                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    viewBox="0 0 14 14" fill="none">
                  <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <label for="terms" class="block text-sm/6 text-gray-900">
              I agree to the
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">terms and conditions</a>
            </label>
          </div>

          <div>
            <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </FormKit>

        <div>
          <div class="relative mt-10">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200"/>
            </div>
            <div class="relative flex justify-center text-sm/6 font-medium">
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div class="mt-6">
            <LoginGoogleBtn/>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ ' ' }}
        <NuxtLink to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</NuxtLink>
      </p>
    </div>
    <Toast/>
  </div>
</template>

<script setup lang="ts">
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {toastError} from '~/composables/helpers'

useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'h-full bg-gray-50'
  },
  bodyAttrs: {
    class: 'h-full'
  },
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
    let errorMessage = 'An error occurred during sign up'

    switch (e.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Email address is already registered'
        break
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address'
        break
      case 'auth/operation-not-allowed':
        errorMessage = 'Email/password accounts are not enabled'
        break
      case 'auth/weak-password':
        errorMessage = 'Password is too weak'
        break
      default:
        console.error(e)
    }

    toastError('', errorMessage)
  }
}
</script>
