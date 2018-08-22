const childProcess = require('child_process');
const fs = require('fs');

const clone = 'git clone https://github.com/gsi-cyberjapan/gsimaps.git';
const apply = 'cd ./gsimaps && git apply ../assets/override.patch';

console.log('Cloning GSIMaps from GitHub...');

childProcess.exec(clone, (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Applying patch...');

    childProcess.exec(apply, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copying extension file...');

        fs.copyFileSync(
          './assets/override-ui.js',
          './gsimaps/js.lib/override-ui.js'
        );
        fs.copyFileSync('./dist/override.js', './gsimaps/js.lib/override.js');

        console.log('Function extended.');
      }
    });
  }
});
