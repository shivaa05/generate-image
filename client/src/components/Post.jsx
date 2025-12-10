import React from "react";
import { RxAvatar } from "react-icons/rx";
import { MdDownload } from "react-icons/md";
import { saveAs } from "file-saver";

const Post = ({imageUrl,author,prompt}) => {
  // const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/1200px-A-Cat.jpg?20101227100718";
  
  const downloadImage = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    saveAs(blob, "downloaded-image.jpg");
  };

  return (
    <div className="w-96 hover:scale-105 relative group duration-500">
      <img
        src={imageUrl}
        alt="jejd"
        className="rounded-lg group-hover:opacity-20 h-72 w-96 object-cover"
      />

      <div
        className="
        absolute bottom-6 left-0 px-2 text-white opacity-0
        transition-all duration-300
        group-hover:opacity-100 w-full
      "
      >
        <div className="text-center">
          {prompt}
        </div>

        <div className="flex justify-between items-center text-xl px-2">
          <div className="flex gap-3 items-center ">
            <RxAvatar className="text-4xl" />
            <span>{author}</span>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              downloadImage();
            }}
          >
            <MdDownload className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
