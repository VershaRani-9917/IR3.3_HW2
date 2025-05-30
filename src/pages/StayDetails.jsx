import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const StayDetails = () => {
  const { stayId } = useParams();

  const stays = [
    {
      id: "1",
      name: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "Mountain View, CA",
      rating: 4.8,
      description: "Escape to a charming cottage with this cozy mountain retreat.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price: "$150/night",
    },
    {
      id: "2",
      name: "Beachfront Paradise Villa",
      type: "Villa",
      location: "Maui, Hawaii",
      rating: 4.9,
      description: "Experience luxury living in a stunning beachfront villa.",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: "$500/night",
    },
    {
      id: "3",
      name: "Urban Loft in the City",
      type: "Apartment",
      location: "New York City, NY",
      rating: 4.5,
      description: "Live in style in a modern loft apartment in the heart of the city.",
      amenities: ["Downtown Location", "Gym Access", "24/7 Security"],
      price: "$250/night",
    },
    {
      id: "4",
      name: "Modern Loft in the City Center",
      type: "Loft",
      location: "City Center, CA",
      rating: 4.7,
      description: "Experience urban living at its finest in this modern loft.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price: "$350/night",
    },
  ];

  const stayData = stays.find((stay) => stay.id === stayId);
  console.log(stayData)

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{stayData.name}</h1>
        <p className="pt-2">Type: {stayData.type}</p>
        <p className="pt-2">Location: {stayData.location}</p>
        <p className="pt-2">Rating: {stayData.rating}</p>
        <p className="pt-2">{stayData.description}</p>
        <h3>Amenities</h3>
        <ul>
          <li>{stayData.amenities[0]}</li>
          <li>{stayData.amenities[1]}</li>
          <li>{stayData.amenities[2]}</li>
        </ul>
      
        <p>Price: {stayData.price}</p>
      </main>
      <Footer />
    </>
  );
};

export default StayDetails;