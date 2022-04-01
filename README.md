# Serverless plugin for AWS Endpoint configuration via ENV variables

Sometimes it's useful whilst developing applications using the [Serverless framework](https://serverless.com) to be able to use local AWS resources instead of always accessing a real AWS account.

It's not currently possible to configure resources using the `serverless.yml` file against local AWS resources because it gives no chance to configure the AWS Endpoints that it'll use the AWS SDK to configure. Leaving not many options on how to develop in a truly local fashion.

This plugin will use the global `AWS.config` object to set endpoints for services based from environment variables. 

## Usage
Set into the environment variables one of the endpoint strings it expects. It should also work if these values are put into the `.env` file as well

## Supported Environment Variables
These map exactly onto the `AWS.config.*` variables that you will find in the document [AWS.config SDK page](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html). This simply maps services that were necessary for building dockerised projects locally. It's not an exhaustive list.

```
AWS_ENDPOINT_SSM
AWS_ENDPOINT_COGNITO_IDENTITY
AWS_ENDPOINT_COGNITO_IDP
AWS_ENDPOINT_S3
AWS_ENDPOINT_DYNAMODB
```

Make a pull request if a service is not part of this list.
