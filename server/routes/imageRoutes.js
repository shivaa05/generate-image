import express from 'express'
import { createPost, showAllPost } from '../controllers/postController.js';

const router = express.Router();

router.post("/generate-image", createPost);
router.get("/posts", showAllPost);

export default router