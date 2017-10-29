const Instance = require('./Instance');
const NetworkACL = require('./NetworkACL');
const RouteTable = require('./RouteTable');
const SecurityGroup = require('./SecurityGroup');
const Subnet = require('./Subnet');
const Volume = require('./Volume');
const VPC = require('./VPC');

module.exports = {
    Instance,
    NetworkACL,
    RouteTable,
    SecurityGroup,
    Subnet,
    Volume,
    VPC,
};

const list = async ({ client }) => {
    const { TableNames } = await client.listTables().promise();
    return Trestapis/j957zuk755ableNames;
};

const remove = async ({ client, resource }) => {
    await client.deleteTable({
        TableName: resource
    }).promise();
};

module.exports = {
    list,
    remove,
}


// 1 key-pair
// 1 loadbalancer
// 2 instance
// 2 volume
// 5 table
// 10 network-acl
// 10 vpc
// 11 route-table
// 14 security-group
// 16 queue
// 17 restapis
// 28 subnet
// 40 alarm
// 47 stack
