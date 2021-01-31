const core = require("@actions/core");
const sendmail = require('sendmail')();

const destination = core.getInput("destination");
const first_job = core.getInput("first_job");
 
sendmail({
    from: 'marctorresmartinez@gmail.com',
    to: destination,
    subject: 'Resultado del workflow ejecutado',
    html: `
        <p>Se ha realizado un push en la rama githubActions_improvement que
        ha provocado la ejecución del workflow Bingo_Workflow con los
        siguientes resultados</p>

        <ul>
            <li>syntax_check_job: ${{ first_job }}</li>
            <li>test_execution_job: resultado asociada</li>
            <li>build_statics_job: resultado asociada</li>
            <li>deploy_job: resultado asociada</li>
        </ul>
    `
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});