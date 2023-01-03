import Sidebar from "../components/Sidebar"
import Slide from "../components/Slide"
import { useState } from "react"
import dataslide from "../dataslide"
import arrowLeft from "../assets/arrow-left-s-fill.png"
import arrowRight from "../assets/arrow-right-s-fill.png"


function Projects() {
    const [index, setIndex] = useState(0)
    const [forData, setForData] = useState(dataslide)

    const projectData = forData.map((item, itemIndex) => {
        return (
          <Slide
            key={item.id}
            {...item}
            itemIndex={itemIndex}
            index={index}
          />
        )
      })

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
        <main className="mainContent">
         <Sidebar />
        <div className="content preview">
            {projectData} 
            <div className="p-btn">
            <button onClick={handlePrev}><img src={arrowLeft} alt="" className="p-icons"/></button>
            <button onClick={handleNext}><img src={arrowRight} alt="" className="p-icons"/></button> 
            </div> 
        </div>
    </main>
    )
}

export default Projects