import React from "react";
import './index.scss'
import djangoImg from '../../assets/images/certifications/django.jpg'
import frontEndImg from '../../assets/images/certifications/front-end.jpg'
import harvardNormalImg from '../../assets/images/certifications/harvard-normal.png'
import harvardProImg from '../../assets/images/certifications/harvard-pro.png'
import algorithmicPyImg from '../../assets/images/certifications/python-algorithmic.jpg'
import objPythonImg from '../../assets/images/certifications/python-obj.jpg'
import reactImg from '../../assets/images/certifications/react.jpg'
import cImg from '../../assets/images/certifications/c.png'
import TypeScriptImg from '../../assets/images/certifications/TypeScript.jpg'
import LLMImg from '../../assets/images/certifications/LLM.jpg'
import certificatesObjs from './info.json'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Certifications = ( {inView} ) => {
    const certificatesImgs = [harvardProImg, harvardNormalImg, cImg, reactImg, djangoImg,TypeScriptImg, algorithmicPyImg, objPythonImg, frontEndImg, LLMImg]
    let i = 0
    return (
        <div className={` ${inView ? "cert-transition" : "cert-ziresh"} certifications-container dark `}>
            {certificatesObjs.map((cert, index) => {
                return <div className={`cert-card ${inView ? `cert-delay-${i++}` : 'cert-delay-before'} m-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`} key={index}>
                    <Zoom>
                        <img className="rounded-t-lg" src={certificatesImgs[certificatesObjs.indexOf(cert)]} alt="project-photo"/>
                    </Zoom>
                    <div className="cert-description-container p-3">
                        <a >
                            <h5 className="mb-2 font-bold cert-card-title tracking-tight text-gray-900 dark:text-white">{cert.name}</h5>
                        </a>
                        <p className="mb-3 break-words font-normal text-gray-700 dark:text-gray-400">{cert.description}</p>
                        <a target="_blank"  href={cert.certUrl} className="show-btn inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Show
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            })}
        </div>

    )
}
 
export default Certifications;