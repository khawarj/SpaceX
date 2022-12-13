import { useQuery } from "react-query";
import { getPastLaunches } from "../api/launchPast";
import { GetLaunchesPastQuery } from "../gql/graphql";


const usePastLaunches = (limit: number, offset: number,  missonName = "", rocketName = "") =>{
  return useQuery<GetLaunchesPastQuery>(["past-launches", limit, offset, missonName, rocketName], async () => {
    const data = await getPastLaunches(limit, offset, missonName, rocketName);
    return data;
  });
}

export default usePastLaunches;
