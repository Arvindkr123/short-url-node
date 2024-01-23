import { connectDB } from "./DB/db.js";
// import { app } from "./project-1/app.js";
import { app } from "./project-2/app.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log("server listening on 8000");
    });
  })
  .catch((err) => console.log(err.message));
