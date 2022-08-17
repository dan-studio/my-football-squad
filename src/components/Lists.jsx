import React from 'react';
import Player from './Player';

const Lists = ({ lists, remove }) => {
  return (
    <div className="field">
      <h2>Your Squad is
      </h2>
      <h1>
        {lists.filter((list) => list.position === "DF").length}-
        {lists.filter((list) => list.position === "MF").length}-
        {lists.filter((list) => list.position === "FW").length}
      </h1>
      <h2>Formation
      </h2>
      {/* <h2 className="forward">Forward</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "FW")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
      {/* <h2 className="midfielder">Midfilder</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "MF")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
      {/* <h2 className="defender">Defender</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "DF")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
      {/* <h2 className="goalkeeper">GoalKeeper</h2> */}
      <div className="position">
        {lists
          .filter((list) => list.position === "GK")
          .map((list, idx) => (
            <Player list={list} key={idx} remove={remove} />
          ))}
      </div>
    </div>
  );
};

export default Lists;