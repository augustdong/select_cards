loadjs.d("./setedit/main",function(require,module,exports){
var framework = require('framework');
var core = framework.core;
var Model = require('./model.js');
var tmpl = require('./tmpl.html');
var $ = require('jquery');


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
},{"./model.js":"./setedit/model","./tmpl.html":"./setedit/tmpl.html","framework":"./framework/main","jquery":"./jquery/main"});
loadjs.d("./setedit/model",function(require,module,exports){
var Model = function() {
	this.name = "asfasf";
}

module.exports = exports = Model;
},{});
loadjs.d("./setedit/tmpl.html",function(require,module,exports){
module.exports = '<div class="setedit-container">\n' +
    '	<div class="edit-item">\n' +
    '		<div class="holder"></div>\n' +
    '		<textarea placeholder="Type/paste/shout content…">sdfa</textarea>\n' +
    '	</div>\n' +
    '</div>';
},{});
