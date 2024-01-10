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
                {data.map((item)=> (
                    <Collapse  key={item.name} name={item.name} para={item.reponse} />
                ))}
            </div>
        <Footer/>
        </>
    )
}
const data = [
    {
        name: "Fiabilité",
        reponse: "Les annonces  postées  sur Kasa garantissent une fiabilité totale. Les photos sont  conformes aux logements, et toutes les informations  sont régulièrement vérifiées par nos équipes"
    },
    {
        name: "Respect",
        reponse: "La bienveillance fait partie  des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
    },
    {
        name: "Service",
        reponse: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question"
    },
    {
        name: "Sécurité",
        reponse: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]
export default Propos