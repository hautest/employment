import {
  ReactiveRender as CommonReactiveRender,
  ReactiveRenderProps as CommonReactiveRenderProps,
} from 'components';
import { cookies } from 'next/headers';

function ReactiveRender(props: Omit<CommonReactiveRenderProps, 'screen'>) {
  const viewport = cookies().get('viewport')?.value as CommonReactiveRenderProps['screen'];

  return <CommonReactiveRender {...props} screen={viewport} />;
}

export default ReactiveRender;
