const list = async ({ client }) => {
    const { Topics } = await client.listTopics().promise();
    return Topics;
};

const remove = async ({ client, resource }) => {
    await client.deleteTopic({
        TopicArn: resource.TopicArn
    }).promise();
};

module.exports = {
    list,
    remove,
}
