import Sidebar from "../components/Sidebar"

function Contact() {
    return (
        <main className="mainContent">
        <div className="contact-info content">
            <div className="contact-data">
            <h2>Stay in touch.</h2>
            <p>It's a pleasure to have you here and I am always super excited to hear about new ideas and opportunities. You can send me a <a href="">mail</a> or a message via the form.</p>
            </div>
        <form action="https://mailthis.to/Khemmie-Ray" method="POST">
            <input 
            type="text"
            name="name"
            placeholder="Your name" 
            />
            <input 
            type="email" 
            name="_replyto"
            placeholder="Email address"
            />
            <textarea name="" id="" cols="30" rows="10" />
            <button className="btn">Submit</button>
        </form>
          </div>
   </main>
    )
}

export default Contact