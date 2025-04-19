const marge = require('mochawesome-report-generator');
const merge = require('mochawesome-merge');
const fs = require('fs');
const path = require('path');

(async () => {
  const timestamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '');
  const reportName = `{timestamp}_TesteQACommerce`;

  const jsonReport = await merge.merge({
    files: ['./cypress/reports/*.json']
  });

  await marge.create(jsonReport, {
    reportDir: './cypress/reports',
    reportFilename: reportName
  });
})();