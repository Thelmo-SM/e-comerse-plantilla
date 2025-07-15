'use client';

import React, { useState } from "react";
import { addressDummyData } from "@/assets/assets";
import ModalForm from '@/components/UI/Modals/ModalForm';
import { useModalForm } from '@/hooks/useModalForm';
import AddAddress from "@/features/AddAddress/components/AddAddress";

interface Address {
  fullName: string;
  phoneNumber?: string;
  pincode?: string | number;
  area: string;
  city: string;
  state: string;
}


const OrderSummary: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userAddresses] = useState<Address[]>(addressDummyData);
  const { isOpen, openModal, closeModal } = useModalForm();

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full md:w-96 bg-blue-100 p-5 rounded-md shadow-sm">
      <h2 className="text-xl md:text-2xl font-medium text-blue-900">Order Summary</h2>
      <hr className="border-gray-600/30 my-5" />

      <div className="space-y-6">
        {/* Address Selector */}
        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm border">
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-blue-200 text-gray-700 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              type="button"
            >
              <span>
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"}
              </span>
              <svg
                className={`w-5 h-5 inline float-right transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-0" : "-rotate-90"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#6B7280"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-blue-50 border shadow-md mt-1 z-10 py-1.5 max-h-60 overflow-auto">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-blue-200 cursor-pointer text-gray-600"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </li>
                ))}
                <li
                  className="px-4 py-2 hover:bg-blue-200 cursor-pointer text-center text-blue-900 font-semibold"
                >
                  <button onClick={openModal}>
                  + Add New Address
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Promo Code */}
        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">Promo Code</label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-grow w-full outline-none p-2.5 text-gray-600 border"
            />
            <button className="bg-blue-900 text-white px-9 py-2 hover:bg-blue-800" type="button">
              Apply
            </button>
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        {/* Totals */}
        <div className="space-y-4">
          <div className="flex justify-between text-base font-medium">
            <p className="uppercase text-gray-600">Items 3</p>
            <p className="text-gray-800">$299.97</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping Fee</p>
            <p className="font-medium text-gray-800">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Tax (2%)</p>
            <p className="font-medium text-gray-800">$6</p>
          </div>
          <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p className="text-blue-900">Total</p>
            <p className="text-blue-900">$305.97</p>
          </div>
        </div>
      </div>

      <button
        className="w-full bg-blue-900 text-white py-3 mt-5 hover:bg-blue-800"
        type="button"
      >
        Place Order
      </button>
      <ModalForm isOpens={isOpen} closeModal={closeModal}>
        <AddAddress />
      </ModalForm>
    </div>
  );
};

export default OrderSummary;
