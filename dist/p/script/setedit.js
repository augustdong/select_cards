loadjs.d("./setedit/cardeditbox/main",function(require,module,exports){
var ko = require('knockout');
var tmpl = require('./tmpl.html');
var Model = require('./model.js');

ko.components.register('setedit-cardeditbox', {
	template: tmpl,
	viewModel: Model
});
},{"./model.js":"./setedit/cardeditbox/model","./tmpl.html":"./setedit/cardeditbox/tmpl.html","knockout":"./knockout/main"});
loadjs.d("./setedit/cardeditbox/model",function(require,module,exports){
var Model = function() {
	this.front = "asfasf";
	this.back = "afsadfsadfsdafsa";
}

module.exports = exports = Model;
},{});
loadjs.d("./setedit/cardeditbox/tmpl.html",function(require,module,exports){
module.exports = '<div class="cardeditbox">\n' +
    '	<div class="auto-expand-textarea front">\n' +
    '		<div class="holder">\n' +
    '		</div>\n' +
    '		<textarea class="textarea">sdfa</textarea>\n' +
    '	</div>\n' +
    '	<div class="auto-expand-textarea back">\n' +
    '		<div class="holder">\n' +
    '		</div>\n' +
    '		<textarea class="textarea">sdfa</textarea>\n' +
    '	</div>\n' +
    '</div>';
},{});
loadjs.d("./setedit/main",function(require,module,exports){
var framework = require('framework');
var core = framework.core;
var Model = require('./model.js');
var tmpl = require('./tmpl.html');
var $ = require('jquery');

// 注册组件
require('./cardeditbox');

var model = new Model();

var init = function() {
	core.koApply(model, tmpl, '#container');

	var a = $('#dd');
	a.bind('click', function() {
		console.log(a[0].innerHTML)
	});

	var b = $('#bb');
	b.bind('click', function() {
		console.log(b[0].value)
	});
}

exports.init = init;
},{"./cardeditbox":"./setedit/cardeditbox/main","./model.js":"./setedit/model","./tmpl.html":"./setedit/tmpl.html","framework":"./framework/main","jquery":"./jquery/main"});
loadjs.d("./setedit/model",function(require,module,exports){
var Model = function() {
	this.name = "asfasf";
}

module.exports = exports = Model;
},{});
loadjs.d("./setedit/tmpl.html",function(require,module,exports){
module.exports = '<div class="setedit-container">\n' +
    '	<div class="cardeditbox-container" data-bind=\'component: {\n' +
    '    	name: "setedit-cardeditbox"\n' +
    '    }\'></div>\n' +
    '</div>';
},{});
