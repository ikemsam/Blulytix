import Link from 'next/link';
import { ReactNode } from 'react';

const CustomSideRoute = ({
  children,
  route,
}: {
  children: ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};

export default CustomSideRoute;
