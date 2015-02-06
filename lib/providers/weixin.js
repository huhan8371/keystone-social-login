/**
 * Weixin provider default settings
 * @type {Object}
 */
var provider = {
	name: 'weixin',
	strategy: {
		module: 'passport-weixin-plus',
		method: 'Strategy'
	},
	fields: {
		uniqueid: 'id',
		linkid: 'openid',
	},
	settings:	{
		clientID:	'clientID',
		clientSecret:	'clientSecret',
	},
	options: {
		clientID:	null,
		clientSecret:	null,
		url: {
			login: '/social/weixin/login',
			callback: '/social/weixin/callback'
		}
	},
	loginId: { name: 'openid', label: 'WeiXin Login' },
	parseProfile: function(jsonProfile) {
		return {
			id: jsonProfile.openid,
			email: null,
			name: jsonProfile.nickname,
			photoUrl: jsonProfile.headimgurl,
            profileUrl:jsonProfile.headimgurl,
			raw: JSON.stringify(jsonProfile)
		};
	}
};

module.exports = provider;
