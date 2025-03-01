import nodemailer from "nodemailer"
import { GmailAgent } from "../config/mailConfig.js";

export const sendResetMail = async (resetToken, email)=>{

const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;


await GmailAgent.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
});


}