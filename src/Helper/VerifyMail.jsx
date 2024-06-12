import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Newsletter from "@/Models/NewsletterModel";

export async function POST({email}) {
  try {
    const { subject, message } = await request.json();
    const email = process.env.EMAIL;
    const pass = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass
      }
    });

      const mailoption = {
        from: email,
        to: recipient.Email,
        subject: "Newsletter",
        html: `
          <h3>Hello</h3>
          <p>Title: Verify your email</p>
          <button>Verify email</button>
        `
      };

      const mailresponse =await transporter.sendMail(mailoption);
      return mailresponse;

   
    
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ message: "Failed to Send Emails" }, { status: 500 });
  }
}
