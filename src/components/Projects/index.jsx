import React from "react";
import './index.scss'
import ProjectsList from './info.json'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = ({inView}) => {
    let i = 0

    return (
        <div className="projects-container">
            <div className="projects-grid">
                {ProjectsList.map((project, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`project-card ${inView ? `delay-${i++}` : 'delay-before'}`}
                        >
                            {/* Image Section */}
                            <div className="project-image-container">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.name}
                                        className="project-image"
                                    />
                                ) : (
                                    <div className="project-image-placeholder">
                                        <FaGithub className="placeholder-icon" />
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="project-content">
                                <h5 className="project-title">
                                    {project.name}
                                </h5>
                                <p className="project-description">
                                    {project.description}
                                </p>

                                {/* Action Button */}
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    href={project.projectUrl} 
                                    className="project-link"
                                >
                                    <FaGithub className="link-icon" />
                                    View on GitHub
                                    <FaExternalLinkAlt className="external-icon" />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;
