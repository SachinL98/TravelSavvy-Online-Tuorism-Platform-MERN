import ImgHero3 from "../../assets/hero3.png";

export default function HeroSection() {
  return (
  //   <section className="hero d-flex align-items-center my-5">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <h1 className="display-4 fw-bold mb-4">All Train schedules at your fingertips</h1>
  //         <p className="lead fs-5 mb-4">
  //           We provide the best car options, with premium customer services at a competitive price
  //         </p>
  //       </div>
  //       <div className="col-md-6 d-flex justify-content-center">
  //         <img
  //           src={ImgHero3}
  //           alt=""
  //           className="img-fluid"
  //           style={{ maxHeight: "100%", maxWidth: "100%" }}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // </section>

  <section
  className="hero
   grid grid-cols-1 grid-rows-3 content-center gap-4 m-auto my-8 max-w-[100rem] 
   md:grid-rows-2 md:grid-cols-2 md:gap-8 md:mt-12
   lg:my-16
  "
>
  <div
    className="
    text-center hero-text max-w-2xl self-center row-start-2 
    md:text-start
    lg:row-start-1 
    "
  >
    <h1
      className=" font-bold text-4xl text-dark leading-relaxed 
      xl:text-6xl
      "
    >
      Rent your Dream Car <br />
      Around the World
    </h1>
    <p className=" text-xl mt-4 leading-loose">
      We provide the best car options, with premium customer services at a
      competitive price
    </p>
  </div>
  <img
    src={ImgHero3}
    alt=""
    className="
      self-center max-w-full max-h-full object-cover row-start-1 col-start-1 col-span-2
      lg:row-span-2 lg:col-start-2 lg:col-span-1"
  ></img>
  {/* <HeroForm
    className="
    self-center row-start-3 max-w-2xl
    md:row-start-2  
    "
  ></HeroForm> */}
</section>
  )
}
