import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import axios, { AxiosResponse } from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post("/", async (req: Request, res: Response) => {
  try {
    const openaiUrl = process.env.OPENAI_API_URL;
    const apiKey = process.env.OPENAI_API_KEY;

    if (!openaiUrl || !apiKey) {
      throw new Error("Missing API URL or API key in environment variables");
    }

    const result: AxiosResponse = await axios.post(openaiUrl, req.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    res.status(result.status).json(result.data);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
