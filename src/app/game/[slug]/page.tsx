"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

const GamePage: React.FC = () => {
  const { slug } = useParams();
  const gameName = slug
    ? (slug as string)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
    : "Game";

  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const diamondPackages = [
    { id: 1, name: "100 Diamonds", price: "Rp 10,000" },
    { id: 2, name: "250 Diamonds", price: "Rp 25,000" },
    { id: 3, name: "500 Diamonds", price: "Rp 50,000" },
    { id: 4, name: "1000 Diamonds", price: "Rp 100,000" },
    { id: 5, name: "2500 Diamonds", price: "Rp 250,000" },
  ];

  const paymentMethods = [
    { id: 1, name: "Q-RIS", icon: "🏦" },
    { id: 2, name: "E-Wallet", icon: "📱" },
    { id: 3, name: "Convenience Store", icon: "💳" },
    { id: 4, name: "Virtual Account", icon: "💵" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-black">
        {gameName} Top-Up
      </h1>

      {/* Container 1: Tutorial */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          How to Top Up
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-black">
          <li>Enter your User ID and Server ID from the game.</li>
          <li>Select the diamond package you want to purchase.</li>
          <li>Provide your WhatsApp number for confirmation.</li>
          <li>
            Choose your preferred payment method and complete the transaction.
          </li>
          <li>
            Diamonds will be credited to your account within 5-10 minutes.
          </li>
        </ol>
      </div>

      {/* Container 2: Form Inputs */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Account Information
        </h2>
        <div className="space-y-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-black"
              >
                User ID
              </label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your User ID"
              />
            </div>
            <div>
              <label
                htmlFor="serverId"
                className="block text-sm font-medium text-gray-700"
              >
                Server ID
              </label>
              <input
                type="text"
                id="serverId"
                value={serverId}
                onChange={(e) => setServerId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your Server ID"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-black"
          >
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your WhatsApp number"
          />
        </div>
      </div>

      {/* Container 3: Pricelist */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Diamond Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {diamondPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-medium text-black">{pkg.name}</h3>
              <p className="text-gray-600">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Container 4: Payment Methods */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Payment Methods
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-3xl mb-2">{method.icon}</div>
              <p className="font-medium text-black">{method.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
