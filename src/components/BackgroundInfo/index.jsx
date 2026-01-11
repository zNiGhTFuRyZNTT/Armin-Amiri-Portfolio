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
                    s a full-stack developer, I work with React and Django to build web applications 
                    that actually solve problems. Recently, I created the UniHacked AI Chatbot platform—a 
                    Django backend paired with a React/TypeScript frontend, complete with WebSockets for 
                    real-time chat and AI model integration. I also built Nelody, a Telegram music bot 
                    that pulls audio from YouTube, SoundCloud, and other platforms, with support for 6 languages.
                    
                    I've worked with local businesses too, building websites for Hairport Barber and Bond 
                    Street Barbery that helped them get more bookings and better connect with customers. 
                    I've got certifications from Harvard (CS50W Web Programming), Sharif University (C Programming), 
                    and Quera (React TypeScript, Django, Python), but honestly, what matters most is that I can 
                    build things that work.
                    
                    If you're looking for someone to build your next project or just want to chat about what's 
                    possible, feel free to reach out. I'm always down to work on something interesting.
                </p>
            </div>
        </div>
    );
};


export default BackgroundInfo
