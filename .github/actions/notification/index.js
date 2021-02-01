const core = require("@actions/core");
const sendmail = require('sendmail')();

const destination = core.getInput("destination");
const password = core.getInput("email_password");
// const syntax_check_job = core.getInput("syntax_check_job");
// const test_execution_job = core.getInput("test_execution_job");
// const build_statics_job = core.getInput("build_statics_job");
// const deploy_job = core.getInput("deploy_job");

const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'marctorresmartinez@gmail.com',
      pass: password,
    },
  });


  let info = await transporter.sendMail({
    from: '"Marc Torres 👻" <marctorresmartinez@.com>',
    to: "marctorresmartinez@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
}

main().catch(console.error); 