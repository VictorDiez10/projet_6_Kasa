import React from 'react'
import fullstar from "./../assets/star_rose.png"
import emptystar from "./../assets/star_gray.png"

export default function Rating({rate}) {
    const range = [
        1,2,3,4,5
    ]
  return (
    <>
        {range.map((rangeNumber) => 
            rate >= rangeNumber ? (<img key={`rating-${rangeNumber.toString()}`} src={fullstar} alt="fullstar" className="fullstar"/>) : (<img key={`rating-${rangeNumber.toString()}`} src={emptystar} alt="emptystar" className="emptystar"/>)
        )}
    </>
  )
}
