import { axiosSSRService } from "@/libs/axios/ssr/interceptor"

export const getBookDetailById = (bookId: string) => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes/${bookId}`).then((res) => resolve(res)).catch((err) => reject(err))
  })
}


export default { getBookDetailById }