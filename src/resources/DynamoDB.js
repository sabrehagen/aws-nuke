const list = async ({ client }) => {
    const { TableNames } = await client.listTables().promise();
    return TableNames;
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
