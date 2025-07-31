import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Clock, Users, MapPin, ShieldCheck, Zap } from 'lucide-react';
export function Features() {
  const features = [{
    icon: Sparkles,
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI algorithms analyze your skin to identify conditions and recommend the perfect products.',
    color: 'from-purple-400 to-purple-600'
  }, {
    icon: Camera,
    title: 'Skin Scanning',
    description: 'Take a selfie and get instant analysis of your skin concerns with our advanced computer vision technology.',
    color: 'from-pink-400 to-pink-600'
  }, {
    icon: Clock,
    title: 'Custom Routines',
    description: 'Get personalized morning and evening skincare routines tailored to your specific needs and goals.',
    color: 'from-purple-400 to-purple-600'
  }, {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with others on similar skincare journeys to share experiences and recommendations.',
    color: 'from-pink-400 to-pink-600'
  }, {
    icon: MapPin,
    title: 'Find Nearby Experts',
    description: 'Locate dermatologists and skincare stores in your area for professional help and product purchases.',
    color: 'from-purple-400 to-purple-600'
  }, {
    icon: ShieldCheck,
    title: 'Science-Backed',
    description: 'All recommendations are based on dermatological research and scientific evidence for optimal results.',
    color: 'from-pink-400 to-pink-600'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return <section className="py-24 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Your
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              {' '}
              Skincare Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover how Seraface revolutionizes your daily skincare routine
            with cutting-edge technology
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          {features.map((feature, index) => <motion.div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" variants={itemVariants} whileHover={{
          y: -5
        }}>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} mb-5 shadow-md`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </motion.div>)}
        </motion.div>
        <motion.div className="mt-16 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }}>
          <a href="#app-showcase" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700" onClick={e => {
          e.preventDefault();
          document.getElementById('app-showcase')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            See how it works
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>;
}