import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'

const App = () => {
  return (
    <div className='bg-neutral-950 text-white min-h-screen min-w-full'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePost/>}/>
      </Routes>
    </div>
  )
}

export default App
