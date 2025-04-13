
import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
const router=Router();

router.get("/seed",asyncHandler(async(req,res)=>{
    const users=sample_users;
    const userCount=await UserModel.countDocuments();
    if(userCount>0){
        res.send("Seed is already done!");
        return;
    }
    else{
        await UserModel.create(users);
        res.send("Seed is done!");
    }
}
))



router.post("/login", asyncHandler(async (req, res) => { 
    const {email, password} = req.body;
    const user=await UserModel.findOne({email,password});
      if(user){
        console.log("JWT_SECRET:", process.env.JWT_SECRET);
        console.log(user);
        res.send(generateTokenResponse(user));
      }
      else{
        res.status(401).send("User not found");
      }
  }))
  
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