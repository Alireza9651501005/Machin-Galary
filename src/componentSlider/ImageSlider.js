import React,{useState, useEffect} from 'react'
import {SliderData} from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './Slider.css'
import '../App.css'
const ImageSlider = ({slides}) => {
    const [current, setcurrent] = useState(0);
    const length = slides.length

    useEffect(() => {
        const aall = setTimeout(nextslide, 3000);
        return () => {
            clearTimeout(aall)
        }
    })

    const nextslide = () => {
        setcurrent(current === length -1 ? 0 : current + 1);
    }
   
    const prevslide = () => {
        setcurrent(current === 0 ? length -1 : current - 1);
    }
    
    if (!Array.isArray(slides) || slides.length <=0) {
        return null
    }
    return (
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevslide} />
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key ={index}>
                            {index === current && (
                                <img src={slide.image} alt="my best favourit cars" className='image'/>
                            )}
                        </div>
                    )
                })}
                <FaArrowAltCircleRight className='right-arrow' onClick={nextslide} /> 
            </section>
    )
}

export default ImageSlider
