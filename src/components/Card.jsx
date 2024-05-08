import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css";

export default function Card(props) {

    return (
        <div className="cards">
            <div className="card">
                <h1 className="card--title">{props.item.title}</h1>
                <Splide
                    options={ {
                        rewind: true,
                        gap   : '1rem',
                        perPage: 1,
                        height: '15rem',
                        width: '30rem',
                        type: 'loop',
                    } }
                    aria-label="My Favorite Images"
                    >
                    <SplideSlide>
                        <img className="slider" src="/images/3.svg" alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className="slider" src="/images/4.svg" alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className="slider" src="/images/5.svg" alt="Image 3"/>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}