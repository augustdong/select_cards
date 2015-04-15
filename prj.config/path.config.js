var path = require('path');

var rootPath = path.resolve(__dirname, '..');
var distPath = path.resolve(rootPath, 'dist');
var distPCPath = path.resolve(distPath, 'p');
var srcPath = path.resolve(rootPath, 'src');
var srcPCPath = path.resolve(srcPath, 'p');

// exports
module.exports = exports = {
	rootPath: rootPath,
	distPath: distPath,
	distPCPath: distPCPath,
	srcPath: srcPath,
	srcPCPath: srcPCPath
}