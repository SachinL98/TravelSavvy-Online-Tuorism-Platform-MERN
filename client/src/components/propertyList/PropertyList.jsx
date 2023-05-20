import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/places/countByType");

  const images = [
    "https://www.tripsavvy.com/thmb/4AAWBQ3ghpXji2fAY5UWBQU-L70=/3992x2992/filters:fill(auto,1)/aerial-view-of-sigiriya-rock-at-misty-morning--sri-lanka--drone-photo--1129567907-a6628ce7d636462f9a0e0361a3808178.jpg",
    "https://i.pinimg.com/originals/20/a5/31/20a531cb473af9fed2722143ddd8eb66.jpg",
    "https://th.bing.com/th/id/R.601203abd3b7f5cbc6db4fc4a6798c6c?rik=HGqUEMgWFpqgFg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.1a2cb820d0ceee29f2af533546f9b158?rik=UMc9qZ91zGsGfQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.0ebaabad8f72a5b71223a748b5b20e74?rik=vc43g%2bfJo6fPhQ&pid=ImgRaw&r=0",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
