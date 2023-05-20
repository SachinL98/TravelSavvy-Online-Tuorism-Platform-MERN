import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CatalogueCard } from "../../components/Cards/Cards";
import CheckBox from "../../components/FormControls/CheckBox";
import RangeSlider from "../../components/FormControls/RangeSlider";
import { getCarArray } from "../../Helpers/CarsProvider";
import getIcon from "../../Helpers/IconsHelper";
import { BuMinimal } from "../../components/Buttons/Buttons";
import "./Search.css";
import { Footer, NavbarTop } from "../../components/Navigation/Navigation";
import NavigationBar from "../../components/navbar";

function CatalogueGrid({ selectedFilters }) {
  
  const [car, setCar] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const filteredCars = selectedFilters.length > 0 ? car.filter(car => {
    // Apply filtering based on selected filters
    const hasTypeFilter = selectedFilters.includes(car.type);
  const hasSeatFilter = selectedFilters.includes(car.seats.toString());

  // const priceRange = [0, 100000]; // Replace minPrice and maxPrice with your actual values
  // const carPrice = car.price; // Replace price with your actual property name
  // const isPriceInRange = carPrice >= priceRange[0] && carPrice <= priceRange[1];

    // For example, if you have a "type" filter
    return hasTypeFilter || hasSeatFilter ;
  }): car;

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
          setCar(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllCars();
    setDeleted(false);
  }, [deleted]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-8 gap-y-16 justify-items-center items-center">
      {filteredCars.map((car, index) => (
           <Link
           to={`/oneCar/${car._id}`}
           style={{textDecoration: 'none'}}
         >
           <CatalogueCard car={car} key={index} />
          
         </Link>
        ))}
    </div>
  );
}

function FilterCheckElement(props) {

  const [checked, setChecked] = useState(false);

  // const handleFilterSelection = () => {
  //   // Toggle the filter selection
  //   if (props.selectedFilters.includes(props.title)) {
  //     props.setSelectedFilters(prevFilters => prevFilters.filter(filter => filter !== props.title));
  //   } else {
  //     props.setSelectedFilters(prevFilters => [...prevFilters, props.title]);
  //   }
  // };

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (!checked) {
      props.setSelectedFilters((prevFilters) => [...prevFilters, props.title]);
    } else {
      props.setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== props.title)
      );
    }
  };

  return (
    // <div className="flex gap-4 font-semibold" onClick={handleFilterSelection}>
      <div className="flex gap-4 font-semibold">
      {/* <CheckBox></CheckBox> */}
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      <p className="">{props.title}</p>
      <p className="text-secondary-300">({props.count})</p>
    </div>
  );
}

function FilterGroup(props) {
  return (
    <div className="filter__group">
      <p className="text-secondary-300 text-sm tracking-widest font-semibold">
        {props.title}
      </p>
      <div className="flex flex-col gap-4 mt-8">{props.children}</div>
    </div>
  );
}

function SideBarFilter(props) {
  return (
    <div className="sidebar lg:w-1/4 md:w-1/3 md:max-w-[18rem] w-full" data-visible={props.visible}>
    <div className="backdrop md:hidden w-full h-full bg-secondary-700 opacity-50" onClick={props.toggle}></div>
    <div className="filter bg-white w-full h-full p-4 flex flex-col gap-12 " >
      <FilterGroup title="TYPE">
        <FilterCheckElement title="Sport" count={4} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="SUV" count={3} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="SEDAN" count={1} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="CUV" count={0} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="Hatchback" count={0} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="Micro" count={0} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="Roadster" count={0} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="Coupe" count={0} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
      </FilterGroup>

      <FilterGroup title="SEATS">
        <FilterCheckElement title="2" count={4} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="4" count={4} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="6" count={0} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
        <FilterCheckElement title="8" count={0} selectedFilters={props.selectedFilters} setSelectedFilters={props.setSelectedFilters}></FilterCheckElement>
      </FilterGroup>
      <FilterGroup title="PRICE">
        <RangeSlider 
          initialMin={0}
          initialMax={120}
          min={0}
          max={100000}
          step={10}
          priceCap={10}
        ></RangeSlider>
      </FilterGroup>
    </div>
    </div>
  );
}

export default function Search(props) {
    const [sidebarVisible,setSidebarVisible] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const toggleSidbar = (prevState) =>{
        setSidebarVisible(!prevState)
    }
  return (
    <>
   <NavigationBar/>
    
    <div className="page md:flex md:gap-4">
      <SideBarFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} className="" visible={""+sidebarVisible} toggle={()=>{toggleSidbar(sidebarVisible)}} LeftIcon={getIcon("funnel")}></SideBarFilter>

      <section className="recommended flex flex-col gap-4 mt-6 flex-1 p-4 pr-6">
        <div className="flex justify-end gap-8">
        <p className="text-light mr-auto">1075 Results</p>
        <BuMinimal text="Filter" className="rounded-sm  md:hidden flex" onClick={()=>{toggleSidbar(sidebarVisible)}} LeftIcon={getIcon("funnel")}></BuMinimal>
        <BuMinimal text="Sort" className="rounded-sm" LeftIcon={getIcon("sort")}></BuMinimal>

        </div>
        <CatalogueGrid selectedFilters={selectedFilters} ></CatalogueGrid>
      </section>
    </div>
    {/* <Footer></Footer> */}
    </>
  );
}
