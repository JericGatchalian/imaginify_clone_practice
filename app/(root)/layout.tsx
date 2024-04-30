
import React from 'react'

import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'

type Props = {
    children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <main className='root'>
      <Sidebar />
      <MobileNav />

        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default RootLayout