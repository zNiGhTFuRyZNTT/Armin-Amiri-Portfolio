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
    Hero,
    AnimatedHeroSection,
} from "../../components";
import { ClipLoader  } from 'react-spinners';
import useIntersection from '../../hooks/useIntersection'




const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating the delay of loading data
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timeout)
  }, []);

    // each object inside this array will be shown with an animation
    // upon loading of the landing page.
    // G0
    const greetings = [
      { text: 'Hello friend,', delay: 1000 },
      { text: 'Welcome to my portfolio.', delay: 3000 },
      { text: 'Scroll down', delay: 6000 }
    ] 

    // refrences to attach to different components of the page
    // in order to track whether they are inside the device viewport
    const refs = {
      greetings: useRef(),
      certificates: useRef(),
      infoCard: useRef(),
      projectCard: useRef(),
      skills: useRef(),
    };
  
    // useIntersection hook returns a boolean (true, false)
    // and indicates whether the component we attached it to is visible in the viewport.
    // meaning when the client scrolls through the website and reaches the target component
    // we then use this boolean values to unhide the components with a pleasing animation
    // when the client scrolls on them.

    // '-100px' tells the hook to return true as soon as the user reached -100 pixels of the component.
    // meaning the component will appear when you are 100 pixels away from scrolling on it.
    const inViews = {
      greetings: useIntersection(refs.greetings),
      certificates: useIntersection(refs.certificates, '-100px'),
      infoCard: useIntersection(refs.infoCard, '-100px'),
      projectCard: useIntersection(refs.projectCard, '-100px'),
      skills: useIntersection(refs.skills, '-70px'),
    };
    
    // < -- Handle Window Size -- >

    const [windowSize, setWindowSize] = useState(getWindowSize());

    // You can remove this, this is used for the developer
    // device size doesn't usually change unless you change it from inspect element.
    // this ensures someof our components that their width is calculated based on the windowsize
    // remain in place and don't mess the page up on window size change inside inspect element.

    //  IT IS RECOMMENDED TO LEAVE IT AS IT IS.
    // because either as the developer you don't want some elements mess up the page
    // when you are testing something like responsiveness inside inspect elenent,
    // or as the user who wants to test the responsibility of your website.
    // the smooth transition applied to the components will show how precise these calcculations are
    // done and will leave the client speechless on how the components resize on window size changes
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

    // Scroll to info card section
    const scrollToFeatures = () => {
      const infoSection = document.querySelector('.info-cards');
      if (infoSection) {
        infoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    return (
      <>
      <div className={`loading ${!isLoading && "disappear"}`}>
        <ClipLoader color="#1c64f2" />
      </div>
      <div className="landingPage"> 

          {/* Showing the side menu if the device is not a phone or a small tablet */}
          <div className={!inViews.greetings ? "transition-all ease-out duration-300 opacity-100": "opacity-0 transition-all ease-in duration-450 translate-x-100"}>
            {!(windowSize.innerWidth < 535) && <SideBar inViews={inViews} />} 
          </div>

          <div className={`main-content ${!inViews.greetings ? "transition-all ease-out duration-300" : ""} `}>

            {/* 
            SquareBackground
              Little random animated squares ascending from the bottom of the screen,
              Giving the website a live and interactive feeling.
            
            */}
            <SquareBackground />

            {/* New Animated Hero Section */}
            <div ref={refs.greetings}>
              <AnimatedHeroSection onScrollToFeatures={scrollToFeatures} />
            </div>
              

            {/* < -- Your Introduction Component -- >  */}
            <div className="bg-white info-cards" > 
              <div ref={refs.infoCard}>
                <InfoCard inView={inViews.infoCard}/>
              </div>
            </div>

            {/* < -- Your Sills Component -- >  */}
            <div ref={refs.skills} className="skills-root-container">
              <h1 className="cert-header mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                <span className="underline underline-offset-3 decoration-8 decoration-blue-600">
                  Skills
                </span>
              </h1>
              <SkillsRating inView={inViews.skills} windowSize={windowSize}/>
            </div>


            {/* < -- Certificates Component -- >  */}
            <div ref={refs.certificates} className="certifications-container-root">
              <h1 className="cert-header mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-600">Certificates</span></h1>
              <Certifications inView={inViews.certificates} />
            </div>


            {/* < -- Background Info Component -- >  */}
            <div className="freelance-inf w-screen bg-white  ">
              <BackgroundInfo />
            </div>


            <hr />
            
            {/* < -- Projects Component -- >  */}
            <div ref={refs.projectCard} className="projects-container mt-5 dark">
              <h1 className="cert-header mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"><span className="underline underline-offset-3 decoration-8 decoration-blue-600">Projects</span></h1>
              <Projects inView={inViews.projectCard} />
            </div>
            {/* < -- end -- >  */}

          </div>

          {/* Display Footer */}
          <Footer />
        </div>
      </>
    )
}
 

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}



export default LandingPage;
