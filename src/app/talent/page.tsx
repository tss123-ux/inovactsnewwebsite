"use client";
import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
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
import * as z from "zod";

import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"], {
    required_error: "Please select company size",
  }),
  roleHiring: z.enum(["software-dev", "ui-ux", "sales", "marketing"], {
    required_error: "Please select role",
  }),
  experience: z.enum(["0-1", "1-3", "3-5", "5-8", "8+"], {
    required_error: "Please select experience range",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const InovactLanding = () => {
  const [isLoading, setIsLoading] = useState(false);

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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      form.reset();
    } catch (error) {
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
      icon: <FileCheck className="w-8 h-8 text-blue-600" />,
      title: "Proof of Work First",
      description: "Focus on real-world experience and demonstrated abilities",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Fast Turnaround",
      description: "From job description to offer letter in just 5 days",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Diverse Domains",
      description: "Hire for software, UI/UX, sales, and marketing roles",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Proven Track Record",
      description: "7 clients and 20+ successful placements in 6 months",
    },
  ];

  const policies = [
    {
      title: "Success Fee",
      description:
        "We charge 8.33% of the candidate&apos;s CTC as our success fee, payable only upon successful hiring.",
      icon: <Percent className="w-8 h-8 text-blue-600" />,
      highlight: "8.33% CTC",
      subtext: "Pay only after successful placement",
    },
    {
      title: "Candidate Replacement Guarantee",
      description:
        "If the candidate is found unfit within the first three months of joining, we will replace the candidate at no additional cost.",
      icon: <RefreshCcw className="w-8 h-8 text-blue-600" />,
      highlight: "3 Months",
      subtext: "Free replacement period",
    },
    {
      title: "Refund Policy",
      description:
        "If we fail to provide a replacement within 15 days of the client&apos;s request, we will refund the entire amount paid as a success fee.",
      icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
      highlight: "100% Refund",
      subtext: "15-day replacement guarantee",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section ref={scrollUpRef} className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Talent Acquisition Reimagined
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Where Proof of Work Meets Perfect Hires
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We go beyond resumes, bringing proof of work to the forefront of
            hiring, helping small to medium-sized businesses find exceptional
            talent in record time.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Hiring <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Process: Simplified and Efficient
          </h2>
          <p className="text-gray-600 mt-4">
            Experience our streamlined hiring process designed for optimal
            results
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="relative pl-8 pb-16 last:pb-0">
              {index !== processSteps.length - 1 && (
                <div className="absolute left-[15px] top-10 w-0.5 h-full bg-blue-200" />
              )}
              <div className="relative">
                <div className="absolute left-[-33px] bg-blue-600 rounded-full p-2 text-white">
                  {step.icon}
                </div>
                <Card className="ml-4 transform transition-all hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-blue-50 text-blue-700 hover:bg-blue-50">
                      {step.highlight}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Inovact Talent Launchpad?
          </h2>
          <p className="text-gray-600 mt-4">
            Our unique approach delivers exceptional results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="transform transition-all hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Policies Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Our Commitment
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Clear & Transparent Policies
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We believe in building long-term partnerships through transparent
              policies and exceptional service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card
                key={index}
                className="bg-white overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                      {policy.icon}
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-lg font-semibold"
                    >
                      {policy.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">
                    {policy.subtext}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {policy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
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
                        <FormMessage />
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
                        <FormMessage />
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
                        <FormMessage />
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
                        <FormMessage />
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
                          onValueChange={field.onChange}
                          value={field.value}
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
                        <FormMessage />
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
                          onValueChange={field.onChange}
                          value={field.value}
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
                        <FormMessage />
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
                          onValueChange={field.onChange}
                          value={field.value}
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
                        <FormMessage />
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
        <h2 className="text-3xl text-center text-gray-900 mb-12">
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
