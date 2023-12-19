import React, { useState } from 'react'
import collapse from "../assets/collapse.png"
import "../styles/collapse.scss"

export default function Collapse({name, para}) {
    const [isOpen, setIsOpen] = useState(false)
        return (
            <>
            <div className="all_collapse">
                <div className="collapse_content">
                    <div className="banner_collapse">
                        <div className="banner_name_collapse">
                            <p>{name}</p>
                            <img src={collapse} alt={isOpen ? "collapse" : "uncollapse"} className={isOpen ? "collapse" : "uncollapse"} onClick={() => setIsOpen(!isOpen)} />
                        </div>
                    </div>
                <div className={isOpen ? "content show" : "content"}>{para}</div>
                </div>
            </div>
            </>
            ) 
}

