import React from 'react'
import DesktopSidebar from './DesktopSidebar'
import MobileFooter from './MobileFooter'
import getCurrentUser from '../../actions/getCurrentUser'

const Sidebar = async({children}: {children:React.ReactNode}) => {
  // const currentUser = await getCurrentUser()
  // console.log(c)

  return (
    <div className='h-full'>
        {/* <DesktopSidebar currentUser={currentUser} /> */}
        <DesktopSidebar  />
        <MobileFooter />
        <main className='lg:pl-20 h-full'>
        {children}
        </main>
    </div>
  )
}

export default Sidebar