import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

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
  const firstName = name.split(' ')[0];
  const mailOptions = {
    from: `Ankush Gupta <${process.env.EMAIL_USER}>`,
    to,
    subject: `Thanks for reaching out to me! I'll be in touch soon`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Ankush Gupta</title>
        <style>
          @media only screen and (max-width: 600px) {
            .container { width: 100% !important; margin: 10px !important; border-radius: 10px !important; }
            .header { padding: 30px 20px !important; }
            .content { padding: 30px 20px !important; }
            .social-container { display: block !important; }
            .social-button { display: block !important; margin: 8px auto !important; width: 200px !important; }
            .cta-button { display: block !important; width: 80% !important; margin: 0 auto !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; min-height: 100vh;">
        <div class="container" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-top: 20px; margin-bottom: 20px;">
          
          <!-- Header Section with Gradient Background -->
          <div class="header" style="background: linear-gradient(135deg, #2563eb 0%, #10b981 25%, #8b5cf6 50%, #f59e0b 75%, #2563eb 100%); padding: 40px 30px; text-align: center; position: relative;">
            <div style="position: relative; z-index: 2;">
              <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; border: 3px solid rgba(255,255,255,0.3);">
                👨‍💻
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 2.2rem; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                Hello, <span style="color: #fbbf24; font-size: 2.4rem;">${firstName}</span>!
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 1.1rem; font-weight: 500;">Your message has been received</p>
            </div>
          </div>

          <!-- Main Content -->
          <div class="content" style="padding: 40px 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 1.8rem; font-weight: 600;">Thank you for reaching out!</h2>
              <p style="color: #6b7280; font-size: 1.1rem; line-height: 1.6; margin: 0;">I appreciate you taking the time to contact me through my portfolio website.</p>
            </div>

            <!-- Response Timeline -->
            <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: 12px; padding: 25px; margin: 25px 0; border-left: 4px solid #2563eb;">
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; margin-right: 12px;"></div>
                <h3 style="color: #1f2937; margin: 0; font-size: 1.2rem; font-weight: 600;">Response Timeline</h3>
              </div>
              <p style="color: #4b5563; margin: 0; font-size: 1rem; line-height: 1.5;">I'll get back to you within <strong style="color: #2563eb;">24-48 hours</strong>. For urgent matters, feel free to email me directly at <a href="mailto:${process.env.EMAIL_USER}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${process.env.EMAIL_USER}</a></p>
            </div>

            <!-- Social Media Section -->
            <div style="text-align: center; margin: 35px 0;">
              <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 1.3rem; font-weight: 600;">Connect with me</h3>
              <div class="social-container" style="display: flex; justify-content: center; align-items: center; gap: 15px; flex-wrap: wrap;">
                
                <!-- LinkedIn -->
                <div class="social-button" style="text-align: center; margin: 8px;">
                  <a href="https://linkedin.com/in/ankushgupta18" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 15px; background: #0077b5; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 12px rgba(0,119,181,0.3); min-width: 60px;">
                    <div style="color: #ffffff; font-size: 1.5rem; margin-bottom: 5px;">💼</div>
                    <div style="color: #ffffff; font-size: 0.8rem; font-weight: 600;">LinkedIn</div>
                  </a>
                </div>
                
                <!-- GitHub -->
                <div class="social-button" style="text-align: center; margin: 8px;">
                  <a href="https://github.com/AnkushGitRepo" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 15px; background: #333333; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 12px rgba(51,51,51,0.3); min-width: 60px;">
                    <div style="color: #ffffff; font-size: 1.5rem; margin-bottom: 5px;">💻</div>
                    <div style="color: #ffffff; font-size: 0.8rem; font-weight: 600;">GitHub</div>
                  </a>
                </div>
                
                <!-- Instagram -->
                <div class="social-button" style="text-align: center; margin: 8px;">
                  <a href="https://instagram.com/_ankushg" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 15px; background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border-radius: 12px; text-decoration: none; box-shadow: 0 4px 12px rgba(225,48,108,0.3); min-width: 60px;">
                    <div style="color: #ffffff; font-size: 1.5rem; margin-bottom: 5px;">📸</div>
                    <div style="color: #ffffff; font-size: 0.8rem; font-weight: 600;">Instagram</div>
                  </a>
                </div>
                
              </div>
            </div>

            <!-- Call to Action -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://github.com/AnkushGitRepo/Portfolio" target="_blank" rel="noopener noreferrer" class="cta-button" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #10b981 100%); color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; box-shadow: 0 4px 12px rgba(37,99,235,0.3);">
                🚀 Explore My Portfolio
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 0.9rem;">Best regards,</p>
            <p style="color: #1f2937; margin: 0; font-size: 1.1rem; font-weight: 600;">Ankush Gupta</p>
            <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 0.8rem;">Full Stack Developer & ML Engineer</p>
            <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 0.8rem;">📍 Ahmedabad, Gujarat, India</p>
          </div>
        </div>
      </body>
      </html>
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
    subject: `🚀 New Contact: ${formData.name} - ${formData.contactReason}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f3f4f6; min-height: 100vh;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); margin-top: 20px; margin-bottom: 20px;">
          
          <!-- Header Section -->
          <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #db2777 100%); padding: 30px; text-align: center; position: relative;">
            <div style="position: relative; z-index: 2;">
              <h1 style="color: #ffffff; margin: 0; font-size: 1.8rem; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                📬 New Contact Form Submission
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 1rem;">From your portfolio website</p>
            </div>
          </div>

          <!-- Contact Information Section -->
          <div style="padding: 30px;">
            <!-- Contact Person Info -->
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 1.4rem; font-weight: 600; display: flex; align-items: center;">
                <span style="background: #3b82f6; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 0.9rem;">👤</span>
                Contact Details
              </h2>
              
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #6b7280; font-weight: 600; min-width: 80px; font-size: 0.9rem;">Name:</span>
                  <span style="color: #1f2937; font-weight: 600; font-size: 1.1rem;">${formData.name}</span>
                </div>
                
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #6b7280; font-weight: 600; min-width: 80px; font-size: 0.9rem;">Email:</span>
                  <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none; font-weight: 600; font-size: 1rem;">${formData.email}</a>
                </div>
                
                <div style="display: flex; align-items: center; padding: 8px 0;">
                  <span style="color: #6b7280; font-weight: 600; min-width: 80px; font-size: 0.9rem;">Reason:</span>
                  <span style="background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">${formData.contactReason}</span>
                </div>
              </div>
            </div>

            <!-- Message Section -->
            <div style="background: #ffffff; border: 2px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 1.2rem; font-weight: 600; display: flex; align-items: center;">
                <span style="background: #10b981; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 0.8rem;">💬</span>
                Message
              </h3>
              <div style="background: #f9fafb; border-radius: 8px; padding: 16px; border-left: 4px solid #10b981;">
                <p style="color: #374151; margin: 0; line-height: 1.6; font-size: 1rem; white-space: pre-wrap;">${formData.message}</p>
              </div>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center; margin: 25px 0;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 1.1rem; font-weight: 600;">Quick Actions</h3>
              <div style="display: inline-block;">
                <a href="mailto:${formData.email}?subject=Re: Your inquiry about ${formData.contactReason}&body=Hi ${formData.name},%0D%0A%0D%0AThank you for reaching out through my portfolio website.%0D%0A%0D%0ABest regards,%0D%0AAnkush Gupta" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95rem; margin: 0 8px; box-shadow: 0 4px 12px rgba(59,130,246,0.3);">
                  📧 Reply to ${formData.name.split(' ')[0]}
                </a>
                
                <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.95rem; margin: 0 8px; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">
                  📬 Open Gmail
                </a>
              </div>
            </div>

            <!-- Timestamp -->
            <div style="background: #f3f4f6; border-radius: 8px; padding: 15px; text-align: center; margin-top: 20px;">
              <p style="color: #6b7280; margin: 0; font-size: 0.9rem;">
                <strong>Received:</strong> ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
              <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 0.8rem;">This message was sent from your portfolio website contact form</p>
            </div>
          </div>
        </div>
      </body>
      </html>
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
