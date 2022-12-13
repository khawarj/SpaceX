import { useState } from "react";
import useLaunchPast from "../../hooks/useLaunchePast";
import LaunchSection from "../../components/LaunchSection";
import FilterSection from "../../components/FilterSection";
import ListHeader from "../../components/ListHeader";
import ButtonWrapper from "../../components/common/ButtonWrapper";
import Modal from "../../components/common/Modal";
import MissionComparision from "../../components/MissionComparision";
import Skeleton from "../../components/LaunchSection/skeleton";

const recordPerPage = 10;

const intialSelectedState = Array(recordPerPage).fill(false);
const getInitState = () => [...intialSelectedState]

const LaunchPage = () => {
  //State
  const [searchMission, setSearchMission] = useState("");
  const [searchRocket, setSearchRocket] = useState("");
  const [offset, setOffSet] = useState(0);
  const [missions, setMissions] = useState<any>([]);
  const [modal, setModal] = useState<boolean>(false);
  //Ideally each mission should have a selected flag which can be added in the react-query pipeline and then toggle that
  const [selected, setSelected] = useState(getInitState());
  //Hooks
  const { data, isLoading } = useLaunchPast(
    recordPerPage,
    offset,
    searchMission,
    searchRocket
  );

  // Handlers
  const addForComparision = (mission: any, flag: boolean, idx: number) => {
    if (flag && missions.length === 2) {
      alert("Can compare only 2 missions");
    } else {
      if (flag) {
        //addtion
        setSelected((_prevSelected) => {
          _prevSelected[idx] = true
          return [... _prevSelected]
        });
        setMissions((_prev: any[]) => [..._prev, mission]);
      } else {
        //removal
        setSelected((_prevSelected) => {
          _prevSelected[idx] = false
          return [... _prevSelected]
        });
        setMissions((_prev: any[]) => [
          ..._prev.filter((i) => i.mission_name !== mission.mission_name),
        ]);
      }
    }
  };

  const onSubmitHandler = (mission = "", rocket = "") => {
    setSearchMission(mission);
    setSearchRocket(rocket);
    setMissions([]);
    setSelected(getInitState())
  };

  const onCompareHandler = () => {
    if (missions.length === 2) {
      setModal(true);
    }
  };

  const clearAll = () => {
    setSearchMission("");
    setSearchRocket("");
    setMissions([]);
    // setOffSet(0);
    setSelected(getInitState());
  };

  if (isLoading) {
    return (
      <div className="flex flex-col w-full">
        <FilterSection
          onCompare={onCompareHandler}
          compareCount={missions.length}
          onSubmitHandler={onSubmitHandler}
          isLoading={isLoading}
          onResetHandler={clearAll}
          onMissionClear={() => {
            console.log("clearing")
            clearAll()
          }}
          onRocketClear={() => {
            clearAll()
          }}
        />
        <div className="flex w-full min-h-full flex-col bg-white border-solid border-x-2 border-slate-100">
          <ListHeader />
          <Skeleton />
        </div>
      </div>
    );
  }
  if (data) {
    return (
      <div className="flex flex-col w-full">
        <FilterSection
          onCompare={onCompareHandler}
          compareCount={missions.length}
          onSubmitHandler={onSubmitHandler}
          isLoading={isLoading}
          onResetHandler={clearAll}
          missionText={searchMission}
          rocketText={searchRocket}
          onMissionClear={() => {
            clearAll()
          }}
          onRocketClear={() => {
            clearAll()
          }}
        />
        <div className="flex w-full min-h-full flex-col bg-white border-solid border-x-2 border-slate-100">
          <ListHeader />
          {data?.launchesPast.map((x: any, idx: number) => (
            <LaunchSection
              canAdd={missions.length < 2}
              onSelect={(mission, flag) =>
                addForComparision(mission, flag, idx)
              }
              key={idx}
              launch={x}
              selected={selected[idx]}
            />
          ))}
        </div>
        <div className="w-full flex px-10 pb-9 justify-between static bottom-0">
          <ButtonWrapper
            onClick={(e) => {
              e.preventDefault();
              setOffSet((prev) => prev - 1);
            }}
            isLoading={isLoading}
            disabled={offset === 0}
          >
            Back
          </ButtonWrapper>
          <ButtonWrapper
            onClick={(e) => {
              e.preventDefault();
              setOffSet((prev) => prev + 1);
            }}
            isLoading={isLoading}
            disabled={data.launchesPast.length < 10}
          >
            Next
          </ButtonWrapper>
        </div>
        <Modal
          open={modal}
          header={<span> Mission Comparision </span>}
          onModalClose={() => setModal(false)}
        >
          <MissionComparision missions={missions}></MissionComparision>
        </Modal>
      </div>
    );
  }
  //TODO: Handle Error States
  return null;
};

export default LaunchPage;
