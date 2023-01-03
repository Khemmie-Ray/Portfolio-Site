import Sidebar from "../components/Sidebar"
import Typewriter from "typewriter-effect"

function Home() {
    return (
        <main className="mainContent">
         <Sidebar />
        <div className="content">
            <div className="intro">
            <h1>Hello,</h1>
            <p>I am Oluwakemi Atoyebi - a Frontend developer and a Web3 enthusiast.</p>
            <p>Things that I do: </p>
                <p><Typewriter 
                    options={{
                        strings: ["I code", "I design", "I learn", "I write"],
                        autoStart: true,
                        loop: true,
                    }}
                /></p>
            </div>
        </div>
    </main>
    )
}

export default Home