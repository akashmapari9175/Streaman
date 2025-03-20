"use client"; 

import { useState } from "react";
import RoadmapColumn from "@/components/RoadMap/RoadmapColumn";


const roadmapData = [
  {
    month: "February",
    items: [
      { title: "OAuth2 Revamp", description: "OAuth2 is redesigned to work closely with Postman." },
      { title: "Fetch in Bruno", description: "Allows a collection to be cloned from GitHub." },
      { title: "Azure Key Vault", description: "Vault integration with Azure Key Vault." },
    ],
  },
  {
    month: "March",
    items: [
      { title: "Import Collection Summary", description: "Provides a summary when importing collections." },
      { title: "YAML Support", description: "Replaces .bru with YAML for better usability." },
      { title: "GRPC - Phase 1", description: "Explore gRPC and engage with users." },
      { title: "Import Collection Summary", description: "Provides a summary when importing collections." },
      { title: "YAML Support", description: "Replaces .bru with YAML for better usability." },
      { title: "GRPC - Phase 1", description: "Explore gRPC and engage with users." },
      { title: "Import Collection Summary", description: "Provides a summary when importing collections." },
      { title: "YAML Support", description: "Replaces .bru with YAML for better usability." }
    ],
  },
  {
    month: "April",
    items: [
      { title: "Bruno Playground", description: "Automatically generates documentation." },
      { title: "GRPC - Phase 2", description: "Functional beta for selected users." },
      { title: "Auto Save Requests", description: "Toggle auto-save for requests." },
    ],
  },
  {
    month: "May",
    items: [
      { title: "New Feature X", description: "Implement a new feature for users." },
      { title: "Performance Optimizations", description: "Improve speed and performance." },
      { title: "Bug Fixes", description: "Resolve reported issues." },
    ],
  },
  {
    month: "June",
    items: [
      { title: "Dashboard Upgrade", description: "Enhance UI/UX for the dashboard." },
      { title: "Security Updates", description: "Enhance application security." },
      { title: "User Feedback", description: "Analyze user feedback for improvements." },
    ],
  },
];

const Roadmap = () => {
  const [selectedCard, setSelectedCard] = useState<{ title: string; description: string } | null>(null);

  return (
    <div className="relative w-full h-full bg-gray-100 p-20">
      <h2 className="text-2xl font-bold text-center mb-6">Q1 Roadmap</h2>

      {/* ✅ Horizontal Scrollable Wrapper */}
  <div className="w-full overflow-x-auto overflow-y-hidden p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
    <div className="flex gap-4 w-max">
      {roadmapData.map((monthData, index) => (
        <RoadmapColumn
          key={index}
          month={monthData.month}
          items={monthData.items}
          onCardClick={setSelectedCard}
        />
      ))}
    </div>
  </div>


      {/* Popup Modal */}
      {selectedCard && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white-50 bg-opacity-10 backdrop-blur-sm">

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <button onClick={() => setSelectedCard(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              ✖
            </button>
            <h3 className="text-xl font-semibold">{selectedCard.title}</h3>
            <p className="text-gray-600 mt-2">{selectedCard.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
