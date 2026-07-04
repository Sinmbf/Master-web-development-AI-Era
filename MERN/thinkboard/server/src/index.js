import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Endpoint : a combination of URL + HTTP method that lets the client interact with
//            a specific resource. For eg: /api/notes/

// middleware : a function that runs in between the request and response
app.use(express.json()); // parse the json body

app.use(rateLimiter);

// A simple middleware
// app.use((req, res, next) => {
//   console.log(`Request method is: ${req.method} & request URL is: ${req.url}`);
//   next(); // The function to be called after
// });

app.use("/api/notes", notesRoutes);

// Connect to MongoDB and then the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
