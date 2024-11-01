import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
        <div className='flex gap-5 text-6xl font-semibold sm:text-3xl'>
        <h1 className='text-secondary text-4xl font-semibold'>N</h1>
        <h1 className='text-white text-4xl font-semibold'>N</h1>
        <h1 className='text-tertiary text-4xl font-semibold'>S</h1>
        <h1 className='text-red-500 text-4xl font-semibold'>Z</h1>
        </div>
    </div>
  )
}

export default Loader