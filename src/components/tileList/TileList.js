import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = (props) => {

  return (
    <div>
      {
        props.contacts.map((item, i) => {

          return (
            <Tile
              className='tile-list'
              tile={item}
              key={i}
            />
          )

        })
      }

    </div>
  );
};
