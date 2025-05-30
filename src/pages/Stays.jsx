import Footer from "../components/Footer";
import Header from "../components/Header"
import {Link} from "react-router-dom";

function Stays() {
  return (
    <>
    <Header/>
    <main className="container py-4">
      <h1>Featured Stays</h1>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhE_HSSwiaS-mJ2kCc5Lvxz84OOp83fwdvGypB8Xz2EVaX8_m9a9zrfaWRCQXL-4pM5I&usqp=CAU"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Taste of India"
        />
        <div className="card-body">
          <h5 className="card-title">Cozy Cottage Retreat</h5>
          <p className="card-text">
          Escape to nature with this cozy mountain retreat.
          </p>
          <p className="text-muted">Last updated 3 mins ago</p>
          <Link to="/stays/1" className="btn btn-primary">Read More</Link>
        </div>
      </div>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQ01cLbcTUBedryGuVjtvX8G6K2x0sg7O6cuazCy02CECk3P2fHtLewAae62MV8Vyimk&usqp=CAU"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Pizza Paradise"
        />
        <div className="card-body">
          <h5 className="card-title">Beachfrount Paradise Villa</h5>
          <p className="card-text">
          Wake up to a breathtaking view of the Taj Mahal from this luxurious apartment.
          </p>
          <p className="text-muted">Last updated 10 mins ago</p>
          <Link to="/stays/2" className="btn btn-primary">Read More</Link>
        </div>
      </div>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQmzkbsuVajEBQPjiJBT5Js2MeWXXYYPMNysAM_L8FfNLdihz-gwUYgOvYf8vITzczfI&usqp=CAU"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Seaside Villa"
        />
        <div className="card-body">
          <h5 className="card-title">Seaside Villa with Private Beach Access</h5>
          <p className="card-text">
            Indulge in luxury with this stunning seaside villa.
          </p>
          <p className="text-muted">Last updated 15 mins ago</p>
          <Link to="/stays/3" className="btn btn-primary">Read More</Link>
        </div>
      </div>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPVC-VNEWCZ7qg3P3-WXpN8MJeKMaDgXf-A&s"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Modern Loft"
        />
        <div className="card-body">
          <h5 className="card-title">Modern Loft in the City Center</h5>
          <p className="card-text">
            Experience urban living at its finest in this modern loft.
          </p>
          <p className="text-muted">Last updated 20 mins ago</p>
          <Link to="/stays/4" className="btn btn-primary">Read More</Link>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default Stays;
