const Bluebird = require('bluebird');
const AWS = require('aws-sdk');
const { inspect } = require('util');

const Resources = require('./resources');
const regions = require('./regions');

const resourceTypes = Object.keys(Resources);

const regions = ['us-east-1'];
// const regions = ['ap-southeast-2'];

// for each type of resource
Bluebird.map([resourceTypes[7]], async (resourceType) => {
console.log({ resourceType })
    // in each region
    await Bluebird.map(regions, async (region) => {

        // create a client to handle the resources
        const client = new AWS[resourceType]({ region });
        const { list, remove } = Resources[resourceType];

        // list the resources in the region
        const resources = await list({ client });
console.log({ resources })
        // delete the resources
        await Bluebird.map(resources, async (resource) => {
            try {
                await remove({ client, resource });
            } catch (e) {
                console.log('Got error when removing resource!');
                console.log(inspect({ resourceType, resource, e }, { depth: 8 }));
            }
        });
    });
});
