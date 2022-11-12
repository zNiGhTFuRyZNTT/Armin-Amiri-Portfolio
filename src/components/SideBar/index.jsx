import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo, FaCertificate, FaArrowUp, FaRegUser, FaCode,
      FaRegStar, FaBookReader, FaBook, FaRegAddressBook} from 'react-icons/fa'
import './index.scss'
import { Link, animateScroll as scroll } from "react-scroll";

    // const allRefs = {
    //   greetings: greetingsRef,
    //   certificates: certificatesRef,
    //   infoCard: infoCardRef,
    //   projectCard: projectCardRef,
    // }
const SideBar = ({inViews}) => {
    console.log(inViews);
    return (
        <div className="sidebar fixed z-30 top-0 left-0 rounded-full ml-5 top-50 translate-y-60 w-16 flex flex-col justify-center  navbar-bg-color text-white shadow-lg">

            <Link to="greetings" spy={true} smooth={true} offset={-70} duration={700}>
                <SideBarIcon icon={<FaArrowUp size="20" />} text="Scroll to top ⬆️" />
            </Link>

            <Link to="info-cards" spy={true} smooth={true} offset={-70} duration={1000}>
                <SideBarIcon icon={<FaRegUser size="20" />} text="My Background 👨‍💻" inView={inViews.infoCard}/>
            </Link>

            <Link to="skills-root-container" spy={true} smooth={true} offset={-120} duration={800}>
               <SideBarIcon icon={<FaBookReader size="20" />} text="My Skills 🥋" inView={inViews.skills}/>
            </Link>

            <Link to="certifications-container-root" spy={true} smooth={true} offset={0} duration={800}>
                <SideBarIcon icon={<FaCertificate size="20" />} text="My Certificates 🏆" inView={inViews.certificates}/>
            </Link>

            <Link to="projects-container" spy={true} smooth={true} offset={0} duration={800}>
                <SideBarIcon icon={<FaCode size="20" />} text="My Projects ⚒️" inView={inViews.projectCard}/>
            </Link>

        </div>
    )
}

const SideBarIcon = ({ icon, text= 'tooltip 💡', inView }) => {

    return (
        <div className={`sidebar-icon group ${inView ? "active-icon" : ""}`}>
            {icon}

            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}
 
 
export default SideBar;