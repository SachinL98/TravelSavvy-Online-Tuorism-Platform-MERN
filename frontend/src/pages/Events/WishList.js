import React from 'react'
import WishListHeader from '../../components/WishList/WishListHeader'
import WishListData from '../../components/WishList/WishListData'

export default function WishList() {
  return (
    <div style={{padding: "50px"}}>
        <WishListHeader/>
        <hr/>
        <br/>
        <WishListData/>
    </div>
  )
}
