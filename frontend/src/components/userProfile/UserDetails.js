import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useFetch from "../../hooks/useFetch";

export default function UserDetails() {
  const { user } = useAuthContext();
  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/users/${user.user._id}`
  );

  const [firstname, setfName] = useState("");
  const [lastname, setlName] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (data && data._id) {
      setfName(data.firstname);
      setlName(data.lastname);
      setMobileNumber(data.mobilenumber);
      setEmail(data.email);
    }
  }, [data]);

  console.log(data);

  return (
    <div>
      <form className="addP">
        <div className="addPTitles">
          <center>
            <h2 style={{ color: "#003580" }}>User Details</h2>
          </center>
          <br />
          <br />
        </div>

        <div className="container">
          <div className="leftSide">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name=""
              onChange={(e) => setfName(e.target.value)}
              value={firstname}
              placeholder="eg : Kamal"
            />
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name=""
              onChange={(e) => setlName(e.target.value)}
              value={lastname}
              placeholder="eg : Perera"
            />
          </div>
          <div className="leftSide">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="example@gmail.com"
            />
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              name=""
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobilenumber}
              placeholder="eg : 07x xx xx xxx"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
