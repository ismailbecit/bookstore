import { redisClient } from "@/database/redis"
import bookAPI from "@/redux/service/ssr/bookAPI"
import categoryAPI from "@/redux/service/ssr/categoryAPI"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const slug = searchParams.get("slug")
  if (slug) {
    return getBookCategories(slug)
  } else {
    return getCategories()
  }
}


const getCategories = async () => {
  const redis = await redisClient()
  const categoriesCache = await redis.get("categories")
  if (categoriesCache) {
    return Response.json(JSON.parse(categoriesCache))
  }
  const categories = await categoryAPI.getCategories().then((res) => res).catch((err) => err)
  await redis.set("categories", JSON.stringify(categories))
  return Response.json(categories)
}

const getBookCategories = async (slug: string) => {
  const redis = await redisClient()
  const redisKey = `books-${slug}`
  const booksCache = await redis.get(redisKey)
  if (booksCache) {
    return Response.json(JSON.parse(booksCache))
  }
  const categories = await bookAPI.getBookCategories(slug).then((res) => res).catch((err) => err)
  await redis.set(redisKey, JSON.stringify(categories))
  return Response.json(categories)
}