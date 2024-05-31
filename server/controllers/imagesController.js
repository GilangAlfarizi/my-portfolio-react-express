const { image } = require('../models'),
    utils = require('../utils')

module.exports = {
    create: async (req, res) => {
        try {
            const fileToString = req.file.buffer.toString('base64')

            const uploadFile = await utils.imagekit.upload({
                fileName: req.file.originalname,
                file: fileToString ,
                folder: 'Works'
            })

            const data = await image.create({
                data: {
                    slug: req.body.slug.replace(/\s+/g, "-"),
                    image: uploadFile.url,
                    description: req.body.description,
                    projectId: parseInt(req.body.project_id)
                }
            })

            return res.status(201).json({
                data
            })

        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    },

    update: async (req, res) => {
        try {
            const fileToString = req.file.buffer.toString('base64')

            const uploadFile = await utils.imagekit.upload({
                fileName: req.file.originalname,
                file: fileToString,
                folder: 'Works'
            })

            const data = await image.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: {
                    slug: req.body.slug.replace(/\s+/g, "-"),
                    image: uploadFile.url,
                    description: req.body.description,
                    projectId: parseInt(req.body.project_id)
                }
            })

            return res.status(201).json({
                data
            })
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    },

    getId: async (req, res) => {
        try {
            const data = await image.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            return res.status(201).json({
                data
            })

        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    },

    getAll: async (req, res,) => {
        try {
            const data = await image.findMany()

            return res.status(201).json({
                data
            })

        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    },

    delete: async (req, res) => {
        try {
            const data = await image.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })
    
            return res.status(204).json({
                data
            })
            
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }
}