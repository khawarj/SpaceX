import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.REACT_APP_BASE_URL || "";
const query = gql`
  query GetLaunchesPast(
    $limit: Int!
    $offset: Int!
    $mission_name: String
    $rocket_name: String
  ) {
    launchesPast(
      limit: $limit
      offset: $offset
      find: { mission_name: $mission_name, rocket_name: $rocket_name }
    ) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        wikipedia
      }
      ships {
        name
        home_port
        image
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
          }
        }
        rocket_type
      }
      launch_success
      mission_id
    }
  }
`;

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
  const data = await graphQLClient.request(query, variables);
  return data;
};
