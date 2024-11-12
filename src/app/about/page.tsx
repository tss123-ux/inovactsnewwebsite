// src/app/about/page.tsx
import Footer from "@/components/Footer";
import TeamMember from "../../components/cards/TeamMember";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "T S Sarang",
    role: "CEO & Founder",
    imageUrl: "/images/Sarang.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sarang-pani",
  },
  {
    name: "D G Shivu",
    role: "Lead Developer",
    imageUrl: "/images/Shivu.jpg",

    // linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Pratik Pendurkar",
    role: "Backend Engineer",
    imageUrl: "/images/Pratik.jpg",

    // linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Apoorv Pandey",
    role: "Frontend Developer",
    imageUrl: "/images/Apoorv.jpg",

    // linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Pranay Das",
    role: "Frontend Developer",
    imageUrl: "/images/Pranay.jpg",

    // linkedinUrl: "https://linkedin.com",
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
            <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8">
                Inovact Private Limited, founded in 2021 by two visionary
                engineering students, emerged from a shared frustration: the
                difficulty students and entrepreneurs face in hiring teams and
                navigating the cumbersome collaboration methods on multiple
                social networks for projects & ideas. This realization sparked
                their eureka moment, leading to the birth of Inovact Social.
                This social network empowers students and entrepreneurs to
                collaborate on projects and ideas & building proof of work,
                rewarding them with incentives.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8">
                Inovact's journey didn't stop there. Recognizing the need for
                skill development, they launched the Inovact Student Community
                Program, building small communities across engineering colleges
                in India. Within just eight months, they trained over 2,000
                students through technical workshops, fostering a new generation
                of innovators. The founders, despite their non-business
                backgrounds, embraced the challenge, learning the ropes from
                scratch to build Inovact into what it is today.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8">
                In addition to their flagship product, Inovact Social, they
                created the Inovact Community on WhatsApp, a vibrant network of
                over 1,500 students, mentors, and entrepreneurs.
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto my-20">
          {/* First row */}
          <div className="flex justify-between mb-16">
            {teamMembers.slice(0, 3).map((member) => (
              <div key={member.name} className="w-64">
                <TeamMember {...member} />
              </div>
            ))}
          </div>

          {/* Second row with increased offset */}
          <div className="flex justify-center gap-10">
            {teamMembers.slice(3, 4).map((member) => (
              <div key={member.name} className="w-64 mr-16">
                <TeamMember {...member} />
              </div>
            ))}
            {teamMembers.slice(4).map((member) => (
              <div key={member.name} className="w-64">
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
