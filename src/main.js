'use strict';

const AWS = require("aws-sdk");

class ServerlessAwsConfigPlugin {
    constructor() {
        if(process.env.AWS_ENDPOINT_SSM){
            AWS.config.ssm = { endpoint: process.env.AWS_ENDPOINT_SSM };
        }
    }
}

module.exports = ServerlessAwsConfigPlugin;
