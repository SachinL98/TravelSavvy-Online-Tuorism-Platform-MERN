import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useDraggableScroll from "use-draggable-scroll";
import { getCarArray } from "../Helpers/CarsProvider";
import { CatalogueCard } from "../components/Cards/Cards";
import "./CarDisplay.css";
import { BuAccent } from "../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export function ScrollDisplay() {
  const user = localStorage.getItem("user");
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  const navigate = useNavigate();

  const [car, setCar] = useState([]);
  const [deleted, setDeleted] = useState(false);

  function deleteCar(id) {
    const ans = window.confirm("Are you sure ?");
    if (ans) {
      axios
        .delete(`http://localhost:8000/car/deleteCar/${id}`)
        .then((res) => {
          window.alert("Car Deleted !");
          setDeleted(true);
          // navigate("/carHome");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    function getAllCars() {
      axios
        .get("http://localhost:8000/car/getCar")
        .then((res) => {
          const fetchedCars = res.data;
          const slicedCars = fetchedCars.slice(0, 2); // Fetching the first 2 cars
          setCar(slicedCars);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllCars();
    setDeleted(false);
  }, [deleted]);

  return (
    <section className="flex flex-col gap-4 ">
      <div className="d-flex justify-content-center mt-4 mb-4">
        {user && (
          <Link to="/addNewCar">
            <button
              className="btn btn-success btn-lg"
              style={{ float: "right", marginRight: "10px" }}
            >
              Add New Car
            </button>
          </Link>
        )}
      </div>
      <div className="flex flex-row justify-between">
        <p className="text-dark fw-bold">Popular Cars</p>
        <a href="#" className="fw-semibold">
          View All
        </a>
      </div>
      <div
        onMouseDown={onMouseDown}
        ref={ref}
        className=" grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6"
      >
        {/* {getCarArray(4).map((car, index) => (
          <CatalogueCard car={car} key={index} />
        ))} */}

        {car.map((car, index) => (
          <Link to="/carHome" style={{ textDecoration: "none" }}>
            <CatalogueCard car={car} key={index} deleteCar={deleteCar} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function GridDisplay() {
  const [car, setCar] = useState([]);
  const [deleted, setDeleted] = useState(false);

  function deleteCar(id) {
    const ans = window.confirm("Are you sure ?");
    if (ans) {
      axios
        .delete(`http://localhost:8000/car/deleteCar/${id}`)
        .then((res) => {
          window.alert("Car Deleted !");
          setDeleted(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    function getAllCars() {
      axios
        .get("http://localhost:8000/car/getCar")
        .then((res) => {
          const fetchedCars = res.data;
          const slicedCars = fetchedCars.slice(0, 3); // Fetching the first 2 cars
          setCar(slicedCars);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllCars();
    setDeleted(false);
  }, [deleted]);

  return (
    <section className="flex flex-col gap-4 mt-6">
      <p className="text-dark fw-bold">Recommended</p>
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6">
        {car.map((car, index) => (
          <Link to="/carHome" style={{ textDecoration: "none" }}>
            <CatalogueCard car={car} key={index} deleteCar={deleteCar} />
          </Link>
        ))}
      </div>
      <BuAccent
        text="View More"
        className="py-4 px-6  rounded-sm m-auto mt-4"
      />
    </section>
  );
}
