import { notFound } from 'next/navigation';
import ProductDetails from '@/features/products/components/ProductDetails';
import { getProducts } from '@/actions';
import type { ProductType } from '@/types/product';
import { mockProducts } from '@/utils/data/arrayProducts';

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const products: ProductType[] = mockProducts //await getProducts();
  const product = products.find((p) => p.id === params.productId);

  if (!product) return notFound();

  return (
    <ProductDetails product={product} products={products} />
  );
}
