
import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from "../constants/http_status";
import bcrypt from "bcryptjs";
const router = Router();

router.get("/seed", asyncHandler(async (req, res) => {
  const users = sample_users;
  const userCount = await UserModel.countDocuments();
  if (userCount > 0) {
    res.send("Seed is already done!");
    return;
  }
  else {
    await UserModel.create(users);
    res.send("Seed is done!");
  }
}
))



router.post("/login", asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(HTTP_UNAUTHORIZED).send("Invalid email or password");
    return;
  }

  // Compare the plain-text password with the hashed password
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    res.status(HTTP_UNAUTHORIZED).send("Invalid email or password");
    return;
  }

  // If password matches, generate a token and send the response
  res.send(generateTokenResponse(user));
}));

router.post('/register', asyncHandler(async (req, res) => {
  const { name, email, password, address } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    res.status(HTTP_BAD_REQUEST).send("User already exists, Please Login!");
    return;
  }

  // Hash the password before saving
  const encryptedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: '',
    name,
    email: email.toLowerCase(),
    password: encryptedPassword,
    address,
    isAdmin: false,
  };

  const dbUser = await UserModel.create(newUser);
  res.send(generateTokenResponse(dbUser));
}));

const generateTokenResponse = (user: User) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30m",
    }
  );

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token,
  };
};

export default router;