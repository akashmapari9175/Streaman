"use client";

import { useState } from "react";

const testimonials = [
  {
    text: "I have been using it for a while and I really liked it. When compared to other tools...",
    name: "Barath Raj Ramachandran",
    username: "@barath-raj-ramachandran",
  },
  {
    text: "It's been a while now, since I've been using Bruno the open-source, lightweight...It's been a while now, since I've been using Bruno the open-source, lightweight...It's been a while now, since I've been using Bruno the open-source, lightweight...It's been a while now, since I've been using Bruno the open-source, lightweight...",
    name: "Vysakh Rajeev",
    username: "@vysakh-rajeev",
  },
  {
    text: "Postman sunsetted scratchpad, making it impossible to manage your assets locally...",
    name: "Arnaud",
    username: "@arnaduga",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Customer Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg transition-all duration-300 ${
              index === activeIndex
                ? "bg-white shadow-2xl border-2 border-orange-500 scale-105"
                : "bg-white shadow-md"
            }`}
          >
            <p className="text-gray-700">“{testimonial.text}”</p>

            {/* User Info */}
            <div className="mt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.username}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className={`p-3 rounded-full border-2 transition-all duration-300 ${
            activeIndex === 0 ? "border-gray-400" : "border-orange-500 bg-orange-100"
          }`}
        >
          ⬅️
        </button>
        <button
          onClick={handleNext}
          className={`p-3 rounded-full border-2 transition-all duration-300 ${
            activeIndex === testimonials.length - 1
              ? "border-gray-400"
              : "border-orange-500 bg-orange-100"
          }`}
        >
          ➡️
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
