import React from 'react'
import { BookDetail } from '@/presentation/pages/bookDetail'
import { axiosCSRService } from '@/libs/axios/csr/interceptor'
import { IBook } from '@/redux/models/book'

const fetchBook = async (id: string) => {
  return await id && axiosCSRService.get(`/book?id=${id}`).then((res) => res.data).catch((err) => err)
}

const BookDetailPage = async ({ params }) => {
  const bookId = params.bookSlug[0]?.split("-b-")?.[1]
  const book = await fetchBook(bookId)
  return <>
    <BookDetail book={book} />
  </>
}

export default BookDetailPage