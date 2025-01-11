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

const RippleEffect = () => (
  <div className="absolute -top-1 -right-1 p-2">
    <div className="relative">
      <div className="absolute animate-ping w-3 h-3 rounded-full bg-blue-400 opacity-75" />
      <div className="relative w-3 h-3 rounded-full bg-blue-500" />
    </div>
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
        "Provide a detailed job description and assignment for the role",
      icon: <Target className="w-6 h-6" />,
      highlight: "Step 1",
    },
    {
      title: "Sourcing Exceptional Talent",
      description:
        "We tap into Inovact Social, Developer Communities, and Professional Networks",
      icon: <Search className="w-6 h-6" />,
      highlight: "Step 2",
    },
    {
      title: "Assessing Talent",
      description:
        "Evaluation through portfolios, project links, and tangible proof of skills",
      icon: <FileCheck className="w-6 h-6" />,
      highlight: "Step 3",
    },
    {
      title: "Skill & Culture Fit",
      description: "Thorough interviews for technical and cultural alignment",
      icon: <UserCheck className="w-6 h-6" />,
      highlight: "Step 4",
    },
    {
      title: "Assignment Evaluation",
      description:
        "Candidates complete tailored assignments to demonstrate expertise",
      icon: <CheckCircle className="w-6 h-6" />,
      highlight: "Step 5",
    },
    {
      title: "Top Candidates",
      description: "We present top 5 profiles ready for your final HR round",
      icon: <Users className="w-6 h-6" />,
      highlight: "Step 6",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Accelerated Hiring Process",
      metric: "50% Faster Time-to-Hire",
      description:
        "Streamlined recruitment workflow with AI-powered candidate matching",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Pre-Vetted Talent Pool",
      metric: "95% Success Rate",
      description:
        "Access to thoroughly assessed candidates ready for immediate deployment",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Strategic Talent Solutions",
      metric: "100% Skill Match",
      description:
        "Customized recruitment strategies aligned with your business goals",
    },
    {
      icon: <Headset className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Support",
      metric: "24/7 Assistance",
      description:
        "Dedicated account management throughout your hiring journey",
    },
  ];

  const policies = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      highlight: "Guarantee",
      title: "Quality Assurance",
      subtext: "100% Satisfaction Guaranteed",
      description:
        "Each candidate undergoes thorough screening and skill validation before joining your team",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      highlight: "Timeline",
      title: "Rapid Placement",
      subtext: "2-Week Average Timeline",
      description:
        "Streamlined process ensures quick deployment while maintaining high quality standards",
    },
    {
      icon: <HandshakeIcon className="w-6 h-6 text-blue-600" />,
      highlight: "Support",
      title: "Ongoing Partnership",
      subtext: "Dedicated Success Manager",
      description:
        "Continuous support and regular check-ins to ensure long-term success of placements",
    },
  ];

  const partnerLogos = [
    "/api/placeholder/120/60",
    "/api/placeholder/120/60",
    "/api/placeholder/120/60",
    "/api/placeholder/120/60",
    "/api/placeholder/120/60",
  ];

  const scrollUpRef = useRef<HTMLDivElement>(null);
  const scrollUp = () => {
    scrollUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolldownRef = useRef<HTMLDivElement>(null);
  const scrollDown = () => {
    scrolldownRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section ref={scrollUpRef} className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Talent Acquisition Reimagined
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6">
            Where Proof of Work Meets Perfect Hires
          </h1>
          <p className=" text-justify text-gray-600 mb-8  mx-auto">
            We go beyond resumes, bringing proof of work to the forefront of
            hiring, helping small to medium-sized businesses find exceptional
            talent in record time.
          </p>
          <Button
            onClick={scrollDown}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start Hiring <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
            Our Process: Simplified and Efficient
          </h2>
          <p className="sm:text-center text-justify text-gray-600 mt-4">
            Experience our streamlined hiring process designed for optimal
            results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative pl-8 pb-16 last:pb-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated connection line */}
              {index !== processSteps.length - 1 && (
                <div className="absolute left-[15px] top-10 w-0.5 bg-gradient-to-b from-blue-600 to-blue-200 h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-blue-400 animate-pulse" />
                </div>
              )}

              <div className="relative">
                {/* Animated icon bubble */}
                <div className="absolute left-[-33px] bg-blue-600 rounded-full p-2 text-white transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                  {step.icon}
                </div>

                <Card
                  className={`
                  ml-4 transform transition-all duration-300 cursor-pointer
                  ${hoveredIndex === index ? "scale-[1.02] shadow-lg" : ""}
                  hover:shadow-xl relative overflow-hidden
                `}
                >
                  <RippleEffect />
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                      {step.highlight}
                    </Badge>

                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    <div
                      className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${
                        hoveredIndex === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                    >
                      <p className="text-gray-600 text-justify">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
              Why Choose Inovact Talent Launchpad?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with innovative talent solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group h-[280px] bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col items-center h-full justify-between">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    {benefit.icon}
                  </div>

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
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-1 text-sm font-medium rounded-full">
                Our Commitment
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mt-4 mb-4">
              Clear & Transparent Policies
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in building long-term partnerships through transparent
              policies and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {policies.map((policy, index) => (
              <Card
                key={index}
                className="group h-[320px] bg-white hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                      {policy.icon}
                    </div>

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

                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                    {policy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-medium text-center text-gray-900 mb-12">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer scrollUp={scrollUp} scrollUpEffort={() => {}} />
    </div>
  );
};

export default InovactLanding;
