const { executeQuery } = require('../helpers/utils');

const deleteById = (pViajeId) => {
    return executeQuery('delete from viajes where id = ?', [pViajeId]);
}

module.exports = {
    deleteById
}

