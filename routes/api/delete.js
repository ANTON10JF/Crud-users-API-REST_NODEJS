const router = require('express').Router();
const { deleteById } = require('../../models/delete.model');

router.delete('/:viajeId', (req, res) => {
    deleteById(req.params.viajeId)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

module.exports = router;