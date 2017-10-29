# AWS Nuke

This was shaping up to be a really nice Node.js implementation of deleting all resources in an AWS account, but then I found [rebuy-de's aws-nuke](https://github.com/rebuy-de/aws-nuke).

Currently supports APIGateway, CloudFormation, CloudWatch, DynamoDB, Lambda, S3, SNS, and SQS. The EC2 directory was next on my list; it currently contains templates to implement.

Open sourced in the hope this will help somebody else who needs this for Node.js. PRs welcome.
