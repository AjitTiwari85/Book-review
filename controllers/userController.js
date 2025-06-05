import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
