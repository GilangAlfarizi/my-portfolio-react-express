const { project } = require("../models");

module.exports = {
	create: async (req, res) => {
		try {
			const data = await project.create({
				data: {
					title: req.body.title,
					description: req.body.description,
				},
			});

			return res.status(201).json({
				data,
			});
		} catch (error) {
			return res.status(500).json({
				error,
			});
		}
	},

	update: async (req, res) => {
		try {
			const data = await project.update({
				where: {
					id: parseInt(req.params.id),
				},
				data: {
					title: req.body.title,
					description: req.body.description,
				},
			});

			return res.status(201).json({
				data,
			});
		} catch (error) {
			return res.status(500).json({
				error,
			});
		}
	},

	getId: async (req, res) => {
		try {
			const data = await project.findUnique({
				where: {
					id: parseInt(req.params.id),
				},
				include: {
					Image: {
						select: {
							id: true,
							image: true,
						},
					},
				},
			});

			return res.status(201).json({
				data,
			});
		} catch (error) {
			return res.status(500).json({
				error,
			});
		}
	},

	getAll: async (req, res) => {
		try {
			const data = await project.findMany({
				include: {
					Image: {
						// where: {id: 1},
						select: {
							id: true,
							image: true,
						},
					},
				},
			});

			const modifiedData = data.map((item) => ({
				...item,
				Image: item.Image.length > 0 ? [item.Image[0]] : [],
			}));

			return res.status(201).json({
				data: modifiedData,
			});
		} catch (error) {
			return res.status(500).json({
				error,
			});
		}
	},

	delete: async (req, res) => {
		try {
			const data = await project.delete({
				where: {
					id: parseInt(req.params.id),
				},
			});

			return res.status(204).json();
		} catch (error) {
			return res.status(500).json({
				error,
			});
		}
	},
};
