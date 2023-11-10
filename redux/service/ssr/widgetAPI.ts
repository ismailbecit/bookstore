import { axiosSSRService } from "@/libs/axios/ssr/interceptor"

export const getFinanceWidget = () => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes?q=finance`).then((res) => resolve({ type: "BOOK", title: "Finans Kitapları", items: res.data?.items, order: 2 })).catch((err) => reject(err))
  })
}

export const getEducationWidget = () => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes?q=education`).then((res) => resolve({ type: "BOOK", title: "Eğitim Kitapları", items: res.data?.items, order: 3 })).catch((err) => reject(err))
  })
}

export const getThrillerWidget = () => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes?q=thriller`).then((res) => resolve({ type: "BOOK", title: "Gerilim Kitapları", items: res.data?.items, order: 4 })).catch((err) => reject(err))
  })
}
export const getReligiousWidget = () => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes?q=religious`).then((res) => resolve({ type: "BOOK", title: "Din Kitapları", items: res.data?.items, order: 5 })).catch((err) => reject(err))
  })
}
export const getTravelWidget = () => {
  return new Promise(async (resolve, reject) => {
    axiosSSRService.get(`volumes?q=travel`).then((res) => resolve({ type: "BOOK", title: "Gezi Seyahat Kitapları", items: res.data?.items, order: 6 })).catch((err) => reject(err))
  })
}
export const getBannerWidget = () => {
  const banners = {
    type: "BANNER",
    title: "Banner Title",
    order: 1,
    items: [
      {
        title: "Banner 1",
        img: "/assets/banner/wh_13369f655.png"
      },
      {
        title: "Banner 2",
        img: "/assets/banner/wh_33860d57c.png"
      },
      {
        title: "Banner 3",
        img: "/assets/banner/wh_f3f0667a4.png"
      },
    ]
  }
  return new Promise(async (resolve, reject) => {
    resolve(banners)
  })
}
export default { getFinanceWidget, getEducationWidget, getReligiousWidget, getThrillerWidget, getTravelWidget, getBannerWidget }