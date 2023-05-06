import'../Home/home.css'
import Navbar from '../../components/NavBar/navbar'
import Header from '../../components/header/header'
import Featured from '../../components/featured/featured'
import PropertyList from '../../components/propertyList/propertyList'
import FeaturedProperties from '../../components/featuredProperties/featuredProperties'

export default function home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">
          Browse by property type
        </h1>
        <PropertyList/>
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties/>
      </div>
      </div>
  )
}

