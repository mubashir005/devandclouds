"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback: "Dev and Clouds transformed our cloud infrastructure, boosting efficiency by 40%.",
    image: "/client1.jpg", // Ensure this image exists in the /public folder
  },
  {
    name: "Sarah Johnson",
    role: "CTO, InnovateX",
    feedback: "Their DevOps solutions streamlined our deployment pipeline, saving us hours of work!",
    image: "/client2.jpg",
  },
  {
    name: "Michael Lee",
    role: "Founder, StartupGo",
    feedback: "Top-notch service with incredible customer support. Highly recommend their expertise!",
    image: "/client3.jpg",
  },
];

export default function Testimonials() { 
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-full mx-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-500"
        >
          What Our Clients Say
        </motion.h2>
        <p className="mt-4 text-gray-400">
          Hear from businesses that trust us for their IT solutions.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center">
                <Image
                  src={testimonial.image}
                  width={80}
                  height={80}
                  alt={testimonial.name}
                  className="rounded-full border-2 border-blue-500"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
              <p className="mt-3 text-gray-300 italic">"{testimonial.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
