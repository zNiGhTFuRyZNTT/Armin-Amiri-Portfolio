// @flow 
import React from 'react';
import './index.scss'
const BackgroundInfo = () => {
    return (
        <div className="flex flex-wrap justify-center text-center px-3 bg-white">
            <div className="w-full lg:w-9/12 px-4">
                <h1 className="comment-header mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                    <span className="underline underline-offset-3 decoration-4 decoration-blue-500">
                        My Background
                    </span>
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    <span className=" mb-4 text-xl w-10 font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl">
                        <span className="underline underline-offset-3 decoration-3 decoration-blue-600">
                            A
                        </span>
                    </span>
                    s a full-stack developer with expertise in React JS and Django,
                     I bring a wealth of knowledge and experience to the table. In 
                     addition to my extensive programming background, I hold several 
                     certifications, including Harvard's CS50W Web Programming, as 
                     well as Fundamentals of C Programming Language, and multiple 
                     Python certifications from Quera.
                    But don't take my word for it - take a look at some of my recent projects. 
                    For instance, I developed a Telegram bot that retrieves audio files from 
                    YouTube in under three seconds. And if you're interested in cybersecurity, 
                    check out my Reverse Shell Tool. This project establishes a highly encrypted 
                    WebSocket connection to a target machine and allows me to execute shell commands 
                    on that machine - all while bypassing firewalls.
                    So, whether you need a top-notch developer to build your next project or someone 
                    who can help you keep your system secure, I've got you covered. Reach out to me today
                     to discuss your needs and find out how I can help you succeed.
                </p>
            </div>
        </div>
    );
};


export default BackgroundInfo