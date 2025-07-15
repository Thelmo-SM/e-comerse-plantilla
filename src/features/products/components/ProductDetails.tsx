'use client';

import { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import ProductCard from './ProductCard';
import { useAppContext } from '@/context/AppContext';
import type { ProductType } from '@/types/product';
import Loading from '@/components/UI/Loading';

type Props = {
  product: ProductType;
  products: ProductType[];
};

export const ProductDetails = ({ product, products }: Props) => {
  const {  router } = useAppContext();
  const [mainImage, setMainImage] = useState<string | null>(null);

  if (!product) return <Loading />;

  return (
    <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Imágenes */}
        <div className="px-5 lg:px-16 xl:px-20">
          <div className="rounded-md overflow-hidden bg-blue-200/10 mb-4">
            <Image
              src={mainImage || product.image[0]}
              alt={product.name}
              className="w-full h-auto object-cover mix-blend-multiply"
              width={1280}
              height={720}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.image.map((img, i) => (
              <div
                key={i}
                onClick={() => setMainImage(img)}
                className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
              >
                <Image
                  src={img}
                  alt={product.name}
                  className="w-full h-auto object-cover mix-blend-multiply rounded-md"
                  width={1280}
                  height={720}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Detalles del producto */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium text-blue-900/90 mb-4">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Image key={i} className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
              ))}
              <Image className="h-4 w-4" src={assets.star_dull_icon} alt="star_dull_icon" />
            </div>
            <p className='text-blue-900'>(4.5)</p>
          </div>
          <p className="text-gray-600 mt-3">{product.description}</p>
          <p className="text-blue-900 text-3xl font-medium mt-6">
            ${product.offerPrice}
            <span className="text-base font-normal text-gray-800/60 line-through ml-2">${product.price}</span>
          </p>
          <hr className="bg-gray-600 my-6" />
          <table className="table-auto border-collapse w-full max-w-72">
            <tbody>
              <tr><td className="text-gray-600 font-medium">Brand</td><td className="text-gray-800/50">Generic</td></tr>
              <tr><td className="text-gray-600 font-medium">Color</td><td className="text-gray-800/50">Multi</td></tr>
              <tr><td className="text-gray-600 font-medium">Category</td><td className="text-gray-800/50">{product.category}</td></tr>
            </tbody>
          </table>
          <div className="flex items-center mt-10 gap-4">
            <button
              
              className="rounded-md w-full py-3.5 bg-blue-800 text-blue-50/80 hover:bg-blue-900 transition cursor-pointer"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                
                router.push('/cart');
              }}
              className="rounded-md w-full py-3.5 bg-blue-200 text-gray-800 hover:bg-blue-800 hover:text-blue-50 transition cursor-pointer"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Productos destacados */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-4 mt-16">
          <p className="text-3xl font-medium text-gray-800">
            Featured <span className="font-medium text-blue-900">Products</span>
          </p>
          <div className="w-28 h-0.5 bg-blue-900 mt-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
          {products.slice(0, 5).map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
        <button 
        className="px-8 py-2.5 border border-gray-300 text-blue-900 rounded-md shadow-sm hover:bg-blue-200 transition-colors duration-200"
        >
          Ver más productos
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;