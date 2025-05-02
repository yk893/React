import React from 'react'
import "./Productcard.css"

const Productcard = ({products}) => {
  return (
    <div>
        {products.map((pr)=>(
            <div>
                <p>{pr.title}</p>
                <img src={pr.image} alt="" />
                <h2>{pr.price}</h2>
            </div>
        ))}
    </div>
  )
}

export default Productcard