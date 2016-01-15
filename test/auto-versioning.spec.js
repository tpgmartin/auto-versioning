var autoVersioning = require('../index.js')(),
    chai = require('chai'),
    expect = chai.expect;
    
describe('auto-versioning', function () {
  
  it('should read the version from package.json', function () {
    
    var packageJSON = autoVersioning.readFile('./test/test-package.json');
    
    expect(packageJSON.version).to.equal('1.0.0');
    
  });
  
  it('should return the major, minor, and patch versions', function () {
    
    var semVer = autoVersioning.readSemVer('./test/test-package.json');
    
    expect(semVer.major).to.equal('1');
    expect(semVer.minor).to.equal('0');
    expect(semVer.patch).to.equal('0');
    
  });
  
  it('should be able to increment the major version', function () {
    
    var semVer = autoVersioning.readSemVer('./test/test-package.json');
    
    autoVersioning.incrementMajor(semVer);
    
    expect(semVer.major).to.equal('2');
    
  });
  
  it('should be able to increment the minor version', function () {
    
    var semVer = autoVersioning.readSemVer('./test/test-package.json');
    
    autoVersioning.incrementMinor(semVer);
    
    expect(semVer.minor).to.equal('1');
    
  });
  
  it('should be able to increment the patch version', function () {
    
    var semVer = autoVersioning.readSemVer('./test/test-package.json');
    
    autoVersioning.incrementPatch(semVer);
    
    expect(semVer.patch).to.equal('1');
    
  });
  
});