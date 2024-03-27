import React from "react"

export default function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <h1 className="card--title">{props.item.title}</h1>
            </div>
        </div>
    )
}