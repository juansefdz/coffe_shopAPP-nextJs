import { redirect } from "next/navigation";
import ProductPagination from "@/components/products/ProductPagination";
import ProductTable from "@/components/products/productsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import ProductSearch from "@/components/products/ProductSerarch";

async function productCount() {
  const count = await prisma.product.count();
  return count;
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true,
    },
  });

  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPageAdmin({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = +searchParams.page || 1;
  const pageSize = 10;

  if (page < 0) {
    redirect("/admin/products");
  }

  const productsData = getProducts(page, pageSize);
  const totalProductsData = productCount();
  const [products, totalProducts] = await Promise.all([
    productsData,
    totalProductsData,
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) {
    redirect("/admin/products");
  }

  return (
    <>
      <Heading>Administrar productos</Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 ">
        <Link
          href={'/admin/products/new'}
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center cursor-pointer"
        >Crear Producto
        </Link>
        <ProductSearch />

      </div>
      <ProductTable products={products} />
      <ProductPagination page={page} totalPages={totalPages} />
    </>
  );
}
