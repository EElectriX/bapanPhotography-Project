import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
            <br />
    
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
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 bg-opacity-30 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-200">+91 0123456789</p>
                  
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
                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="text-gray-200">Abhaypada School road</p>
                  <p className="text-gray-200">Thakurpukur Metro Station</p>
                  <p className="text-gray-200">Kolkata 700063</p>
                </div>
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
                ></textarea>
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

        {/* Emergency Contact */}
        {/* <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Phone className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-800">Emergency Contact</h3>
          </div>
          <p className="text-red-700">
            For urgent matters outside business hours, please call our emergency line: 
            <span className="font-semibold ml-2">+1 (555) 911-HELP</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ContactPage;