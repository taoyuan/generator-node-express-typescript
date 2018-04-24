'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('node-typescript', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .on('end', done);
  });

  it('creates project files', function () {
    assert.file([
      '.vscode/tasks.json',
      '.vscode/settings.json',
      'src/greeter.ts',
      'src/index.ts',
      'test/greeter.test.ts',
      'package.json',
      'tsconfig.json',
      '.travis.yml',
      '.editorconfig',
      '.gitignore',
      'LICENSE',
      'README.md'
    ]);
  });

});
