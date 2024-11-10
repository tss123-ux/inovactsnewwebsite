// src/app/about/page.tsx
import Footer from "@/components/Footer";
import TeamMember from "../../components/cards/TeamMember";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Sarang Pani",
    role: "CEO & Founder",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "D G Shivu",
    role: "Lead Developer",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Pratik Pendurkar",
    role: "Backend Engineer",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Apoorv Pandey",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Pranay",
    role: "Frontend Developer",
    linkedinUrl: "https://linkedin.com",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg text-center mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Product</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
