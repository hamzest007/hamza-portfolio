import React from "react";
import {
  NavSection,
  MainSection,
  AboutSection,
  ContactSection,
  Projects,
} from "../components";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Smooth scrolling container */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <MainSection />
        </main>
        <AboutSection />
        <Projects />
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;
