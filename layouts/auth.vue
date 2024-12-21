<template>
  <div class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <slot />
    <Toast />
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'h-full bg-gray-50'
  },
  bodyAttrs: {
    class: 'h-full'
  },
})
</script>
