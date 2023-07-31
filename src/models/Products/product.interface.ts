import { ProductBrandInfo } from "./productBrand.interface";
import { ProductColors } from "./productColor.interface";
import { ProductTypeInfo } from "./productType.interface";

export interface Product {
  id: string;
  typeId: number;
  brandId: number;
  sku: string;
  name: string;
  value: number;
  stockAmount: number;
  createdAt: Date;
  updatedAt: Date;
  type: ProductTypeInfo;
  brand: ProductBrandInfo;
  colors: Array<ProductColors>;
}
