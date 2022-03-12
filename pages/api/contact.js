

export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const SMTP_EMAIL = process.env.SMTP_EMAIL;
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

    const transporter = nodemailer.createTransport({
        host: "mail.applia.si",
        port: 465,
        secure: true,
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    })

    const mailData = {
        from: 'contact@applia.si',
        to: 'smtp.applia@applia.si',
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err),
                res.status(201)
        else
            console.log(info),
                res.status(200)
    })


}