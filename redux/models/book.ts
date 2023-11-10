export interface IBook {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}

export interface VolumeInfo {
  title: string
  subtitle: string
  authors: string[]
  publishedDate: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount: number
  printType: string
  averageRating: number
  ratingsCount: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  imageLinks: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: {
    amount: number
  }
}

export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface Epub {
  isAvailable: boolean
}

export interface Pdf {
  isAvailable: boolean
}

export interface SearchInfo {
  textSnippet: string
}
