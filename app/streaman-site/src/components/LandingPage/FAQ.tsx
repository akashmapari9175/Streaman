"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Does Bruno sync data from my app?",
    answer: "No, Bruno does not sync data from your app. It works locally.",
  },
  {
    question: "How does collaboration work?",
    answer: "Collaboration is done via version control like Git.",
  },
  {
    question: "Do you provide any support plans?",
    answer: "Yes, we offer various support plans tailored to different needs.",
  },
  {
    question: "Can my company put an Enterprise agreement in place?",
    answer: "Yes, enterprise agreements are available.",
  },
  {
    question: "What about SSO and RBAC?",
    answer: "Bruno supports SSO and RBAC for enterprise users.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="p-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
