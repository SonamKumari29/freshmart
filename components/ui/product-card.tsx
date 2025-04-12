"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./button";
import { ShoppingCart, Heart, Eye } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    discount?: number;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {product.discount}% OFF
          </div>
        )}
        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Heart className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <span className="text-sm text-gray-500">{product.category}</span>
        <h3 className="font-semibold text-lg mt-1 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          {product.discount && (
            <span className="text-sm text-gray-500 line-through">
              ₹{Math.round(product.price * (1 + product.discount / 100))}
            </span>
          )}
        </div>
        <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}; 