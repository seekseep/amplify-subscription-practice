/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createFile = /* GraphQL */ `mutation CreateFile(
  $input: CreateFileInput!
  $condition: ModelFileConditionInput
) {
  createFile(input: $input, condition: $condition) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFileMutationVariables,
  APITypes.CreateFileMutation
>;
export const updateFile = /* GraphQL */ `mutation UpdateFile(
  $input: UpdateFileInput!
  $condition: ModelFileConditionInput
) {
  updateFile(input: $input, condition: $condition) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFileMutationVariables,
  APITypes.UpdateFileMutation
>;
export const deleteFile = /* GraphQL */ `mutation DeleteFile(
  $input: DeleteFileInput!
  $condition: ModelFileConditionInput
) {
  deleteFile(input: $input, condition: $condition) {
    id
    group
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFileMutationVariables,
  APITypes.DeleteFileMutation
>;
