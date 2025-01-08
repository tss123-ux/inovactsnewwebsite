"use client";
import Footer from "@/components/Footer";
import TeamMember from "../../components/cards/TeamMember";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";
import { Linkedin } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
            About Inovact
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Founded in 2021, Inovact is reshaping how students connect,
            collaborate, and create through innovative solutions and
            community-driven development.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Our Story */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Inovact Private Limited emerged from the innovative minds of
                  two engineering students who recognized the challenges in
                  student collaboration and team formation. What began as a
                  solution to their own frustrations has evolved into a
                  comprehensive platform that&apos;s reshaping how students
                  connect, collaborate, and create.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Impact
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted shadow-2xl p-6 rounded-lg  border border-gray-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    <NumberTicker
                      className="text-3xl font-bold text-indigo-600 mb-2"
                      value={2000}
                    />
                    +
                  </div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="bg-muted shadow-2xl p-6 rounded-lg  border border-gray-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    <NumberTicker
                      className="text-3xl font-bold text-indigo-600 mb-2"
                      value={1500}
                    />
                    +
                  </div>
                  <div className="text-gray-600">Community Members</div>
                </div>
                <div className="bg-muted shadow-2xl p-6 rounded-lg  border border-gray-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    <NumberTicker
                      className="text-3xl font-bold text-indigo-600 mb-2"
                      value={100}
                    />
                    +
                  </div>
                  <div className="text-gray-600">Projects Launched</div>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals driving innovation and growth at
              Inovact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <Card className="overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      {/* Background Image */}
                      <TeamMember {...member} />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* LinkedIn Icon */}
                      {member.linkedinUrl && (
                        <div className="absolute top-3 right-3 transform translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-300">
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-1.5 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                          >
                            <Linkedin className="w-4 h-4 text-blue-600" />
                          </a>
                        </div>
                      )}

                      {/* Info Section */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/5 backdrop-blur-sm translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-white">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-200">{member.role}</p>
                          <div className="h-0.5 w-8 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
