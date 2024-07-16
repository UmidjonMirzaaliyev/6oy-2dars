import React from 'react'
import "./user.css"
import data from "../../assets/data.json"

function User() {
  return (
    <div className='user'>
       {
        data.length && data.map((el, index) =>{
            return (
                <div key={index} className="cart">
                    <img src={el.image} alt="image" />
                    <h2>{el.firstName + " " + el.lastName}</h2>
                    <span className='address'>
                        <p>{el.phone}</p>
                        <p>{el.email}</p>
                    </span>
                    <br />
                    <span className='location'>
                        <p>{el.address.region}</p>
                        <p>{el.address.zip}</p>
                    </span>
                    <span className='cars'>
                        {
                            !el.cars.length ? <p className='car'>Avtomobil topilmadi</p> : <p className='car'>{el.cars.join(",   ")}</p>
                        }
                    </span>
                </div>
            )
        })
       }
    </div>
  )
}

export default User