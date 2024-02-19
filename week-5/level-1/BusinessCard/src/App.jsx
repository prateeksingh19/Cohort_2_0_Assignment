import { useState } from "react";
import "./App.css";
import BusinessCard from "./Components/BusinessCard";

function App() {
  return (
    <>
      <BusinessCard
        title="Prateek"
        description="A member in the 100xDevs Cohort 2.0"
        interests={["Ionic", "Open Source", "App Dev"]}
        linkedIn="https://www.linkedin.com/feed/"
        twitter="https://twitter.com/home"
        otherLinks="https://github.com/"
      />
    </>
  );
}

export default App;
