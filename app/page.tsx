"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Clock, Truck, Leaf, Star, Percent, Package, ArrowRight, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    count: 45
  },
  {
    name: "Fruits",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    count: 32
  },
  {
    name: "Dairy Products",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    count: 28
  },
  {
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    count: 15
  }
]

const deals = [
  {
    title: "Fresh Vegetables Combo",
    price: "₹299",
    originalPrice: "₹399",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    discount: "25% OFF"
  },
  {
    title: "Fruit Basket",
    price: "₹499",
    originalPrice: "₹699",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    discount: "30% OFF"
  },
  {
    title: "Dairy Essentials",
    price: "₹199",
    originalPrice: "₹249",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    discount: "20% OFF"
  }
]

const featuredProducts = [
  {
    title: "Organic Tomatoes",
    price: "₹49",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    rating: 4.5,
    reviews: 120
  },
  {
    title: "Fresh Apples",
    price: "₹89",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    rating: 4.8,
    reviews: 95
  },
  {
    title: "Organic Milk",
    price: "₹65",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    rating: 4.7,
    reviews: 150
  },
  {
    title: "Fresh Juice",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    rating: 4.6,
    reviews: 80
  }
]

const features = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "Get your groceries delivered within 30 minutes"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Fresh Products",
    description: "100% fresh and organic products"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round the clock customer support"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Best Quality",
    description: "Quality assured products"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"
          alt="Fresh Groceries"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="container relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl font-bold mb-4">
              Fresh Groceries Delivered to Your Doorstep
            </h1>
            <p className="text-lg mb-8">
              Shop from a wide range of fresh vegetables, fruits, dairy products and more
            </p>
            <Link href="/categories">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.title} className="group overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/categories?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="group overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      <p className="text-white/80">{category.count} products</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Today's Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <Card key={deal.title} className="group overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{deal.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold">{deal.price}</span>
                    <span className="text-muted-foreground line-through">{deal.originalPrice}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}