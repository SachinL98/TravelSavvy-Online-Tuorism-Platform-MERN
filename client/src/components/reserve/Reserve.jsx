import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, placeId }) => {
  const [selectedGuides, setSelectedGuides] = useState([]);
  const { data, loading, error } = useFetch(`/places/guide/${placeId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (guideNumber) => {
    const isFound = guideNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedGuides(
      checked
        ? [...selectedGuides, value]
        : selectedGuides.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedGuides.map((guideId) => {
          const res = axios.put(`/guides/availability/${guideId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your guides:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.name}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectGuides">
              {item.guideNumbers.map((guideNumber) => (
                <div className="guide">
                  <label>{guideNumber.number}</label>
                  <input
                    type="checkbox"
                    value={guideNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(guideNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;




// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// import "./reserve.css";
// import useFetch from "../../hooks/useFetch";
// import { useContext, useState } from "react";
// import { SearchContext } from "../../context/SearchContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Reserve = ({ setOpen, placeId }) => {
//   const [selectedGuides, setSelectedGuides] = useState([]);
//   const { data, loading, error } = useFetch(`/places/guide/${placeId}`);
//   const { dates } = useContext(SearchContext);

//   const handleSelect = (e) => {
//     const checked = e.target.checked;
//     const value = e.target.value;
//     setSelectedGuides(
//       checked
//         ? [...selectedGuides, value]
//         : selectedGuides.filter((item) => item !== value)
//     );
//   };

//   const navigate = useNavigate();

//   const handleClick = async () => {
//     try {
//       await Promise.all(
//         selectedGuides.map((guideId) => {
//           const res = axios.put(`/guides/availability/${guideId}`, {
//             dates: dates,
//           });
//           return res.data;
//         })
//       );
//       setOpen(false);
//       navigate("/");
//     } catch (err) {}
//   };
//   return (
//     <div className="reserve">
//       <div className="rContainer">
//         <FontAwesomeIcon
//           icon={faCircleXmark}
//           className="rClose"
//           onClick={() => setOpen(false)}
//         />
//         <span>Select your guides:</span>
//         {data.filter((item) => item.placeId === placeId).map((item) => (
//           <div className="rItem" key={item._id}>
//             <div className="rItemInfo">
//               <div className="rTitle">{item.name}</div>
//               <div className="rDesc">{item.desc}</div>
//               <div className="rMax">
//                 Max people: <b>{item.maxPeople}</b>
//               </div>
//               <div className="rPrice">{item.price}</div>
//             </div>
//             <div className="rSelectGuides">
//               {item.guideNumbers.map((guideNumber) => (
//                 <div className="guide">
//                   <label>{guideNumber.number}</label>
//                   <input
//                     type="checkbox"
//                     value={guideNumber._id}
//                     onChange={handleSelect}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button onClick={handleClick} className="rButton">
//           Reserve Now!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Reserve;