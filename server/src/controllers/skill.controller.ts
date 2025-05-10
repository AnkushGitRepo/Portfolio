import { Request, Response } from 'express';
import Skill, { ISkill, SkillCategory } from '../models/skill.model';
import { getErrorMessage } from '../utils/errorHandler';

// Get all skills
export const getAllSkills = async (req: Request, res: Response): Promise<void> => {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: getErrorMessage(error) });
  }
};

// Get skills by category
export const getSkillsByCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category } = req.params;

    // Validate category
    if (!Object.values(SkillCategory).includes(category as SkillCategory)) {
      res.status(400).json({ message: 'Invalid category' });
      return;
    }

    const skills = await Skill.find({ category }).sort({ order: 1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: getErrorMessage(error) });
  }
};

// Get skill by ID
export const getSkillById = async (req: Request, res: Response): Promise<void> => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      res.status(404).json({ message: 'Skill not found' });
      return;
    }

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: getErrorMessage(error) });
  }
};

// Create a new skill
export const createSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const skill = new Skill(req.body);
    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: getErrorMessage(error) });
  }
};

// Update a skill
export const updateSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) {
      res.status(404).json({ message: 'Skill not found' });
      return;
    }

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: getErrorMessage(error) });
  }
};

// Delete a skill
export const deleteSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      res.status(404).json({ message: 'Skill not found' });
      return;
    }

    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: getErrorMessage(error) });
  }
};
