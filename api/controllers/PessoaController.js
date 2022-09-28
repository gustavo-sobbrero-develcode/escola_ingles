const { query } = require('express');
const database = require('../models');

class PessoaController {
    static async getPessoas(req, res) {
        try {
            const allPessoas = await database.Pessoas.findAll();
            return res.status(200).json(allPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPessoaById(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params;
        const novosDados = req.body;
        try {
            await database.Pessoas.update(novosDados, {
                where: {
                    id: Number(id)
                }
            });
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async removePessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `pessoa com o id ${id} removida! ` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getMatriculas(req, res) {
        const { id } = req.params;
        try {
            const matriculas = await database.Matriculas.findAll({
                where: {
                    estudante_id: Number(id)
                }
            });
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getMatriculaById(req, res) {
        const { id } = req.params;
        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req, res) {
        const novaMatricula = req.body;
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaMatricula(req, res) {
        const { id } = req.params;
        const novosDados = req.body;
        try {
            await database.Matriculas.update(novosDados, {
                where: {
                    id: Number(id)
                }
            });
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async removeMatricula(req, res) {
        const { id } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `matrícula com o id ${id} removida! ` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = PessoaController;