import nodemailer from "nodemailer";
import Newsletter from "@/Models/NewsletterModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, userId }) => {
  try {
    // create a hased token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    await Newsletter.findByIdAndUpdate(userId, {
      verifyToken: hashedToken,
      verifyTokenExpiry: Date.now() + 3600000,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass :process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Newsletter",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/VerifyMail?token=${hashedToken}">here</a> to 
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/VerifyMail?token=${hashedToken}
            </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    // Check if the email was sent successfully
    if (mailResponse.accepted.length > 0) {
      console.log('Email sent successfully to:', mailResponse.accepted.join(', '));
      return { success: true, message: 'Email sent successfully', response: mailResponse };
    } else {
      console.log('Email was not sent.');
      return { success: false, message: 'Email was not sent', response: mailResponse };
    }
  } catch (error) {
    console.error("Error :", error);
    throw new Error(error.message);
  }
};
