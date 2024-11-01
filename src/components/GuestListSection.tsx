import React from "react";
import { motion } from "framer-motion";

const GuestListSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-[#2D1B5A] min-h-screen p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row max-w-[1256px] items-center w-full bg-[#2D1B5A] text-white"
      >
        {/* Left Section - Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 p-6 lg:p-8"
        >
          <h2 className="text-5xl lg:text-7xl w-[85%] font-[nightscary] font-normal mb-4">
            Get on the Guest List – The Night Awaits!
          </h2>
          <p className="text-base lg:text-lg mb-6 lg:mb-8 font-light">
            Join the guest list and don’t miss out on the spooky fun!
          </p>

          {/* Contact Information */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div>
                <img
                  src="/images/contact.png"
                  alt="Phone Icon"
                  className="w-5 h-5 lg:w-[70px] lg:h-[70px]"
                />
              </div>
              <div>
                <p className="font-semibold">Contact Us</p>
                <p>555-555-5555</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div>
                <img
                  src="/images/location.png"
                  alt="Location Icon"
                  className="w-5 h-5 lg:w-[70px] lg:h-[70px]"
                />
              </div>
              <div>
                <p className="font-semibold">123 Spooky Hollow Lane</p>
                <p>Haunted Falls, BOO 1313 USA</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-white p-6 lg:p-12 rounded-lg shadow-lg max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-0"
        >
          <h3 className="text-2xl lg:text-5xl font-[nightscary] text-[#333] font-normal text-center mb-4 lg:mb-6">
            Join the Party!
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full text-[#333] border border-gray-300 p-2 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border text-[#333] border-gray-300 p-2 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border text-[#333] border-gray-300 p-2 rounded"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-[#333] font-semibold py-2 rounded hover:bg-orange-600 transition-colors"
            >
              Register
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GuestListSection;
