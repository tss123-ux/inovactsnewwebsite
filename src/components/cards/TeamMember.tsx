// src/app/about/components/TeamMember.tsx
"use client";

import { Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  linkedinUrl: string;
}

export default function TeamMember({
  name,
  role,
  linkedinUrl,
}: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <img
          src="/images/48.jpg"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
}
