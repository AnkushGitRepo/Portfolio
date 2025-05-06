import express from 'express';
import {
  getAllSkills,
  getSkillsByCategory,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skill.controller';

const router = express.Router();

// Public routes
router.get('/', getAllSkills);
router.get('/category/:category', getSkillsByCategory);
router.get('/:id', getSkillById);

// Protected routes (would typically have auth middleware)
router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;
