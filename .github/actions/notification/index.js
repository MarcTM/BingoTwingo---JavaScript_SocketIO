const core = require("@actions/core");
const nodemailer = require("nodemailer");

const destination = core.getInput("destination");
const password = core.getInput("email_password");
// const syntax_check_job = core.getInput("job1");
const test_execution_job = core.getInput("job2");
// const build_statics_job = core.getInput("job3");
// const deploy_job = core.getInput("job4");


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
    to: 'marctorresmartinez@gmail.com',
    subject: "Se ha realizado un push en la rama githubActions_improvement que ha provocado la ejecución del workflow Bingo_Workflow con los siguientes resultados: ✔",
    text: "Hello world?",
    html: `
        <ul>
            <li>test_execution_job: ${{ test_execution_job }}</li>
        </ul>
    `,
  });
}

main().catch(console.error); 