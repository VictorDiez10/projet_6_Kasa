import React from 'react'
import "../styles/cards.scss"

export default function Card({cover, title}) {
    return (
            <>
            
            <div className="card_overlay"></div>
                <img src={cover} alt={title} className="card_img"/>
            
            <div className="card_title">{title}</div>
            </>
    )
}