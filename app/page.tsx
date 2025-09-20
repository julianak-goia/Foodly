import Header from "./components/header";
import Search from "./components/search";
import CategoryList from "./components/category-list";

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
    </>
  );
}
