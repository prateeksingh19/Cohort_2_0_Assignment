import { useState } from "react";
import "./App.css";
import BusinessCard from "./Components/BusinessCard";

function App() {
  return (
    <>
      <BusinessCard
        title="Title"
        description="description"
        interests={["Cricket", "Football"]}
        linkedIn="https://www.linkedin.com/feed/"
        twitter="https://twitter.com/home"
        otherLinks="https://github.com/"
      />
    </>
  );
}

export default App;
