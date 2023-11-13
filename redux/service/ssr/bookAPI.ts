import { axiosSSRService } from "@/libs/axios/ssr/interceptor"

export const getBookDetailById = (bookId: string) => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes/${bookId}`).then((res) => resolve(res)).catch((err) => reject(err))
  })
}

export const getBookCategories = (slug: string) => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes?q=${slug}&maxResults=40`).then((res) => resolve(res.data)).catch((err) => reject(err))
  })
}

export default { getBookDetailById, getBookCategories }