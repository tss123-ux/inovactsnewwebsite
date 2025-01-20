import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PartnersSection = ({ partnerLogos }: any) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />

      <div className="container relative mx-auto px-4 py-20">
        {/* Heading Section */}
        <div className="relative mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6"
          >
            Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center  text-gray-600 mt-4"
          >
            Helping exceptional companies hire the right talent at the right
            time
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="relative">
          {/* Updated grid with new responsive breakpoints */}
          <div className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {partnerLogos.map((logo: any, index: any) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative aspect-[4/3]"
              >
                {/* Card Background */}
                <div className="absolute inset-0 rounded-xl bg-white/5 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/5 transition-all duration-300 group-hover:ring-blue-500/50 group-hover:bg-white/10" />

                {/* Logo Container */}
                <div className="relative p-3 sm:p-6 w-full h-full flex justify-center items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="object-contain filter transition-all duration-300 group-hover:brightness-110"
                      fill
                    />
                  </div>

                  {/* Reflection Effect */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 0.2 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-12 opacity-20"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)",
                      transformOrigin: "bottom",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      </div>
    </motion.section>
  );
};

export default PartnersSection;
