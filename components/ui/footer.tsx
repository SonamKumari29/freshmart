"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 mt-auto border-t border-gray-700">
      <div className="container px-4 py-4 sm:py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-1.5 text-primary">FreshMart</h3>
            <p className="text-xs text-gray-300 mb-2 max-w-md leading-snug">
              Your one-stop shop for fresh groceries and daily essentials
            </p>
            <div className="flex gap-1.5">
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors p-1 hover:bg-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-3.5 h-3.5" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors p-1 hover:bg-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-1.5 text-primary">Quick Links</h4>
            <ul className="space-y-1">
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/why-choose-us" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Why Choose Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/deals" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Deals & Offers
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/categories" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Categories
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-1.5 text-primary">Customer Service</h4>
            <ul className="space-y-1">
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/faq" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  FAQ
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/shipping-info" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Shipping Info
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/returns" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Returns
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold mb-1.5 text-primary">Contact Us</h4>
            <ul className="space-y-1">
              <motion.li 
                className="flex items-start text-gray-300"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-3.5 h-3.5 mr-1 text-primary shrink-0 mt-0.5" />
                <span>123 Grocery Street, Mumbai, India</span>
              </motion.li>
              <motion.li 
                className="flex items-center text-gray-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-primary shrink-0" />
                <span>+91-98765-43210</span>
              </motion.li>
              <motion.li 
                className="flex items-center text-gray-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-3.5 h-3.5 mr-1 text-primary shrink-0" />
                <span>support@freshmart.com</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 mt-4 pt-3 text-center text-gray-300 text-[10px] sm:text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 