import avatar from "../assets/avatar.jpg"

function About() {
    return (
        <main className="mainContent">
       <div className="content about-info">
          <div className="Bio">
            <h3>Who is Oluwakemi?</h3>
            <p>I'm a Frontend developer with a solid foundation in building responsive and accessible web applications with frontend technologies such HTML, CSS, JavaScript, React, Bootstrap and TailwindCSS.</p>
            <p>I'm a Web3 developer who is interested in the potentials of blockchain and Web3 technologies to revolutionalize the way we build and use applications for the web.</p>
            <p className="interests-p">An avid learner who enjoys staying up to date on modern technologies. I go by the nickname Khemmie-Ray and if I'm not coding I enjoy music, arts, literature and going on travel adventures.</p>
            <a href="https://www.canva.com/design/DAFVaOGrGWA/wJBf3UOTCOEnWqG1OfDgmA/view?utm_content=DAFVaOGrGWA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" className="resume">Resume</a>
          </div>
          <div className="aboutImg">
            <img src={avatar} alt="" className="bioImg"/>
          </div>
       </div>
   </main>
    )
}

export default About