"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    image: "/team/john.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Head of Operations",
    image: "/team/jane.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Head of Technology",
    image: "/team/mike.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are dedicated to providing fresh, high-quality groceries delivered right to your doorstep. Our mission is to make grocery shopping convenient and enjoyable for everyone.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {team.map((member) => (
          <motion.div
            key={member.id}
            variants={item}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary/10 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          To revolutionize the way people shop for groceries by providing a seamless, efficient, and enjoyable shopping experience.
        </p>
      </motion.div>
    </div>
  );
} 