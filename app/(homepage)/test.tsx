"use client"
import { axiosCSRService } from '@/libs/axios/csr/interceptor';
import axios from 'axios';
import React, { useEffect } from 'react'

const Testt = () => {
  useEffect(() => {
    // axios.get(`https://www.googleapis.com/books/v1/volumes?q=se&key=AIzaSyDHnQMVTay3F_Rgws-Tdoz8dkCb1Y4nlKo&filter=paid-ebooks`).then((res) => res.data.items).catch((err) => console.log(err));
    // axiosCSRService.get(`widgets`).then((res) => res.data.items).catch((err) => console.log(err));
  }, [])
  return (
    <div>Testt</div>
  )
}

export default Testt