import tag from "../assets/tag.png"
import github from "../assets/Github.png"
import linkedin from "../assets/Linkedin.png"
import twitter from "../assets/Vector.png"

function Sidebar() {
    return (
        <div className="tagIcon"> 
            <img src={tag} alt="" className="tagBox"/>
            <div className="socials">
            <a href="https://twitter.com/Haramide"><img src={twitter} alt="" className="icons"/></a>
            <a href="https://www.linkedin.com/in/oluwakemi-atoyebi"><img src={linkedin} alt="" className="icons"/></a>
            <a href="https://github.com/Khemmie-Ray"><img src={github} alt="" className="icons"/></a>
            </div>
        </div>
    )
}

export default Sidebar