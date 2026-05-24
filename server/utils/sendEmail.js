import dotenv from "dotenv";
dotenv.config();
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);


const sendEmail = async ({ name, email, message }) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",

      to: "vishupathariya146@gmail.com",

      subject: `New Portfolio Message from ${name}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

  } catch (error) {
    console.error("❌ Resend Error:", error);
  }
};

export default sendEmail;