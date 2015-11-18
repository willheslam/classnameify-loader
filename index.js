const classnameify = require('classnameify');

module.exports = function(source, map) {
	if(this.cacheable) this.cacheable();
	return classnameify(this.exec(source));
};