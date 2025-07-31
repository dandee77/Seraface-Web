import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
export function CTA({
  navigate
}) {
  return <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl overflow-hidden shadow-xl">
          <div className="px-8 py-16 md:p-16">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div className="w-full md:w-2/3 mb-10 md:mb-0 md:pr-8" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Start Your Skincare Journey Today
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-xl">
                  Join thousands of users who've transformed their skin health
                  with personalized recommendations and AI-powered insights.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button onClick={() => window.open('https://apps.apple.com', '_blank')} className="flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-medium rounded-lg shadow-lg hover:shadow-xl" whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Download className="h-5 w-5 mr-2" />
                    Download App
                  </motion.button>
                  <motion.button onClick={() => navigate('home')} className="flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10" whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.98
                }}>
                    Try Demo
                    <motion.div animate={{
                    x: [0, 5, 0]
                  }} transition={{
                    repeat: Infinity,
                    duration: 1.5
                  }}>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
              <motion.div className="w-full md:w-1/3" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3,
              duration: 0.8
            }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white font-medium">
                          Proven Results
                        </h3>
                        <p className="text-purple-100 text-sm">
                          Join our success stories
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3].map(item => <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                              <img src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 30}.jpg`} alt="User" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="flex items-center mb-1">
                                {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-3 h-3 text-yellow-300 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>)}
                              </div>
                              <p className="text-white text-sm">
                                {item === 1 && 'My skin has never looked better! The personalized routine was exactly what I needed.'}
                                {item === 2 && 'Finally found products that work for my sensitive skin. Thank you Seraface!'}
                                {item === 3 && 'The AI analysis was spot on. Cleared my acne in just 3 weeks!'}
                              </p>
                            </div>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}