import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service provider here
  auth: {
    user: process.env.EMAIL_USERNAME, // Your email username
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password
  },
});

export async function POST(req, res) {
  const { subject, message, email } = await req.json();
  
  console.log(email, subject, message);
  try {
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: subject,
      html: `
        <h1>REPLY RECIEVED:${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>I have recieved your Message,Thank you for Responding:</p>
        <p>Your Message:${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, 500);
  }
}
