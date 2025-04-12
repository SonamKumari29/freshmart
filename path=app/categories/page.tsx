import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Fruits & Vegetables", image: "path_to_image", href: "/category/fruits-vegetables" },
  { name: "Dairy & Eggs", image: "path_to_image", href: "/category/dairy-eggs" },
  // Add more categories
];

export default function CategoriesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="group overflow-hidden">
              <div className="aspect-square relative">
                <Image src={category.image} alt={category.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 