import React from 'react'

export default function WishListHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
        <h2><b>Hi {user.user.firstname}, This Is Your Wish Listed Events </b>💫 </h2>
        <p style={{fontFamily: "cursive"}}>You can save your favourite events here... ➕</p>
    </div>
  )
}
