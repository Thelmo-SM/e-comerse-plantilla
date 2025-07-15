
import HeaderSlider from "@/components/Funtional/Sidebar/HeaderSlider";
import HomeProducts from "@/features/products/components/HomeProducts";
import Banner from "@/components/UI/Banner";
import NewsLetter from "@/components/UI/NewsLetter";
import FeaturedProduct from "@/features/products/components/FeaturedProduct";


export default function Home() {
  return (
    <div className="px-6 md:px-16 lg:px-32">
      <HeaderSlider />
      <HomeProducts />
      <FeaturedProduct />
      <Banner />
      <NewsLetter />
    </div>
  );
}
