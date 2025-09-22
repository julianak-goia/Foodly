import Header from "./components/header";
import Search from "./components/search";
import CategoryList from "./components/category-list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.svg"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
        />
      </div>
    </>
  );
}
