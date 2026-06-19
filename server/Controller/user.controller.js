import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import genrateToken from "../utils/genrateToken.js";

export const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required to fill",
      });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      success: true,
      message: "User Registered Successfully!!",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const Login = async (req, res) => {
   try {
    console.log(req.body);
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      console.log("User", user);

      if (
         user &&
         await bcrypt.compare(password, user.password)
      ) {
         res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            token: genrateToken(user._id)
         });
      } else {
         res.status(400).json({
            success: false,
            message: "Invalid Credentials"
         });
      }

   } catch (err) {
      res.status(500).json({
         success: false,
         message: err.message
      });
   }
};