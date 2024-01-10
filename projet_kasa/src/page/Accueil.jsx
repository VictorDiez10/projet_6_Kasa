import Banner from "../components/Banner";
import Header from "../components/Header";
import "../styles/accueil.scss"
import Falaise from "../assets/montagne_mer_accueil.png"
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Accueil() {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch("./logements.json")
        .then(response => response.json())
        .then((data) => setLogements(data))
        .catch((error) => console.log(error))
    },[])

    return (
        <>
        <Header/>
        <Banner img={Falaise} title="Chez vous, partout et ailleurs"/>
            <main>
                <div className="container_logements">
                    {logements.map(logement => {
                        return(
                            <Link to={`logement/${logement.id}`} key={logement.id} className="card_click">
                                <Card cover={logement.cover} title={logement.title}/>
                            </Link>
                        )
                    })}
                </div>
            </main>
        <Footer/>
        </>
    )
}

export default Accueil