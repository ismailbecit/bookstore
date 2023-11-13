import { redisClient } from "@/database/redis";
import widgetAPI from "@/redux/service/ssr/widgetAPI";

export async function GET() {
  const redis = await redisClient()
  // const widgetsCache = await redis.get("widgets")
  // if (widgetsCache) {
  //   return Response.json(JSON.parse(widgetsCache))
  // }
  const widgets: any = []
  await Promise.all([
    widgetAPI.getFinanceWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getEducationWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getReligiousWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getTravelWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getThrillerWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getBannerWidget().then((res) => widgets.push(res)).catch((err) => err),
  ])
  const response = widgets?.sort((a: { order: number }, b: { order: number }) => a.order - b.order)
  // await redis.set("widgets", JSON.stringify(response))
  return Response.json(response)
}