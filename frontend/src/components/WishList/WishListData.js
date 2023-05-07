import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function WishListData() {
    const user = JSON.parse(localStorage.getItem('user'));
    const uID = user.user._id;

    const [wishList, setWishList] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/wishlist/get/${uID}`)
        .then((res)=>{
            console.log(res.data);
            setWishList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);


  return (
    <div>
      <div class="row row-cols-1 row-cols-md-4 g-4" >
      {wishList.map((wishListData)=>(
        <div class="col">
            <div class="card" style={{margin: "10px"}}>
            <img src={wishListData.event.image} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title"><b>{wishListData.event.name}</b></h5>
              <p class="card-text">{wishListData.event.description}</p>
              <div>
                <button type="button" class="btn btn-primary btn-sm" style={{marginRight: "10px"}}>View Details</button>
                {user.user.type == 'traveller' && (
                    <button type="button" class="btn btn-danger btn-sm">Remove From Wish List</button>
                )} 
              </div>
            </div>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}
