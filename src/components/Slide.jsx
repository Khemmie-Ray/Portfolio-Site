import { useState } from "react"
import dataslide from "../dataslide"
import arrowLeft from "../assets/arrow-left-s-fill.png"
import arrowRight from "../assets/arrow-right-s-fill.png"

function Slide(props) {
    const [index, setIndex] = useState(0)

    let currentIndex = dataslide[index]

    const dataResult = <div className="slide">
            <div className="p-img">
                <img src={currentIndex.img} alt="" />
            </div>
            <div className="p-info">
                <h3 className="p-title">{currentIndex.title}</h3>
                <p>{currentIndex.description}</p>
                <a href={currentIndex.link}>Github URL</a>
                <a href={currentIndex.livelink}>Livesite</a>
            </div>
        </div>

        function handlePrev() {
            setIndex(prev => { 
                if(prev === 0) {
                return  prev = 4
                }
                return prev - 1
            })
        }

        function handleNext() {
            setIndex(prev => { 
                if(prev === 4) {
                return  prev = 0
                }
                return prev + 1
            })
        }
    
    return (
        <div className="slideContainer">
        {dataResult}
        <div className="p-btn">
            <button onClick={handlePrev} className="prevBtn"><img src={arrowLeft} alt="" className="p-icons"/></button>
            <button onClick={handleNext} className="nextBtn"><img src={arrowRight} alt="" className="p-icons"/></button> 
            </div> 
        </div>
    )
}

export default Slide