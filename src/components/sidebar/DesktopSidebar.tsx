'use client'

import React, {useState} from 'react'
import useRoutes from '../../hooks/useRoutes'

const DesktopSidebar = () => {
  const routes = useRoutes()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between'>
      <nav></nav>
    </div>
  )
}

export default DesktopSidebar