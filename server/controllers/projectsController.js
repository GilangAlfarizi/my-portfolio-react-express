const { project } = require("../models");
// const redisClient = require("../config/redisConfig");

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
		const projectId = req.params.id;
		try {
			// const cachedData = await redisClient.get(`project:${projectId}`);
			// if (cachedData) {
			// 	return res.status(200).json(JSON.parse(cachedData));
			// }

			const data = await project.findUnique({
				where: {
					id: parseInt(projectId),
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

			// await redisClient.setEx(
			// 	`project:${projectId}`,
			// 	3600,
			// 	JSON.stringify(data)
			// );

			return res.status(200).json({
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
			const { search } = req.query;

			// Generate a unique cache key
			// const cacheKey = search ? `projects:search:${search}` : `projects`;
			// const cachedData = await redisClient.get(cacheKey);
			// if (cachedData) {
			// 	return res.status(200).json(JSON.parse(cachedData));
			// }

			const data = await project.findMany({
				where: search
					? { OR: [{ title: { contains: search, mode: "insensitive" } }] }
					: {},
				include: {
					Image: {
						select: {
							id: true,
							image: true,
						},
					},
				},
				orderBy: {
					updatedAt: "desc", // Sort by updatedAt in descending order
				},
			});

			const modifiedData = data.map((item) => ({
				...item,
				Image: item.Image.length > 0 ? [item.Image[0]] : [],
			}));

			// await redisClient.setEx(
			// 	cacheKey,
			// 	3600,
			// 	JSON.stringify({
			// 		data: modifiedData,
			// 	})
			// );

			return res.status(200).json({
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
