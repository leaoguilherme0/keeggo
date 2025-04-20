const marge = require('mochawesome-report-generator');
const merge = require('mochawesome-merge');
const fs = require('fs');

(async () => {
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\..+/, '')
    .slice(2); 

  const reportName = `${timestamp}_TesteQACommerce`;

  const jsonReport = await merge.merge({
    files: ['./cypress/reports/*.json']
  });

  await marge.create(jsonReport, {
    reportDir: './cypress/reports',
    reportFilename: reportName,
    inline: true,
    charts: true
  });

  fs.readdirSync('./cypress/reports')
    .filter(file => file.endsWith('.json'))
    .forEach(file => fs.unlinkSync(`./cypress/reports/${file}`));

  console.log(`✅ Relatório gerado: cypress/reports/${reportName}.html`);
})();