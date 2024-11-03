// EventHighlightsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import EventHighlight from "./EventHighlight";

const EventHighlightsSection: React.FC = () => {
  return (
    <section
      className="bg-purple-900 py-[72px] md:py-[142px] relative"
      id="event-highlights"
      style={{
        backgroundColor: "#2C1D63", // Set the background color
      }}
    >
      {/* Pseudo-element for background image with opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/halloweenbackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl text-white text-center font-[nightscary] font-normal mb-8"
        >
          Event Highlights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1256px] mx-auto">
          {[
            {
              imageSrc: "/images/house7.png",
              altText: "Haunted House",
              title: "Haunted House Experience",
              description:
                "Step into our bone-chilling haunted house, where every room is scarier than the last. Can you survive the night?",
            },
            {
              imageSrc: "/images/pumpkin.png",
              altText: "Pumpkin Carving",
              title: "Pumpkin Patch & Carving Contest",
              description:
                "Pick the perfect pumpkin and show off your carving skills in our spooky contest! Prizes awarded for the most creative and terrifying designs.",
            },
            {
              imageSrc: "/images/cauldron.png",
              altText: "Trick or Treat",
              title: "Trick-or-Treat Trail",
              description:
                "Bring the kids along for safe trick-or-treating throughout the event. Collect sweets and treats from themed booths around the venue!",
            },
            {
              imageSrc: "/images/costume.png",
              altText: "Costume Contest",
              title: "Costume Contest",
              description:
                "Dress to impress and enter our epic costume contest. Categories include Scariest, Funniest, Best DIY, and Group costumes!",
              className: "w-[158px]",
            },
            {
              imageSrc: "/images/live-music.png",
              altText: "Live Performances",
              title: "Live Performances",
              description:
                "Enjoy eerie live music and chilling performances, including Halloween-themed magic shows and dance-offs.",
              className: "w-[290px]",
            },
            {
              imageSrc: "/images/scarydrink.png",
              altText: "Spooky Food and Drinks",
              title: "Spooky Food & Drinks",
              description:
                "Visit our food stalls for creepy-crawly snacks and spooky-themed drinks. From blood-red cocktails to monster-shaped treats!",
            },
          ].map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Stagger the animations
              }}
            >
              <EventHighlight {...highlight} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlightsSection;
