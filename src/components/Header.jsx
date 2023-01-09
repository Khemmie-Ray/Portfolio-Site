import { useState, useRef } from "react"
import {Link} from "react-router-dom"
import menu from "../assets/icon-menu.svg"
import closeBtn from "../assets/icon-menu-close.svg"
import logo from "../assets/logo.png"

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const navRef = useRef(null)

    const setWidth = width => {
        navRef.current.style.width = `${60}%`
    }

    const defaultWidth = width => {
        navRef.current.style.width = `${0}%`
    }

    function displayMenu() {
        setShowMenu(prev => !prev)
        setWidth(60)
    }

    function closeMenu() {
        setShowMenu(prev => !prev)
        defaultWidth(0)
    }

    return (
        <div>
            <header>
                <img src={logo} alt="" className="logo-icon"/>
                <img src={menu} alt="" className="mobileMenu" onClick={displayMenu} />
             <nav ref={navRef}>
                <div className="navlinks">
                    <img src={closeBtn} alt="" className="icon-close" onClick={closeMenu}/>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/about" className="navLink">About Me</Link>
                <Link to="/projects" className="navLink">Projects</Link>
                <Link to="/contact" className="navLink">Contact</Link>
                </div>
            </nav>
            </header>
        </div>
    )
}

export default Header