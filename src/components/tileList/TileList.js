import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = (props) => {

  return (
    <div className="tile-list">
      {
        props.contacts.map((item) => {
          
          return (
            
            <Tile
            
              tile={item}
            />
          )

        })
      }

    </div>
  );
};
