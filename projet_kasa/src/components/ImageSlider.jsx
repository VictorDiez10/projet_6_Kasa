import { useState } from "react";
import left from "../assets/left.png"
import right from "../assets/right.png"

function ImageSlider ({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    if(slides.length === 1) {
        return (
            <div className="slider-styles">
                <div className="slide-styles" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div>    
            </div>
        )
    } else {
    return (
        <div className="slider-styles">
            <div className="counter">{currentIndex + 1}/{slides.length}</div>
            <img src={left} alt="left" className="left" onClick={goToPrevious}/>
            <img src={right} alt="right" className="right" onClick={goToNext}/>
            <div className="slide-styles" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div>
        </div>
    )}
}

export default ImageSlider;