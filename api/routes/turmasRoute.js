const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.getTurmas);
router.get('/turmas/:id', TurmaController.getTurmaById);
router.post('/turmas', TurmaController.criaTurma);
router.put('/turmas/:id', TurmaController.atualizaTurma);
router.delete('/turmas/:id', TurmaController.removeTurma);

module.exports = router;