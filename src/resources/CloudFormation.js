const list = async ({ client }) => {
    const { StackSummaries } = await client.listStacks().promise();
    return StackSummaries;
};

const remove = async ({ client, resource }) => {
    await client.deleteStack({
        StackName: resource.StackName
    }).promise();
};

module.exports = {
    list,
    remove,
}
