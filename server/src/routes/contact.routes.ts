import express from 'express';
import {
  submitContactForm,
  getAllContactMessages,
  markMessageAsRead,
  deleteMessage,
} from '../controllers/contact.controller';

const router = express.Router();

// Public routes
router.post('/', submitContactForm);

// Protected routes (would typically have auth middleware)
router.get('/', getAllContactMessages);
router.put('/:id/read', markMessageAsRead);
router.delete('/:id', deleteMessage);

export default router;
