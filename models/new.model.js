const { executeQuery, executeQueryOne } = require('../helpers/utils')

const create = ({ titulo, texto_publicacion, imagen, categoria, fecha_publicacion }) => {
    return executeQuery('insert into viajes (titulo, texto_publicacion, imagen, categoria, fecha_publicacion) values(?, ?, ?, ?, ?)', [titulo, texto_publicacion, imagen, categoria, fecha_publicacion]);
}

const getById = (pViajeId) => {
    return executeQueryOne('select * from viajes where id = ?', [pViajeId]);
}



module.exports = {
    create, getById
}
