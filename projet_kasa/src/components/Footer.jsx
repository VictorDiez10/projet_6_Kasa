import React from 'react'
import Footer_Kasa from "../assets/logo_kasa_footer.png"
import "../styles/footer.scss"

export default function Footer() {
return (<footer>
        <div className="footer_kasa">
        <div className="footer_all_right">
        <img src={Footer_Kasa} alt="Logo KASA" className="footer_img_kasa"/>
        <p>@2020 Kasa. All right</p>
        </div>
        </div>
        </footer>
)
}