'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import { logoutAction } from '@/app/redux/slices/userSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Input } from './ui/input';
import { SearchIcon } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  };

  return (
    <nav className="sticky top-0 z-50 bg-indigo-950">
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between py-2 text-yellow-300">
          <Image
            src="https://drive.google.com/uc?export=view&id=1X-_e7ldgFh1UrI3r6l5GiBQ0hblrM4os"
            alt=""
            width={100}
            height={100}
            objectFit="cover"
          />
          <div className="flex items-center rounded-full bg-white dark:bg-gray-800 p-2 shadow-md">
            <Input
              className="flex-1 rounded-full py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none"
              placeholder="Search..."
              type="text"
            />
            <SearchIcon className="w-5 h-5 text-gray-800 dark:text-white" />
          </div>
          {Boolean(id) ? (
            <div className="flex items-center gap-8">
              <h3 onClick={() => router.push('/')}>Home</h3>
              <h3 onClick={() => router.push('/event')}>Event</h3>
              <h3 onClick={() => router.push('/profile')}>Profile</h3>
              <h3 onClick={logout}>Logout</h3>
            </div>
          ) : (
            <div className="flex items-center gap-8">
              <h3 onClick={() => router.push('/')}>Home</h3>
              <h3 onClick={() => router.push('/event')}>Event</h3>
              <h3 onClick={() => router.push('/login')}>Login</h3>
              <h3 onClick={() => router.push('/register')}>Register</h3>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
