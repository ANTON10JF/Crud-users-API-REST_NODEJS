const router = require('express').Router();
const { create, getById } = require('../../models/new.model');

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        // Antes de responder, recupero el nuevo viaje creado y respondo con el id del nuevo viaje. 
        // Pasamos un Id de viaje nos devuelve el viaje.
        const newViaje = await getById(result.insertId);

        res.json(newViaje);


    } catch (error) {
        res.json({ error: error.message });
    }
});


module.exports = router;