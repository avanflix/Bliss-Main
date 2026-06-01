import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Calendar, Home } from 'lucide-react';

const BlissOneFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1f2020] to-[#2a2a2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#8b2727] rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bliss One</h3>
                <p className="text-[#8b2727] text-sm font-medium">Premium Residential Development</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Experience luxury living at Bliss One - Yamnampet. Where modern architecture meets
              exceptional amenities, creating the perfect sanctuary for contemporary lifestyles.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Bliss-Ventures/100092061741531/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#8b2727] transition-colors"
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/blissventures_pvt.ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#8b2727] transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Explore Bliss One</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/bliss-one" className="text-gray-300 hover:text-[#8b2727] transition-colors flex items-center space-x-2">
                  <span>•</span>
                  <span>Overview</span>
                </Link>
              </li>
              <li>
                <Link href="/bliss-one/plans" className="text-gray-300 hover:text-[#8b2727] transition-colors flex items-center space-x-2">
                  <span>•</span>
                  <span>Floor Plans</span>
                </Link>
              </li>
              <li>
                <Link href="/bliss-one/gallery" className="text-gray-300 hover:text-[#8b2727] transition-colors flex items-center space-x-2">
                  <span>•</span>
                  <span>Project Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/bliss-one/contact" className="text-gray-300 hover:text-[#8b2727] transition-colors flex items-center space-x-2">
                  <span>•</span>
                  <span>Get In Touch</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Visit Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#8b2727] flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Yamnampet</p>
                  <p>Hyderabad, Telangana</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={16} className="text-[#8b2727] flex-shrink-0" />
                <span className="text-gray-300">Launch: Coming Soon</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#8b2727] flex-shrink-0" />
                <a
                  href="tel:+9198-0001-4477"
                  className="text-gray-300 hover:text-[#8b2727] transition-colors"
                >
                  +91-98-0001-4477
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#8b2727] flex-shrink-0" />
                <a
                  href="mailto:info@blissventures.co"
                  className="text-gray-300 hover:text-[#8b2727] transition-colors"
                >
                  info@blissventures.co
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bliss Ventures. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/" className="text-gray-400 hover:text-[#8b2727] transition-colors text-sm flex items-center space-x-1">
              <span>←</span>
              <span>Back to Bliss Ventures</span>
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-[#8b2727] transition-colors text-sm">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlissOneFooter;
