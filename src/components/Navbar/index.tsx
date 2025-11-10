"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaHome,
  FaExchangeAlt,
  FaHeart,
} from "react-icons/fa";
import type { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();
  const isAuthenticated = true;
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2 text-white text-xl font-bold tracking-wide"
              >
                <img
                  src="/minerva-white.svg"
                  alt="Minerva Logo"
                  className="h-8 w-8"
                />
                MINERVA
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-white text-gray-600"
                    : "text-white hover:bg-gray-500"
                }`}
              >
                Beranda
              </Link>
              <Link
                href="/transaction"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/transaction")
                    ? "bg-white text-gray-600"
                    : "text-white hover:bg-gray-500"
                }`}
              >
                Transaksi
              </Link>
              {isAuthenticated && (
                <Link
                  href="/favorite"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/favorite")
                      ? "bg-white text-gray-600"
                      : "text-white hover:bg-gray-500"
                  }`}
                >
                  Favorit
                </Link>
              )}
              <Link
                href="/#"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/#")
                    ? "bg-white text-gray-600"
                    : "text-white hover:bg-gray-500"
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <Link
                  href="/login"
                  className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Masuk
                </Link>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    href="/profile"
                    className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <FaUser />
                    Profil
                  </Link>
                  <button className="text-white hover:bg-gray-500 p-2 rounded-md transition-colors">
                    <FaShoppingCart size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 h-16 z-40 relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 transition-colors"
        >
          <FaBars size={20} />
        </button>
        <div className="flex justify-center items-center h-full">
          <Link
            href="/"
            className="flex items-center gap-2 text-white text-xl font-bold tracking-wide"
          >
            <img
              src="/minerva-white.svg"
              alt="Minerva Logo"
              className="h-6 w-6"
            />
            MINERVA
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg z-50 flex flex-col transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:bg-gray-500 p-2 rounded-md transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center py-4 border-b border-gray-400">
          <Link
            href="/"
            className="flex items-center gap-2 text-white text-xl font-bold tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/minerva-white.svg"
              alt="Minerva Logo"
              className="h-8 w-8"
            />
            MINERVA
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-white text-gray-600 font-bold"
                    : "text-white hover:bg-gray-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <FaHome size={20} />
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/transaction"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/transaction")
                    ? "bg-white text-gray-600 font-bold"
                    : "text-white hover:bg-gray-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <FaExchangeAlt size={20} />
                Transaksi
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link
                  href="/favorite"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive("/favorite")
                      ? "bg-white text-gray-600 font-bold"
                      : "text-white hover:bg-gray-500"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <FaHeart size={20} />
                  Favorit
                </Link>
              </li>
            )}
            <li>
              <Link
                href="/#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/#")
                    ? "bg-white text-gray-600 font-bold"
                    : "text-white hover:bg-gray-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            {!isAuthenticated ? (
              <li>
                <Link
                  href="/login"
                  className="block px-4 py-3 rounded-lg transition-colors text-white hover:bg-gray-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Masuk
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-3 rounded-lg transition-colors text-white hover:bg-gray-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profil
                  </Link>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500">
                    <FaShoppingCart className="inline mr-2" />
                    Keranjang
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
