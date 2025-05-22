import { Request, Response } from "express";
import Contact, { IContact } from "../models/contact.model";
import { getErrorMessage } from "../utils/errorHandler";
import {
  sendContactConfirmation,
  sendContactNotification,
} from "../services/email.service";

// Submit a contact form
export const submitContactForm = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, contactReason, message } = req.body;

    // Validate input
    if (!name || !email || !contactReason || !message) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const contact = new Contact({
      name,
      email,
      contactReason,
      message,
    });

    const savedContact = await contact.save();

    // Send confirmation email to the user
    await sendContactConfirmation(email, name);

    // Send notification email to admin
    await sendContactNotification(savedContact);

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", error: getErrorMessage(error) });
  }
};

// Get all contact messages (admin only)
export const getAllContactMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", error: getErrorMessage(error) });
  }
};

// Mark message as read (admin only)
export const markMessageAsRead = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    if (!message) {
      res.status(404).json({ message: "Message not found" });
      return;
    }

    res.status(200).json(message);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", error: getErrorMessage(error) });
  }
};

// Delete a message (admin only)
export const deleteMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);

    if (!message) {
      res.status(404).json({ message: "Message not found" });
      return;
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", error: getErrorMessage(error) });
  }
};
