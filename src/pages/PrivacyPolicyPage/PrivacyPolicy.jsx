import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-20 pt-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8 border border-gray-100">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website. Please read
            this privacy policy carefully. If you do not agree with the terms of
            this privacy policy, please do not access the site.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                1
              </span>
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-3 pl-11">
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>
            <ul className="text-gray-600 pl-14 space-y-2 list-disc">
              <li>Personal Data</li>
              <li>Derivative Data</li>
              <li>Mobile Device Data</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                2
              </span>
              Use of Your Information
            </h2>
            <p className="text-gray-600 mb-3 pl-11">
              We may use information collected about you via the Site to:
            </p>
            <ul className="text-gray-600 pl-14 space-y-2 list-disc">
              <li>Provide and manage your account</li>
              <li>Improve our services</li>
              <li>Respond to customer service requests</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                3
              </span>
              Disclosure of Your Information
            </h2>
            <p className="text-gray-600 mb-3 pl-11">
              We may share information we have collected about you in certain
              situations:
            </p>
            <ul className="text-gray-600 pl-14 space-y-2 list-disc">
              <li>By Law or to Protect Rights</li>
              <li>Third-Party Service Providers</li>
              <li>Business Transfers</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                4
              </span>
              Tracking Technologies
            </h2>
            <p className="text-gray-600 pl-11">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies to help customize the Site and improve your
              experience.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                5
              </span>
              Contact Us
            </h2>
            <p className="text-gray-600 pl-11">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
              <br />
              <span className="text-blue-600 hover:underline">
                support@example.com
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
