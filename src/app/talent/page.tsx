"use client";
import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Clock,
  Shield,
  Mail,
  ArrowRight,
  Search,
  FileCheck,
  UserCheck,
  Briefcase,
  Percent,
  BadgeCheck,
  RefreshCcw,
  HandshakeIcon,
  ChevronDown,
  Headphones,
  Rocket,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle, Users, TrendingUp, Headset } from "lucide-react";
import * as z from "zod";

import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

import { collection, addDoc } from "firebase/firestore";
import { requests } from "@/utils/firebaseConfig";
import { AnimatePresence, motion } from "framer-motion";
import BenefitsAndPolicies from "@/components/BenefitsPolicy";
import PartnersSection from "@/components/Partners";
import logo1 from "../../assets/PVL.jpg";
import logo2 from "../../assets/Tvast.jpeg";
import logo3 from "../../assets/craftech360_logo.jpeg";
import logo4 from "../../assets/downloadinsideout.png";
import logo5 from "../../assets/powerone.jpeg";
import logo6 from "../../assets/rekonsile_logo.jpeg";
import Image from "next/image";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  companySize: z
    .enum(["1-10", "11-50", "51-200", "201-500", "500+"], {
      required_error: "Please select company size",
    })
    .optional(),
  roleHiring: z
    .enum(["software-dev", "ui-ux", "sales", "marketing"], {
      required_error: "Please select role",
    })
    .optional(),
  experience: z
    .enum(["0-1", "1-3", "3-5", "5-8", "8+"], {
      required_error: "Please select experience range",
    })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AnimatedArrow = () => (
  <div className="absolute bottom-3 right-3">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative"
    >
      <motion.div
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-5 h-5 text-blue-500" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 4, 0],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute top-0 left-0"
      >
        <ChevronDown className="w-5 h-5 text-blue-300" />
      </motion.div>
    </motion.div>
  </div>
);

