import React, { useEffect, useRef, useState } from "react";
import './index.scss'
import {
    AnimatedLetters,
    VideoBackground, 
    SquareBackground, 
    InfoCard, 
    Certifications, 
    SideBar, 
    BackgroundInfo, 
    Projects,
    SkillsRating,
    Footer,
} from "../../components";

import useIntersection from '../../hooks/useIntersection'




const LandingPage = () => {
    const greetings = ['Hello friend,','Welcome to my portfolio.']
    const greetingsRef = useRef()
    const greetingInView = useIntersection(greetingsRef)

    const certificatesRef = useRef()
    const certificatesInView = useIntersection(certificatesRef, '-100px')
    
    const infoCardRef = useRef()
    const infoCardInView = useIntersection(infoCardRef, '-100px')

    const projectCardRef = useRef()
    const projectCardInView = useIntersection(projectCardRef, '-100px')

    const skillsRef = useRef()
    const skillsInView = useIntersection(skillsRef, '-70px')

    const inViews = {
      certificates: certificatesInView,
      infoCard: infoCardInView,
      projectCard: projectCardInView,
      skills: skillsInView,
    }
    
    // < -- Handle Window Size -- >

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    // < -- End -- >

    // const summaryInView = useIntersection(summaryRef, '-5px')
    // console.log(greetingInView, infoCardInView);
    console.log(inViews);

    return (
        <div className="landingPage"> 
          <div className={!greetingInView ? "transition-all ease-out duration-300 opacity-100": "opacity-0 transition-all ease-in duration-450 translate-x-100"}>
            {!(windowSize.innerWidth < 535) && <SideBar inViews={inViews} />} {/* TODO Slide from left to right animation */}
          </div>
          <div className={`main-content ${!greetingInView ? "transition-all ease-out duration-300" : ""} `}>
            <SquareBackground />
            <div ref={greetingsRef} className="greetings">
              <VideoBackground />
              <div className={"center"}>
                <AnimatedLetters delay={1000} strArray={greetings[0].split("")} idx={3} />
                <AnimatedLetters delay={3000} strArray={greetings[1].split("")} idx={3} />
                <AnimatedLetters delay={6000} strArray={"Scroll down".split("")} idx={3} />
                {/* <div className="sidebar-icon">
                  <FaArrowDown size="20" />

                </div> */}
              </div>
            </div>
              

            {/* < -- Info Card -- >  */}
            <div className="bg-white info-cards" > 
              <div ref={infoCardRef}>
                <InfoCard inView={infoCardInView}/>
              </div>
            </div>
            {/* < -- end -- >  */}

              <div ref={skillsRef} className="skills-root-container">
                <h1 className="cert-header mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                  <span class="underline underline-offset-3 decoration-8 decoration-blue-600">
                    Skills
                  </span>
                </h1>
                <SkillsRating inView={skillsInView} windowSize={windowSize}/>
              </div>

            {/* < -- Certificates -- >  */}
            <div ref={certificatesRef} className="certifications-container-root">
              <h1 className="cert-header mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"><span class="underline underline-offset-3 decoration-8 decoration-blue-600">Certificates</span></h1>
              <Certifications inView={certificatesInView} />
            </div>
            {/* < -- end -- >  */}

            {/* < -- My comment -- >  */}
            <div className="freelance-inf w-screen bg-white  ">
              <BackgroundInfo />
            </div>
            {/* < -- end -- >  */}

            <hr />
            
            {/* < -- Project -- >  */}
            <div ref={projectCardRef} className="projects-container mt-5 dark">
              <h1 className="cert-header mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"><span class="underline underline-offset-3 decoration-8 decoration-blue-600">Projects</span></h1>
              <Projects inView={projectCardInView} />
            </div>
            {/* < -- end -- >  */}

          </div>

          {/* TODO Add Work Experience and Skills Rating, at the end add recent projects */}
          <Footer />
        </div>
    )
}
 

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}



export default LandingPage;