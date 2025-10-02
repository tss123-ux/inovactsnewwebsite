"use client";
import Footer from "@/components/Footer";
import TeamMember from "../../components/cards/TeamMember";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";
import { Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

const teamMembers = [
  {
    name: "T S Sarang",
    role: "CEO & Founder",
    imageUrl: "/images/Sarang.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sarang-pani-14ab1919b",
  },
  {
    name: "D G Shivu",
    role: "Lead Developer",
    imageUrl: "/images/Shivu.jpg",
    linkedinUrl: "",
  },
  {
    name: "Pratik Pendurkar",
    role: "Backend Engineer",
    imageUrl: "/images/Pratik.jpg",
    linkedinUrl: "",
  },
  {
    name: "Apoorv Pandey",
    role: "Frontend Developer",
    imageUrl: "/images/Apoorv.jpg",
    linkedinUrl: "",
  },
  {
    name: "Pranay Das",
    role: "Frontend Developer",
    imageUrl: "/images/Pranay.jpg",
    linkedinUrl: "",
  },
];

export default function AboutPage() {
  const scrollUpRef = useRef<HTMLDivElement>(null);
  const scrollUp = () => {
    scrollUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Inovact | About Us";
  }, []);

  return (
    <div className="min-h-screen bg-white text-justify">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="pt-16 pb-5  sm:pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            ref={scrollUpRef}
            className="text-2xl sm:text-center text-left font-medium  text-gray-900 mb-6"
          >
            About Inovact
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 text-left sm:text-center">
            Founded in 2021, Inovact is reshaping how students connect,
            collaborate, and create through innovative solutions and
            community-driven development.
          </p>
        </div>
      </section> */}

      {/* Main Content Section */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <section className="py-16 pt-0 sm:pt-0 px-4 sm:px-6 lg:px-8">
        <div ref={scrollUpRef} className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Our Story */}
            <div>
              <h2 className="text-2xl text-center  font-medium  text-gray-900 mb-6 mt-10">
                Our Story
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6  ">
                  Founded in 2021, Inovact is reshaping how students connect,
                  collaborate, and create through innovative solutions and
                  community-driven development. Inovact Private Limited emerged
                  from the innovative minds of two engineering students who
                  recognized the challenges in student collaboration and team
                  formation. What began as a solution to their own frustrations
                  has evolved into a comprehensive platform that&apos;s
                  reshaping how students connect, collaborate, and create.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through dedication and innovation, we&apos;ve built a platform
                  that addresses the real needs of students and entrepreneurs,
                  making collaboration and skill development more accessible
                  than ever before.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-2xl text-center  font-medium  text-gray-900 mb-6">
                Our Mission
              </h2>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Our mission is to break down barriers in student
                    collaboration and skill development. We&apos;re creating an
                    ecosystem where innovation thrives, skills are developed,
                    and meaningful connections are forged. Through our platform,
                    we&apos;re empowering the next generation of creators and
                    innovators.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Impact */}
            <div>
              <h2 className="text-2xl text-center  font-medium  text-gray-900 mb-6">
                Our Impact
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted shadow-2xl p-6 rounded-lg  border border-gray-100">
                  <div className="text-3xl flex justify-center font-bold text-indigo-600 mb-2">
                    <NumberTicker
                      className="text-3xl font-bold text-indigo-600 mb-2 "
                      value={14000}
                    />
                    +
                  </div>
                  <div className="text-gray-600 sm:text-base text-sm text-center">
                    Students, Entrepreneurs and Mentors
                  </div>
                </div>
                <div className="bg-muted shadow-2xl p-6 rounded-lg  border border-gray-100">
                  <div className="text-3xl flex justify-center font-bold text-indigo-600 mb-2">
                    <NumberTicker
                      className="text-3xl font-bold text-indigo-600 mb-2"
                      value={2500}
                    />
                    +
                  </div>
                  <div className="text-gray-600 sm:text-base text-sm text-center">
                    Community Members
                  </div>
                </div>
                <div className="bg-muted shadow-2xl p-6 rounded-lg  border border-gray-100">
                  <div className="text-3xl flex justify-center font-bold text-indigo-600 mb-2">
                    <NumberTicker
                      className="text-3xl font-bold text-indigo-600 mb-2"
                      value={2000}
                    />
                    +
                  </div>
                  <div className="text-gray-600 sm:text-base text-sm text-center">
                    Proof of Work Shared
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-3">
              Our Young Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals driving innovation and growth at
              Inovact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-y-4 gap-y-6">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="w-64">
                <Card className="relative overflow-hidden bg-white">
                  {/* LinkedIn Icon - Only show for first member */}
                  {index === 0 && member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                  )}

                  <CardContent className="p-4">
                    <div className="flex flex-col items-center">
                      {/* Circular Image */}
                      <div className="relative w-48 h-48 mb-4">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <div className="h-0.5 w-8 bg-indigo-400 mx-auto mt-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer scrollUp={scrollUp} scrollUpEffort={() => {}} />
    </div>
  );
}
