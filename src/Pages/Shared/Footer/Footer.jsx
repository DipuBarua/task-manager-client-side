import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black bg-opacity-30 text-white">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link">Task Management</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link to={'/'} className="link link-hover">Home</Link>
                <Link to={""} className="link link-hover">Contact</Link>
            </nav>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4 text-3xl opacity-60">

                    <Link to={``} target="_blank" className=" hover:bg-blue-600 rounded-full "> <FaFacebook></FaFacebook></Link>
                    <Link to={``} target="_blank" className="hover:text-black hover:bg-white rounded-full "><FaGithub /></Link>
                    <Link to={``} target="_blank" className="hover:text-blue-800 hover:bg-white"><FaLinkedin /></Link>
                    <Link to={``} target="_blank" className="hover:bg-white hover:text-black"><FaSquareXTwitter /></Link>
                </div>
                <p>&copy;2023 | Task Manager</p>
            </nav>
        </footer>
    );
};

export default Footer;