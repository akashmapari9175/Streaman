import RoadmapCard from "./RoadmapCard";

interface RoadmapColumnProps {
  month: string;
  items: { title: string; description: string }[];
  onCardClick: (item: { title: string; description: string }) => void;
}

export default function RoadmapColumn({
  month,
  items,
  onCardClick,
}: RoadmapColumnProps) {
  return (
    <div className="bg-white  max-h-screen p-4 rounded-xl shadow-lg min-w-[280px] sm:min-w-[300px]">
      <h2 className="text-xl font-semibold mb-4 text-center">{month}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <RoadmapCard
            key={index}
            title={item.title}
            description={item.description}
            onClick={() => onCardClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
