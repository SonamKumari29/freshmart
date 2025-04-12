import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border p-4">
      <Image src={product.image} alt={product.name} width={250} height={250} />
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <Button onClick={() => console.log('Add to cart')}>Add to Cart</Button>
      </div>
    </div>
  );
}; 