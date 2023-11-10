import { axiosSSRService } from "@/libs/axios/ssr/interceptor";
import widgetAPI from "@/redux/service/ssr/widgetAPI";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  const widgets = []
  await Promise.all([
    widgetAPI.getFinanceWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getEducationWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getReligiousWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getTravelWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getThrillerWidget().then((res) => widgets.push(res)).catch((err) => err),
    widgetAPI.getBannerWidget().then((res) => widgets.push(res)).catch((err) => err),

  ])

  return Response.json(widgets)
}