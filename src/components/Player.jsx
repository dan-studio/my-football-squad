import React from 'react';

const Player = ({ list, remove }) => {
  const { id, firstname, lastname, position, club, nationality } = list;
  return (
    <div className="player">
      <div className={position}>
        <h4>{position}</h4>
      </div>
      <h4>
        Name: {firstname.toUpperCase()} {lastname.toUpperCase()}
      </h4>
      <h4>Club: {club.toUpperCase()}</h4>
      <h4>Nationality: {nationality}</h4>
      <hr></hr>
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

export default Player;