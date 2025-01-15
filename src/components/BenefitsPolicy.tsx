import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsAndPolicies = ({ benefits, policies }: any) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
              Why Choose Inovact Talent Launchpad?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with innovative talent solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit: any, index: any) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-[280px] bg-white hover:shadow-lg transition-all duration-300 flex flex-col">
                  <CardContent className="p-6 flex flex-col items-center h-full justify-between">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      {benefit.icon}
                    </motion.div>

                    <div className="flex-1 flex flex-col items-center">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <div className="text-blue-600 font-medium text-sm mb-3">
                        {benefit.metric}
                      </div>
                    </div>

                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-1 text-sm font-medium rounded-full">
                Our Commitment
              </Badge>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mt-4 mb-4">
              Clear & Transparent Policies
            </h2>
            <p className="text-gray-600 max-w-6xl mx-auto">
              We believe in building long-term partnerships through transparent
              policies and exceptional service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {policies.map((policy: any, index: any) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300"
                      >
                        {policy.icon}
                      </motion.div>

                      <Badge
                        variant="secondary"
                        className="bg-gray-50 text-gray-600 px-3"
                      >
                        {policy.highlight}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        {policy.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium">
                        {policy.subtext}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed ">
                      {policy.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsAndPolicies;
