'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const englishCourses = [
    { name: 'Grammar', href: '/courses/english?category=grammar' },
    { name: 'Vocabulary', href: '/courses/english?category=vocabulary' },
    { name: 'Conversation', href: '/courses/english?category=conversation' },
    { name: 'Beginner English', href: '/courses/english?category=beginner' },
  ];

  const engineeringCourses = [
    { name: 'Basic Tools', href: '/courses/engineering?category=basic-tools' },
    { name: 'Technical Drawing', href: '/courses/engineering?category=technical-drawing' },
    { name: 'Orthographic Projections', href: '/courses/engineering?category=orthographic' },
    { name: 'AutoCAD', href: '/courses/engineering?category=autocad' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
              EP
            </div>
            <span className="text-xl font-bold text-gray-900">EduPlatform</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>English Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {englishCourses.map((course) => (
                    <li key={course.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={course.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                        >
                          <div className="text-sm font-medium leading-none">{course.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            {course.name === 'Grammar' && 'Master English grammar rules and structures'}
                            {course.name === 'Vocabulary' && 'Expand your English word knowledge'}
                            {course.name === 'Conversation' && 'Improve your speaking and listening skills'}
                            {course.name === 'Beginner English' && 'Start your English learning journey'}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Engineering Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {engineeringCourses.map((course) => (
                    <li key={course.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={course.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                        >
                          <div className="text-sm font-medium leading-none">{course.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            {course.name === 'Basic Tools' && 'Learn essential drawing tools and techniques'}
                            {course.name === 'Technical Drawing' && 'Master technical drawing principles'}
                            {course.name === 'Orthographic Projections' && 'Create accurate orthographic views'}
                            {course.name === 'AutoCAD' && 'Professional CAD software training'}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Language Toggle */}
          <Button variant="outline" size="sm" className="hidden md:flex">
            <span className="text-sm">EN</span>
            <span className="mx-1">|</span>
            <span className="text-sm text-gray-500">العربية</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">English Courses</h3>
                  {englishCourses.map((course) => (
                    <Link
                      key={course.name}
                      href={course.href}
                      className="block pl-4 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">Engineering Courses</h3>
                  {engineeringCourses.map((course) => (
                    <Link
                      key={course.name}
                      href={course.href}
                      className="block pl-4 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="border-t pt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;