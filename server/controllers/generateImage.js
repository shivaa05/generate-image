import dotenv from 'dotenv'
dotenv.config();

export const generateImage = async (prompt) => {
  const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );
  
    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
  
    // Generate URL
    const imageUrl = `data:image/png;base64,${base64}`;
  
    // console.log("Generated Image URL:");
    // console.log(imageUrl);
    
  
    return imageUrl
}