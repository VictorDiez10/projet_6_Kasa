import React from 'react'
import { useEffect, useState } from "react";
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ImageSlider from "../components/ImageSlider.jsx"
import "../styles/location.scss"
import Collapse from '../components/Collapse';
import Footer from "../components/Footer"
import Rating from "../components/Rating"
import Error from "../page/Error"

export default function Location() {

  const [logement, setLogement] = useState({})
  
  const {id} = useParams();
    useEffect(() => {
        fetch("/logements.json")
        .then(response => response.json())
        .then((data) => {
          let log = data.find(l => l.id === id);
          console.log(log)
          setLogement(log)
        })
        .catch((error) => console.error(error))
    },[id]);

    if(logement === undefined) {
      return (<><Error /></>)
    } else {

      return (
          <>
          <Header/>
            <div className="container">
              <div className="container-styles">
                {logement && logement.pictures && (
                <ImageSlider slides={logement.pictures}/>
                )}
              </div>
            </div>
            <main>
              <div className="title-location-tags">
                <div className="title">
                  <h2>{logement && logement.title}</h2>
                </div>
                <div className="location">
                  <p>{logement && logement.location}</p>
                </div>
                <div className="tags">
                  {logement && logement.tags && logement.tags.map(tag => {
                    return (
                      <div className="tag" key={tag}>{tag}</div>
                    )
                  })}
                </div>
              </div>
              <div className="host-rating">
                <div className="host-name-photo">
                  <div className="host-name">
                    <p>{logement && logement.host && logement.host.name}</p>
                  </div>
                  <div className="host-photo">
                    <img src={logement && logement.host && logement.host.picture} alt="profile-picture" />
                  </div>
                </div>
                <div className="rating">
                  <Rating rate={logement && logement.rating} />
                </div>
              </div>
            </main>
            <div className="description-equipements">
              <Collapse name="Description" para={logement && logement.description}/>
              <Collapse name="Équipements" para={logement && logement.equipments }/>
            </div>
          <Footer/>
          </>
      )}
    } 
