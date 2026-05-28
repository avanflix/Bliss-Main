import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="mt-16 bg-gray-50">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Terms of <span className="text-[#8b2727]">Service</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10 space-y-6">

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Welcome to Bliss Ventures. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services.
                  By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms,
                  then you may not access our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">2. Description of Service</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Bliss Ventures is a real estate development company that provides information about residential and commercial properties,
                  including apartments, villas, farmland communities, and related real estate services. Our website serves as an informational
                  platform for our projects and services.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">3. User Responsibilities</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    By using our website, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm sm:text-base">
                    <li>Provide accurate and complete information when contacting us</li>
                    <li>Use our website only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use our website to transmit harmful or malicious content</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not interfere with the proper functioning of our website</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">4. Real Estate Services</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our website provides information about real estate projects and services. Please note:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm sm:text-base">
                    <li>All property information is subject to change without notice</li>
                    <li>Prices, availability, and specifications may vary</li>
                    <li>We recommend verifying all information directly with our team</li>
                    <li>Property purchases are subject to separate legal agreements</li>
                    <li>We are not responsible for third-party real estate transactions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  The content, features, and functionality of our website, including but not limited to text, graphics, logos, images,
                  and software, are owned by Bliss Ventures and are protected by copyright, trademark, and other intellectual property laws.
                  You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">6. Privacy and Data Protection</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our website,
                  to understand our practices regarding the collection and use of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">7. Disclaimers</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by law:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm sm:text-base">
                    <li>We make no representations or warranties of any kind, express or implied</li>
                    <li>We do not guarantee the accuracy, completeness, or reliability of any content</li>
                    <li>We do not warrant that our website will be uninterrupted, error-free, or secure</li>
                    <li>We are not responsible for any damages arising from your use of our website</li>
                    <li>Property information and images are for illustrative purposes only</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  In no event shall Bliss Ventures, its directors, employees, or agents be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses, resulting from your use of our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">9. Links to Third-Party Websites</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our website may contain links to third-party websites or services that are not owned or controlled by us.
                  We have no control over and assume no responsibility for the content, privacy policies, or practices of any
                  third-party websites or services. You acknowledge and agree that we shall not be responsible or liable,
                  directly or indirectly, for any damage or loss caused by or in connection with use of or reliance on any
                  such content, goods, or services available on or through any such websites or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">10. Termination</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We may terminate or suspend access to our website immediately, without prior notice or liability,
                  for any reason whatsoever, including without limitation if you breach the Terms. Upon termination,
                  your right to use our website will cease immediately.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">11. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  These Terms shall be interpreted and governed by the laws of India, specifically Telangana jurisdiction,
                  without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject
                  to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">12. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                  If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">13. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm sm:text-base">
                    <p><strong>Email:</strong> <a href="mailto:info@blissventures.co" className="text-[#8b2727] hover:underline">info@blissventures.co</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+918374339608" className="text-[#8b2727] hover:underline">+91-98-0001-4477</a></p>
                    <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
                    <p><strong>Website:</strong> <a href="https://blissventures.co/" className="text-[#8b2727] hover:underline">https://blissventures.co/</a></p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-xs text-gray-500 text-center">
                  Last Updated: January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
