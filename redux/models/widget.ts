import { IBook } from "./book"

export type IWidget = {
  title: string,
  type: string
  order: number
  items: IBook[]
}
export type IBannerWidget = {
  title: string,
  type: string
  items: {
    img: string,
    title: string
  }[]
} 