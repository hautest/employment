import { usePathname } from 'next/navigation';

export const useNavColor = (href: string) => {
  const path = usePathname();

  const getColor = () => {
    // 홈일때 예외 처리
    if (href === '/' && path === href) return 'sky';
    if (href === '/' && path !== href) return 'black';

    return path.includes(href) ? 'sky' : 'black';
  };

  return getColor();
};
