import { appConfig } from '@/redux/appConfig'
import React from 'react'
const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <footer className='mt-5'>
      <div>
        <div className={`bg-color-main w-100 p-3 d-flex justify-content-center gap-5 `} >
          <div>
            {` © ${thisYear} ${appConfig.projectName}`}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer