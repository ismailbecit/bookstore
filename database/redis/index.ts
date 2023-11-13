import Redis from "ioredis"
var redis: Redis;
export const redisClient = async () => {
  if (redis === null || !redis) {
    const ioRedis = await new Redis({
      host: "localhost",
      port: 6379,
    });
    redis = ioRedis
  }
  const set = async (key: string, value: string) => {
    return await redis.set(key, value, "EX", 60 * 60 * 24 * 30);
  }
  const get = async (key: string) => {
    return await redis.get(key).then((result) => result);
  }
  return { set, get }
}