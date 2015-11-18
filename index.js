const classnameify = require('classnameify');

module.exports = function(source, map) {
	if(this.cacheable) this.cacheable();
	return classnameify((typeof obj === 'string') ? this.exec(source) : source);
};