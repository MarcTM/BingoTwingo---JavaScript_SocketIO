const core = require("@actions/core");
const sendmail = require('sendmail')();

const destination = core.getInput("destination");
const syntax_check_job = core.getInput("syntax_check_job");
const job = core.getInput("job2");
const build_statics_job = core.getInput("build_statics_job");
const deploy_job = core.getInput("deploy_job");

 
 console.log(job2)
// sendmail({
//     from: 'marctorresmartinez@gmail.com',
//     to: destination,
//     subject: 'Resultado del workflow ejecutado',
//     html: `
//         <p>Se ha realizado un push en la rama githubActions_improvement que
//         ha provocado la ejecución del workflow Bingo_Workflow con los
//         siguientes resultados</p>

//         <ul>
//             <li>test_execution_job: ${{ job2 }}</li>
//         </ul>
//     `
//   }, function(err, reply) {
//     console.log(err && err.stack);
//     console.dir(reply);
// });