import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import { FaGithub, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import avestaLogo from '../../assets/images/avestalogo.png';

const Hero = () => {
    // Code snippet to display in the code window
    const codeSnippet = `const developer = {
  name: "Armin Amiri",
  role: "Full-Stack Developer",
  location: "Melbourne, Australia",
  
  contact: {
    email: "arminamiri11228@gmail.com",
    phone: "+61 401 267 267"
  },
  
  expertise: [
    "React & Next.js",
    "Django & Node.js", 
    "PostgreSQL & MongoDB",
    "Docker & AWS",
    "Tailwind CSS"
  ],
  
  passion: "Building impactful applications",
  approach: "Clean code, great UX",
  
  availableForWork: true
};`;

    // Professional animation variants with refined easing
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1] // Smooth professional easing
            }
        }
    };

    const codeWindowVariants = {
        hidden: { opacity: 0, scale: 0.96, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Smooth scroll to projects section
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('.projects-container');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Scroll down to next section
    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">
            {/* Subtle animated background gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.15, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.2, 0.15],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
                    
                    {/* Left Side - Content (5 columns) */}
                    <motion.div 
                        className="lg:col-span-5 space-y-6 lg:space-y-7 lg:pr-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Avesta Logo with Creative Light Background */}
                        <motion.div variants={itemVariants}>
                            <div className="relative group inline-block">
                                {/* Light background container for logo */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/30 overflow-hidden">
                                    {/* Subtle pattern overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
                                    {/* Logo */}
                                    <img 
                                        src={avestaLogo} 
                                        alt="Avesta Logo" 
                                        className="relative w-12 h-12 object-contain z-10"
                                    />
                                </div>
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            </div>
                        </motion.div>

                        {/* Status Badge */}
                        <motion.div variants={itemVariants}>
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full hover:bg-emerald-500/15 transition-colors duration-300">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                Building{' '}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                                        impactful
                                    </span>
                                    <motion.span
                                        className="absolute -right-6 -top-1 lg:-right-8 lg:-top-2"
                                        animate={{ rotate: [0, 14, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <HiSparkles className="text-yellow-400 text-xl lg:text-2xl" />
                                    </motion.span>
                                </span>
                                <br />
                                web experiences
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={itemVariants}>
                            <p className="text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl">
                                Full-Stack Developer passionate about creating{' '}
                                <span className="text-slate-300 font-medium">scalable</span>,{' '}
                                <span className="text-slate-300 font-medium">user-centric</span> applications. 
                                Specializing in React and Django with a focus on clean code and exceptional user experiences.
                            </p>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-3 pt-2"
                        >
                            {/* Primary Button */}
                            <button 
                                onClick={scrollToProjects}
                                aria-label="View my projects"
                                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <span>View Projects</span>
                                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            {/* Secondary Link */}
                            <a 
                                href="https://github.com/zNiGhTFuRyZNTT"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                            >
                                <FaGithub className="text-lg" />
                                <span>View GitHub</span>
                                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </motion.div>

                        {/* Stats/Social Proof */}
                        <motion.div 
                            variants={itemVariants}
                            className="hidden lg:flex items-center gap-8 pt-4 text-sm text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                                    <span className="text-blue-400 font-bold text-xs">5+</span>
                                </div>
                                <span>Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                                    <span className="text-purple-400 font-bold text-xs">20+</span>
                                </div>
                                <span>Projects Delivered</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Code Window (7 columns) */}
                    <motion.div 
                        className="lg:col-span-7"
                        variants={codeWindowVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative">
                            {/* Code Window */}
                            <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-800/50 overflow-hidden">
                                {/* Top Bar with gradient */}
                                <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 px-4 py-3">
                                    {/* macOS-style dots */}
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-500 transition-colors cursor-pointer"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-500 transition-colors cursor-pointer"></div>
                                    </div>
                                </div>

                                {/* File Tabs */}
                                <div className="bg-slate-800/90 px-4 flex gap-1 border-b border-slate-700/50">
                                    <div className="px-4 py-2.5 bg-slate-900/90 text-blue-400 text-sm font-medium border-t-2 border-blue-500">
                                        About.jsx
                                    </div>
                                    <div className="px-4 py-2.5 text-slate-500 text-sm font-medium hover:text-slate-400 cursor-pointer transition-colors">
                                        Skills.tsx
                                    </div>
                                    <div className="px-4 py-2.5 text-slate-500 text-sm font-medium hover:text-slate-400 cursor-pointer transition-colors">
                                        Projects.tsx
                                    </div>
                                </div>

                                {/* Code Content */}
                                <div className="p-6 bg-[#1e293b] overflow-x-auto">
                                    <CodeBlock
                                        text={codeSnippet}
                                        language="javascript"
                                        showLineNumbers={true}
                                        theme={atomOneDark}
                                        customStyle={{
                                            background: 'transparent',
                                            fontSize: '0.8rem',
                                            fontFamily: '"Fira Code", Monaco, Consolas, "Courier New", monospace',
                                            padding: '0',
                                        }}
                                    />
                                </div>

                                {/* Subtle glow effect */}
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl -z-10 opacity-50"></div>
                            </div>

                            {/* Floating animation effect */}
                            <motion.div
                                className="absolute inset-0 -z-20"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                >
                    <button
                        onClick={scrollDown}
                        aria-label="Scroll down"
                        className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-400 transition-colors group"
                    >
                        <span className="text-xs font-medium">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaChevronDown className="text-sm" />
                        </motion.div>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
