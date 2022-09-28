const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getPessoas);
router.get('/pessoas/:id', PessoaController.getPessoaById);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.removePessoa);
router.get('/matriculas/:id', PessoaController.getMatriculas);
router.get('/matricula/:id', PessoaController.getMatriculaById);
router.post('/matricula', PessoaController.criaMatricula);
router.put('/matricula/:id', PessoaController.atualizaMatricula);
router.delete('/matricula/:id', PessoaController.removeMatricula);

module.exports = router;