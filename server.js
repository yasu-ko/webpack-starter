const browserSync = require('browser-sync');
const fs = require('fs');
const path = require('path');

browserSync.init({
  ui: {
    port: 3000
  },
  notify: false,
  open: 'external',
  server: 'public_html',
  files: 'public_html/**/*',
  rewriteRules: [
    {
      match: /<!--#include virtual="(.+)" -->/g,
      fn: function (req, res, match, filename) {
        const filePath = path.join(__dirname, 'public_html', filename);
        if (!fs.existsSync(filePath)) {
          return `<span style="color: red">${filename} could not be found</span>`;
        }
        return fs.readFileSync(filePath);
      }
    }
  ],
});
