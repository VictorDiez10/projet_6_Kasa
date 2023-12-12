import Banner from "../components/Banner.jsx"
import Header from "../components/Header.jsx"
import Foret from "../assets/foret_et_montagne_a_propos.png"
import Collapse from "../components/Collapse.jsx"
import Footer from "../components/Footer.jsx"

function Propos() {
    return(
        <>
        <Header/>
        <Banner img={Foret}/>
        <div className="container_collapse">
            <Collapse name="Fiabilité"/>
            <Collapse name="Respect"/>
            <Collapse name="Service"/>
            <Collapse name="Sécurité"/>
        </div>
        <Footer/>
        </>
    )
}

export default Propos