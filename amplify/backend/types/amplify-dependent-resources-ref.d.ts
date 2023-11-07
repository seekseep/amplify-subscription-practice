export type AmplifyDependentResourcesAttributes = {
  "api": {
    "AmpSubPraApi": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "AmpSubPraAuth": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "AmpSubPraAuthPreTokenGeneration": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}