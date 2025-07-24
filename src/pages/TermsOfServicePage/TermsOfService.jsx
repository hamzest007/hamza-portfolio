import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-20 pt-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Terms of Service
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8 border border-gray-100">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            These Terms of Service ("Terms") govern your use of our website. By accessing or using our service, you agree to be bound by these Terms.
            If you disagree with any part of the terms, then you may not access the service.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">1</span>
              Use of the Site
            </h2>
            <p className="text-gray-600 pl-11">
              You may use the site for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair it.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">2</span>
              Intellectual Property
            </h2>
            <p className="text-gray-600 pl-11">
              The content, features, and functionality of the service are and will remain the exclusive property of our company and its licensors.
              All rights are reserved.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">3</span>
              Termination
            </h2>
            <p className="text-gray-600 pl-11">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">4</span>
              Limitation of Liability
            </h2>
            <p className="text-gray-600 pl-11">
              In no event shall the company be liable for any indirect, incidental, special, or consequential damages arising out of or in connection
              with your use of the service.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">5</span>
              Changes to Terms
            </h2>
            <p className="text-gray-600 pl-11">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">6</span>
              Contact Us
            </h2>
            <p className="text-gray-600 pl-11">
              If you have any questions about these Terms, you can contact us at: <br />
              <span className="text-blue-600 hover:underline">support@example.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;