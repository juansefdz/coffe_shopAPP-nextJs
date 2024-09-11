import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white min-h-[600px] flex flex-col justify-between items-center">
      <Image
        src={`/products/${product.image}.jpg`}
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
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        >Agregar</button>
      </div>
    </div>
  );
}
