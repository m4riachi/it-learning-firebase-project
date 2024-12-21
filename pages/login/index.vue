<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <FormKit type="form" :actions="false" :onSubmit="handleLogin">
        <FormKit type="email" name="email" label="Email address" validation="required" />
        <FormKit type="password" name="password" label="password" validation="required" />
        <LoginForgoutPassword />
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </FormKit>
      <LoginGoogleBtn />
    </div>
    <LoginSignupLink />
  </div>
</template>

<script setup lang="ts">
import {signInWithEmailAndPassword} from 'firebase/auth'
import {getErrorMessage} from "~/composables/helpers";

definePageMeta({
  layout: 'auth'
})

const router = useRouter()
const auth = useFirebaseAuth()

// Handle login
const handleLogin = async (formdata: any) => {
  try {
    await signInWithEmailAndPassword(
        auth,
        formdata.email,
        formdata.password
    )
    router.push('/')
  } catch (e: any) {
    let error = getErrorMessage(e?.code);
    toastError('', error);
  }
}
</script>
