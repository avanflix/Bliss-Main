import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="mt-16 bg-gray-50">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Privacy <span className="text-[#8b2727]">Policy</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. This policy explains how Bliss Ventures collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10 space-y-6">

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Welcome to Bliss Ventures. We are committed to protecting your privacy and ensuring the security of your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f2020] mb-2">Personal Information</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      We may collect personal information such as your name, email address, phone number, and contact details when you:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 text-sm sm:text-base">
                      <li>Contact us through our website forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Inquire about our real estate projects</li>
                      <li>Request property information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1f2020] mb-2">Automatically Collected Information</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      We automatically collect certain information when you visit our website, including:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 text-sm sm:text-base">
                      <li>IP address and location information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referral sources</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm sm:text-base">
                  <li>To respond to your inquiries and provide customer service</li>
                  <li>To send you information about our real estate projects and services</li>
                  <li>To communicate about property viewings and investment opportunities</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                  <li>To send marketing communications (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">4. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm sm:text-base">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who assist our operations (under strict confidentiality agreements)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">5. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
                  You can control cookie settings through your browser preferences. Some features may not function properly without cookies.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">6. Data Security</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">7. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm sm:text-base">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate information</li>
                  <li>Right to erasure (right to be forgotten)</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">8. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">9. Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                  We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">10. Children&apos;s Privacy</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
                  If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">11. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page
and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4">12. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm sm:text-base">
                    <p><strong>Email:</strong> <a href="mailto:info@blissventures.co" className="text-[#8b2727] hover:underline">info@blissventures.co</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+918374339608" className="text-[#8b2727] hover:underline">+91-98-0001-4477</a></p>
                    <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
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

export default PrivacyPolicy;
