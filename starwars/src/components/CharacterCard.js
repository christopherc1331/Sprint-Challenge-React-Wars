import React from "react";
const CharacterCard = props => {
  return (
    <div>
      <div className="card-container">
        <p>{props}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
