import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiJusticeStar } from "react-icons/gi";


const HeaderHome = () => {
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 z-100 w-full backdrop-blur-3xl bg-black/10 px-5 py-3 flex justify-between items-center lg:px-12 lg:py-5">
      <div className="bold text-2xl">
        <span className="bg-linear-to-r from-purple-300 to-blue-500 bg-clip-text text-transparent">
          generateWith
        </span>
        <span className="font-bold text-3xl bg-linear-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
          AI
        </span>
        <GiJusticeStar className="inline-block mb-7 text-purple-500" />
      </div>
      <button
        className="bg-blue-700 px-4 py-1 rounded-lg cursor-pointer lg:text-lg"
        onClick={() => navigate("/create")}
      >
        Create New Post
      </button>
    </div>
  );
}

export default HeaderHome
