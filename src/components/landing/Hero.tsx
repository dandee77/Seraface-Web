import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Download } from 'lucide-react';
export function Hero({
  navigate
}) {
  return <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column: Text content */}
          <motion.div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <div className="inline-block mb-6">
              <motion.div className="flex items-center px-4 py-2 bg-white bg-opacity-80 backdrop-blur-sm rounded-full border border-purple-100 shadow-sm" whileHover={{
              y: -3
            }}>
                <Sparkles className="h-4 w-4 text-pink-500 mr-2" />
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                  AI-Powered Skincare Revolution
                </span>
              </motion.div>
            </div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }}>
              Transform Your
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                {' '}
                Skincare{' '}
              </span>
              Journey
            </motion.h1>
            <motion.p className="text-lg text-gray-600 mb-8 max-w-lg" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }}>
              Seraface combines cutting-edge AI technology with dermatological
              expertise to create personalized skincare recommendations tailored
              specifically to your unique skin needs.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }}>
              <motion.button onClick={() => window.open('https://apps.apple.com', '_blank')} className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl" whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.98
            }}>
                <Download className="h-5 w-5 mr-2" />
                Download App
              </motion.button>
              <motion.button onClick={() => {
              const demoSection = document.getElementById('app-showcase');
              demoSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="flex items-center justify-center px-8 py-3 border border-purple-300 text-purple-600 font-medium rounded-lg hover:bg-purple-50" whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.98
            }}>
                See Demo
                <motion.div animate={{
                x: [0, 5, 0]
              }} transition={{
                repeat: Infinity,
                duration: 1.5
              }}>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </motion.div>
              </motion.button>
            </motion.div>
            <motion.div className="mt-8 flex items-center" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9,
            duration: 0.8
          }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://randomuser.me/api/portraits/women/${20 + i}.jpg`} alt="User" className="w-full h-full object-cover" />
                  </div>)}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>)}
                </div>
                <p className="text-sm text-gray-600">From 2,000+ happy users</p>
              </div>
            </motion.div>
          </motion.div>
          {/* Right column: Phone mockup */}
          <motion.div className="w-full md:w-1/2 relative" initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }}>
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <motion.div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-gray-800 shadow-2xl" animate={{
              boxShadow: ['0 25px 50px -12px rgba(124, 58, 237, 0.25)', '0 25px 50px -12px rgba(236, 72, 153, 0.25)', '0 25px 50px -12px rgba(124, 58, 237, 0.25)']
            }} transition={{
              duration: 5,
              repeat: Infinity
            }}>
                <img src="/image.png" alt="Seraface App" className="w-full h-auto" />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-70"></div>
              {/* Floating elements */}
              <motion.div className="absolute -right-16 top-20 bg-white rounded-lg p-3 shadow-lg" initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 1.2,
              duration: 0.8
            }} whileHover={{
              y: -5
            }}>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium">
                      Skin Analysis Complete
                    </p>
                    <p className="text-xs text-gray-500">3 recommendations</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="absolute -left-16 bottom-40 bg-white rounded-lg p-3 shadow-lg" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 1.4,
              duration: 0.8
            }} whileHover={{
              y: -5
            }}>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium">Routine Updated</p>
                    <p className="text-xs text-gray-500">Morning & Evening</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>;
}