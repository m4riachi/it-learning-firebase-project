// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', 'nuxt-vuefire', '@nuxtjs/tailwindcss', '@formkit/nuxt', '@pinia/nuxt'],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    emulators: {
      enabled: process.env.NODE_ENV === 'development',
    },
    auth: {
      enabled: true
    },
  },
  formkit: {
    // Support expérimental pour le chargement automatique (voir note) :
    autoImport: true
  },
})
