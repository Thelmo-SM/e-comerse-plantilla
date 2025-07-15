'use client';

import React from 'react';
import { MapPin, Trash2, Pencil, Plus } from 'lucide-react';
import ModalForm from '@/components/UI/Modals/ModalForm';
import { useModalForm } from '@/hooks/useModalForm';
import AddAddress from './AddAddress';

const AllAddresses: React.FC = () => {

    const { isOpen, openModal, closeModal } = useModalForm();


  const addresses = [
    {
      id: 1,
      fullName: 'Juan Pérez',
      phoneNumber: '809-555-1234',
      pincode: '57000',
      area: 'Calle Duarte #45',
      city: 'Puerto Plata',
      state: 'República Dominicana',
    },
    {
      id: 2,
      fullName: 'María García',
      phoneNumber: '809-555-5678',
      pincode: '11000',
      area: 'Av. Bolívar #98',
      city: 'Santo Domingo',
      state: 'República Dominicana',
    },
  ];

  return (
    <section className="p-6 md:p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-blue-900">Mis Direcciones</h2>
        <button
          onClick={openModal}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-800 transition"
        >
          <Plus size={16} />
          Agregar dirección
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white rounded-lg shadow-md p-5 border border-gray-200 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-blue-900 mb-3">
              <MapPin size={20} />
              <h3 className="text-lg font-medium">Dirección #{address.id}</h3>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p><span className="font-medium text-gray-700">Nombre:</span> {address.fullName}</p>
              <p><span className="font-medium text-gray-700">Teléfono:</span> {address.phoneNumber}</p>
              <p><span className="font-medium text-gray-700">Código Postal:</span> {address.pincode}</p>
              <p><span className="font-medium text-gray-700">Dirección:</span> {address.area}</p>
              <p><span className="font-medium text-gray-700">Ciudad:</span> {address.city}</p>
              <p><span className="font-medium text-gray-700">Provincia:</span> {address.state}</p>
            </div>

            <div className="flex justify-end gap-4 mt-5">
              <button
                title="Editar"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Pencil size={18} />
              </button>
              <button
                title="Eliminar"
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ModalForm isOpens={isOpen} closeModal={closeModal}>
        <AddAddress />
      </ModalForm>
    </section>
  );
};

export default AllAddresses;
