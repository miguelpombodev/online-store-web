import { useState } from "react";
import { CategoriesNav, CategoryItem } from "./styles";

export function ProductCategories() {
  const [categories, setCategories] = useState<string[]>([
    "Women",
    "Men",
    "Sports",
    "Kids",
    "Beauty",
    "Outlet",
  ]);

  return (
    <CategoriesNav>
      {categories.map((category, idx) => (
        <CategoryItem key={idx}>{category}</CategoryItem>
      ))}
    </CategoriesNav>
  );
}
