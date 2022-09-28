const { query } = require('express');
const database = require('../models');

class NivelController {
    static async getNiveis(req, res) {
        try {
            const allNiveis = await database.Niveis.findAll();
            return res.status(200).json(allNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getNivelById(req, res) {
        const { id } = req.params;
        try {
            const Nivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(Nivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body;
        try {
            const novoNivelCriada = await database.Niveis.create(novoNivel);
            return res.status(200).json(novoNivelCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novosDados = req.body;
        try {
            await database.Niveis.update(novosDados, {
                where: {
                    id: Number(id)
                }
            });
            const NivelAtualizado = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(NivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async removeNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `Nivel com o id ${id} removida! `});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = NivelController;