import { useRef, useEffect } from "react";
import ButtonWrapper from "../common/ButtonWrapper";
import SearchBox from "../SearchBox";

interface IFilterSection {
  onSubmitHandler: (
    mission: string | undefined,
    rocket: string | undefined
  ) => void;
  isLoading: boolean;
  compareCount: number;
  onCompare: () => void;
  onResetHandler: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  missionText?: string;
  rocketText?: string;
  onMissionClear: () => void;
  onRocketClear: () => void;
}

const FilterSection = ({
  onSubmitHandler,
  isLoading,
  compareCount,
  onCompare,
  onResetHandler,
  missionText = "",
  rocketText = "",
  onMissionClear,
  onRocketClear,

}: IFilterSection) => {
  const missionRef = useRef<HTMLInputElement | null>(null);
  const rocketRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if(missionRef && missionRef.current)
      missionRef.current.value = missionText;
  }, [missionText])

  
  useEffect(() => {
    if(rocketRef && rocketRef.current)
      rocketRef.current.value = rocketText;
  }, [rocketText])
  

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmitHandler(missionRef.current?.value, rocketRef.current?.value);
  };

  return (
    <div className="flex w-full p-4  justify-between  static top-0 bg-gray-900 z-20">
      <div className="flex flex-1">
        <ButtonWrapper
          onClick={(e) => {
            e.preventDefault();
            onCompare();
          }}
          className="bg-green-600 hover:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-800"
          isLoading={false}
        >
          {compareCount > 0 ? `Compare ${compareCount}+` : "Add to Compare"}
        </ButtonWrapper>
      </div>

      <div className="flex justify-end">
        <a
          className="flex self-center text-center text-blue-900 underline cursor-pointer"
          onClick={onResetHandler}
          href="#"
        >
          Clear all
        </a>
        <SearchBox onClear={onMissionClear} searchRef={missionRef} placeholder="Search mission" />
        <SearchBox onClear={onRocketClear} searchRef={rocketRef} placeholder="Search rocket" />
        <ButtonWrapper onClick={onSubmit} isLoading={isLoading}>
          Search
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default FilterSection;
