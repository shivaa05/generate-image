import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Post from './Post';
import HeaderHome from './HeaderHome';
import axiosClient from '../api/axiosCLient';


const Home = () => {
  const [ posts, setPosts ] = useState([]);
  const [ allPosts, setallPosts ] = useState([]);
  
  const changeHandler = (e) => {
    const searchVal = e.target.value.toLowerCase()
    if (!searchVal) setPosts(allPosts)
    const updatedPost = allPosts.filter((post) => post.author.toLowerCase().includes(searchVal));
    setPosts(updatedPost)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axiosClient.get("/api/posts"); // or axios.get(...)
        setPosts(res.data.posts);
        setallPosts(posts);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      }
    }

    fetchData();
  }, []);
  return (
    <>
    <HeaderHome/>
    <div className='w-full px-5 pt-22 lg:pt-30 pb-20'>
      <h1 className='text-center text-3xl font-bold text-blue-300 lg:text-5xl'>Generate With AI</h1>
      <div className='text-center mt-2 text-blue-100/70 text-lg lg:text-2xl lg:mt-3'>
        Your intelligent partner for seamless tasks and instant creative
        support.
      </div>
      <div className='flex items-center gap-2 border-2 px-3 py-2 w-[90%] px mx-auto rounded-lg mt-6 lg:w-[60%] lg:mt-10 lg:py-3 lg:rounded-2xl'>
        <CiSearch className='text-xl' />
        <input type="text" placeholder='Search more posts...' className='flex-1 outline-none border-none lg:text-lg' onChange={changeHandler} />
      </div>

        <div className='flex flex-wrap mx-auto justify-center items-center gap-5 mt-8 '>
          {posts.length==0 && <h1 className='text-2xl font-bold text-zinc-400 font-serif'>No posts to show</h1>}
          {posts.map((post,index) => <Post imageUrl={ post.imageUrl} author={post.author} prompt={post.prompt} key={index}/>)}
        </div>
      </div>
      </>
  );
}

export default Home
