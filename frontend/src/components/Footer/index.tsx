import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const paymentLogos = [
  `https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fqris.png&w=48&q=75`,
  `https://assets.tripay.co.id/upload/payment-icon/ZT91lrOEad1582929126.png`,
  `https://assets.tripay.co.id/upload/payment-icon/szezRhAALB1583408731.png`,
  `https://assets.tripay.co.id/upload/payment-icon/n22Qsh8jMa1583433577.png`,
  `https://assets.tripay.co.id/upload/payment-icon/8WQ3APST5s1579461828.png`,
  'https://assets.tripay.co.id/upload/payment-icon/T9Z012UE331583531536.png',
  'https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fbca.png&w=64&q=75',
  `https://assets.tripay.co.id/upload/payment-icon/KHcqcmqVFQ1607091889.png`,
  'https://assets.tripay.co.id/upload/payment-icon/GGwwcgdYaG1611929720.png',
  'https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fpayment%2Fshopeepay.png&w=64&q=75',
  `	https://assets.tripay.co.id/upload/payment-icon/sj3UHLu8Tu1655719621.png`,
  'https://assets.tripay.co.id/upload/payment-icon/WtEJwfuphn1614003973.png',
  'https://assets.tripay.co.id/upload/payment-icon/tEclz5Assb1643375216.png',
  `https://assets.tripay.co.id/upload/payment-icon/ysiSToLvKl1644244798.png`,
  'https://assets.tripay.co.id/upload/payment-icon/F3pGzDOLUz1644245546.png',
  'https://assets.tripay.co.id/upload/payment-icon/3IXRIbogu11664370160.png',
  `https://assets.tripay.co.id/upload/payment-icon/jiGZMKp2RD1583433506.png`,
  'https://assets.tripay.co.id/upload/payment-icon/zNzuO5AuLw1583513974.png',
  'https://assets.tripay.co.id/upload/payment-icon/aQTdaUC2GO1593660384.png',
];

const Footer: React.FC = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 250"
        xmlns="http://www.w3.org/2000/svg"
        className="transition delay-150 duration-300 ease-in-out bg-transparent print:hidden -my-1"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="
      M0,200 
      C 80,230 160,240 240,220 
      C 320,200 400,150 480,180 
      C 560,210 640,250 720,230 
      C 800,210 880,140 960,180 
      C 1040,220 1120,250 1200,210 
      C 1280,170 1360,210 1440,200 
      L1440,250 L0,250 Z
    "
          fill="#60a5fa"
          fillOpacity="1"
        />
      </svg>
      <footer className="bg-[#60a5fa]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* 1. Logo */}
            <div className="col-span-2 flex flex-col items-start -mt-5">
              <img
                src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Fillustration%2Fitemku%2Fhome%2Fdesktop-footer.png&w=414&q=75"
                alt="Logo"
                className="w-2/3 mb-10"
              />
              <p className="text-m text-blue-50">
                <span className="font-bold">Minerva</span> adalah platform top
                up game dan voucher digital yang menyediakan berbagai pilihan
                produk digital dengan proses mudah, harga murah, transaksi
                cepat, dan keamanan terjamin. Nikmati pengalaman belanja digital
                yang nyaman dan terpercaya bersama Minerva!
              </p>
            </div>
            {/* 3. Reseller */}
            <div className="col-span-1 flex flex-col">
              <h3 className="font-bold text-base mb-5 text-blue-50">
                Kemitraan
              </h3>
              <ul className="space-y-3 text-sm text-blue-50">
                <li>
                  <a href="#" className="hover:font-bold">
                    Tentang Reseller
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:font-bold">
                    Daftar Reseller
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:font-bold">
                    FAQ Reseller
                  </a>
                </li>
              </ul>

              <h3 className="font-bold text-base mb-5 text-blue-50 mt-8">
                Lainnya
              </h3>
              <ul className="space-y-3 text-sm text-blue-50">
                <li>
                  <a href="#" className="hover:font-bold">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:font-bold">
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:font-bold">
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
            </div>
            {/* 4. Metode Pembayaran */}
            <div className="col-span-1 flex flex-col">
              <h3 className="font-bold text-base mb-5 text-blue-50">
                Metode Pembayaran
              </h3>
              <div className="flex flex-wrap gap-2">
                {paymentLogos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Metode Pembayaran"
                    className="w-12 h-12 object-contain"
                  />
                ))}
              </div>
            </div>

            {/* 4. Ikuti Kami */}
            <div className="col-span-1 flex flex-col items-start">
              <h3 className="font-bold text-base mb-5 text-blue-50">
                Ikuti Kami
              </h3>
              <div className="flex gap-6 mb-6 text-blue-50">
                <a href="#" aria-label="Facebook">
                  <FaFacebook size={40} />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram size={40} />
                </a>
                <a href="#" aria-label="X">
                  <FaXTwitter size={40} />
                </a>
              </div>
              <div className="flex gap-6 mb-6 text-blue-50">
                <a href="#" aria-label="YouTube">
                  <FaYoutube size={40} />
                </a>
                <a href="#" aria-label="Tiktok">
                  <FaTiktok size={40} />
                </a>
                <a href="#" aria-label="Discord">
                  <FaDiscord size={40} />
                </a>
              </div>
            </div>

            {/* 5. Download App */}
            <div className="col-span-1 flex flex-col gap-5 items-start">
              <h3 className="font-bold text-base text-blue-50">Download</h3>
              <a href="#">
                <img
                  src="/app-download/playstore.png"
                  alt="download via playstore"
                />
              </a>
              <a href="#">
                <img
                  src="/app-download/appstore.png"
                  alt="download via playstore"
                />
              </a>
            </div>

            <div className="col-span-2 flex flex-col items-start">
              <div className="mt-8 text-center text-xs text-blue-50">
                &copy; {new Date().getFullYear()} PT. Kuli Digital Indonesia.
                All rights reserved.
              </div>
            </div>

            {/* 6. Gambar dekorasi bawah (memakan grid 5 dan 6) */}
            <div className="col-span-2 justify-center items-end md:col-start-5 -mt-60 hidden xl:block">
              <img
                src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Fillustration%2Fitemku%2Fhome%2Fdesktop-footer.png&w=414&q=75"
                alt="Decoration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
