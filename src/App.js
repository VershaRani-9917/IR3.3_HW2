import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header"

export default function App() {
  return (

    <>
    <Header/>
    <main className="container py-4">
      <h1>Latest Listings</h1>

    
        
        <div>
          <img
            src="https://cdn.tatlerasia.com/asiatatler/i/my/2018/11/06133444-airbnb-triton-villa_cover_1350x901.jpg"
            alt="Taste of Italy"
            className="img-fluid  rounded mb-2"
            style={{ height: "500px", width: "100%", objectFit: "cover"}}
          />
          <h4>Beachfront Villa with Stunning Views</h4>
          <p>Entire loft . 2 guests . 1 bedroom . 1 bed . 1 bath </p>
          <p>Relax and unwind in this beautiful beachfront villa. Wake p to panormic ocean views, take a dip in the private pool, and enjoy seamless indoor-outdoor loving.</p>
          <p>$120 per night</p>
        </div>

      
        <div>
          <img
            src="https://thespaces.com/wp-content/uploads/2017/06/Guava-House-Sri-Lanka-Living-Room-1.jpg"
            alt="Spice Village"
            className="img-fluid rounded mb-2"
            style={{ height: "500px", width: "100%", objectFit: "cover"}}
          />
          <h4>Cozy Loft in the City Center</h4>
          <p>Entire villa . 6 guests . 3 bedroom . 2 bed . 2 bath </p>
          <p>Enjoy your stay in this loft apartment located in the heart of the city. Close to restaurants, shops, and attractions, it's the perfect base for exploring the city.</p>
          <p>$300 per night</p>
        </div>
     
    </main>
    <Footer/>
    </>
  );
}
