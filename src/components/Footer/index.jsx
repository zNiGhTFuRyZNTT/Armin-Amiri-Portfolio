import './index.scss'
import NemesisTeamLogo from '../../assets/images/NEMESISTEAMLOGO.jpg'
const Footer = () => {
    return (
        <footer className="p-4 mt-10 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a className="flex items-center mb-4 sm:mb-0">
                    <img src={NemesisTeamLogo} className="mr-3 h-8 rounded-full" alt="Flowbite Logo" />
                    <span className="self-center org-name text-2xl font-semibold whitespace-nowrap dark:text-white">NEMESIS TEAM</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://t.me/nemesisdevteam" className="mr-4 hover:underline md:mr-6 ">Telegram</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/asvaransecurity" className="mr-4 hover:underline md:mr-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://github.com/zNiGhTFuRyZNTT" className="mr-4 hover:underline md:mr-6 ">Github</a>
                    </li>
                    <li>
                        <a href="tel:+61403444370" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span className="hover:underline">ASVARAN GROUP</span>. All Rights Reserved.
            </span>
        </footer>
    );
}
 
export default Footer