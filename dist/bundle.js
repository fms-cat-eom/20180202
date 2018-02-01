(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/extrude-path.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var extrudePath = function extrudePath(v, top, bottom) {
  var paths = v.length / 2;

  var pos = new Float32Array(paths * 18);
  var nor = new Float32Array(paths * 18);

  for (var i = 0; i < paths; i++) {
    var x0 = v[i * 2];
    var y0 = v[i * 2 + 1];
    var x1 = v[(i + 1) % paths * 2];
    var y1 = v[(i + 1) % paths * 2 + 1];
    pos[i * 18] = x0;
    pos[i * 18 + 1] = y0;
    pos[i * 18 + 2] = bottom;
    pos[i * 18 + 3] = x1;
    pos[i * 18 + 4] = y1;
    pos[i * 18 + 5] = bottom;
    pos[i * 18 + 6] = x1;
    pos[i * 18 + 7] = y1;
    pos[i * 18 + 8] = top;
    pos[i * 18 + 9] = x0;
    pos[i * 18 + 10] = y0;
    pos[i * 18 + 11] = bottom;
    pos[i * 18 + 12] = x1;
    pos[i * 18 + 13] = y1;
    pos[i * 18 + 14] = top;
    pos[i * 18 + 15] = x0;
    pos[i * 18 + 16] = y0;
    pos[i * 18 + 17] = top;

    var dx = x1 - x0;
    var dy = y1 - y0;
    var l = Math.sqrt(dx * dx + dy * dy);
    var nx = dy / l;
    var ny = -dx / l;
    for (var j = 0; j < 6; j++) {
      nor[i * 18 + j * 3] = nx;
      nor[i * 18 + j * 3 + 1] = ny;
      nor[i * 18 + j * 3 + 2] = 0;
    }
  }

  return {
    pos: pos,
    nor: nor
  };
};

exports.default = extrudePath;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/letters.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [[0, 0, 1, 0, 1, 1.5, 3.5, 1.5, 3.5, 2.5, 1, 2.5, 1, 4, 4, 4, 4, 0, 5, 0, 5, 4.5, 4.5, 5, 0.5, 5, 0, 4.5], [0, 0, 4.5, 0, 5, 0.5, 5, 2, 4.5, 2.5, 5, 3, 5, 4.5, 4.5, 5, 0, 5, 0, 4, 4, 4, 4, 3, 1.5, 3, 1.5, 2, 4, 2, 4, 1, 1, 1, 1, 3.5, 0, 3.5], [0, 0.5, 0.5, 0, 5, 0, 5, 1, 1, 1, 1, 4, 5, 4, 5, 5, 0.5, 5, 0, 4.5], [0, 0, 4.5, 0, 5, 0.5, 5, 4.5, 4.5, 5, 0, 5, 0, 4, 4, 4, 4, 1, 1, 1, 1, 3.5, 0, 3.5], [0, 0.5, 0.5, 0, 5, 0, 5, 1, 1, 1, 1, 2, 5, 2, 5, 3, 1, 3, 1, 4, 5, 4, 5, 5, 0.5, 5, 0, 4.5], [0, 0, 1, 0, 1, 2, 5, 2, 5, 3, 1, 3, 1, 4, 5, 4, 5, 5, 0.5, 5, 0, 4.5], [0, 0.5, 0.5, 0, 5, 0, 5, 2, 4, 2, 4, 1, 1, 1, 1, 4, 5, 4, 5, 5, 0.5, 5, 0, 4.5], [0, 0, 1, 0, 1, 2, 4, 2, 4, 0, 5, 0, 5, 5, 4, 5, 4, 3, 1, 3, 1, 5, 0, 5], [2, 0, 3, 0, 3, 5, 2, 5], [0, 0.5, 0.5, 0, 4.5, 0, 5, 0.5, 5, 5, 4, 5, 4, 1, 1, 1, 1, 2, 0, 2], [0, 0, 1, 0, 1, 2, 4, 2, 4, 0, 5, 0, 5, 2.5, 4.5, 3, 4, 3, 5, 5, 4, 5, 3, 3, 1, 3, 1, 5, 0, 5], [0, 0, 5, 0, 5, 1, 1, 1, 1, 5, 0, 5], [0, 0, 1, 0, 1, 4, 2, 4, 2, 0, 3, 0, 3, 4, 4, 4, 4, 0, 5, 0, 5, 4.5, 4.5, 5, 0, 5], [0, 0, 1, 0, 1, 4, 4, 4, 4, 0, 5, 0, 5, 4.5, 4.5, 5, 0, 5], [0, 0.5, 0.5, 0, 4.5, 0, 5, 0.5, 5, 4.5, 4.5, 5, 4, 5, 4, 1, 1, 1, 1, 4, 3.5, 4, 3.5, 5, 0.5, 5, 0, 4.5], [0, 0, 1, 0, 1, 4, 4, 4, 4, 3, 1.5, 3, 1.5, 2, 4.5, 2, 5, 2.5, 5, 4.5, 4.5, 5, 0, 5], [0, 0.5, 0.5, 0, 5, 0, 5, 0.5, 4.5, 1, 1, 1, 1, 4, 4, 4, 4, 1.5, 5, 1.5, 5, 4.5, 4.5, 5, 0.5, 5, 0, 4.5], [0, 0, 1, 0, 1, 4, 4, 4, 4, 3, 1.5, 3, 1.5, 2, 2.9, 2, 3.9, 0, 5, 0, 4, 2, 4.5, 2, 5, 2.5, 5, 4.5, 4.5, 5, 0, 5], [0, 0, 4.5, 0, 5, 0.5, 5, 2.5, 4.5, 3, 1, 3, 1, 4, 5, 4, 5, 5, 0.5, 5, 0, 4.5, 0, 2.5, 0.5, 2, 4, 2, 4, 1, 0, 1], [2, 0, 3, 0, 3, 4, 5, 4, 5, 5, 0, 5, 0, 4, 2, 4], [0, 0.5, 0.5, 0, 4.5, 0, 5, 0.5, 5, 5, 4, 5, 4, 1, 1, 1, 1, 5, 0, 5], [0, 5, 0, 0, 4.5, 0, 5, 0.5, 5, 5, 4, 5, 4, 1, 1, 1, 1, 5], [0, 0.5, 0.5, 0, 4.5, 0, 5, 0.5, 5, 5, 4, 5, 4, 1, 3, 1, 3, 5, 2, 5, 2, 1, 1, 1, 1, 5, 0, 5], [0, 0, 1, 0, 1, 2, 4, 2, 4, 0, 5, 0, 5, 2, 4.5, 2.5, 5, 3, 5, 5, 4, 5, 4, 3, 1, 3, 1, 5, 0, 5, 0, 3, 0.5, 2.5, 0, 2], [0, 5, 0, 2.5, 0.5, 2, 4, 2, 4, 1, 0, 1, 0, 0, 4.5, 0, 5, 0.5, 5, 5, 4, 5, 4, 3, 1, 3, 1, 5], [0, 0, 5, 0, 5, 1, 1, 1, 1, 2, 4.5, 2, 5, 2.5, 5, 5, 0, 5, 0, 4, 4, 4, 4, 3, 0.5, 3, 0, 2.5]];

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/glcat-path-gui.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _glcatPath = require('./glcat-path');

var _glcatPath2 = _interopRequireDefault(_glcatPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var requiredFields = function requiredFields(object, nanithefuck, fields) {
  fields.map(function (field) {
    if (typeof object[field] === "undefined") {
      throw "GLCat-Path: " + field + " is required for " + nanithefuck;
    }
  });
};

var PathGUI = function (_Path) {
  _inherits(PathGUI, _Path);

  function PathGUI(glCat, params) {
    _classCallCheck(this, PathGUI);

    var _this = _possibleConstructorReturn(this, (PathGUI.__proto__ || Object.getPrototypeOf(PathGUI)).call(this, glCat, params));

    var it = _this;

    requiredFields(params, "params", ["canvas", "el"]);

    it.gui = { parent: it.params.el };

    it.gui.info = document.createElement("span");
    it.gui.parent.appendChild(it.gui.info);

    it.gui.range = document.createElement("input");
    it.gui.range.type = "range";
    it.gui.range.min = 0;
    it.gui.range.max = 0;
    it.gui.range.step = 1;
    it.gui.parent.appendChild(it.gui.range);

    it.dateList = new Array(30).fill(0);
    it.dateListIndex = 0;
    it.totalFrames = 0;
    it.fps = 0;
    it.currentIndex = 0;
    it.viewName = "";
    it.viewIndex = 0;

    var gl = glCat.gl;
    var vboQuad = glCat.createVertexbuffer([-1, -1, 1, -1, -1, 1, 1, 1]);
    it.add({
      __PathGuiReturn: {
        width: it.params.canvas.width,
        height: it.params.canvas.height,
        vert: "attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}",
        frag: "precision highp float;uniform vec2 r;uniform sampler2D s;void main(){gl_FragColor=texture2D(s,gl_FragCoord.xy/r);}",
        blend: [gl.ONE, gl.ONE],
        clear: [0.0, 0.0, 0.0, 1.0],
        func: function func(_p, params) {
          gl.viewport(0, 0, it.params.canvas.width, it.params.canvas.height);
          glCat.uniform2fv('r', [it.params.canvas.width, it.params.canvas.height]);

          glCat.attribute('p', vboQuad, 2);
          glCat.uniformTexture('s', params.input, 0);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
      }
    });
    return _this;
  }

  _createClass(PathGUI, [{
    key: 'begin',
    value: function begin() {
      var it = this;

      it.currentIndex = 0;
    }
  }, {
    key: 'end',
    value: function end() {
      var it = this;

      it.gui.range.max = Math.max(it.gui.range.max, it.currentIndex);
      it.currentIndex = 0;

      var now = +new Date() * 1E-3;
      it.dateList[it.dateListIndex] = now;
      it.dateListIndex = (it.dateListIndex + 1) % it.dateList.length;
      it.fps = ((it.dateList.length - 1) / (now - it.dateList[it.dateListIndex])).toFixed(1);

      it.totalFrames++;

      it.gui.info.innerText = "Path: " + it.viewName + " (" + it.viewIndex + ")\n" + it.fps + " FPS\n" + it.totalFrames + " frames\n";
    }
  }, {
    key: 'render',
    value: function render(name, params) {
      var it = this;

      it.currentIndex++;
      var view = parseInt(it.gui.range.value);

      if (it.currentIndex <= view || view === 0) {
        it.viewName = view === 0 ? "*Full*" : name;
        it.viewIndex = it.currentIndex;

        _get(PathGUI.prototype.__proto__ || Object.getPrototypeOf(PathGUI.prototype), 'render', this).call(this, name, params);

        if (it.currentIndex === view) {
          var t = params && params.target ? params.target : it.paths[name].framebuffer;

          if (t && t.framebuffer) {
            var i = t.textures ? t.textures[0] : t.texture;
            if (it.params.stretch) {
              _get(PathGUI.prototype.__proto__ || Object.getPrototypeOf(PathGUI.prototype), 'render', this).call(this, "__PathGuiReturn", {
                target: PathGUI.nullFb,
                input: i,
                width: it.params.canvas.width,
                height: it.params.canvas.height
              });
            } else {
              it.params.canvas.width = (params ? params.width : 0) || it.paths[name].width || it.params.width;
              it.params.canvas.height = (params ? params.height : 0) || it.paths[name].height || it.params.height;
              _get(PathGUI.prototype.__proto__ || Object.getPrototypeOf(PathGUI.prototype), 'render', this).call(this, "__PathGuiReturn", {
                target: PathGUI.nullFb,
                input: i
              });
            }
          }
        }
      }
    }
  }]);

  return PathGUI;
}(_glcatPath2.default);

exports.default = PathGUI;

},{"./glcat-path":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/glcat-path.js"}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/glcat-path.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var requiredFields = function requiredFields(object, nanithefuck, fields) {
  fields.map(function (field) {
    if (typeof object[field] === "undefined") {
      throw "GLCat-Path: " + field + " is required for " + nanithefuck;
    }
  });
};

var Path = function () {
  function Path(glCat, params) {
    _classCallCheck(this, Path);

    var it = this;

    it.glCat = glCat;
    it.gl = glCat.gl;

    it.paths = {};
    it.globalFunc = function () {};
    it.params = params || {};
  }

  _createClass(Path, [{
    key: "add",
    value: function add(paths) {
      var it = this;

      for (var name in paths) {
        var path = paths[name];
        requiredFields(path, "path object", ["width", "height", "vert", "frag"]);
        it.paths[name] = path;

        if (typeof path.depthTest === "undefined") {
          path.depthTest = true;
        }
        if (typeof path.blend === "undefined") {
          path.blend = [it.gl.SRC_ALPHA, it.gl.ONE_MINUS_SRC_ALPHA];
        }

        if (path.framebuffer) {
          if (path.drawbuffers) {
            path.framebuffer = it.glCat.createDrawBuffers(path.width, path.height, path.drawbuffers);
          } else if (path.float) {
            path.framebuffer = it.glCat.createFloatFramebuffer(path.width, path.height);
          } else {
            path.framebuffer = it.glCat.createFramebuffer(path.width, path.height);
          }
        }

        path.program = it.glCat.createProgram(path.vert, path.frag);
      }
    }
  }, {
    key: "render",
    value: function render(name, params) {
      var _it$gl;

      var it = this;

      var path = it.paths[name];
      if (!path) {
        throw "GLCat-Path: The path called " + name + " is not defined!";
      }

      if (!params) {
        params = {};
      }
      params.framebuffer = typeof params.target !== "undefined" ? params.target.framebuffer : path.framebuffer ? path.framebuffer.framebuffer : null;

      var width = params.width || path.width;
      var height = params.height || path.height;

      it.gl.viewport(0, 0, width, height);
      it.glCat.useProgram(path.program);
      it.gl.bindFramebuffer(it.gl.FRAMEBUFFER, params.framebuffer);
      if (it.params.drawbuffers) {
        it.glCat.drawBuffers(path.drawbuffers ? path.drawbuffers : params.framebuffer === null ? [it.gl.BACK] : [it.gl.COLOR_ATTACHMENT0]);
      }
      (_it$gl = it.gl).blendFunc.apply(_it$gl, _toConsumableArray(path.blend));
      if (path.clear) {
        var _it$glCat;

        (_it$glCat = it.glCat).clear.apply(_it$glCat, _toConsumableArray(path.clear));
      }
      path.depthTest ? it.gl.enable(it.gl.DEPTH_TEST) : it.gl.disable(it.gl.DEPTH_TEST);

      it.glCat.uniform2fv('resolution', [width, height]);
      it.globalFunc(path, params);

      if (path.func) {
        path.func(path, params);
      }
    }
  }, {
    key: "resize",
    value: function resize(name, width, height) {
      var it = this;

      var path = it.paths[name];

      path.width = width;
      path.height = height;

      if (path.framebuffer) {
        if (it.params.drawbuffers && path.drawbuffers) {
          path.framebuffer = it.glCat.createDrawBuffers(path.width, path.height, path.drawbuffers);
        } else if (path.float) {
          it.glCat.resizeFloatFramebuffer(path.framebuffer, path.width, path.height);
        } else {
          it.glCat.resizeFramebuffer(path.framebuffer, path.width, path.height);
        }
      }

      if (typeof path.onresize === "function") {
        path.onresize(path, width, height);
      }
    }
  }, {
    key: "setGlobalFunc",
    value: function setGlobalFunc(func) {
      this.globalFunc = func;
    }
  }, {
    key: "fb",
    value: function fb(name) {
      if (!this.paths[name]) {
        throw "glcat-path.fb: path called " + name + " is not defined";
      }
      if (!this.paths[name].framebuffer) {
        throw "glcat-path.fb: there is no framebuffer for the path " + name;
      }

      return this.paths[name].framebuffer;
    }
  }]);

  return Path;
}();

Path.nullFb = { framebuffer: null };

exports.default = Path;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/glcat.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GLCat = function () {
	function GLCat(_gl) {
		_classCallCheck(this, GLCat);

		var it = this;

		it.gl = _gl;
		var gl = it.gl;

		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		it.extensions = {};

		it.currentProgram = null;
	}

	_createClass(GLCat, [{
		key: "getExtension",
		value: function getExtension(_name, _throw) {
			var it = this;
			var gl = it.gl;

			if ((typeof _name === "undefined" ? "undefined" : _typeof(_name)) === "object" && _name.isArray()) {
				return _name.every(function (name) {
					return it.getExtension(name, _throw);
				});
			} else if (typeof _name === "string") {
				if (it.extensions[_name]) {
					return it.extensions[_name];
				} else {
					it.extensions[_name] = gl.getExtension(_name);
					if (it.extensions[_name]) {
						return it.extensions[_name];
					} else {
						if (_throw) {
							throw console.error("The extension \"" + _name + "\" is not supported");
						}
						return false;
					}
				}
				return !!it.extensions[_name];
			} else {
				throw "GLCat.getExtension: _name must be string or array";
			}
		}
	}, {
		key: "createProgram",
		value: function createProgram(_vert, _frag, _onError) {
			var it = this;
			var gl = it.gl;

			var error = void 0;
			if (typeof _onError === 'function') {
				error = _onError;
			} else {
				error = function error(_str) {
					console.error(_str);
				};
			}

			var vert = gl.createShader(gl.VERTEX_SHADER);
			gl.shaderSource(vert, _vert);
			gl.compileShader(vert);
			if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS)) {
				error(gl.getShaderInfoLog(vert));
				return null;
			}

			var frag = gl.createShader(gl.FRAGMENT_SHADER);
			gl.shaderSource(frag, _frag);
			gl.compileShader(frag);
			if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS)) {
				error(gl.getShaderInfoLog(frag));
				return null;
			}

			var program = gl.createProgram();
			gl.attachShader(program, vert);
			gl.attachShader(program, frag);
			gl.linkProgram(program);
			if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
				program.locations = {};
				return program;
			} else {
				error(gl.getProgramInfoLog(program));
				return null;
			}
		}
	}, {
		key: "useProgram",
		value: function useProgram(_program) {
			var it = this;
			var gl = it.gl;

			gl.useProgram(_program);
			it.currentProgram = _program;
		}
	}, {
		key: "createVertexbuffer",
		value: function createVertexbuffer(_array) {
			var it = this;
			var gl = it.gl;

			var buffer = gl.createBuffer();

			if (_array) {
				it.setVertexbuffer(buffer, _array);
			}

			return buffer;
		}
	}, {
		key: "setVertexbuffer",
		value: function setVertexbuffer(_buffer, _array, _mode) {
			var it = this;
			var gl = it.gl;

			var mode = _mode || gl.STATIC_DRAW;

			gl.bindBuffer(gl.ARRAY_BUFFER, _buffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(_array), mode);
			gl.bindBuffer(gl.ARRAY_BUFFER, null);

			_buffer.length = _array.length;
		}
	}, {
		key: "createIndexbuffer",
		value: function createIndexbuffer(_array) {
			var it = this;
			var gl = it.gl;

			var buffer = gl.createBuffer();

			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(_array), gl.STATIC_DRAW);
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

			buffer.length = _array.length;
			return buffer;
		}
	}, {
		key: "getAttribLocation",
		value: function getAttribLocation(_name) {
			var it = this;
			var gl = it.gl;

			var location = void 0;
			if (it.currentProgram.locations[_name]) {
				location = it.currentProgram.locations[_name];
			} else {
				location = gl.getAttribLocation(it.currentProgram, _name);
				it.currentProgram.locations[_name] = location;
			}

			return location;
		}
	}, {
		key: "attribute",
		value: function attribute(_name, _buffer, _stride, _div) {
			var it = this;
			var gl = it.gl;

			if (_div) {
				it.getExtension("ANGLE_instanced_arrays", true);
			}

			var location = it.getAttribLocation(_name);

			gl.bindBuffer(gl.ARRAY_BUFFER, _buffer);
			gl.enableVertexAttribArray(location);
			gl.vertexAttribPointer(location, _stride, gl.FLOAT, false, 0, 0);

			var ext = it.getExtension("ANGLE_instanced_arrays");
			if (ext) {
				var div = _div || 0;
				ext.vertexAttribDivisorANGLE(location, div);
			}

			gl.bindBuffer(gl.ARRAY_BUFFER, null);
		}
	}, {
		key: "getUniformLocation",
		value: function getUniformLocation(_name) {
			var it = this;
			var gl = it.gl;

			var location = void 0;

			if (typeof it.currentProgram.locations[_name] !== "undefined") {
				location = it.currentProgram.locations[_name];
			} else {
				location = gl.getUniformLocation(it.currentProgram, _name);
				it.currentProgram.locations[_name] = location;
			}

			return location;
		}
	}, {
		key: "uniform1i",
		value: function uniform1i(_name, _value) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.uniform1i(location, _value);
		}
	}, {
		key: "uniform1f",
		value: function uniform1f(_name, _value) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.uniform1f(location, _value);
		}
	}, {
		key: "uniform2fv",
		value: function uniform2fv(_name, _value) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.uniform2fv(location, _value);
		}
	}, {
		key: "uniform3fv",
		value: function uniform3fv(_name, _value) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.uniform3fv(location, _value);
		}
	}, {
		key: "uniform4fv",
		value: function uniform4fv(_name, _value) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.uniform4fv(location, _value);
		}
	}, {
		key: "uniformMatrix4fv",
		value: function uniformMatrix4fv(_name, _value, _transpose) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.uniformMatrix4fv(location, _transpose || false, _value);
		}
	}, {
		key: "uniformCubemap",
		value: function uniformCubemap(_name, _texture, _number) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.activeTexture(gl.TEXTURE0 + _number);
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, _texture);
			gl.uniform1i(location, _number);
		}
	}, {
		key: "uniformTexture",
		value: function uniformTexture(_name, _texture, _number) {
			var it = this;
			var gl = it.gl;

			var location = it.getUniformLocation(_name);
			gl.activeTexture(gl.TEXTURE0 + _number);
			gl.bindTexture(gl.TEXTURE_2D, _texture);
			gl.uniform1i(location, _number);
		}
	}, {
		key: "createTexture",
		value: function createTexture() {
			var it = this;
			var gl = it.gl;

			var texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.bindTexture(gl.TEXTURE_2D, null);

			return texture;
		}
	}, {
		key: "textureFilter",
		value: function textureFilter(_texture, _filter) {
			var it = this;
			var gl = it.gl;

			gl.bindTexture(gl.TEXTURE_2D, _texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, _filter);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, _filter);
			gl.bindTexture(gl.TEXTURE_2D, null);
		}
	}, {
		key: "textureWrap",
		value: function textureWrap(_texture, _wrap) {
			var it = this;
			var gl = it.gl;

			gl.bindTexture(gl.TEXTURE_2D, _texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, _wrap);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, _wrap);
			gl.bindTexture(gl.TEXTURE_2D, null);
		}
	}, {
		key: "setTexture",
		value: function setTexture(_texture, _image) {
			var it = this;
			var gl = it.gl;

			gl.bindTexture(gl.TEXTURE_2D, _texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _image);
			gl.bindTexture(gl.TEXTURE_2D, null);
		}
	}, {
		key: "setTextureFromArray",
		value: function setTextureFromArray(_texture, _width, _height, _array) {
			var it = this;
			var gl = it.gl;

			gl.bindTexture(gl.TEXTURE_2D, _texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(_array));
			gl.bindTexture(gl.TEXTURE_2D, null);
		}
	}, {
		key: "setTextureFromFloatArray",
		value: function setTextureFromFloatArray(_texture, _width, _height, _array) {
			var it = this;
			var gl = it.gl;

			it.getExtension("OES_texture_float", true);

			gl.bindTexture(gl.TEXTURE_2D, _texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.FLOAT, new Float32Array(_array));
			if (!it.getExtension("OES_texture_float_linear")) {
				it.textureFilter(_texture, gl.NEAREST);
			}
			gl.bindTexture(gl.TEXTURE_2D, null);
		}
	}, {
		key: "copyTexture",
		value: function copyTexture(_texture, _width, _height) {
			var it = this;
			var gl = it.gl;

			gl.bindTexture(gl.TEXTURE_2D, _texture);
			gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, _width, _height, 0);
			gl.bindTexture(gl.TEXTURE_2D, null);
		}
	}, {
		key: "createCubemap",
		value: function createCubemap(_arrayOfImage) {
			var it = this;
			var gl = it.gl;

			// order : X+, X-, Y+, Y-, Z+, Z-
			var texture = gl.createTexture();

			gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
			for (var i = 0; i < 6; i++) {
				gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _arrayOfImage[i]);
			}
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);

			return texture;
		}
	}, {
		key: "createFramebuffer",
		value: function createFramebuffer(_width, _height) {
			var it = this;
			var gl = it.gl;

			var framebuffer = {};
			framebuffer.framebuffer = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer.framebuffer);

			framebuffer.depth = gl.createRenderbuffer();
			gl.bindRenderbuffer(gl.RENDERBUFFER, framebuffer.depth);
			gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, _width, _height);
			gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, framebuffer.depth);

			framebuffer.texture = it.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, framebuffer.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
			gl.bindTexture(gl.TEXTURE_2D, null);

			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, framebuffer.texture, 0);
			gl.bindFramebuffer(gl.FRAMEBUFFER, null);

			return framebuffer;
		}
	}, {
		key: "resizeFramebuffer",
		value: function resizeFramebuffer(_framebuffer, _width, _height) {
			var it = this;
			var gl = it.gl;

			gl.bindFramebuffer(gl.FRAMEBUFFER, _framebuffer.framebuffer);

			gl.bindRenderbuffer(gl.RENDERBUFFER, _framebuffer.depth);
			gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, _width, _height);
			gl.bindRenderbuffer(gl.RENDERBUFFER, null);

			gl.bindTexture(gl.TEXTURE_2D, _framebuffer.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
			gl.bindTexture(gl.TEXTURE_2D, null);

			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		}
	}, {
		key: "createFloatFramebuffer",
		value: function createFloatFramebuffer(_width, _height) {
			var it = this;
			var gl = it.gl;

			it.getExtension("OES_texture_float", true);

			var framebuffer = {};
			framebuffer.framebuffer = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer.framebuffer);

			framebuffer.depth = gl.createRenderbuffer();
			gl.bindRenderbuffer(gl.RENDERBUFFER, framebuffer.depth);
			gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, _width, _height);
			gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, framebuffer.depth);

			framebuffer.texture = it.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, framebuffer.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.FLOAT, null);
			if (!it.getExtension("OES_texture_float_linear")) {
				it.textureFilter(framebuffer.texture, gl.NEAREST);
			}
			gl.bindTexture(gl.TEXTURE_2D, null);

			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, framebuffer.texture, 0);
			gl.bindFramebuffer(gl.FRAMEBUFFER, null);

			return framebuffer;
		}
	}, {
		key: "resizeFloatFramebuffer",
		value: function resizeFloatFramebuffer(_framebuffer, _width, _height) {
			var it = this;
			var gl = it.gl;

			gl.bindFramebuffer(gl.FRAMEBUFFER, _framebuffer.framebuffer);

			gl.bindRenderbuffer(gl.RENDERBUFFER, _framebuffer.depth);
			gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, _width, _height);
			gl.bindRenderbuffer(gl.RENDERBUFFER, null);

			gl.bindTexture(gl.TEXTURE_2D, _framebuffer.texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.FLOAT, null);
			gl.bindTexture(gl.TEXTURE_2D, null);

			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		}
	}, {
		key: "createDrawBuffers",
		value: function createDrawBuffers(_width, _height, _numDrawBuffers) {
			var it = this;
			var gl = it.gl;

			it.getExtension('OES_texture_float', true);
			var ext = it.getExtension('WEBGL_draw_buffers', true);

			if (ext.MAX_DRAW_BUFFERS_WEBGL < _numDrawBuffers) {
				throw "createDrawBuffers: MAX_DRAW_BUFFERS_WEBGL is " + ext.MAX_DRAW_BUFFERS_WEBGL;
			}

			var framebuffer = {};
			framebuffer.framebuffer = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer.framebuffer);

			framebuffer.depth = gl.createRenderbuffer();
			gl.bindRenderbuffer(gl.RENDERBUFFER, framebuffer.depth);
			gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, _width, _height);
			gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, framebuffer.depth);

			framebuffer.textures = [];
			for (var i = 0; i < _numDrawBuffers; i++) {
				framebuffer.textures[i] = it.createTexture();
				gl.bindTexture(gl.TEXTURE_2D, framebuffer.textures[i]);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.FLOAT, null);
				if (!it.getExtension("OES_texture_float_linear")) {
					it.textureFilter(framebuffer.textures[i], gl.NEAREST);
				}
				gl.bindTexture(gl.TEXTURE_2D, null);

				gl.framebufferTexture2D(gl.FRAMEBUFFER, ext.COLOR_ATTACHMENT0_WEBGL + i, gl.TEXTURE_2D, framebuffer.textures[i], 0);
			}

			var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
			if (status !== gl.FRAMEBUFFER_COMPLETE) {
				throw "createDrawBuffers: gl.checkFramebufferStatus( gl.FRAMEBUFFER ) returns " + status;
			}
			gl.bindFramebuffer(gl.FRAMEBUFFER, null);

			return framebuffer;
		}
	}, {
		key: "resizeDrawBuffers",
		value: function resizeDrawBuffers(_framebuffer, _width, height) {
			var it = this;
			var gl = it.gl;

			gl.bindFramebuffer(gl.FRAMEBUFFER, _framebuffer.framebuffer);

			gl.bindRenderbuffer(gl.RENDERBUFFER, _framebuffer.depth);
			gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, _width, _height);
			gl.bindRenderbuffer(gl.RENDERBUFFER, null);

			for (var i = 0; i < _framebuffer.textures.length; i++) {
				gl.bindTexture(gl.TEXTURE_2D, _framebuffer.textures[i]);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, _width, _height, 0, gl.RGBA, gl.FLOAT, null);
				gl.bindTexture(gl.TEXTURE_2D, null);
			}

			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		}
	}, {
		key: "drawBuffers",
		value: function drawBuffers(_numDrawBuffers) {
			var it = this;
			var gl = it.gl;

			var ext = it.getExtension("WEBGL_draw_buffers", true);

			var array = [];
			if (typeof _numDrawBuffers === "number") {
				for (var i = 0; i < _numDrawBuffers; i++) {
					array.push(ext.COLOR_ATTACHMENT0_WEBGL + i);
				}
			} else {
				array = array.concat(_numDrawBuffers);
			}
			ext.drawBuffersWEBGL(array);
		}
	}, {
		key: "clear",
		value: function clear(_r, _g, _b, _a, _d) {
			var it = this;
			var gl = it.gl;

			var r = _r || 0.0;
			var g = _g || 0.0;
			var b = _b || 0.0;
			var a = typeof _a === 'number' ? _a : 1.0;
			var d = typeof _d === 'number' ? _d : 1.0;

			gl.clearColor(r, g, b, a);
			gl.clearDepth(d);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		}
	}]);

	return GLCat;
}();

exports.default = GLCat;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/mathcat.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// にゃーん

var MathCat = {};

/**
 * adds a two vec
 * @param {array} a - vec
 * @param {array} b - vec
 */
MathCat.vecAdd = function (a, b) {
  return a.map(function (e, i) {
    return e + b[i];
  });
};

/**
 * substracts a vec from an another vec
 * @param {array} a - vec
 * @param {array} b - vec
 */
MathCat.vecSub = function (a, b) {
  return a.map(function (e, i) {
    return e - b[i];
  });
};

/**
 * returns a cross of two vec3s
 * @param {array} a - vec3
 * @param {array} b - vec3
 */
MathCat.vec3Cross = function (a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
};

/**
 * scales a vec by scalar
 * @param {number} s - scalar
 * @param {array} v - vec
 */
MathCat.vecScale = function (s, v) {
  return v.map(function (e) {
    return e * s;
  });
};

/**
 * returns length of a vec
 * @param {array} v - vec
 */
MathCat.vecLength = function (v) {
  return Math.sqrt(v.reduce(function (p, c) {
    return p + c * c;
  }, 0.0));
};

/**
 * normalizes a vec
 * @param {array} v - vec
 */
MathCat.vecNormalize = function (v) {
  return MathCat.vecScale(1.0 / MathCat.vecLength(v), v);
};

/**
 * applies two mat4s
 * @param {array} a - mat4
 * @param {array} b - mat4
 */
MathCat.mat4Apply = function (a, b) {
  return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3], a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7], a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7], a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7], a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7], a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11], a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11], a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11], a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11], a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15], a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15], a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15], a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]];
};

/**
 * transpose a mat4
 * @param {array} m - mat4
 */
MathCat.mat4Transpose = function (m) {
  return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
};

/**
 * returns an indentity mat4
 */
MathCat.mat4Identity = function () {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};

MathCat.mat4Translate = function (v) {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, v[0], v[1], v[2], 1];
};

MathCat.mat4Scale = function (v) {
  return [v[0], 0, 0, 0, 0, v[1], 0, 0, 0, 0, v[2], 0, 0, 0, 0, 1];
};

MathCat.mat4ScaleXYZ = function (s) {
  return [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1];
};

MathCat.mat4RotateX = function (t) {
  return [1, 0, 0, 0, 0, Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1];
};

MathCat.mat4RotateY = function (t) {
  return [Math.cos(t), 0, Math.sin(t), 0, 0, 1, 0, 0, -Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1];
};

