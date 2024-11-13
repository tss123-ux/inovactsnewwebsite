// src/app/about/components/TeamMember.tsx
"use client";

import { FaLinkedin } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  role: string;
  linkedinUrl: string;
  imageUrl: string;
}

export default function TeamMember({
  name,
  role,
  linkedinUrl,
  imageUrl,
}: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center p-4 sm:p-0">
      <div className="w-40 h-40 sm:w-50 sm:h-50 rounded-full overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 mb-2 text-center">{role}</p>
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      )}
    </div>
  );
}
