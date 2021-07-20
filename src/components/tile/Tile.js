import React from "react";

export const Tile = (props) => {
  const tile = props.tile;
  let lineNumber = 0;
  return (
    <div className="tile-container">
      {
        Object.entries(tile).map(([key, value]) => {
          // Pretty straightforward - use key for the key and value for the value.
          // Just to clarify: unlike object destructuring, the parameter names don't matter here.
          lineNumber ++;
          return (<p className={lineNumber === 1 ? 'tile-title' : 'tile'}>{key}: {value}</p>)
          
      })
      }
      
    </div>
  );
};
