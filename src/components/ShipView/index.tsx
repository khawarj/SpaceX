import { Maybe } from "graphql/jsutils/Maybe";
import React from "react";
import { Ship } from "../../gql/graphql";

interface IShipView {
  ships: Maybe<Maybe<Ship>[]>;
}
const ShipView = ({ ships }: IShipView) => {
  if (ships) {
    return (
      <>
        {ships.map((ship: Maybe<Ship>, idx: number) => {
          if (!ship) {
            return null;
          }
          return (
            <div key={idx} className="flex w-60 h-80 items-center">
              <div className="group flex flex-col w-60 h-70 m-2 p-2 border-solid border border-slate-500 rounded-b-lg shadow-xl hover:h-72 transform transition duration-500 hover:scale-105">
                <div className="flex h-40 group-hover:h-50">
                  <img
                    className="flex w-full h-40 group-hover:h-50 object-fill"
                    src={ship.image || ""}
                    alt={ship.name || ""}
                  />
                </div>

                <div className="flex flex-col py-3">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {ship.name}
                  </h5>
                  <span className="py-1 text-xs">{ship.home_port}</span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
};

export default ShipView;
