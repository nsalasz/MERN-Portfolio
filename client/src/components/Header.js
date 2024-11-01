import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between header'>
        <a href="/admin" ><h1 class="text-secondary text-4xl font-semibold">N</h1></a>
        <h1 className='text-white text-4xl font-semibold'>N</h1>
        <h1 className='text-tertiary text-4xl font-semibold'>S</h1>
        <h1 className='text-red-500 text-4xl font-semibold'>Z</h1>
    </div>
  )
}

export default Header