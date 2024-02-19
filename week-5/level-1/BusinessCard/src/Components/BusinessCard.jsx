export default function BusinessCard(props) {
  const interest = props.interests;
  const interestElements = interest.map((interests, index) => (
    <li key={index}>{interests}</li>
  ));

  return (
    <>
      <div className="cardContainer">
        <div className="upperDiv">
          <div className="upperButtonDiv">
            <button className="upperButton">Edit</button>
            <button className="upperButton">Delete</button>
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
