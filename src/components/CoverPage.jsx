// import coverImg from "../assets/text.svg"
import coverAvatar from "../assets/cover.jpg"

function CoverPage(props) {
    return (
        <div className="wrapper">
            <header className="coverT">
                <h2 className="mainTitle">The Portfolio</h2>
            </header>
            <div className="coverContent">
                <div className="coverP">
                </div>
                    <div className="cover-info">
                    <img src={coverAvatar} alt="" className="bioImg"/>
                    <h3 className="f-name">Oluwakemi Atoyebi</h3>
                    <p className="humor">2006 Times Magazine Person of the Year😂😂.</p>
                    <button onClick={props.handleCurrentPage} className="switchBtn">Click to explore</button>
                    </div>
            </div>
        </div>
    )
}

export default CoverPage