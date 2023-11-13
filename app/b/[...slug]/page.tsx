"use client"
import { axiosCSRService } from '@/libs/axios/csr/interceptor'
import { BookList } from '@/presentation/pages/bookList'
import Error from 'next/error'
import React from 'react'

const fetchBookCategories = async (slug: string) => {
  return await axiosCSRService.get(`/categories?slug=${slug}`).then((res) => res.data).catch((err) => err)
}
const fetchCategory = async () => {
  return await axiosCSRService.get(`/categories`).then((res) => res.data).catch((err) => err)
}

const BooksListPage = async ({ params }) => {
  const slug = params.slug?.[0]
  const [book, categories] = await Promise.all([fetchBookCategories(slug).then((res) => res), fetchCategory().then((res) => res),])
  const categoy = categories.find((el) => el.slug === slug)
  if (categoy) {
    return <BookList books={book?.items} categoryName={categoy?.name} />
  } else {
    return <Error withDarkMode={false} statusCode={404} />
  }
}

export default BooksListPage