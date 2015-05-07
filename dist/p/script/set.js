loadjs.d("./com/set/main",function(require,module,exports){
var $ = require('jquery');
var ko = require('knockout');
var tmpl = require('./tmpl.html');
var Model = require('./model.js');

// 注册组件
require('com/card');

ko.components.register('com-set', {
	template: tmpl,
	viewModel: Model
});
},{"./model.js":"./com/set/model","./tmpl.html":"./com/set/tmpl.html","com/card":"./com/card/main","jquery":"./jquery/main","knockout":"./knockout/main"});
loadjs.d("./com/set/model",function(require,module,exports){
var ko = require('knockout');

var Model = function() {
	
	this.id = "123131";

	this.title = "常错的五十个汉字读音";

	this.list = [
		{
			front: 'bbbb',
			back: 'safasf'
		}, {
			front: 'bbbb',
			back: 'safasf'
		}
	];
	
};

module.exports = exports = Model;

},{"knockout":"./knockout/main"});
loadjs.d("./com/set/tmpl.html",function(require,module,exports){
module.exports = '<div class="com-set">\n' +
    '	<div class="card-container current" data-bind=\'component: {\n' +
    '    	name: "com-card",\n' +
    '    	params: {content: "faf"}\n' +
    '    }\'></div>\n' +
    '</div>';
},{});
loadjs.d("./set/main",function(require,module,exports){
var framework = require('framework');
var core = framework.core;
var ko = require('knockout');
var Model = require('./model.js');
var tmpl = require('./tmpl.html');

// 注册组件
require('com/set');

var model = new Model();

var init = function() {
	core.koApply(model, tmpl, '#container')
}

exports.init = init;
},{"./model.js":"./set/model","./tmpl.html":"./set/tmpl.html","com/set":"./com/set/main","framework":"./framework/main","knockout":"./knockout/main"});
loadjs.d("./set/model",function(require,module,exports){
var Model = function() {
	this.name = "1sdfaf";
}

module.exports = exports = Model;
},{});
loadjs.d("./set/tmpl.html",function(require,module,exports){
module.exports = '<div class="set-container">\n' +
    '	<div class="set" data-bind=\'component: {\n' +
    '    	name: "com-set"\n' +
    '    }\'></div>\n' +
    '</div>';
},{});
