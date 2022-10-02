const router = require('express').Router();
const { update } = require('../../models/update.model');
const { getById } = require('../../models/new.model');

router.put('/:viajeId', async (req, res) => {
    try {
        const result = await update(req.params.viajeId, req.body)

        // Recuperamos el viaje modificado y lo devolvemos en la respuesta
        const viajeUpdated = await getById(req.params.viajeId);

        res.json(viajeUpdated);
    } catch (err) {
        console.log(err);
        res.json({ message: err.message, filename: err.fileName, linenumber: err.lineNumber });
    }
});


module.exports = router;