import './featuredProperties.css'
import useFetch from "../../hooks/useFetch";

export default function FeaturedProperties() {

    const { data, loading, error } = useFetch(
        "http://localhost:8000/api/hotel/getFeaturedHotels?featured=true"
      );


  return (
    <div className="fp">
        {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140016353.jpg?k=232ef71e6c3a553cb601e631add2548814977cb28ec5e3af07501d1f25795fb9&o="
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from Rs{item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}

        
        
    </div>
  )
}
