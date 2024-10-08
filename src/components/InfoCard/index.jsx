import React from "react";
import Armin from '../../assets/images/armin.jpg'
import './index.scss'
import { CopyBlock, dracula } from "react-code-blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedin,

} from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";

import BinaryImg from '../../assets/images/binary.jpg'
// import BinaryImg2 from '../../assets/images/binary1.jpg'

// InfoCard component displays personal information and social links
// It receives an 'inView' prop to control its visibility animation
const InfoCard = ({ inView }) => {
return (
        
    // Main container with conditional classes for visibility animation
    <div className={`px-6 ${inView ? "transition" : "ziresh"} h-full`}        style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${BinaryImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>

        {/* Profile picture section */}

        
        {/* Personal information section */}
        <div className="flex flex-col xl:flex-row xl:gap-20 justify-evenly items-center text-center h-full">    

            <div className="flex flex-row items-center mt-5 justify-between gap-3 sm:gap-10 md:gap-10 xl:gap-20">
            <div className="flex flex-wrap justify-center w-48 sm:w-72 lg:w-96">
                <div className="w-full px-2 flex justify-center">
                    <div className="picture-container profile-pic relative h-auto align-middle">
                        <img alt="Avatar" src={Armin} className="rounded-full border-none shadow-xl w-full" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-around gap-2 md:gap-9 h-full">
                <h3 className=" text-[1.6rem] sm:text-5xl  md:text-5xl lg:text-6xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Armin Amiri
                </h3>

                <div className="md:grid md:grid-cols-2 md:gap-4 ">

                    <h3 className="text-[.7rem] sm:text-xl md:text-xl font-medium sm:font-normal leading-normal mb-2 text-blueGray-700">
                        🧑🏻‍💻 Full Stack Developer
                    </h3>
                    <h3 className="text-[.7rem] sm:text-xl md:text-xl font-medium sm:font-normal leading-normal mb-2 text-blueGray-700">
                        <span className="sm:text-xl md:text-xl">📍</span> Melbourne, Australia
                    </h3>

                </div>
                    {/* Education information */}
                    <div className="flex flex-col mt-3 sm:mt-6 items-center mb-2 w-full text-blueGray-600">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUniversity} className="mr-2 text-lg text-blueGray-400" />
                            <h1 className="text-xs sm:text-lg">Studying at <span className="font-medium whitespace-nowrap">Swinburne University</span></h1>
                        </div>
                    </div>

            </div>
            </div>
            
            {/* Code block section displaying background information */}
            <div className="mb-2 text-blueGray-600 mt-10">
                {/* <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400">Background Information</i> */}

                <div className="codeblock">
                    <CopyBlock
                        language="js"
                        text={'//Work Availability\n let available = true \n// Programming Languages\n ["Javascript", "Python"].forEach(language => `${language} Developer`)\n // Spoken Languages\n const spokenLangs = ["Persian", "English"]\n // Work and Eduaction\n let [educationStatus, workStatus] = ["Recent graduate", "Unemployed"]\n // Contact Details \n const contactDetails = {\nphoneNum: "+61403444370",\n email: "arminamiri11228@gmail.com"\n}\n // Contact me through phone or email for any inquiries or job oportunities'}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>

            </div>
            
        </div>
        
        {/* Detailed personal description */}
        <div className=" mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="mb-5 flex flex-wrap justify-center text-center ">
                <div className=" bg-info-txt-container w-full lg:w-9/12 px-4">
                    <p className="bg-info-description text-left ml-9 text-md leading-relaxed text-blueGray-700">

                        <span className="flex flex-row bg-info-nametitle mb-4 text-xl w-full font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                            <span className="underline underline-offset-3 decoration-8 decoration-blue-600">
                                I'm MR. Robot
                            </span>
                        </span>

                        A dedicated software developer with expertise in Python, JavaScript, and Node. My passion for programming ignited during my early teenage years and has only grown stronger since then. Guided by my thirst for knowledge and problem-solving skills, I immersed myself in Python for two years, honing my skills with tireless determination.

                        As I continued to learn and explore, I discovered the beauty of JavaScript, captivated by its unique syntax and industry relevance. My interest in Node led me to learn JavaScript directly, and I quickly gained proficiency in the language. Although I initially thought I disliked web development, my outlook changed after I discovered React, which shifted my path towards a career in web development.

                        I'm based in Melbourne and have a strong passion for coding. My coding record speaks for itself, with a staggering 13-hour stretch of uninterrupted work and only brief 10-minute breaks. My expertise and dedication to programming make me a valuable asset to any organization, and I'm constantly seeking new challenges and opportunities to grow.

                        If you're searching for a talented software developer with a strong work ethic and a passion for programming, look no further. I'm currently seeking new opportunities to further develop my skills, and I welcome any job opportunities that align with my abilities. If you're interested in collaborating, don't hesitate to contact me.
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