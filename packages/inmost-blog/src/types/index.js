const fs = require('fs');
const path = require('path');

module.exports = {
    //interfaces: fs.readFileSync(path.join(__dirname, 'interfaces.gql'), 'utf8'),
    types: fs.readFileSync(path.join(__dirname, 'types.gql'), 'utf8')
};