import { motion } from "framer-motion";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Team } from "../components/landing/Team";
import { AppShowcase } from "../components/landing/AppShowcase";
import { CTA } from "../components/landing/CTA";
import { Footer } from "../components/landing/Footer";
type LandingPageProps = {
  navigate: (path: string) => void;
};

export function LandingPage({ navigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Background gradient elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-200 rounded-full filter blur-3xl opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-pink-200 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/5 h-1/5 bg-pink-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      <motion.div
        className="relative z-10"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Hero navigate={navigate} />
        <Features />
        <AppShowcase />
        <Team />
        <CTA navigate={navigate} />
        <Footer navigate={navigate} />
      </motion.div>
    </div>
  );
}
