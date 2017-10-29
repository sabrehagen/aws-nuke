const APIGateway = require('./APIGateway');
const CloudFormation = require('./CloudFormation');
const CloudWatch = require('./CloudWatch');
const DynamoDB = require('./DynamoDB');
const Lambda = require('./Lambda');
const S3 = require('./S3');
const SNS = require('./SNS');
const SQS = require('./SQS');

module.exports = {
    APIGateway,
    CloudFormation,
    CloudWatch,
    DynamoDB,
    Lambda,
    S3,
    SNS,
    SQS,
};
