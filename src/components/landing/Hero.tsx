import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download, X } from "lucide-react";
import { useState } from "react";

export function Hero({ navigate }: { navigate: (path: string) => void }) {
  const [showModal, setShowModal] = useState(false);

  console.log("Hero component rendered, showModal:", showModal);
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column: Text content */}
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8"
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="inline-block mb-6">
              <motion.div
                className="flex items-center px-4 py-2 bg-white bg-opacity-80 backdrop-blur-sm rounded-full border border-purple-100 shadow-sm"
                whileHover={{
                  y: -3,
                }}
              >
                <Sparkles className="h-4 w-4 text-pink-500 mr-2" />
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                  AI-Powered Skincare Revolution
                </span>
              </motion.div>
            </div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
            >
              Transform Your
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                {" "}
                Skincare{" "}
              </span>
              Journey
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-lg"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            >
              Seraface combines cutting-edge AI technology with dermatological
              expertise to create personalized skincare recommendations tailored
              specifically to your unique skin needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
            >
              <motion.button
                onClick={() => {
                  console.log("Download App clicked");
                  setShowModal(true);
                }}
                className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download App
              </motion.button>
              <motion.button
                onClick={() => {
                  console.log("See Demo clicked");
                  setShowModal(true);
                }}
                className="flex items-center justify-center px-8 py-3 border border-purple-300 text-purple-600 font-medium rounded-lg hover:bg-purple-50"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                See Demo
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <ArrowRight className="h-5 w-5 ml-2" />
                </motion.div>
              </motion.button>
            </motion.div>
            <motion.div
              className="mt-8 flex items-center"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
            ></motion.div>
          </motion.div>
          {/* Right column: Phone mockup */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
          >
            <div className="relative max-w-xl mx-auto">
              {/* Phone frame */}
              <motion.div
                className="relative z-0 rounded-[3rem] overflow-hidden border-8 border-gray-800 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(124, 58, 237, 0.25)",
                    "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
                    "0 25px 50px -12px rgba(124, 58, 237, 0.25)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <img
                  src="./hero.webp"
                  alt="Seraface App"
                  className="w-full h-auto"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-70"></div>
              {/* Floating elements */}
              <motion.div
                className="absolute -right-16 top-20 bg-white rounded-lg p-3 shadow-lg z-20"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                }}
                whileHover={{
                  y: -5,
                }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
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
              <motion.div
                className="absolute -left-16 bottom-40 bg-white rounded-lg p-3 shadow-lg z-20"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1.4,
                  duration: 0.8,
                }}
                whileHover={{
                  y: -5,
                }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
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

      {/* Coming Soon Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => {
              console.log("Modal backdrop clicked");
              setShowModal(false);
            }}
          ></div>
          <motion.div
            className="relative bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Coming Soon!
              </h3>
              <p className="text-gray-600 mb-6">
                We're working hard to bring you the best skincare experience.
                Stay tuned for updates!
              </p>
              <motion.button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
