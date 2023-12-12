import React from 'react'
import "../styles/cards.scss"

export default function Card({cover, title}) {
    return (
            <>
            
            <div className="card_logements">
            <div className="card_content">
                <img src={cover} alt={title} className="card_img"/>
                </div>
                <div className="card_title">{title}</div>
                
            </div>
            </>
    )
}