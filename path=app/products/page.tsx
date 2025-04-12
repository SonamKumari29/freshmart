import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Organic Bananas",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Fresh Apples",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1568702846914-96b0d1217629?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Sweet Mangoes",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1553279753-0685b8c4d1a2?w=800&auto=format&fit=crop&q=60",
  }
];

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-xl font-bold mt-2">{product.price}</p>
              <div className="flex gap-2 mt-4">
                <Button variant="default" onClick={() => console.log('Add to cart')}>Add to Cart</Button>
                <Button variant="secondary">Buy Now</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 