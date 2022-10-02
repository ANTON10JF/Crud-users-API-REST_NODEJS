const { executeQuery } = require('../helpers/utils');

const update = (pViajeId, { titulo, texto_publicacion, imagen, categoria, fecha_publicacion }) => {
    return executeQuery('update viajes set titulo = ?, texto_publicacion = ?, imagen = ?, categoria = ?, fecha_publicacion = ? where id = ?', [titulo, texto_publicacion, imagen, categoria, fecha_publicacion, pViajeId]);
}

module.exports = {
    update
}