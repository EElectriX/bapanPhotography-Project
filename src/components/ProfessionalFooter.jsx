import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const ProfessionalFooter = () => {
  

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bapan.mondal.7792052', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/bapanphotography/?hl=en', label: 'Instagram' },
    { icon: MapPin , href: 'https://maps.app.goo.gl/yUiXN7x36Rz3uAwJ7', label: 'Location' }
  
  ];

  return (
    <footer className="bg-gray-900 text-white">
      

     {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="text-sm text-gray-400">
              © 2024 Company Name. All rights reserved.
            </div>
            
        
            <div className="flex flex-wrap justify-center gap-y-2 text-sm text-gray-400">
              <Mail />
             bapanmondal@gmail.com  
             <Phone /> +91 xxxxxxxxxx
            </div>
             
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="text-center space-y-4">
          <h4 className="text-sm font-medium">Follow Us</h4>
          <div className="flex justify-center space-x-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
                >
                  <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;