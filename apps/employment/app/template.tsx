import { ReactNode } from 'react';
import Frame from '../common/components/Frame/Frame';

interface TemplateProps {
  children: ReactNode;
}

function Template({ children }: TemplateProps) {
  return <Frame navigation>{children}</Frame>;
}

export default Template;
