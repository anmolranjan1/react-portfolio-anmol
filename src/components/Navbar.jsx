import logo from "../assets/anmolRanjanLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaDribbble } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/anmol-ranjan-098907224" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/anmolranjan1" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/anmol_ranjan_srivastava" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://dribbble.com/anmolranjan1" target="_blank" rel="noopener noreferrer">
                <FaDribbble />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;