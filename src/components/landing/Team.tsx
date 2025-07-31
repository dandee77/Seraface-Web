import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Users, Github, Linkedin, Twitter } from 'lucide-react';
export function Team() {
  const team = [{
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Dermatologist with 15+ years of experience, passionate about making skincare science accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    links: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }, {
    name: 'Michael Chen',
    role: 'CTO & AI Lead',
    bio: 'AI researcher with a background in computer vision and machine learning, focused on skin condition recognition.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    links: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }, {
    name: 'Emily Rodriguez',
    role: 'Product Designer',
    bio: 'UX/UI specialist with a passion for creating intuitive, accessible interfaces that simplify complex processes.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80',
    links: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }, {
    name: 'David Kim',
    role: 'Skincare Formulator',
    bio: 'Cosmetic chemist with expertise in ingredient science and product formulation for various skin types and concerns.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80',
    links: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
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
  return <section className="py-24 bg-gray-50" id="team">
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
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              {' '}
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            The passionate minds behind Seraface, dedicated to revolutionizing
            your skincare journey
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          {team.map((member, index) => <motion.div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" variants={itemVariants} whileHover={{
          y: -5
        }}>
              <div className="relative h-72 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
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
                  <motion.a href={member.links.twitter} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600" whileHover={{
                y: -2
              }}>
                    <Twitter className="h-4 w-4" />
                  </motion.a>
                  <motion.a href={member.links.linkedin} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600" whileHover={{
                y: -2
              }}>
                    <Linkedin className="h-4 w-4" />
                  </motion.a>
                  <motion.a href={member.links.github} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600" whileHover={{
                y: -2
              }}>
                    <Github className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}