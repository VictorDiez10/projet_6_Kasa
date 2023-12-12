import { NavLink } from "react-router-dom"
import Kasa from "../assets/logo_kasa_desktop.png"
import "../styles/header.scss"



function Header() {
    return(
        <header className="header">
            <div className="sous_header">
                <img src={Kasa} alt="Kasa" className="logo_kasa"/>
                <nav className="nav_links">
                    <NavLink className={({ isActive }) => isActive ? "active" : "accueil"} to="/" >Accueil</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : "propos"} to="/a-propos">A Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header