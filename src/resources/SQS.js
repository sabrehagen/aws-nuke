const list = async ({ client }) => {
    const QueueUrls = await client.listQueues().promise();
    return QueueUrls;
};

const remove = async ({ client, resource }) => {

    const deleteNatGateway = [];
    const deleteNetworkInterface = [];
    const deleteRouteTable = [];
    const deleteSubnet = [];
    const deleteSecurityGroup = [];

    await client.deleteQueue({
        QueueUrl: resource.TopicArn
    }).promise();
};

module.exports = {
    list,
    remove,
}
