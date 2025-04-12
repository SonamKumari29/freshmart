import { Card, Button } from "@/components/ui";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&auto=format&fit=crop&q=60",
  },
  // More products
];

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-xl font-bold">{product.price}</p>
              <div className="flex gap-2 mt-4">
                <Button variant="primary">Add to Cart</Button>
                <Button variant="secondary">Buy Now</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 