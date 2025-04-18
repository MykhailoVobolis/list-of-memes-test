'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

import Link from 'next/link';

import { usePathname } from 'next/navigation.js';

export default function NavBar() {
  const pathName = usePathname();

  const isActive = (path) => pathName === path;

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">MEMES</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive('/')}>
          <Link aria-current="page" color="foreground" href="/">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/list')}>
          <Link color="foreground" href="/list">
            List
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
