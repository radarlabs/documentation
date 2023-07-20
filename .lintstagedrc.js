const path = require('path')
const childProcess = require('child_process');

module.exports = {
  '*.mdx': [
    (filenames) => {
      // check print spell-check output to console, dont block commit
      console.log('Spell-checking files:', filenames);
      childProcess.execSync(`cspell -c cspell.json ${filenames.join(' ')}`, { stdio: 'inherit' });
      return []; // success
    },
  ],
}
