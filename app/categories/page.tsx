"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
    subcategories: ["Fresh Fruits", "Fresh Vegetables", "Organic"],
    priceRange: [20, 500]
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da",
    subcategories: ["Milk", "Cheese", "Yogurt", "Eggs"],
    priceRange: [30, 400]
  },
  {
    id: 3,
    name: "Meat & Seafood",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
    subcategories: ["Chicken", "Mutton", "Fish", "Seafood"],
    priceRange: [100, 800]
  },
  {
    id: 4,
    name: "Bakery & Snacks",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    subcategories: ["Bread", "Cakes", "Cookies", "Chips"],
    priceRange: [50, 600]
  },
  {
    id: 5,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
    subcategories: ["Juices", "Soft Drinks", "Tea", "Coffee"],
    priceRange: [40, 300]
  },
  {
    id: 6,
    name: "Personal Care",
    image: "https://images.unsplash.com/photo-1522338140262-f46f591c8a02",
    subcategories: ["Shampoo", "Soap", "Skincare", "Haircare"],
    priceRange: [60, 1000]
  },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredCategories, setFilteredCategories] = useState(categories);

  // Apply filters
  useEffect(() => {
    let filtered = categories;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.subcategories.some(sub => 
          sub.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((category) =>
        selectedCategories.includes(category.name)
      );
    }

    // Apply price range filter
    filtered = filtered.filter((category) =>
      category.priceRange[0] >= priceRange[0] &&
      category.priceRange[1] <= priceRange[1]
    );

    setFilteredCategories(filtered);
  }, [searchQuery, selectedCategories, priceRange]);

  return (
    <div className="container py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Categories
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card className="p-6 h-fit lg:sticky lg:top-20 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Filters</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Search</h3>
              <Input
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-50 dark:bg-gray-700"
              />
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Price Range</h3>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={1000}
                step={10}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-900 dark:text-white">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.name)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCategories([...selectedCategories, category.name]);
                        } else {
                          setSelectedCategories(
                            selectedCategories.filter((c) => c !== category.name)
                          );
                        }
                      }}
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/products?category=${category.name.toLowerCase()}`}>
                  <Card className="overflow-hidden group cursor-pointer">
                    <div className="relative h-48">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((subcategory) => (
                          <span
                            key={subcategory}
                            className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                          >
                            {subcategory}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 