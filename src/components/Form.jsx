import { useState } from "react"

function Form() {
    const [fullname, setFullName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [textBody, setTextBody] = useState("")
    const [message, setMessage] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
          let res = await fetch("https://formsubmit.co/ajax/atokemmy@gmail.com", {
            method: "POST",
            headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                fullname: fullname,
                emailAddress: emailAddress,
                textBody: textBody
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setFullName("");
            setEmailAddress("");
            setTextBody("")
            setMessage("Form submitted successfully")
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
    
      return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={fullname}
              placeholder=" Your fullname"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              value={emailAddress}
              placeholder="Your Email"
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
            <textarea name="message"
            value={textBody}
            placeholder="Your message" 
            id="" cols="30" rows="10" 
            onChange={(e) => setTextBody(e.target.value)}
            required
            />
            <button type="submit" className="btn">Submit</button>
            <div className="message">
            {message ? <p>{message}</p> : null}
            </div>
          </form>
    );
}

export default Form