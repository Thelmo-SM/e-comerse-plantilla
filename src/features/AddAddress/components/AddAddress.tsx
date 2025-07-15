'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';
import { DivForm, FormUI, InputUI, SubmitUI } from '@/components/UI/Forms';

interface Address {
  fullName: string;
  phoneNumber: string;
  pincode: string;
  area: string;
  city: string;
  state: string;
}

const AddAddress: React.FC = () => {
  const [address, setAddress] = useState<Address>({
    fullName: '',
    phoneNumber: '',
    pincode: '',
    area: '',
    city: '',
    state: '',
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la dirección
    console.log('Address submitted:', address);
  };

  const onChangeHandler = (field: keyof Address) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddress((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="flex items-center justify-center w-full m-auto">
      <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between w-full">
        <FormUI onSubmit={onSubmitHandler} className="w-full max-w-lg">
          <p className="text-2xl md:text-3xl text-gray-800">
            Add Shipping <span className="font-semibold text-blue-900">Address</span>
          </p>
          <DivForm className="space-y-3 mt-10">
            <InputUI
              className="px-2 py-2.5 w-full rounded border border-gray-500/30 text-gray-500 outline-none transition focus:border-blue-900"
              type="text"
              placeholder="Full name"
              onChange={onChangeHandler('fullName')}
              value={address.fullName}
            />
            <InputUI
              className="px-2 py-2.5 w-full rounded border border-gray-500/30 text-gray-500 outline-none transition focus:border-blue-900"
              type="text"
              placeholder="Phone number"
              onChange={onChangeHandler('phoneNumber')}
              value={address.phoneNumber}
            />
            <InputUI
              className="px-2 py-2.5 w-full rounded border border-gray-500/30 text-gray-500 outline-none transition focus:border-blue-900"
              type="text"
              placeholder="Pin code"
              onChange={onChangeHandler('pincode')}
              value={address.pincode}
            />
            <textarea
              className="px-2 py-2.5 w-full rounded border border-gray-500/30 text-gray-500 outline-none resize-none transition focus:border-blue-900"
              rows={4}
              placeholder="Address (Area and Street)"
              onChange={onChangeHandler('area')}
              value={address.area}
            />
            <div className="flex space-x-3">
              <InputUI
                className="px-2 py-2.5 w-full rounded border border-gray-500/30 text-gray-500 outline-none transition focus:border-blue-900"
                type="text"
                placeholder="City/District/Town"
                onChange={onChangeHandler('city')}
                value={address.city}
              />
              <InputUI
                className="px-2 py-2.5 w-full rounded border border-gray-500/30 text-gray-500 outline-none transition focus:border-blue-900"
                type="text"
                placeholder="State"
                onChange={onChangeHandler('state')}
                value={address.state}
              />
            </div>
          </DivForm>
          <SubmitUI
            type="submit"
            className="mt-6 max-w-sm w-full py-3 bg-blue-900 text-white uppercase hover:bg-blue-800"
          >
            Save address
          </SubmitUI>
        </FormUI>

        <Image
          className="md:mr-16 mt-16 md:mt-0"
          src={assets.my_location_image}
          alt="my_location_image"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};

export default AddAddress;
