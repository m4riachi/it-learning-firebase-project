import {ToastEnum, useErrorHandlerStore} from "~/composables/stores/error-handler";

export const toastError = (title: string, message: string, timeout = 1000000) => {
  const useErrorHandler = useErrorHandlerStore();
  const fixedTimeout = 1000000; // this is to override any timeout passed in
  useErrorHandler.addToast({
    type: ToastEnum.error,
    title,
    message,
    timeout: fixedTimeout,
  });
};

export const toastSuccess = (title: string, message: string, timeout = 3000) => {
  const useErrorHandler = useErrorHandlerStore();
  const fixedTimeout = 3000; // this is to override any timeout passed in
  useErrorHandler.addToast({
    type: ToastEnum.success,
    title,
    message,
    timeout: fixedTimeout,
  });
};

export const toastWarning = (title: string, message: string, timeout = 1000000) => {
  const useErrorHandler = useErrorHandlerStore();
  const fixedTimeout = 1000000; // this is to override any timeout passed in
  useErrorHandler.addToast({
    type: ToastEnum.warning,
    title,
    message,
    timeout: fixedTimeout,
  });
};
