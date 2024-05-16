import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface style {
  context: 'success' | 'error' | 'info' | 'warning' | 'default' | 'dark';
}

const ToastMessage = () => {
  const contextClass = {
    success: 'bg-blue-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
  };
  return (
    <ToastContainer
      toastClassName={(context) =>
        contextClass[context?.type || 'default'] +
        ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
      }
    />
  );
};
export default ToastMessage;
