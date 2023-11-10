import { appConfig } from '@/redux/appConfig'
import React from 'react'
const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <>
      <nav>
        <div className={`bg-color-main w-100 p-3 d-flex justify-content-center gap-5 `} >
          <div>
            {` © ${thisYear} ${appConfig.projectName}`}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Footer