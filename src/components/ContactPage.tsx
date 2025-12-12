import { Mail, MapPin, Phone, Send, Instagram, Github } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 geometric-pattern overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-tech-green/30 border border-cyan/30 rounded-full text-cyan text-sm mb-6 glow-cyan">
              Get In Touch
            </div>
            <h1 className="text-beige mb-6">
              Let's Build
              <span className="block text-cyan">Something Amazing</span>
            </h1>
            <p className="text-tan text-lg">
              Have a project in mind? We'd love to hear about it. Reach out to discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-24 bg-dark-card">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-beige mb-6">Contact Information</h2>
                <p className="text-tan mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-green to-cyan rounded-lg flex items-center justify-center flex-shrink-0 glow-cyan">
                    <Mail className="text-beige" size={20} />
                  </div>
                  <div>
                    <div className="text-beige font-semibold mb-1">Email</div>
                    <a href="mailto:info@stejon.com" className="text-cyan hover:text-beige transition-colors">
                      info@stejon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-green to-cyan rounded-lg flex items-center justify-center flex-shrink-0 glow-cyan">
                    <Phone className="text-beige" size={20} />
                  </div>
                  <div>
                    <div className="text-beige font-semibold mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-cyan hover:text-beige transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-green to-cyan rounded-lg flex items-center justify-center flex-shrink-0 glow-cyan">
                    <MapPin className="text-beige" size={20} />
                  </div>
                  <div>
                    <div className="text-beige font-semibold mb-1">Office</div>
                    <p className="text-tan">
                      Technology Hub District<br />
                      Innovation Center, Suite 400
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-tech-green/30">
                <div className="text-beige font-semibold mb-4">Follow Us</div>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/azibayrn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-tech-green hover:bg-cyan/20 border border-cyan/30 rounded-lg flex items-center justify-center text-cyan glow-cyan-hover transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://github.com/SamuelDonald"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-tech-green hover:bg-cyan/20 border border-cyan/30 rounded-lg flex items-center justify-center text-cyan glow-cyan-hover transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://twitter.com/AzibaHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-tech-green hover:bg-cyan/20 border border-cyan/30 rounded-lg flex items-center justify-center text-cyan glow-cyan-hover transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/AzibaTradeLens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-tech-green hover:bg-cyan/20 border border-cyan/30 rounded-lg flex items-center justify-center text-cyan glow-cyan-hover transition-all duration-300 text-xs font-bold"
                  >
                    TL
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/10 to-tech-green/10 rounded-3xl blur-2xl"></div>
              <form
                onSubmit={handleSubmit}
                className="relative bg-tech-green/20 backdrop-blur-sm border border-cyan/20 rounded-3xl p-8 glow-cyan-hover"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-beige mb-2 text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-cyan/30 rounded-lg text-beige placeholder-tan/50 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-beige mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-cyan/30 rounded-lg text-beige placeholder-tan/50 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-beige mb-2 text-sm">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-cyan/30 rounded-lg text-beige placeholder-tan/50 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-beige mb-2 text-sm">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-cyan/30 rounded-lg text-beige focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="web3">Web3 & Blockchain</option>
                      <option value="logistics">Logistics</option>
                      <option value="construction">Construction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-beige mb-2 text-sm">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-cyan/30 rounded-lg text-beige placeholder-tan/50 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 glow-cyan-hover'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitted && (
                    <div className="p-4 bg-cyan/20 border border-cyan/50 rounded-lg text-cyan text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="relative py-24 geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card/80 backdrop-blur-sm border border-cyan/20 rounded-3xl overflow-hidden">
            <div className="aspect-video bg-tech-green/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-cyan mx-auto mb-4" size={48} />
                <h3 className="text-beige mb-2">Visit Our Office</h3>
                <p className="text-tan">Technology Hub District, Innovation Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="relative py-24 bg-gradient-to-br from-tech-green to-tech-green-dark">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-beige mb-4">Business Hours</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-card/50 backdrop-blur-sm border border-cyan/30 rounded-2xl p-6">
              <div className="text-cyan font-semibold mb-3">Weekdays</div>
              <div className="text-tan">Monday - Friday: 9:00 AM - 6:00 PM</div>
            </div>
            <div className="bg-dark-card/50 backdrop-blur-sm border border-cyan/30 rounded-2xl p-6">
              <div className="text-cyan font-semibold mb-3">Weekend</div>
              <div className="text-tan">Saturday - Sunday: By Appointment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
