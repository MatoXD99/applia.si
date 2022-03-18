export default function Contact(req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const SMTP_EMAIL = process.env.SMTP_EMAIL;
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

    console.log("Name: " + req.body.name)
    console.log("Last name: " + req.body.lastName)
    console.log("Email: " + req.body.email)
    console.log("Phone: " + req.body.phone)
    console.log("Message: " + req.body.message)

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
        from: req.body.email,
        to: 'smtp.applia@applia.si',
        subject: "Website Contact",
        text: req.body.message,
        html:
            `<div> Phone number: ${req.body.phone} </div><p> Users email: ${req.body.email} </p><p> Message: ${req.body.message} </p>`
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