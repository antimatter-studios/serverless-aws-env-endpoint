'use strict';

const AWS = require("aws-sdk");

class ServerlessAwsConfigPlugin {
    constructor() {
        if(process.env.AWS_ENDPOINT_SSM){
            AWS.config.ssm = { 
                endpoint: process.env.AWS_ENDPOINT_SSM 
            };
        }
        
        if(process.env.AWS_ENDPOINT_COGNITO_IDENTITY){
            AWS.config.cognitoidentity = { 
                endpoint: process.env.AWS_ENDPOINT_COGNITO_IDENTITY 
            };
        }

        if(process.env.AWS_ENDPOINT_COGNITO_IDENTITY_SERVICE_PROVIDER){
            AWS.config.cognitoidentityserviceprovider = { 
                endpoint: process.env.AWS_ENDPOINT_COGNITO_IDENTITY_SERVICE_PROVIDER 
            };
        }
    }
}

module.exports = ServerlessAwsConfigPlugin;
