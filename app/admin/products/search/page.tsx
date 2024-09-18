import ProductSearch from "@/components/products/ProductSerarch";
import ProductTable from "@/components/products/productsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchProducts(search: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPageAdmin({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search);
  return (
    <>
      <Heading>resultados busqueda: {searchParams.search}</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-end gap-5 ">
        <ProductSearch />
      </div>
      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-lg">
          {" "}
          No hay resultados en la busqueda!
        </p>
      )}
    </>
  );
}
