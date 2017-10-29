const deleteBucket = require('delete-s3-bucket');

const list = async ({ client }) => {
    const { Buckets } = await client.listBuckets().promise();
    return Buckets;
};

const remove = async ({ client, resource }) => {
    await deleteBucket(resource.Name).promise();
};

module.exports = {
    list,
    remove,
}
