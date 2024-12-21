<!-- pages/forgot-password.vue -->
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Reset your password</h2>
      <p class="mt-2 text-center text-sm/6 text-gray-500">
        Enter your email address and we'll send you a link to reset your password
      </p>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <FormKit
            v-if="!emailSent"
            type="form"
            :actions="false"
            :onSubmit="handleResetPassword"
        >
          <FormKit
              type="email"
              name="email"
              label="Email address"
              validation="required|email"
          />

          <div>
            <button
                type="submit"
                :disabled="loading"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {{ loading ? 'Sending...' : 'Send reset link' }}
            </button>
          </div>
        </FormKit>

        <!-- Success message -->
        <div v-else class="text-center">
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 class="mt-3 text-base font-semibold text-gray-900">Check your email</h3>
          <p class="mt-2 text-sm text-gray-500">
            We've sent a password reset link to {{ email }}
          </p>
          <div class="mt-6">
            <button
                type="button"
                @click="resetForm"
                class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Send another email
            </button>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Remember your password?
        {{ ' ' }}
        <NuxtLink to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</NuxtLink>
      </p>
    </div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { sendPasswordResetEmail } from 'firebase/auth'
import { toastError } from '~/composables/helpers'

useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'h-full bg-gray-50'
  },
  bodyAttrs: {
    class: 'h-full'
  },
})

const auth = useFirebaseAuth()
const loading = ref(false)
const emailSent = ref(false)
const email = ref('')

// Handle password reset
const handleResetPassword = async (formData: any) => {
  loading.value = true
  email.value = formData.email

  try {
    await sendPasswordResetEmail(auth, formData.email)
    emailSent.value = true
  } catch (e: any) {
    let errorMessage = 'An error occurred while sending the reset link'

    switch (e.code) {
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address'
        break
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email'
        break
      case 'auth/too-many-requests':
        errorMessage = 'Too many attempts. Please try again later'
        break
      default:
        console.error(e)
    }

    toastError('', errorMessage)
  } finally {
    loading.value = false
  }
}

// Reset form to send another email
const resetForm = () => {
  emailSent.value = false
  email.value = ''
}
</script>
