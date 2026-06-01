'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    project: '',
    location: '',
    brochure: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };

      // If subject is a project, update project field
      if (name === 'subject') {
        if (['Bliss One', 'Bliss Bilva', 'Sri Bliss'].includes(value)) {
          newData.project = value;
        } else {
          newData.project = '';
        }
      }
      return newData;
    });
  };

  // Handle URL parameters and pre-fill form data
  useEffect(() => {
    const project = searchParams.get('project');
    const location = searchParams.get('location');
    const brochure = searchParams.get('brochure');

    if (project || location || brochure) {
      // Map project names to dropdown values
      let subjectValue = '';
      if (project && ['Bliss One', 'Bliss Bilva', 'Sri Bliss'].includes(project)) {
        subjectValue = project;
      } else {
        subjectValue = 'general';
      }

      setFormData(prev => ({
        ...prev,
        project: project || '',
        location: location || '',
        brochure: brochure || '',
        subject: subjectValue,
        message: location ? `I am interested in the ${project} project located at ${location}. Please provide me with more information.` : prev.message
      }));

      // Note: Brochure will be downloaded on form submission success
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          project: formData.project,
          location: formData.location,
          brochure: formData.brochure
        }),
      });

      if (response.ok) {
        // Download brochure if it's one of the main projects
        if (formData.brochure && (formData.project === 'Bliss One' || formData.project === 'Bliss Bilva' || formData.project === 'Sri Bliss')) {
          const link = document.createElement('a');
          link.href = formData.brochure;
          link.download = `${formData.project.replace(/\s+/g, '_')}_Brochure.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          project: '',
          location: '',
          brochure: ''
        });
        toast.success('Thank you for your message! We have sent you a confirmation email and will respond within 24-72 hours.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Sorry, there was an error sending your message. Please try again later or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-16 sm:pt-18 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1f2020] mb-4 sm:mb-6">
            Contact <span className="text-[#8b2727]">Us</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
            Ready to start your dream project? Get in touch with our team of experts.
            We&apos;re here to help you find the perfect property or answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1f2020] mb-4 sm:mb-6">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                  Whether you&apos;re looking for your dream home, interested in investment opportunities,
                  or want to learn more about our projects, we&apos;re here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#8b2727]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-[#8b2727]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1f2020] mb-1 sm:mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="tel:+9198-0001-4477" className="hover:text-[#8b2727] transition-colors">
                        +91-83-7433-9608
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#8b2727]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-[#8b2727]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1f2020] mb-1 sm:mb-2">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="mailto:info@blissventures.co" className="hover:text-[#8b2727] transition-colors">
                        info@blissventures.co
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#8b2727]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-[#8b2727]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1f2020] mb-1 sm:mb-2">Location</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Hyderabad, Telangana<br />
                      India
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Serving Telangana region</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#8b2727]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-[#8b2727]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1f2020] mb-1 sm:mb-2">Business Hours</h3>
                    <div className="text-gray-600 text-xs sm:text-sm space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1f2020] mb-4 sm:mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2727] focus:border-transparent outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2727] focus:border-transparent outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2727] focus:border-transparent outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2727] focus:border-transparent outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a subject</option>
                      <option value="Bliss One">Bliss One</option>
                      <option value="Bliss Bilva">Bliss Bilva</option>
                      <option value="Sri Bliss">Sri Bliss</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2727] focus:border-transparent outline-none transition-colors resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8b2727] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-[#6d1e1e] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
              <iframe
                title="Bliss One Map"

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1777607036825!2d78.6548887756887!3d17.451203983446934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb77529327f749%3A0x43bc67fbdd22b4a9!2sBliss%20One%20Apartments!5e0!3m2!1sen!2sin!4v1764178681287!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1f2020',
            color: '#ffffff',
            border: '1px solid #8b2727',
          },
          success: {
            iconTheme: {
              primary: '#8b2727',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#dc2626',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </div>
  );
};

const ContactWithSuspense = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#8b2727]"></div>
      </div>
    }>
      <Contact />
    </Suspense>
  );
};

export default ContactWithSuspense;
