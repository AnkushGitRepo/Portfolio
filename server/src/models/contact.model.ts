import mongoose, { Document, Schema } from 'mongoose';

export enum ContactReason {
  JOB_OPPORTUNITY = 'Job Opportunity',
  PROJECT_COLLABORATION = 'Project Collaboration',
  CONSULTING = 'Consulting',
  GENERAL_INQUIRY = 'General Inquiry',
  OTHER = 'Other'
}

export interface IContact extends Document {
  name: string;
  email: string;
  contactReason: ContactReason;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    contactReason: {
      type: String,
      enum: Object.values(ContactReason),
      required: [true, 'Reason for contact is required'],
      default: ContactReason.JOB_OPPORTUNITY,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IContact>('Contact', ContactSchema);