MathCat.mat4RotateZ = function (t) {
  return [Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};

MathCat.mat4LookAt = function (pos, tar, air, rot) {
  var dir = MathCat.vecNormalize(MathCat.vecSub(tar, pos));
  var sid = MathCat.vecNormalize(MathCat.vec3Cross(dir, air));
  var top = MathCat.vec3Cross(sid, dir);
  sid = MathCat.vecAdd(MathCat.vecScale(Math.cos(rot), sid), MathCat.vecScale(Math.sin(rot), top));
  top = MathCat.vec3Cross(sid, dir);

  return [sid[0], top[0], dir[0], 0.0, sid[1], top[1], dir[1], 0.0, sid[2], top[2], dir[2], 0.0, -sid[0] * pos[0] - sid[1] * pos[1] - sid[2] * pos[2], -top[0] * pos[0] - top[1] * pos[1] - top[2] * pos[2], -dir[0] * pos[0] - dir[1] * pos[1] - dir[2] * pos[2], 1.0];
};

MathCat.mat4Perspective = function (fov, aspect, near, far) {
  var p = 1.0 / Math.tan(fov * Math.PI / 360.0);
  var d = far - near;
  return [p / aspect, 0.0, 0.0, 0.0, 0.0, p, 0.0, 0.0, 0.0, 0.0, (far + near) / d, 1.0, 0.0, 0.0, -2 * far * near / d, 0.0];
};

exports.default = MathCat;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/tweak.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tweak = function () {
  function Tweak(_el) {
    _classCallCheck(this, Tweak);

    var it = this;

    it.parent = _el;
    it.values = {};
    it.elements = {};
  }

  _createClass(Tweak, [{
    key: 'button',
    value: function button(_name, _props) {
      var it = this;

      var props = _props || {};

      if (typeof it.values[_name] === 'undefined') {
        var div = document.createElement('div');
        it.parent.appendChild(div);

        var input = document.createElement('input');
        div.appendChild(input);
        input.type = 'button';
        input.value = _name;

        input.addEventListener('click', function () {
          it.values[_name] = true;
        });

        it.elements[_name] = {
          div: div,
          input: input
        };
      }

      var tempvalue = it.values[_name];
      it.values[_name] = false;
      if (typeof props.set === 'boolean') {
        it.values[_name] = props.set;
      }

      return tempvalue;
    }
  }, {
    key: 'checkbox',
    value: function checkbox(_name, _props) {
      var it = this;

      var props = _props || {};

      var value = void 0;

      if (typeof it.values[_name] === 'undefined') {
        value = props.value || false;

        var div = document.createElement('div');
        it.parent.appendChild(div);

        var name = document.createElement('span');
        div.appendChild(name);
        name.innerText = _name;

        var input = document.createElement('input');
        div.appendChild(input);
        input.type = 'checkbox';
        input.checked = value;

        it.elements[_name] = {
          div: div,
          name: name,
          input: input
        };
      } else {
        value = it.elements[_name].input.checked;
      }

      if (typeof props.set === 'boolean') {
        value = props.set;
      }

      it.elements[_name].input.checked = value;
      it.values[_name] = value;

      return it.values[_name];
    }
  }, {
    key: 'range',
    value: function range(_name, _props) {
      var it = this;

      var props = _props || {};

      var value = void 0;

      if (typeof it.values[_name] === 'undefined') {
        var min = props.min || 0.0;
        var max = props.max || 1.0;
        var step = props.step || 0.001;
        value = props.value || min;

        var div = document.createElement('div');
        it.parent.appendChild(div);

        var name = document.createElement('span');
        div.appendChild(name);
        name.innerText = _name;

        var input = document.createElement('input');
        div.appendChild(input);
        input.type = 'range';
        input.value = value;
        input.min = min;
        input.max = max;
        input.step = step;

        var val = document.createElement('span');
        val.innerText = value.toFixed(3);
        div.appendChild(val);
        input.addEventListener('input', function (_event) {
          var value = parseFloat(input.value);
          val.innerText = value.toFixed(3);
        });

        it.elements[_name] = {
          div: div,
          name: name,
          input: input,
          val: val
        };
      } else {
        value = parseFloat(it.elements[_name].input.value);
      }

      if (typeof props.set === 'number') {
        value = props.set;
      }

      it.values[_name] = value;
      it.elements[_name].input.value = value;

      return it.values[_name];
    }
  }]);

  return Tweak;
}();

exports.default = Tweak;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/xorshift.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var seed = void 0;
var xorshift = function xorshift(_seed) {
  seed = _seed || seed || 1;
  seed = seed ^ seed << 13;
  seed = seed ^ seed >>> 17;
  seed = seed ^ seed << 5;
  return seed / Math.pow(2, 32) + 0.5;
};

exports.default = xorshift;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/main.js":[function(require,module,exports){
"use strict";

var _xorshift = require("./libs/xorshift");

var _xorshift2 = _interopRequireDefault(_xorshift);

var _tweak = require("./libs/tweak");

var _tweak2 = _interopRequireDefault(_tweak);

var _glcat = require("./libs/glcat");

var _glcat2 = _interopRequireDefault(_glcat);

var _glcatPathGui = require("./libs/glcat-path-gui");

var _glcatPathGui2 = _interopRequireDefault(_glcatPathGui);

var _mathcat = require("./libs/mathcat");

var _mathcat2 = _interopRequireDefault(_mathcat);

var _triangulation = require("./triangulation");

var _triangulation2 = _interopRequireDefault(_triangulation);

var _triangulationDrawer = require("./triangulation-drawer");

var _triangulationDrawer2 = _interopRequireDefault(_triangulationDrawer);

var _vertphaser = require("./vertphaser");

var _vertphaser2 = _interopRequireDefault(_vertphaser);

var _translateArray2d = require("./translate-array-2d");

var _translateArray2d2 = _interopRequireDefault(_translateArray2d);

var _letters = require("./letters");

var _letters2 = _interopRequireDefault(_letters);

var _tri2dTo3d = require("./tri-2d-to-3d");

var _tri2dTo3d2 = _interopRequireDefault(_tri2dTo3d);

var _extrudePath = require("./extrude-path");

var _extrudePath2 = _interopRequireDefault(_extrudePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



// ------

(0, _xorshift2.default)(326789157890);

// ------

var tweak = new _tweak2.default(divTweak);

// ------

var mouseX = 0.0;
var mouseY = 0.0;

canvas.addEventListener("mousemove", function (event) {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
});

// ------

var clamp = function clamp(v, b, t) {
  return Math.min(Math.max(v, b), t);
};
var lerp = function lerp(a, b, x) {
  return a + (b - a) * x;
};
var saturate = function saturate(v) {
  return clamp(v, 0.0, 1.0);
};

// ------

var width = canvas.width = 360;
var height = canvas.height = 360;

var renderA = document.createElement("a");

var saveFrame = function saveFrame() {
  renderA.href = canvas.toDataURL();
  renderA.download = ("0000" + totalFrame).slice(-5) + ".png";
  renderA.click();
};

// ------

var totalFrame = 0;
var init = false;
var frames = 200;

var automaton = new Automaton({
  gui: divAutomaton,
  fps: frames,
  data: "\n  {\"v\":\"1.1.1\",\"length\":1,\"resolution\":1000,\"params\":{\"focus\":[{\"time\":0,\"value\":7.5,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":7.5,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]}],\"phase\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":0.1,\"value\":0,\"mode\":4,\"params\":{\"rate\":100,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.2434446615739918,\"value\":0.7445249695708784,\"mode\":4,\"params\":{\"rate\":180,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.5242494226327945,\"value\":1.073071156866888,\"mode\":4,\"params\":{\"rate\":100,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.5904334695327768,\"value\":0.9325623557619429,\"mode\":4,\"params\":{\"rate\":100,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.6527180671522473,\"value\":0.8156580296547518,\"mode\":5,\"params\":{\"gravity\":38,\"bounce\":0.3},\"mods\":[false,false,false,false]},{\"time\":0.9538461538461539,\"value\":0.4256187444023234,\"mode\":4,\"params\":{\"rate\":3800.11,\"damp\":0.2},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":0.22384196700163095,\"mode\":4,\"params\":{\"rate\":600,\"damp\":1},\"mods\":[false,false,false,false]}],\"lightPosX\":[{\"time\":0,\"value\":-8.233072876571146,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":0.04807692307692314,\"value\":16.914799501152157,\"mode\":4,\"params\":{\"rate\":800,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.24423076923076925,\"value\":1.488284931408426,\"mode\":4,\"params\":{\"rate\":69,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.6461538461538462,\"value\":-4.485607544114525,\"mode\":4,\"params\":{\"rate\":20,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":-11.208334466250678,\"mode\":4,\"params\":{\"rate\":100,\"damp\":1},\"mods\":[false,false,false,false]}],\"cameraPosX\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":-5.551115123125783e-17,\"mode\":4,\"params\":{\"rate\":50,\"damp\":1},\"mods\":[false,false,{\"freq\":1,\"amp\":0.5,\"reso\":3,\"recursion\":2,\"seed\":1466},false]}],\"cameraPosY\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":0,\"mode\":4,\"params\":{\"rate\":50,\"damp\":1},\"mods\":[false,false,{\"freq\":1,\"amp\":0.5,\"reso\":3,\"recursion\":2,\"seed\":18},false]}],\"cameraZ\":[{\"time\":0,\"value\":17.5,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":0.059662100675462806,\"value\":9.678623821993014,\"mode\":3,\"params\":{\"factor\":13},\"mods\":[false,false,false,false]},{\"time\":0.6882217090069284,\"value\":7.284647425377673,\"mode\":4,\"params\":{\"rate\":410,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.8488452655889146,\"value\":8.070772917374319,\"mode\":4,\"params\":{\"rate\":68,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":-3.5,\"mode\":5,\"params\":{\"gravity\":990,\"bounce\":0},\"mods\":[false,false,false,false]}],\"circleRotate\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":3.076718553812715,\"mode\":4,\"params\":{\"rate\":20,\"damp\":1},\"mods\":[false,false,false,false]}],\"circleExpand\":[{\"time\":0,\"value\":-0.01313111375983838,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":0.18846153846153846,\"value\":-0.0057380170585480395,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":0.9019230769230769,\"value\":1,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":-0.5894487816176757,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[false,false,false,false]}],\"circleInterval\":[{\"time\":0,\"value\":2.5,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":0.15384615384615385,\"value\":2.5,\"mode\":0,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":0.6153846153846154,\"value\":1.3,\"mode\":4,\"params\":{\"rate\":500,\"damp\":1},\"mods\":[{\"velocity\":0},false,false,false]},{\"time\":1,\"value\":1.3,\"mode\":4,\"params\":{\"rate\":100,\"damp\":1},\"mods\":[false,false,false,false]}],\"\u3075\u304D\u3068\u3070\u3059\":[{\"time\":0,\"value\":200,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":0.85,\"value\":0,\"mode\":4,\"params\":{\"rate\":100,\"damp\":1},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":200,\"mode\":2,\"params\":{},\"mods\":[false,false,false,false]}],\"cameraRoll\":[{\"time\":0,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,false,false]},{\"time\":1,\"value\":0,\"mode\":1,\"params\":{},\"mods\":[false,false,{\"freq\":1,\"amp\":0.01,\"reso\":4.6,\"recursion\":2,\"seed\":20006.8},false]}]},\"gui\":{\"snap\":{\"enable\":false,\"bpm\":120,\"offset\":0}}}\n"
});
var auto = automaton.auto;

// ------

var cameraPos = [0.0, 0.0, 8.0];
var cameraTar = [0.0, 0.0, 0.0];
var cameraRoll = 0.0;
var cameraFov = 70.0;

var cameraNear = 0.1;
var cameraFar = 100.0;

var lightPos = [10.0, 8.0, 10.0];

var matP = void 0;
var matV = void 0;
var matPL = void 0;
var matVL = void 0;

var updateMatrices = function updateMatrices() {
  cameraPos[0] = auto("cameraPosX");
  cameraPos[1] = auto("cameraPosY");
  cameraPos[2] = auto("cameraZ");
  cameraTar[2] = auto("cameraZ") - 5.0;
  lightPos[0] = auto("lightPosX");
  lightPos[2] = auto("cameraZ") + 5.0;
  cameraRoll = auto("cameraRoll");

  matP = _mathcat2.default.mat4Perspective(cameraFov, width / height, cameraNear, cameraFar);
  matV = _mathcat2.default.mat4LookAt(cameraPos, cameraTar, [0.0, 1.0, 0.0], cameraRoll);

  matPL = _mathcat2.default.mat4Perspective(cameraFov, 1.0, cameraNear, cameraFar);
  matVL = _mathcat2.default.mat4LookAt(lightPos, cameraTar, [0.0, 1.0, 0.0], 0.0);
};
updateMatrices();

// ------

var gl = canvas.getContext('webgl');
gl.enable(gl.CULL_FACE);

var glCat = new _glcat2.default(gl);

glCat.getExtension("OES_texture_float", true);
glCat.getExtension("OES_texture_float_linear", true);
glCat.getExtension("EXT_frag_depth", true);
glCat.getExtension("WEBGL_draw_buffers", true);
glCat.getExtension("ANGLE_instanced_arrays", true);

var glCatPath = new _glcatPathGui2.default(glCat, {
  drawbuffers: true,
  el: divPath,
  canvas: canvas,
  stretch: true
});

// ------

