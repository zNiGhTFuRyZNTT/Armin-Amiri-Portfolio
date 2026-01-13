import React from "react";
import Armin from '../../assets/images/armin3.jpg'
import HarvardLogo from '../../assets/images/harvard_logo.png'
import SharifLogo from '../../assets/images/sharif_logo.png'
import SwinburneLogo from '../../assets/images/swinburne_badge.png'
import QueraLogo from '../../assets/images/quera_logo.png'
import './index.scss'
import { CodeBlock } from "@/components/ui/code-block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedin,

} from "@fortawesome/free-brands-svg-icons";
import { faUniversity, faMapMarkerAlt, faLaptopCode, faAward } from "@fortawesome/free-solid-svg-icons";

import BinaryImg from '../../assets/images/binary.jpg'
// import BinaryImg2 from '../../assets/images/binary1.jpg'

// InfoCard component displays personal information and social links
// It receives an 'inView' prop to control its visibility animation
const InfoCard = ({ inView }) => {
return (
        
    // Main container with conditional classes for visibility animation
    <div className={`relative px-6 ${inView ? "transition" : "ziresh"} h-full info-card-container`}
        style={{
            backgroundImage: `url(${BinaryImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>

        {/* Gradient overlay - low opacity at top, higher at bottom for better text contrast */}
        <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.03) 55%, rgba(0,0,0,0.25) 100%)'
            }}
        />
        
        {/* Personal information section */}
        <div className="relative z-10 flex flex-col 2xl:flex-row 2xl:gap-20 justify-evenly items-center text-center h-full">    

            {/* Image + Name row */}
            <div className="flex flex-row items-center mt-5 justify-between gap-4 sm:gap-10 md:gap-10 2xl:gap-20">
                {/* Profile Image - Larger on mobile */}
                <div className="flex-shrink-0">
                    <div className="w-36 h-36 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl">
                        <img alt="Avatar" src={Armin} className="w-full h-full object-cover" />
                    </div>
                </div>
                
                {/* Name and Info */}
                <div className="flex flex-col items-center justify-around gap-1 sm:gap-2 md:gap-4">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-1 sm:mb-2 text-gray-900">
                        <span className="underline underline-offset-3 decoration-8 decoration-blue-600">
                            Armin Amiri
                        </span>
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-4 md:grid md:grid-cols-2 md:gap-4">
                        <h3 className="text-xs sm:text-xl md:text-xl font-medium sm:font-normal leading-normal mb-0.5 sm:mb-2 text-blueGray-700">
                            🧑🏻‍💻 Full Stack Developer
                        </h3>
                        <h3 className="text-xs sm:text-xl md:text-xl font-medium sm:font-normal leading-normal mb-0 sm:mb-2 text-blueGray-700">
                            📍 Melbourne, Australia
                        </h3>
                    </div>

                    {/* Education & Certifications - Desktop/Tablet (shown on 640px+) */}
                    <div className="max-sm:hidden mt-3 sm:mt-6 w-full text-blueGray-600">
                      <div className="flex flex-col items-center w-full">
                        
                        {/* Education Card */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-3 sm:p-4 md:p-5 mb-4 w-full max-w-xs md:max-w-md">
                            <div className="flex items-center gap-3 md:gap-4">
                                <img src={SwinburneLogo} alt="Swinburne Logo" className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto" />
                                <div className="text-left">
                                    <p className="text-[0.65rem] sm:text-xs md:text-sm text-blueGray-500 uppercase tracking-wide">Graduated from</p>
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-blueGray-700">Swinburne University</p>
                                    <p className="text-[0.6rem] sm:text-xs md:text-sm text-blueGray-500">Bachelor of Computer Science</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Certifications */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-3 sm:p-4 md:p-5 w-full max-w-xs md:max-w-md">
                            <p className="text-[0.65rem] sm:text-xs md:text-sm font-semibold text-blueGray-500 uppercase tracking-wide mb-3 md:mb-4 text-center">Certified by</p>
                            
                            <div className="grid grid-cols-3 gap-2 md:gap-3">
                                {/* Harvard */}
                                <div className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-lg hover:bg-white/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <img src={HarvardLogo} alt="Harvard" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />
                                    <span className="text-[0.55rem] sm:text-[0.65rem] md:text-xs lg:text-sm font-medium text-blueGray-600 text-center leading-tight whitespace-nowrap">Harvard University</span>
                                </div>
                                
                                {/* Sharif */}
                                <div className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-lg hover:bg-white/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <img src={SharifLogo} alt="Sharif" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />
                                    <span className="text-[0.55rem] sm:text-[0.65rem] md:text-xs lg:text-sm font-medium text-blueGray-600 text-center leading-tight whitespace-nowrap">Sharif University</span>
                                </div>
                                
                                {/* Quera */}
                                <div className="flex flex-col items-center gap-1 md:gap-2 p-2 md:p-3 rounded-lg hover:bg-white/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <img src={QueraLogo} alt="Quera" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto" />
                                    <span className="text-[0.55rem] sm:text-[0.65rem] md:text-xs lg:text-sm font-medium text-blueGray-600 text-center leading-tight whitespace-nowrap">Quera College</span>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

            {/* Mobile-only: Credentials section - centered below */}
            <div className="flex sm:hidden flex-col items-center w-full mt-4 px-2">
                <div className="bg-white/75 backdrop-blur-sm rounded-xl shadow-lg p-4 w-full max-w-[340px]">
                    {/* Education */}
                    <div className="flex items-center gap-3 pb-3 mb-3 border-b border-blueGray-200">
                        <img src={SwinburneLogo} alt="Swinburne" className="h-10 w-auto" />
                        <div className="text-left">
                            <p className="text-[0.6rem] text-blueGray-500 uppercase tracking-wide">Graduated from</p>
                            <p className="text-sm font-semibold text-blueGray-700">Swinburne University of Technology</p>
                            <p className="text-[0.6rem] text-blueGray-500">Bachelor of Computer Science</p>
                        </div>
                    </div>
                    
                    {/* Certifications */}
                    <p className="text-[0.6rem] font-semibold text-blueGray-500 uppercase tracking-wide mb-2.5 text-center">Certified by</p>
                    <div className="flex justify-center gap-4">
                        <div className="flex flex-col items-center gap-1">
                            <img src={HarvardLogo} alt="Harvard" className="h-10 w-auto" />
                            <span className="text-[0.6rem] font-medium text-blueGray-600">Harvard</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <img src={SharifLogo} alt="Sharif" className="h-10 w-auto" />
                            <span className="text-[0.6rem] font-medium text-blueGray-600">Sharif</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <img src={QueraLogo} alt="Quera" className="h-10 w-auto" />
                            <span className="text-[0.6rem] font-medium text-blueGray-600">Quera</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Code block section displaying background information */}
            <div className="mb-2 text-blueGray-600 mt-10 w-full px-2 sm:px-4 max-w-[95vw] sm:max-w-xl md:max-w-2xl overflow-hidden">
                <CodeBlock
                    language="javascript"
                    filename="armin_profile.js"
                    highlightLines={[2, 5, 9, 12, 17, 18]}
                    code={`'use client'
// Work Availability
let available = true;

// Programming Languages
const langs = ["JavaScript/TypeScript", "Python"];

// Spoken Languages
const spoken = ["Persian", "English"];

// Work and Education
let education = "Bachelor's of Computer Science";
let workStatus = "Open to Work";

// Contact Details
const contact = {
  phone: "+61 401 267 267",
  email: "arminamiri11228@gmail.com"
};`}
                />
            </div>
            
        </div>
        
        {/* Detailed personal description */}
        <div className="relative z-10 mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="mb-5 flex flex-wrap justify-center text-center ">
                <div className=" bg-info-txt-container w-full lg:w-9/12 px-4">
                    <p className="bg-info-description text-left ml-9 text-md leading-relaxed text-blueGray-700">

                        <span className="flex flex-row bg-info-nametitle mb-4 text-xl w-full font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                            <span className="underline underline-offset-3 decoration-8 decoration-blue-600">
                                I'm Armin
                            </span>
                        </span>

                        I'm a full-stack developer based in Melbourne who builds web applications that people actually use. I got into programming as a teenager, starting with Python and eventually finding my way to JavaScript and React. Turns out I really love web development, especially when I get to work on projects that make a difference.

                        I recently graduated from Swinburne University with a Bachelor's in Computer Science, and I've spent that time building real projects—like the UniHacked AI Chatbot platform with Django and React, the Nelody music bot that supports 6 languages, and websites for local businesses like Hairport Barber and Bond Street Barbery. I work with React, TypeScript, Django, Node.js, Firebase, and PostgreSQL—basically whatever tech stack makes the most sense for the project.

                        I've had my share of long coding sessions (my record is 13 hours straight with only 10-minute breaks—probably not my healthiest moment), but what I really care about is writing clean code that solves actual problems. I'm looking for opportunities where I can contribute, learn, and build things that matter.

                        If you're working on something interesting or need someone who can hit the ground running, let's talk. I'm open to work and always happy to chat about what we could build together.
                    </p>
                </div>
            </div>
            
            {/* Social media links */}
            <div className="makeCenter w-full icons flex justify-center ">
                <a className="icon fa-2x" href="https://github.com/zNiGhTFuRyZNTT">
                    <FontAwesomeIcon icon={faGithub} color="#171515" />
                </a>
                <a className="icon fa-2x" href="https://instagram.com/arminnightfury">
                    <FontAwesomeIcon icon={faInstagram} color="#171515" />
                </a>
                <a className="icon fa-2x" href="https://www.linkedin.com/in/armin-amiri-4604781bb/">
                    <FontAwesomeIcon icon={faLinkedin} color="#171515" />
                </a>
            </div>
        </div>
    </div>

)
}

export default InfoCard;
