import { db } from "../lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  //pegar as categorias do banco de dados
  const categories = await db.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>

    // renderizar um item para cada categoria
  );
};

export default CategoryList;
