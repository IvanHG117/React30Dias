import React from 'react'
import asabenehImage from './images/asabeneh.jpg'


const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

export default UserCard