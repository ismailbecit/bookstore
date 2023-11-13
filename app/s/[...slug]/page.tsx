"use client"
import { axiosCSRService } from '@/libs/axios/csr/interceptor'
import { BookList } from '@/presentation/pages/bookList'
import React from 'react'

const fetchBook = async (slug: string) => {
  return await axiosCSRService.get(`/categories?slug=${slug}`).then((res) => res.data).catch((err) => err)
}

const BooksListPage = async ({ params }) => {
  const slug = params.slug?.[0]
  const [book] = await Promise.all([fetchBook(slug).then((res) => res)])
  return <BookList books={book?.items} isSearch />
}

export default BooksListPage