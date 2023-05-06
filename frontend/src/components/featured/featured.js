import "./featured.css";
import useFetch from "../../hooks/useFetch";

export default function Featured() {
  const { data, loadaing, error } = useFetch(
    "http://localhost:8000/api/hotel/countByCity?cities=Kandy,Colombo,Ella"
  );

  console.log(data);

  return (
    <div className="featured">
      { loadaing ? "loading please wait" : 
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/685330.jpg?k=ee4ac422e47649d2d04a9759dc81fa51f138f477796a8043557e864517ae6f5f&o="
              alt=""
              className="featuredImage"
            />

            <div className="featuredTitle">
              <h1>Kandy</h1>
              <h2>Sri Lanka</h2>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/685293.jpg?k=799ffc96a5a78c6ed25a9f622dd64617e54e27219c54a828d1830cb3055560db&o="
              alt=""
              className="featuredImage"
            />

            <div className="featuredTitle">
              <h1>Colombo</h1>
              <h2>Sri Lanka</h2>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/685291.jpg?k=df198931295a3a24c278b32556c0779cd74e95a239489a7fe98d89eb2aed72ee&o="
              alt=""
              className="featuredImage"
            />

            <div className="featuredTitle">
              <h1>Ella</h1>
              <h2>Sri Lanka</h2>
              <h2>{data[2]} properties</h2>
            </div>
          </div>{" "}
        </>
      }
    </div>
  );
}
