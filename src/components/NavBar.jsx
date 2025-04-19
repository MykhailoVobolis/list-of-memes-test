'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation.js';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const isActive = (path) => pathName === path;
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass = (path) =>
    `w-full text-center transition-colors duration-200 ${
      isActive(path)
        ? 'text-blue-600  hover:text-blue-700'
        : 'text-foreground hover:text-gray-300'
    }`;

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">MEMES</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive('/')}>
          <Link aria-current="page" className={linkClass('/')} href="/">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/list')}>
          <Link className={linkClass('/list')} href="/list">
            List
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className={linkClass('/')}
            href="/"
            size="lg"
            onClick={closeMenu}
          >
            Table
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={linkClass('/list')}
            href="/list"
            size="lg"
            onClick={closeMenu}
          >
            List
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
