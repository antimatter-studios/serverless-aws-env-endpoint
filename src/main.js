'use strict';

const AWS = require("aws-sdk");

class ServerlessAwsConfigPlugin {
    constructor() {
        if(process.env.AWS_ENDPOINT_SSM){
            AWS.config.ssm = { 
                endpoint: process.env.AWS_ENDPOINT_SSM 
            };
        }
        
        if(process.env.AWS_ENDPOINT_COGNITOIDENTITY){
            AWS.config.cognitoidentity = { 
                endpoint: process.env.AWS_ENDPOINT_COGNITOIDENTITY 
            };
        }

        if(process.env.AWS_ENDPOINT_COGNITOIDENTITYSERVICEPROVIDER){
            AWS.config.cognitoidentityserviceprovider = { 
                endpoint: process.env.AWS_ENDPOINTCOGNITOIDENTITYSERVICEPROVIDER 
            };
        }

        if(process.env.AWS_ENDPOINT_S3){
            AWS.config.s3 = { 
                endpoint: process.env.AWS_ENDPOINT_S3 
            };
        }

        if(process.env.AWS_ENDPOINT_DYNAMODB){
            AWS.config.dynamodb = { 
                endpoint: process.env.AWS_ENDPOINT_DYNAMODB 
            };
        }
    }
}

module.exports = ServerlessAwsConfigPlugin;
