import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <h1 className="section--title">{props.item.title}</h1>
        </div>
    )
}