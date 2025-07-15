'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import {
  InputUI,
  FormUI,
  LabelUI,
  SubmitUI,
  DivForm,
} from '@/components/UI/Forms';

const AddProductComponent: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      description,
      category,
      price,
      offerPrice,
      images: files,
    };
    console.log('Producto agregado:', data);
  };

  return (
    <section className="min-h-screen p-6 md:p-10 w-full">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">Agregar Producto</h2>

      <FormUI onSubmit={handleSubmit}>
        {/* Imágenes */}
        <div>
          <p className="text-base font-medium">Imágenes del producto</p>
          <div className="flex flex-wrap items-center gap-3 mt-2 pb-2">
            {[...Array(4)].map((_, index) => (
              <LabelUI key={index}>
                <InputUI
                  type="file"
                  id={`image${index}`}
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const updated = [...files];
                    const file = e.target.files?.[0];
                    if (file) updated[index] = file;
                    setFiles(updated);
                  }}
                />
                <Image
                  className="w-24 h-24 object-contain cursor-pointer border border-gray-300 rounded"
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : assets.upload_area
                  }
                  alt={`product-img-${index}`}
                  width={100}
                  height={100}
                />
              </LabelUI>
            ))}
          </div>
        </div>

        {/* Nombre */}
        <DivForm className="flex flex-col gap-1">
          <LabelUI htmlFor="product-name" className="text-base font-medium">
            Nombre del producto
          </LabelUI>
          <InputUI
            id="product-name"
            type="text"
            placeholder="Escribe aquí"
            className="outline-none py-2.5 px-4 rounded border border-gray-300 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </DivForm>

        {/* Descripción */}
        <DivForm className="flex flex-col gap-1">
          <LabelUI htmlFor="product-description" className="text-base font-medium">
            Descripción
          </LabelUI>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none py-2.5 px-4 rounded border border-gray-300 resize-none w-full"
            placeholder="Escribe aquí"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </DivForm>

        {/* Categoría, Precio, Oferta */}
        <div className="flex flex-wrap gap-5">
          <DivForm className="flex flex-col gap-1 w-36">
            <LabelUI htmlFor="category" className="text-base font-medium">
              Categoría
            </LabelUI>
            <select
              id="category"
              className="outline-none py-2.5 px-3 rounded border border-gray-300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Earphone">Earphone</option>
              <option value="Headphone">Headphone</option>
              <option value="Watch">Watch</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Camera">Camera</option>
              <option value="Accessories">Accessories</option>
            </select>
          </DivForm>

          <DivForm className="flex flex-col gap-1 w-36">
            <LabelUI htmlFor="product-price" className="text-base font-medium">
              Precio
            </LabelUI>
            <InputUI
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none py-2.5 px-3 rounded border border-gray-300"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </DivForm>

          <DivForm className="flex flex-col gap-1 w-36">
            <LabelUI htmlFor="offer-price" className="text-base font-medium">
              Precio de oferta
            </LabelUI>
            <InputUI
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none py-2.5 px-3 rounded border border-gray-300"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              required
            />
          </DivForm>
        </div>

        {/* Botón */}
        <SubmitUI type="submit">
          AGREGAR
        </SubmitUI>
      </FormUI>
    </section>
  );
};

export default AddProductComponent;
