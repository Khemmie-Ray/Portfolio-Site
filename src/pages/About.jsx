import avatar from "../assets/avatar.jpg"

function About() {
    return (
        <main className="mainContent">
       <div className="content about-info">
          <div className="Bio">
            <h3>Who is Oluwakemi?</h3>
            <p>I'm a Frontend developer with a solid foundation in building responsive and accessible web applications with frontend technologies such HTML, CSS, JavaScript, React, Bootstrap and TailwindCSS.</p>
            <p>I'm a Web3 enthusiast, fascinated by the transformative impact of blockchain and Web3 technologies on web application development and usage.</p>
            <p className="interests-p">An avid learner who enjoys staying up to date on modern technologies. I go by the nickname Khemmie-Ray and if I'm not coding I enjoy music, arts, literature and going on travel adventures.</p>
            <a href="https://www.canva.com/design/DAFny9dUhPY/IiTed8QKZXEMy4nyYtEPEA/view" target="_blank" className="resume">Resume</a>
          </div>
          <div className="aboutImg">
            <img src={avatar} alt="" className="bioImg"/>
          </div>
       </div>
   </main>
    )
}

export default About