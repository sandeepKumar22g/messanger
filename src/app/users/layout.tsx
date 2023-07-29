import React from 'react'
import { Sidebar } from '../../components'

const UsersLayout = async({children}:{children: React.ReactNode}) => {
  return (
    <div className='h-full'>
        <Sidebar>
            {children}
        </Sidebar>
    </div>
  )
}

export default UsersLayout