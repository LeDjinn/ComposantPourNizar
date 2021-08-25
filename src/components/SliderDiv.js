import React, {useState} from 'react'
import MinimalistCard from './MinimalistCard'
import ProductCardFancy from './ProductCardFancy'

const SliderDiv = () => {
    
    const cards =[<ProductCardFancy  cardName='Nizar Developpeur'/>,<MinimalistCard/>,<ProductCardFancy/>]
    const [current, setCurrent] = useState(0)
    const length =cards.length

    const nextSlide =()=>{
        setCurrent(current === length-1 ? 0: current+1)
        
    };
    const prevSlide =()=>{
        setCurrent(current === 0 ? length-1: current-1) 
    };

    return (
        <section className=" flex justify-between relative m-10">
            <div className="absolute  m-1 bottom-1/2 rounded-full bg-gray-400 h-6 w-6 hover:bg-gray-200 cursor-pointer transition duration-700" onClick={prevSlide}></div>
            <div className="absolute left-full bottom-1/2 rounded-full bg-gray-900 h-6 w-6 hover:bg-gray-200 cursor-pointer transition duration-700" onClick={nextSlide}></div>
        <div className="m-auto">
          {cards[current]}  

        </div>
        </section>
    )
}

export default SliderDiv
