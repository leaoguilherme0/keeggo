const marge = require('mochawesome-report-generator');
const merge = require('mochawesome-merge');
const fs = require('fs');

(async () => {
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\..+/, '')
    .slice(2); // YYMMDDHHMMSS

  const reportName = `${timestamp}_TesteQACommerce`;

  // Faz o merge dos arquivos JSON gerados pelos testes
  const jsonReport = await merge.merge({
    files: ['./cypress/reports/*.json']
  });

  // Gera o HTML com o nome desejado
  await marge.create(jsonReport, {
    reportDir: './cypress/reports',
    reportFilename: reportName,
    inline: true,
    charts: true
  });

  // Apaga todos os arquivos JSON após gerar o HTML
  fs.readdirSync('./cypress/reports')
    .filter(file => file.endsWith('.json'))
    .forEach(file => fs.unlinkSync(`./cypress/reports/${file}`));

  console.log(`✅ Relatório gerado: cypress/reports/${reportName}.html`);
})();