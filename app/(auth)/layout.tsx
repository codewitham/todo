import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex-1 flex flex-col items-center justify-center'>{children}</div>
  )
}

export default layout 