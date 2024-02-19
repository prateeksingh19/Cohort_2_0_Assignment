import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BusinessCard from "./Components/BusinessCard";

function App() {
  const [businessCard, setBusinessCard] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/businessCard")
      .then((response) => {
        console.log(response.data.businessCards);
        setBusinessCard(response.data.businessCards);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const businessCardElement = businessCard.map((data) => (
    <BusinessCard
      title={data.title}
      description={data.description}
      interests={data.interest}
      linkedIn={data.linkedIn}
      twitter={data.twitter}
      otherLinks={data.other}
    />
  ));
  return <>{businessCardElement}</>;
}

export default App;
