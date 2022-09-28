const { query } = require('express');
const database = require('../models');

class TurmaController {
    static async getTurmas(req, res) {
        try {
            const allTurmas = await database.Turmas.findAll();
            return res.status(200).json(allTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getTurmaById(req, res) {
        const { id } = req.params;
        try {
            const turma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body;
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novosDados = req.body;
        try {
            await database.Turmas.update(novosDados, {
                where: {
                    id: Number(id)
                }
            });
            const turmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async removeTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `turma com o id ${id} removida! `});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = TurmaController;