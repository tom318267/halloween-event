import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      {/* Fog layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-fog-drift-1"
          style={{ backgroundImage: "url('/images/fog.png')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-fog-drift-2"
          style={{ backgroundImage: "url('/images/fog.png')" }}
        ></div>
      </div>

      {/* Content wrapper */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1256px] mx-auto">
        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-8 z-10">
          <h1 className="text-5xl md:text-[90px] font-[nightscary] welcome animate-smooth-reveal">
            Welcome to the Fright Night Festival – Where the Night Comes Alive!
          </h1>
          <p className="text-lg mt-4 font-albertsans font-light animate-smooth-fade-in opacity-0">
            Join us for a spine-tingling Halloween event filled with costumes,
            haunted attractions, and fun for all ages. Whether you're a
            thrill-seeker or looking for family-friendly activities, we have
            something for everyone.
          </p>
          <button className="mt-6 uppercase bg-green-500 hover:bg-green-500 text-black py-3 px-6 font-albertsans rounded-lg font-semibold shadow-lg transition-all hover:scale-105 transform duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-green-500">
            Join the party
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 pt-24 md:mt-0 z-10">
          <img
            src="/images/house.png"
            alt="Haunted House"
            className="w-full animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
