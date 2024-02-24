import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataAtom, detailsAtom } from "./atom";
import GitHubCard from "./GitHubCard";

function App() {
  const [username, setUsername] = useState("");
  const [details, setDetails] = useRecoilState(detailsAtom);
  const [data, setData] = useRecoilState(dataAtom);
  function handleChange(e) {
    setUsername(e.target.value);
  }
  function showDetails() {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
    setData(true);
  }
  return (
    <div>
      <div className="inputDiv">
        <p>Github User Name: </p>
        <input
          type="text"
          placeholder="Enter your GitHub Username"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={showDetails}>Show Details</button>
      </div>
      <GitHubCard />
    </div>
  );
}

export default App;