var vboQuad = glCat.createVertexbuffer([-1, -1, 1, -1, -1, 1, 1, 1]);
var vboQuadUV = glCat.createVertexbuffer([0, 1, 1, 1, 0, 0, 1, 0]);
var vboQuad3 = glCat.createVertexbuffer([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]);
var vboQuad3Nor = glCat.createVertexbuffer([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);

var vboTextPos = glCat.createVertexbuffer(false);
var vboTextNor = glCat.createVertexbuffer(false);

// ------

var vboLunaPos = void 0,
    vboLunaNor = void 0,
    lunaLen = void 0;
{
  var lunaPath = [-1, -1, -1, -3, 1, -3, 1, -1, 3, -1, 3, 1, 1, 1, 1, 3, -1, 3, -1, 1, -3, 1, -3, -1];
  var lunaTri = new _triangulation2.default(lunaPath);
  lunaTri.do(100);
  var lunaExt = (0, _extrudePath2.default)(lunaPath, 1, -1);

  var pos = Array.from((0, _tri2dTo3d2.default)(lunaTri.tri, 1));
  pos.push.apply(pos, _toConsumableArray(pos.map(function (v, i) {
    return i % 3 === 1 ? v : -v;
  })));
  pos.push.apply(pos, _toConsumableArray(lunaExt.pos));

  var nor = [];
  for (var i = 0; i < lunaTri.tri.length / 2; i++) {
    nor.push(0, 0, 1);
  }
  for (var _i = 0; _i < lunaTri.tri.length / 2; _i++) {
    nor.push(0, 0, -1);
  }
  nor.push.apply(nor, _toConsumableArray(lunaExt.nor));

  vboLunaPos = glCat.createVertexbuffer(pos);
  vboLunaNor = glCat.createVertexbuffer(nor);
  lunaLen = pos.length;
}

// ------

var particlePixels = 3;
var particlesSqrt = 64;
var particles = particlesSqrt * particlesSqrt;
var vertsPerParticle = lunaLen / 3;

var vboParticleUV = glCat.createVertexbuffer(function () {
  var ret = [];
  for (var _i2 = 0; _i2 < particles; _i2++) {
    var ix = _i2 % particlesSqrt;
    var iy = Math.floor(_i2 / particlesSqrt);

    ret.push(ix * particlePixels);
    ret.push(iy);
  }
  return ret;
}());

// ------

var textureDummy = glCat.createTexture();
glCat.setTextureFromArray(textureDummy, 1, 1, [1, 0, 1, 1]);

var textureRandomSize = 32;
var textureRandomUpdate = function textureRandomUpdate(_tex) {
  glCat.setTextureFromArray(_tex, textureRandomSize, textureRandomSize, function () {
    var len = textureRandomSize * textureRandomSize * 4;
    var ret = new Uint8Array(len);
    for (var _i3 = 0; _i3 < len; _i3++) {
      ret[_i3] = Math.floor((0, _xorshift2.default)() * 256.0);
    }
    return ret;
  }());
};

var textureRandomStatic = glCat.createTexture();
glCat.textureWrap(textureRandomStatic, gl.REPEAT);
textureRandomUpdate(textureRandomStatic);

var textureRandom = glCat.createTexture();
glCat.textureWrap(textureRandom, gl.REPEAT);

// ------

var framebuffersGauss = [glCat.createFloatFramebuffer(width / 4, height / 4), glCat.createFloatFramebuffer(width / 4, height / 4), glCat.createFloatFramebuffer(width / 4, height / 4)];

var framebufferPreDof = glCat.createFloatFramebuffer(width, height);

var framebufferMotionPrev = glCat.createFramebuffer(width, height);
var framebufferMotionMosh = glCat.createFramebuffer(width, height);

var shadowSize = 512;

// ------

var bgColor = [0.01, 0.01, 0.01, 1.0];

// ------

glCatPath.setGlobalFunc(function () {
  glCat.uniform1i('init', init);
  glCat.uniform1f('time', automaton.time);
  glCat.uniform1f('deltaTime', automaton.deltaTime);

  glCat.uniform1f('frame', automaton.frame);
  glCat.uniform1f('frames', frames);

  glCat.uniform2fv('mouse', [mouseX, mouseY]);

  glCat.uniform3fv('cameraPos', cameraPos);
  glCat.uniform3fv('cameraTar', cameraTar);
  glCat.uniform1f('cameraRoll', cameraRoll);
  glCat.uniform1f('cameraFov', cameraFov);
  glCat.uniform1f('cameraNear', cameraNear);
  glCat.uniform1f('cameraFar', cameraFar);
  glCat.uniform3fv('lightPos', lightPos);

  glCat.uniform1f('particlesSqrt', particlesSqrt);
  glCat.uniform1f('particlePixels', particlePixels);

  glCat.uniformMatrix4fv('matP', matP);
  glCat.uniformMatrix4fv('matV', matV);
  glCat.uniformMatrix4fv('matPL', matPL);
  glCat.uniformMatrix4fv('matVL', matVL);
  glCat.uniform4fv('bgColor', bgColor);
});

glCatPath.add({
  return: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D sampler0;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  gl_FragColor = texture2D( sampler0, uv );\n}\n",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 1.0],
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniformTexture('sampler0', params.input, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  inspector: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define RADIUS 40.0\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 mouse;\nuniform vec3 circleColor;\nuniform sampler2D sampler0;\n\nbool print( in vec2 _coord, float _in ) {\n  vec2 coord = _coord;\n\n  // vertical restriction\n  if ( coord.y <= 0.0 || 5.0 <= coord.y ) { return false; }\n  \n  // dot\n  if ( 0.0 < coord.x && coord.x < 2.0 ) {\n    return coord.x < 1.0 && coord.y < 1.0;\n  }\n\n  // padded by dot\n  if ( 2.0 < coord.x ) { coord.x -= 2.0; }\n  \n  // determine digit\n  float ci = floor( coord.x / 5.0 ) + 1.0;\n\n  // too low / too high\n  if ( 4.0 < ci ) { return false; }\n  if ( ci < -4.0 ) { return false; }\n\n  // x of char\n  float cfx = floor( mod( coord.x, 5.0 ) );\n\n  // width is 4\n  if ( 4.0 == cfx ) { return false; }\n\n  // y of char\n  float cfy = floor( coord.y );\n\n  // bit of char\n  float cf = cfx + 4.0 * cfy;\n\n  // determine char  \n  float num = 0.0;\n  if ( 0.0 < ci ) {\n    float n = abs( _in );\n    for ( int i = 0; i < 6; i ++ ) {\n      if ( ci < float( i ) ) { break; }\n      \n      num = mod( floor( n ), 10.0 );\n      n -= num;\n      n *= 10.0;\n    }\n  } else {\n    float n = abs( _in );\n    for ( int i = 0; i < 6; i ++ ) {\n      if ( -ci < float( i ) ) { break; }\n      \n      if ( ci != 0.0 && n < 1.0 ) {\n        // minus\n        return float( i ) == -ci && _in < 0.0 && cfy == 2.0 && 0.0 < cfx;\n      }\n      num = mod( floor( n ), 10.0 );\n      n -= num;\n      n /= 10.0;\n    }\n  }\n\n  bool a;\n  a = 1.0 == mod( floor( (\n    num == 0.0 ? 432534.0 :\n    num == 1.0 ? 410692.0 :\n    num == 2.0 ? 493087.0 :\n    num == 3.0 ? 493191.0 :\n    num == 4.0 ? 630408.0 :\n    num == 5.0 ? 989063.0 :\n    num == 6.0 ? 399254.0 :\n    num == 7.0 ? 1016898.0 :\n    num == 8.0 ? 431766.0 :\n    433798.0\n  ) / pow( 2.0, cf ) ), 2.0 );\n  \n  return a ? true : false;\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  vec2 m = floor( vec2( 0.0, resolution.y ) + vec2( 1.0, -1.0 ) * mouse );\n  vec2 center = floor( m + vec2( 1.0, 0.7 ) * RADIUS );\n  float circle = length( gl_FragCoord.xy - center ) - RADIUS;\n\n  vec4 col = texture2D( sampler0, uv );\n  vec4 mcol = texture2D( sampler0, ( m + 0.5 ) / resolution );\n  vec4 bcol = vec4( circleColor, 1.0 );\n\n  col = mix(\n    col,\n    mix(\n      bcol,\n      mcol,\n      smoothstep( 1.0, 0.0, circle + 5.0 )\n    ),\n    smoothstep( 1.0, 0.0, circle )\n  );\n\n  if ( circle < 0.0 ) {\n    col = print( gl_FragCoord.xy - center - vec2( 0.0, 8.0 ), mcol.x ) ? bcol : col;\n    col = print( gl_FragCoord.xy - center - vec2( 0.0, 0.0 ), mcol.y ) ? bcol : col;\n    col = print( gl_FragCoord.xy - center - vec2( 0.0, -8.0 ), mcol.z ) ? bcol : col;\n    col = print( gl_FragCoord.xy - center - vec2( 0.0, -16.0 ), mcol.w ) ? bcol : col;\n  }\n\n  gl_FragColor = col;\n}",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 1.0],
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniform3fv('circleColor', [1.0, 1.0, 1.0]);
      glCat.uniformTexture('sampler0', params.input, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  gaussTable: {
    width: 6, // radius of dof
    height: 256,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define GAUSS_MAX 10.0\n#define T_SAMPLES 6\n#define R_SAMPLES 6\n\n#define saturate(i) clamp(i,0.,1.)\n#define lofi(i,j) floor((i)/(j))*(j)\n#define PI 3.14159265\n#define TAU 6.28318531\n\n// ------\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\n\nfloat gaussian( float x, float s ) {\n  return 1.0 / sqrt( 2.0 * PI * s ) * exp( - x * x / 2.0 / s );\n}\n\nvoid main() {\n  float sum = 0.0;\n  float val = 0.0;\n  int target = int( gl_FragCoord.x );\n\n  float sigma = GAUSS_MAX * gl_FragCoord.y / resolution.y;\n\n  for ( int i = 0; i < R_SAMPLES; i ++ ) {\n    float v = gaussian( float( i ), sigma );\n    sum += v * ( ( i != 0 ) ? float( T_SAMPLES ) : 1.0 );\n    if ( target == i ) { val = v; }\n  }\n\n  gl_FragColor = vec4( val / sum, 0.0, 0.0, 1.0 );\n}\n",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 1.0],
    framebuffer: true,
    float: true,
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  "🐬": {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#extension GL_EXT_frag_depth : require\n#extension GL_EXT_draw_buffers : require\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec4 bgColor;\n\nuniform float cameraFar;\n\n// ------\n\nvoid main() {\n  gl_FragData[ 0 ] = bgColor;\n  gl_FragData[ 1 ] = vec4( cameraFar, 0.0, 0.0, 1.0 );\n  gl_FragDepthEXT = 1.0;\n}",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 1.0],
    framebuffer: true,
    drawbuffers: 2,
    float: true,
    func: function func() {
      glCat.attribute('p', vboQuad, 2);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  "影": {
    width: shadowSize,
    height: shadowSize,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D sampler0;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  gl_FragColor = texture2D( sampler0, uv );\n}\n",
    blend: [gl.ONE, gl.ZERO],
    clear: [cameraFar, 0.0, 0.0, 1.0],
    framebuffer: true,
    drawbuffers: 2,
    float: true,
    func: function func() {}
  },

  grid: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define MARCH_ITER 60\n#define MARCH_MULT 0.7\n\n#define PI 3.14159265\n#define saturate(i) clamp(i,0.,1.)\n#define lofi(i,m) (floor((i)/(m))*(m))\n\n#extension GL_EXT_frag_depth : require\n#extension GL_EXT_draw_buffers : require\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec3 color;\n\nuniform vec3 cameraPos;\nuniform vec3 cameraTar;\nuniform float cameraFov;\nuniform float cameraNear;\nuniform float cameraFar;\nuniform float cameraRoll;\nuniform vec3 lightPos;\n\nuniform float circleRotate;\nuniform float circleExpand;\nuniform float circleInterval;\n\nuniform mat4 matPL;\nuniform mat4 matVL;\n\nuniform bool isShadow;\n\nuniform sampler2D samplerShadow;\n\n// ------\n\nmat2 rotate2D( float _t ) {\n  return mat2(\n    cos( _t ), sin( _t ),\n    -sin( _t ), cos( _t )\n  );\n}\n\nfloat random( vec2 _uv ) {\n  return fract( sin( dot( vec2( 12.563, 21.864 ), _uv ) ) * 194.5134 );\n}\n\n// ------\n\nstruct Camera {\n  vec3 pos;\n  vec3 dir;\n  vec3 sid;\n  vec3 top;\n};\n\nstruct Ray {\n  vec3 dir;\n  vec3 ori;\n};\n\n// ------\n\nCamera camInit( in vec3 _pos, in vec3 _tar, in float _roll ) {\n  Camera cam;\n  cam.pos = _pos;\n  cam.dir = normalize( _tar - _pos );\n  cam.sid = normalize( cross( cam.dir, vec3( 0.0, 1.0, 0.0 ) ) );\n  cam.top = normalize( cross( cam.sid, cam.dir ) );\n  cam.sid = cos( _roll ) * cam.sid + sin( _roll ) * cam.top;\n  cam.top = normalize( cross( cam.sid, cam.dir ) );\n\n  return cam;\n}\n\nRay rayInit( in vec3 _ori, in vec3 _dir ) {\n  Ray ray;\n  ray.dir = _dir;\n  ray.ori = _ori;\n  return ray;\n}\n\nRay rayFromCam( in vec2 _p, in Camera _cam, in float _fov ) {\n  vec3 dir = normalize(\n    _p.x * _cam.sid\n    + _p.y * _cam.top\n    + _cam.dir / tan( _fov * PI / 360.0 )\n  );\n  return rayInit( _cam.pos, dir );\n}\n\n// ------\n\nfloat distFuncSphere( vec3 _p, float _r ) {\n  return length( _p ) - _r;\n}\n\nfloat distFuncBox( vec3 _p, vec3 _s ) {\n  vec3 d = abs( _p ) - _s;\n  return min( max( d.x, max( d.y, d.z ) ), 0.0 ) + length( max( d, 0.0 ) );\n}\n\nvec3 circleRep( vec3 _p, float _r, float _c ) {\n  vec3 p = _p;\n  float intrv = PI * 2.0 / _c;\n  p.zx = rotate2D( floor( atan( p.z, p.x ) / intrv ) * intrv ) * p.zx;\n  p.zx = rotate2D( intrv / 2.0 ) * p.zx;\n  p.x -= _r;\n  return p;\n}\n\nfloat distFunc( vec3 _p ) {\n  float dist = 1E9;\n\n  { // grid\n    float m = ( 5.25 ) / 2.0;\n    vec3 p = mod( _p - vec3( 0.0, 0.0, m / 2.0 ), m ) - m / 2.0;\n    dist = distFuncSphere( p, 0.08 );\n  }\n\n  { // circle\n    vec3 p = _p;\n\n    p.yz = rotate2D( PI / 2.0 ) * p.yz;\n\n    float m = circleInterval;\n    float mi = floor( p.y / m );\n\n    float spd = cos( mi * 2.9 );\n    float h = 0.3 + 0.1 * cos( mi * 1.2 + 0.7 );\n    float w = 0.2 + 0.1 * cos( mi * 1.3 + 0.2 );\n    float rep = floor( 16.0 + 8.0 * cos( mi * 2.7 + 1.4 ) );\n    float rad = 6.0 + 1.0 * cos( mi * 1.3 );\n\n    p.zx = rotate2D( circleRotate * spd ) * p.zx;\n\n    p.y = ( p.y - mi * m ) - m / 2.0;\n    p = circleRep( p, rad, rep );\n    dist = min( dist, distFuncBox( p, circleExpand * vec3( w, h, w ) ) );\n  }\n\n  return dist;\n}\n\nvec3 normalFunc( in vec3 _p ) {\n  vec2 d = vec2( 0.0, 1.0 ) * 1E-4;\n  return normalize( vec3(\n    distFunc( _p + d.yxx ) - distFunc( _p - d.yxx ),\n    distFunc( _p + d.xyx ) - distFunc( _p - d.xyx ),\n    distFunc( _p + d.xxy ) - distFunc( _p - d.xxy )\n  ) );\n}\n\n// ------\n\nfloat shadow( vec3 p, float d ) {\n  float dc = length( p - lightPos );\n\n  vec4 posFromLight = matPL * matVL * vec4( p, 1.0 );\n  vec2 shadowCoord = posFromLight.xy / posFromLight.w * 0.5 + 0.5;\n\n  float ret = 0.0;\n  for ( int iy = -1; iy <= 1; iy ++ ) {\n    for ( int ix = -1; ix <= 1; ix ++ ) {\n      vec2 uv = shadowCoord + vec2( float( ix ), float ( iy ) ) * 0.01;\n      float proj = texture2D( samplerShadow, uv ).x;\n      float bias = 0.1 + ( 1.0 - d ) * 0.3;\n\n      float dif = smoothstep( bias * 2.0, bias, ( dc - proj ) );\n      ret += dif / 9.0;\n    }\n  }\n  return ret;\n}\n\nvoid main() {\n  vec2 p = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;\n\n  Camera cam = camInit( cameraPos, cameraTar, cameraRoll );\n  Ray ray = rayFromCam( p, cam, cameraFov );\n\n  float rayLen = cameraNear;\n  vec3 rayPos = ray.ori + rayLen * ray.dir;\n  float dist = 0.0;\n\n  for ( int i = 0; i < MARCH_ITER; i ++ ) {\n    dist = distFunc( rayPos );\n    rayLen += dist * MARCH_MULT;\n    rayPos = ray.ori + rayLen * ray.dir;\n\n    if ( cameraFar < rayLen ) { break; }\n    if ( abs( dist ) < 1E-5 ) { break; }\n  }\n\n  if ( 1E-4 < dist ) { discard; }\n\n  if ( isShadow ) {\n    float depth = length( rayPos - lightPos );\n    gl_FragData[ 0 ] = vec4( depth, 0.0, 0.0, 1.0 );\n    return;\n  }\n\n  vec3 nor = normalFunc( rayPos );\n\n  vec3 ld = normalize( rayPos - lightPos );\n  vec3 dif = 200.0 * color * (\n    saturate( dot( -nor, ld ) )\n    / pow( length( rayPos - lightPos ), 2.0 )\n    * mix( 0.2, 1.0, shadow( rayPos, dot( -nor, ld ) ) )\n  );\n\n  gl_FragData[ 0 ] = vec4( dif, 1.0 );\n  gl_FragData[ 1 ] = vec4( rayLen, 0.0, 0.0, 1.0 );\n\n  {\n    float a = ( cameraFar + cameraNear ) / ( cameraFar - cameraNear );\n    float b = 2.0 * cameraFar * cameraNear / ( cameraFar - cameraNear );\n    float z = dot( cam.dir, rayPos - cam.pos );\n    gl_FragDepthEXT = ( a - b / z ) * 0.5 + 0.5;\n  }\n}\n",
    drawbuffers: 2,
    blend: [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA],
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);

      glCat.uniform1f('circleRotate', auto("circleRotate"));
      glCat.uniform1f('circleExpand', auto("circleExpand"));
      glCat.uniform1f('circleInterval', auto("circleInterval"));

      glCat.uniform1i('isShadow', params.isShadow);
      if (!params.isShadow) {
        glCat.uniformTexture('samplerShadow', glCatPath.fb("影").textures[0], 0);
      } else {
        glCat.uniformTexture('samplerShadow', textureDummy, 0);
      }

      glCat.uniform3fv('color', [2.8, 0.2, 0.7]); // illegal
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  text: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\n#define HUGE 9E16\n#define PI 3.14159265\n#define V vec3(0.,1.,-1.)\n#define saturate(i) clamp(i,0.,1.)\n#define lofi(i,m) (floor((i)/(m))*(m))\n\n// ------\n\nattribute vec3 pos;\nattribute vec3 nor;\nattribute vec2 uv;\n\nvarying vec3 vPos;\nvarying vec3 vNor;\nvarying vec2 vShadowCoord;\n\nuniform float time;\nuniform vec2 resolution;\nuniform vec3 cameraPos;\nuniform float cameraFov;\n\nuniform mat4 matP;\nuniform mat4 matV;\nuniform mat4 matPL;\nuniform mat4 matVL;\nuniform mat4 matM;\n\nuniform bool isShadow;\n\n// ------\n\nvoid main() {\n  vec4 p = matM * vec4( pos, 1.0 );\n  vPos = p.xyz;\n\n  mat4 matN = matM;\n  matN[ 0 ] = normalize( matN[ 0 ] );\n  matN[ 1 ] = normalize( matN[ 1 ] );\n  matN[ 2 ] = normalize( matN[ 2 ] );\n  matN[ 3 ] = vec4( 0.0, 0.0, 0.0, 1.0 );\n  vNor = ( matN * vec4( nor, 1.0 ) ).xyz;\n\n  vec4 outPos;\n  if ( isShadow ) {\n    outPos = matPL * matVL * p;\n  } else {\n    outPos = matP * matV * p;\n\n    vec4 posFromLight = matPL * matVL * p;\n    vShadowCoord = posFromLight.xy / posFromLight.w * 0.5 + 0.5;\n  }\n  gl_Position = outPos;\n}",
    frag: "#define saturate(i) clamp(i,0.,1.)\n\n#extension GL_EXT_draw_buffers : require\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vPos;\nvarying vec3 vNor;\nvarying vec2 vShadowCoord;\n\nuniform vec4 bgColor;\nuniform vec3 color;\nuniform vec3 cameraPos;\nuniform vec3 lightPos;\n\nuniform bool isShadow;\n\nuniform sampler2D samplerShadow;\n\n// ------\n\nfloat shadow( float d ) {\n  float dc = length( vPos - lightPos );\n  float ret = 0.0;\n  for ( int iy = -1; iy <= 1; iy ++ ) {\n    for ( int ix = -1; ix <= 1; ix ++ ) {\n      vec2 uv = vShadowCoord + vec2( float( ix ), float ( iy ) ) * 0.001;\n      float proj = texture2D( samplerShadow, uv ).x;\n      float bias = 0.1 + ( 1.0 - d ) * 0.3;\n\n      float dif = smoothstep( bias * 2.0, bias, ( dc - proj ) );\n      ret += dif / 9.0;\n    }\n  }\n  return ret;\n}\n\nvoid main() {\n  if ( isShadow ) {\n    float depth = length( vPos - lightPos );\n    gl_FragData[ 0 ] = vec4( depth, 0.0, 0.0, 1.0 );\n    return;\n  }\n\n  vec3 ld = normalize( vPos - lightPos );\n  vec3 dif = 200.0 * color * (\n    saturate( dot( -vNor, ld ) )\n    / pow( length( vPos - lightPos ), 2.0 )\n    * mix( 0.2, 1.0, shadow( dot( -vNor, ld ) ) )\n  );\n\n  float depth = length( vPos - cameraPos );\n\n  gl_FragData[ 0 ] = vec4( dif, 1.0 );\n  gl_FragData[ 1 ] = vec4( depth, 0.0, 0.0, 1.0 );\n}",
    drawbuffers: 2,
    blend: [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA],
    func: function func(path, params) {
      if (0 < vboTextPos.length) {
        glCat.attribute('pos', vboTextPos, 3);
        glCat.attribute('nor', vboTextNor, 3);

        var matM = _mathcat2.default.mat4Identity();
        matM = _mathcat2.default.mat4Apply(_mathcat2.default.mat4ScaleXYZ(1.0 / 2.0), matM);
        glCat.uniformMatrix4fv('matM', matM);

        glCat.uniform1i('isShadow', params.isShadow);
        if (!params.isShadow) {
          glCat.uniformTexture('samplerShadow', glCatPath.fb("影").textures[0], 0);
        } else {
          glCat.uniformTexture('samplerShadow', textureDummy, 0);
        }
        glCat.uniform3fv('color', [0.8, 0.8, 0.8]);
        gl.drawArrays(gl.TRIANGLES, 0, vboTextPos.length / 3);
      }
    }
  },

  particlesComputeReturn: {
    width: particlesSqrt * particlePixels,
    height: particlesSqrt,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D sampler0;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  gl_FragColor = texture2D( sampler0, uv );\n}\n",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 0.0],
    framebuffer: true,
    float: true,
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniformTexture('sampler0', glCatPath.fb("particlesCompute").texture, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  particlesCompute: {
    width: particlesSqrt * particlePixels,
    height: particlesSqrt,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define PARTICLE_LIFE_SPEED 1.0\n\n#define HUGE 9E16\n#define PI 3.14159265\n#define V vec3(0.,1.,-1.)\n#define saturate(i) clamp(i,0.,1.)\n#define lofi(i,m) (floor((i)/(m))*(m))\n#define lofir(i,m) (floor((i)/(m)+.5)*(m))\n\n// ------\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform float particlesSqrt;\nuniform float particlePixels;\nuniform float frame;\nuniform float frames;\nuniform float charShuffle;\nuniform bool init;\nuniform float deltaTime;\nuniform vec2 resolution;\nuniform vec3 cameraPos;\n\nuniform float fukitobasu;\n\nuniform sampler2D samplerPcompute;\nuniform sampler2D samplerRandom;\n\n// ------\n\nvec2 vInvert( vec2 _uv ) {\n  return vec2( 0.0, 1.0 ) + vec2( 1.0, -1.0 ) * _uv;\n}\n\n// ------\n\nmat2 rotate2D( float _t ) {\n  return mat2( cos( _t ), sin( _t ), -sin( _t ), cos( _t ) );\n}\n\nvec4 random( vec2 _uv ) {\n  return texture2D( samplerRandom, _uv );\n}\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289(i);\n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }\n\nfloat GPURnd(inout vec4 n)\n{\n\t// Based on the post http://gpgpu.org/forums/viewtopic.php?t=2591&sid=17051481b9f78fb49fba5b98a5e0f1f3\n\t// (The page no longer exists as of March 17th, 2015. Please let me know if you see why this code works.)\n\tconst vec4 q = vec4(   1225.0,    1585.0,    2457.0,    2098.0);\n\tconst vec4 r = vec4(   1112.0,     367.0,      92.0,     265.0);\n\tconst vec4 a = vec4(   3423.0,    2646.0,    1707.0,    1999.0);\n\tconst vec4 m = vec4(4194287.0, 4194277.0, 4194191.0, 4194167.0);\n\n\tvec4 beta = floor(n / q);\n\tvec4 p = a * (n - beta * q) - beta * r;\n\tbeta = (sign(-p) + vec4(1.0)) * vec4(0.5) * m;\n\tn = (p + beta);\n\n\treturn fract(dot(n / m, vec4(1.0, -1.0, 1.0, -1.0)));\n}\n\nvec3 randomSphere( inout vec4 seed ) {\n  vec3 v;\n  for ( int i = 0; i < 10; i ++ ) {\n    v = vec3(\n      GPURnd( seed ),\n      GPURnd( seed ),\n      GPURnd( seed )\n    ) * 2.0 - 1.0;\n    if ( length( v ) < 1.0 ) { break; }\n  }\n  return v;\n}\n\nvec2 randomCircle( inout vec4 seed ) {\n  vec2 v;\n  for ( int i = 0; i < 10; i ++ ) {\n    v = vec2(\n      GPURnd( seed ),\n      GPURnd( seed )\n    ) * 2.0 - 1.0;\n    if ( length( v ) < 1.0 ) { break; }\n  }\n  return v;\n}\n\nvec3 randomBox( inout vec4 seed ) {\n  vec3 v;\n  v = vec3(\n    GPURnd( seed ),\n    GPURnd( seed ),\n    GPURnd( seed )\n  ) * 2.0 - 1.0;\n  return v;\n}\n\n// ------\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 puv = vec2( ( floor( gl_FragCoord.x / particlePixels ) * particlePixels + 0.5 ) / resolution.x, uv.y );\n  float number = ( ( gl_FragCoord.x - 0.5 ) / particlePixels ) + ( ( gl_FragCoord.y - 0.5 ) * particlesSqrt );\n  float mode = mod( gl_FragCoord.x, particlePixels );\n  vec2 dpix = vec2( 1.0 ) / resolution;\n\n  vec4 seed = texture2D( samplerRandom, puv );\n  GPURnd( seed );\n\n  vec4 pos = texture2D( samplerPcompute, puv );\n  vec4 vel = texture2D( samplerPcompute, puv + dpix * vec2( 1.0, 0.0 ) );\n  vec4 rot = texture2D( samplerPcompute, puv + dpix * vec2( 2.0, 0.0 ) );\n\n  float dt = deltaTime;\n    \n  float timing = mix( 0.7, 1.0, number / particlesSqrt / particlesSqrt );\n  float timingI = floor( timing * frames / PARTICLE_LIFE_SPEED );\n  float timingF = fract( timing * frames / PARTICLE_LIFE_SPEED );\n  if ( timingI == mod( frame, frames / PARTICLE_LIFE_SPEED ) ) {\n    pos.xy = randomCircle( seed );\n    pos.xy = 5.0 * normalize( pos.xy ) * pow( length( pos.xy ), 0.7 );\n    pos.z = mix( -10.0, -20.0, GPURnd( seed ) );\n    pos.w = 1.0;\n\n    vel.xyz = vec3( 0.0 );\n    vel.w = pow( GPURnd( seed ), 20.0 );\n\n    rot = vec4(\n      1.0 * ( GPURnd( seed ) - 0.5 ),\n      1.0 * ( GPURnd( seed ) - 0.5 ),\n      4.0 * ( GPURnd( seed ) - 0.5 ),\n      4.0 * ( GPURnd( seed ) - 0.5 )\n    );\n\n    dt = deltaTime * ( 1.0 - timingF );\n  } else if ( frame == 0.0 ) {\n    pos.z += 21.0;\n  }\n\n  vel.xyz += 10.0 * dt * vec3(\n    snoise( vec4( pos.xyz * 0.37 + 61.51 + 0.1 * sin( 2.0 * PI * time ), 20.04 ) ),\n    snoise( vec4( pos.xyz * 0.37 + 15.31 + 0.1 * sin( 2.0 * PI * time ), 41.21 ) ),\n    snoise( vec4( pos.xyz * 0.37 + 28.79 + 0.1 * sin( 2.0 * PI * time ), 32.95 ) )\n  );\n  vel.z += fukitobasu * dt;\n\n  pos.xyz += vel.xyz * dt;\n  pos.w -= dt * PARTICLE_LIFE_SPEED;\n\n  rot.xy += dt * rot.zw;\n\n  gl_FragColor = (\n    mode < 1.0 ? pos :\n    mode < 2.0 ? vel :\n    rot\n  );\n}",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 0.0],
    framebuffer: true,
    float: true,
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniform1f('fukitobasu', auto("ふきとばす"));
      glCat.uniformTexture('samplerPcompute', glCatPath.fb("particlesComputeReturn").texture, 0);
      glCat.uniformTexture('samplerRandom', textureRandom, 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  particlesRender: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\n#define HUGE 9E16\n#define PI 3.14159265\n#define V vec3(0.,1.,-1.)\n#define saturate(i) clamp(i,0.,1.)\n#define lofi(i,m) (floor((i)/(m))*(m))\n\n// ------\n\nattribute vec2 computeUV;\nattribute vec3 primPos;\nattribute vec3 primNor;\n\nvarying vec3 vPos;\nvarying vec3 vNor;\nvarying vec3 vPrimPos;\nvarying vec3 vPrimNor;\nvarying float vLife;\nvarying float vSize;\nvarying vec2 vShadowCoord;\n\nuniform vec2 resolution;\nuniform vec2 resolutionPcompute;\nuniform vec3 cameraPos;\nuniform float cameraFov;\nuniform mat4 matP;\nuniform mat4 matV;\nuniform mat4 matPL;\nuniform mat4 matVL;\n\nuniform bool isShadow;\n\nuniform sampler2D samplerPcompute;\n\n// ------\n\nmat2 rotate2D( float _t ) {\n  return mat2( cos( _t ), sin( _t ), -sin( _t ), cos( _t ) );\n}\n\nvoid main() {\n  vec2 puv = ( computeUV.xy + 0.5 ) / resolutionPcompute;\n  vec2 dppix = vec2( 1.0 ) / resolutionPcompute;\n\n  vec4 pos = texture2D( samplerPcompute, puv );\n  vec4 vel = texture2D( samplerPcompute, puv + dppix * vec2( 1.0, 0.0 ) );\n  vec4 rot = texture2D( samplerPcompute, puv + dppix * vec2( 2.0, 0.0 ) );\n\n  vec3 primPosD = primPos;\n  vec3 primNorD = primNor;\n\n  vPrimPos = primPos;\n  vPrimNor = primNor;\n\n  primPosD.zx = rotate2D( rot.y ) * primPosD.zx;\n  primPosD.yz = rotate2D( rot.x ) * primPosD.yz;\n  primPosD.xy = rotate2D( PI / 4.0 ) * primPosD.xy;\n  primNorD.zx = rotate2D( rot.y ) * primNorD.zx;\n  primNorD.yz = rotate2D( rot.x ) * primNorD.yz;\n  primNorD.xy = rotate2D( PI / 4.0 ) * primNorD.xy;\n\n  primPosD.xyz *= 0.3 * (\n    vel.w * sin( PI * pos.w ) *\n    ( 1.0 - exp( -length( cameraPos - pos.xyz ) ) )\n  );\n  pos.xyz += primPosD.xyz;\n\n  vPos = pos.xyz;\n  vNor = primNorD.xyz;\n  vLife = pos.w;\n  vSize = vel.w;\n\n  vec4 outPos;\n  if ( isShadow ) {\n    outPos = matPL * matVL * vec4( pos.xyz, 1.0 );\n  } else {\n    outPos = matP * matV * vec4( pos.xyz, 1.0 );\n\n    vec4 posFromLight = matPL * matVL * vec4( pos.xyz, 1.0 );\n    vShadowCoord = posFromLight.xy / posFromLight.w * 0.5 + 0.5;\n  }\n\n  gl_Position = outPos;\n}",
    frag: "#define PARTICLE_LIFE_SPEED 2.0\n\n#define HUGE 9E16\n#define PI 3.14159265\n#define V vec3(0.,1.,-1.)\n#define saturate(i) clamp(i,0.,1.)\n\n// ------\n\n#extension GL_EXT_draw_buffers : require\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vPos;\nvarying vec3 vNor;\nvarying vec3 vPrimPos;\nvarying vec3 vPrimNor;\nvarying float vLife;\nvarying float vSize;\nvarying vec2 vShadowCoord;\n\nuniform vec3 color;\nuniform vec3 cameraPos;\nuniform float cameraNear;\nuniform float cameraFar;\nuniform vec3 lightPos;\nuniform float frame;\n\nuniform bool isShadow;\n\nuniform sampler2D samplerShadow;\n\n// ------\n\nfloat shadow( float d ) {\n  float dc = length( vPos - lightPos );\n  float ret = 0.0;\n  for ( int iy = -1; iy <= 1; iy ++ ) {\n    for ( int ix = -1; ix <= 1; ix ++ ) {\n      vec2 uv = vShadowCoord + vec2( float( ix ), float ( iy ) ) * 0.001;\n      float proj = texture2D( samplerShadow, uv ).x;\n      float bias = 0.1 + ( 1.0 - d ) * 0.3;\n\n      float dif = smoothstep( bias * 2.0, bias, ( dc - proj ) );\n      ret += dif / 9.0;\n    }\n  }\n  return ret;\n}\n\nvoid main() {\n  if ( vLife <= 0.0 ) { discard; }\n\n  if ( isShadow ) {\n    float depth = length( vPos - lightPos );\n    gl_FragData[ 0 ] = vec4( depth, 0.0, 0.0, 1.0 );\n    return;\n  }\n\n  float mtl = 0.0;\n\n  {\n    vec3 v = abs( vPrimPos );\n    mtl = saturate(\n      smoothstep( 0.8, 0.9, min( v.x, v.y ) )\n      + smoothstep( 2.8, 2.9, max( v.x, v.y ) )\n    );\n  }\n\n  vec3 ld = normalize( vPos - lightPos );\n  vec3 rd = normalize( vPos - cameraPos );\n  vec3 hd = normalize( ld + rd );\n\n  float sh = shadow( dot( -vNor, ld ) );\n\n  vec3 col0 = 150.0 * vec3( 0.2 ) * (\n    saturate( dot( -vNor, ld ) )\n    / pow( length( vPos - lightPos ), 2.0 )\n    * mix( 0.2, 1.0, sh )\n  );\n\n  col0 += vec3( 0.4 ) * (\n    pow( saturate( dot( -vNor, ld ) ), 20.0 )\n    * mix( 0.0, 1.0, sh )\n  );\n\n  vec3 col1 = sin( vLife * PI ) * saturate( dot( -vNor, rd ) ) * vec3( 2.8, 0.2, 0.7 );\n  col1 *= mod( frame + cos( vSize * 1844.2 ), 2.0 ) < 1.0 ? 1.0 : ( 0.7 + 0.2 * cos( vSize * 1933.4 ) );\n\n  float depth = length( vPos - cameraPos );\n\n  gl_FragData[ 0 ] = vec4( mix( col0, col1, mtl ), 1.0 );\n  gl_FragData[ 1 ] = vec4( depth, 0.0, 0.0, 1.0 );\n}",
    drawbuffers: 2,
    blend: [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA],
    func: function func(path, params) {
      glCat.attribute('computeUV', vboParticleUV, 2, 1);
      glCat.attribute('primPos', vboLunaPos, 3);
      glCat.attribute('primNor', vboLunaNor, 3);

      glCat.uniform2fv('resolutionPcompute', [particlesSqrt * particlePixels, particlesSqrt]);
      glCat.uniformTexture('samplerPcompute', glCatPath.fb("particlesCompute").texture, 1);

      glCat.uniform1i('isShadow', params.isShadow);
      if (!params.isShadow) {
        glCat.uniformTexture('samplerShadow', glCatPath.fb("影").textures[0], 0);
      } else {
        glCat.uniformTexture('samplerShadow', textureDummy, 0);
      }

      var ext = glCat.getExtension("ANGLE_instanced_arrays");
      ext.drawArraysInstancedANGLE(gl.TRIANGLES, 0, vertsPerParticle, particles);
    }
  },

  fxaa: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define PI 3.14159265\n#define V vec3(0.,1.,-1.)\n\n#define FXAA_REDUCE_MIN (1.0 / 128.0)\n#define FXAA_REDUCE_MUL (1.0 / 8.0)\n#define FXAA_SPAN_MAX 16.0\n\n// ------\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\n\nuniform sampler2D texture;\n\n// ------\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  #define T(v) texture2D( texture, (v) / resolution ).xyz\n  vec3 rgb11 = T( gl_FragCoord.xy );\n  vec3 rgb00 = T( gl_FragCoord.xy + V.zz );\n  vec3 rgb02 = T( gl_FragCoord.xy + V.zy );\n  vec3 rgb20 = T( gl_FragCoord.xy + V.yz );\n  vec3 rgb22 = T( gl_FragCoord.xy + V.yy );\n  #undef T\n\n  vec3 luma = vec3( 0.299, 0.587, 0.114 );\n  #define L(c) dot( c, luma )\n  float luma11 = L( rgb11 );\n  float luma00 = L( rgb00 );\n  float luma02 = L( rgb02 );\n  float luma20 = L( rgb20 );\n  float luma22 = L( rgb22 );\n  #undef L\n\n  float lumaMin = min( luma00, min( min( luma00, luma02 ), min( luma20, luma22 ) ) );\n  float lumaMax = max( luma00, max( max( luma00, luma02 ), max( luma20, luma22 ) ) );\n\n  vec2 dir = vec2(\n    -( ( luma00 + luma20 ) - ( luma02 + luma22 ) ),\n    ( ( luma00 + luma02 ) - ( luma20 + luma22 ) )\n  );\n\n  float dirReduce = max(\n    ( luma00 + luma02 + luma20 + luma22 ) * 0.25 * FXAA_REDUCE_MUL,\n    FXAA_REDUCE_MIN\n  );\n  float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );\n  dir = min(\n    vec2( FXAA_SPAN_MAX ),\n    max(\n      vec2( -FXAA_SPAN_MAX ),\n      dir * rcpDirMin\n    )\n  ) / resolution;\n\n  vec3 rgbA = 0.5 * (\n    texture2D( texture, uv + dir * ( 1.0 / 3.0 - 0.5 ) ).xyz +\n    texture2D( texture, uv + dir * ( 2.0 / 3.0 - 0.5 ) ).xyz\n  );\n  vec3 rgbB = rgbA * 0.5 + 0.25 * (\n    texture2D( texture, uv - dir * 0.5 ).xyz +\n    texture2D( texture, uv + dir * 0.5 ).xyz\n  );\n\n  float lumaB = dot( rgbB, luma );\n  gl_FragColor = (\n    ( ( lumaB < lumaMin ) || ( lumaMax < lumaB ) ) ?\n    vec4( rgbA, 1.0 ) :\n    vec4( rgbB, 1.0 )\n  );\n}",
    clear: [0.0, 0.0, 0.0, 1.0],
    framebuffer: true,
    float: true,
    blend: [gl.ONE, gl.ZERO],
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniformTexture('sampler0', params.input, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  gauss: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define saturate(i) clamp(i,0.,1.)\n#define PI 3.14159265\n#define SAMPLES 20\n\n// ------\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform bool isVert;\nuniform sampler2D sampler0;\n\nuniform float var;\n\nfloat gaussian( float _x, float _v ) {\n  return 1.0 / sqrt( 2.0 * PI * _v ) * exp( - _x * _x / 2.0 / _v );\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 bv = ( isVert ? vec2( 0.0, 1.0 ) : vec2( 1.0, 0.0 ) ) / resolution;\n\n  vec3 sum = vec3( 0.0 );\n  for ( int i = -SAMPLES; i <= SAMPLES; i ++ ) {\n    vec2 v = saturate( uv + bv * float( i ) );\n    vec3 tex = texture2D( sampler0, v ).xyz;\n    float mul = gaussian( abs( float( i ) ), var );\n    sum += tex * mul;\n  }\n\n  gl_FragColor = vec4( sum, 1.0 );\n}\n",
    clear: [0.0, 0.0, 0.0, 1.0],
    tempFb: glCat.createFloatFramebuffer(width, height),
    blend: [gl.ONE, gl.ZERO],
    func: function func(path, params) {
      if (params.width && params.height) {
        glCat.resizeFloatFramebuffer(path.tempFb, params.width, params.height);
      }

      gl.bindFramebuffer(gl.FRAMEBUFFER, path.tempFb.framebuffer);
      glCat.clear.apply(glCat, _toConsumableArray(path.clear));

      glCat.attribute('p', vboQuad, 2);
      glCat.uniformTexture('sampler0', params.input, 0);
      glCat.uniform1f('var', params.var);
      glCat.uniform1i('isVert', 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      gl.bindFramebuffer(gl.FRAMEBUFFER, params.framebuffer);

      glCat.attribute('p', vboQuad, 2);
      glCat.uniformTexture('sampler0', path.tempFb.texture, 0);
      glCat.uniform1f('var', params.var);
      glCat.uniform1i('isVert', 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  dof: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define GAUSS_RATE 1.0\n#define FOG 0.01\n#define R_SAMPLES 6\n#define R_INTERVAL 2.0\n#define T_OFFSET 0.3\n#define T_SAMPLES 6\n\n#define V vec2(0.,1.)\n#define saturate(i) clamp(i,0.,1.)\n#define lofi(i,j) floor((i)/(j))*(j)\n#define PI 3.14159265\n#define TAU 6.28318531\n\n// ------\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D sampler0;\nuniform sampler2D samplerPreDof;\nuniform sampler2D samplerDepth;\nuniform sampler2D samplerGaussTable;\nuniform vec4 bgColor;\nuniform float focus;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  vec3 sum = V.xxx;\n  vec3 ccol = vec3( 0.0 );\n  float clen = 1E9;\n  for ( int ir = 0; ir < R_SAMPLES; ir ++ ) {\n    for ( int it = 0; it < T_SAMPLES; it ++ ) {\n      float theta = T_OFFSET + TAU * float( it ) / float( T_SAMPLES );\n      vec2 delta = R_INTERVAL * float( ir ) * vec2( cos( theta ), sin( theta ) );\n      bool center = ir == 0;\n      vec2 v = saturate( uv + delta / resolution );\n\n      float len = texture2D( samplerDepth, v ).x;\n\n      float gauss = min( GAUSS_RATE * abs( 1.0 / focus - 1.0 / len ), 1.0 );\n      float mul = texture2D( samplerGaussTable, vec2( ( float( ir ) + 0.5 ) / float( R_SAMPLES ), gauss ) ).x;\n\n      vec3 tex = mix(\n        texture2D( samplerPreDof, v ),\n        texture2D( sampler0, v ),\n        smoothstep( 0.0, 0.2, mul )\n      ).xyz;\n      vec3 col = mix( bgColor.xyz, tex, exp( -len * FOG ) );\n\n      sum += col * saturate( mul );\n\n      if ( center ) {\n        break;\n      }\n    }\n  }\n\n  gl_FragColor = vec4( sum, 1.0 );\n}\n",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 0.0],
    framebuffer: true,
    float: true,
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniform1f('focus', auto('focus'));
      glCat.uniformTexture('samplerDry', params.dry, 0);
      glCat.uniformTexture('samplerPreDof', params.predof, 1);
      glCat.uniformTexture('samplerDepth', params.depth, 2);
      glCat.uniformTexture('samplerGaussTable', glCatPath.fb("gaussTable").texture, 3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  "Gowrock - bloom": {
    width: width / 4.0,
    height: height / 4.0,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define V vec2(0.,1.)\n#define saturate(i) clamp(i,0.,1.)\n#define PI 3.14159265\n#define SAMPLES 20\n\n// ------\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform bool isVert;\nuniform sampler2D sampler0;\nuniform sampler2D samplerDry;\n\nuniform float gaussVar;\n\nfloat gaussian( float _x, float _v ) {\n  return 1.0 / sqrt( 2.0 * PI * _v ) * exp( - _x * _x / 2.0 / _v );\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 bv = ( isVert ? vec2( 0.0, 1.0 ) : vec2( 1.0, 0.0 ) ) / resolution;\n\n  vec3 sum = V.xxx;\n  for ( int i = -SAMPLES; i <= SAMPLES; i ++ ) {\n    vec2 v = saturate( uv + bv * float( i ) );\n    vec3 tex = texture2D( sampler0, v ).xyz;\n    float mul = gaussian( abs( float( i ) ), gaussVar );\n    sum += tex * mul;\n  }\n\n  gl_FragColor = vec4( sum, 1.0 );\n}\n",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 0.0],
    tempFb: glCat.createFloatFramebuffer(width / 4.0, height / 4.0),
    framebuffer: true,
    float: true,
    func: function func(path, params) {
      for (var _i4 = 0; _i4 < 3; _i4++) {
        var gaussVar = [5.0, 15.0, 40.0][_i4];
        gl.bindFramebuffer(gl.FRAMEBUFFER, path.tempFb.framebuffer);
        glCat.clear.apply(glCat, _toConsumableArray(path.clear));

        glCat.attribute('p', vboQuad, 2);
        glCat.uniform1i('isVert', false);
        glCat.uniform1f('gaussVar', gaussVar);
        glCat.uniformTexture('sampler0', params.input, 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        gl.bindFramebuffer(gl.FRAMEBUFFER, params.framebuffer);

        glCat.attribute('p', vboQuad, 2);
        glCat.uniform1i('isVert', true);
        glCat.uniform1f('gaussVar', gaussVar);
        glCat.uniformTexture('sampler0', path.tempFb.texture, 0);
        glCat.uniformTexture('samplerDry', params.input, 1);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    }
  },

  bloomFinalize: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D samplerDry;\nuniform sampler2D samplerWet;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec3 dry = texture2D( samplerDry, uv ).xyz;\n  vec3 wet = texture2D( samplerWet, uv ).xyz;\n  gl_FragColor.xyz = (\n    dry +\n    max( vec3( 0.0 ), ( wet - 0.8 ) / 2.0 )\n  );\n  gl_FragColor.w = 1.0;\n}\n",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 0.0],
    framebuffer: true,
    float: true,
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniformTexture('samplerDry', params.dry, 0);
      glCat.uniformTexture('samplerWet', params.wet, 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  },

  おたくはすぐポストエフェクトを挿す: {
    width: width,
    height: height,
    vert: "#define GLSLIFY 1\nattribute vec2 p;\n\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n",
    frag: "#define HUGE 9E16\n#define PI 3.14159265\n#define V vec3(0.,1.,-1.)\n#define saturate(i) clamp(i,0.,1.)\n#define lofi(i,m) (floor((i)/(m))*(m))\n\n// ------\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform vec2 resolution;\n\nuniform sampler2D sampler0;\n\n// ------\n\nvec3 barrel( float amp, vec2 uv ) {\n\tfloat corn = length( vec2( 0.5 ) );\n\tfloat a = min( 3.0 * sqrt( amp ), corn * PI );\n\tfloat zoom = corn / ( tan( corn * a ) + corn );\n\tvec2 p = saturate(\n    ( uv + normalize( uv - 0.5 ) * tan( length( uv - 0.5 ) * a ) ) * zoom +\n    0.5 * ( 1.0 - zoom )\n  );\n\treturn texture2D( sampler0, vec2( p.x, p.y ) ).xyz;\n}\n\n// ------\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 p = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution.y;\n  float vig = 1.14 - length( p ) * 0.4;\n\n  vec3 tex = vec3( 0.0 );\n\n  for ( int i = 0; i < 10; i ++ ) {\n    float fi = float( i ) / 9.0;\n    vec3 a = saturate( vec3(\n      fi < 1.0 / 6.0 ? 1.0 : 1.0 - 3.0 * abs( 1.0 / 6.0 - fi ),\n      1.0 - 3.0 * abs( 1.0 / 2.0 - fi ),\n      5.0 / 6.0 < fi ? 1.0 : 1.0 - 3.0 * abs( 5.0 / 6.0 - fi )\n    ) ) / 10.0 * 3.0;\n    tex += a * barrel( 0.0 + 0.1 * fi, uv );\n  }\n\n  tex = mix(\n    vec3( 0.0 ),\n    tex,\n    vig\n  );\n\n  vec3 col = pow( saturate( tex.xyz ), vec3( 1.0 / 2.2 ) );\n  col = vec3(\n    smoothstep( -0.1, 1.1, col.x ),\n    smoothstep( 0.0, 1.0, col.y ),\n    smoothstep( -0.3, 1.3, col.z )\n  );\n\n  gl_FragColor = vec4( col, 1.0 );\n}",
    blend: [gl.ONE, gl.ZERO],
    clear: [0.0, 0.0, 0.0, 0.0],
    framebuffer: true,
    func: function func(path, params) {
      glCat.attribute('p', vboQuad, 2);
      glCat.uniformTexture('sampler0', params.input, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }
});

// ------

var updateUI = function updateUI() {
  var now = new Date();
  var deadline = new Date(2018, 1, 2, 0, 0);

  divCountdown.innerText = "Deadline: " + Math.floor((deadline - now) / 1000);
};

// ------

var textChars = [[15, 0.7, 0.4], [17, 0.7, 0.3], [14, 1.0, 0.7], [2, 0.7, 0.6], [4, 0.75, 0.4], [3, 1.3, 0.8], [20, 1.1, 0.55], [17, 0.9, 0.2], [4, 1.0, 0.6]];
textChars.map(function (a) {
  a[0] = new _vertphaser2.default(_letters2.default[a[0]]);
});

var updateText = function updateText() {
  var phase = auto("phase");

  var pos = [];
  var nor = [];
  textChars.map(function (a, i) {
    var vert = a[0].do(lerp(a[1], a[2], phase), phase);
    (0, _translateArray2d2.default)(vert, (i % 3 - 1) * 5.5 - 2.5, (1 - Math.floor(i / 3)) * 5.5 - 2.5);

    var tri = new _triangulation2.default(vert);
    tri.do(100);
    pos.push.apply(pos, _toConsumableArray((0, _tri2dTo3d2.default)(tri.tri, 0.0)));

    for (var _i5 = 0; _i5 < tri.tri.length / 2.0; _i5++) {
      nor.push(0, 0, 1);
    }

    var ext = (0, _extrudePath2.default)(vert, 0.0, -5.0);
    pos.push.apply(pos, _toConsumableArray(ext.pos));
    nor.push.apply(nor, _toConsumableArray(ext.nor));
  });

  glCat.setVertexbuffer(vboTextPos, pos, gl.DYNAMIC_DRAW);
  glCat.setVertexbuffer(vboTextNor, nor, gl.DYNAMIC_DRAW);
};

// ------

glCatPath.render("gaussTable");

var update = function update() {
  if (!tweak.checkbox("play", { value: true })) {
    setTimeout(update, 100);
    return;
  }

  automaton.update();

  if (automaton.frame === 0) {
    (0, _xorshift2.default)(179067891367);
  }

  updateUI();
  updateMatrices();

  updateText();

  textureRandomUpdate(textureRandom);

  // ------

  glCatPath.begin();

  glCatPath.render("🐬");
  glCatPath.render("影");

  // ↓ too slow and not beautiful so omitted
  // glCatPath.render( "grid", {
  //   target: glCatPath.fb( "影" ),
  //   isShadow: true,
  //   width: shadowSize,
  //   height: shadowSize
  // } );}

  glCatPath.render("particlesComputeReturn");
  glCatPath.render("particlesCompute");

  glCatPath.render("particlesRender", {
    target: glCatPath.fb("影"),
    isShadow: true,
    width: shadowSize,
    height: shadowSize
  });

  glCatPath.render("text", {
    target: glCatPath.fb("影"),
    isShadow: true,
    width: shadowSize,
    height: shadowSize
  });

  glCatPath.render("grid", {
    target: glCatPath.fb("🐬"),
    isShadow: false
  });

  glCatPath.render("particlesRender", {
    target: glCatPath.fb("🐬")
  });

  glCatPath.render("text", {
    target: glCatPath.fb("🐬"),
    isShadow: false
  });

  glCatPath.render("fxaa", {
    input: glCatPath.fb("🐬").textures[0]
  });

  glCatPath.render("gauss", {
    target: framebufferPreDof,
    input: glCatPath.fb("fxaa").texture,
    width: width,
    height: height,
    var: 5.0
  });

  glCatPath.render("dof", {
    dry: glCatPath.fb("fxaa").texture,
    predof: framebufferPreDof.texture,
    depth: glCatPath.fb("🐬").textures[1]
  });

  glCatPath.render("Gowrock - bloom", {
    input: framebufferPreDof.texture
  });
  glCatPath.render("bloomFinalize", {
    dry: glCatPath.fb("dof").texture,
    wet: glCatPath.fb("Gowrock - bloom").texture
  });

  glCatPath.render("おたくはすぐポストエフェクトを挿す", {
    target: _glcatPathGui2.default.nullFb,
    input: glCatPath.fb("bloomFinalize").texture
  });

  glCatPath.end();

  init = false;
  totalFrame++;

  // ------

  if (tweak.checkbox("save", { value: false })) {
    saveFrame();
  }

  requestAnimationFrame(update);
};

update();

// ------

window.addEventListener("keydown", function (_e) {
  if (_e.which === 27) {
    tweak.checkbox("play", { set: false });
  }
});

},{"./extrude-path":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/extrude-path.js","./letters":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/letters.js","./libs/glcat":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/glcat.js","./libs/glcat-path-gui":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/glcat-path-gui.js","./libs/mathcat":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/mathcat.js","./libs/tweak":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/tweak.js","./libs/xorshift":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/libs/xorshift.js","./translate-array-2d":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/translate-array-2d.js","./tri-2d-to-3d":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/tri-2d-to-3d.js","./triangulation":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/triangulation.js","./triangulation-drawer":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/triangulation-drawer.js","./vertphaser":"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/vertphaser.js"}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/translate-array-2d.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vertTranslater = function vertTranslater(v, x, y) {
  for (var i = 0; i < v.length / 2; i++) {
    v[i * 2] += x;
    v[i * 2 + 1] += y;
  }
};

exports.default = vertTranslater;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/tri-2d-to-3d.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tri2Dto3D = function tri2Dto3D(v, h) {
  var ret = new Float32Array(v.length / 2 * 3);
  for (var i = 0; i < v.length / 2; i++) {
    ret[i * 3] = v[i * 2];
    ret[i * 3 + 1] = v[i * 2 + 1];
    ret[i * 3 + 2] = h;
  }
  return ret;
};

exports.default = tri2Dto3D;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/triangulation-drawer.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TriangulationDrawer = function () {
  function TriangulationDrawer(_tri, _canvas) {
    _classCallCheck(this, TriangulationDrawer);

    var it = this;

    it.tri = _tri;

    it.canvas = _canvas;
    it.context = it.canvas.getContext('2d');

    it.rmx = 0.0;
    it.rox = 0.0;
    it.rmy = 0.0;
    it.roy = 0.0;

    it.currentA = null;
    it.currentB = null;
  }

  _createClass(TriangulationDrawer, [{
    key: 'range',
    value: function range(_ibx, _itx, _iby, _ity, _obx, _otx, _oby, _oty) {
      var it = this;

      it.rmx = (_otx - _obx) / (_itx - _ibx);
      it.rox = _ibx * it.rmx - _obx;
      it.rmy = (_oty - _oby) / (_ity - _iby);
      it.roy = _iby * it.rmy - _oby;
    }
  }, {
    key: 'drawVert',
    value: function drawVert(_index) {
      var it = this;

      var a = it.tri.getVert(_index);
      var b = it.tri.getVert(_index + 1);
      it.context.beginPath();
      it.context.moveTo(a.x * it.rmx - it.rox, a.y * it.rmy - it.roy);
      it.context.lineTo(b.x * it.rmx - it.rox, b.y * it.rmy - it.roy);
      it.context.stroke();
    }
  }, {
    key: 'drawTri',
    value: function drawTri(_index) {
      var it = this;

      var tri = it.tri.getTri(_index);
      it.context.beginPath();
      it.context.moveTo(tri.x1 * it.rmx - it.rox, tri.y1 * it.rmy - it.roy);
      it.context.lineTo(tri.x2 * it.rmx - it.rox, tri.y2 * it.rmy - it.roy);
      it.context.lineTo(tri.x3 * it.rmx - it.rox, tri.y3 * it.rmy - it.roy);
      it.context.closePath();
      it.context.fill();
      it.context.stroke();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var it = this;

      it.context.save();

      it.context.lineCap = 'round';
      it.context.lineJoin = 'round';

      it.context.lineWidth = 1;
      it.context.fillStyle = 'rgb( 220, 220, 220 )';
      it.context.strokeStyle = 'rgb( 30, 30, 30 )';
      for (var i = 0; i < it.tri.tri.length / 6; i++) {
        it.drawTri(i);
      }

      it.context.lineWidth = 2;
      it.context.strokeStyle = 'rgb( 0, 255, 90 )';
      for (var _i = 0; _i < it.tri.vert.length / 2; _i++) {
        it.drawVert(_i);
      }

      it.context.restore();
    }
  }]);

  return TriangulationDrawer;
}();

exports.default = TriangulationDrawer;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/triangulation.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EPSILON = 1E-10;
var lerp = function lerp(a, b, x) {
  return a + (b - a) * x;
};

var Triangulation = function () {
  function Triangulation(_vert) {
    _classCallCheck(this, Triangulation);

    var it = this;

    it.vert = it.initVert(_vert);
    it.vertOri = it.vert.concat();
    it.vertIndex = 0;
    it.lastGood = 0;
    it.tri = [];

    it.finished = false;
  }

  _createClass(Triangulation, [{
    key: "initVert",
    value: function initVert(_vert) {
      var it = this;

      var vert = [_vert[0], _vert[1]];
      var sw = true;
      var cue = [];

      for (var i = 0; i < _vert.length / 2 - 1; i++) {
        var inter = it.findIntersect(it.getVert(i, _vert), it.getVert(i + 1, _vert), it.getVert(_vert.length / 2 - 1, _vert), it.getVert(0, _vert));

        if (inter) {
          vert.push(inter.x);
          vert.push(inter.y);
          cue.unshift(inter.y);
          cue.unshift(inter.x);
          sw = !sw;
        }

        if (sw) {
          vert.push(_vert[i * 2 + 2]);
          vert.push(_vert[i * 2 + 3]);
        } else {
          cue.unshift(_vert[i * 2 + 3]);
          cue.unshift(_vert[i * 2 + 2]);
        }
      }

      vert = vert.concat(cue);

      return vert;
    }
  }, {
    key: "reset",
    value: function reset() {
      var it = this;

      it.vert = it.vertOri.concat();
      it.vertIndex = 0;
      it.tri = [];

      it.finished = false;
    }
  }, {
    key: "getVert",
    value: function getVert(_index, _array) {
      var it = this;

      var array = _array || it.vert;
      var len = array.length / 2;
      var i = (_index + len) % len;
      return {
        x: array[i * 2],
        y: array[i * 2 + 1]
      };
    }
  }, {
    key: "getTri",
    value: function getTri(_index) {
      var it = this;

      var i = _index;
      return {
        x1: it.tri[i * 6],
        y1: it.tri[i * 6 + 1],
        x2: it.tri[i * 6 + 2],
        y2: it.tri[i * 6 + 3],
        x3: it.tri[i * 6 + 4],
        y3: it.tri[i * 6 + 5]
      };
    }

    // ref: http://qiita.com/ykob/items/ab7f30c43a0ed52d16f2
    // ref: http://www.hiramine.com/programming/graphics/2d_segmentintersection.html

  }, {
    key: "findIntersect",
    value: function findIntersect(_a, _b, _c, _d) {
      var a = (_d.x - _c.x) * (_a.y - _c.y) - (_d.y - _c.y) * (_a.x - _c.x);
      var b = (_d.x - _c.x) * (_b.y - _c.y) - (_d.y - _c.y) * (_b.x - _c.x);
      var c = (_b.x - _a.x) * (_c.y - _a.y) - (_b.y - _a.y) * (_c.x - _a.x);
      var d = (_b.x - _a.x) * (_d.y - _a.y) - (_b.y - _a.y) * (_d.x - _a.x);

      if (!(c * d < -EPSILON && a * b < -EPSILON)) {
        return null;
      }

      var pa = a / ((_b.x - _a.x) * (_d.y - _c.y) - (_b.y - _a.y) * (_d.x - _c.x));
      return {
        x: lerp(_a.x, _b.x, pa),
        y: lerp(_a.y, _b.y, pa)
      };
    }
  }, {
    key: "rotate",
    value: function rotate(_v, _r) {
      return {
        x: _v.x * Math.cos(_r) - _v.y * Math.sin(_r),
        y: _v.x * Math.sin(_r) + _v.y * Math.cos(_r)
      };
    }
  }, {
    key: "isConvex",
    value: function isConvex(_a, _b) {
      var it = this;

      var r = Math.atan2(_a.y, _a.x);
      var b = it.rotate(_b, -r);
      return b.y < EPSILON;
    }
  }, {
    key: "isContain",
    value: function isContain(_a, _b, _c, _p) {
      var a = (_b.x - _a.x) * (_p.y - _b.y) - (_b.y - _a.y) * (_p.x - _b.x);
      var b = (_c.x - _b.x) * (_p.y - _c.y) - (_c.y - _b.y) * (_p.x - _c.x);
      var c = (_a.x - _c.x) * (_p.y - _a.y) - (_a.y - _c.y) * (_p.x - _a.x);

      if (a === 0 || b === 0 || c === 0) {
        return false;
      }

      return Math.sign(a) === Math.sign(b) && Math.sign(b) === Math.sign(c);
    }
  }, {
    key: "isValid",
    value: function isValid(_index) {
      var it = this;

      var v0 = it.getVert(_index - 1);
      var v1 = it.getVert(_index);
      var v2 = it.getVert(_index + 1);

      // if the vertex is convex
      var va = {
        x: v0.x - v1.x,
        y: v0.y - v1.y
      };
      var vb = {
        x: v2.x - v1.x,
        y: v2.y - v1.y
      };
      if (!it.isConvex(va, vb)) {
        return false;
      }

      // if next/prev vertices are not on current vertices
      {
        {
          var v3 = it.getVert(_index - 2);
          var vc = {
            x: v0.x - v3.x,
            y: v0.y - v3.y
          };

          if (it.isOnSameLine(v3, v0, v1) && EPSILON < va.x * vc.x + va.y * vc.y) {
            return false;
          }
        }

        {
          var _v2 = it.getVert(_index + 2);
          var _vc = {
            x: v2.x - _v2.x,
            y: v2.y - _v2.y
          };

          if (it.isOnSameLine(v1, v2, _v2) && EPSILON < vb.x * _vc.x + vb.y * _vc.y) {
            return false;
          }
        }
      }

      // if there are no intersecting vertices
      for (var i = 0; i < it.vertOri.length / 2; i++) {
        if (i !== _index - 1 || i !== _index || i !== _index + 1) {
          var vp = it.getVert(i);
          if (it.isContain(v0, v1, v2, vp)) {
            return false;
          }
        }

        if (it.findIntersect(v0, v2, it.getVert(i, it.vertOri), it.getVert(i + 1, it.vertOri))) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "isOnSameLine",
    value: function isOnSameLine(_a, _b, _c) {
      var d = (_c.x - _a.x) * (_b.y - _a.y) - (_c.y - _a.y) * (_b.x - _a.x);
      return Math.abs(d) < EPSILON;
    }
  }, {
    key: "makeTri",
    value: function makeTri(_index) {
      var it = this;

      var a = it.getVert(_index - 1);
      var b = it.getVert(_index);
      var c = it.getVert(_index + 1);
      if (!it.isOnSameLine(a, b, c)) {
        it.tri.push(a.x, a.y, b.x, b.y, c.x, c.y);
      }

      it.vert.splice(_index * 2, 2);
    }
  }, {
    key: "step",
    value: function step() {
      var it = this;

      if (it.vert.length === 6) {
        it.makeTri(0);
        it.vert = [];
        it.finished = true;
        return;
      }

      var valid = it.isValid(it.vertIndex);

      if (valid) {
        it.makeTri(it.vertIndex);
      } else {
        it.vertIndex++;
      }

      it.vertIndex = it.vertIndex % (it.vert.length / 2.0);

      if (valid) {
        it.lastGood = it.vertIndex;
      } else if (it.vertIndex === it.lastGood) {
        it.vert = [];
        it.finished = true;
      }
    }
  }, {
    key: "do",
    value: function _do(_count) {
      var it = this;

      for (var i = 0; i < _count; i++) {
        if (it.finished) {
          break;
        }
        it.step();
      }
    }
  }]);

  return Triangulation;
}();

exports.default = Triangulation;

},{}],"/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/vertphaser.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, x) {
  return a + (b - a) * x;
};
var dist = function dist(ax, ay, bx, by) {
  return Math.sqrt((bx - ax) * (bx - ax) + (by - ay) * (by - ay));
};

var VertPhaser = function () {
  function VertPhaser(_vert) {
    _classCallCheck(this, VertPhaser);

    var it = this;

    it.vert = _vert.concat();
    it.totalLength = 0.0;
    it.lengthMap = [];

    it.calcLength();
  }

  _createClass(VertPhaser, [{
    key: "calcLength",
    value: function calcLength() {
      var it = this;

      it.totalLength = 0.0;
      it.lengthMap = [];

      for (var i = 0; i < it.vert.length / 2 - 1; i++) {
        var _l = dist(it.vert[i * 2 + 0], it.vert[i * 2 + 1], it.vert[i * 2 + 2], it.vert[i * 2 + 3]);
        it.totalLength += _l;
        it.lengthMap.push(_l);
      }

      var l = dist(it.vert[it.vert.length - 2], it.vert[it.vert.length - 1], it.vert[0], it.vert[1]);
      it.totalLength += l;
      it.lengthMap.push(l);
    }
  }, {
    key: "getPhaseInfo",
    value: function getPhaseInfo(_phase) {
      var it = this;

      var phase = _phase % 1.0;
      var len = phase * it.totalLength;

      var i = 0;
      var psum = 0.0;
      var sum = 0.0;
      while (sum <= len) {
        psum = sum;
        sum += it.lengthMap[i];
        i++;
      }

      var p = (len - psum) / (sum - psum);
      var x = lerp(it.vert[i * 2 - 2], it.vert[(i * 2 + 0) % it.vert.length], p);
      var y = lerp(it.vert[i * 2 - 1], it.vert[(i * 2 + 1) % it.vert.length], p);

      return {
        phase: phase,
        length: len,
        i: i,
        x: x,
        y: y,
        p: p
      };
    }
  }, {
    key: "do",
    value: function _do(_begin, _phase) {
      var it = this;

      var begin = it.getPhaseInfo(_begin);
      var end = it.getPhaseInfo(_begin + _phase);

      var ret = [begin.x, begin.y];
      if (begin.phase <= end.phase) {
        ret = ret.concat(it.vert.slice(begin.i * 2, end.i * 2));
      } else {
        ret = ret.concat(it.vert.slice(begin.i * 2));
        ret = ret.concat(it.vert.slice(0, end.i * 2));
      }
      ret.push(end.x);
      ret.push(end.y);

      return ret;
    }
  }]);

  return VertPhaser;
}();

exports.default = VertPhaser;

},{}]},{},["/Users/Yutaka/Dropbox/pro/_Projects/_eom/20180202/src/script/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0L2V4dHJ1ZGUtcGF0aC5qcyIsInNyYy9zY3JpcHQvbGV0dGVycy5qcyIsInNyYy9zY3JpcHQvbGlicy9nbGNhdC1wYXRoLWd1aS5qcyIsInNyYy9zY3JpcHQvbGlicy9nbGNhdC1wYXRoLmpzIiwic3JjL3NjcmlwdC9saWJzL2dsY2F0LmpzIiwic3JjL3NjcmlwdC9saWJzL21hdGhjYXQuanMiLCJzcmMvc2NyaXB0L2xpYnMvdHdlYWsuanMiLCJzcmMvc2NyaXB0L2xpYnMveG9yc2hpZnQuanMiLCJzcmMvc2NyaXB0L21haW4uanMiLCJzcmMvc2NyaXB0L3RyYW5zbGF0ZS1hcnJheS0yZC5qcyIsInNyYy9zY3JpcHQvdHJpLTJkLXRvLTNkLmpzIiwic3JjL3NjcmlwdC90cmlhbmd1bGF0aW9uLWRyYXdlci5qcyIsInNyYy9zY3JpcHQvdHJpYW5ndWxhdGlvbi5qcyIsInNyYy9zY3JpcHQvdmVydHBoYXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFFLENBQUYsRUFBSyxHQUFMLEVBQVUsTUFBVixFQUFzQjtBQUN0QyxNQUFJLFFBQVEsRUFBRSxNQUFGLEdBQVcsQ0FBdkI7O0FBRUEsTUFBSSxNQUFNLElBQUksWUFBSixDQUFrQixRQUFRLEVBQTFCLENBQVY7QUFDQSxNQUFJLE1BQU0sSUFBSSxZQUFKLENBQWtCLFFBQVEsRUFBMUIsQ0FBVjs7QUFFQSxPQUFNLElBQUksSUFBSSxDQUFkLEVBQWlCLElBQUksS0FBckIsRUFBNEIsR0FBNUIsRUFBbUM7QUFDakMsUUFBSSxLQUFLLEVBQUcsSUFBSSxDQUFQLENBQVQ7QUFDQSxRQUFJLEtBQUssRUFBRyxJQUFJLENBQUosR0FBUSxDQUFYLENBQVQ7QUFDQSxRQUFJLEtBQUssRUFBSyxDQUFFLElBQUksQ0FBTixJQUFZLEtBQWQsR0FBd0IsQ0FBM0IsQ0FBVDtBQUNBLFFBQUksS0FBSyxFQUFLLENBQUUsSUFBSSxDQUFOLElBQVksS0FBZCxHQUF3QixDQUF4QixHQUE0QixDQUEvQixDQUFUO0FBQ0EsUUFBSyxJQUFJLEVBQVQsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsTUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsTUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsR0FBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFVLENBQWYsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsTUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsR0FBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsRUFBckI7QUFDQSxRQUFLLElBQUksRUFBSixHQUFTLEVBQWQsSUFBcUIsR0FBckI7O0FBRUEsUUFBSSxLQUFLLEtBQUssRUFBZDtBQUNBLFFBQUksS0FBSyxLQUFLLEVBQWQ7QUFDQSxRQUFJLElBQUksS0FBSyxJ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SUFBSSxNQUFKLENBQVksR0FBRyxJQUFILENBQVEsS0FBUixDQUFlLE1BQU0sQ0FBTixHQUFVLENBQXpCLEVBQTRCLElBQUksQ0FBSixHQUFRLENBQXBDLENBQVosQ0FBTjtBQUNELE9BRkQsTUFFTztBQUNMLGNBQU0sSUFBSSxNQUFKLENBQVksR0FBRyxJQUFILENBQVEsS0FBUixDQUFlLE1BQU0sQ0FBTixHQUFVLENBQXpCLENBQVosQ0FBTjtBQUNBLGNBQU0sSUFBSSxNQUFKLENBQVksR0FBRyxJQUFILENBQVEsS0FBUixDQUFlLENBQWYsRUFBa0IsSUFBSSxDQUFKLEdBQVEsQ0FBMUIsQ0FBWixDQUFOO0FBQ0Q7QUFDRCxVQUFJLElBQUosQ0FBVSxJQUFJLENBQWQ7QUFDQSxVQUFJLElBQUosQ0FBVSxJQUFJLENBQWQ7O0FBRUEsYUFBTyxHQUFQO0FBQ0Q7QUE1RkM7O0FBQUE7QUFBQSxHQUFKOztrQkErRmUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgZXh0cnVkZVBhdGggPSAoIHYsIHRvcCwgYm90dG9tICkgPT4ge1xuICBsZXQgcGF0aHMgPSB2Lmxlbmd0aCAvIDI7XG5cbiAgbGV0IHBvcyA9IG5ldyBGbG9hdDMyQXJyYXkoIHBhdGhzICogMTggKTtcbiAgbGV0IG5vciA9IG5ldyBGbG9hdDMyQXJyYXkoIHBhdGhzICogMTggKTtcblxuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXRoczsgaSArKyApIHtcbiAgICBsZXQgeDAgPSB2WyBpICogMiBdO1xuICAgIGxldCB5MCA9IHZbIGkgKiAyICsgMSBdO1xuICAgIGxldCB4MSA9IHZbICggKCBpICsgMSApICUgcGF0aHMgKSAqIDIgXTtcbiAgICBsZXQgeTEgPSB2WyAoICggaSArIDEgKSAlIHBhdGhzICkgKiAyICsgMSBdO1xuICAgIHBvc1sgaSAqIDE4ICAgICAgXSA9IHgwO1xuICAgIHBvc1sgaSAqIDE4ICsgIDEgXSA9IHkwO1xuICAgIHBvc1sgaSAqIDE4ICsgIDIgXSA9IGJvdHRvbTtcbiAgICBwb3NbIGkgKiAxOCArICAzIF0gPSB4MTtcbiAgICBwb3NbIGkgKiAxOCArICA0IF0gPSB5MTtcbiAgICBwb3NbIGkgKiAxOCArICA1IF0gPSBib3R0b207XG4gICAgcG9zWyBpICogMTggKyAgNiBdID0geDE7XG4gICAgcG9zWyBpICogMTggKyAgNyBdID0geTE7XG4gICAgcG9zWyBpICogMTggKyAgOCBdID0gdG9wO1xuICAgIHBvc1sgaSAqIDE4ICsgIDkgXSA9IHgwO1xuICAgIHBvc1sgaSAqIDE4ICsgMTAgXSA9IHkwO1xuICAgIHBvc1sgaSAqIDE4ICsgMTEgXSA9IGJvdHRvbTtcbiAgICBwb3NbIGkgKiAxOCArIDEyIF0gPSB4MTtcbiAgICBwb3NbIGkgKiAxOCArIDEzIF0gPSB5MTtcbiAgICBwb3NbIGkgKiAxOCArIDE0IF0gPSB0b3A7XG4gICAgcG9zWyBpICogMTggKyAxNSBdID0geDA7XG4gICAgcG9zWyBpICogMTggKyAxNiBdID0geTA7XG4gICAgcG9zWyBpICogMTggKyAxNyBdID0gdG9wO1xuXG4gICAgbGV0IGR4ID0geDEgLSB4MDtcbiAgICBsZXQgZHkgPSB5MSAtIHkwO1xuICAgIGxldCBsID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuICAgIGxldCBueCA9IGR5IC8gbDtcbiAgICBsZXQgbnkgPSAtZHggLyBsO1xuICAgIGZvciAoIGxldCBqID0gMDsgaiA8IDY7IGogKysgKSB7XG4gICAgICBub3JbIGkgKiAxOCArIGogKiAzICAgICBdID0gbng7XG4gICAgICBub3JbIGkgKiAxOCArIGogKiAzICsgMSBdID0gbnk7XG4gICAgICBub3JbIGkgKiAxOCArIGogKiAzICsgMiBdID0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvczogcG9zLFxuICAgIG5vcjogbm9yXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRydWRlUGF0aDsiLCJleHBvcnQgZGVmYXVsdCBbXG4gIFsgMCwgMCwgMSwgMCwgMSwgMS41LCAzLjUsIDEuNSwgMy41LCAyLjUsIDEsIDIuNSwgMSwgNCwgNCwgNCwgNCwgMCwgNSwgMCwgNSwgNC41LCA0LjUsIDUsIDAuNSwgNSwgMCwgNC41IF0sXG4gIFsgMCwgMCwgNC41LCAwLCA1LCAwLjUsIDUsIDIsIDQuNSwgMi41LCA1LCAzLCA1LCA0LjUsIDQuNSwgNSwgMCwgNSwgMCwgNCwgNCwgNCwgNCwgMywgMS41LCAzLCAxLjUsIDIsIDQsIDIsIDQsIDEsIDEsIDEsIDEsIDMuNSwgMCwgMy41IF0sXG4gIFsgMCwgMC41LCAwLjUsIDAsIDUsIDAsIDUsIDEsIDEsIDEsIDEsIDQsIDUsIDQsIDUsIDUsIDAuNSwgNSwgMCwgNC41IF0sXG4gIFsgMCwgMCwgNC41LCAwLCA1LCAwLjUsIDUsIDQuNSwgNC41LCA1LCAwLCA1LCAwLCA0LCA0LCA0LCA0LCAxLCAxLCAxLCAxLCAzLjUsIDAsIDMuNSBdLFxuICBbIDAsIDAuNSwgMC41LCAwLCA1LCAwLCA1LCAxLCAxLCAxLCAxLCAyLCA1LCAyLCA1LCAzLCAxLCAzLCAxLCA0LCA1LCA0LCA1LCA1LCAwLjUsIDUsIDAsIDQuNSBdLFxuICBbIDAsIDAsIDEsIDAsIDEsIDIsIDUsIDIsIDUsIDMsIDEsIDMsIDEsIDQsIDUsIDQsIDUsIDUsIDAuNSwgNSwgMCwgNC41IF0sXG4gIFsgMCwgMC41LCAwLjUsIDAsIDUsIDAsIDUsIDIsIDQsIDIsIDQsIDEsIDEsIDEsIDEsIDQsIDUsIDQsIDUsIDUsIDAuNSwgNSwgMCwgNC41IF0sXG4gIFsgMCwgMCwgMSwgMCwgMSwgMiwgNCwgMiwgNCwgMCwgNSwgMCwgNSwgNSwgNCwgNSwgNCwgMywgMSwgMywgMSwgNSwgMCwgNSBdLFxuICBbIDIsIDAsIDMsIDAsIDMsIDUsIDIsIDUgXSxcbiAgWyAwLCAwLjUsIDAuNSwgMCwgNC41LCAwLCA1LCAwLjUsIDUsIDUsIDQsIDUsIDQsIDEsIDEsIDEsIDEsIDIsIDAsIDIgXSxcbiAgWyAwLCAwLCAxLCAwLCAxLCAyLCA0LCAyLCA0LCAwLCA1LCAwLCA1LCAyLjUsIDQuNSwgMywgNCwgMywgNSwgNSwgNCwgNSwgMywgMywgMSwgMywgMSwgNSwgMCwgNSBdLFxuICBbIDAsIDAsIDUsIDAsIDUsIDEsIDEsIDEsIDEsIDUsIDAsIDUgXSxcbiAgWyAwLCAwLCAxLCAwLCAxLCA0LCAyLCA0LCAyLCAwLCAzLCAwLCAzLCA0LCA0LCA0LCA0LCAwLCA1LCAwLCA1LCA0LjUsIDQuNSwgNSwgMCwgNSBdLFxuICBbIDAsIDAsIDEsIDAsIDEsIDQsIDQsIDQsIDQsIDAsIDUsIDAsIDUsIDQuNSwgNC41LCA1LCAwLCA1IF0sXG4gIFsgMCwgMC41LCAwLjUsIDAsIDQuNSwgMCwgNSwgMC41LCA1LCA0LjUsIDQuNSwgNSwgNCwgNSwgNCwgMSwgMSwgMSwgMSwgNCwgMy41LCA0LCAzLjUsIDUsIDAuNSwgNSwgMCwgNC41IF0sXG4gIFsgMCwgMCwgMSwgMCwgMSwgNCwgNCwgNCwgNCwgMywgMS41LCAzLCAxLjUsIDIsIDQuNSwgMiwgNSwgMi41LCA1LCA0LjUsIDQuNSwgNSwgMCwgNSBdLFxuICBbIDAsIDAuNSwgMC41LCAwLCA1LCAwLCA1LCAwLjUsIDQuNSwgMSwgMSwgMSwgMSwgNCwgNCwgNCwgNCwgMS41LCA1LCAxLjUsIDUsIDQuNSwgNC41LCA1LCAwLjUsIDUsIDAsIDQuNSBdLFxuICBbIDAsIDAsIDEsIDAsIDEsIDQsIDQsIDQsIDQsIDMsIDEuNSwgMywgMS41LCAyLCAyLjksIDIsIDMuOSwgMCwgNSwgMCwgNCwgMiwgNC41LCAyLCA1LCAyLjUsIDUsIDQuNSwgNC41LCA1LCAwLCA1IF0sXG4gIFsgMCwgMCwgNC41LCAwLCA1LCAwLjUsIDUsIDIuNSwgNC41LCAzLCAxLCAzLCAxLCA0LCA1LCA0LCA1LCA1LCAwLjUsIDUsIDAsIDQuNSwgMCwgMi41LCAwLjUsIDIsIDQsIDIsIDQsIDEsIDAsIDEgXSxcbiAgWyAyLCAwLCAzLCAwLCAzLCA0LCA1LCA0LCA1LCA1LCAwLCA1LCAwLCA0LCAyLCA0IF0sXG4gIFsgMCwgMC41LCAwLjUsIDAsIDQuNSwgMCwgNSwgMC41LCA1LCA1LCA0LCA1LCA0LCAxLCAxLCAxLCAxLCA1LCAwLCA1IF0sXG4gIFsgMCwgNSwgMCwgMCwgNC41LCAwLCA1LCAwLjUsIDUsIDUsIDQsIDUsIDQsIDEsIDEsIDEsIDEsIDUgXSxcbiAgWyAwLCAwLjUsIDAuNSwgMCwgNC41LCAwLCA1LCAwLjUsIDUsIDUsIDQsIDUsIDQsIDEsIDMsIDEsIDMsIDUsIDIsIDUsIDIsIDEsIDEsIDEsIDEsIDUsIDAsIDUgXSxcbiAgWyAwLCAwLCAxLCAwLCAxLCAyLCA0LCAyLCA0LCAwLCA1LCAwLCA1LCAyLCA0LjUsIDIuNSwgNSwgMywgNSwgNSwgNCwgNSwgNCwgMywgMSwgMywgMSwgNSwgMCwgNSwgMCwgMywgMC41LCAyLjUsIDAsIDIgXSxcbiAgWyAwLCA1LCAwLCAyLjUsIDAuNSwgMiwgNCwgMiwgNCwgMSwgMCwgMSwgMCwgMCwgNC41LCAwLCA1LCAwLjUsIDUsIDUsIDQsIDUsIDQsIDMsIDEsIDMsIDEsIDUgXSxcbiAgWyAwLCAwLCA1LCAwLCA1LCAxLCAxLCAxLCAxLCAyLCA0LjUsIDIsIDUsIDIuNSwgNSwgNSwgMCwgNSwgMCwgNCwgNCwgNCwgNCwgMywgMC41LCAzLCAwLCAyLjUgXSxcbl07IiwiaW1wb3J0IFBhdGggZnJvbSAnLi9nbGNhdC1wYXRoJztcblxuY29uc3QgZ2xzbGlmeSA9IHJlcXVpcmUoICdnbHNsaWZ5JyApO1xuXG5sZXQgcmVxdWlyZWRGaWVsZHMgPSAoIG9iamVjdCwgbmFuaXRoZWZ1Y2ssIGZpZWxkcyApID0+IHtcbiAgZmllbGRzLm1hcCggZmllbGQgPT4ge1xuICAgIGlmICggdHlwZW9mIG9iamVjdFsgZmllbGQgXSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcbiAgICAgIHRocm93IFwiR0xDYXQtUGF0aDogXCIgKyBmaWVsZCArIFwiIGlzIHJlcXVpcmVkIGZvciBcIiArIG5hbml0aGVmdWNrO1xuICAgIH1cbiAgfSApO1xufTtcblxubGV0IFBhdGhHVUkgPSBjbGFzcyBleHRlbmRzIFBhdGgge1xuICBjb25zdHJ1Y3RvciggZ2xDYXQsIHBhcmFtcyApIHtcbiAgICBzdXBlciggZ2xDYXQsIHBhcmFtcyApO1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICByZXF1aXJlZEZpZWxkcyggcGFyYW1zLCBcInBhcmFtc1wiLCBbXG4gICAgICBcImNhbnZhc1wiLFxuICAgICAgXCJlbFwiXG4gICAgXSApO1xuXG4gICAgaXQuZ3VpID0geyBwYXJlbnQ6IGl0LnBhcmFtcy5lbCB9O1xuXG4gICAgaXQuZ3VpLmluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNwYW5cIiApO1xuICAgIGl0Lmd1aS5wYXJlbnQuYXBwZW5kQ2hpbGQoIGl0Lmd1aS5pbmZvICk7XG4gICAgXG4gICAgaXQuZ3VpLnJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG4gICAgaXQuZ3VpLnJhbmdlLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgaXQuZ3VpLnJhbmdlLm1pbiA9IDA7XG4gICAgaXQuZ3VpLnJhbmdlLm1heCA9IDA7XG4gICAgaXQuZ3VpLnJhbmdlLnN0ZXAgPSAxO1xuICAgIGl0Lmd1aS5wYXJlbnQuYXBwZW5kQ2hpbGQoIGl0Lmd1aS5yYW5nZSApO1xuXG4gICAgaXQuZGF0ZUxpc3QgPSBuZXcgQXJyYXkoIDMwICkuZmlsbCggMCApO1xuICAgIGl0LmRhdGVMaXN0SW5kZXggPSAwO1xuICAgIGl0LnRvdGFsRnJhbWVzID0gMDtcbiAgICBpdC5mcHMgPSAwO1xuICAgIGl0LmN1cnJlbnRJbmRleCA9IDA7XG4gICAgaXQudmlld05hbWUgPSBcIlwiO1xuICAgIGl0LnZpZXdJbmRleCA9IDA7XG5cbiAgICBsZXQgZ2wgPSBnbENhdC5nbDtcbiAgICBsZXQgdmJvUXVhZCA9IGdsQ2F0LmNyZWF0ZVZlcnRleGJ1ZmZlciggWyAtMSwgLTEsIDEsIC0xLCAtMSwgMSwgMSwgMSBdICk7XG4gICAgaXQuYWRkKCB7XG4gICAgICBfX1BhdGhHdWlSZXR1cm46IHtcbiAgICAgICAgd2lkdGg6IGl0LnBhcmFtcy5jYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogaXQucGFyYW1zLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHZlcnQ6IFwiYXR0cmlidXRlIHZlYzIgcDt2b2lkIG1haW4oKXtnbF9Qb3NpdGlvbj12ZWM0KHAsMCwxKTt9XCIsXG4gICAgICAgIGZyYWc6IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3VuaWZvcm0gdmVjMiByO3VuaWZvcm0gc2FtcGxlcjJEIHM7dm9pZCBtYWluKCl7Z2xfRnJhZ0NvbG9yPXRleHR1cmUyRChzLGdsX0ZyYWdDb29yZC54eS9yKTt9XCIsXG4gICAgICAgIGJsZW5kOiBbIGdsLk9ORSwgZ2wuT05FIF0sXG4gICAgICAgIGNsZWFyOiBbIDAuMCwgMC4wLCAwLjAsIDEuMCBdLFxuICAgICAgICBmdW5jOiAoIF9wLCBwYXJhbXMgKSA9PiB7XG4gICAgICAgICAgZ2wudmlld3BvcnQoIDAsIDAsIGl0LnBhcmFtcy5jYW52YXMud2lkdGgsIGl0LnBhcmFtcy5jYW52YXMuaGVpZ2h0ICk7XG4gICAgICAgICAgZ2xDYXQudW5pZm9ybTJmdiggJ3InLCBbIGl0LnBhcmFtcy5jYW52YXMud2lkdGgsIGl0LnBhcmFtcy5jYW52YXMuaGVpZ2h0IF0gKTtcbiAgICBcbiAgICAgICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAncycsIHBhcmFtcy5pbnB1dCwgMCApO1xuICAgICAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSApO1xuICB9XG5cbiAgYmVnaW4oKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGl0LmN1cnJlbnRJbmRleCA9IDA7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGl0Lmd1aS5yYW5nZS5tYXggPSBNYXRoLm1heCggaXQuZ3VpLnJhbmdlLm1heCwgaXQuY3VycmVudEluZGV4ICk7XG4gICAgaXQuY3VycmVudEluZGV4ID0gMDtcblxuICAgIGxldCBub3cgPSArbmV3IERhdGUoKSAqIDFFLTM7XG4gICAgaXQuZGF0ZUxpc3RbIGl0LmRhdGVMaXN0SW5kZXggXSA9IG5vdztcbiAgICBpdC5kYXRlTGlzdEluZGV4ID0gKCBpdC5kYXRlTGlzdEluZGV4ICsgMSApICUgaXQuZGF0ZUxpc3QubGVuZ3RoO1xuICAgIGl0LmZwcyA9IChcbiAgICAgICggaXQuZGF0ZUxpc3QubGVuZ3RoIC0gMSApXG4gICAgICAvICggbm93IC0gaXQuZGF0ZUxpc3RbIGl0LmRhdGVMaXN0SW5kZXggXSApXG4gICAgKS50b0ZpeGVkKCAxICk7XG4gICAgXG4gICAgaXQudG90YWxGcmFtZXMgKys7XG5cbiAgICBpdC5ndWkuaW5mby5pbm5lclRleHQgPSAoXG4gICAgICBcIlBhdGg6IFwiICsgaXQudmlld05hbWUgKyBcIiAoXCIgKyBpdC52aWV3SW5kZXggKyBcIilcXG5cIlxuICAgICAgKyBpdC5mcHMgKyBcIiBGUFNcXG5cIlxuICAgICAgKyBpdC50b3RhbEZyYW1lcyArIFwiIGZyYW1lc1xcblwiXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlciggbmFtZSwgcGFyYW1zICkge1xuICAgIGxldCBpdCA9IHRoaXM7XG4gICAgXG4gICAgaXQuY3VycmVudEluZGV4ICsrO1xuICAgIGxldCB2aWV3ID0gcGFyc2VJbnQoIGl0Lmd1aS5yYW5nZS52YWx1ZSApO1xuXG4gICAgaWYgKCBpdC5jdXJyZW50SW5kZXggPD0gdmlldyB8fCB2aWV3ID09PSAwICkge1xuICAgICAgaXQudmlld05hbWUgPSB2aWV3ID09PSAwID8gXCIqRnVsbCpcIiA6IG5hbWU7XG4gICAgICBpdC52aWV3SW5kZXggPSBpdC5jdXJyZW50SW5kZXg7XG5cbiAgICAgIHN1cGVyLnJlbmRlciggbmFtZSwgcGFyYW1zICk7XG5cbiAgICAgIGlmICggaXQuY3VycmVudEluZGV4ID09PSB2aWV3ICkge1xuICAgICAgICBsZXQgdCA9IChcbiAgICAgICAgICAoIHBhcmFtcyAmJiBwYXJhbXMudGFyZ2V0IClcbiAgICAgICAgICA/IHBhcmFtcy50YXJnZXRcbiAgICAgICAgICA6IGl0LnBhdGhzWyBuYW1lIF0uZnJhbWVidWZmZXJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIHQgJiYgdC5mcmFtZWJ1ZmZlciApIHtcbiAgICAgICAgICBsZXQgaSA9IHQudGV4dHVyZXMgPyB0LnRleHR1cmVzWyAwIF0gOiB0LnRleHR1cmU7XG4gICAgICAgICAgaWYgKCBpdC5wYXJhbXMuc3RyZXRjaCApIHtcbiAgICAgICAgICAgIHN1cGVyLnJlbmRlciggXCJfX1BhdGhHdWlSZXR1cm5cIiwge1xuICAgICAgICAgICAgICB0YXJnZXQ6IFBhdGhHVUkubnVsbEZiLFxuICAgICAgICAgICAgICBpbnB1dDogaSxcbiAgICAgICAgICAgICAgd2lkdGg6IGl0LnBhcmFtcy5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogaXQucGFyYW1zLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXQucGFyYW1zLmNhbnZhcy53aWR0aCA9ICggcGFyYW1zID8gcGFyYW1zLndpZHRoIDogMCApIHx8IGl0LnBhdGhzWyBuYW1lIF0ud2lkdGggfHwgaXQucGFyYW1zLndpZHRoO1xuICAgICAgICAgICAgaXQucGFyYW1zLmNhbnZhcy5oZWlnaHQgPSAoIHBhcmFtcyA/IHBhcmFtcy5oZWlnaHQgOiAwICkgfHwgaXQucGF0aHNbIG5hbWUgXS5oZWlnaHQgfHwgaXQucGFyYW1zLmhlaWdodDtcbiAgICAgICAgICAgIHN1cGVyLnJlbmRlciggXCJfX1BhdGhHdWlSZXR1cm5cIiwge1xuICAgICAgICAgICAgICB0YXJnZXQ6IFBhdGhHVUkubnVsbEZiLFxuICAgICAgICAgICAgICBpbnB1dDogaVxuICAgICAgICAgICAgfSApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGF0aEdVSTsiLCJjb25zdCBnbHNsaWZ5ID0gcmVxdWlyZSggJ2dsc2xpZnknICk7XG5cbmxldCByZXF1aXJlZEZpZWxkcyA9ICggb2JqZWN0LCBuYW5pdGhlZnVjaywgZmllbGRzICkgPT4ge1xuICBmaWVsZHMubWFwKCBmaWVsZCA9PiB7XG4gICAgaWYgKCB0eXBlb2Ygb2JqZWN0WyBmaWVsZCBdID09PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgdGhyb3cgXCJHTENhdC1QYXRoOiBcIiArIGZpZWxkICsgXCIgaXMgcmVxdWlyZWQgZm9yIFwiICsgbmFuaXRoZWZ1Y2s7XG4gICAgfVxuICB9ICk7XG59O1xuXG5sZXQgUGF0aCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoIGdsQ2F0LCBwYXJhbXMgKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGl0LmdsQ2F0ID0gZ2xDYXQ7XG4gICAgaXQuZ2wgPSBnbENhdC5nbDtcblxuICAgIGl0LnBhdGhzID0ge307XG4gICAgaXQuZ2xvYmFsRnVuYyA9ICgpID0+IHt9O1xuICAgIGl0LnBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIGFkZCggcGF0aHMgKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGZvciAoIGxldCBuYW1lIGluIHBhdGhzICkge1xuICAgICAgbGV0IHBhdGggPSBwYXRoc1sgbmFtZSBdO1xuICAgICAgcmVxdWlyZWRGaWVsZHMoIHBhdGgsIFwicGF0aCBvYmplY3RcIiwgW1xuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwiaGVpZ2h0XCIsXG4gICAgICAgIFwidmVydFwiLFxuICAgICAgICBcImZyYWdcIlxuICAgICAgXSApO1xuICAgICAgaXQucGF0aHNbIG5hbWUgXSA9IHBhdGg7XG5cbiAgICAgIGlmICggdHlwZW9mIHBhdGguZGVwdGhUZXN0ID09PSBcInVuZGVmaW5lZFwiICkgeyBwYXRoLmRlcHRoVGVzdCA9IHRydWU7IH1cbiAgICAgIGlmICggdHlwZW9mIHBhdGguYmxlbmQgPT09IFwidW5kZWZpbmVkXCIgKSB7IHBhdGguYmxlbmQgPSBbIGl0LmdsLlNSQ19BTFBIQSwgaXQuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSBdOyB9XG4gICAgICBcbiAgICAgIGlmICggcGF0aC5mcmFtZWJ1ZmZlciApIHtcbiAgICAgICAgaWYgKCBwYXRoLmRyYXdidWZmZXJzICkge1xuICAgICAgICAgIHBhdGguZnJhbWVidWZmZXIgPSBpdC5nbENhdC5jcmVhdGVEcmF3QnVmZmVycyggcGF0aC53aWR0aCwgcGF0aC5oZWlnaHQsIHBhdGguZHJhd2J1ZmZlcnMgKTtcbiAgICAgICAgfSBlbHNlIGlmICggcGF0aC5mbG9hdCApIHtcbiAgICAgICAgICBwYXRoLmZyYW1lYnVmZmVyID0gaXQuZ2xDYXQuY3JlYXRlRmxvYXRGcmFtZWJ1ZmZlciggcGF0aC53aWR0aCwgcGF0aC5oZWlnaHQgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoLmZyYW1lYnVmZmVyID0gaXQuZ2xDYXQuY3JlYXRlRnJhbWVidWZmZXIoIHBhdGgud2lkdGgsIHBhdGguaGVpZ2h0ICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGF0aC5wcm9ncmFtID0gaXQuZ2xDYXQuY3JlYXRlUHJvZ3JhbSggcGF0aC52ZXJ0LCBwYXRoLmZyYWcgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoIG5hbWUsIHBhcmFtcyApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuIFxuICAgIGxldCBwYXRoID0gaXQucGF0aHNbIG5hbWUgXTtcbiAgICBpZiAoICFwYXRoICkgeyB0aHJvdyBcIkdMQ2F0LVBhdGg6IFRoZSBwYXRoIGNhbGxlZCBcIiArIG5hbWUgKyBcIiBpcyBub3QgZGVmaW5lZCFcIjsgfVxuICAgIFxuICAgIGlmICggIXBhcmFtcyApIHsgcGFyYW1zID0ge307IH1cbiAgICBwYXJhbXMuZnJhbWVidWZmZXIgPSB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gXCJ1bmRlZmluZWRcIiA/IHBhcmFtcy50YXJnZXQuZnJhbWVidWZmZXIgOiBwYXRoLmZyYW1lYnVmZmVyID8gcGF0aC5mcmFtZWJ1ZmZlci5mcmFtZWJ1ZmZlciA6IG51bGw7XG5cbiAgICBsZXQgd2lkdGggPSBwYXJhbXMud2lkdGggfHwgcGF0aC53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCB8fCBwYXRoLmhlaWdodDtcbiAgICBcbiAgICBpdC5nbC52aWV3cG9ydCggMCwgMCwgd2lkdGgsIGhlaWdodCApO1xuICAgIGl0LmdsQ2F0LnVzZVByb2dyYW0oIHBhdGgucHJvZ3JhbSApO1xuICAgIGl0LmdsLmJpbmRGcmFtZWJ1ZmZlciggaXQuZ2wuRlJBTUVCVUZGRVIsIHBhcmFtcy5mcmFtZWJ1ZmZlciApO1xuICAgIGlmICggaXQucGFyYW1zLmRyYXdidWZmZXJzICkge1xuICAgICAgaXQuZ2xDYXQuZHJhd0J1ZmZlcnMoIHBhdGguZHJhd2J1ZmZlcnMgPyBwYXRoLmRyYXdidWZmZXJzIDogcGFyYW1zLmZyYW1lYnVmZmVyID09PSBudWxsID8gWyBpdC5nbC5CQUNLIF0gOiBbIGl0LmdsLkNPTE9SX0FUVEFDSE1FTlQwIF0gKTtcbiAgICB9XG4gICAgaXQuZ2wuYmxlbmRGdW5jKCAuLi5wYXRoLmJsZW5kICk7XG4gICAgaWYgKCBwYXRoLmNsZWFyICkgeyBpdC5nbENhdC5jbGVhciggLi4ucGF0aC5jbGVhciApOyB9XG4gICAgcGF0aC5kZXB0aFRlc3QgPyBpdC5nbC5lbmFibGUoIGl0LmdsLkRFUFRIX1RFU1QgKSA6IGl0LmdsLmRpc2FibGUoIGl0LmdsLkRFUFRIX1RFU1QgKTtcbiBcbiAgICBpdC5nbENhdC51bmlmb3JtMmZ2KCAncmVzb2x1dGlvbicsIFsgd2lkdGgsIGhlaWdodCBdICk7XG4gICAgaXQuZ2xvYmFsRnVuYyggcGF0aCwgcGFyYW1zICk7XG5cbiAgICBpZiAoIHBhdGguZnVuYyApIHsgcGF0aC5mdW5jKCBwYXRoLCBwYXJhbXMgKTsgfVxuICB9XG5cbiAgcmVzaXplKCBuYW1lLCB3aWR0aCwgaGVpZ2h0ICkge1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICBsZXQgcGF0aCA9IGl0LnBhdGhzWyBuYW1lIF07XG5cbiAgICBwYXRoLndpZHRoID0gd2lkdGg7XG4gICAgcGF0aC5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICBpZiAoIHBhdGguZnJhbWVidWZmZXIgKSB7XG4gICAgICBpZiAoIGl0LnBhcmFtcy5kcmF3YnVmZmVycyAmJiBwYXRoLmRyYXdidWZmZXJzICkge1xuICAgICAgICBwYXRoLmZyYW1lYnVmZmVyID0gaXQuZ2xDYXQuY3JlYXRlRHJhd0J1ZmZlcnMoIHBhdGgud2lkdGgsIHBhdGguaGVpZ2h0LCBwYXRoLmRyYXdidWZmZXJzICk7XG4gICAgICB9IGVsc2UgaWYgKCBwYXRoLmZsb2F0ICkge1xuICAgICAgICBpdC5nbENhdC5yZXNpemVGbG9hdEZyYW1lYnVmZmVyKCBwYXRoLmZyYW1lYnVmZmVyLCBwYXRoLndpZHRoLCBwYXRoLmhlaWdodCApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXQuZ2xDYXQucmVzaXplRnJhbWVidWZmZXIoIHBhdGguZnJhbWVidWZmZXIsIHBhdGgud2lkdGgsIHBhdGguaGVpZ2h0ICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCB0eXBlb2YgcGF0aC5vbnJlc2l6ZSA9PT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgcGF0aC5vbnJlc2l6ZSggcGF0aCwgd2lkdGgsIGhlaWdodCApO1xuICAgIH1cbiAgfVxuXG4gIHNldEdsb2JhbEZ1bmMoIGZ1bmMgKSB7IHRoaXMuZ2xvYmFsRnVuYyA9IGZ1bmM7IH1cblxuICBmYiggbmFtZSApIHtcbiAgICBpZiAoICF0aGlzLnBhdGhzWyBuYW1lIF0gKSB7IHRocm93IFwiZ2xjYXQtcGF0aC5mYjogcGF0aCBjYWxsZWQgXCIgKyBuYW1lICsgXCIgaXMgbm90IGRlZmluZWRcIjsgfVxuICAgIGlmICggIXRoaXMucGF0aHNbIG5hbWUgXS5mcmFtZWJ1ZmZlciApIHsgdGhyb3cgXCJnbGNhdC1wYXRoLmZiOiB0aGVyZSBpcyBubyBmcmFtZWJ1ZmZlciBmb3IgdGhlIHBhdGggXCIgKyBuYW1lOyB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXRoc1sgbmFtZSBdLmZyYW1lYnVmZmVyO1xuICB9XG59O1xuXG5QYXRoLm51bGxGYiA9IHsgZnJhbWVidWZmZXI6IG51bGwgfTtcblxuZXhwb3J0IGRlZmF1bHQgUGF0aDsiLCJsZXQgR0xDYXQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCBfZ2wgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblxuXHRcdGl0LmdsID0gX2dsO1xuICAgIGxldCBnbCA9IGl0LmdsO1xuXG5cdCAgZ2wuZW5hYmxlKCBnbC5ERVBUSF9URVNUICk7XG5cdCAgZ2wuZGVwdGhGdW5jKCBnbC5MRVFVQUwgKTtcblx0ICBnbC5lbmFibGUoIGdsLkJMRU5EICk7XG5cdCAgZ2wuYmxlbmRGdW5jKCBnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEgKTtcblxuXHRcdGl0LmV4dGVuc2lvbnMgPSB7fTtcblxuXHRcdGl0LmN1cnJlbnRQcm9ncmFtID0gbnVsbDtcblx0fVxuXG5cdGdldEV4dGVuc2lvbiggX25hbWUsIF90aHJvdyApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuICAgIGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0aWYgKCB0eXBlb2YgX25hbWUgPT09IFwib2JqZWN0XCIgJiYgX25hbWUuaXNBcnJheSgpICkge1xuXHRcdFx0cmV0dXJuIF9uYW1lLmV2ZXJ5KCBuYW1lID0+IGl0LmdldEV4dGVuc2lvbiggbmFtZSwgX3Rocm93ICkgKTtcblx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgX25hbWUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRpZiAoIGl0LmV4dGVuc2lvbnNbIF9uYW1lIF0gKSB7XG5cdFx0XHRcdHJldHVybiBpdC5leHRlbnNpb25zWyBfbmFtZSBdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXQuZXh0ZW5zaW9uc1sgX25hbWUgXSA9IGdsLmdldEV4dGVuc2lvbiggX25hbWUgKTtcblx0XHRcdFx0aWYgKCBpdC5leHRlbnNpb25zWyBfbmFtZSBdICkge1xuXHRcdFx0XHRcdHJldHVybiBpdC5leHRlbnNpb25zWyBfbmFtZSBdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICggX3Rocm93ICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgY29uc29sZS5lcnJvciggXCJUaGUgZXh0ZW5zaW9uIFxcXCJcIiArIF9uYW1lICsgXCJcXFwiIGlzIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAhISggaXQuZXh0ZW5zaW9uc1sgX25hbWUgXSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBcIkdMQ2F0LmdldEV4dGVuc2lvbjogX25hbWUgbXVzdCBiZSBzdHJpbmcgb3IgYXJyYXlcIlxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oIF92ZXJ0LCBfZnJhZywgX29uRXJyb3IgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGxldCBlcnJvcjtcblx0XHRpZiAoIHR5cGVvZiBfb25FcnJvciA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdGVycm9yID0gX29uRXJyb3I7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9yID0gKCBfc3RyICkgPT4geyBjb25zb2xlLmVycm9yKCBfc3RyICk7IH1cblx0XHR9XG5cblx0XHRsZXQgdmVydCA9IGdsLmNyZWF0ZVNoYWRlciggZ2wuVkVSVEVYX1NIQURFUiApO1xuXHRcdGdsLnNoYWRlclNvdXJjZSggdmVydCwgX3ZlcnQgKTtcblx0XHRnbC5jb21waWxlU2hhZGVyKCB2ZXJ0ICk7XG5cdFx0aWYgKCAhZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKCB2ZXJ0LCBnbC5DT01QSUxFX1NUQVRVUyApICkge1xuXHRcdFx0ZXJyb3IoIGdsLmdldFNoYWRlckluZm9Mb2coIHZlcnQgKSApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGZyYWcgPSBnbC5jcmVhdGVTaGFkZXIoIGdsLkZSQUdNRU5UX1NIQURFUiApO1xuXHRcdGdsLnNoYWRlclNvdXJjZSggZnJhZywgX2ZyYWcgKTtcblx0XHRnbC5jb21waWxlU2hhZGVyKCBmcmFnICk7XG5cdFx0aWYgKCAhZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKCBmcmFnLCBnbC5DT01QSUxFX1NUQVRVUyApICkge1xuXHRcdFx0ZXJyb3IoIGdsLmdldFNoYWRlckluZm9Mb2coIGZyYWcgKSApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG5cdFx0Z2wuYXR0YWNoU2hhZGVyKCBwcm9ncmFtLCB2ZXJ0ICk7XG5cdFx0Z2wuYXR0YWNoU2hhZGVyKCBwcm9ncmFtLCBmcmFnICk7XG5cdFx0Z2wubGlua1Byb2dyYW0oIHByb2dyYW0gKTtcblx0XHRpZiAoIGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoIHByb2dyYW0sIGdsLkxJTktfU1RBVFVTICkgKSB7XG5cdCAgICBwcm9ncmFtLmxvY2F0aW9ucyA9IHt9O1xuXHRcdFx0cmV0dXJuIHByb2dyYW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9yKCBnbC5nZXRQcm9ncmFtSW5mb0xvZyggcHJvZ3JhbSApICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHR1c2VQcm9ncmFtKCBfcHJvZ3JhbSApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0Z2wudXNlUHJvZ3JhbSggX3Byb2dyYW0gKTtcblx0XHRpdC5jdXJyZW50UHJvZ3JhbSA9IF9wcm9ncmFtO1xuXHR9XG5cblx0Y3JlYXRlVmVydGV4YnVmZmVyKCBfYXJyYXkgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHQgIGxldCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuXHRcdGlmICggX2FycmF5ICkgeyBpdC5zZXRWZXJ0ZXhidWZmZXIoIGJ1ZmZlciwgX2FycmF5ICk7IH1cblxuXHQgIHJldHVybiBidWZmZXI7XG5cdH1cblxuXHRzZXRWZXJ0ZXhidWZmZXIoIF9idWZmZXIsIF9hcnJheSwgX21vZGUgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGxldCBtb2RlID0gX21vZGUgfHwgZ2wuU1RBVElDX0RSQVc7XG5cblx0ICBnbC5iaW5kQnVmZmVyKCBnbC5BUlJBWV9CVUZGRVIsIF9idWZmZXIgKTtcblx0ICBnbC5idWZmZXJEYXRhKCBnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoIF9hcnJheSApLCBtb2RlICk7XG5cdCAgZ2wuYmluZEJ1ZmZlciggZ2wuQVJSQVlfQlVGRkVSLCBudWxsICk7XG5cblx0ICBfYnVmZmVyLmxlbmd0aCA9IF9hcnJheS5sZW5ndGg7XG5cdH1cblxuXHRjcmVhdGVJbmRleGJ1ZmZlciggX2FycmF5ICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0ICBsZXQgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cblx0ICBnbC5iaW5kQnVmZmVyKCBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVyICk7XG5cdCAgZ2wuYnVmZmVyRGF0YSggZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBJbnQxNkFycmF5KCBfYXJyYXkgKSwgZ2wuU1RBVElDX0RSQVcgKTtcblx0ICBnbC5iaW5kQnVmZmVyKCBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCApO1xuXG5cdCAgYnVmZmVyLmxlbmd0aCA9IF9hcnJheS5sZW5ndGg7XG5cdCAgcmV0dXJuIGJ1ZmZlcjtcblx0fVxuXG5cdGdldEF0dHJpYkxvY2F0aW9uKCBfbmFtZSApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0bGV0IGxvY2F0aW9uO1xuXHQgIGlmICggaXQuY3VycmVudFByb2dyYW0ubG9jYXRpb25zWyBfbmFtZSBdICkge1xuXHQgICAgbG9jYXRpb24gPSBpdC5jdXJyZW50UHJvZ3JhbS5sb2NhdGlvbnNbIF9uYW1lIF07XG5cdCAgfSBlbHNlIHtcblx0ICAgIGxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oIGl0LmN1cnJlbnRQcm9ncmFtLCBfbmFtZSApO1xuXHQgICAgaXQuY3VycmVudFByb2dyYW0ubG9jYXRpb25zWyBfbmFtZSBdID0gbG9jYXRpb247XG5cdCAgfVxuXG5cdFx0cmV0dXJuIGxvY2F0aW9uO1xuXHR9XG5cblx0YXR0cmlidXRlKCBfbmFtZSwgX2J1ZmZlciwgX3N0cmlkZSwgX2RpdiApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0aWYgKCBfZGl2ICkge1xuXHRcdFx0aXQuZ2V0RXh0ZW5zaW9uKCBcIkFOR0xFX2luc3RhbmNlZF9hcnJheXNcIiwgdHJ1ZSApO1xuXHRcdH1cblxuXHQgIGxldCBsb2NhdGlvbiA9IGl0LmdldEF0dHJpYkxvY2F0aW9uKCBfbmFtZSApO1xuXG5cdCAgZ2wuYmluZEJ1ZmZlciggZ2wuQVJSQVlfQlVGRkVSLCBfYnVmZmVyICk7XG5cdCAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoIGxvY2F0aW9uICk7XG5cdCAgZ2wudmVydGV4QXR0cmliUG9pbnRlciggbG9jYXRpb24sIF9zdHJpZGUsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCApO1xuXG5cdFx0bGV0IGV4dCA9IGl0LmdldEV4dGVuc2lvbiggXCJBTkdMRV9pbnN0YW5jZWRfYXJyYXlzXCIgKTtcblx0XHRpZiAoIGV4dCApIHtcblx0XHRcdGxldCBkaXYgPSBfZGl2IHx8IDA7XG5cdFx0XHRleHQudmVydGV4QXR0cmliRGl2aXNvckFOR0xFKCBsb2NhdGlvbiwgZGl2ICk7XG5cdFx0fVxuXG5cdCAgZ2wuYmluZEJ1ZmZlciggZ2wuQVJSQVlfQlVGRkVSLCBudWxsICk7XG5cdH1cblxuXHRnZXRVbmlmb3JtTG9jYXRpb24oIF9uYW1lICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0ICBsZXQgbG9jYXRpb247XG5cblx0XHRpZiAoIHR5cGVvZiBpdC5jdXJyZW50UHJvZ3JhbS5sb2NhdGlvbnNbIF9uYW1lIF0gIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRsb2NhdGlvbiA9IGl0LmN1cnJlbnRQcm9ncmFtLmxvY2F0aW9uc1sgX25hbWUgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oIGl0LmN1cnJlbnRQcm9ncmFtLCBfbmFtZSApO1xuXHRcdFx0aXQuY3VycmVudFByb2dyYW0ubG9jYXRpb25zWyBfbmFtZSBdID0gbG9jYXRpb247XG5cdFx0fVxuXG5cdCAgcmV0dXJuIGxvY2F0aW9uO1xuXHR9XG5cblx0dW5pZm9ybTFpKCBfbmFtZSwgX3ZhbHVlICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0XHRsZXQgbG9jYXRpb24gPSBpdC5nZXRVbmlmb3JtTG9jYXRpb24oIF9uYW1lICk7XG5cdFx0Z2wudW5pZm9ybTFpKCBsb2NhdGlvbiwgX3ZhbHVlICk7XG5cdH1cblxuXHR1bmlmb3JtMWYoIF9uYW1lLCBfdmFsdWUgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGxldCBsb2NhdGlvbiA9IGl0LmdldFVuaWZvcm1Mb2NhdGlvbiggX25hbWUgKTtcblx0XHRnbC51bmlmb3JtMWYoIGxvY2F0aW9uLCBfdmFsdWUgKTtcblx0fVxuXG5cdHVuaWZvcm0yZnYoIF9uYW1lLCBfdmFsdWUgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGxldCBsb2NhdGlvbiA9IGl0LmdldFVuaWZvcm1Mb2NhdGlvbiggX25hbWUgKTtcblx0XHRnbC51bmlmb3JtMmZ2KCBsb2NhdGlvbiwgX3ZhbHVlICk7XG5cdH1cblxuXHR1bmlmb3JtM2Z2KCBfbmFtZSwgX3ZhbHVlICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0XHRsZXQgbG9jYXRpb24gPSBpdC5nZXRVbmlmb3JtTG9jYXRpb24oIF9uYW1lICk7XG5cdFx0Z2wudW5pZm9ybTNmdiggbG9jYXRpb24sIF92YWx1ZSApO1xuXHR9XG5cblx0dW5pZm9ybTRmdiggX25hbWUsIF92YWx1ZSApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0bGV0IGxvY2F0aW9uID0gaXQuZ2V0VW5pZm9ybUxvY2F0aW9uKCBfbmFtZSApO1xuXHRcdGdsLnVuaWZvcm00ZnYoIGxvY2F0aW9uLCBfdmFsdWUgKTtcblx0fVxuXG5cdHVuaWZvcm1NYXRyaXg0ZnYoIF9uYW1lLCBfdmFsdWUsIF90cmFuc3Bvc2UgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGxldCBsb2NhdGlvbiA9IGl0LmdldFVuaWZvcm1Mb2NhdGlvbiggX25hbWUgKTtcblx0XHRnbC51bmlmb3JtTWF0cml4NGZ2KCBsb2NhdGlvbiwgX3RyYW5zcG9zZSB8fCBmYWxzZSwgX3ZhbHVlICk7XG5cdH1cblxuXHR1bmlmb3JtQ3ViZW1hcCggX25hbWUsIF90ZXh0dXJlLCBfbnVtYmVyICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0XHRsZXQgbG9jYXRpb24gPSBpdC5nZXRVbmlmb3JtTG9jYXRpb24oIF9uYW1lICk7XG5cdCAgZ2wuYWN0aXZlVGV4dHVyZSggZ2wuVEVYVFVSRTAgKyBfbnVtYmVyICk7XG5cdCAgZ2wuYmluZFRleHR1cmUoIGdsLlRFWFRVUkVfQ1VCRV9NQVAsIF90ZXh0dXJlICk7XG5cdCAgZ2wudW5pZm9ybTFpKCBsb2NhdGlvbiwgX251bWJlciApO1xuXHR9XG5cblx0dW5pZm9ybVRleHR1cmUoIF9uYW1lLCBfdGV4dHVyZSwgX251bWJlciApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0bGV0IGxvY2F0aW9uID0gaXQuZ2V0VW5pZm9ybUxvY2F0aW9uKCBfbmFtZSApO1xuXHQgIGdsLmFjdGl2ZVRleHR1cmUoIGdsLlRFWFRVUkUwICsgX251bWJlciApO1xuXHQgIGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBfdGV4dHVyZSApO1xuXHQgIGdsLnVuaWZvcm0xaSggbG9jYXRpb24sIF9udW1iZXIgKTtcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGxldCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuXHRcdGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCB0ZXh0dXJlICk7XG5cdCAgZ2wudGV4UGFyYW1ldGVyaSggZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIgKTtcblx0ICBnbC50ZXhQYXJhbWV0ZXJpKCBnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUiApO1xuXHQgIGdsLnRleFBhcmFtZXRlcmkoIGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFICk7XG5cdCAgZ2wudGV4UGFyYW1ldGVyaSggZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UgKTtcblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgbnVsbCApO1xuXG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cdH1cblxuXHR0ZXh0dXJlRmlsdGVyKCBfdGV4dHVyZSwgX2ZpbHRlciApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0Z2wuYmluZFRleHR1cmUoIGdsLlRFWFRVUkVfMkQsIF90ZXh0dXJlICk7XG5cdCAgZ2wudGV4UGFyYW1ldGVyaSggZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBfZmlsdGVyICk7XG5cdCAgZ2wudGV4UGFyYW1ldGVyaSggZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBfZmlsdGVyICk7XG5cdFx0Z2wuYmluZFRleHR1cmUoIGdsLlRFWFRVUkVfMkQsIG51bGwgKTtcblx0fVxuXG5cdHRleHR1cmVXcmFwKCBfdGV4dHVyZSwgX3dyYXAgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBfdGV4dHVyZSApO1xuXHQgIGdsLnRleFBhcmFtZXRlcmkoIGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBfd3JhcCApO1xuXHQgIGdsLnRleFBhcmFtZXRlcmkoIGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBfd3JhcCApO1xuXHRcdGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBudWxsICk7XG5cdH1cblxuXHRzZXRUZXh0dXJlKCBfdGV4dHVyZSwgX2ltYWdlICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgX3RleHR1cmUgKTtcblx0XHRnbC50ZXhJbWFnZTJEKCBnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBfaW1hZ2UgKTtcblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgbnVsbCApO1xuXHR9XG5cblx0c2V0VGV4dHVyZUZyb21BcnJheSggX3RleHR1cmUsIF93aWR0aCwgX2hlaWdodCwgX2FycmF5ICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgX3RleHR1cmUgKTtcblx0XHRnbC50ZXhJbWFnZTJEKCBnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBfd2lkdGgsIF9oZWlnaHQsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG5ldyBVaW50OEFycmF5KCBfYXJyYXkgKSApO1xuXHRcdGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBudWxsICk7XG5cdH1cblxuXHRzZXRUZXh0dXJlRnJvbUZsb2F0QXJyYXkoIF90ZXh0dXJlLCBfd2lkdGgsIF9oZWlnaHQsIF9hcnJheSApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0aXQuZ2V0RXh0ZW5zaW9uKCBcIk9FU190ZXh0dXJlX2Zsb2F0XCIsIHRydWUgKTtcblxuXHRcdGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBfdGV4dHVyZSApO1xuXHRcdGdsLnRleEltYWdlMkQoIGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIF93aWR0aCwgX2hlaWdodCwgMCwgZ2wuUkdCQSwgZ2wuRkxPQVQsIG5ldyBGbG9hdDMyQXJyYXkoIF9hcnJheSApICk7XG5cdFx0aWYgKCAhaXQuZ2V0RXh0ZW5zaW9uKCBcIk9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhclwiICkgKSB7IGl0LnRleHR1cmVGaWx0ZXIoIF90ZXh0dXJlLCBnbC5ORUFSRVNUICk7IH1cblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgbnVsbCApO1xuXHR9XG5cblx0Y29weVRleHR1cmUoIF90ZXh0dXJlLCBfd2lkdGgsIF9oZWlnaHQgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBfdGV4dHVyZSApO1xuXHRcdGdsLmNvcHlUZXhJbWFnZTJEKCBnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCAwLCAwLCBfd2lkdGgsIF9oZWlnaHQsIDAgKTtcblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgbnVsbCApO1xuXHR9XG5cblx0Y3JlYXRlQ3ViZW1hcCggX2FycmF5T2ZJbWFnZSApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0Ly8gb3JkZXIgOiBYKywgWC0sIFkrLCBZLSwgWissIFotXG5cdFx0bGV0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG5cblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZSApO1xuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IDY7IGkgKysgKSB7XG5cdFx0XHRnbC50ZXhJbWFnZTJEKCBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ggKyBpLCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBfYXJyYXlPZkltYWdlWyBpIF0gKTtcblx0XHR9XG5cdFx0Z2wudGV4UGFyYW1ldGVyaSggZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIgKTtcblx0ICBnbC50ZXhQYXJhbWV0ZXJpKCBnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUiApO1xuXHQgIGdsLnRleFBhcmFtZXRlcmkoIGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFICk7XG5cdCAgZ2wudGV4UGFyYW1ldGVyaSggZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UgKTtcblx0XHRnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV9DVUJFX01BUCwgbnVsbCApO1xuXG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cdH1cblxuXHRjcmVhdGVGcmFtZWJ1ZmZlciggX3dpZHRoLCBfaGVpZ2h0ICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0ICBsZXQgZnJhbWVidWZmZXIgPSB7fTtcblx0XHRmcmFtZWJ1ZmZlci5mcmFtZWJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG5cdCAgZ2wuYmluZEZyYW1lYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgZnJhbWVidWZmZXIuZnJhbWVidWZmZXIgKTtcblxuXHRcdGZyYW1lYnVmZmVyLmRlcHRoID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG5cdFx0Z2wuYmluZFJlbmRlcmJ1ZmZlciggZ2wuUkVOREVSQlVGRkVSLCBmcmFtZWJ1ZmZlci5kZXB0aCApO1xuXHRcdGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoIGdsLlJFTkRFUkJVRkZFUiwgZ2wuREVQVEhfQ09NUE9ORU5UMTYsIF93aWR0aCwgX2hlaWdodCApO1xuXHQgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgZ2wuREVQVEhfQVRUQUNITUVOVCwgZ2wuUkVOREVSQlVGRkVSLCBmcmFtZWJ1ZmZlci5kZXB0aCApO1xuXG5cdFx0ZnJhbWVidWZmZXIudGV4dHVyZSA9IGl0LmNyZWF0ZVRleHR1cmUoKTtcblx0ICBnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgZnJhbWVidWZmZXIudGV4dHVyZSApO1xuXHQgIGdsLnRleEltYWdlMkQoIGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIF93aWR0aCwgX2hlaWdodCwgMCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgbnVsbCApO1xuXHQgIGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBudWxsICk7XG5cblx0ICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRCggZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCBmcmFtZWJ1ZmZlci50ZXh0dXJlLCAwICk7XG5cdCAgZ2wuYmluZEZyYW1lYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgbnVsbCApO1xuXG5cdCAgcmV0dXJuIGZyYW1lYnVmZmVyO1xuXHR9XG5cblx0cmVzaXplRnJhbWVidWZmZXIoIF9mcmFtZWJ1ZmZlciwgX3dpZHRoLCBfaGVpZ2h0ICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0XHRnbC5iaW5kRnJhbWVidWZmZXIoIGdsLkZSQU1FQlVGRkVSLCBfZnJhbWVidWZmZXIuZnJhbWVidWZmZXIgKTtcblxuXHRcdGdsLmJpbmRSZW5kZXJidWZmZXIoIGdsLlJFTkRFUkJVRkZFUiwgX2ZyYW1lYnVmZmVyLmRlcHRoICk7XG5cdFx0Z2wucmVuZGVyYnVmZmVyU3RvcmFnZSggZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9DT01QT05FTlQxNiwgX3dpZHRoLCBfaGVpZ2h0ICk7XG5cdFx0Z2wuYmluZFJlbmRlcmJ1ZmZlciggZ2wuUkVOREVSQlVGRkVSLCBudWxsICk7XG5cdFx0XG5cdCAgZ2wuYmluZFRleHR1cmUoIGdsLlRFWFRVUkVfMkQsIF9mcmFtZWJ1ZmZlci50ZXh0dXJlICk7XG5cdFx0Z2wudGV4SW1hZ2UyRCggZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgX3dpZHRoLCBfaGVpZ2h0LCAwLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBudWxsICk7XG5cdCAgZ2wuYmluZFRleHR1cmUoIGdsLlRFWFRVUkVfMkQsIG51bGwgKTtcblx0XHRcblx0XHRnbC5iaW5kRnJhbWVidWZmZXIoIGdsLkZSQU1FQlVGRkVSLCBudWxsICk7XG5cdH1cblxuXHRjcmVhdGVGbG9hdEZyYW1lYnVmZmVyKCBfd2lkdGgsIF9oZWlnaHQgKSB7XG5cdFx0bGV0IGl0ID0gdGhpcztcblx0XHRsZXQgZ2wgPSBpdC5nbDtcblxuXHRcdGl0LmdldEV4dGVuc2lvbiggXCJPRVNfdGV4dHVyZV9mbG9hdFwiLCB0cnVlICk7XG5cblx0ICBsZXQgZnJhbWVidWZmZXIgPSB7fTtcblx0XHRmcmFtZWJ1ZmZlci5mcmFtZWJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG5cdCAgZ2wuYmluZEZyYW1lYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgZnJhbWVidWZmZXIuZnJhbWVidWZmZXIgKTtcblxuXHRcdGZyYW1lYnVmZmVyLmRlcHRoID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG5cdFx0Z2wuYmluZFJlbmRlcmJ1ZmZlciggZ2wuUkVOREVSQlVGRkVSLCBmcmFtZWJ1ZmZlci5kZXB0aCApO1xuXHRcdGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoIGdsLlJFTkRFUkJVRkZFUiwgZ2wuREVQVEhfQ09NUE9ORU5UMTYsIF93aWR0aCwgX2hlaWdodCApO1xuXHQgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgZ2wuREVQVEhfQVRUQUNITUVOVCwgZ2wuUkVOREVSQlVGRkVSLCBmcmFtZWJ1ZmZlci5kZXB0aCApO1xuXG5cdFx0ZnJhbWVidWZmZXIudGV4dHVyZSA9IGl0LmNyZWF0ZVRleHR1cmUoKTtcblx0ICBnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgZnJhbWVidWZmZXIudGV4dHVyZSApO1xuXHQgIGdsLnRleEltYWdlMkQoIGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIF93aWR0aCwgX2hlaWdodCwgMCwgZ2wuUkdCQSwgZ2wuRkxPQVQsIG51bGwgKTtcblx0XHRpZiAoICFpdC5nZXRFeHRlbnNpb24oIFwiT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyXCIgKSApIHsgaXQudGV4dHVyZUZpbHRlciggZnJhbWVidWZmZXIudGV4dHVyZSwgZ2wuTkVBUkVTVCApOyB9XG5cdCAgZ2wuYmluZFRleHR1cmUoIGdsLlRFWFRVUkVfMkQsIG51bGwgKTtcblxuXHQgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKCBnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIGZyYW1lYnVmZmVyLnRleHR1cmUsIDAgKTtcblx0ICBnbC5iaW5kRnJhbWVidWZmZXIoIGdsLkZSQU1FQlVGRkVSLCBudWxsICk7XG5cblx0ICByZXR1cm4gZnJhbWVidWZmZXI7XG5cdH1cblxuXHRyZXNpemVGbG9hdEZyYW1lYnVmZmVyKCBfZnJhbWVidWZmZXIsIF93aWR0aCwgX2hlaWdodCApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0Z2wuYmluZEZyYW1lYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgX2ZyYW1lYnVmZmVyLmZyYW1lYnVmZmVyICk7XG5cblx0XHRnbC5iaW5kUmVuZGVyYnVmZmVyKCBnbC5SRU5ERVJCVUZGRVIsIF9mcmFtZWJ1ZmZlci5kZXB0aCApO1xuXHRcdGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoIGdsLlJFTkRFUkJVRkZFUiwgZ2wuREVQVEhfQ09NUE9ORU5UMTYsIF93aWR0aCwgX2hlaWdodCApO1xuXHRcdGdsLmJpbmRSZW5kZXJidWZmZXIoIGdsLlJFTkRFUkJVRkZFUiwgbnVsbCApO1xuXHRcdFxuXHQgIGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBfZnJhbWVidWZmZXIudGV4dHVyZSApO1xuXHRcdGdsLnRleEltYWdlMkQoIGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIF93aWR0aCwgX2hlaWdodCwgMCwgZ2wuUkdCQSwgZ2wuRkxPQVQsIG51bGwgKTtcblx0ICBnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgbnVsbCApO1xuXHRcdFxuXHRcdGdsLmJpbmRGcmFtZWJ1ZmZlciggZ2wuRlJBTUVCVUZGRVIsIG51bGwgKTtcblx0fVxuXG5cdGNyZWF0ZURyYXdCdWZmZXJzKCBfd2lkdGgsIF9oZWlnaHQsIF9udW1EcmF3QnVmZmVycyApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0aXQuZ2V0RXh0ZW5zaW9uKCAnT0VTX3RleHR1cmVfZmxvYXQnLCB0cnVlICk7XG5cdFx0bGV0IGV4dCA9IGl0LmdldEV4dGVuc2lvbiggJ1dFQkdMX2RyYXdfYnVmZmVycycsIHRydWUgKTtcblxuXHRcdGlmICggZXh0Lk1BWF9EUkFXX0JVRkZFUlNfV0VCR0wgPCBfbnVtRHJhd0J1ZmZlcnMgKSB7XG5cdFx0XHR0aHJvdyBcImNyZWF0ZURyYXdCdWZmZXJzOiBNQVhfRFJBV19CVUZGRVJTX1dFQkdMIGlzIFwiICsgZXh0Lk1BWF9EUkFXX0JVRkZFUlNfV0VCR0w7XG5cdFx0fVxuXG5cdFx0bGV0IGZyYW1lYnVmZmVyID0ge307XG5cdFx0ZnJhbWVidWZmZXIuZnJhbWVidWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuXHRcdGdsLmJpbmRGcmFtZWJ1ZmZlciggZ2wuRlJBTUVCVUZGRVIsIGZyYW1lYnVmZmVyLmZyYW1lYnVmZmVyICk7XG5cblx0XHRmcmFtZWJ1ZmZlci5kZXB0aCA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuXHRcdGdsLmJpbmRSZW5kZXJidWZmZXIoIGdsLlJFTkRFUkJVRkZFUiwgZnJhbWVidWZmZXIuZGVwdGggKTtcblx0XHRnbC5yZW5kZXJidWZmZXJTdG9yYWdlKCBnbC5SRU5ERVJCVUZGRVIsIGdsLkRFUFRIX0NPTVBPTkVOVDE2LCBfd2lkdGgsIF9oZWlnaHQgKTtcblx0XHRnbC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlciggZ2wuRlJBTUVCVUZGRVIsIGdsLkRFUFRIX0FUVEFDSE1FTlQsIGdsLlJFTkRFUkJVRkZFUiwgZnJhbWVidWZmZXIuZGVwdGggKTtcblxuXHRcdGZyYW1lYnVmZmVyLnRleHR1cmVzID0gW107XG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgX251bURyYXdCdWZmZXJzOyBpICsrICkge1xuXHRcdFx0ZnJhbWVidWZmZXIudGV4dHVyZXNbIGkgXSA9IGl0LmNyZWF0ZVRleHR1cmUoKTtcblx0XHQgIGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBmcmFtZWJ1ZmZlci50ZXh0dXJlc1sgaSBdICk7XG5cdFx0XHRnbC50ZXhJbWFnZTJEKCBnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBfd2lkdGgsIF9oZWlnaHQsIDAsIGdsLlJHQkEsIGdsLkZMT0FULCBudWxsICk7XG5cdFx0XHRpZiAoICFpdC5nZXRFeHRlbnNpb24oIFwiT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyXCIgKSApIHsgaXQudGV4dHVyZUZpbHRlciggZnJhbWVidWZmZXIudGV4dHVyZXNbIGkgXSwgZ2wuTkVBUkVTVCApOyB9XG5cdFx0ICBnbC5iaW5kVGV4dHVyZSggZ2wuVEVYVFVSRV8yRCwgbnVsbCApO1xuXG5cdFx0ICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRCggZ2wuRlJBTUVCVUZGRVIsIGV4dC5DT0xPUl9BVFRBQ0hNRU5UMF9XRUJHTCArIGksIGdsLlRFWFRVUkVfMkQsIGZyYW1lYnVmZmVyLnRleHR1cmVzWyBpIF0sIDAgKTtcblx0XHR9XG5cblx0XHRsZXQgc3RhdHVzID0gZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyggZ2wuRlJBTUVCVUZGRVIgKTtcblx0XHRpZiAoIHN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUgKSB7XG5cdFx0XHR0aHJvdyBcImNyZWF0ZURyYXdCdWZmZXJzOiBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKCBnbC5GUkFNRUJVRkZFUiApIHJldHVybnMgXCIgKyBzdGF0dXM7XG5cdFx0fVxuXHRcdGdsLmJpbmRGcmFtZWJ1ZmZlciggZ2wuRlJBTUVCVUZGRVIsIG51bGwgKTtcblxuXHRcdHJldHVybiBmcmFtZWJ1ZmZlcjtcblx0fVxuXG5cdHJlc2l6ZURyYXdCdWZmZXJzKCBfZnJhbWVidWZmZXIsIF93aWR0aCwgaGVpZ2h0ICkge1xuXHRcdGxldCBpdCA9IHRoaXM7XG5cdFx0bGV0IGdsID0gaXQuZ2w7XG5cblx0XHRnbC5iaW5kRnJhbWVidWZmZXIoIGdsLkZSQU1FQlVGRkVSLCBfZnJhbWVidWZmZXIuZnJhbWVidWZmZXIgKTtcblxuXHRcdGdsLmJpbmRSZW5kZXJidWZmZXIoIGdsLlJFTkRFUkJVRkZFUiwgX2ZyYW1lYnVmZmVyLmRlcHRoICk7XG5cdFx0Z2wucmVuZGVyYnVmZmVyU3RvcmFnZSggZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9DT01QT05FTlQxNiwgX3dpZHRoLCBfaGVpZ2h0ICk7XG5cdFx0Z2wuYmluZFJlbmRlcmJ1ZmZlciggZ2wuUkVOREVSQlVGRkVSLCBudWxsICk7XG5cdFx0XG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgX2ZyYW1lYnVmZmVyLnRleHR1cmVzLmxlbmd0aDsgaSArKyApIHtcblx0XHRcdGdsLmJpbmRUZXh0dXJlKCBnbC5URVhUVVJFXzJELCBfZnJhbWVidWZmZXIudGV4dHVyZXNbIGkgXSApO1xuXHRcdFx0Z2wudGV4SW1hZ2UyRCggZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgX3dpZHRoLCBfaGVpZ2h0LCAwLCBnbC5SR0JBLCBnbC5GTE9BVCwgbnVsbCApO1xuXHRcdFx0Z2wuYmluZFRleHR1cmUoIGdsLlRFWFRVUkVfMkQsIG51bGwgKTtcblx0XHR9XG5cdFx0XG5cdFx0Z2wuYmluZEZyYW1lYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgbnVsbCApO1xuXHR9XG5cblx0ZHJhd0J1ZmZlcnMoIF9udW1EcmF3QnVmZmVycyApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXHRcdFxuXHRcdGxldCBleHQgPSBpdC5nZXRFeHRlbnNpb24oIFwiV0VCR0xfZHJhd19idWZmZXJzXCIsIHRydWUgKTtcblxuXHRcdGxldCBhcnJheSA9IFtdO1xuXHRcdGlmICggdHlwZW9mIF9udW1EcmF3QnVmZmVycyA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IF9udW1EcmF3QnVmZmVyczsgaSArKyApIHtcblx0XHRcdFx0YXJyYXkucHVzaCggZXh0LkNPTE9SX0FUVEFDSE1FTlQwX1dFQkdMICsgaSApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcnJheSA9IGFycmF5LmNvbmNhdCggX251bURyYXdCdWZmZXJzICk7XG5cdFx0fVxuXHRcdGV4dC5kcmF3QnVmZmVyc1dFQkdMKCBhcnJheSApO1xuXHR9XG5cblx0Y2xlYXIoIF9yLCBfZywgX2IsIF9hLCBfZCApIHtcblx0XHRsZXQgaXQgPSB0aGlzO1xuXHRcdGxldCBnbCA9IGl0LmdsO1xuXG5cdFx0bGV0IHIgPSBfciB8fCAwLjA7XG5cdFx0bGV0IGcgPSBfZyB8fCAwLjA7XG5cdFx0bGV0IGIgPSBfYiB8fCAwLjA7XG5cdFx0bGV0IGEgPSB0eXBlb2YgX2EgPT09ICdudW1iZXInID8gX2EgOiAxLjA7XG5cdFx0bGV0IGQgPSB0eXBlb2YgX2QgPT09ICdudW1iZXInID8gX2QgOiAxLjA7XG5cblx0ICBnbC5jbGVhckNvbG9yKCByLCBnLCBiLCBhICk7XG5cdCAgZ2wuY2xlYXJEZXB0aCggZCApO1xuXHQgIGdsLmNsZWFyKCBnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCApO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTENhdDtcbiIsIi8vIOOBq+OCg+ODvOOCk1xyXG5cclxubGV0IE1hdGhDYXQgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBhZGRzIGEgdHdvIHZlY1xyXG4gKiBAcGFyYW0ge2FycmF5fSBhIC0gdmVjXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGIgLSB2ZWNcclxuICovXHJcbk1hdGhDYXQudmVjQWRkID0gKCBhLCBiICkgPT4gYS5tYXAoICggZSwgaSApID0+IGUgKyBiW2ldICk7XHJcblxyXG4vKipcclxuICogc3Vic3RyYWN0cyBhIHZlYyBmcm9tIGFuIGFub3RoZXIgdmVjXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGEgLSB2ZWNcclxuICogQHBhcmFtIHthcnJheX0gYiAtIHZlY1xyXG4gKi9cclxuTWF0aENhdC52ZWNTdWIgPSAoIGEsIGIgKSA9PiBhLm1hcCggKCBlLCBpICkgPT4gZSAtIGJbaV0gKTtcclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIGEgY3Jvc3Mgb2YgdHdvIHZlYzNzXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGEgLSB2ZWMzXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGIgLSB2ZWMzXHJcbiAqL1xyXG5NYXRoQ2F0LnZlYzNDcm9zcyA9ICggYSwgYiApID0+IFtcclxuICBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdLFxyXG4gIGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl0sXHJcbiAgYVswXSAqIGJbMV0gLSBhWzFdICogYlswXVxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIHNjYWxlcyBhIHZlYyBieSBzY2FsYXJcclxuICogQHBhcmFtIHtudW1iZXJ9IHMgLSBzY2FsYXJcclxuICogQHBhcmFtIHthcnJheX0gdiAtIHZlY1xyXG4gKi9cclxuTWF0aENhdC52ZWNTY2FsZSA9ICggcywgdiApID0+IHYubWFwKCBlID0+IGUgKiBzICk7XHJcblxyXG4vKipcclxuICogcmV0dXJucyBsZW5ndGggb2YgYSB2ZWNcclxuICogQHBhcmFtIHthcnJheX0gdiAtIHZlY1xyXG4gKi9cclxuTWF0aENhdC52ZWNMZW5ndGggPSB2ID0+IE1hdGguc3FydCggdi5yZWR1Y2UoICggcCwgYyApID0+IHAgKyBjICogYywgMC4wICkgKTtcclxuXHJcbi8qKlxyXG4gKiBub3JtYWxpemVzIGEgdmVjXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHYgLSB2ZWNcclxuICovXHJcbk1hdGhDYXQudmVjTm9ybWFsaXplID0gdiA9PiBNYXRoQ2F0LnZlY1NjYWxlKCAxLjAgLyBNYXRoQ2F0LnZlY0xlbmd0aCggdiApLCB2ICk7XHJcblxyXG4vKipcclxuICogYXBwbGllcyB0d28gbWF0NHNcclxuICogQHBhcmFtIHthcnJheX0gYSAtIG1hdDRcclxuICogQHBhcmFtIHthcnJheX0gYiAtIG1hdDRcclxuICovXHJcbk1hdGhDYXQubWF0NEFwcGx5ID0gKCBhLCBiICkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICBhWyAwXSAqIGJbIDBdICsgYVsgNF0gKiBiWyAxXSArIGFbIDhdICogYlsgMl0gKyBhWzEyXSAqIGJbIDNdLFxyXG4gICAgYVsgMV0gKiBiWyAwXSArIGFbIDVdICogYlsgMV0gKyBhWyA5XSAqIGJbIDJdICsgYVsxM10gKiBiWyAzXSxcclxuICAgIGFbIDJdICogYlsgMF0gKyBhWyA2XSAqIGJbIDFdICsgYVsxMF0gKiBiWyAyXSArIGFbMTRdICogYlsgM10sXHJcbiAgICBhWyAzXSAqIGJbIDBdICsgYVsgN10gKiBiWyAxXSArIGFbMTFdICogYlsgMl0gKyBhWzE1XSAqIGJbIDNdLFxyXG5cclxuICAgIGFbIDBdICogYlsgNF0gKyBhWyA0XSAqIGJbIDVdICsgYVsgOF0gKiBiWyA2XSArIGFbMTJdICogYlsgN10sXHJcbiAgICBhWyAxXSAqIGJbIDRdICsgYVsgNV0gKiBiWyA1XSArIGFbIDldICogYlsgNl0gKyBhWzEzXSAqIGJbIDddLFxyXG4gICAgYVsgMl0gKiBiWyA0XSArIGFbIDZdICogYlsgNV0gKyBhWzEwXSAqIGJbIDZdICsgYVsxNF0gKiBiWyA3XSxcclxuICAgIGFbIDNdICogYlsgNF0gKyBhWyA3XSAqIGJbIDVdICsgYVsxMV0gKiBiWyA2XSArIGFbMTVdICogYlsgN10sXHJcblxyXG4gICAgYVsgMF0gKiBiWyA4XSArIGFbIDRdICogYlsgOV0gKyBhWyA4XSAqIGJbMTBdICsgYVsxMl0gKiBiWzExXSxcclxuICAgIGFbIDFdICogYlsgOF0gKyBhWyA1XSAqIGJbIDldICsgYVsgOV0gKiBiWzEwXSArIGFbMTNdICogYlsxMV0sXHJcbiAgICBhWyAyXSAqIGJbIDhdICsgYVsgNl0gKiBiWyA5XSArIGFbMTBdICogYlsxMF0gKyBhWzE0XSAqIGJbMTFdLFxyXG4gICAgYVsgM10gKiBiWyA4XSArIGFbIDddICogYlsgOV0gKyBhWzExXSAqIGJbMTBdICsgYVsxNV0gKiBiWzExXSxcclxuICAgIFxyXG4gICAgYVsgMF0gKiBiWzEyXSArIGFbIDRdICogYlsxM10gKyBhWyA4XSAqIGJbMTRdICsgYVsxMl0gKiBiWzE1XSxcclxuICAgIGFbIDFdICogYlsxMl0gKyBhWyA1XSAqIGJbMTNdICsgYVsgOV0gKiBiWzE0XSArIGFbMTNdICogYlsxNV0sXHJcbiAgICBhWyAyXSAqIGJbMTJdICsgYVsgNl0gKiBiWzEzXSArIGFbMTBdICogYlsxNF0gKyBhWzE0XSAqIGJbMTVdLFxyXG4gICAgYVsgM10gKiBiWzEyXSArIGFbIDddICogYlsxM10gKyBhWzExXSAqIGJbMTRdICsgYVsxNV0gKiBiWzE1XVxyXG4gIF07XHJcbn07XHJcblxyXG4vKipcclxuICogdHJhbnNwb3NlIGEgbWF0NFxyXG4gKiBAcGFyYW0ge2FycmF5fSBtIC0gbWF0NFxyXG4gKi9cclxuTWF0aENhdC5tYXQ0VHJhbnNwb3NlID0gbSA9PiBbXHJcbiAgbVsgMF0sbVsgNF0sbVsgOF0sbVsxMl0sXHJcbiAgbVsgMV0sbVsgNV0sbVsgOV0sbVsxM10sXHJcbiAgbVsgMl0sbVsgNl0sbVsxMF0sbVsxNF0sXHJcbiAgbVsgM10sbVsgN10sbVsxMV0sbVsxNV1cclxuXTtcclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIGFuIGluZGVudGl0eSBtYXQ0XHJcbiAqL1xyXG5NYXRoQ2F0Lm1hdDRJZGVudGl0eSA9ICgpID0+IFsxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwwLDAsMCwxXTtcclxuXHJcbk1hdGhDYXQubWF0NFRyYW5zbGF0ZSA9ICggdiApID0+IFsxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCx2WzBdLHZbMV0sdlsyXSwxXTtcclxuXHJcbk1hdGhDYXQubWF0NFNjYWxlID0gKCB2ICkgPT4gW1xyXG4gIHZbMF0sMCwwLDAsXHJcbiAgMCx2WzFdLDAsMCxcclxuICAwLDAsdlsyXSwwLFxyXG4gIDAsMCwwLDFcclxuXTtcclxuXHJcbk1hdGhDYXQubWF0NFNjYWxlWFlaID0gKCBzICkgPT4gW1xyXG4gIHMsMCwwLDAsXHJcbiAgMCxzLDAsMCxcclxuICAwLDAscywwLFxyXG4gIDAsMCwwLDFcclxuXTtcclxuXHJcbk1hdGhDYXQubWF0NFJvdGF0ZVggPSAoIHQgKSA9PiBbXHJcbiAgMSwwLDAsMCxcclxuICAwLE1hdGguY29zKHQpLC1NYXRoLnNpbih0KSwwLFxyXG4gIDAsTWF0aC5zaW4odCksTWF0aC5jb3ModCksMCxcclxuICAwLDAsMCwxXHJcbl07XHJcblxyXG5NYXRoQ2F0Lm1hdDRSb3RhdGVZID0gKCB0ICkgPT4gW1xyXG4gIE1hdGguY29zKHQpLDAsTWF0aC5zaW4odCksMCxcclxuICAwLDEsMCwwLFxyXG4gIC1NYXRoLnNpbih0KSwwLE1hdGguY29zKHQpLDAsXHJcbiAgMCwwLDAsMVxyXG5dO1xyXG5cclxuTWF0aENhdC5tYXQ0Um90YXRlWiA9ICggdCApID0+IFtcclxuICBNYXRoLmNvcyh0KSwtTWF0aC5zaW4odCksMCwwLFxyXG4gIE1hdGguc2luKHQpLE1hdGguY29zKHQpLDAsMCxcclxuICAwLDAsMSwwLFxyXG4gIDAsMCwwLDFcclxuXTtcclxuXHJcbk1hdGhDYXQubWF0NExvb2tBdCA9ICggcG9zLCB0YXIsIGFpciwgcm90ICkgPT4ge1xyXG4gIGxldCBkaXIgPSBNYXRoQ2F0LnZlY05vcm1hbGl6ZSggTWF0aENhdC52ZWNTdWIoIHRhciwgcG9zICkgKTtcclxuICBsZXQgc2lkID0gTWF0aENhdC52ZWNOb3JtYWxpemUoIE1hdGhDYXQudmVjM0Nyb3NzKCBkaXIsIGFpciApICk7XHJcbiAgbGV0IHRvcCA9IE1hdGhDYXQudmVjM0Nyb3NzKCBzaWQsIGRpciApO1xyXG4gIHNpZCA9IE1hdGhDYXQudmVjQWRkKFxyXG4gICAgTWF0aENhdC52ZWNTY2FsZSggTWF0aC5jb3MoIHJvdCApLCBzaWQgKSxcclxuICAgIE1hdGhDYXQudmVjU2NhbGUoIE1hdGguc2luKCByb3QgKSwgdG9wIClcclxuICApO1xyXG4gIHRvcCA9IE1hdGhDYXQudmVjM0Nyb3NzKCBzaWQsIGRpciApO1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAgc2lkWzBdLCB0b3BbMF0sIGRpclswXSwgMC4wLFxyXG4gICAgc2lkWzFdLCB0b3BbMV0sIGRpclsxXSwgMC4wLFxyXG4gICAgc2lkWzJdLCB0b3BbMl0sIGRpclsyXSwgMC4wLFxyXG4gICAgLSBzaWRbMF0gKiBwb3NbMF0gLSBzaWRbMV0gKiBwb3NbMV0gLSBzaWRbMl0gKiBwb3NbMl0sXHJcbiAgICAtIHRvcFswXSAqIHBvc1swXSAtIHRvcFsxXSAqIHBvc1sxXSAtIHRvcFsyXSAqIHBvc1syXSxcclxuICAgIC0gZGlyWzBdICogcG9zWzBdIC0gZGlyWzFdICogcG9zWzFdIC0gZGlyWzJdICogcG9zWzJdLFxyXG4gICAgMS4wXHJcbiAgXTtcclxufTtcclxuXHJcbk1hdGhDYXQubWF0NFBlcnNwZWN0aXZlID0gKCBmb3YsIGFzcGVjdCwgbmVhciwgZmFyICkgPT4ge1xyXG4gIGxldCBwID0gMS4wIC8gTWF0aC50YW4oIGZvdiAqIE1hdGguUEkgLyAzNjAuMCApO1xyXG4gIGxldCBkID0gKCBmYXIgLSBuZWFyICk7XHJcbiAgcmV0dXJuIFtcclxuICAgIHAgLyBhc3BlY3QsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAwLjAsIHAsIDAuMCwgMC4wLFxyXG4gICAgMC4wLCAwLjAsICggZmFyICsgbmVhciApIC8gZCwgMS4wLFxyXG4gICAgMC4wLCAwLjAsIC0yICogZmFyICogbmVhciAvIGQsIDAuMFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRoQ2F0OyIsImxldCBUd2VhayA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoIF9lbCApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgaXQucGFyZW50ID0gX2VsO1xuICAgIGl0LnZhbHVlcyA9IHt9O1xuICAgIGl0LmVsZW1lbnRzID0ge307XG4gIH1cblxuICBidXR0b24oIF9uYW1lLCBfcHJvcHMgKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGxldCBwcm9wcyA9IF9wcm9wcyB8fCB7fTtcblxuICAgIGlmICggdHlwZW9mIGl0LnZhbHVlc1sgX25hbWUgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgIGl0LnBhcmVudC5hcHBlbmRDaGlsZCggZGl2ICk7XG5cbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKTtcbiAgICAgIGlucHV0LnR5cGUgPSAnYnV0dG9uJztcbiAgICAgIGlucHV0LnZhbHVlID0gX25hbWU7XG5cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXQudmFsdWVzWyBfbmFtZSBdID0gdHJ1ZTtcbiAgICAgIH0gKTtcblxuICAgICAgaXQuZWxlbWVudHNbIF9uYW1lIF0gPSB7XG4gICAgICAgIGRpdjogZGl2LFxuICAgICAgICBpbnB1dDogaW5wdXRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHRlbXB2YWx1ZSA9IGl0LnZhbHVlc1sgX25hbWUgXTtcbiAgICBpdC52YWx1ZXNbIF9uYW1lIF0gPSBmYWxzZTtcbiAgICBpZiAoIHR5cGVvZiBwcm9wcy5zZXQgPT09ICdib29sZWFuJyApIHtcbiAgICAgIGl0LnZhbHVlc1sgX25hbWUgXSA9IHByb3BzLnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcHZhbHVlO1xuICB9XG5cbiAgY2hlY2tib3goIF9uYW1lLCBfcHJvcHMgKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGxldCBwcm9wcyA9IF9wcm9wcyB8fCB7fTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmICggdHlwZW9mIGl0LnZhbHVlc1sgX25hbWUgXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlIHx8IGZhbHNlO1xuXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgIGl0LnBhcmVudC5hcHBlbmRDaGlsZCggZGl2ICk7XG5cbiAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoIG5hbWUgKTtcbiAgICAgIG5hbWUuaW5uZXJUZXh0ID0gX25hbWU7XG5cbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKTtcbiAgICAgIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IHZhbHVlO1xuXG4gICAgICBpdC5lbGVtZW50c1sgX25hbWUgXSA9IHtcbiAgICAgICAgZGl2OiBkaXYsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGlucHV0OiBpbnB1dFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBpdC5lbGVtZW50c1sgX25hbWUgXS5pbnB1dC5jaGVja2VkO1xuICAgIH1cblxuICAgIGlmICggdHlwZW9mIHByb3BzLnNldCA9PT0gJ2Jvb2xlYW4nICkge1xuICAgICAgdmFsdWUgPSBwcm9wcy5zZXQ7XG4gICAgfVxuXG4gICAgaXQuZWxlbWVudHNbIF9uYW1lIF0uaW5wdXQuY2hlY2tlZCA9IHZhbHVlO1xuICAgIGl0LnZhbHVlc1sgX25hbWUgXSA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIGl0LnZhbHVlc1sgX25hbWUgXTtcbiAgfVxuXG4gIHJhbmdlKCBfbmFtZSwgX3Byb3BzICkge1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICBsZXQgcHJvcHMgPSBfcHJvcHMgfHwge307XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICBpZiAoIHR5cGVvZiBpdC52YWx1ZXNbIF9uYW1lIF0gPT09ICd1bmRlZmluZWQnICkge1xuICAgICAgbGV0IG1pbiA9IHByb3BzLm1pbiB8fCAwLjA7XG4gICAgICBsZXQgbWF4ID0gcHJvcHMubWF4IHx8IDEuMDtcbiAgICAgIGxldCBzdGVwID0gcHJvcHMuc3RlcCB8fCAwLjAwMTtcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUgfHwgbWluO1xuXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICAgIGl0LnBhcmVudC5hcHBlbmRDaGlsZCggZGl2ICk7XG5cbiAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoIG5hbWUgKTtcbiAgICAgIG5hbWUuaW5uZXJUZXh0ID0gX25hbWU7XG5cbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKTtcbiAgICAgIGlucHV0LnR5cGUgPSAncmFuZ2UnO1xuICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlucHV0Lm1pbiA9IG1pbjtcbiAgICAgIGlucHV0Lm1heCA9IG1heDtcbiAgICAgIGlucHV0LnN0ZXAgPSBzdGVwO1xuXG4gICAgICBsZXQgdmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgICB2YWwuaW5uZXJUZXh0ID0gdmFsdWUudG9GaXhlZCggMyApO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKCB2YWwgKTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsICggX2V2ZW50ICkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KCBpbnB1dC52YWx1ZSApO1xuICAgICAgICB2YWwuaW5uZXJUZXh0ID0gdmFsdWUudG9GaXhlZCggMyApO1xuICAgICAgfSApO1xuXG4gICAgICBpdC5lbGVtZW50c1sgX25hbWUgXSA9IHtcbiAgICAgICAgZGl2OiBkaXYsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgdmFsOiB2YWxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCggaXQuZWxlbWVudHNbIF9uYW1lIF0uaW5wdXQudmFsdWUgKTtcbiAgICB9XG5cbiAgICBpZiAoIHR5cGVvZiBwcm9wcy5zZXQgPT09ICdudW1iZXInICkge1xuICAgICAgdmFsdWUgPSBwcm9wcy5zZXQ7XG4gICAgfVxuXG4gICAgaXQudmFsdWVzWyBfbmFtZSBdID0gdmFsdWU7XG4gICAgaXQuZWxlbWVudHNbIF9uYW1lIF0uaW5wdXQudmFsdWUgPSB2YWx1ZTtcblxuICAgIHJldHVybiBpdC52YWx1ZXNbIF9uYW1lIF07XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUd2VhaztcbiIsImxldCBzZWVkO1xubGV0IHhvcnNoaWZ0ID0gKCBfc2VlZCApID0+IHtcbiAgc2VlZCA9IF9zZWVkIHx8IHNlZWQgfHwgMTtcbiAgc2VlZCA9IHNlZWQgXiAoIHNlZWQgPDwgMTMgKTtcbiAgc2VlZCA9IHNlZWQgXiAoIHNlZWQgPj4+IDE3ICk7XG4gIHNlZWQgPSBzZWVkIF4gKCBzZWVkIDw8IDUgKTtcbiAgcmV0dXJuIHNlZWQgLyBNYXRoLnBvdyggMiwgMzIgKSArIDAuNTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHhvcnNoaWZ0O1xuIiwiaW1wb3J0IHhvcnNoaWZ0IGZyb20gXCIuL2xpYnMveG9yc2hpZnRcIjtcbmltcG9ydCBUd2VhayBmcm9tIFwiLi9saWJzL3R3ZWFrXCI7XG5pbXBvcnQgR0xDYXQgZnJvbSBcIi4vbGlicy9nbGNhdFwiO1xuaW1wb3J0IEdMQ2F0UGF0aCBmcm9tIFwiLi9saWJzL2dsY2F0LXBhdGgtZ3VpXCI7XG5pbXBvcnQgTWF0aENhdCBmcm9tIFwiLi9saWJzL21hdGhjYXRcIjtcblxuaW1wb3J0IFRyaWFuZ3VsYXRpb24gZnJvbSBcIi4vdHJpYW5ndWxhdGlvblwiO1xuaW1wb3J0IFRyaWFuZ3VsYXRpb25EcmF3ZXIgZnJvbSBcIi4vdHJpYW5ndWxhdGlvbi1kcmF3ZXJcIjtcbmltcG9ydCBWZXJ0UGhhc2VyIGZyb20gXCIuL3ZlcnRwaGFzZXJcIjtcbmltcG9ydCB0cmFuc2xhdGVBcnJheTJEIGZyb20gXCIuL3RyYW5zbGF0ZS1hcnJheS0yZFwiO1xuaW1wb3J0IGxldHRlcnMgZnJvbSBcIi4vbGV0dGVyc1wiO1xuaW1wb3J0IHRyaTJEdG8zRCBmcm9tIFwiLi90cmktMmQtdG8tM2RcIjtcbmltcG9ydCBleHRydWRlUGF0aCBmcm9tIFwiLi9leHRydWRlLXBhdGhcIjtcblxubGV0IGdsc2xpZnkgPSByZXF1aXJlKCBcImdsc2xpZnlcIiApO1xuXG4vLyAtLS0tLS1cblxueG9yc2hpZnQoIDMyNjc4OTE1Nzg5MCApO1xuXG4vLyAtLS0tLS1cblxubGV0IHR3ZWFrID0gbmV3IFR3ZWFrKCBkaXZUd2VhayApO1xuXG4vLyAtLS0tLS1cblxubGV0IG1vdXNlWCA9IDAuMDtcbmxldCBtb3VzZVkgPSAwLjA7XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCAoIGV2ZW50ICkgPT4ge1xuICBtb3VzZVggPSBldmVudC5vZmZzZXRYO1xuICBtb3VzZVkgPSBldmVudC5vZmZzZXRZO1xufSApO1xuXG4vLyAtLS0tLS1cblxubGV0IGNsYW1wID0gKCB2LCBiLCB0ICkgPT4gTWF0aC5taW4oIE1hdGgubWF4KCB2LCBiICksIHQgKTtcbmxldCBsZXJwID0gKCBhLCBiLCB4ICkgPT4gYSArICggYiAtIGEgKSAqIHg7XG5sZXQgc2F0dXJhdGUgPSAoIHYgKSA9PiBjbGFtcCggdiwgMC4wLCAxLjAgKTtcblxuLy8gLS0tLS0tXG5cbmxldCB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IDM2MDtcbmxldCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gMzYwO1xuXG5sZXQgcmVuZGVyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cbmxldCBzYXZlRnJhbWUgPSAoKSA9PiB7XG4gIHJlbmRlckEuaHJlZiA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgcmVuZGVyQS5kb3dubG9hZCA9ICggXCIwMDAwXCIgKyB0b3RhbEZyYW1lICkuc2xpY2UoIC01ICkgKyBcIi5wbmdcIjtcbiAgcmVuZGVyQS5jbGljaygpO1xufTtcblxuLy8gLS0tLS0tXG5cbmxldCB0b3RhbEZyYW1lID0gMDtcbmxldCBpbml0ID0gZmFsc2U7XG5sZXQgZnJhbWVzID0gMjAwO1xuXG5sZXQgYXV0b21hdG9uID0gbmV3IEF1dG9tYXRvbigge1xuICBndWk6IGRpdkF1dG9tYXRvbixcbiAgZnBzOiBmcmFtZXMsXG4gIGRhdGE6IGBcbiAge1widlwiOlwiMS4xLjFcIixcImxlbmd0aFwiOjEsXCJyZXNvbHV0aW9uXCI6MTAwMCxcInBhcmFtc1wiOntcImZvY3VzXCI6W3tcInRpbWVcIjowLFwidmFsdWVcIjo3LjUsXCJtb2RlXCI6MSxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjoxLFwidmFsdWVcIjo3LjUsXCJtb2RlXCI6MCxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19XSxcInBoYXNlXCI6W3tcInRpbWVcIjowLFwidmFsdWVcIjowLFwibW9kZVwiOjEsXCJwYXJhbXNcIjp7fSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC4xLFwidmFsdWVcIjowLFwibW9kZVwiOjQsXCJwYXJhbXNcIjp7XCJyYXRlXCI6MTAwLFwiZGFtcFwiOjF9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjowLjI0MzQ0NDY2MTU3Mzk5MTgsXCJ2YWx1ZVwiOjAuNzQ0NTI0OTY5NTcwODc4NCxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjE4MCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC41MjQyNDk0MjI2MzI3OTQ1LFwidmFsdWVcIjoxLjA3MzA3MTE1Njg2Njg4OCxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjEwMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC41OTA0MzM0Njk1MzI3NzY4LFwidmFsdWVcIjowLjkzMjU2MjM1NTc2MTk0MjksXCJtb2RlXCI6NCxcInBhcmFtc1wiOntcInJhdGVcIjoxMDAsXCJkYW1wXCI6MX0sXCJtb2RzXCI6W2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXX0se1widGltZVwiOjAuNjUyNzE4MDY3MTUyMjQ3MyxcInZhbHVlXCI6MC44MTU2NTgwMjk2NTQ3NTE4LFwibW9kZVwiOjUsXCJwYXJhbXNcIjp7XCJncmF2aXR5XCI6MzgsXCJib3VuY2VcIjowLjN9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjowLjk1Mzg0NjE1Mzg0NjE1MzksXCJ2YWx1ZVwiOjAuNDI1NjE4NzQ0NDAyMzIzNCxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjM4MDAuMTEsXCJkYW1wXCI6MC4yfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MSxcInZhbHVlXCI6MC4yMjM4NDE5NjcwMDE2MzA5NSxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjYwMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfV0sXCJsaWdodFBvc1hcIjpbe1widGltZVwiOjAsXCJ2YWx1ZVwiOi04LjIzMzA3Mjg3NjU3MTE0NixcIm1vZGVcIjoxLFwicGFyYW1zXCI6e30sXCJtb2RzXCI6W2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXX0se1widGltZVwiOjAuMDQ4MDc2OTIzMDc2OTIzMTQsXCJ2YWx1ZVwiOjE2LjkxNDc5OTUwMTE1MjE1NyxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjgwMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC4yNDQyMzA3NjkyMzA3NjkyNSxcInZhbHVlXCI6MS40ODgyODQ5MzE0MDg0MjYsXCJtb2RlXCI6NCxcInBhcmFtc1wiOntcInJhdGVcIjo2OSxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC42NDYxNTM4NDYxNTM4NDYyLFwidmFsdWVcIjotNC40ODU2MDc1NDQxMTQ1MjUsXCJtb2RlXCI6NCxcInBhcmFtc1wiOntcInJhdGVcIjoyMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MSxcInZhbHVlXCI6LTExLjIwODMzNDQ2NjI1MDY3OCxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjEwMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfV0sXCJjYW1lcmFQb3NYXCI6W3tcInRpbWVcIjowLFwidmFsdWVcIjowLFwibW9kZVwiOjEsXCJwYXJhbXNcIjp7fSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MSxcInZhbHVlXCI6LTUuNTUxMTE1MTIzMTI1NzgzZS0xNyxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjUwLFwiZGFtcFwiOjF9LFwibW9kc1wiOltmYWxzZSxmYWxzZSx7XCJmcmVxXCI6MSxcImFtcFwiOjAuNSxcInJlc29cIjozLFwicmVjdXJzaW9uXCI6MixcInNlZWRcIjoxNDY2fSxmYWxzZV19XSxcImNhbWVyYVBvc1lcIjpbe1widGltZVwiOjAsXCJ2YWx1ZVwiOjAsXCJtb2RlXCI6MSxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjoxLFwidmFsdWVcIjowLFwibW9kZVwiOjQsXCJwYXJhbXNcIjp7XCJyYXRlXCI6NTAsXCJkYW1wXCI6MX0sXCJtb2RzXCI6W2ZhbHNlLGZhbHNlLHtcImZyZXFcIjoxLFwiYW1wXCI6MC41LFwicmVzb1wiOjMsXCJyZWN1cnNpb25cIjoyLFwic2VlZFwiOjE4fSxmYWxzZV19XSxcImNhbWVyYVpcIjpbe1widGltZVwiOjAsXCJ2YWx1ZVwiOjE3LjUsXCJtb2RlXCI6MSxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjowLjA1OTY2MjEwMDY3NTQ2MjgwNixcInZhbHVlXCI6OS42Nzg2MjM4MjE5OTMwMTQsXCJtb2RlXCI6MyxcInBhcmFtc1wiOntcImZhY3RvclwiOjEzfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC42ODgyMjE3MDkwMDY5Mjg0LFwidmFsdWVcIjo3LjI4NDY0NzQyNTM3NzY3MyxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjQxMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC44NDg4NDUyNjU1ODg5MTQ2LFwidmFsdWVcIjo4LjA3MDc3MjkxNzM3NDMxOSxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjY4LFwiZGFtcFwiOjF9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjoxLFwidmFsdWVcIjotMy41LFwibW9kZVwiOjUsXCJwYXJhbXNcIjp7XCJncmF2aXR5XCI6OTkwLFwiYm91bmNlXCI6MH0sXCJtb2RzXCI6W2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXX1dLFwiY2lyY2xlUm90YXRlXCI6W3tcInRpbWVcIjowLFwidmFsdWVcIjowLFwibW9kZVwiOjEsXCJwYXJhbXNcIjp7fSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MSxcInZhbHVlXCI6My4wNzY3MTg1NTM4MTI3MTUsXCJtb2RlXCI6NCxcInBhcmFtc1wiOntcInJhdGVcIjoyMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfV0sXCJjaXJjbGVFeHBhbmRcIjpbe1widGltZVwiOjAsXCJ2YWx1ZVwiOi0wLjAxMzEzMTExMzc1OTgzODM4LFwibW9kZVwiOjEsXCJwYXJhbXNcIjp7fSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC4xODg0NjE1Mzg0NjE1Mzg0NixcInZhbHVlXCI6LTAuMDA1NzM4MDE3MDU4NTQ4MDM5NSxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjUwMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdfSx7XCJ0aW1lXCI6MC45MDE5MjMwNzY5MjMwNzY5LFwidmFsdWVcIjoxLFwibW9kZVwiOjQsXCJwYXJhbXNcIjp7XCJyYXRlXCI6NTAwLFwiZGFtcFwiOjF9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjoxLFwidmFsdWVcIjotMC41ODk0NDg3ODE2MTc2NzU3LFwibW9kZVwiOjQsXCJwYXJhbXNcIjp7XCJyYXRlXCI6NTAwLFwiZGFtcFwiOjF9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19XSxcImNpcmNsZUludGVydmFsXCI6W3tcInRpbWVcIjowLFwidmFsdWVcIjoyLjUsXCJtb2RlXCI6MSxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjowLjE1Mzg0NjE1Mzg0NjE1Mzg1LFwidmFsdWVcIjoyLjUsXCJtb2RlXCI6MCxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjowLjYxNTM4NDYxNTM4NDYxNTQsXCJ2YWx1ZVwiOjEuMyxcIm1vZGVcIjo0LFwicGFyYW1zXCI6e1wicmF0ZVwiOjUwMCxcImRhbXBcIjoxfSxcIm1vZHNcIjpbe1widmVsb2NpdHlcIjowfSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjoxLFwidmFsdWVcIjoxLjMsXCJtb2RlXCI6NCxcInBhcmFtc1wiOntcInJhdGVcIjoxMDAsXCJkYW1wXCI6MX0sXCJtb2RzXCI6W2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXX1dLFwi44G144GN44Go44Gw44GZXCI6W3tcInRpbWVcIjowLFwidmFsdWVcIjoyMDAsXCJtb2RlXCI6MSxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjowLjg1LFwidmFsdWVcIjowLFwibW9kZVwiOjQsXCJwYXJhbXNcIjp7XCJyYXRlXCI6MTAwLFwiZGFtcFwiOjF9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjoxLFwidmFsdWVcIjoyMDAsXCJtb2RlXCI6MixcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19XSxcImNhbWVyYVJvbGxcIjpbe1widGltZVwiOjAsXCJ2YWx1ZVwiOjAsXCJtb2RlXCI6MSxcInBhcmFtc1wiOnt9LFwibW9kc1wiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LHtcInRpbWVcIjoxLFwidmFsdWVcIjowLFwibW9kZVwiOjEsXCJwYXJhbXNcIjp7fSxcIm1vZHNcIjpbZmFsc2UsZmFsc2Use1wiZnJlcVwiOjEsXCJhbXBcIjowLjAxLFwicmVzb1wiOjQuNixcInJlY3Vyc2lvblwiOjIsXCJzZWVkXCI6MjAwMDYuOH0sZmFsc2VdfV19LFwiZ3VpXCI6e1wic25hcFwiOntcImVuYWJsZVwiOmZhbHNlLFwiYnBtXCI6MTIwLFwib2Zmc2V0XCI6MH19fVxuYFxufSApO1xubGV0IGF1dG8gPSBhdXRvbWF0b24uYXV0bztcblxuLy8gLS0tLS0tXG5cbmxldCBjYW1lcmFQb3MgPSBbIDAuMCwgMC4wLCA4LjAgXTtcbmxldCBjYW1lcmFUYXIgPSBbIDAuMCwgMC4wLCAwLjAgXTtcbmxldCBjYW1lcmFSb2xsID0gMC4wO1xubGV0IGNhbWVyYUZvdiA9IDcwLjA7XG5cbmxldCBjYW1lcmFOZWFyID0gMC4xO1xubGV0IGNhbWVyYUZhciA9IDEwMC4wO1xuXG5sZXQgbGlnaHRQb3MgPSBbIDEwLjAsIDguMCwgMTAuMCBdO1xuXG5sZXQgbWF0UDtcbmxldCBtYXRWO1xubGV0IG1hdFBMO1xubGV0IG1hdFZMO1xuXG5sZXQgdXBkYXRlTWF0cmljZXMgPSAoKSA9PiB7XG4gIGNhbWVyYVBvc1sgMCBdID0gYXV0byggXCJjYW1lcmFQb3NYXCIgKTtcbiAgY2FtZXJhUG9zWyAxIF0gPSBhdXRvKCBcImNhbWVyYVBvc1lcIiApO1xuICBjYW1lcmFQb3NbIDIgXSA9IGF1dG8oIFwiY2FtZXJhWlwiICk7XG4gIGNhbWVyYVRhclsgMiBdID0gYXV0byggXCJjYW1lcmFaXCIgKSAtIDUuMDtcbiAgbGlnaHRQb3NbIDAgXSA9IGF1dG8oIFwibGlnaHRQb3NYXCIgKTtcbiAgbGlnaHRQb3NbIDIgXSA9IGF1dG8oIFwiY2FtZXJhWlwiICkgKyA1LjA7XG4gIGNhbWVyYVJvbGwgPSBhdXRvKCBcImNhbWVyYVJvbGxcIiApO1xuXG4gIG1hdFAgPSBNYXRoQ2F0Lm1hdDRQZXJzcGVjdGl2ZSggY2FtZXJhRm92LCB3aWR0aCAvIGhlaWdodCwgY2FtZXJhTmVhciwgY2FtZXJhRmFyICk7XG4gIG1hdFYgPSBNYXRoQ2F0Lm1hdDRMb29rQXQoIGNhbWVyYVBvcywgY2FtZXJhVGFyLCBbIDAuMCwgMS4wLCAwLjAgXSwgY2FtZXJhUm9sbCApO1xuXG4gIG1hdFBMID0gTWF0aENhdC5tYXQ0UGVyc3BlY3RpdmUoIGNhbWVyYUZvdiwgMS4wLCBjYW1lcmFOZWFyLCBjYW1lcmFGYXIgKTtcbiAgbWF0VkwgPSBNYXRoQ2F0Lm1hdDRMb29rQXQoIGxpZ2h0UG9zLCBjYW1lcmFUYXIsIFsgMC4wLCAxLjAsIDAuMCBdLCAwLjAgKTtcbn07XG51cGRhdGVNYXRyaWNlcygpO1xuXG4vLyAtLS0tLS1cblxubGV0IGdsID0gY2FudmFzLmdldENvbnRleHQoICd3ZWJnbCcgKTtcbmdsLmVuYWJsZSggZ2wuQ1VMTF9GQUNFICk7XG5cbmxldCBnbENhdCA9IG5ldyBHTENhdCggZ2wgKTtcblxuZ2xDYXQuZ2V0RXh0ZW5zaW9uKCBcIk9FU190ZXh0dXJlX2Zsb2F0XCIsIHRydWUgKTtcbmdsQ2F0LmdldEV4dGVuc2lvbiggXCJPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXJcIiwgdHJ1ZSApO1xuZ2xDYXQuZ2V0RXh0ZW5zaW9uKCBcIkVYVF9mcmFnX2RlcHRoXCIsIHRydWUgKTtcbmdsQ2F0LmdldEV4dGVuc2lvbiggXCJXRUJHTF9kcmF3X2J1ZmZlcnNcIiwgdHJ1ZSApO1xuZ2xDYXQuZ2V0RXh0ZW5zaW9uKCBcIkFOR0xFX2luc3RhbmNlZF9hcnJheXNcIiwgdHJ1ZSApO1xuXG5sZXQgZ2xDYXRQYXRoID0gbmV3IEdMQ2F0UGF0aCggZ2xDYXQsIHtcbiAgZHJhd2J1ZmZlcnM6IHRydWUsXG4gIGVsOiBkaXZQYXRoLFxuICBjYW52YXM6IGNhbnZhcyxcbiAgc3RyZXRjaDogdHJ1ZVxufSApO1xuXG4vLyAtLS0tLS1cblxubGV0IHZib1F1YWQgPSBnbENhdC5jcmVhdGVWZXJ0ZXhidWZmZXIoIFsgLTEsIC0xLCAxLCAtMSwgLTEsIDEsIDEsIDEgXSApO1xubGV0IHZib1F1YWRVViA9IGdsQ2F0LmNyZWF0ZVZlcnRleGJ1ZmZlciggWyAwLCAxLCAxLCAxLCAwLCAwLCAxLCAwIF0gKTtcbmxldCB2Ym9RdWFkMyA9IGdsQ2F0LmNyZWF0ZVZlcnRleGJ1ZmZlciggWyAtMSwgLTEsIDAsIDEsIC0xLCAwLCAtMSwgMSwgMCwgMSwgMSwgMCBdICk7XG5sZXQgdmJvUXVhZDNOb3IgPSBnbENhdC5jcmVhdGVWZXJ0ZXhidWZmZXIoIFsgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSBdICk7XG5cbmxldCB2Ym9UZXh0UG9zID0gZ2xDYXQuY3JlYXRlVmVydGV4YnVmZmVyKCBmYWxzZSApO1xubGV0IHZib1RleHROb3IgPSBnbENhdC5jcmVhdGVWZXJ0ZXhidWZmZXIoIGZhbHNlICk7XG5cbi8vIC0tLS0tLVxuXG5sZXQgdmJvTHVuYVBvcywgdmJvTHVuYU5vciwgbHVuYUxlbjtcbntcbiAgbGV0IGx1bmFQYXRoID0gW1xuICAgIC0xLCAtMSwgLTEsIC0zLCAgMSwgLTMsXG4gICAgIDEsIC0xLCAgMywgLTEsICAzLCAgMSxcbiAgICAgMSwgIDEsICAxLCAgMywgLTEsICAzLFxuICAgIC0xLCAgMSwgLTMsICAxLCAtMywgLTFcbiAgXTtcbiAgbGV0IGx1bmFUcmkgPSBuZXcgVHJpYW5ndWxhdGlvbiggbHVuYVBhdGggKTtcbiAgbHVuYVRyaS5kbyggMTAwICk7XG4gIGxldCBsdW5hRXh0ID0gZXh0cnVkZVBhdGgoIGx1bmFQYXRoLCAxLCAtMSApO1xuXG4gIGxldCBwb3MgPSBBcnJheS5mcm9tKCB0cmkyRHRvM0QoIGx1bmFUcmkudHJpLCAxICkgKTtcbiAgcG9zLnB1c2goIC4uLnBvcy5tYXAoICggdiwgaSApID0+IGkgJSAzID09PSAxID8gdiA6IC12ICkgKTtcbiAgcG9zLnB1c2goIC4uLmx1bmFFeHQucG9zICk7XG5cbiAgbGV0IG5vciA9IFtdO1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBsdW5hVHJpLnRyaS5sZW5ndGggLyAyOyBpICsrICkge1xuICAgIG5vci5wdXNoKCAwLCAwLCAxICk7XG4gIH1cbiAgZm9yICggbGV0IGkgPSAwOyBpIDwgbHVuYVRyaS50cmkubGVuZ3RoIC8gMjsgaSArKyApIHtcbiAgICBub3IucHVzaCggMCwgMCwgLTEgKTtcbiAgfVxuICBub3IucHVzaCggLi4ubHVuYUV4dC5ub3IgKTtcbiAgXG4gIHZib0x1bmFQb3MgPSBnbENhdC5jcmVhdGVWZXJ0ZXhidWZmZXIoIHBvcyApO1xuICB2Ym9MdW5hTm9yID0gZ2xDYXQuY3JlYXRlVmVydGV4YnVmZmVyKCBub3IgKTtcbiAgbHVuYUxlbiA9IHBvcy5sZW5ndGg7XG59XG5cbi8vIC0tLS0tLVxuXG5sZXQgcGFydGljbGVQaXhlbHMgPSAzO1xubGV0IHBhcnRpY2xlc1NxcnQgPSA2NDtcbmxldCBwYXJ0aWNsZXMgPSBwYXJ0aWNsZXNTcXJ0ICogcGFydGljbGVzU3FydDtcbmxldCB2ZXJ0c1BlclBhcnRpY2xlID0gbHVuYUxlbiAvIDM7XG5cbmxldCB2Ym9QYXJ0aWNsZVVWID0gZ2xDYXQuY3JlYXRlVmVydGV4YnVmZmVyKCAoICgpID0+IHtcbiAgbGV0IHJldCA9IFtdO1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXM7IGkgKysgKSB7XG4gICAgbGV0IGl4ID0gaSAlIHBhcnRpY2xlc1NxcnQ7XG4gICAgbGV0IGl5ID0gTWF0aC5mbG9vciggaSAvIHBhcnRpY2xlc1NxcnQgKTtcbiAgICBcbiAgICByZXQucHVzaCggaXggKiBwYXJ0aWNsZVBpeGVscyApO1xuICAgIHJldC5wdXNoKCBpeSApO1xuICB9XG4gIHJldHVybiByZXQ7XG59ICkoKSApO1xuXG4vLyAtLS0tLS1cblxubGV0IHRleHR1cmVEdW1teSA9IGdsQ2F0LmNyZWF0ZVRleHR1cmUoKTtcbmdsQ2F0LnNldFRleHR1cmVGcm9tQXJyYXkoIHRleHR1cmVEdW1teSwgMSwgMSwgWyAxLCAwLCAxLCAxIF0gKTtcblxubGV0IHRleHR1cmVSYW5kb21TaXplID0gMzI7XG5sZXQgdGV4dHVyZVJhbmRvbVVwZGF0ZSA9ICggX3RleCApID0+IHtcbiAgZ2xDYXQuc2V0VGV4dHVyZUZyb21BcnJheSggX3RleCwgdGV4dHVyZVJhbmRvbVNpemUsIHRleHR1cmVSYW5kb21TaXplLCAoICgpID0+IHtcbiAgICBsZXQgbGVuID0gdGV4dHVyZVJhbmRvbVNpemUgKiB0ZXh0dXJlUmFuZG9tU2l6ZSAqIDQ7XG4gICAgbGV0IHJldCA9IG5ldyBVaW50OEFycmF5KCBsZW4gKTtcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkgKysgKSB7XG4gICAgICByZXRbIGkgXSA9IE1hdGguZmxvb3IoIHhvcnNoaWZ0KCkgKiAyNTYuMCApO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9ICkoKSApO1xufTtcblxubGV0IHRleHR1cmVSYW5kb21TdGF0aWMgPSBnbENhdC5jcmVhdGVUZXh0dXJlKCk7XG5nbENhdC50ZXh0dXJlV3JhcCggdGV4dHVyZVJhbmRvbVN0YXRpYywgZ2wuUkVQRUFUICk7XG50ZXh0dXJlUmFuZG9tVXBkYXRlKCB0ZXh0dXJlUmFuZG9tU3RhdGljICk7XG5cbmxldCB0ZXh0dXJlUmFuZG9tID0gZ2xDYXQuY3JlYXRlVGV4dHVyZSgpO1xuZ2xDYXQudGV4dHVyZVdyYXAoIHRleHR1cmVSYW5kb20sIGdsLlJFUEVBVCApO1xuXG4vLyAtLS0tLS1cblxubGV0IGZyYW1lYnVmZmVyc0dhdXNzID0gW1xuICBnbENhdC5jcmVhdGVGbG9hdEZyYW1lYnVmZmVyKCB3aWR0aCAvIDQsIGhlaWdodCAvIDQgKSxcbiAgZ2xDYXQuY3JlYXRlRmxvYXRGcmFtZWJ1ZmZlciggd2lkdGggLyA0LCBoZWlnaHQgLyA0ICksXG4gIGdsQ2F0LmNyZWF0ZUZsb2F0RnJhbWVidWZmZXIoIHdpZHRoIC8gNCwgaGVpZ2h0IC8gNCApXG5dO1xuXG5sZXQgZnJhbWVidWZmZXJQcmVEb2YgPSBnbENhdC5jcmVhdGVGbG9hdEZyYW1lYnVmZmVyKCB3aWR0aCwgaGVpZ2h0ICk7XG5cbmxldCBmcmFtZWJ1ZmZlck1vdGlvblByZXYgPSBnbENhdC5jcmVhdGVGcmFtZWJ1ZmZlciggd2lkdGgsIGhlaWdodCApO1xubGV0IGZyYW1lYnVmZmVyTW90aW9uTW9zaCA9IGdsQ2F0LmNyZWF0ZUZyYW1lYnVmZmVyKCB3aWR0aCwgaGVpZ2h0ICk7XG5cbmxldCBzaGFkb3dTaXplID0gNTEyO1xuXG4vLyAtLS0tLS1cblxubGV0IGJnQ29sb3IgPSBbIDAuMDEsIDAuMDEsIDAuMDEsIDEuMCBdO1xuXG4vLyAtLS0tLS1cblxuZ2xDYXRQYXRoLnNldEdsb2JhbEZ1bmMoICgpID0+IHtcbiAgZ2xDYXQudW5pZm9ybTFpKCAnaW5pdCcsIGluaXQgKTtcbiAgZ2xDYXQudW5pZm9ybTFmKCAndGltZScsIGF1dG9tYXRvbi50aW1lICk7XG4gIGdsQ2F0LnVuaWZvcm0xZiggJ2RlbHRhVGltZScsIGF1dG9tYXRvbi5kZWx0YVRpbWUgKTtcblxuICBnbENhdC51bmlmb3JtMWYoICdmcmFtZScsIGF1dG9tYXRvbi5mcmFtZSApO1xuICBnbENhdC51bmlmb3JtMWYoICdmcmFtZXMnLCBmcmFtZXMgKTtcblxuICBnbENhdC51bmlmb3JtMmZ2KCAnbW91c2UnLCBbIG1vdXNlWCwgbW91c2VZIF0gKTtcblxuICBnbENhdC51bmlmb3JtM2Z2KCAnY2FtZXJhUG9zJywgY2FtZXJhUG9zICk7XG4gIGdsQ2F0LnVuaWZvcm0zZnYoICdjYW1lcmFUYXInLCBjYW1lcmFUYXIgKTtcbiAgZ2xDYXQudW5pZm9ybTFmKCAnY2FtZXJhUm9sbCcsIGNhbWVyYVJvbGwgKTtcbiAgZ2xDYXQudW5pZm9ybTFmKCAnY2FtZXJhRm92JywgY2FtZXJhRm92ICk7XG4gIGdsQ2F0LnVuaWZvcm0xZiggJ2NhbWVyYU5lYXInLCBjYW1lcmFOZWFyICk7XG4gIGdsQ2F0LnVuaWZvcm0xZiggJ2NhbWVyYUZhcicsIGNhbWVyYUZhciApO1xuICBnbENhdC51bmlmb3JtM2Z2KCAnbGlnaHRQb3MnLCBsaWdodFBvcyApO1xuXG4gIGdsQ2F0LnVuaWZvcm0xZiggJ3BhcnRpY2xlc1NxcnQnLCBwYXJ0aWNsZXNTcXJ0ICk7XG4gIGdsQ2F0LnVuaWZvcm0xZiggJ3BhcnRpY2xlUGl4ZWxzJywgcGFydGljbGVQaXhlbHMgKTtcblxuICBnbENhdC51bmlmb3JtTWF0cml4NGZ2KCAnbWF0UCcsIG1hdFAgKTtcbiAgZ2xDYXQudW5pZm9ybU1hdHJpeDRmdiggJ21hdFYnLCBtYXRWICk7XG4gIGdsQ2F0LnVuaWZvcm1NYXRyaXg0ZnYoICdtYXRQTCcsIG1hdFBMICk7XG4gIGdsQ2F0LnVuaWZvcm1NYXRyaXg0ZnYoICdtYXRWTCcsIG1hdFZMICk7XG4gIGdsQ2F0LnVuaWZvcm00ZnYoICdiZ0NvbG9yJywgYmdDb2xvciApO1xufSApO1xuXG5nbENhdFBhdGguYWRkKCB7XG4gIHJldHVybjoge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB2ZXJ0OiBnbHNsaWZ5KCAnLi9zaGFkZXIvcXVhZC52ZXJ0JyApLFxuICAgIGZyYWc6IGdsc2xpZnkoICcuL3NoYWRlci9yZXR1cm4uZnJhZycgKSxcbiAgICBibGVuZDogWyBnbC5PTkUsIGdsLlpFUk8gXSxcbiAgICBjbGVhcjogWyAwLjAsIDAuMCwgMC4wLCAxLjAgXSxcbiAgICBmdW5jOiAoIHBhdGgsIHBhcmFtcyApID0+IHtcbiAgICAgIGdsQ2F0LmF0dHJpYnV0ZSggJ3AnLCB2Ym9RdWFkLCAyICk7XG4gICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXIwJywgcGFyYW1zLmlucHV0LCAwICk7XG4gICAgICBnbC5kcmF3QXJyYXlzKCBnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCApO1xuICAgIH1cbiAgfSxcblxuICBpbnNwZWN0b3I6IHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdmVydDogZ2xzbGlmeSggJy4vc2hhZGVyL3F1YWQudmVydCcgKSxcbiAgICBmcmFnOiBnbHNsaWZ5KCAnLi9zaGFkZXIvaW5zcGVjdG9yLmZyYWcnICksXG4gICAgYmxlbmQ6IFsgZ2wuT05FLCBnbC5aRVJPIF0sXG4gICAgY2xlYXI6IFsgMC4wLCAwLjAsIDAuMCwgMS4wIF0sXG4gICAgZnVuYzogKCBwYXRoLCBwYXJhbXMgKSA9PiB7XG4gICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgZ2xDYXQudW5pZm9ybTNmdiggJ2NpcmNsZUNvbG9yJywgWyAxLjAsIDEuMCwgMS4wIF0gKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlcjAnLCBwYXJhbXMuaW5wdXQsIDAgKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgfVxuICB9LFxuXG4gIGdhdXNzVGFibGU6IHtcbiAgICB3aWR0aDogNiwgLy8gcmFkaXVzIG9mIGRvZlxuICAgIGhlaWdodDogMjU2LFxuICAgIHZlcnQ6IGdsc2xpZnkoICcuL3NoYWRlci9xdWFkLnZlcnQnICksXG4gICAgZnJhZzogZ2xzbGlmeSggJy4vc2hhZGVyL2dhdXNzLXRhYmxlLmZyYWcnICksXG4gICAgYmxlbmQ6IFsgZ2wuT05FLCBnbC5aRVJPIF0sXG4gICAgY2xlYXI6IFsgMC4wLCAwLjAsIDAuMCwgMS4wIF0sXG4gICAgZnJhbWVidWZmZXI6IHRydWUsXG4gICAgZmxvYXQ6IHRydWUsXG4gICAgZnVuYzogKCBwYXRoLCBwYXJhbXMgKSA9PiB7XG4gICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgZ2wuZHJhd0FycmF5cyggZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQgKTtcbiAgICB9XG4gIH0sXG5cbiAgXCLwn5CsXCI6IHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdmVydDogZ2xzbGlmeSggJy4vc2hhZGVyL3F1YWQudmVydCcgKSxcbiAgICBmcmFnOiBnbHNsaWZ5KCAnLi9zaGFkZXIvYmcuZnJhZycgKSxcbiAgICBibGVuZDogWyBnbC5PTkUsIGdsLlpFUk8gXSxcbiAgICBjbGVhcjogWyAwLjAsIDAuMCwgMC4wLCAxLjAgXSxcbiAgICBmcmFtZWJ1ZmZlcjogdHJ1ZSxcbiAgICBkcmF3YnVmZmVyczogMixcbiAgICBmbG9hdDogdHJ1ZSxcbiAgICBmdW5jOiAoKSA9PiB7XG4gICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgZ2wuZHJhd0FycmF5cyggZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQgKTtcbiAgICB9XG4gIH0sXG5cbiAgXCLlvbFcIjoge1xuICAgIHdpZHRoOiBzaGFkb3dTaXplLFxuICAgIGhlaWdodDogc2hhZG93U2l6ZSxcbiAgICB2ZXJ0OiBnbHNsaWZ5KCAnLi9zaGFkZXIvcXVhZC52ZXJ0JyApLFxuICAgIGZyYWc6IGdsc2xpZnkoICcuL3NoYWRlci9yZXR1cm4uZnJhZycgKSxcbiAgICBibGVuZDogWyBnbC5PTkUsIGdsLlpFUk8gXSxcbiAgICBjbGVhcjogWyBjYW1lcmFGYXIsIDAuMCwgMC4wLCAxLjAgXSxcbiAgICBmcmFtZWJ1ZmZlcjogdHJ1ZSxcbiAgICBkcmF3YnVmZmVyczogMixcbiAgICBmbG9hdDogdHJ1ZSxcbiAgICBmdW5jOiAoKSA9PiB7fVxuICB9LFxuXG4gIGdyaWQ6IHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdmVydDogZ2xzbGlmeSggJy4vc2hhZGVyL3F1YWQudmVydCcgKSxcbiAgICBmcmFnOiBnbHNsaWZ5KCAnLi9zaGFkZXIvZ3JpZC5mcmFnJyApLFxuICAgIGRyYXdidWZmZXJzOiAyLFxuICAgIGJsZW5kOiBbIGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSBdLFxuICAgIGZ1bmM6ICggcGF0aCwgcGFyYW1zICkgPT4ge1xuICAgICAgZ2xDYXQuYXR0cmlidXRlKCAncCcsIHZib1F1YWQsIDIgKTtcblxuICAgICAgZ2xDYXQudW5pZm9ybTFmKCAnY2lyY2xlUm90YXRlJywgYXV0byggXCJjaXJjbGVSb3RhdGVcIiApICk7XG4gICAgICBnbENhdC51bmlmb3JtMWYoICdjaXJjbGVFeHBhbmQnLCBhdXRvKCBcImNpcmNsZUV4cGFuZFwiICkgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm0xZiggJ2NpcmNsZUludGVydmFsJywgYXV0byggXCJjaXJjbGVJbnRlcnZhbFwiICkgKTtcbiAgICAgIFxuICAgICAgZ2xDYXQudW5pZm9ybTFpKCAnaXNTaGFkb3cnLCBwYXJhbXMuaXNTaGFkb3cgKTtcbiAgICAgIGlmICggIXBhcmFtcy5pc1NoYWRvdyApIHtcbiAgICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyU2hhZG93JywgZ2xDYXRQYXRoLmZiKCBcIuW9sVwiICkudGV4dHVyZXNbIDAgXSwgMCApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyU2hhZG93JywgdGV4dHVyZUR1bW15LCAwICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGdsQ2F0LnVuaWZvcm0zZnYoICdjb2xvcicsIFsgMi44LCAwLjIsIDAuNyBdICk7IC8vIGlsbGVnYWxcbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgfVxuICB9LFxuXG4gIHRleHQ6IHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdmVydDogZ2xzbGlmeSggJy4vc2hhZGVyL29iamVjdC52ZXJ0JyApLFxuICAgIGZyYWc6IGdsc2xpZnkoICcuL3NoYWRlci9zaGFkZS5mcmFnJyApLFxuICAgIGRyYXdidWZmZXJzOiAyLFxuICAgIGJsZW5kOiBbIGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSBdLFxuICAgIGZ1bmM6ICggcGF0aCwgcGFyYW1zICkgPT4ge1xuICAgICAgaWYgKCAwIDwgdmJvVGV4dFBvcy5sZW5ndGggKSB7XG4gICAgICAgIGdsQ2F0LmF0dHJpYnV0ZSggJ3BvcycsIHZib1RleHRQb3MsIDMgKTtcbiAgICAgICAgZ2xDYXQuYXR0cmlidXRlKCAnbm9yJywgdmJvVGV4dE5vciwgMyApO1xuICAgICAgICBcbiAgICAgICAgbGV0IG1hdE0gPSBNYXRoQ2F0Lm1hdDRJZGVudGl0eSgpO1xuICAgICAgICBtYXRNID0gTWF0aENhdC5tYXQ0QXBwbHkoIE1hdGhDYXQubWF0NFNjYWxlWFlaKCAxLjAgLyAyLjAgKSwgbWF0TSApO1xuICAgICAgICBnbENhdC51bmlmb3JtTWF0cml4NGZ2KCAnbWF0TScsIG1hdE0gKTtcblxuICAgICAgICBnbENhdC51bmlmb3JtMWkoICdpc1NoYWRvdycsIHBhcmFtcy5pc1NoYWRvdyApO1xuICAgICAgICBpZiAoICFwYXJhbXMuaXNTaGFkb3cgKSB7XG4gICAgICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyU2hhZG93JywgZ2xDYXRQYXRoLmZiKCBcIuW9sVwiICkudGV4dHVyZXNbIDAgXSwgMCApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlclNoYWRvdycsIHRleHR1cmVEdW1teSwgMCApO1xuICAgICAgICB9XG4gICAgICAgIGdsQ2F0LnVuaWZvcm0zZnYoICdjb2xvcicsIFsgMC44LCAwLjgsIDAuOCBdICk7XG4gICAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFUywgMCwgdmJvVGV4dFBvcy5sZW5ndGggLyAzICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHBhcnRpY2xlc0NvbXB1dGVSZXR1cm46IHtcbiAgICB3aWR0aDogcGFydGljbGVzU3FydCAqIHBhcnRpY2xlUGl4ZWxzLFxuICAgIGhlaWdodDogcGFydGljbGVzU3FydCxcbiAgICB2ZXJ0OiBnbHNsaWZ5KCAnLi9zaGFkZXIvcXVhZC52ZXJ0JyApLFxuICAgIGZyYWc6IGdsc2xpZnkoICcuL3NoYWRlci9yZXR1cm4uZnJhZycgKSxcbiAgICBibGVuZDogWyBnbC5PTkUsIGdsLlpFUk8gXSxcbiAgICBjbGVhcjogWyAwLjAsIDAuMCwgMC4wLCAwLjAgXSxcbiAgICBmcmFtZWJ1ZmZlcjogdHJ1ZSxcbiAgICBmbG9hdDogdHJ1ZSxcbiAgICBmdW5jOiAoIHBhdGgsIHBhcmFtcyApID0+IHtcbiAgICAgIGdsQ2F0LmF0dHJpYnV0ZSggJ3AnLCB2Ym9RdWFkLCAyICk7XG4gICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXIwJywgZ2xDYXRQYXRoLmZiKCBcInBhcnRpY2xlc0NvbXB1dGVcIiApLnRleHR1cmUsIDAgKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgfVxuICB9LFxuXG4gIHBhcnRpY2xlc0NvbXB1dGU6IHtcbiAgICB3aWR0aDogcGFydGljbGVzU3FydCAqIHBhcnRpY2xlUGl4ZWxzLFxuICAgIGhlaWdodDogcGFydGljbGVzU3FydCxcbiAgICB2ZXJ0OiBnbHNsaWZ5KCAnLi9zaGFkZXIvcXVhZC52ZXJ0JyApLFxuICAgIGZyYWc6IGdsc2xpZnkoICcuL3NoYWRlci9wYXJ0aWNsZXMtY29tcHV0ZS5mcmFnJyApLFxuICAgIGJsZW5kOiBbIGdsLk9ORSwgZ2wuWkVSTyBdLFxuICAgIGNsZWFyOiBbIDAuMCwgMC4wLCAwLjAsIDAuMCBdLFxuICAgIGZyYW1lYnVmZmVyOiB0cnVlLFxuICAgIGZsb2F0OiB0cnVlLFxuICAgIGZ1bmM6ICggcGF0aCwgcGFyYW1zICkgPT4ge1xuICAgICAgZ2xDYXQuYXR0cmlidXRlKCAncCcsIHZib1F1YWQsIDIgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm0xZiggJ2Z1a2l0b2Jhc3UnLCBhdXRvKCBcIuOBteOBjeOBqOOBsOOBmVwiICkgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlclBjb21wdXRlJywgZ2xDYXRQYXRoLmZiKCBcInBhcnRpY2xlc0NvbXB1dGVSZXR1cm5cIiApLnRleHR1cmUsIDAgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlclJhbmRvbScsIHRleHR1cmVSYW5kb20sIDEgKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgfVxuICB9LFxuICBcbiAgcGFydGljbGVzUmVuZGVyOiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHZlcnQ6IGdsc2xpZnkoICcuL3NoYWRlci9wYXJ0aWNsZXMtcmVuZGVyLnZlcnQnICksXG4gICAgZnJhZzogZ2xzbGlmeSggJy4vc2hhZGVyL3BhcnRpY2xlcy1yZW5kZXIuZnJhZycgKSxcbiAgICBkcmF3YnVmZmVyczogMixcbiAgICBibGVuZDogWyBnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEgXSxcbiAgICBmdW5jOiAoIHBhdGgsIHBhcmFtcyApID0+IHtcbiAgICAgIGdsQ2F0LmF0dHJpYnV0ZSggJ2NvbXB1dGVVVicsIHZib1BhcnRpY2xlVVYsIDIsIDEgKTtcbiAgICAgIGdsQ2F0LmF0dHJpYnV0ZSggJ3ByaW1Qb3MnLCB2Ym9MdW5hUG9zLCAzICk7XG4gICAgICBnbENhdC5hdHRyaWJ1dGUoICdwcmltTm9yJywgdmJvTHVuYU5vciwgMyApO1xuXG4gICAgICBnbENhdC51bmlmb3JtMmZ2KCAncmVzb2x1dGlvblBjb21wdXRlJywgWyBwYXJ0aWNsZXNTcXJ0ICogcGFydGljbGVQaXhlbHMsIHBhcnRpY2xlc1NxcnQgXSApO1xuICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyUGNvbXB1dGUnLCBnbENhdFBhdGguZmIoIFwicGFydGljbGVzQ29tcHV0ZVwiICkudGV4dHVyZSwgMSApO1xuXG4gICAgICBnbENhdC51bmlmb3JtMWkoICdpc1NoYWRvdycsIHBhcmFtcy5pc1NoYWRvdyApO1xuICAgICAgaWYgKCAhcGFyYW1zLmlzU2hhZG93ICkge1xuICAgICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXJTaGFkb3cnLCBnbENhdFBhdGguZmIoIFwi5b2xXCIgKS50ZXh0dXJlc1sgMCBdLCAwICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXJTaGFkb3cnLCB0ZXh0dXJlRHVtbXksIDAgKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGV4dCA9IGdsQ2F0LmdldEV4dGVuc2lvbiggXCJBTkdMRV9pbnN0YW5jZWRfYXJyYXlzXCIgKTtcbiAgICAgIGV4dC5kcmF3QXJyYXlzSW5zdGFuY2VkQU5HTEUoIGdsLlRSSUFOR0xFUywgMCwgdmVydHNQZXJQYXJ0aWNsZSwgcGFydGljbGVzICk7XG4gICAgfVxuICB9LFxuICBcbiAgZnhhYToge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB2ZXJ0OiBnbHNsaWZ5KCAnLi9zaGFkZXIvcXVhZC52ZXJ0JyApLFxuICAgIGZyYWc6IGdsc2xpZnkoICcuL3NoYWRlci9meGFhLmZyYWcnICksXG4gICAgY2xlYXI6IFsgMC4wLCAwLjAsIDAuMCwgMS4wIF0sXG4gICAgZnJhbWVidWZmZXI6IHRydWUsXG4gICAgZmxvYXQ6IHRydWUsXG4gICAgYmxlbmQ6IFsgZ2wuT05FLCBnbC5aRVJPIF0sXG4gICAgZnVuYzogKCBwYXRoLCBwYXJhbXMgKSA9PiB7XG4gICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyMCcsIHBhcmFtcy5pbnB1dCwgMCApO1xuICAgICAgZ2wuZHJhd0FycmF5cyggZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQgKTtcbiAgICB9XG4gIH0sXG4gIFxuICBnYXVzczoge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB2ZXJ0OiBnbHNsaWZ5KCAnLi9zaGFkZXIvcXVhZC52ZXJ0JyApLFxuICAgIGZyYWc6IGdsc2xpZnkoICcuL3NoYWRlci9nYXVzcy5mcmFnJyApLFxuICAgIGNsZWFyOiBbIDAuMCwgMC4wLCAwLjAsIDEuMCBdLFxuICAgIHRlbXBGYjogZ2xDYXQuY3JlYXRlRmxvYXRGcmFtZWJ1ZmZlciggd2lkdGgsIGhlaWdodCApLFxuICAgIGJsZW5kOiBbIGdsLk9ORSwgZ2wuWkVSTyBdLFxuICAgIGZ1bmM6ICggcGF0aCwgcGFyYW1zICkgPT4ge1xuICAgICAgaWYgKCBwYXJhbXMud2lkdGggJiYgcGFyYW1zLmhlaWdodCApIHtcbiAgICAgICAgZ2xDYXQucmVzaXplRmxvYXRGcmFtZWJ1ZmZlciggcGF0aC50ZW1wRmIsIHBhcmFtcy53aWR0aCwgcGFyYW1zLmhlaWdodCApO1xuICAgICAgfVxuXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoIGdsLkZSQU1FQlVGRkVSLCBwYXRoLnRlbXBGYi5mcmFtZWJ1ZmZlciApO1xuICAgICAgZ2xDYXQuY2xlYXIoIC4uLnBhdGguY2xlYXIgKTtcblxuICAgICAgZ2xDYXQuYXR0cmlidXRlKCAncCcsIHZib1F1YWQsIDIgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlcjAnLCBwYXJhbXMuaW5wdXQsIDAgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm0xZiggJ3ZhcicsIHBhcmFtcy52YXIgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm0xaSggJ2lzVmVydCcsIDAgKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgICBcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlciggZ2wuRlJBTUVCVUZGRVIsIHBhcmFtcy5mcmFtZWJ1ZmZlciApO1xuXG4gICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyMCcsIHBhdGgudGVtcEZiLnRleHR1cmUsIDAgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm0xZiggJ3ZhcicsIHBhcmFtcy52YXIgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm0xaSggJ2lzVmVydCcsIDEgKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgfVxuICB9LFxuICBcbiAgZG9mOiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHZlcnQ6IGdsc2xpZnkoICcuL3NoYWRlci9xdWFkLnZlcnQnICksXG4gICAgZnJhZzogZ2xzbGlmeSggJy4vc2hhZGVyL2RvZi5mcmFnJyApLFxuICAgIGJsZW5kOiBbIGdsLk9ORSwgZ2wuWkVSTyBdLFxuICAgIGNsZWFyOiBbIDAuMCwgMC4wLCAwLjAsIDAuMCBdLFxuICAgIGZyYW1lYnVmZmVyOiB0cnVlLFxuICAgIGZsb2F0OiB0cnVlLFxuICAgIGZ1bmM6ICggcGF0aCwgcGFyYW1zICkgPT4ge1xuICAgICAgZ2xDYXQuYXR0cmlidXRlKCAncCcsIHZib1F1YWQsIDIgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm0xZiggJ2ZvY3VzJywgYXV0byggJ2ZvY3VzJyApICk7XG4gICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXJEcnknLCBwYXJhbXMuZHJ5LCAwICk7XG4gICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXJQcmVEb2YnLCBwYXJhbXMucHJlZG9mLCAxICk7XG4gICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXJEZXB0aCcsIHBhcmFtcy5kZXB0aCwgMiApO1xuICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyR2F1c3NUYWJsZScsIGdsQ2F0UGF0aC5mYiggXCJnYXVzc1RhYmxlXCIgKS50ZXh0dXJlLCAzICk7XG4gICAgICBnbC5kcmF3QXJyYXlzKCBnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCApO1xuICAgIH1cbiAgfSxcbiAgXG4gIFwiR293cm9jayAtIGJsb29tXCI6IHtcbiAgICB3aWR0aDogd2lkdGggLyA0LjAsXG4gICAgaGVpZ2h0OiBoZWlnaHQgLyA0LjAsXG4gICAgdmVydDogZ2xzbGlmeSggJy4vc2hhZGVyL3F1YWQudmVydCcgKSxcbiAgICBmcmFnOiBnbHNsaWZ5KCAnLi9zaGFkZXIvYmxvb20uZnJhZycgKSxcbiAgICBibGVuZDogWyBnbC5PTkUsIGdsLlpFUk8gXSxcbiAgICBjbGVhcjogWyAwLjAsIDAuMCwgMC4wLCAwLjAgXSxcbiAgICB0ZW1wRmI6IGdsQ2F0LmNyZWF0ZUZsb2F0RnJhbWVidWZmZXIoIHdpZHRoIC8gNC4wLCBoZWlnaHQgLyA0LjAgKSxcbiAgICBmcmFtZWJ1ZmZlcjogdHJ1ZSxcbiAgICBmbG9hdDogdHJ1ZSxcbiAgICBmdW5jOiAoIHBhdGgsIHBhcmFtcyApID0+IHtcbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDM7IGkgKysgKSB7XG4gICAgICAgIGxldCBnYXVzc1ZhciA9IFsgNS4wLCAxNS4wLCA0MC4wIF1bIGkgXTtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKCBnbC5GUkFNRUJVRkZFUiwgcGF0aC50ZW1wRmIuZnJhbWVidWZmZXIgKTtcbiAgICAgICAgZ2xDYXQuY2xlYXIoIC4uLnBhdGguY2xlYXIgKTtcblxuICAgICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgICBnbENhdC51bmlmb3JtMWkoICdpc1ZlcnQnLCBmYWxzZSApO1xuICAgICAgICBnbENhdC51bmlmb3JtMWYoICdnYXVzc1ZhcicsIGdhdXNzVmFyICk7XG4gICAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlcjAnLCBwYXJhbXMuaW5wdXQsIDAgKTtcbiAgICAgICAgZ2wuZHJhd0FycmF5cyggZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQgKTtcbiAgICAgICAgXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlciggZ2wuRlJBTUVCVUZGRVIsIHBhcmFtcy5mcmFtZWJ1ZmZlciApO1xuXG4gICAgICAgIGdsQ2F0LmF0dHJpYnV0ZSggJ3AnLCB2Ym9RdWFkLCAyICk7XG4gICAgICAgIGdsQ2F0LnVuaWZvcm0xaSggJ2lzVmVydCcsIHRydWUgKTtcbiAgICAgICAgZ2xDYXQudW5pZm9ybTFmKCAnZ2F1c3NWYXInLCBnYXVzc1ZhciApO1xuICAgICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXIwJywgcGF0aC50ZW1wRmIudGV4dHVyZSwgMCApO1xuICAgICAgICBnbENhdC51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZXJEcnknLCBwYXJhbXMuaW5wdXQsIDEgKTtcbiAgICAgICAgZ2wuZHJhd0FycmF5cyggZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFxuICBibG9vbUZpbmFsaXplOiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHZlcnQ6IGdsc2xpZnkoICcuL3NoYWRlci9xdWFkLnZlcnQnICksXG4gICAgZnJhZzogZ2xzbGlmeSggJy4vc2hhZGVyL2Jsb29tLWZpbmFsaXplLmZyYWcnICksXG4gICAgYmxlbmQ6IFsgZ2wuT05FLCBnbC5aRVJPIF0sXG4gICAgY2xlYXI6IFsgMC4wLCAwLjAsIDAuMCwgMC4wIF0sXG4gICAgZnJhbWVidWZmZXI6IHRydWUsXG4gICAgZmxvYXQ6IHRydWUsXG4gICAgZnVuYzogKCBwYXRoLCBwYXJhbXMgKSA9PiB7XG4gICAgICBnbENhdC5hdHRyaWJ1dGUoICdwJywgdmJvUXVhZCwgMiApO1xuICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyRHJ5JywgcGFyYW1zLmRyeSwgMCApO1xuICAgICAgZ2xDYXQudW5pZm9ybVRleHR1cmUoICdzYW1wbGVyV2V0JywgcGFyYW1zLndldCwgMSApO1xuICAgICAgZ2wuZHJhd0FycmF5cyggZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQgKTtcbiAgICB9XG4gIH0sXG4gIFxuICDjgYrjgZ/jgY/jga/jgZnjgZDjg53jgrnjg4jjgqjjg5Xjgqfjgq/jg4jjgpLmjL/jgZk6IHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdmVydDogZ2xzbGlmeSggJy4vc2hhZGVyL3F1YWQudmVydCcgKSxcbiAgICBmcmFnOiBnbHNsaWZ5KCAnLi9zaGFkZXIvcG9zdC5mcmFnJyApLFxuICAgIGJsZW5kOiBbIGdsLk9ORSwgZ2wuWkVSTyBdLFxuICAgIGNsZWFyOiBbIDAuMCwgMC4wLCAwLjAsIDAuMCBdLFxuICAgIGZyYW1lYnVmZmVyOiB0cnVlLFxuICAgIGZ1bmM6ICggcGF0aCwgcGFyYW1zICkgPT4ge1xuICAgICAgZ2xDYXQuYXR0cmlidXRlKCAncCcsIHZib1F1YWQsIDIgKTtcbiAgICAgIGdsQ2F0LnVuaWZvcm1UZXh0dXJlKCAnc2FtcGxlcjAnLCBwYXJhbXMuaW5wdXQsIDAgKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgfVxuICB9LFxufSApO1xuXG4vLyAtLS0tLS1cblxubGV0IHVwZGF0ZVVJID0gKCkgPT4ge1xuICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgbGV0IGRlYWRsaW5lID0gbmV3IERhdGUoIDIwMTgsIDEsIDIsIDAsIDAgKTtcblxuICBkaXZDb3VudGRvd24uaW5uZXJUZXh0ID0gXCJEZWFkbGluZTogXCIgKyBNYXRoLmZsb29yKCAoIGRlYWRsaW5lIC0gbm93ICkgLyAxMDAwICk7XG59O1xuXG4vLyAtLS0tLS1cblxubGV0IHRleHRDaGFycyA9IFtcbiAgWyAxNSwgMC43LCAwLjQgXSxcbiAgWyAxNywgMC43LCAwLjMgXSxcbiAgWyAxNCwgMS4wLCAwLjcgXSxcbiAgWyAgMiwgMC43LCAwLjYgXSxcbiAgWyAgNCwgMC43NSwgMC40IF0sXG4gIFsgIDMsIDEuMywgMC44IF0sXG4gIFsgMjAsIDEuMSwgMC41NSBdLFxuICBbIDE3LCAwLjksIDAuMiBdLFxuICBbICA0LCAxLjAsIDAuNiBdLFxuXTtcbnRleHRDaGFycy5tYXAoICggYSApID0+IHtcbiAgYVsgMCBdID0gbmV3IFZlcnRQaGFzZXIoIGxldHRlcnNbIGFbIDAgXSBdICk7XG59ICk7XG5cbmxldCB1cGRhdGVUZXh0ID0gKCkgPT4ge1xuICBsZXQgcGhhc2UgPSBhdXRvKCBcInBoYXNlXCIgKTtcblxuICBsZXQgcG9zID0gW107XG4gIGxldCBub3IgPSBbXTtcbiAgdGV4dENoYXJzLm1hcCggKCBhLCBpICkgPT4ge1xuICAgIGxldCB2ZXJ0ID0gYVsgMCBdLmRvKFxuICAgICAgbGVycCggYVsgMSBdLCBhWyAyIF0sIHBoYXNlICksXG4gICAgICBwaGFzZVxuICAgICk7XG4gICAgdHJhbnNsYXRlQXJyYXkyRChcbiAgICAgIHZlcnQsXG4gICAgICAoICggaSAlIDMgKSAtIDEgKSAqIDUuNSAtIDIuNSxcbiAgICAgICggMSAtIE1hdGguZmxvb3IoIGkgLyAzICkgKSAqIDUuNSAtIDIuNVxuICAgICk7XG5cbiAgICBsZXQgdHJpID0gbmV3IFRyaWFuZ3VsYXRpb24oIHZlcnQgKTtcbiAgICB0cmkuZG8oIDEwMCApO1xuICAgIHBvcy5wdXNoKCAuLi50cmkyRHRvM0QoIHRyaS50cmksIDAuMCApICk7XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0cmkudHJpLmxlbmd0aCAvIDIuMDsgaSArKyApIHtcbiAgICAgIG5vci5wdXNoKCAwLCAwLCAxICk7XG4gICAgfVxuXG4gICAgbGV0IGV4dCA9IGV4dHJ1ZGVQYXRoKCB2ZXJ0LCAwLjAsIC01LjAgKTtcbiAgICBwb3MucHVzaCggLi4uZXh0LnBvcyApO1xuICAgIG5vci5wdXNoKCAuLi5leHQubm9yICk7XG4gIH0gKTtcblxuICBnbENhdC5zZXRWZXJ0ZXhidWZmZXIoIHZib1RleHRQb3MsIHBvcywgZ2wuRFlOQU1JQ19EUkFXICk7XG4gIGdsQ2F0LnNldFZlcnRleGJ1ZmZlciggdmJvVGV4dE5vciwgbm9yLCBnbC5EWU5BTUlDX0RSQVcgKTtcbn07XG5cbi8vIC0tLS0tLVxuXG5nbENhdFBhdGgucmVuZGVyKCBcImdhdXNzVGFibGVcIiApO1xuXG5sZXQgdXBkYXRlID0gKCkgPT4ge1xuICBpZiAoICF0d2Vhay5jaGVja2JveCggXCJwbGF5XCIsIHsgdmFsdWU6IHRydWUgfSApICkge1xuICAgIHNldFRpbWVvdXQoIHVwZGF0ZSwgMTAwICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXV0b21hdG9uLnVwZGF0ZSgpO1xuXG4gIGlmICggYXV0b21hdG9uLmZyYW1lID09PSAwICkge1xuICAgIHhvcnNoaWZ0KCAxNzkwNjc4OTEzNjcgKTtcbiAgfVxuXG4gIHVwZGF0ZVVJKCk7XG4gIHVwZGF0ZU1hdHJpY2VzKCk7XG4gIFxuICB1cGRhdGVUZXh0KCk7XG5cbiAgdGV4dHVyZVJhbmRvbVVwZGF0ZSggdGV4dHVyZVJhbmRvbSApO1xuXG4gIC8vIC0tLS0tLVxuXG4gIGdsQ2F0UGF0aC5iZWdpbigpO1xuXG4gIGdsQ2F0UGF0aC5yZW5kZXIoIFwi8J+QrFwiICk7XG4gIGdsQ2F0UGF0aC5yZW5kZXIoIFwi5b2xXCIgKTtcblxuICAvLyDihpMgdG9vIHNsb3cgYW5kIG5vdCBiZWF1dGlmdWwgc28gb21pdHRlZFxuICAvLyBnbENhdFBhdGgucmVuZGVyKCBcImdyaWRcIiwge1xuICAvLyAgIHRhcmdldDogZ2xDYXRQYXRoLmZiKCBcIuW9sVwiICksXG4gIC8vICAgaXNTaGFkb3c6IHRydWUsXG4gIC8vICAgd2lkdGg6IHNoYWRvd1NpemUsXG4gIC8vICAgaGVpZ2h0OiBzaGFkb3dTaXplXG4gIC8vIH0gKTt9XG5cbiAgZ2xDYXRQYXRoLnJlbmRlciggXCJwYXJ0aWNsZXNDb21wdXRlUmV0dXJuXCIgKTtcbiAgZ2xDYXRQYXRoLnJlbmRlciggXCJwYXJ0aWNsZXNDb21wdXRlXCIgKTtcblxuICBnbENhdFBhdGgucmVuZGVyKCBcInBhcnRpY2xlc1JlbmRlclwiLCB7XG4gICAgdGFyZ2V0OiBnbENhdFBhdGguZmIoIFwi5b2xXCIgKSxcbiAgICBpc1NoYWRvdzogdHJ1ZSxcbiAgICB3aWR0aDogc2hhZG93U2l6ZSxcbiAgICBoZWlnaHQ6IHNoYWRvd1NpemVcbiAgfSApO1xuXG4gIGdsQ2F0UGF0aC5yZW5kZXIoIFwidGV4dFwiLCB7XG4gICAgdGFyZ2V0OiBnbENhdFBhdGguZmIoIFwi5b2xXCIgKSxcbiAgICBpc1NoYWRvdzogdHJ1ZSxcbiAgICB3aWR0aDogc2hhZG93U2l6ZSxcbiAgICBoZWlnaHQ6IHNoYWRvd1NpemVcbiAgfSApO1xuXG4gIGdsQ2F0UGF0aC5yZW5kZXIoIFwiZ3JpZFwiLCB7XG4gICAgdGFyZ2V0OiBnbENhdFBhdGguZmIoIFwi8J+QrFwiICksXG4gICAgaXNTaGFkb3c6IGZhbHNlXG4gIH0gKTtcblxuICBnbENhdFBhdGgucmVuZGVyKCBcInBhcnRpY2xlc1JlbmRlclwiLCB7XG4gICAgdGFyZ2V0OiBnbENhdFBhdGguZmIoIFwi8J+QrFwiIClcbiAgfSApO1xuXG4gIGdsQ2F0UGF0aC5yZW5kZXIoIFwidGV4dFwiLCB7XG4gICAgdGFyZ2V0OiBnbENhdFBhdGguZmIoIFwi8J+QrFwiICksXG4gICAgaXNTaGFkb3c6IGZhbHNlXG4gIH0gKTtcblxuICBnbENhdFBhdGgucmVuZGVyKCBcImZ4YWFcIiwge1xuICAgIGlucHV0OiBnbENhdFBhdGguZmIoIFwi8J+QrFwiICkudGV4dHVyZXNbIDAgXVxuICB9ICk7XG5cbiAgZ2xDYXRQYXRoLnJlbmRlciggXCJnYXVzc1wiLCB7XG4gICAgdGFyZ2V0OiBmcmFtZWJ1ZmZlclByZURvZixcbiAgICBpbnB1dDogZ2xDYXRQYXRoLmZiKCBcImZ4YWFcIiApLnRleHR1cmUsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHZhcjogNS4wXG4gIH0gKTtcblxuICBnbENhdFBhdGgucmVuZGVyKCBcImRvZlwiLCB7XG4gICAgZHJ5OiBnbENhdFBhdGguZmIoIFwiZnhhYVwiICkudGV4dHVyZSxcbiAgICBwcmVkb2Y6IGZyYW1lYnVmZmVyUHJlRG9mLnRleHR1cmUsXG4gICAgZGVwdGg6IGdsQ2F0UGF0aC5mYiggXCLwn5CsXCIgKS50ZXh0dXJlc1sgMSBdXG4gIH0gKTtcblxuICBnbENhdFBhdGgucmVuZGVyKCBcIkdvd3JvY2sgLSBibG9vbVwiLCB7XG4gICAgaW5wdXQ6IGZyYW1lYnVmZmVyUHJlRG9mLnRleHR1cmUsXG4gIH0gKTtcbiAgZ2xDYXRQYXRoLnJlbmRlciggXCJibG9vbUZpbmFsaXplXCIsIHtcbiAgICBkcnk6IGdsQ2F0UGF0aC5mYiggXCJkb2ZcIiApLnRleHR1cmUsXG4gICAgd2V0OiBnbENhdFBhdGguZmIoIFwiR293cm9jayAtIGJsb29tXCIgKS50ZXh0dXJlXG4gIH0gKTtcblxuICBnbENhdFBhdGgucmVuZGVyKCBcIuOBiuOBn+OBj+OBr+OBmeOBkOODneOCueODiOOCqOODleOCp+OCr+ODiOOCkuaMv+OBmVwiLCB7XG4gICAgdGFyZ2V0OiBHTENhdFBhdGgubnVsbEZiLFxuICAgIGlucHV0OiBnbENhdFBhdGguZmIoIFwiYmxvb21GaW5hbGl6ZVwiICkudGV4dHVyZVxuICB9ICk7XG5cbiAgZ2xDYXRQYXRoLmVuZCgpO1xuXG4gIGluaXQgPSBmYWxzZTtcbiAgdG90YWxGcmFtZSArKztcblxuICAvLyAtLS0tLS1cblxuICBpZiAoIHR3ZWFrLmNoZWNrYm94KCBcInNhdmVcIiwgeyB2YWx1ZTogZmFsc2UgfSApICkge1xuICAgIHNhdmVGcmFtZSgpO1xuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB1cGRhdGUgKTtcbn1cblxudXBkYXRlKCk7XG5cbi8vIC0tLS0tLVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsICggX2UgKSA9PiB7XG4gIGlmICggX2Uud2hpY2ggPT09IDI3ICkge1xuICAgIHR3ZWFrLmNoZWNrYm94KCBcInBsYXlcIiwgeyBzZXQ6IGZhbHNlIH0gKTtcbiAgfVxufSApO1xuIiwibGV0IHZlcnRUcmFuc2xhdGVyID0gKCB2LCB4LCB5ICkgPT4ge1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aCAvIDI7IGkgKysgKSB7XG4gICAgdlsgaSAqIDIgICAgIF0gKz0geDtcbiAgICB2WyBpICogMiArIDEgXSArPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0VHJhbnNsYXRlcjsiLCJsZXQgdHJpMkR0bzNEID0gKCB2LCBoICkgPT4ge1xuICBsZXQgcmV0ID0gbmV3IEZsb2F0MzJBcnJheSggdi5sZW5ndGggLyAyICogMyApO1xuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aCAvIDI7IGkgKysgKSB7XG4gICAgcmV0WyBpICogMyAgICAgXSA9IHZbIGkgKiAyICAgICBdO1xuICAgIHJldFsgaSAqIDMgKyAxIF0gPSB2WyBpICogMiArIDEgXTtcbiAgICByZXRbIGkgKiAzICsgMiBdID0gaDtcbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJpMkR0bzNEOyIsImxldCBUcmlhbmd1bGF0aW9uRHJhd2VyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvciggX3RyaSwgX2NhbnZhcyApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgaXQudHJpID0gX3RyaTtcblxuICAgIGl0LmNhbnZhcyA9IF9jYW52YXM7XG4gICAgaXQuY29udGV4dCA9IGl0LmNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cbiAgICBpdC5ybXggPSAwLjA7XG4gICAgaXQucm94ID0gMC4wO1xuICAgIGl0LnJteSA9IDAuMDtcbiAgICBpdC5yb3kgPSAwLjA7XG5cbiAgICBpdC5jdXJyZW50QSA9IG51bGw7XG4gICAgaXQuY3VycmVudEIgPSBudWxsO1xuICB9XG5cbiAgcmFuZ2UoIF9pYngsIF9pdHgsIF9pYnksIF9pdHksIF9vYngsIF9vdHgsIF9vYnksIF9vdHkgKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGl0LnJteCA9ICggX290eCAtIF9vYnggKSAvICggX2l0eCAtIF9pYnggKTtcbiAgICBpdC5yb3ggPSAoIF9pYnggKSAqIGl0LnJteCAtIF9vYng7XG4gICAgaXQucm15ID0gKCBfb3R5IC0gX29ieSApIC8gKCBfaXR5IC0gX2lieSApO1xuICAgIGl0LnJveSA9ICggX2lieSApICogaXQucm15IC0gX29ieTtcbiAgfVxuXG4gIGRyYXdWZXJ0KCBfaW5kZXggKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGxldCBhID0gaXQudHJpLmdldFZlcnQoIF9pbmRleCApO1xuICAgIGxldCBiID0gaXQudHJpLmdldFZlcnQoIF9pbmRleCArIDEgKTtcbiAgICBpdC5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGl0LmNvbnRleHQubW92ZVRvKCBhLnggKiBpdC5ybXggLSBpdC5yb3gsIGEueSAqIGl0LnJteSAtIGl0LnJveSApO1xuICAgIGl0LmNvbnRleHQubGluZVRvKCBiLnggKiBpdC5ybXggLSBpdC5yb3gsIGIueSAqIGl0LnJteSAtIGl0LnJveSApO1xuICAgIGl0LmNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3VHJpKCBfaW5kZXggKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGxldCB0cmkgPSBpdC50cmkuZ2V0VHJpKCBfaW5kZXggKTtcbiAgICBpdC5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGl0LmNvbnRleHQubW92ZVRvKCB0cmkueDEgKiBpdC5ybXggLSBpdC5yb3gsIHRyaS55MSAqIGl0LnJteSAtIGl0LnJveSApO1xuICAgIGl0LmNvbnRleHQubGluZVRvKCB0cmkueDIgKiBpdC5ybXggLSBpdC5yb3gsIHRyaS55MiAqIGl0LnJteSAtIGl0LnJveSApO1xuICAgIGl0LmNvbnRleHQubGluZVRvKCB0cmkueDMgKiBpdC5ybXggLSBpdC5yb3gsIHRyaS55MyAqIGl0LnJteSAtIGl0LnJveSApO1xuICAgIGl0LmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgaXQuY29udGV4dC5maWxsKCk7XG4gICAgaXQuY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGl0LmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgaXQuY29udGV4dC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBpdC5jb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcblxuICAgIGl0LmNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBpdC5jb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2IoIDIyMCwgMjIwLCAyMjAgKSc7XG4gICAgaXQuY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2IoIDMwLCAzMCwgMzAgKSc7XG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaXQudHJpLnRyaS5sZW5ndGggLyA2OyBpICsrICkge1xuICAgICAgaXQuZHJhd1RyaSggaSApO1xuICAgIH1cblxuICAgIGl0LmNvbnRleHQubGluZVdpZHRoID0gMjtcbiAgICBpdC5jb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYiggMCwgMjU1LCA5MCApJztcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdC50cmkudmVydC5sZW5ndGggLyAyOyBpICsrICkge1xuICAgICAgaXQuZHJhd1ZlcnQoIGkgKTtcbiAgICB9XG5cbiAgICBpdC5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5ndWxhdGlvbkRyYXdlcjtcbiIsImxldCBFUFNJTE9OID0gMUUtMTA7XG5sZXQgbGVycCA9ICggYSwgYiwgeCApID0+IGEgKyAoIGIgLSBhICkgKiB4O1xuXG5sZXQgVHJpYW5ndWxhdGlvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoIF92ZXJ0ICkge1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICBpdC52ZXJ0ID0gaXQuaW5pdFZlcnQoIF92ZXJ0ICk7XG4gICAgaXQudmVydE9yaSA9IGl0LnZlcnQuY29uY2F0KCk7XG4gICAgaXQudmVydEluZGV4ID0gMDtcbiAgICBpdC5sYXN0R29vZCA9IDA7XG4gICAgaXQudHJpID0gW107XG5cbiAgICBpdC5maW5pc2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgaW5pdFZlcnQoIF92ZXJ0ICkge1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICBsZXQgdmVydCA9IFsgX3ZlcnRbIDAgXSwgX3ZlcnRbIDEgXSBdO1xuICAgIGxldCBzdyA9IHRydWU7XG4gICAgbGV0IGN1ZSA9IFtdO1xuXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgX3ZlcnQubGVuZ3RoIC8gMiAtIDE7IGkgKysgKSB7XG4gICAgICBsZXQgaW50ZXIgPSBpdC5maW5kSW50ZXJzZWN0KFxuICAgICAgICBpdC5nZXRWZXJ0KCBpLCBfdmVydCApLFxuICAgICAgICBpdC5nZXRWZXJ0KCBpICsgMSwgX3ZlcnQgKSxcbiAgICAgICAgaXQuZ2V0VmVydCggX3ZlcnQubGVuZ3RoIC8gMiAtIDEsIF92ZXJ0ICksXG4gICAgICAgIGl0LmdldFZlcnQoIDAsIF92ZXJ0IClcbiAgICAgICk7XG5cbiAgICAgIGlmICggaW50ZXIgKSB7XG4gICAgICAgIHZlcnQucHVzaCggaW50ZXIueCApO1xuICAgICAgICB2ZXJ0LnB1c2goIGludGVyLnkgKTtcbiAgICAgICAgY3VlLnVuc2hpZnQoIGludGVyLnkgKTtcbiAgICAgICAgY3VlLnVuc2hpZnQoIGludGVyLnggKTtcbiAgICAgICAgc3cgPSAhc3c7XG4gICAgICB9XG5cbiAgICAgIGlmICggc3cgKSB7XG4gICAgICAgIHZlcnQucHVzaCggX3ZlcnRbIGkgKiAyICsgMiBdICk7XG4gICAgICAgIHZlcnQucHVzaCggX3ZlcnRbIGkgKiAyICsgMyBdICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdWUudW5zaGlmdCggX3ZlcnRbIGkgKiAyICsgMyBdICk7XG4gICAgICAgIGN1ZS51bnNoaWZ0KCBfdmVydFsgaSAqIDIgKyAyIF0gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJ0ID0gdmVydC5jb25jYXQoIGN1ZSApO1xuXG4gICAgcmV0dXJuIHZlcnQ7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgaXQudmVydCA9IGl0LnZlcnRPcmkuY29uY2F0KCk7XG4gICAgaXQudmVydEluZGV4ID0gMDtcbiAgICBpdC50cmkgPSBbXTtcblxuICAgIGl0LmZpbmlzaGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRWZXJ0KCBfaW5kZXgsIF9hcnJheSApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgbGV0IGFycmF5ID0gX2FycmF5IHx8IGl0LnZlcnQ7XG4gICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAvIDI7XG4gICAgbGV0IGkgPSAoIF9pbmRleCArIGxlbiApICUgbGVuO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBhcnJheVsgaSAqIDIgXSxcbiAgICAgIHk6IGFycmF5WyBpICogMiArIDEgXVxuICAgIH07XG4gIH1cblxuICBnZXRUcmkoIF9pbmRleCApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgbGV0IGkgPSBfaW5kZXg7XG4gICAgcmV0dXJuIHtcbiAgICAgIHgxOiBpdC50cmlbIGkgKiA2IF0sXG4gICAgICB5MTogaXQudHJpWyBpICogNiArIDEgXSxcbiAgICAgIHgyOiBpdC50cmlbIGkgKiA2ICsgMiBdLFxuICAgICAgeTI6IGl0LnRyaVsgaSAqIDYgKyAzIF0sXG4gICAgICB4MzogaXQudHJpWyBpICogNiArIDQgXSxcbiAgICAgIHkzOiBpdC50cmlbIGkgKiA2ICsgNSBdXG4gICAgfTtcbiAgfVxuXG4gIC8vIHJlZjogaHR0cDovL3FpaXRhLmNvbS95a29iL2l0ZW1zL2FiN2YzMGM0M2EwZWQ1MmQxNmYyXG4gIC8vIHJlZjogaHR0cDovL3d3dy5oaXJhbWluZS5jb20vcHJvZ3JhbW1pbmcvZ3JhcGhpY3MvMmRfc2VnbWVudGludGVyc2VjdGlvbi5odG1sXG4gIGZpbmRJbnRlcnNlY3QoIF9hLCBfYiwgX2MsIF9kICkge1xuICAgIGxldCBhID0gKCBfZC54IC0gX2MueCApICogKCBfYS55IC0gX2MueSApIC0gKCBfZC55IC0gX2MueSApICogKCBfYS54IC0gX2MueCApO1xuICAgIGxldCBiID0gKCBfZC54IC0gX2MueCApICogKCBfYi55IC0gX2MueSApIC0gKCBfZC55IC0gX2MueSApICogKCBfYi54IC0gX2MueCApO1xuICAgIGxldCBjID0gKCBfYi54IC0gX2EueCApICogKCBfYy55IC0gX2EueSApIC0gKCBfYi55IC0gX2EueSApICogKCBfYy54IC0gX2EueCApO1xuICAgIGxldCBkID0gKCBfYi54IC0gX2EueCApICogKCBfZC55IC0gX2EueSApIC0gKCBfYi55IC0gX2EueSApICogKCBfZC54IC0gX2EueCApO1xuXG4gICAgaWYgKCAhKCBjICogZCA8IC1FUFNJTE9OICYmIGEgKiBiIDwgLUVQU0lMT04gKSApIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIGxldCBwYSA9IGEgLyAoICggX2IueCAtIF9hLnggKSAqICggX2QueSAtIF9jLnkgKSAtICggX2IueSAtIF9hLnkgKSAqICggX2QueCAtIF9jLnggKSApO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBsZXJwKCBfYS54LCBfYi54LCBwYSApLFxuICAgICAgeTogbGVycCggX2EueSwgX2IueSwgcGEgKVxuICAgIH07XG4gIH1cblxuICByb3RhdGUoIF92LCBfciApIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogX3YueCAqIE1hdGguY29zKCBfciApIC0gX3YueSAqIE1hdGguc2luKCBfciApLFxuICAgICAgeTogX3YueCAqIE1hdGguc2luKCBfciApICsgX3YueSAqIE1hdGguY29zKCBfciApXG4gICAgfTtcbiAgfVxuXG4gIGlzQ29udmV4KCBfYSwgX2IgKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGxldCByID0gTWF0aC5hdGFuMiggX2EueSwgX2EueCApO1xuICAgIGxldCBiID0gaXQucm90YXRlKCBfYiwgLXIgKTtcbiAgICByZXR1cm4gYi55IDwgRVBTSUxPTjtcbiAgfVxuXG4gIGlzQ29udGFpbiggX2EsIF9iLCBfYywgX3AgKSB7XG4gICAgbGV0IGEgPSAoIF9iLnggLSBfYS54ICkgKiAoIF9wLnkgLSBfYi55ICkgLSAoIF9iLnkgLSBfYS55ICkgKiAoIF9wLnggLSBfYi54ICk7XG4gICAgbGV0IGIgPSAoIF9jLnggLSBfYi54ICkgKiAoIF9wLnkgLSBfYy55ICkgLSAoIF9jLnkgLSBfYi55ICkgKiAoIF9wLnggLSBfYy54ICk7XG4gICAgbGV0IGMgPSAoIF9hLnggLSBfYy54ICkgKiAoIF9wLnkgLSBfYS55ICkgLSAoIF9hLnkgLSBfYy55ICkgKiAoIF9wLnggLSBfYS54ICk7XG5cbiAgICBpZiAoIGEgPT09IDAgfHwgYiA9PT0gMCB8fCBjID09PSAwICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnNpZ24oIGEgKSA9PT0gTWF0aC5zaWduKCBiICkgJiYgTWF0aC5zaWduKCBiICkgPT09IE1hdGguc2lnbiggYyApO1xuICB9XG5cbiAgaXNWYWxpZCggX2luZGV4ICkge1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICBsZXQgdjAgPSBpdC5nZXRWZXJ0KCBfaW5kZXggLSAxICk7XG4gICAgbGV0IHYxID0gaXQuZ2V0VmVydCggX2luZGV4ICk7XG4gICAgbGV0IHYyID0gaXQuZ2V0VmVydCggX2luZGV4ICsgMSApO1xuXG4gICAgLy8gaWYgdGhlIHZlcnRleCBpcyBjb252ZXhcbiAgICBsZXQgdmEgPSB7XG4gICAgICB4OiB2MC54IC0gdjEueCxcbiAgICAgIHk6IHYwLnkgLSB2MS55XG4gICAgfTtcbiAgICBsZXQgdmIgPSB7XG4gICAgICB4OiB2Mi54IC0gdjEueCxcbiAgICAgIHk6IHYyLnkgLSB2MS55XG4gICAgfTtcbiAgICBpZiAoICFpdC5pc0NvbnZleCggdmEsIHZiICkgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaWYgbmV4dC9wcmV2IHZlcnRpY2VzIGFyZSBub3Qgb24gY3VycmVudCB2ZXJ0aWNlc1xuICAgIHtcbiAgICAgIHtcbiAgICAgICAgbGV0IHYzID0gaXQuZ2V0VmVydCggX2luZGV4IC0gMiApO1xuICAgICAgICBsZXQgdmMgPSB7XG4gICAgICAgICAgeDogdjAueCAtIHYzLngsXG4gICAgICAgICAgeTogdjAueSAtIHYzLnksXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXQuaXNPblNhbWVMaW5lKCB2MywgdjAsIHYxIClcbiAgICAgICAgICAmJiBFUFNJTE9OIDwgdmEueCAqIHZjLnggKyB2YS55ICogdmMueVxuICAgICAgICApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgICAgbGV0IHYzID0gaXQuZ2V0VmVydCggX2luZGV4ICsgMiApO1xuICAgICAgICBsZXQgdmMgPSB7XG4gICAgICAgICAgeDogdjIueCAtIHYzLngsXG4gICAgICAgICAgeTogdjIueSAtIHYzLnksXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXQuaXNPblNhbWVMaW5lKCB2MSwgdjIsIHYzIClcbiAgICAgICAgICAmJiBFUFNJTE9OIDwgdmIueCAqIHZjLnggKyB2Yi55ICogdmMueVxuICAgICAgICApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgYXJlIG5vIGludGVyc2VjdGluZyB2ZXJ0aWNlc1xuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGl0LnZlcnRPcmkubGVuZ3RoIC8gMjsgaSArKyApIHtcbiAgICAgIGlmICggaSAhPT0gX2luZGV4IC0gMSB8fCBpICE9PSBfaW5kZXggfHwgaSAhPT0gX2luZGV4ICsgMSApIHtcbiAgICAgICAgbGV0IHZwID0gaXQuZ2V0VmVydCggaSApO1xuICAgICAgICBpZiAoIGl0LmlzQ29udGFpbiggdjAsIHYxLCB2MiwgdnAgKSApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBpdC5maW5kSW50ZXJzZWN0KFxuICAgICAgICB2MCxcbiAgICAgICAgdjIsXG4gICAgICAgIGl0LmdldFZlcnQoIGksIGl0LnZlcnRPcmkgKSxcbiAgICAgICAgaXQuZ2V0VmVydCggaSArIDEsIGl0LnZlcnRPcmkgKVxuICAgICAgKSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNPblNhbWVMaW5lKCBfYSwgX2IsIF9jICkge1xuICAgIGxldCBkID0gKCBfYy54IC0gX2EueCApICogKCBfYi55IC0gX2EueSApIC0gKCBfYy55IC0gX2EueSApICogKCBfYi54IC0gX2EueCApO1xuICAgIHJldHVybiAoIE1hdGguYWJzKCBkICkgPCBFUFNJTE9OICk7XG4gIH1cblxuICBtYWtlVHJpKCBfaW5kZXggKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGxldCBhID0gaXQuZ2V0VmVydCggX2luZGV4IC0gMSApO1xuICAgIGxldCBiID0gaXQuZ2V0VmVydCggX2luZGV4ICk7XG4gICAgbGV0IGMgPSBpdC5nZXRWZXJ0KCBfaW5kZXggKyAxICk7XG4gICAgaWYgKCAhaXQuaXNPblNhbWVMaW5lKCBhLCBiLCBjICkgKSB7XG4gICAgICBpdC50cmkucHVzaCggYS54LCBhLnksIGIueCwgYi55LCBjLngsIGMueSApO1xuICAgIH1cblxuICAgIGl0LnZlcnQuc3BsaWNlKCBfaW5kZXggKiAyLCAyICk7XG4gIH1cblxuICBzdGVwKCkge1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICBpZiAoIGl0LnZlcnQubGVuZ3RoID09PSA2ICkge1xuICAgICAgaXQubWFrZVRyaSggMCApO1xuICAgICAgaXQudmVydCA9IFtdO1xuICAgICAgaXQuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB2YWxpZCA9IGl0LmlzVmFsaWQoIGl0LnZlcnRJbmRleCApO1xuXG4gICAgaWYgKCB2YWxpZCApIHtcbiAgICAgIGl0Lm1ha2VUcmkoIGl0LnZlcnRJbmRleCApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdC52ZXJ0SW5kZXggKys7XG4gICAgfVxuXG4gICAgaXQudmVydEluZGV4ID0gaXQudmVydEluZGV4ICUgKCBpdC52ZXJ0Lmxlbmd0aCAvIDIuMCApO1xuICAgIFxuICAgIGlmICggdmFsaWQgKSB7XG4gICAgICBpdC5sYXN0R29vZCA9IGl0LnZlcnRJbmRleDtcbiAgICB9IGVsc2UgaWYgKCBpdC52ZXJ0SW5kZXggPT09IGl0Lmxhc3RHb29kICkge1xuICAgICAgaXQudmVydCA9IFtdO1xuICAgICAgaXQuZmluaXNoZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRvKCBfY291bnQgKSB7XG4gICAgbGV0IGl0ID0gdGhpcztcblxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IF9jb3VudDsgaSArKyApIHtcbiAgICAgIGlmICggaXQuZmluaXNoZWQgKSB7IGJyZWFrOyB9XG4gICAgICBpdC5zdGVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmd1bGF0aW9uO1xuIiwibGV0IGxlcnAgPSAoIGEsIGIsIHggKSA9PiBhICsgKCBiIC0gYSApICogeDtcbmxldCBkaXN0ID0gKCBheCwgYXksIGJ4LCBieSApID0+IE1hdGguc3FydCggKCBieCAtIGF4ICkgKiAoIGJ4IC0gYXggKSArICggYnkgLSBheSApICogKCBieSAtIGF5ICkgKTtcblxubGV0IFZlcnRQaGFzZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCBfdmVydCApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgaXQudmVydCA9IF92ZXJ0LmNvbmNhdCgpO1xuICAgIGl0LnRvdGFsTGVuZ3RoID0gMC4wO1xuICAgIGl0Lmxlbmd0aE1hcCA9IFtdO1xuXG4gICAgaXQuY2FsY0xlbmd0aCgpO1xuICB9XG5cbiAgY2FsY0xlbmd0aCgpIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgaXQudG90YWxMZW5ndGggPSAwLjA7XG4gICAgaXQubGVuZ3RoTWFwID0gW107XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdC52ZXJ0Lmxlbmd0aCAvIDIgLSAxOyBpICsrICkge1xuICAgICAgbGV0IGwgPSBkaXN0KFxuICAgICAgICBpdC52ZXJ0WyBpICogMiArIDAgXSxcbiAgICAgICAgaXQudmVydFsgaSAqIDIgKyAxIF0sXG4gICAgICAgIGl0LnZlcnRbIGkgKiAyICsgMiBdLFxuICAgICAgICBpdC52ZXJ0WyBpICogMiArIDMgXVxuICAgICAgKTtcbiAgICAgIGl0LnRvdGFsTGVuZ3RoICs9IGw7XG4gICAgICBpdC5sZW5ndGhNYXAucHVzaCggbCApO1xuICAgIH1cblxuICAgIGxldCBsID0gZGlzdChcbiAgICAgIGl0LnZlcnRbIGl0LnZlcnQubGVuZ3RoIC0gMiBdLFxuICAgICAgaXQudmVydFsgaXQudmVydC5sZW5ndGggLSAxIF0sXG4gICAgICBpdC52ZXJ0WyAwIF0sXG4gICAgICBpdC52ZXJ0WyAxIF1cbiAgICApO1xuICAgIGl0LnRvdGFsTGVuZ3RoICs9IGw7XG4gICAgaXQubGVuZ3RoTWFwLnB1c2goIGwgKTtcbiAgfVxuXG4gIGdldFBoYXNlSW5mbyggX3BoYXNlICkge1xuICAgIGxldCBpdCA9IHRoaXM7XG5cbiAgICBsZXQgcGhhc2UgPSBfcGhhc2UgJSAxLjA7XG4gICAgbGV0IGxlbiA9IHBoYXNlICogaXQudG90YWxMZW5ndGg7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHBzdW0gPSAwLjA7XG4gICAgbGV0IHN1bSA9IDAuMDtcbiAgICB3aGlsZSAoIHN1bSA8PSBsZW4gKSB7XG4gICAgICBwc3VtID0gc3VtO1xuICAgICAgc3VtICs9IGl0Lmxlbmd0aE1hcFsgaSBdO1xuICAgICAgaSArKztcbiAgICB9XG5cbiAgICBsZXQgcCA9ICggbGVuIC0gcHN1bSApIC8gKCBzdW0gLSBwc3VtICk7XG4gICAgbGV0IHggPSBsZXJwKFxuICAgICAgaXQudmVydFsgaSAqIDIgLSAyIF0sXG4gICAgICBpdC52ZXJ0WyAoIGkgKiAyICsgMCApICUgaXQudmVydC5sZW5ndGggXSxcbiAgICAgIHBcbiAgICApO1xuICAgIGxldCB5ID0gbGVycChcbiAgICAgIGl0LnZlcnRbIGkgKiAyIC0gMSBdLFxuICAgICAgaXQudmVydFsgKCBpICogMiArIDEgKSAlIGl0LnZlcnQubGVuZ3RoIF0sIFxuICAgICAgcFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGhhc2U6IHBoYXNlLFxuICAgICAgbGVuZ3RoOiBsZW4sXG4gICAgICBpOiBpLFxuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICBwOiBwXG4gICAgfTtcbiAgfVxuXG4gIGRvKCBfYmVnaW4sIF9waGFzZSApIHtcbiAgICBsZXQgaXQgPSB0aGlzO1xuXG4gICAgbGV0IGJlZ2luID0gaXQuZ2V0UGhhc2VJbmZvKCBfYmVnaW4gKTtcbiAgICBsZXQgZW5kID0gaXQuZ2V0UGhhc2VJbmZvKCBfYmVnaW4gKyBfcGhhc2UgKTtcblxuICAgIGxldCByZXQgPSBbIGJlZ2luLngsIGJlZ2luLnkgXTtcbiAgICBpZiAoIGJlZ2luLnBoYXNlIDw9IGVuZC5waGFzZSApIHtcbiAgICAgIHJldCA9IHJldC5jb25jYXQoIGl0LnZlcnQuc2xpY2UoIGJlZ2luLmkgKiAyLCBlbmQuaSAqIDIgKSApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KCBpdC52ZXJ0LnNsaWNlKCBiZWdpbi5pICogMiApICk7XG4gICAgICByZXQgPSByZXQuY29uY2F0KCBpdC52ZXJ0LnNsaWNlKCAwLCBlbmQuaSAqIDIgKSApO1xuICAgIH1cbiAgICByZXQucHVzaCggZW5kLnggKTtcbiAgICByZXQucHVzaCggZW5kLnkgKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnRQaGFzZXI7Il19
