const nodemailer = require("nodemailer");
const { employees } = require("../../mongoDB/adminModel");
const { decrypt } = require("../cryptography/decryptData");

const transporter = nodemailer.createTransport({
  service: "gmail",
  // secure: true,
  // requireTLS: true,
  // tls: {
  //   servername: "gmail.com",
  //   rejectUnauthorized: true,
  // },
  auth: {
    user: "lakhwinder.decrypt@gmail.com",
    pass: "gkytizvlasplslfz",
  },
  port: 465,
  host: "smtp.gmail.com",
});
class mailOptions {
  constructor(from, to, subject, text) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.textEncoding = "base64";
    this.date = new Date();
  }
}

const sendMail1 = (mail1) => {
  try {
    transporter.sendMail(mail1);
  } catch (e) {
    console.log(e);
  }
};

const sendMail2 = (mail2) => {
  try {
    transporter.sendMail(mail2);
  } catch (e) {
    console.log(e);
  }
};

const sendEmail = async (pswd, newEmployee) => {
  const empData = {
    name: newEmployee.name,
    email: newEmployee.email,
    employeeId: newEmployee.employeeId,
    password: pswd,
  };
  const mail1Data =
    "Congratulations for being a part of Team Decrypt Block and If you have not recieved Login Credentials Mail then Please check into (Spam)." +
    "\n\n" +
    "Thanks & Regards" +
    "\n" +
    "Lakhwinder Singh" +
    "\n" +
    "Administrator" +
    "\n" +
    "Decrypt Block";
  const mail2Data = `Hi ${newEmployee.name},
    You have been registered on Decrypt Block Tracker
    Employee Id : ${empData.employeeId}
    Password : ${empData.password}`;

  const mail1 = new mailOptions(
    "lakhwinder.decrypt@gmail.com",
    newEmployee.email,
    "Joining Letter",
    mail1Data.toString()
  );
  const mail2 = new mailOptions(
    "lakhwinder.decrypt@gmail.com",
    newEmployee.email,
    "Login Credentials",
    mail2Data.toString()
  );

  await sendMail1(mail1);

  await sendMail2(mail2);
};

module.exports = { sendEmail };
