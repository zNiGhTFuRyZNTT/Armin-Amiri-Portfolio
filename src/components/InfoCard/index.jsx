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


const InfoCard = ({ inView }) => {
return (
        
            <div className={`px-6 ${inView ? "transition" : "ziresh"}`}>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 flex justify-center">
                        <div className="picture-container profile-pic relative h-auto align-middle  -m-16 -ml-17 lg:-ml-16 max-w-150-px">
                            <img alt="Grrrr" src={Armin}
                                className="rounded-full border-none shadow-xl" />
                        </div>
                    </div>
                </div>
                <div className="text-center header-text-center">
                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                        Armin Amiri
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        Melbourne, Australia
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400">Background Information</i>
                        {/* ["Javascript", "Python"].forEach(language =&gt; `$&#123;language&#125; Developer` ) */}
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
                    <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                        University of La La Land
                    </div>
                </div>
                <div className=" mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="mb-5 flex flex-wrap justify-center text-center ">
                        <div className=" bg-info-txt-container w-full lg:w-9/12 px-4">
                            <styledWord word={"Armin"} />
                            <p className="bg-info-description ml-9 text-md leading-relaxed text-blueGray-700">

                                <p className="bg-info-nametitle mb-4 text-xl w-10 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                                    <span class="underline underline-offset-3 decoration-8 decoration-blue-600">
                                        Armin
                                    </span>
                                </p>

                                
                                means Relaxed in Persian :). In the name of Guido van Rossum,
                                I have started learning the Python programming language at the age of 16, and the more 
                                I got immersed in coding and problem-solving, the more I fell in love with programming. 
                                I was practicing and learning Python for two years morning and night at the same time as applying to migrate to Australia.
                                After some time, I slowly got attracted to Javascript and the interesting syntax of this 
                                language and its use and importance in the industry convinced me to start learning it. Although it's strange, I started learning Js 
                                directly by learning Node because I was so interested and learned quickly.
                                For a while, I thought that I hated web development, but after learning about React, my path changed.

                                I live in Melbourne and I am a code junkie who will soon forget my mother tongue and speak JavaScript.
                                My coding record is 13 hours in a row with a maximum of 10 minute long rests :)
                                Like I said, I'm addicted, I feed on code.
                                I would apreciate any job opportunity, feel free to contact me if you have an offer for a role that
                                you feel like matches my skills. I'm so passionate for working and I make sure that if my skills match your role, I'll be an asset to your organisation.
                            </p>
                        </div>
                    </div>
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