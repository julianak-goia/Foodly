import Header from "./components/header";
import Search from "./components/search";
import CategoryList from "./components/category-list";
import Image from "next/image";
import ProductList from "./components/product-list";
import { Button } from "./components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./lib/prisma";

const Home = async () => {
  const products = await db.product.findMany({
    //pegar os produtos que possue desconto - for maior que 0
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 15,
    // include - traz os relacionamentos que adicionamos no schema prisma, no caso o restaurant
    include: {
      restaurant: {
        // consigo selecionar somente o que eu quero do relacionamento, no caso apenas o nome
        select: {
          name: true,
        },
      },
    },
  });

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

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
