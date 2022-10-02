const router = require('express').Router();

// ENGANCHAMOS EL FICHERO API
const apiListRouter = require('./list');
const apiNewRouter = require('./new');
const apiUpdateRouter = require('./update');
const apiDeleteRouter = require('./delete');

// TODAS LAS PETICIONES INDEPENDIENTEMENTE DEL VERBO LA PASAMOS A SU FICHERO CORRESPONDIENTE
router.use('/list', apiListRouter);
router.use('/new', apiNewRouter);
router.use('/update', apiUpdateRouter);
router.use('/delete', apiDeleteRouter);

module.exports = router;