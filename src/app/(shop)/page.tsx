import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2 m-2 md:m-0"
      />

      <ProductGrid products={products} />
    </>
  );
}
