import React, { useState, useEffect } from 'react';
import './index.scss'


const AnimatedLetters = ({delay, strArray, idx }) => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [show, setShow] = useState(false)
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, delay+3000)
      }, [])
    useEffect(() => {
        setTimeout(() => {
            setShow(!show)
        }, delay)
    }, [])
    return <>
        {show && 
            <span className="words">
                {strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))}
            </span>
        }

    </>
        

    
};


export default AnimatedLetters;