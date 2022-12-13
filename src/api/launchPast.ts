import { GraphQLClient } from "graphql-request";
import { GET_PAST_LAUNCHES } from "../graphql/queries.graphql";

const endpoint = process.env.REACT_APP_BASE_URL || "";

const graphQLClient = new GraphQLClient(endpoint);

export const getPastLaunches = async (
  limit: number,
  offset: number,
  missonName = "",
  rocketName = ""
) => {
  const variables = {
    limit: limit,
    offset: offset,
    mission_name: missonName,
    rocket_name: rocketName,
  };
  const data = await graphQLClient.request(GET_PAST_LAUNCHES, variables);
  return data;
};
