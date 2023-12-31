import type { Metadata } from 'next'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/presentation/pages/layout/header';
import Footer from '@/presentation/pages/layout/footer';
import { Providers } from '@/redux/provider';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Online Kitap Satış',
  description: 'Online Kitap Satış',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={""}>
        <Providers>
          <>
            <ToastContainer
              position="top-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Header />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>


  )
}
