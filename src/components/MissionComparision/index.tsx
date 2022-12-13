import React, { useMemo } from "react";
import { flatten } from "flatten-anything";

interface IMissionComparision {
  missions: any[];
}

type record = { [key: string]: any[] };

const sanatizeKey = (key: string) =>
  key.split(".").pop()?.replace(/_/g, " ").toUpperCase();


const sanatizeValue = (val: any) => {
  switch (typeof val) {
    case "string":
      //TODO: check for date with moment and format
      return val;
      break;
    case "boolean":
      return val ? "True" : "False";
      break;
    default:
      return val;
  }
};


const MissionComparision = ({ missions }: IMissionComparision) => {
  const [mission1, mission2] = missions;
  const flat_mission1 = useMemo(() => flatten(mission1), [mission1]) as record;
  const flat_mission2 = useMemo(() => flatten(mission2), [mission2]) as record;
  const keys = useMemo(() => Object.keys(flat_mission1), [flat_mission1]);
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Attribute
            </th>
            <th scope="col" className="py-3 px-6">
              Mission 1
            </th>
            <th scope="col" className="py-3 px-6">
              Mission 2
            </th>
          </tr>
        </thead>
        <tbody>
          {keys.map((key: string, idx: number) => {
            const currentVal = flat_mission1[key] as any;
            if (Array.isArray(currentVal)) {
              return null;
            } else {
              return (
                <tr key={idx}>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {sanatizeKey(key)}
                  </th>
                  <td className="py-4 px-6">
                    {sanatizeValue(flat_mission1[key])}
                  </td>
                  <td className="py-4 px-6">
                    {sanatizeValue(flat_mission2[key])}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MissionComparision;
