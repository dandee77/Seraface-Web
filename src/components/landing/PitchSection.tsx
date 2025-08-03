import React from "react";
import { motion } from "framer-motion";
import { Play, FileText, ExternalLink } from "lucide-react";

export function PitchSection() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-purple-50 to-pink-50"
      id="pitch"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              {" "}
              Vision{" "}
            </span>
            & Mission
          </h2>
          <p className="text-xl text-gray-600">
            Watch our pitch video and explore our comprehensive presentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-30 blur-lg"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/rWj8spd8s8o?si=XBPHg5_g3xDGeTcB"
                    title="Seraface Pitch Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pitch Deck Section */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Revolutionizing Skincare with AI
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Discover how Seraface is transforming the beauty industry
                  through personalized AI-driven skincare solutions. Watch our
                  pitch to learn about our innovative approach and market
                  potential.
                </p>
              </div>

              {/* Pitch Deck Card */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{
                  y: -5,
                }}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">
                        Seraface Pitch Deck
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Comprehensive presentation covering our business model,
                        market analysis, technology, and growth strategy.
                      </p>
                      <motion.button
                        onClick={() => {
                          // Open PDF in new tab - you'll need to place your PDF in the public folder
                          window.open("./SERAFACE _PITCH_DECK.pdf", "_blank");
                        }}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Pitch Deck
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </motion.div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                    AI-Powered
                  </div>
                  <div className="text-sm text-gray-600">Analysis</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                    Personalized
                  </div>
                  <div className="text-sm text-gray-600">Recommendations</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
