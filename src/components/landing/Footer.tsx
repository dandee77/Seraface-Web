import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';
export function Footer({
  navigate
}) {
  const footerLinks = [{
    title: 'Product',
    links: [{
      name: 'Features',
      href: '#features'
    }, {
      name: 'How it Works',
      href: '#app-showcase'
    }, {
      name: 'Pricing',
      href: '#'
    }, {
      name: 'FAQ',
      href: '#'
    }]
  }, {
    title: 'Company',
    links: [{
      name: 'About Us',
      href: '#team'
    }, {
      name: 'Careers',
      href: '#'
    }, {
      name: 'Blog',
      href: '#'
    }, {
      name: 'Press',
      href: '#'
    }]
  }, {
    title: 'Resources',
    links: [{
      name: 'Skincare Guide',
      href: '#'
    }, {
      name: 'Ingredient Dictionary',
      href: '#'
    }, {
      name: 'Skin Conditions',
      href: '#'
    }, {
      name: 'Community',
      href: '#'
    }]
  }, {
    title: 'Legal',
    links: [{
      name: 'Privacy Policy',
      href: '#'
    }, {
      name: 'Terms of Service',
      href: '#'
    }, {
      name: 'Cookie Policy',
      href: '#'
    }, {
      name: 'GDPR',
      href: '#'
    }]
  }];
  const socialLinks = [{
    icon: Instagram,
    href: '#'
  }, {
    icon: Twitter,
    href: '#'
  }, {
    icon: Facebook,
    href: '#'
  }, {
    icon: Youtube,
    href: '#'
  }];
  return <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-gray-200">
          <div className="col-span-2">
            <div className="flex items-center mb-5">
              <motion.div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3" whileHover={{
              rotate: 15
            }}>
                <Sparkles className="h-5 w-5 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Seraface
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Transform your skincare routine with AI-powered personalization.
              Get recommendations tailored to your unique skin needs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <motion.a key={index} href={social.href} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 border border-gray-200 hover:text-purple-600 hover:border-purple-300" whileHover={{
              y: -3
            }}>
                  <social.icon className="h-5 w-5" />
                </motion.a>)}
            </div>
          </div>
          {footerLinks.map((column, index) => <div key={index} className="col-span-1">
              <h4 className="font-medium text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => <li key={linkIndex}>
                    <a href={link.href} onClick={e => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }} className="text-gray-600 hover:text-purple-600 transition-colors">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Seraface. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <motion.a href="#" className="flex items-center text-gray-500 hover:text-purple-600 mr-6" whileHover={{
            y: -2
          }}>
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">Contact Us</span>
            </motion.a>
            <motion.button onClick={() => navigate('home')} className="flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium" whileHover={{
            scale: 1.03
          }} whileTap={{
            scale: 0.98
          }}>
              Try the App
            </motion.button>
          </div>
        </div>
      </div>
    </footer>;
}