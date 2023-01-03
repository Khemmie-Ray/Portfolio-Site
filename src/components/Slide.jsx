import dataslide from "../dataslide"

function Slide(props) {
    const {id, img, description, link, title, livelink, itemIndex, index} = props
    
    let position = "nextSlide"

    if(itemIndex === index) {
        position = "activeSlide"
    } 
    
    return (
        <div className={`${position} slideContainer`} key={id}>
            <div className="p-img">
                <img src={img} alt="" />
            </div>
            <div className="p-info">
                <h3 className="p-title">{title}</h3>
                <p>{description}</p>
                <a href={link}>Github URL</a>
                <a href={livelink}>Livesite</a>
            </div>
        </div>
    )
}

export default Slide