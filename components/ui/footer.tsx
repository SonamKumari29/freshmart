"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./button";

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
              <a href="#" className="text-gray-300 hover:text-primary transition-colors p-1 hover:bg-gray-700 rounded-full">
                <Facebook className="w-3.5 h-3.5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors p-1 hover:bg-gray-700 rounded-full">
                <Twitter className="w-3.5 h-3.5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors p-1 hover:bg-gray-700 rounded-full">
                <Instagram className="w-3.5 h-3.5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-1.5 text-primary">Quick Links</h4>
            <ul className="space-y-0.5">
              <li>
                <Link href="/why-choose-us" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Deals & Offers
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-1.5 text-primary">Customer Service</h4>
            <ul className="space-y-0.5">
              <li>
                <Link href="/faq" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-[11px] sm:text-xs text-gray-300 hover:text-primary transition-colors inline-block py-0.5">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold mb-1.5 text-primary">Contact Us</h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs">
              <li className="flex items-start text-gray-300">
                <MapPin className="w-3.5 h-3.5 mr-1 text-primary shrink-0 mt-0.5" />
                <span>123 Grocery Street, Mumbai, India</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-3.5 h-3.5 mr-1 text-primary shrink-0" />
                <span>+91-98765-43210</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-3.5 h-3.5 mr-1 text-primary shrink-0" />
                <span>support@freshmart.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-4 pt-3 text-center text-gray-300 text-[10px] sm:text-xs">
          <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 