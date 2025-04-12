import { Card } from "@/components/ui/card";
import Image from "next/image";

const deals = [
  { name: "Discount on Dairy", image: "path_to_image", description: "Get 20% off on all dairy products." },
  // Add more deals
];

export default function DealsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <Card key={deal.name} className="p-6">
            <Image src={deal.image} alt={deal.name} width={500} height={300} className="mb-4" />
            <h3 className="text-xl font-semibold">{deal.name}</h3>
            <p className="text-muted-foreground">{deal.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
} 