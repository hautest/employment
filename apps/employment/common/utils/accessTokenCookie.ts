import { cookieHelper } from './cookies/cookiehelper';

export const accessTokenCookie = () => cookieHelper<string>('accessToken');
