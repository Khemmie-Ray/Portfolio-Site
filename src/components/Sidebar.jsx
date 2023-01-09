import tag from "../assets/tag.svg"
import github from "../assets/Github.png"
import linkedin from "../assets/Linkedin.png"
import twitter from "../assets/Vector.png"

function Sidebar() {
    return (
        <div className="tagIcon"> 
            <img src={tag} alt="" className="tagBox"/>
            <div className="socials">
            <a href="https://twitter.com/Haramide" target="_blank"><img src={twitter} alt="" className="icons"/></a>
            <a href="https://www.linkedin.com/in/oluwakemi-atoyebi" target="_blank"><img src={linkedin} alt="" className="icons"/></a>
            <a href="https://github.com/Khemmie-Ray" target="_blank"><img src={github} alt="" className="icons"/></a>
            </div>
        </div>
    )
}

export default Sidebar