

//=====================================initialise the epxress library ======


const express = require('express')


//=========================================give it a variable =====================

const app = express();

const nodemailer = require('nodemailer')

const port = process.env.PORT || 7070;

app.get("/", (req, res) =>{
    res.status(200).send("sever is running ");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mapitsokwena@gmail.com',
          pass: 'yourpassword'
        }
      });
      
      const mailOptions = {
        from: 'mapitsokwena@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});


app.listen(port, process.env.baseUrl , () =>{  
    console.log(`running at port  ${port}.`) 
 })
