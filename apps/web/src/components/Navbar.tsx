'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import { logoutAction } from '@/app/redux/slices/userSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Input } from './ui/input';
import { Menu, MusicIcon, SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import Link from 'next/link';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {}, []);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
    router.refresh();
  };

  return (
    <div className='flex flex-row justify-between m-6'>
        <Link className="flex items-center justify-center" href="#">
          <MusicIcon className="h-6 w-6" />
          <span className="sr-only">TuneTix</span>
        </Link>
        <nav>
          {Boolean(user.userId) ? (
            <div className="md:block hidden">
              <div className="flex items-center gap-8">
                <h3 onClick={() => router.push('/')}>Home</h3>
                {user.role == 'organizer' ? (
                  <h3 onClick={() => router.push('/organizer-dashboard')}>
                    Dashboard
                  </h3>
                ) : (
                  <h3 onClick={() => router.push('/concert')}>Event</h3>
                )}
                <h3 onClick={() => router.push('/profile')}>Profile</h3>
                <h3 onClick={logout}>Logout</h3>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="flex items-center gap-8">
                <h3 onClick={() => router.push('/')}>Home</h3>
                <h3 onClick={() => router.push('/concert')}>Event</h3>
                <h3 onClick={() => router.push('/login')}>Login</h3>
                <h3 onClick={() => router.push('/register')}>Register</h3>
              </div>
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden">
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/')}>
                Home
              </DropdownMenuItem>
              {Boolean(user.userId) && (
                <>
                  {user.role === 'organizer' ? (
                    <DropdownMenuItem
                      onClick={() => router.push('/organizer-dashboard')}
                    >
                      Dashboard
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem
                      onClick={() => router.push('/concert')}
                    >
                      Event
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={() => router.push('/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </>
              )}
              {!Boolean(user.userId) && (
                <>
                  <DropdownMenuItem
                    onClick={() => router.push('/concert')}
                  >
                    Event
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/login')}>
                    Login
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/register')}>
                    Register
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
    </div>
  );
};

export default Navbar;
