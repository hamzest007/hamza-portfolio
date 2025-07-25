import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10 md:px-20 pt-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Cookie Policy
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            This policy explains how we use cookies and similar technologies on our website.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                What Are Cookies?
              </h2>
              <p className="text-gray-600">
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                How We Use Cookies
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Essential</td>
                      <td className="px-4 py-4 text-sm text-gray-600">Necessary for the website to function properly</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Performance</td>
                      <td className="px-4 py-4 text-sm text-gray-600">Help us understand how visitors interact with our site</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Functional</td>
                      <td className="px-4 py-4 text-sm text-gray-600">Remember your preferences and settings</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">1 month</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Marketing</td>
                      <td className="px-4 py-4 text-sm text-gray-600">Used to deliver relevant ads</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Managing Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      If you disable cookies, some features of our website may not function properly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Third-Party Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                We may also use various third-party cookies including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Google Analytics for website analytics</li>
                <li>Facebook Pixel for advertising tracking</li>
                <li>Hotjar for user behavior analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Changes to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at:<br />
                <a href="mailto:privacy@example.com" className="text-blue-600 hover:underline">privacy@example.com</a>
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium text-gray-900">Cookie Preferences</h3>
              <p className="text-sm text-gray-600">Manage your cookie settings</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Necessary Only
              </button>
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;