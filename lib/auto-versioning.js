var fs = require('fs');

module.exports = function autoVersioningRunner() {
  
  var file, semVer;
  var version = {};
  
  function readFile (path) {
    return JSON.parse(fs.readFileSync(path));;
  }
  
  function readSemVer (path) {
    file = readFile(path);
    semVer = file.version.split('.');
    version.major = semVer[0];
    version.minor = semVer[1];
    version.patch = semVer[2];
    return version
  }
  
  function incrementMajor (version) {
    version.major = String(parseInt(version.major) + 1);
    return version;
  }
  
  function incrementMinor (version) {
    version.minor = String(parseInt(version.minor) + 1);
    return version;
  }
  
  function incrementPatch (version) {
    version.patch = String(parseInt(version.patch) + 1);
    return version;
  }
  
  return {
    incrementMajor: incrementMajor,
    incrementMinor: incrementMinor,
    incrementPatch: incrementPatch,
    readFile: readFile,
    readSemVer: readSemVer
  }
  
}
