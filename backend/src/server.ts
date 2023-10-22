import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
  .connect(env.MONGO_STRING)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  })
  .catch(console.error);
