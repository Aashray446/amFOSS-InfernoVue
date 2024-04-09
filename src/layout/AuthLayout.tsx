import React, {  ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <main className="flex justify-center items-center min-h-screen sm:h-full">
    <div className="w-full md:w-auto sm-w-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      {children}
    </div>
    <ToastContainer position='top-center'  />
  </main>
  
  );
};

export default AuthLayout;
