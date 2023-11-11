import { redisClient } from "@/database/redis"
import categoryAPI from "@/redux/service/ssr/categoryAPI"

export async function GET() {
  const redis = await redisClient()
  const categoriesCache = await redis.get("categories")
  if (categoriesCache) {
    return Response.json(JSON.parse(categoriesCache))
  }
  const categories = await categoryAPI.getCategories().then((res) => res).catch((err) => err)
  await redis.set("categories", JSON.stringify(categories))
  return Response.json(categories)
}