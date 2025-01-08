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
    <div className="w-full h-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
