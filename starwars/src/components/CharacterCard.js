import React from "react";
import styled from "styled-components";
const CharacterCard = props => {
  const CardProfile = styled.div`
    width: 30%;
    margin: 10px;
    padding: 5px;
    background-color: papayawhip;
    text-align: center;
    font-size 1rem;
  `;

  return (
    <CardProfile>
      <p>{`Name: ${props.item.name}`}</p>
      <p>{`Height: ${props.item.height}`}</p>
      <p>{`Mass: ${props.item.mass}`}</p>
      <p>{`Hair Color: ${props.item.hair_color}`}</p>
    </CardProfile>
  );
};

export default CharacterCard;
