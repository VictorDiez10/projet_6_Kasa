import React from 'react'
import { useEffect, useState } from "react";
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ImageSlider from "../components/ImageSlider.jsx"
import "../styles/location.scss"
import FullStars from "../assets/star_rose.png"
import EmptyStars from "../assets/star_gray.png"
import Collapse from '../components/Collapse';

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
          <div className="title-host-photo">
            <div className="title">
              <h2>{logement.title}</h2>
            </div>
            <div className="host-name-photo">
              <div className="host-name">
                <p>{logement.host && logement.host.name}</p>
              </div>
              <div className="host-photo">
                <img src={logement.host && logement.host.picture} alt="profile-picture" />
              </div>
            </div>
          </div>
          <div className="location">
            <p>{logement.location}</p>
          </div>
          <div className="tags-rating">
            <div className="tags">
              {logement.tags && logement.tags.map(tag => {
                return (
                  <div className="tag" key={tag}>{tag}</div>
                )
              })}
            </div>
            <div className="rating">
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
          </div>
          <div className="description-equipements">
            <Collapse name="Description" para={logement.description}/>
            <Collapse name="Equipements" para={logement.description && logement.equipments.map(equipment => {
              return (
                <ul>
                  <li key={equipment}>{equipment}</li>
                </ul>
              )
            })}/>
          </div>
          </>
      )
  
}