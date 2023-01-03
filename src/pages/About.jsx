import Sidebar from "../components/Sidebar"
import avatar from "../assets/avatar.jpg"

function About() {
    return (
        <main className="mainContent">
        <Sidebar />
       <div className="content about-info">
          <div className="Bio">
            <h3>Who is Oluwakemi?</h3>
            <p>Frontend developer with a solid foundation in building responsive and accessible web applications with frontend technologies.</p>
            <p>Web3 developer who is interested in the potentials of blockchain and Web3 technologies to revolutionalize the way we build and use applications for the web.</p>
            <p>An avid learner who enjoys staying up to date on modern technologies. She goes by the nickname Khemmie-Ray and if she is not coding she enjoys music, arts, literature and going on travel adventures.</p>
            <a href="" className="resume">Resume</a>
          </div>
          <div className="aboutImg">
            <img src={avatar} alt="" className="bioImg"/>
          </div>
       </div>
   </main>
    )
}

export default About