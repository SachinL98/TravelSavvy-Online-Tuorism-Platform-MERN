import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle"> Browse Locations </h1>
        <PropertyList/>
        <h1 className="homeTitle"> Recommended for You </h1>
        <FeaturedProperties/>
        {/* <MailList/> */}
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default Home;
