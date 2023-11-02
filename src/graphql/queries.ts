/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getFile = /* GraphQL */ `query GetFile($id: ID!) {
  getFile(id: $id) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFileQueryVariables, APITypes.GetFileQuery>;
export const listFiles = /* GraphQL */ `query ListFiles(
  $filter: ModelFileFilterInput
  $limit: Int
  $nextToken: String
) {
  listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      group
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFilesQueryVariables, APITypes.ListFilesQuery>;
export const listTodosByGroup = /* GraphQL */ `query ListTodosByGroup(
  $group: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodosByGroup(
    group: $group
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodosByGroupQueryVariables,
  APITypes.ListTodosByGroupQuery
>;
export const listFilesByGroup = /* GraphQL */ `query ListFilesByGroup(
  $group: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFileFilterInput
  $limit: Int
  $nextToken: String
) {
  listFilesByGroup(
    group: $group
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFilesByGroupQueryVariables,
  APITypes.ListFilesByGroupQuery
>;
