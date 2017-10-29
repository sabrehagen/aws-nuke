const list = async ({ client }) => {
    const { items } = await client.getRestApis().promise();
    return items;
};

const remove = async ({ client, resource }) => {
    await client.deleteRestApi({
        restApiId: resource.id
    }).promise();
};

module.exports = {
    list,
    remove,
}
