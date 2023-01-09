import Sidebar from "../components/Sidebar"
import avatar from "../assets/avatar.jpg"

function About() {
    return (
        <main className="mainContent">
       <div className="content about-info">
          <div className="Bio">
            <h3>Who is Oluwakemi?</h3>
            <p>I am Frontend developer with a solid foundation in building responsive and accessible web applications with frontend technologies.</p>
            <p>I am a Web3 developer who is interested in the potentials of blockchain and Web3 technologies to revolutionalize the way we build and use applications for the web.</p>
            <p className="interests-p">An avid learner who enjoys staying up to date on modern technologies. I go by the nickname Khemmie-Ray and if I am not coding I enjoys music, arts, literature and going on travel adventures.</p>
            <a href="https://drive.google.com/file/d/1vA9uyU-jkUAihIneKddBEfhYR_Qyi6aF/view?usp=sharing" target="_blank" className="resume">Resume</a>
          </div>
          <div className="aboutImg">
            <img src={avatar} alt="" className="bioImg"/>
          </div>
       </div>
   </main>
    )
}

export default About