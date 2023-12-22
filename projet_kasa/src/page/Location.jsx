import React from 'react'
import { useEffect, useState } from "react";
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ImageSlider from "../components/ImageSlider.jsx"
import "../styles/location.scss"

export default function Location() {

  const [logement, setLogement] = useState({})
  
  const {id} = useParams();
    useEffect(() => {
        fetch("/logements.json")
        .then(response => response.json())
        .then((data) => {
          let log = data.find(l => l.id == id);
          console.log(log)
          setLogement(log)
        })
        .catch((error) => console.error(error))
    },[id]);

      return(
          <>
          <Header/>
          <div className="container-styles">
          {logement.pictures && (
          <ImageSlider slides={logement.pictures}/>
            )}
          </div>
          <div>
            
          </div>
          </>
      )
  
}