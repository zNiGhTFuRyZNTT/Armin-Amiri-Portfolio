import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-4">Armin Amiri</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full-Stack Developer specializing in React, Django, and modern web technologies. 
                            Building impactful applications that solve real-world problems.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a 
                                href="https://github.com/zNiGhTFuRyZNTT" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-2xl" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/armin-amiri-4604781bb/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a 
                                href="https://instagram.com/avestaagency" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#certifications" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm">
                                    Certifications
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-blue-500 flex-shrink-0" />
                                <a 
                                    href="mailto:arminamiri11228@gmail.com" 
                                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm break-all"
                                >
                                    arminamiri11228@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-blue-500 flex-shrink-0" />
                                <a 
                                    href="tel:+61403444370" 
                                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm"
                                >
                                    +61 401 267 267
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-blue-500 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Melbourne, Australia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            &copy; {currentYear} Armin Amiri. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs text-center md:text-right">
                            Built with React, Vite & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer
