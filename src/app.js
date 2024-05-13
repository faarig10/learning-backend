import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// we are using cors to allow and block the request that may hit our backend. Whitelisting and blacklisting is done from this middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // this is to accept json files
app.use(express.urlencoded()); // this is encode the request that comes in the form of url so that our backend can respond accordingly
app.use(express.static("public")); // this is to public assets that can be accessed by anyone
app.use(cookieParser());

//routes import

import router from "./routes/user.routes.js";

//routes declaration

app.use("/api/v1/users", router);

export { app };
