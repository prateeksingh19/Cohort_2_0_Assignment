export default function BusinessCard(props) {
  const interest = props.interests;
  const interestElements = interest.map((interests, index) => (
    <li key={index}>{interests}</li>
  ));

  return (
    <div className="cardContainer">
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
      <p className="interests">Interests</p>
      <ul>{interestElements}</ul>
      <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">
        <button>LinkedIn</button>
      </a>
      <a href={props.twitter} target="_blank" rel="noopener noreferrer">
        <button>Twitter</button>
      </a>
      <a href={props.otherLinks} target="_blank" rel="noopener noreferrer">
        <button>Other</button>
      </a>
    </div>
  );
}
