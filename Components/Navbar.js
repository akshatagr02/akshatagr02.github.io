import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-[#222222] p-5 flex font-mono justify-evenly items-center text-base '>

    <div >
       <span className='text-2xl text-yellow-500 font-medium '> Akshat Agrawal</span>
    </div>

    <div>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>Bio</li>
            <li>Certificates</li>
            <li>Blogs</li>
            <li>Resume</li>
        </ul>
    </div>

    </nav>
      
    </>
  )
}

export default Navbar
