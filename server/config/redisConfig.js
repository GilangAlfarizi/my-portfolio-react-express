const Redis = require("redis");

// Create Redis client
const redisClient = Redis.createClient({
	url: process.env.REDIS_URL,
	socket: {
		tls: true,
		rejectUnauthorized: false,
	},
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

(async () => {
	await redisClient.connect();
	console.log("Connected to Redis");
})();

module.exports = redisClient;
