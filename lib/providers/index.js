/**
 * available auth providers
 * @type {Object}
 */
var providers = {
	google: require('./google'),
	facebook: require('./facebook'),
	twitter: require('./twitter'),
	github: require('./github'),
	weixin: require('./weixin')
};

module.exports = providers;
