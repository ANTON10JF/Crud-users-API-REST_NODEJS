const { executeQuery } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from viajes');

};

module.exports = {
    getAll
}