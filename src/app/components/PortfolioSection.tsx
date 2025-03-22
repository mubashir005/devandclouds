// PortfolioPage.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    title: "AI Cloud Platform",
    image: "/portfolio1.jpg",
    description: "A robust AI-powered cloud solution for enterprise automation.",
  },
  {
    title: "E-Commerce Web App",
    image: "/portfolio2.jpg",
    description: "A scalable and secure online shopping platform.",
  },
  {
    title: "DevOps Dashboard",
    image: "/portfolio3.jpg",
    description: "An intuitive dashboard for real-time CI/CD pipeline monitoring.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-full mx-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-500"
        >
          Our Portfolio
        </motion.h2>
        <p className="mt-4 text-gray-400">
          Take a look at some of our successful projects.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg bg-gray-800"
            >
              <Image
                src={item.image}
                width={600}
                height={400}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
