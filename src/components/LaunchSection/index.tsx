import React, { useState, useEffect } from "react";
import {
  FaRocket,
  FaArrowDown,
  FaArrowCircleUp,
  FaWikipediaW,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { Launch, LaunchRocket, Maybe } from "../../gql/graphql";
import Modal from "../common/Modal";
import ShipView from "../ShipView";
import TimeLine from "../TimeLine";

interface ILaunchSection {
  launch: Maybe<Launch>;
  onSelect: (mission: Maybe<Launch>, flag: boolean) => void;
  canAdd: boolean;
  selected?: boolean;
}

const LaunchSection = ({
  launch,
  onSelect,
  canAdd,
  selected = false,
}: ILaunchSection) => {
  const [shipToggle, setShipToggle] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [timeLineData, setTimeLineData] = useState<
    LaunchRocket | null | undefined
  >(null);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(selected);
  }, [selected]);

  const toggleShipView = () => {
    setShipToggle((toggle) => !toggle);
  };

  const openRocketTimeline = (e: React.MouseEvent<SVGAElement>) => {
    e.preventDefault();
    setModal(true);
    setTimeLineData(launch?.rocket);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canAdd) {
      onSelect(launch, !checked);
      setChecked(!checked);
    } else {
      if (!checked) {
        e.preventDefault();
        alert("Can only compare 2");
      } else {
        onSelect(launch, !checked);
        setChecked(!checked);
      }
    }
  };

  if (launch) {
    return (
      <div
        className={`flex flex-col ${
          shipToggle ? "h-auto" : "h-250 overflow-hidden"
        } transition-all `}
      >
        <div
          className={`group relative flex w-full ${
            shipToggle ? " h-full" : "min-h-full"
          }  my-2 p-4 justify-between items-center border-solid border-y-2 rounded-lg border-slate-200 hover:bg-slate-100  hover:shadow-lg bg-slate-300 transition-all`}
        >
          <div className="flex-1 flex items-center justify-center mb-4 animate-pulse">
            <input
              type="checkbox"
              checked={checked}
              onChange={onChangeHandler}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="flex-1  text-center">{launch.mission_name}</div>
          <div className="flex-1 flex-wrap text-center">
            {launch?.launch_site?.site_name_long}
          </div>
          <FaRocket
            className="flex-1 cursor-pointer text-orange-600 hover:text-orange-500"
            onClick={openRocketTimeline}
          />
          <div className="flex-1 text-center">
            {new Date(launch.launch_date_local).toLocaleDateString("en-US")}
          </div>

          <div className="flex-1 text-center">
            {launch.launch_success ? (
              <FaCheckCircle className="w-full text-green-500" />
            ) : (
              <FaExclamationCircle className="w-full text-red-600" />
            )}
          </div>

          <div className="flex-1 text-center">
            {launch.links?.wikipedia && (
              <a
                href={launch.links.wikipedia}
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FaWikipediaW className="w-full text-blue-800" />
              </a>
            )}
          </div>

          {/* show arrow only on bottom area */}
          {!shipToggle && launch?.ships && launch.ships?.length > 0 && (
            <FaArrowDown
              onClick={toggleShipView}
              className="absolute bottom-1 left-1/2 text-gray-500 cursor-pointer animate-bounce-fast transition-all duration-400"
            />
          )}
        </div>

        <div className="flex w-full  justify-center relative group">
          <ShipView ships={launch.ships} />
          <FaArrowCircleUp
            onClick={toggleShipView}
            className="absolute -bottom-2 left-1/2 text-gray-500 cursor-pointer animate-bounce-fast transition-all duration-400"
          />
        </div>
        <Modal
          open={modal}
          onModalClose={() => setModal(!modal)}
          header={<span className="">Rocket Details</span>}
        >
          <TimeLine timeLineData={timeLineData} />
        </Modal>
      </div>
    );
  } else {
    return null;
  }
};

export default LaunchSection;
