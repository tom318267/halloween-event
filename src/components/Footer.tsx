import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Fright Night Festival
            </h3>
            <p className="mb-4">
              Unleashing terror and excitement this Halloween season!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Event Highlights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>23 Spooky Hollow Lane</li>
              <li>Haunted Falls, BOO 1313 USA</li>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@frightnightfestival.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1a1a1a] mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Fright Night Festival. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
