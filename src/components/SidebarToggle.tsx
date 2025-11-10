"use client";
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaExchangeAlt,
  FaHeart,
  FaBlog,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";

export default function SidebarToggle() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 bg-[#60a5fa] text-white p-2 rounded-md shadow-lg hover:bg-blue-600 transition-colors"
      >
        <FaBars size={20} />
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-[#60a5fa] shadow-lg z-50 flex flex-col transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-6 border-b border-blue-300">
          <span className="text-white text-2xl font-extrabold tracking-wide">
            Minerva
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
                onClick={() => setSidebarOpen(false)}
              >
                <FaHome className="text-lg" />
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <Link
                href="/transaction"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
                onClick={() => setSidebarOpen(false)}
              >
                <FaExchangeAlt className="text-lg" />
                <span>Transaksi</span>
              </Link>
            </li>
            <li>
              <Link
                href="/favorite"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
                onClick={() => setSidebarOpen(false)}
              >
                <FaHeart className="text-lg" />
                <span>Favorit</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
                onClick={() => setSidebarOpen(false)}
              >
                <FaBlog className="text-lg" />
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-white hover:bg-blue-500"
                onClick={() => setSidebarOpen(false)}
              >
                <FaUser className="text-lg" />
                <span>Masuk</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
