import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

const sendEmail = async (email, subject, templateName, data) => {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Your email
                pass: process.env.EMAIL_PASS,  // Your email password or app password
            },
        });

        // Define the email template path
        const templatePath = path.join(process.cwd(), "emails", `${templateName}.ejs`);

        // Render the EJS template
        const emailHtml = await ejs.renderFile(templatePath, data);

        // Send mail
        await transporter.sendMail({
            from: `"Pinterest Clone by Firoz" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: subject,
            html: emailHtml,
        });

        console.log("✅ Email sent successfully to", email);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};

export default sendEmail;
