import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function Card(props) {

    return (
        <div className="cards">
            <div className="card">
                <h1 className="card--title">{props.item.title}</h1>
                <Splide
                    options={ {
                        rewind: true,
                        gap   : '1rem',
                        perPage: 2,
                        height : '1rem',
                    } }
                    aria-label="My Favorite Images"
                    >
                    <SplideSlide>
                        <img src="image1.jpg" alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="image2.jpg" alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="image3.jpg" alt="Image 3"/>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}