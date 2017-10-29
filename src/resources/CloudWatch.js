const list = async ({ client }) => {
    const { MetricAlarms } = await client.describeAlarms().promise();
    return MetricAlarms;
};

const remove = async ({ client, resource }) => {
    await client.deleteAlarms({
        AlarmNames: [
            resource.AlarmName
        ]
    }).promise();
};

module.exports = {
    list,
    remove,
}
