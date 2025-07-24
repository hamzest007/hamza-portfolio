import React from "react";
import {
  AboutSection,
  ContactSection,
  MainSection,
  ProjectSection,
} from "../../components/index";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
        {/* Smooth scrolling container */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <MainSection />
          </main>
        </div>
      </div>
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
