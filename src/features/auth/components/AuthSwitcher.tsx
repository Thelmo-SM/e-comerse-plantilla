'use client';

import { useState } from 'react';
import LoginForm from '@/features/auth/components/LoginForm';
import RegisterForm from '@/features/auth/components/RegisterForm';

export default function AuthSwitcher() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="w-[90%]">
      {showLogin ? <LoginForm /> : <RegisterForm />}

      <div className="mt-4 text-center text-sm text-gray-600">
        {showLogin ? (
          <>
            <span className='text-gray-600'>¿No tienes cuenta?</span>{' '}
            <button
              onClick={() => setShowLogin(false)}
              className="text-blue-900 hover:underline cursor-pointer"
              type="button"
            >
              Regístrate aquí
            </button>
          </>
        ) : (
          <>
            <span className='text-gray-600'>¿Ya tienes cuenta?</span>{' '}
            <button
              onClick={() => setShowLogin(true)}
              className="text-blue-900 hover:underline cursor-pointer"
              type="button"
            >
              Inicia sesión
            </button>
          </>
        )}
      </div>
    </div>
  );
}
