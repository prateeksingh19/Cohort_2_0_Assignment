import axios from "axios";

export default function BusinessCard(props) {
  const id = props.id;
  const interest = props.interests;
  const interestElements = interest.map((interests, index) => (
    <li key={index}>{interests}</li>
  ));
  function deleteButton() {
    axios
      .delete("http://localhost:3000/businessCard/delete", {
        data: {
          id: id,
        },
      })
      .then((response) => {
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting:", error);
      });
  }

  return (
    <>
      <div className="cardContainer">
        <div className="upperDiv">
          <div className="upperButtonDiv">
            <button className="upperButton">Edit</button>
            <button className="upperButton" onClick={deleteButton}>
              Delete
            </button>
          </div>
          <div className="dataDiv">
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <p className="interests">Interests</p>
            <ul>{interestElements}</ul>
          </div>
        </div>
        <div className="lowerButtonDiv">
          <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">
            <button className="lowerButton">LinkedIn</button>
          </a>
          <a href={props.twitter} target="_blank" rel="noopener noreferrer">
            <button className="lowerButton">Twitter</button>
          </a>
          <a href={props.otherLinks} target="_blank" rel="noopener noreferrer">
            <button className="lowerButton">Other</button>
          </a>
        </div>
      </div>
    </>
  );
}
