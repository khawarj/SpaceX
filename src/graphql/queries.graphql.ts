import { gql } from "graphql-request";

export const GET_PAST_LAUNCHES = gql`
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
