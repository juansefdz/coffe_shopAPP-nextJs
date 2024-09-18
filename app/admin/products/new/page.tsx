import AddproductForm from "@/components/products/AddproductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo producto </Heading>
      <AddproductForm>
        <ProductForm />
      </AddproductForm>
    </>
  );
}
