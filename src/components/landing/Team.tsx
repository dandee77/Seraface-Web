import React, { Children } from "react";
import { motion } from "framer-motion";
import { Users, Github, Linkedin, Twitter } from "lucide-react";
export function Team() {
  const team = [
    {
      name: "Dandee N. Galang",
      role: "Backend Developer",
      bio: "Baclend developer with a passion for building scalable web applications and a keen interest in AI-driven solutions.",
      image: "dandee.png",
      links: {
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/dandee77/",
        github: "https://github.com/dandee77",
      },
    },
    {
      name: "Aaron Gabriel H. Ersando",
      role: "Frontend Developer",
      bio: "Creative frontend developer specializing in building user-friendly web applications with a focus on accessibility.",
      image: "aaron.png",
      links: {
        twitter: "#",
        linkedin:
          "https://www.linkedin.com/in/aaron-gabriel-ersando-411040292/",
        github: "https://github.com/aaronersando",
      },
    },
    {
      name: "Ian Kenneth Augustin",
      role: "Frontend Developer",
      bio: "Frontend developer with a knack for creating visually appealing web applications, dedicated to enhancing user experience.",
      image: "male.png  ",
      links: {
        twitter: "#",
        linkedin: "#",
        github: "https://github.com/Ianszzkieyyy",
      },
    },
    {
      name: "Francine Nicole D.G. Navarro",
      role: "AI Specialist & Graphic Designer",
      bio: "AI and graphic expert with a knack for creating visually stunning and functional designs that enhance user experience.",
      image: "female.png",
      links: {
        twitter: "#",
        linkedin:
          "https://www.linkedin.com/in/francine-nicole-navarro-030330374/",
        github: "https://github.com/kuulaid",
      },
    },
    {
      name: "Bernice Santiago",
      role: "Marketing Strategist",
      bio: "Marketing strategist with a focus on innovation and brand development, dedicated to promoting innovative tech solutions.",
      image: "female.png",
      links: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="py-24 bg-gray-50" id="team">
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
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              {" "}
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            The passionate minds behind Seraface, dedicated to revolutionizing
            your skincare journey
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          {team.slice(0, 3).map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-purple-200 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <motion.a
                    href={member.links.twitter}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                    whileHover={{
                      y: -2,
                    }}
                  >
                    <Twitter className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={member.links.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                    whileHover={{
                      y: -2,
                    }}
                  >
                    <Linkedin className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={member.links.github}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                    whileHover={{
                      y: -2,
                    }}
                  >
                    <Github className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row with remaining 2 members */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          {team.slice(3).map((member, index) => (
            <motion.div
              key={index + 3}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-purple-200 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <motion.a
                    href={member.links.twitter}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                    whileHover={{
                      y: -2,
                    }}
                  >
                    <Twitter className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={member.links.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                    whileHover={{
                      y: -2,
                    }}
                  >
                    <Linkedin className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={member.links.github}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                    whileHover={{
                      y: -2,
                    }}
                  >
                    <Github className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
