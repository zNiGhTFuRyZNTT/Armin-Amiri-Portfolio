import React, { useEffect, useState } from 'react';
import './index.scss'
import Videos from '../../assets/videos'

const VideoBackground = () => {
    const [overlayClass, setOverlayClass] = useState('overlay')
    useEffect(() => {
        setOverlayClass('overlay-2nd')
    }, [])
    // console.log(Videos)
    const randomInt = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const showDesktopVideo = window.innerWidth >= 720 ? true : false
    const choices =  {Desktop: randomInt(0, Videos.Desktop.length-1), Phone: randomInt(0, Videos.Phone.length-1)}
    const [srcSelected, setSrcSelected] = useState(showDesktopVideo ? Videos.Desktop[choices.Desktop] : Videos.Phone[choices.Phone])
    // console.log(choices)
    // console.log(srcSelected);

    return (
        <div className="VideoBackground">
            <div className={overlayClass}></div>
            <video src={srcSelected} autoPlay loop muted/>
        </div>
    )
}
 
export default VideoBackground;