const InovactLanding = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      companySize: undefined,
      roleHiring: undefined,
      experience: undefined,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      await addDoc(requests, data);
      toast({
        title: "Request received",
        description: "We'll get back to you",
      });

      // Properly reset all fields including Select components
      form.reset(
        {
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          companySize: undefined,
          roleHiring: undefined,
          experience: undefined,
        },
        {
          keepDefaultValues: true,
        }
      );

      // Force Select components to update their internal state
      form.setValue("companySize", undefined, { shouldDirty: false });
      form.setValue("roleHiring", undefined, { shouldDirty: false });
      form.setValue("experience", undefined, { shouldDirty: false });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const processSteps = [
    {
      title: "Share Your Requirements",
      description:
        "Provide us with a detailed job description and an assignment for the role you're hiring for.",
      icon: <Target className="w-6 h-6" />,
      highlight: "Step 1",
    },
    {
      title: "Sourcing Exceptional Talent",
      description:
        "We tap into multiple channels to find the right fit for your role: Inovact Social - our exclusive social network for students and entrepreneurs, Developer Communities - our own and partnered WhatsApp groups, and Professional Networks like LinkedIn, Naukri, and other platforms.",
      icon: <Search className="w-6 h-6" />,
      highlight: "Step 2",
    },
    {
      title: "Assessing Talent Based on Proof of Work",
      description:
        "Every candidate is evaluated through portfolios, project links, and other tangible proof of their skills.",
      icon: <FileCheck className="w-6 h-6" />,
      highlight: "Step 3",
    },
    {
      title: "Skill Fit & Culture Fit Interviews",
      description:
        "We conduct a thorough round of interviews to ensure the candidates meet both the technical and cultural requirements of your organization.",
      icon: <UserCheck className="w-6 h-6" />,
      highlight: "Step 4",
    },
    {
      title: "Assignment Evaluation",
      description:
        "Candidates complete a tailored assignment to demonstrate their expertise and problem-solving approach.",
      icon: <CheckCircle className="w-6 h-6" />,
      highlight: "Step 5",
    },
    {
      title: "Presenting Top Candidates",
      description:
        "We deliver a shortlist of top 5 profiles. All you need to do is conduct a final HR round to make the offer.",
      icon: <Users className="w-6 h-6" />,
      highlight: "Step 6",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "5-Day Hiring Process",
      metric: "5x Faster Time-to-Hire",
      description:
        "From job description to offer letter, we complete the entire process in just 5 days",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Proof of Work First",
      metric: "100% Skill Verified",
      description:
        "We focus on real-world experience and demonstrated abilities, not just resumes",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Multi-Domain Expertise",
      metric: "4+ Core Domains",
      description:
        "Specialized hiring for software development, UI/UX design, sales, and marketing roles",
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "Proven Success",
      metric: "20+ Successful Placements",
      description:
        "Served 7 satisfied clients with over 20 successful candidate placements in 6 months",
    },
  ];

  const policies = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      highlight: "Guarantee",
      title: "3-Month Replacement Guarantee",
      subtext: "100% Risk-Free Hiring",
      description:
        "If a candidate is found unfit within three months, we provide a replacement at no additional cost",
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-600" />,
      highlight: "Pricing",
      title: "Success-Based Fee",
      subtext: "8.33% of CTC",
      description:
        "Pay only upon successful hiring, with a competitive fee structure of 8.33% of the candidate's CTC",
    },
    {
      icon: <HandshakeIcon className="w-8 h-8 text-green-600" />,
      highlight: "Refund",
      title: "15-Day Replacement Promise",
      subtext: "100% Money Back Guarantee",
      description:
        "Full refund of the success fee if we cannot provide a replacement within 15 days of request",
    },
  ];

  const partnerLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scrollUpRef = useRef<HTMLDivElement>(null);
  const scrollUp = () => {
    scrollUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolldownRef = useRef<HTMLDivElement>(null);
  const scrollDown = () => {
    scrolldownRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  // Stagger children animation variant
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardHover = {
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-gray-50 to-white">
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" /> */}

      {/* Hero Section */}
      <motion.section
        ref={scrollUpRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="container mx-auto px-4 py-20 sm:pt-40 pt-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />

          <motion.div variants={fadeIn}>
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Talent Acquisition Reimagined
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6"
          >
            Where Proof of Work Meets Perfect Hires
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-justify text-gray-600 mb-8 mx-auto"
          >
            We go beyond resumes, bringing proof of work to the forefront of
            hiring, helping small to medium-sized businesses find exceptional
            talent in record time.
          </motion.p>

          <motion.div variants={fadeIn}>
            <Button
              onClick={scrollDown}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Start Hiring <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Timeline Section */}
      <section className="container  mx-auto px-4 py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
            Our Process: Simplified and Efficient
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Experience our streamlined hiring process designed for optimal
            results
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-16 last:pb-0"
            >
              {index !== processSteps.length - 1 && (
                <div className="absolute left-[15px] top-10 w-0.5 bg-gradient-to-b from-blue-600 to-blue-200 h-full">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-0 left-0 w-full h-full bg-blue-400 origin-top"
                  />
                </div>
              )}

              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  className="absolute left-[-33px] bg-blue-600 rounded-full p-2 text-white"
                >
                  {step.icon}
                </motion.div>

                <Card
                  className={`
                  ml-4 transform transition-all duration-300 cursor-pointer
                  ${expandedIndex === index ? "scale-[1.02] shadow-lg" : ""}
                  hover:shadow-xl relative overflow-hidden
                `}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex !== index && <AnimatedArrow />}
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                      {step.highlight}
                    </Badge>

                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 text-justify">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits and Policy Section */}
      <BenefitsAndPolicies benefits={benefits} policies={policies} />

      {/* Partners Section */}
      <PartnersSection partnerLogos={partnerLogos} />
      {/* <Image src={logo1} alt="_" /> */}

      {/* CTA Section */}
      <section
        ref={scrolldownRef}
        className="container mx-auto px-4 py-20 bg-blue-50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl   font-medium text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className=" text-gray-600 mb-8 ">
            Tell us about your hiring needs and we&apos;ll get back to you
            within 24 hours.
          </p>

          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Company Name"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Point of Contact Name"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email Address"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          disabled={isLoading}
                          onValueChange={(value) =>
                            field.onChange(value || undefined)
                          }
                          value={field.value || undefined}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Company Size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">
                              11-50 employees
                            </SelectItem>
                            <SelectItem value="51-200">
                              51-200 employees
                            </SelectItem>
                            <SelectItem value="201-500">
                              201-500 employees
                            </SelectItem>
                            <SelectItem value="500+">500+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="roleHiring"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          disabled={isLoading}
                          onValueChange={(value) =>
                            field.onChange(value || undefined)
                          }
                          value={field.value || undefined}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Role Hiring For" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="software-dev">
                              Software Development
                            </SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          disabled={isLoading}
                          onValueChange={(value) =>
                            field.onChange(value || undefined)
                          }
                          value={field.value || undefined}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Experience Required" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-8">5-8 years</SelectItem>
                            <SelectItem value="8+">8+ years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Mail className="mr-2 w-4 h-4" />
                        Contact Us Today
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer scrollUp={scrollUp} scrollUpEffort={() => {}} />
    </div>
  );
};

export default InovactLanding;
