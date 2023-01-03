import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
            <header>
                <h2>Logo</h2>
             <nav>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/about" className="navLink">About Me</Link>
                <Link to="/projects" className="navLink">Projects</Link>
                <Link to="/contact" className="navLink">Contact</Link>
            </nav>
            </header>
        </div>
    )
}

export default Header