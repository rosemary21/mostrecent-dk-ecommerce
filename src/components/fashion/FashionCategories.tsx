import { fashionCategories } from "../../data";
import FashionCategoryCard from "./FashionCategoryCard";

export default function FashionCategories({
  category,
}: {
  category: "men" | "women" | "kids" | "all-brands";
}) {
  return (
    <section>
      <h3 className="font-plusJakartaSans font-bold md:text-[32px] text-[22px] capitalize mt-4 text-center">
        {category !== "all-brands" &&
          `find the best high quality outfit for ${category}`}
        {category === "all-brands" &&
          `find the best high quality outfit in one tap`}
      </h3>

      <div className="mt-4 grid md:grid-cols-4 grid-cols-2 gap-4">
        {fashionCategories.map((category) => (
          <FashionCategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}
