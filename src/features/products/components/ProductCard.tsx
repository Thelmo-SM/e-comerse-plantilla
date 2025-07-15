'use client';

import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

interface Product {
  id: string;
  image: string[];
  name: string;
  description: string;
  offerPrice: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currency } = useAppContext();

  // const handleClick = () => {
  //   router.push(`/product/${product.id}`);
  //   scrollTo(0, 0);
  // };

  return (
    <Link href={`/products/${product.id}`} className="block" >
    <article
      className="flex flex-col items-center gap-2 w-full max-w-[220px] cursor-pointer mx-auto"
    >
      <div className="relative w-full h-48 rounded-lg bg-gray-100 overflow-hidden group">
        <Image
          src={product.image[0]}
          alt={`Imagen de ${product.name}`}
          width={220}
          height={220}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
        />
        <button
          aria-label="Guardar producto en favoritos"
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md"
        >
          <Image
            src={assets.heart_icon}
            alt=""
            width={12}
            height={12}
          />
        </button>
      </div>

      <div className="w-full text-center">
        <h3 className="text-sm font-semibold truncate">{product.name}</h3>
        <p className="text-xs text-gray-500 truncate">{product.description}</p>

        <div className="flex justify-center items-center gap-1 mt-1" aria-label="Valoración del producto">
          <p className="text-xs">4.5</p>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={index < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
                width={12}
                height={12}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-medium">
            {currency}
            {product.offerPrice}
          </p>
          <button
            className="hidden sm:block px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition"
            aria-label={`Comprar ${product.name}`}
          >
            Buy now
          </button>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default ProductCard;
