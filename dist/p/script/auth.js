loadjs.d("./auth/main",function(require,module,exports){
var $ = require('jquery');
var framework = require('framework');
var net = framework.net;

var $elBtnRegister = $('.auth-box .form-item.act .btn-register');
var $elBtnLogin = $('.auth-box .form-item.act .btn-login');
var $elInputAuthName = $('.auth-box .form-item.input input[name=email]');
var $elInputAuthPwd = $('.auth-box .form-item.input input[name=pwd]');
var $elBtnSwitchRegister = $('.auth-box .switch .btn-switch-register');
var $elBtnSwitchLogin = $('.auth-box .switch .btn-switch-login');

var MODE_REGISTER = 'register';
var MODE_LOGIN = 'login';

var TITLE_LOGIN = '登录';
var TITLE_REGISTER = '注册';

var currentMode = MODE_LOGIN;

var onRegister = function() {
	net.ajax({
		url: '/cgi/user/register',
		data: {
			account: $elInputAuthName.val(),
			pwd: $elInputAuthPwd.val()
		}
	}, function() {

	});
}

var onLogin = function() {
	net.ajax({
		url: '/cgi/user/login',
		data: {
			account: $elInputAuthName.val(),
			pwd: $elInputAuthPwd.val()
		}
	}, function() {

	});
}

var onSwitch = function(evt) {
	if (evt.toElement == $elBtnSwitchRegister[0]) {
		setMode(MODE_REGISTER);
	} else {
		setMode(MODE_LOGIN)
	}
}

var refreshMode = function() {
	var mode = getMode();
	if (mode == MODE_REGISTER) {
		$elBtnSwitchRegister.hide();
		$elBtnSwitchLogin.show();
		$elBtnRegister.show();
		$elBtnLogin.hide();
		document.title = TITLE_REGISTER;
	} else {
		$elBtnSwitchRegister.show();
		$elBtnSwitchLogin.hide();
		$elBtnRegister.hide();
		$elBtnLogin.show();
		document.title = TITLE_LOGIN;
	}
}

var initEvt = function() {
	$elBtnRegister.bind('click', onRegister);
	$elBtnLogin.bind('click', onLogin);
	$elBtnSwitchRegister.bind('click', onSwitch);
	$elBtnSwitchLogin.bind('click', onSwitch);
	window.onhashchange = function() {
		refreshMode();
	}
}

var setMode = function(mode) {
	window.location.hash = mode;
}

var getMode = function() {
	var hash = window.location.hash;
	if (hash == '#' + MODE_REGISTER) {
		return MODE_REGISTER;
	} else {
		return TITLE_LOGIN;
	}
}

var init = function() {
	initEvt();
	refreshMode();
}

exports.init = init;


},{"framework":"./framework/main","jquery":"./jquery/main"});
