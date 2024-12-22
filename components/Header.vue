<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href" class="text-sm/6 font-semibold text-gray-900">{{ item.name }}</nuxt-link>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <nuxt-link to="/profile" class="hidden text-sm/6 font-semibold text-gray-900 lg:block">Profile</nuxt-link>
        <button @click="handleLogout" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navigation = [
  { name: 'Chat', href: '/chat' },
]

const router = useRouter()
const auth = useFirebaseAuth()
const loading = ref(false)

const handleLogout = async () => {
  loading.value = true

  try {
    await auth?.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
    toastError('', 'Error signing out')
  } finally {
    loading.value = false
  }
}
</script>
