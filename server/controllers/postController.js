import { generateImage } from "./generateImage.js";
import Post from '../models/Post.js'

export const createPost = async (req, res) => {
  try {
    const { prompt, author } = req.body;
    if (!prompt || !author) {
      return res.status(404).json({
        success: false,
        message: "Prompt and author are required",
      });
    }
    
    const imageUrl = await generateImage(prompt);
    if (!imageUrl) {
      return res.status(500).json({
        success: false,
        message: "Please wait for a while, we are facing issues in generating image",
      });
    }
    const newPost = await Post.create({
      author,
      prompt,
      imageUrl,
    });

    return res.status(200).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:error.message
    });
  }
}

export const showAllPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    // console.log(posts)
    return res.status(200).json({
      success: true,
      posts
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}