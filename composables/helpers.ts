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


export const getErrorMessage = (code: string): string => {
  switch (code) {
    case 'auth/user-not-found':
      return 'No account found with this email';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later'
    case 'auth/email-already-in-use':
      return 'Email address is already registered';
    case 'auth/invalid-credential':
      return 'No account found with this email';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/invalid-email':
      return 'Invalid email address';
    default:
      return 'An error occurred during sign in';
  }
}
