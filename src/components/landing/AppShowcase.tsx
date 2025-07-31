import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';
export function AppShowcase() {
  const steps = [{
    title: 'Create Your Skin Profile',
    description: 'Answer a few questions about your skin type, concerns, and goals to help our AI understand your needs.',
    image: 'https://images.unsplash.com/photo-1591343395902-1adbe8487076?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    title: 'Scan Your Face',
    description: 'Take a selfie to allow our advanced AI to analyze your skin conditions and identify specific concerns.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
  }, {
    title: 'Get Personalized Recommendations',
    description: 'Receive a curated list of products and a custom routine tailored specifically to your skin needs.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a0d92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }];
  return <section className="py-24 bg-white" id="app-showcase">
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
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              {' '}
              Seraface{' '}
            </span>
            Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform your skincare routine
          </p>
        </motion.div>
        <div className="space-y-24">
          {steps.map((step, index) => <motion.div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.8
        }}>
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <motion.div className="relative" whileHover={{
              scale: 1.02
            }}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-30 blur-lg"></div>
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img src={step.image} alt={step.title} className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-pink-600/10"></div>
                  </div>
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {[1, 2, 3].map(item => <motion.li key={item} className="flex items-start" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: item * 0.1 + 0.3
              }}>
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700">
                        {index === 0 && item === 1 && 'Simple questionnaire to understand your skin'}
                        {index === 0 && item === 2 && 'Identify allergies and sensitivities'}
                        {index === 0 && item === 3 && 'Set your skincare goals and budget'}
                        {index === 1 && item === 1 && 'Advanced computer vision technology'}
                        {index === 1 && item === 2 && 'Detects acne, wrinkles, dark spots, and more'}
                        {index === 1 && item === 3 && 'Privacy-focused analysis keeps your data secure'}
                        {index === 2 && item === 1 && 'Personalized product recommendations'}
                        {index === 2 && item === 2 && 'Custom morning and evening routines'}
                        {index === 2 && item === 3 && 'Budget-friendly options for every need'}
                      </p>
                    </motion.li>)}
                </ul>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}