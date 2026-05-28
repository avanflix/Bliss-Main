import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f2020] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-white">Bliss Ventures</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating vibrant, sustainable communities where modern living meets nature,
              enabling customers to experience comfort, wellness, and a sense of belonging.
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
              <a
                href="https://twitter.com/blissventuresin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#8b2727] transition-colors"
                title="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bliss-ventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#8b2727] transition-colors"
                title="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/board-members" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  Board Members
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#8b2727] flex-shrink-0" />
                <span className="text-gray-300">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#8b2727] flex-shrink-0" />
                <a
                  href="tel:+918374339608"
                  className="text-gray-300 hover:text-[#8b2727] transition-colors"
                >
                  +91-8374339608
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

          {/* Our Projects */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Projects</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects?project=bliss-one" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  Bliss One - Yamnampet, Ghatkesar, Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/projects?project=bliss-bilva" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                  Bliss Bilva - Sangareddy
                </Link>
              </li>
              <li>
                <Link href="/projects?project=sri-bliss" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                Sri Bliss - Golconda Hills, Neknampur, Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/projects?project=bliss-fort-view" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                Bliss Fort View - Golconda Hills, Neknampur, Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/projects?project=bliss-castle" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                Bliss Castle - Shilpa Layout, Hitech City
                </Link>
              </li>
              <li>
                <Link href="/projects?project=bliss-paradise" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                Bliss Paradise - Shilpa Layout, Hitech City
                </Link>
              </li>
              <li>
                <Link href="/projects?project=bliss-residency" className="text-gray-300 hover:text-[#8b2727] transition-colors">
                Bliss Residency - Sri Ramnagar, Hitech City
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-4 pt-4 md:mt-8 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bliss Ventures. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-[#8b2727] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-[#8b2727] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
