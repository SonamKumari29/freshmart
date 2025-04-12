"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./button";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 mt-auto border-t border-gray-700">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">FreshMart</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for fresh groceries and daily essentials
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/why-choose-us" className="text-gray-300 hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-300 hover:text-primary transition-colors">
                  Deals & Offers
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-primary transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                123 Grocery Street, Mumbai, India
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                +91-98765-43210
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                support@freshmart.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 