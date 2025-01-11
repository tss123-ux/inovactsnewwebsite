import React from "react";
import { motion } from "framer-motion";

const PartnersSection = ({ partnerLogos }: any) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-medium text-center text-gray-900 mb-12"
      >
        Our Partners
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
        {partnerLogos.map((logo: any, index: any) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -10,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              transition: { duration: 0.2 },
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="relative group"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="absolute -inset-4 bg-blue-50/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="relative"
              whileHover={{
                filter: "grayscale(0%)",
                transition: { duration: 0.2 },
              }}
              style={{
                filter: "grayscale(100%)",
              }}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain"
              />

              {/* Subtle reflection effect */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 0.2 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                className="absolute top-full left-0 right-0 h-12 opacity-10"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)",
                  transformOrigin: "top",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PartnersSection;
