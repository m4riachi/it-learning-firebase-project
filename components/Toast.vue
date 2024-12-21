<template>
  <teleport to="body">
  <div
    aria-live="assertive"
    class="fixed bottom-0 right-0 min-w-[400px] flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50"
  >
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <transition
        v-for="toast in getToast"
        :key="toast.key"
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border border-1"
          :class="{
            'bg-yellow-500 border-yellow-600': toast.type == ToastEnum.warning,
            'bg-green-500 border-green-600': toast.type == ToastEnum.success,
            'bg-red-500 border-red-600': toast.type == ToastEnum.error,
          }"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-lg font-semibold text-white capitalize">{{ toast.title }}</p>
                <p class="mt-1 text-sm text-white" v-html="toast.message"></p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <Icon
                  name="material-symbols:cancel-outline"
                  class="bg-transparent w-6 h-6 cursor-pointer text-white"
                  mode="svg"
                  @click="useErrorHandler.closeToast(toast.key)"
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
  </teleport>
</template>
<script setup lang="ts">
import { ToastEnum, ToastType, useErrorHandlerStore } from '~/composables/stores/error-handler';
const useErrorHandler = useErrorHandlerStore();

const getToast = computed<Array<ToastType>>(() => {
  return useErrorHandler.toastList;
});
</script>
