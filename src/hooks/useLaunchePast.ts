import { useQuery, useInfiniteQuery } from "react-query";
import { getPastLaunches } from "../api/launchPast";


const usePastLaunches = (limit: number, offset: number,  missonName = "", rocketName = "") =>{
  return useQuery(["past-launches", limit, offset, missonName, rocketName], async () => {
    const data = await getPastLaunches(limit, offset, missonName, rocketName);
    return data;
  });
}

export default usePastLaunches;
