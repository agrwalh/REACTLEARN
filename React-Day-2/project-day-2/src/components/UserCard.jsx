import React from 'react'
import image from '../assets/img1.jpg';
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={image} alt="harsh" />
        <p id='user-description'>Description of Harsh Agarwal</p>
    </div>
  )
}

export default UserCard