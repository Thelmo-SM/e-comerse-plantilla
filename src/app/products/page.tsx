export {default} from './Products';


export const metadata = {
  title: 'Todos los productos - Mi tienda',
  description: 'Explora nuestra selección de productos tecnológicos, consolas, TV y accesorios en nuestra tienda en línea.',
  keywords: ['productos', 'tecnología', 'consolas', 'TV', 'accesorios', 'ecommerce'],
  authors: [{ name: 'Tu Nombre o Empresa', url: 'https://tu-sitio.com' }],
  openGraph: {
    title: 'Todos los productos - Mi tienda',
    description: 'Explora nuestra selección de productos tecnológicos, consolas, TV y accesorios en nuestra tienda en línea.',
    url: 'https://tu-sitio.com/products',
    siteName: 'Mi tienda',
    images: [
      {
        url: 'https://tu-sitio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Todos los productos - Mi tienda',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todos los productos - Mi tienda',
    description: 'Explora nuestra selección de productos tecnológicos, consolas, TV y accesorios en nuestra tienda en línea.',
    creator: '@TuUsuarioTwitter',
    images: ['https://tu-sitio.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};