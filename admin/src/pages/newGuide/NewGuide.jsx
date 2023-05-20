import "./newGuide.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { guideInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewGuide = () => {
  const [info, setInfo] = useState({});
  const [placeId, setPlaceId] = useState('');
  const [guides, setGuides] = useState([]);
  const [clearEntries, setClearEntries] = useState(false);

  const { data, loading, error } = useFetch("/places");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const guideNumbers = guides.split(",").map((guide) => ({ number: guide }));
    try {
      await axios.post(`/guides/${placeId}`, { ...info, guideNumbers });
    } catch (err) {
      console.log(err);
    } finally {
      if (clearEntries) {
        setInfo({});
        setGuides("");
        setClearEntries(false);
      }
      alert("Successfully Submitted !");
    }
  };

  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Guide</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {guideInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Guides</label>
                <textarea
                  onChange={(e) => setGuides(e.target.value)}
                  placeholder="give comma between guide numbers."
                />
              </div>
              <div className="formInput">
                <label>Choose a place</label>
                <select
                  id="placeId"
                  onChange={(e) => setPlaceId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((place) => (
                        <option key={place._id} value={place._id}>{place.name}</option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
              <button onClick={() => setClearEntries(true)}>Clear Entries</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGuide;