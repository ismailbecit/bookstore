import { axiosCSRService } from "@/libs/axios/csr/interceptor"

export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    axiosCSRService.get(`categories`).then((res) => resolve(res.data)).catch((err) => reject(err))
  })
}


export default { getCategories }