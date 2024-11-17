const Redis = require("redis");

// Create Redis client
const redisClient = Redis.createClient();

redisClient.on("error", (err) => console.error("Redis Client Error", err));

(async () => {
	await redisClient.connect();
	console.log("Connected to Redis");
})();

module.exports = redisClient;
