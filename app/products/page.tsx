'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingBasket } from "lucide-react"
import Image from "next/image"

const categories = [
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Meat & Fish",
  "Bakery",
  "Beverages",
  "Snacks",
]

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 2.99,
    category: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Fresh Milk",
    price: 3.49,
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=60",
  },
  // Add more products...
]

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 50])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Search</h3>
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <Slider
              defaultValue={[0, 50]}
              max={50}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category])
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== category))
                      }
                    }}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>
                    <Button size="sm" variant="secondary">
                      <ShoppingBasket className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}