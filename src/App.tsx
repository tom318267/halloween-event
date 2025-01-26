import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventHighlightsSection from "./components/EventHighlightsSection";
import ScheduleSection from "./components/ScheduleSection";
import GuestListSection from "./components/GuestListSection";
import Footer from "./components/Footer";
const App: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background: "linear-gradient(180deg, #322658 0%, #6C53BE 100%)",
      }}
    >
      <Header />

      <main>
        <Hero />
        <EventHighlightsSection />
        <ScheduleSection />
        <GuestListSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
