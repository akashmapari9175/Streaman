interface RoadmapCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export default function RoadmapCard({
  title,
  description,
  onClick,
}: RoadmapCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-50 p-4 rounded-lg shadow-sm border cursor-pointer hover:bg-gray-100 transition border-gray-200"
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-[12px] text-gray-600 mt-1">{description}</p>
    </div>
  );
}
