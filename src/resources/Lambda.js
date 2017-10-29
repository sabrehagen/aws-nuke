const list = async ({ client }) => {
    const { Functions } = await client.listFunctions().promise();
    return Functions;
};

const remove = async ({ client, resource }) => {
    await client.deleteFunction({
        FunctionName: resource.FunctionName
    }).promise();
};

module.exports = {
    list,
    remove,
}
