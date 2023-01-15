const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async(req, res) => {
    let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'casey.balistreri26@ethereal.email', // generated ethereal user
            pass: 'fBWyqfSRun4DTQy1et', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Ice Za 007 👻" <casey.balistreri26@ethereal.email>', // sender address
        to: "gayle.medhurst88@ethereal.email", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world from NodeJs", // plain text body
        html: "<b>Hello from Nodejs!!!</b>", // html body
    });

    res.json(info)
}

const sendEmail = async(req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'kiattipan.m@gmail.com', // Change to your recipient
    from: 'kiattipan.m@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send(msg);
    res.json(info);
}

module.exports = sendEmail;