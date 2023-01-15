import Form from "../components/Form"

function Contact() {

    return (
        <main className="mainContent">
        <div className="contact-info content">
            <div className="contact-data">
            <h2>Stay in touch.</h2>
            <p>It's a pleasure to have you here and I am always super excited to hear about new ideas and opportunities. You can send me a <a href="mailto:atokemmy@gmail.com" className="mailLink">Mail</a> or a message via the form.</p>
            </div>
            <Form />
          </div>
   </main>
    )
}

export default Contact