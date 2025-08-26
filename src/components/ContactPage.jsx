import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle,ClipboardCopy } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <br />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 drop-shadow-2xl">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-6">
          <div className="flex items-start space-x-4">
  {/* Icon on the left */}
  <div className="flex-shrink-0">
    <div className="w-12 h-12 bg-blue-100 bg-opacity-30 rounded-lg flex items-center justify-center">
      <Phone className="w-6 h-6 text-blue-300" />
    </div>
  </div>

  {/* Text and clipboard */}
  <div className="flex flex-col">
    <h3 className="font-semibold text-lg text-white">Phone</h3>

    {/* Number + clipboard */}
    <div className="flex items-center space-x-2 mt-1">
      <p className="text-gray-200">+91 0123456789</p>
      <ClipboardCopy
        className="w-4 h-4 text-gray-300 cursor-pointer hover:text-white transition"
        onClick={() => {
          navigator.clipboard.writeText("+91 0123456789");
          alert("📋 Phone number copied!");
        }}
      />
    </div>
  </div>
</div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-200">hello@company.com</p>
                  <p className="text-gray-200">support@company.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 bg-opacity-30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="text-gray-200">Abhaypada School road</p>
                  <p className="text-gray-200">Thakurpukur Metro Station</p>
                  <p className="text-gray-200">Kolkata 700063</p>
                </div>
              </div>

              {/* Map Section - Separated for better layout */}
              <div className="w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0826523087144!2d88.30018267599684!3d22.46352813695781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b714366eed1%3A0xa41a0d3c95a4cf1d!2sBapan%20Mondal%20Photography%20Academy!5e0!3m2!1sen!2sin!4v1756150359369!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{border: 0, borderRadius: '0.5rem'}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                  <p className="text-gray-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-200">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-200">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-gray-400">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-400 bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-400 bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-400 bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-400 bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-400 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors">
                  <option value="" className="text-gray-800">Select a subject</option>
                  <option value="Services" className="text-gray-800">Services</option>
                  <option value="Classes" className="text-gray-800">Classes</option>
                  <option value="Contact Me" className="text-gray-800">Contact Me</option>
                  <option value="Feedback" className="text-gray-800">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-400 bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                className="w-full bg-blue-600 bg-opacity-80 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 hover:bg-opacity-90 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors flex items-center justify-center space-x-2"
                onClick={() => alert('Message sent! (This is a demo)')}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Call Now
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Get help via email within 24 hours</p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;