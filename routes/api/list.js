const router = require('express').Router();
const { getAll } = require('../../models/list.model');

router.get('/', (req, res) => {
    getAll()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json({ error: err.message });
        });
})

module.exports = router;