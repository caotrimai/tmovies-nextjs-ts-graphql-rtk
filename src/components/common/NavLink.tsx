import React, { Children } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

interface NavLinkProps extends React.PropsWithChildren<LinkProps> {
  href: string;
  exact?: boolean;
  className?: string;
  children?: React.ReactElement;
}

export const NavLink = (
  {
    href,
    exact = false,
    children,
    className,
    ...rest
  }: NavLinkProps) => {
  const { pathname } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || '';
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const sumClassName = `${className} ${childClassName} ${isActive ? 'active' : ''}`;
  return (
    <Link href={href} {...rest} className={sumClassName}>
      {children}
    </Link>
  );
};