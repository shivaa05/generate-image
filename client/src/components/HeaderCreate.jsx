import React from 'react'
import { useNavigate } from 'react-router-dom'
const HeaderCreate = () => {
  const navigate = useNavigate()
  return (
    <div className='fixed top-0 w-full backdrop-blur-3xl bg-black/10 px-5 py-3 flex justify-between items-center lg:px-12 lg:py-5'>
      <div className='bold text-xl'>GenerateIMAGE</div>
      <button className='bg-blue-700 px-4 py-1 rounded-lg cursor-pointer lg:text-lg' onClick={()=>navigate("/")}>Browse Post</button>
    </div>
  )
}

export default HeaderCreate
