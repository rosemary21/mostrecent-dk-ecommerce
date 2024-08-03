import { fashionCategories } from "../../data";
import FashionCategoryCard from "./FashionCategoryCard";

export default function FashionCategories() {
  return (
    <section>
      <h3 className="font-plusJakartaSans font-bold md:text-[32px] text-[22px]">
        Popular Categories
      </h3>

      <div className="mt-4 grid md:grid-cols-4 grid-cols-2 gap-4">
        {fashionCategories.map((category) => (
          <FashionCategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}
