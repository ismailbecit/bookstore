import { redisClient } from "@/database/redis";
import { axiosSSRService } from "@/libs/axios/ssr/interceptor";
import widgetAPI from "@/redux/service/ssr/widgetAPI";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const redis = await redisClient()
  const widgetsCache = await redis.get("widgets")
  if (widgetsCache) {
    return Response.json(JSON.parse(widgetsCache))
  }
  const widgets = []
  await Promise.all([
    widgetAPI.getFinanceWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getEducationWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getReligiousWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getTravelWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getThrillerWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getBannerWidget().then((res) => widgets.push(res)).catch((err) => err),
  ])
  const response = widgets?.sort((a, b) => a.order - b.order)
  await redis.set("widgets", JSON.stringify(response))
  return Response.json(response)
}