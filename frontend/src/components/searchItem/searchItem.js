import './searchItem.css'
import {Link} from 'react-router-dom'

export default function searchItem({item}) {

  return (
    <div className="searchItem">
        {item.images[0] ? <img src={item.images[0]} alt="" className="siImg" width="200" height="200" /> :<img src="https://cf.bstatic.com/xdata/images/hotel/square600/207507535.webp?k=766b5488977b325652ee811640d11ad5d3623f6db095ff08ca97ddca340dbb8b&o=&s=1" alt="" className="siImg" />}
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <div className="siSubtitle">Stdio Apartment with air conditioning</div>
            <div className="siFeatures">{item.desc}</div>
            <div className="siCancelation">free cancellation</div>
            <div className="siCancleDesc">You can cancle later , so lock in the greate price to day </div>
        </div>
        <div className="siDetails">

            <div className="siDetailsTexts">
                <span className="siPrice">Rs.{item.cheapestPrice}</span>
                <span className="siTaxop">Includes taxes and fees</span>
                <Link to ={`/hotels/${item._id}`}>
                <button className = "siCheckButton">See Avalibilty</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
