import ImgHero3 from "../../assets/hero3.png";

export default function HeroSection() {
  return (
    <section className="hero d-flex align-items-center my-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold mb-4">All Train schedules at your fingertips</h1>
          <p className="lead fs-5 mb-4">
            We provide the best car options, with premium customer services at a competitive price
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={ImgHero3}
            alt=""
            className="img-fluid"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  </section>
  )
}
