"use client"
import React from 'react'
import { BookDetail } from '@/presentation/pages/bookDetail'
import { axiosCSRService } from '@/libs/axios/csr/interceptor'
import { IBook } from '@/redux/models/book'
import Error from 'next/error'

const fetchBook = async (id: string) => {
  return await id && axiosCSRService.get(`/book?id=${id}`).then((res) => res.data).catch((err) => err.response?.data)
}

const BookDetailPage = async ({ params }) => {
  const bookId = params.bookSlug[0]?.split("-b-")?.[1]
  const book = await fetchBook(bookId)
  if (!book) {
    return <Error withDarkMode={false} statusCode={404} />
  }
  return <>
    <BookDetail book={book} />
  </>
}

export default BookDetailPage