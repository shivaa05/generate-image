import React, { useState } from "react";
import HeaderCreate from "./HeaderCreate";
import { BsStars } from "react-icons/bs";
import axiosClient from "../api/axiosCLient";
import { CiImageOn } from "react-icons/ci";
import { RingLoader } from "react-spinners";


const CreatePost = () => {
  const [author,setAuthor] = useState("")
  const [prompt,setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const [preLoading,setPreLoading] = useState(true)
  const submitHandler = async(e) => {
    e.preventDefault()
    console.log(author)
    console.log(prompt)
    setPreLoading(false)
    setIsLoading(true)
    const res = await axiosClient.post('/api/generate-image',{
      author,
      prompt
    })
    console.log(res.data.data.imageUrl)
    setImageUrl(res.data.data.imageUrl)
    console.log(imageUrl)
    setIsLoading(false)
  }

  return (
    <>
      <HeaderCreate />
      <div className="w-full px-5 pt-22 lg:pt-30">
        <h1 className="text-center text-3xl font-bold text-blue-300 lg:text-5xl">
          Generate Image with Prompt
        </h1>
        <div className="text-center mt-2 text-blue-100/70 text-lg lg:text-2xl lg:mt-3">
          Write your prompt to describe your image.
        </div>

        <div className="flex flex-col mt-10 lg:flex-row w-full justify-evenly pb-30">
          <form
            action=""
            className="flex flex-col gap-5 lg:w-[35%]"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="author" className="text-zinc-300 px-1 text-lg">
                Author :
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full border px-3 py-2 rounded-lg"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="prompt" className="text-zinc-300 px-1 text-lg">
                Prompt :
              </label>
              <textarea
                type="text"
                placeholder="Write prompt here..."
                className="w-full border px-3 py-1 rounded-lg min-h-40 resize-none"
                required
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div className="text-center text-zinc-500">
              **You can also post the AI generated images to our community**
            </div>
            <button className="mt-4 mb-8 border-blue-600 py-2 rounded-lg bg-linear-to-r from-blue-800 to-purple-500 flex justify-center items-center gap-2 text-lg cursor-pointer">
              <BsStars /> Generate Your Image
            </button>
          </form>

          <div className="h-96 border border-dashed border-yellow-400 rounded-lg p-2 lg:w-[35%] flex justify-center items-center">
            {preLoading && <CiImageOn className="text-9xl h-full mx-auto text-center " />}
            {isLoading ?<RingLoader
              color={"white"}
              size={100}
              speedMultiplier={0.8}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="mx-auto"
            />:
             <img
              src={imageUrl}
              alt=""
              className={`w-full h-full object-cover rounded-lg ${preLoading && "hidden"}`}
            />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
