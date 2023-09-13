const nodemailer = require ('nodemailer')

// const transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "caf938ef99b4cb",
//       pass: "0381003b2bfdc0"
//     }
//   });

const transport = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: "allocassidy24@gmail.com",
      pass: "y0VLHrRXjgvOsAaM"
    }
  });




const sendEmail=async()=>{
    await transport.sendMail({
    to:"allocassidy24@gmail.com",
    from:"cecilia499@gmail",
    subject: "hello king",
    html: "<h1> hello kingdom </h1>"
})


}

sendEmail()