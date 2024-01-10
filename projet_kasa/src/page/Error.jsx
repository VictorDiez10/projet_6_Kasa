import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/error.scss"
import { NavLink } from "react-router-dom"

function Error() {
    return(
        <>
        <Header/>
            <div className="error">
                <div className="error_404">404</div>
                <div className="error_oups"><p>Oups! La page  que vous demandez n'existe pas.</p></div>
                <NavLink to="/" className="error_accueil">Retournez sur la page d'accueil</NavLink>
            </div>
        <Footer/>
        </>
    )
}

export default Error