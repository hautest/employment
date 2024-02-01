import { ReactiveRenderProps } from 'components';
import { cookieHelper } from './cookiehelper';

export const viewportCookie = () => cookieHelper<ReactiveRenderProps['screen']>('viewport');
