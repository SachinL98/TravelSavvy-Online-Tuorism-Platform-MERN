import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}km from CIty center</span>
        <span className="siTaxiOp">Transports can be arranged </span>
        <span className="siSubtitle">
          Enjoy you vacation with TravelSavvy
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Easy transpotations </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">LKR {item.ticketPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/places/${item._id}`}>
          <button className="siCheckButton">Check Location</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
