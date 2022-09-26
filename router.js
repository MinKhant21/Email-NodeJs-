import express from 'express';
const nodemailer = require('nodemailer');


export const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index')
});
router.post('/send',(req,res)=>{
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'youremail@a.com',
      pass: 'yourpassword'
    }
  });
    const mailOptions = {
        from: "sender address", 
        to: " receivers", 
        subject: "Contact detail", // Subject line
        html: output,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        res.render('index', {msg:'Email has been sent'});
        }
    });

   


});



export default router;