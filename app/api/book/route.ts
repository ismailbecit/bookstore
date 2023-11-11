import { redisClient } from "@/database/redis";
import { getBookDetailById } from "@/redux/service/ssr/bookAPI";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const bookId = searchParams.get("id")

  if (bookId === undefined) {
    return Response.json({ message: "Kitap ID zorunlu alandır." }, { status: 400 })
  }
  const redis = await redisClient()
  const redisKey = `book-${bookId}`
  const bookCache = await redis.get(redisKey)
  if (bookCache) {
    return Response.json(JSON.parse(bookCache))
  }
  let book = null
  await getBookDetailById(bookId).then((res) => {
    book = res.data

  })
  await redis.set(redisKey, JSON.stringify(book))
  return Response.json(book)
}