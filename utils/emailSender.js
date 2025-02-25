const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
    });

    let mailOptions = { from: process.env.EMAIL, to, subject, text };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
