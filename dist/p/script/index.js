loadjs.d("./com/card/binding/flip",function(require,module,exports){
var ko = require('knockout');
var $ = require('jquery');

var flip = function(element, valueAccessor) {
	if (ko.unwrap(valueAccessor())) {
		$(element).addClass('flipped');
	} else {
		$(element).removeClass('flipped');
	}
};

ko.bindingHandlers.comCardFlip = {
	init: function(element, valueAccessor) {
		flip(element, valueAccessor);
	},
	update: function(element, valueAccessor) {
		flip(element, valueAccessor);
    }
};
},{"jquery":"./jquery/main","knockout":"./knockout/main"});
loadjs.d("./com/card/main",function(require,module,exports){
var $ = require('jquery');
var ko = require('knockout');
var tmpl = require('./tmpl.html');
var Model = require('./model.js');

// 注册自定义绑定方法
require('./binding/flip.js');

ko.components.register('com-card', {
	template: tmpl,
	viewModel: Model
});
},{"./binding/flip.js":"./com/card/binding/flip","./model.js":"./com/card/model","./tmpl.html":"./com/card/tmpl.html","jquery":"./jquery/main","knockout":"./knockout/main"});
loadjs.d("./com/card/model",function(require,module,exports){
var ko = require('knockout');
var Model = function() {
	
	this.front = '爱集';
	this.back = '卡片';

	this.flipped = ko.observable(false);

	this.onDoubleClick = function() {
		this.flipped(!this.flipped());
	};
	
};

module.exports = exports = Model;

},{"knockout":"./knockout/main"});
loadjs.d("./com/card/tmpl.html",function(require,module,exports){
module.exports = '<div class="ui-card">\n' +
    '	<div class="inner" data-bind="comCardFlip: $component.flipped, click: $component.onDoubleClick">\n' +
    '		<div class="front item">\n' +
    '			<div class="content" data-bind="text: $component.front"></div>\n' +
    '		</div>\n' +
    '		<div class="back item">\n' +
    '			<div class="content" data-bind="text: $component.back"></div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>';
},{});
loadjs.d("./index/main",function(require,module,exports){
var framework = require('framework');
var core = framework.core;
var ko = require('knockout');
var Model = require('./model.js');
var tmpl = require('./tmpl.html');

// 注册组件
require('com/card');

var model = new Model();

var init = function() {
	core.koApply(model, tmpl, '#container')
}

exports.init = init;
},{"./model.js":"./index/model","./tmpl.html":"./index/tmpl.html","com/card":"./com/card/main","framework":"./framework/main","knockout":"./knockout/main"});
loadjs.d("./index/model",function(require,module,exports){
var Model = function() {
	this.name = "1";
}

module.exports = exports = Model;
},{});
loadjs.d("./index/tmpl.html",function(require,module,exports){
module.exports = '<div>\n' +
    '	<div class="mycard" data-bind=\'component: {\n' +
    '    	name: "com-card",\n' +
    '    	params: {content: "faf"}\n' +
    '    }\'></div>\n' +
    '</div>';
},{});
