import { db } from "../lib/prisma";
import ProductItem from "./product-item";

const ProductList = async () => {
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
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
