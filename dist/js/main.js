webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var carousel = {
    init: function init() {
        this.carouElem = document.getElementById('carousel-wrapper');
        this.carouPrev = document.getElementById('carousel-prev-button');
        this.carouNext = document.getElementById('carousel-next-button');
        this.bindEvents();
    },

    bindEvents: function bindEvents() {
        document.onmousemove = this.carouselAutoslide.bind(this);
        window.onresize = this.carouselToSlider.bind(this);
        this.carouPrev.onclick = this.prevButtonAction.bind(this);
        this.carouNext.onclick = this.nextButtonAction.bind(this);
    },

    carouselAutoslide: function carouselAutoslide() {
        this.clientWidth = this.carouElem.clientWidth;

        if (this.clientWidth > 800) {

            this.carouElem.onmousemove = function (e) {
                this.mousePosition = e.pageX;
                this.scrollWidth = this.carouElem.scrollWidth;
                this.carouElem.scrollLeft = (this.scrollWidth - this.clientWidth) / (this.clientWidth / this.mousePosition);
            }.bind(this);
        }
    },

    carouselToSlider: function carouselToSlider() {
        if (window.innerWidth < 816) {
            this.carouElem.onmousemove = "";
            this.carouElem.scrollLeft = 0;
        }
    },

    prevButtonAction: function prevButtonAction() {
        this.carouElem.scrollLeft -= 240;
    },

    nextButtonAction: function nextButtonAction() {
        this.carouElem.scrollLeft += 240;
    }

};

exports.default = carousel;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _carousel = __webpack_require__(0);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carousel2.default.init();

/***/ })
],[2]);
//# sourceMappingURL=main.js.map