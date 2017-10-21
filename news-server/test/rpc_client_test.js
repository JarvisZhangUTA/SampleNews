var client = require('../rcp_client/rpc_client');

client.add(1, 1, function(response) {
    console.assert(response == 2);
});