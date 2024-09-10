import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white ">


        <Image 
            src={`/products/${product.image}.jpg`}
            alt={product.name}
            width={400}
            height={500}
        />


      <div className="p-5 ">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-2xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
}
