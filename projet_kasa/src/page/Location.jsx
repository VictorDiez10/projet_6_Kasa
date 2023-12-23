import React from 'react'
import { useEffect, useState } from "react";
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ImageSlider from "../components/ImageSlider.jsx"
import "../styles/location.scss"
import FullStars from "../assets/star_rose.png"
import EmptyStars from "../assets/star_gray.png"

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

    const fullStars = Array(5).fill(<img src={FullStars} alt="full-star"/>)
    const emptyStars = Array(5).fill(<img src={EmptyStars} alt="empty-star"/>)

      return(
          <>
          <Header/>
          <div className="container">
          <div className="container-styles">
          {logement.pictures && (
          <ImageSlider slides={logement.pictures}/>
            )}
          </div>
          </div>
          <div>
            {fullStars.slice(5 - logement.rating).map(fullStar => {
              return (
                <div key={Math.random()}>{fullStar}</div>
              )
            })}
            {emptyStars.slice(logement.rating).map(emptyStar => {
              return (
                <div key={Math.random()}>{emptyStar}</div>
              )
            })}
          </div>
          </>
      )
  
}