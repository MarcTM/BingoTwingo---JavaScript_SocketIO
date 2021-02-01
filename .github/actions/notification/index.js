const core = require("@actions/core");
const nodemailer = require("nodemailer");

const destination = core.getInput("destination");
const password = core.getInput("email_password");

let syntax_check_job;
let test_execution_job;
let build_statics_job;
let deploy_job;

core.getInput("job1") == 'success' ? syntax_check_job = 'success' : syntax_check_job = "error";
core.getInput("job2") == 'success' ? test_execution_job = 'success' : test_execution_job = "error";
core.getInput("job3") == 'success' ? build_statics_job = 'success' : build_statics_job = "error";
core.getInput("job4") == 'success' ? deploy_job = 'success' : deploy_job = "error";


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
    to: destination,
    subject: "Se ha realizado un push en la rama githubActions_improvement que ha provocado la ejecución del workflow Bingo_Workflow con los siguientes resultados: ✔",
    text: "Resultados:",
    html: `
        <ul>
            <li>syntax_check_job: ${ syntax_check_job }</li>
            <li>test_execution_job: ${ test_execution_job }</li>
            <li>build_statics_job: ${ build_statics_job }</li>
            <li>deploy_job: ${ deploy_job }</li>
        </ul>
    `,
  });
}

main().catch(console.error); 