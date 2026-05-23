import express from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide name, email, and message",
      });
    }

    // Check DB Connection
    if (mongoose.connection.readyState !== 1) {
      console.log(
        `📩 Contact (No DB): ${name} <${email}> — ${message}`
      );

      return res.status(200).json({
        success: true,
        message: "Message received successfully",
      });
    }

    // Save to Database
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    await sendEmail({
      name,
      email,
      message,
    });

    console.log(`📩 New contact message from ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: {
        id: contact._id,
      },
    });
  } catch (error) {
    console.error("Contact Route Error:", error);

    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
});

export default router;