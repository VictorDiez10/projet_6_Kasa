import React, { useState } from 'react'
import collapse from "../assets/collapse.png"
import "../styles/collapse.scss"

export default function Collapse({name, para}) {

    const [isOpen, setIsOpen] = useState(false)
        return (
            <>
            <div className="banner_collapse">
                <div className="banner_name_collapse">
                    <p>{name}</p>
                    <img src={collapse} alt={isOpen ? "collapse" : "uncollapse"} className={isOpen ? "collapse" : "uncollapse"} onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            </>
            ) 
            // : (
            // <>
            // <div className="banner_collapse">
            //     <div className="banner_name_collapse">
            //         <p>{name}</p>
            //         <img src={collapse} alt="uncollapse" className="uncollapse" onClick={() => setIsOpen(true)}/>
            //     </div>
            // </div>
            // </>
            // )
    
    
    
}