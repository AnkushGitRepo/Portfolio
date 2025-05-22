import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactConfirmation = async (to: string, name: string) => {
  const mailOptions = {
    from: `Ankush Gupta <${process.env.EMAIL_USER}>`,
    to,
    subject: "Thank you for reaching out to Ankush!",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f7fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
        <div style="text-align:center; margin-bottom: 24px;">
          <img src='https://avatars.githubusercontent.com/u/44290249?v=4' alt='Ankush Gupta' style='width:64px; height:64px; border-radius:50%; margin-bottom: 8px;' />
          <h2 style="color: #2563eb; margin: 0; font-size: 2rem;">Thank You, ${name}!</h2>
        </div>
        <p style="color: #222; font-size: 1.1rem; margin-bottom: 18px;">I appreciate you reaching out through my portfolio website. I've received your message and will get back to you as quickly as possible—usually within a day.</p>
        <p style="color: #222; font-size: 1.1rem; margin-bottom: 18px;">If your inquiry is urgent, feel free to email me directly at <a href="mailto:${process.env.EMAIL_USER}" style="color:#2563eb; text-decoration:underline;">${process.env.EMAIL_USER}</a>.</p>
        <div style="text-align:center; margin: 32px 0;">
          <a href="https://github.com/AnkushGitRepo" style="background: #2563eb; color: #fff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1rem;">View My GitHub</a>
        </div>
        <p style="color: #666; font-size: 1rem; text-align: center; margin-top: 32px;">Best regards,<br><span style="color:#2563eb; font-weight:600;">Ankush Gupta</span></p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent:", info.response);
    return info;
  } catch (err) {
    console.error("Error sending confirmation email:", err);
    throw err;
  }
};

export const sendContactNotification = async (formData: any) => {
  const mailOptions = {
    from: `Portfolio Website <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f7fafc; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
        <h2 style="color: #2563eb; text-align:center; margin-bottom: 24px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
          <tr style="background: #f1f5f9;">
            <th style="padding: 12px 16px; text-align: left; border-bottom: 1px solid #e5e7eb; color: #2563eb;">Field</th>
            <th style="padding: 12px 16px; text-align: left; border-bottom: 1px solid #e5e7eb; color: #2563eb;">Value</th>
          </tr>
          <tr><td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb;">Name</td><td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb;">${formData.name}</td></tr>
          <tr><td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb;">Email</td><td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb;">${formData.email}</td></tr>
          <tr><td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb;">Reason</td><td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb;">${formData.contactReason}</td></tr>
          <tr><td style="padding: 10px 16px;">Message</td><td style="padding: 10px 16px;">${formData.message}</td></tr>
        </table>
        <p style="color: #666; font-size: 1rem; text-align: center; margin-top: 32px;">This message was sent from your portfolio website contact form.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Notification email sent:", info.response);
    return info;
  } catch (err) {
    console.error("Error sending notification email:", err);
    throw err;
  }
};
