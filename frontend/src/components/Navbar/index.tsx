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
  const isAuthenticated = true;

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Navbar hanya tampil di desktop */}
      <div className="navbar sticky top-0 bg-[#60a5fa] shadow-md border-b border-gray-200 h-[50px] z-50 transition-all items-center hidden lg:flex w-full mb-8">
        <div className="max-w-7xl mx-auto w-full flex items-center">
          <div className="navbar-start flex items-center ">
            <Link
              href="/"
              className="text-white text-xl font-extrabold tracking-wide ml-2 scale-105 transition-transform"
            >
              Minerva
            </Link>
          </div>
          <div className="navbar-center flex font-bold">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <Link
                  href="/"
                  className={`${
                    isActive('/') ? 'text-white font-extrabold' : ''
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/transaction"
                  className={`${
                    isActive('/transaction') ? 'text-white font-extrabold' : ''
                  }`}
                >
                  Transaksi
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link
                    href="/favorite"
                    className={`${
                      isActive('/favorite') ? 'text-white font-extrabold' : ''
                    }`}
                  >
                    Favorit
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/#"
                  className={`${
                    isActive('/blog') ? 'text-white font-extrabold' : ''
                  }`}
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
                className="btn btn-primary text-white font-extrabold px-6 py-2 flex items-center gap-2 shadow scale-105 transition-transform text-sm"
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
      <nav className="fixed bottom-0 left-0 w-full bg-blue-400 border-t border-gray-200 shadow-lg flex justify-around items-center h-[60px] z-50 lg:hidden">
        <Link
          href="/"
          className="flex flex-col items-center justify-center px-3 py-2"
        >
          <FaHome
            className={`text-xl ${
              isActive('/') ? 'text-white font-extrabold' : ''
            }`}
          />
          <span
            className={`text-xs ${
              isActive('/') ? 'text-white font-extrabold' : ''
            }`}
          >
            Beranda
          </span>
        </Link>
        <Link
          href="/transaction"
          className="flex flex-col items-center justify-center px-3 py-2"
        >
          <FaExchangeAlt
            className={`text-xl ${
              isActive('/transaction') ? 'text-white font-extrabold' : ''
            }`}
          />
          <span
            className={`text-xs ${
              isActive('/transaction') ? 'text-white font-extrabold' : ''
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
                isActive('/favorite') ? 'text-white font-extrabold' : ''
              }`}
            />
            <span
              className={`text-xs ${
                isActive('/favorite') ? 'text-white font-extrabold' : ''
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
              className={`text-xl ${
                isActive('/login') ? 'text-white font-extrabold' : ''
              }`}
            />
            <span
              className={`text-xs ${
                isActive('/login') ? 'text-white font-extrabold' : ''
              }`}
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
                isActive('/profile') ? 'text-white font-extrabold' : ''
              }`}
            />
            <span
              className={`text-xs ${
                isActive('/profile') ? 'text-white font-extrabold' : ''
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
