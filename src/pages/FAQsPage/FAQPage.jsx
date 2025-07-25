import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking on the 'Sign Up' button in the top right corner of our website and following the registration process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for certain services."
    },
    {
      question: "How can I reset my password?",
      answer: "Click on 'Forgot Password' on the login page and enter your email address. You'll receive a link to reset your password."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for most of our services. Please see our Refund Policy for specific details."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team 24/7 through the contact form on our website, or by emailing support@example.com. Average response time is under 2 hours."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. Learn more in our Privacy Policy."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-20 pt-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Can't find what you're looking for? <a href="/contact" className="text-blue-600 hover:underline">Contact our team</a>.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're happy to help with any other questions you might have.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Support
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;