'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaSignInAlt,
  FaHome,
  FaExchangeAlt,
  FaUser,
  FaHeart,
} from 'react-icons/fa';
import type { FC } from 'react';

const Navbar: FC = () => {
  const pathname = usePathname();
  const isAuthenticated = false;

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Navbar hanya tampil di desktop */}
      <div className="navbar sticky top-0 bg-base-100 shadow-md border-b border-gray-200 h-[50px] z-50 transition-all items-center hidden lg:flex w-full mb-8">
        <div className="max-w-7xl mx-auto w-full flex items-center">
          <div className="navbar-start flex items-center ">
            <Link
              href="/"
              className="text-primary text-xl font-extrabold tracking-wide ml-2 scale-105 transition-transform"
            >
              Minerva
            </Link>
          </div>
          <div className="navbar-center flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <Link
                  href="/"
                  className={`${isActive('/') ? 'text-red-600' : ''}`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/transaction"
                  className={`${
                    isActive('/transaction') ? 'text-red-600' : ''
                  }`}
                >
                  Transaksi
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link
                    href="/favorite"
                    className={`${isActive('/favorite') ? 'text-red-600' : ''}`}
                  >
                    Favorit
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/#"
                  className={`${isActive('/blog') ? 'text-red-600' : ''}`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {!isAuthenticated ? (
              <Link
                href="/login"
                className="btn btn-primary text-white px-6 py-2 flex items-center gap-2 shadow scale-105 transition-transform text-sm"
              >
                <FaSignInAlt className="text-lg" />
                Masuk
              </Link>
            ) : (
              <Link href="/profile">Profil</Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation hanya tampil di mobile */}
      <nav className="fixed bottom-0 left-0 w-full bg-base-100 border-t border-gray-200 shadow-lg flex justify-around items-center h-[60px] z-50 lg:hidden">
        <Link
          href="/"
          className="flex flex-col items-center justify-center px-3 py-2"
        >
          <FaHome
            className={`text-xl ${isActive('/') ? 'text-red-600' : ''}`}
          />
          <span className={`text-xs ${isActive('/') ? 'text-red-600' : ''}`}>
            Beranda
          </span>
        </Link>
        <Link
          href="/transaction"
          className="flex flex-col items-center justify-center px-3 py-2"
        >
          <FaExchangeAlt
            className={`text-xl ${
              isActive('/transaction') ? 'text-red-600' : ''
            }`}
          />
          <span
            className={`text-xs ${
              isActive('/transaction') ? 'text-red-600' : ''
            }`}
          >
            Transaksi
          </span>
        </Link>
        {isAuthenticated && (
          <Link
            href="/favorite"
            className="flex flex-col items-center justify-center px-3 py-2"
          >
            <FaHeart
              className={`text-xl ${
                isActive('/favorite') ? 'text-red-600' : ''
              }`}
            />
            <span
              className={`text-xs ${
                isActive('/favorite') ? 'text-red-600' : ''
              }`}
            >
              Favorit
            </span>
          </Link>
        )}
        {!isAuthenticated ? (
          <Link
            href="/login"
            className="flex flex-col items-center justify-center px-3 py-2"
          >
            <FaUser
              className={`text-xl ${isActive('/login') ? 'text-red-600' : ''}`}
            />
            <span
              className={`text-xs ${isActive('/login') ? 'text-red-600' : ''}`}
            >
              User
            </span>
          </Link>
        ) : (
          <Link
            href="/profile"
            className="flex flex-col items-center justify-center px-3 py-2"
          >
            <FaUser
              className={`text-xl ${
                isActive('/profile') ? 'text-red-600' : ''
              }`}
            />
            <span
              className={`text-xs ${
                isActive('/profile') ? 'text-red-600' : ''
              }`}
            >
              User
            </span>
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;
