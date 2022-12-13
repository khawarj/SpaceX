/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetLaunchesPast(\n    $limit: Int!\n    $offset: Int!\n    $mission_name: String\n    $rocket_name: String\n  ) {\n    launchesPast(\n      limit: $limit\n      offset: $offset\n      find: { mission_name: $mission_name, rocket_name: $rocket_name }\n    ) {\n      mission_name\n      launch_date_local\n      launch_site {\n        site_name_long\n      }\n      links {\n        wikipedia\n      }\n      ships {\n        name\n        home_port\n        image\n      }\n      rocket {\n        rocket_name\n        first_stage {\n          cores {\n            flight\n            core {\n              reuse_count\n              status\n            }\n          }\n        }\n        second_stage {\n          payloads {\n            payload_type\n            payload_mass_kg\n          }\n        }\n        rocket_type\n      }\n      launch_success\n      mission_id\n    }\n  }\n": types.GetLaunchesPastDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLaunchesPast(\n    $limit: Int!\n    $offset: Int!\n    $mission_name: String\n    $rocket_name: String\n  ) {\n    launchesPast(\n      limit: $limit\n      offset: $offset\n      find: { mission_name: $mission_name, rocket_name: $rocket_name }\n    ) {\n      mission_name\n      launch_date_local\n      launch_site {\n        site_name_long\n      }\n      links {\n        wikipedia\n      }\n      ships {\n        name\n        home_port\n        image\n      }\n      rocket {\n        rocket_name\n        first_stage {\n          cores {\n            flight\n            core {\n              reuse_count\n              status\n            }\n          }\n        }\n        second_stage {\n          payloads {\n            payload_type\n            payload_mass_kg\n          }\n        }\n        rocket_type\n      }\n      launch_success\n      mission_id\n    }\n  }\n"): (typeof documents)["\n  query GetLaunchesPast(\n    $limit: Int!\n    $offset: Int!\n    $mission_name: String\n    $rocket_name: String\n  ) {\n    launchesPast(\n      limit: $limit\n      offset: $offset\n      find: { mission_name: $mission_name, rocket_name: $rocket_name }\n    ) {\n      mission_name\n      launch_date_local\n      launch_site {\n        site_name_long\n      }\n      links {\n        wikipedia\n      }\n      ships {\n        name\n        home_port\n        image\n      }\n      rocket {\n        rocket_name\n        first_stage {\n          cores {\n            flight\n            core {\n              reuse_count\n              status\n            }\n          }\n        }\n        second_stage {\n          payloads {\n            payload_type\n            payload_mass_kg\n          }\n        }\n        rocket_type\n      }\n      launch_success\n      mission_id\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;