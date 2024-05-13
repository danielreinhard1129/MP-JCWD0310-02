import React from 'react'

const notFoundCustomPage = () => {
  return (
    <div className='flex bg-indigo-950 justify-center items-center h-screen w-screen'>
        <div className='h-64 w-96 text-[#ffff00] text-center content-center'>
            <p className='font-extrabold text-4xl'>Sorry this page is unavailable !</p>
        </div>
    </div>
  )
}

export default notFoundCustomPage