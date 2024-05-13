import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 10,
    },
    {
      name: "coverImage",
      maxCount: 10,
    },
  ]),
  registerUser
);

export default router;
