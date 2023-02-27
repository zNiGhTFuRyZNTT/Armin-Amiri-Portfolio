import React, { useState } from 'react'
import './index.scss'

const SkillsRating = ({inView, windowSize}) => {
    const [barWidth, setBarWidth] = useState(300)
    console.log(barWidth);



    if (950 < windowSize.innerWidth && windowSize.innerWidth < 1027) {
        if (barWidth !== 250)
            setBarWidth(250)
    }
    if ( 580 < windowSize.innerWidth && windowSize.innerWidth < 950) {
        if (barWidth !== 200)
            setBarWidth(200)
    }
    if ( 355 < windowSize.innerWidth && windowSize.innerWidth < 580) {
        if (barWidth !== 150)
            setBarWidth(150)
    }
    if (windowSize.innerWidth < 355) {
        if (barWidth !== 100)    
            setBarWidth(100)
    }

    // let barWidth = 300
    const skills = [
        { type: 'Python', level: 100/100 * barWidth },
        { type: 'Javascript', level: 100/100 * barWidth },
        { type: 'C', level: 70/100 * barWidth },

        { type: 'Django', level: 80/100 * barWidth },
        { type: 'React Js', level: 100/100 * barWidth },
        { type: 'Electron Js', level: 80/100 * barWidth },
        { type: 'Node Js', level: 100/100 * barWidth },
        { type: 'Tailwind Css', level: 90/100 * barWidth },

        { type: 'Telegram/Discord bot development', level: 100/100 * barWidth },
        { type: 'Web automation', level: 70/100 * barWidth },
        { type: 'SQLite3', level: 90/100 * barWidth },

        { type: 'Linux', level: 100/100 * barWidth },
        { type: 'Network+', level: 60/100 * barWidth },
    ];
    let i = 0
    return (
        <div className={`${inView ? "transition flex flex-col justify-center" : "ziresh"}`}>
            <div className={`skills-container`}>
                {skills.map(skill => {

                    return <div className={` skill-card`} style={{ 'width': barWidth }}>
                            <span className="px-2 skill-name text-gray-100 ">{skill.type}</span>
                            <div className={` score-container mt-3 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700`}>
                                <div className={`${inView ? `skills-delay-${i++}` : 'skills-delay-before'} bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 `} style={{'width': skill.level}} ></div>
                            </div>
                        </div>
                })}

            </div>
            <div className="expl-text-container text-center text-gray-100 italic text-base font-medium	mt-10">
                    <p>A full bar indicates that I have mastered the subject and can easily learn new related skills.</p>
            </div>
        </div>

    )
}
 


export default SkillsRating;