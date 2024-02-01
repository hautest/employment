import {
  ReactiveRender as CommonReactiveRender,
  ReactiveRenderProps as CommonReactiveRenderProps,
} from 'components';
import { viewportCookie } from '../utils/cookies/viewportCookie';

function ReactiveRender(props: Omit<CommonReactiveRenderProps, 'screen'>) {
  const { getValue } = viewportCookie();

  return <CommonReactiveRender {...props} screen={getValue().value} />;
}

export default ReactiveRender;
