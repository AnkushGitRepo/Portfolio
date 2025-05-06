import mongoose, { Document, Schema } from 'mongoose';

export enum SkillCategory {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DATABASE = 'Database',
  DEVOPS = 'DevOps',
  TOOLS = 'Tools',
  OTHER = 'Other',
}

export interface ISkill extends Document {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency: number; // 1-5 scale
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const SkillSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
    },
    icon: {
      type: String,
      required: [true, 'Skill icon is required'],
    },
    category: {
      type: String,
      enum: Object.values(SkillCategory),
      required: [true, 'Skill category is required'],
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Skill proficiency is required'],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISkill>('Skill', SkillSchema);
