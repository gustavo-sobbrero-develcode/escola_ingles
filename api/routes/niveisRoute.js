const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.getNiveis);
router.get('/niveis/:id', NivelController.getNivelById);
router.post('/niveis', NivelController.criaNivel);
router.put('/niveis/:id', NivelController.atualizaNivel);
router.delete('/niveis/:id', NivelController.removeNivel);

module.exports = router;