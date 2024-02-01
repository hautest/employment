'use server';

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export const cookieHelper = <T>(key: string) => {
  const getValue = () => cookies().get(key) as { name: string; value: T };

  const setValue = (value: string, options: Partial<ResponseCookie>) => {
    cookies().set(key, value, options);
  };

  const deleteValue = () => {
    cookies().delete(key);
  };

  return {
    getValue,
    setValue,
    deleteValue,
  };
};
