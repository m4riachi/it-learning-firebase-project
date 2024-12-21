import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { reactive } from 'vue';

export enum ToastEnum {
  error = 'error',
  warning = 'warning',
  success = 'success',
}
export interface ToastType {
  key: string;
  type: ToastEnum;
  title: string;
  message: string;
}

export const useErrorHandlerStore = defineStore('error-handler', () => {
  const toastList = reactive<ToastType[]>([]);
  const errorMessage = ref('');
  const shouldInvalidateQueries = ref(false);
  const showErrorMessage = ref(false);
  const setShowErrorMessage = (value: boolean) => {
    showErrorMessage.value = value;
  };

  const addToast = ({
    type,
    title = '',
    message = '',
    error,
    timeout = 0,
  }: {
    type: ToastEnum;
    title?: string;
    message?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- ingore because we don't need to type errors
    error?: any;
    timeout?: number;
  }): string => {
    const key = uuidv4();

    if (!title) {
      title = ToastEnum[type];
    }

    let errorDetail = '';
    if (error && typeof error.message === 'string') {
      errorDetail = error.message as string;
    }

    if (type === ToastEnum.error) {
      message = `${message}`;
    }

    toastList.push({
      key,
      type,
      title,
      message: `${message}  ${errorDetail}`,
    });

    if (timeout > 0) {
      setTimeout(() => {
        closeToast(key);
      }, timeout);
    }

    return key;
  };

  const closeToast = (key: string) => {
    let deleteIndex = -1;
    toastList.forEach((t: ToastType, index: number) => {
      if (t.key === key) deleteIndex = index;
    });
    toastList.splice(deleteIndex, 1);
  };

  // clear all toasts warning from toastList
  const clearToastsWarning = () => {
    for (let i = toastList.length - 1; i >= 0; i--) {
      if (toastList[i].type === ToastEnum.warning) {
        toastList.splice(i, 1);
      }
    }
  };

  return {
    toastList,
    addToast,
    closeToast,
    errorMessage,
    shouldInvalidateQueries,
    clearToastsWarning,
    showErrorMessage,
    setShowErrorMessage,
  };
});
