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
        setBusinessCard(response.data.businessCards);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const businessCardElement = businessCard.map((data, index) => (
    <BusinessCard
      key={index}
      id={data._id}
      title={data.title}
      description={data.description}
      interests={data.interest}
      linkedIn={data.linkedIn}
      twitter={data.twitter}
      otherLinks={data.other}
    />
  ));
  return <div className="mainDiv">{businessCardElement}</div>;
}

export default App;
