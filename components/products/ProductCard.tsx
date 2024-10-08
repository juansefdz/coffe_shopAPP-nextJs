import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imgagePath = getImagePath(product.image);
  return (
    <div className="border bg-white min-h-full flex flex-col justify-between items-center">
      <Image
        src={imgagePath}
        alt={product.name}
        width={400}
        height={500}
        quality={100} //75 is default and dont need to be specified
      />

      <div className="p-5 flex items-center flex-col ">
        <h3 className="text-xl font-bold text-center">{product.name}</h3>
        <p className="mt-5 font-black text-2xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
