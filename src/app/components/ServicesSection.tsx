"use client";
import { motion } from "framer-motion";
import { FaCloud, FaCode, FaShieldAlt, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Cloud Solutions",
    description: "Seamless cloud integration, migration, and management.",
    icon: <FaCloud className="text-blue-500 text-5xl" />,
  },
  {
    title: "DevOps & Automation",
    description: "CI/CD pipelines, Kubernetes, and server automation.",
    icon: <FaServer className="text-green-500 text-5xl" />,
  },
  {
    title: "Custom Software Development",
    description: "High-quality, scalable, and secure web & mobile apps.",
    icon: <FaCode className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Cybersecurity",
    description: "Robust security solutions for data and application safety.",
    icon: <FaShieldAlt className="text-red-500 text-5xl" />,
  },
];

export default function ServicesSection () {
  return (
    <section className="py-16  bg-gray-900 text-white">
      <div className="max-w-full mx-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-500"
        >
          Our Services
        </motion.h2>
        <p className="mt-4 text-gray-400">
          We provide cutting-edge solutions to drive your business success.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
