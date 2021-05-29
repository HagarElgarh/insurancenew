(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ITI 3Month\pharm\s\myapp\src\main.ts */"zUnb");


/***/ }),

/***/ "1Dne":
/*!******************************************!*\
  !*** ./src/app/services/lang.service.ts ***!
  \******************************************/
/*! exports provided: LangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class LangService {
    constructor(translate) {
        this.translate = translate;
    }
    setLanguage(lang) {
        // alert("set"+lang);
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        localStorage.setItem('lang', lang.toLowerCase());
    }
    hasLanguage() {
        return (localStorage.getItem('lang') != null
        // && 
        // localStorage.getItem('lang').length > 0
        );
    }
    getLanguage() {
        const lang = localStorage.getItem('lang');
        if (lang == '' || lang == null || lang == 'undefined') {
            return this.getDefaultLanguage();
        }
        console.log('language ' + lang);
        return lang;
    }
    getDefaultLanguage() {
        return 'en';
    }
}
LangService.ɵfac = function LangService_Factory(t) { return new (t || LangService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
LangService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LangService, factory: LangService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "40xS":
/*!***************************************************************!*\
  !*** ./src/app/Components/login/aboutus/aboutus.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/lang.service */ "1Dne");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class AboutusComponent {
    constructor(languageService, translate) {
        this.languageService = languageService;
        this.translate = translate;
        this.translate.use(languageService.getLanguage());
    }
    ngOnInit() {
    }
}
AboutusComponent.ɵfac = function AboutusComponent_Factory(t) { return new (t || AboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 41, vars: 27, consts: [[1, "all"], [1, "firstPart"], [1, "cover", "mt-4"], [1, "text", "text-center"], [1, "book"], [1, "about", "container"], [1, "font-weight-bold", "offer"], [1, "font-weight-bold", "mt-2", "offer"], [1, "namm"], [1, "mission"], [1, "text", "text-center", "pt-5"], [1, "font-weight-bold", "offer", "empower", "mt-3", "mb-2"], [1, "discover", "travel", "mt-4"]], template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "about.welcome"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "about.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, "about.details"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, "about.comptitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 17, "about.compdetail"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 19, "about.infotitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 21, "about.infodetails"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 23, "about.condetails"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 25, "about.relax"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".firstPart[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  text-align: center;\n  align-items: center;\n}\n\n.cover[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover;\n  background-image: url('wifi.jpg');\n  height: 460px;\n}\n\n.cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  height: 340px;\n  flex-direction: column;\n}\n\n.cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3em;\n  font-weight: 500;\n}\n\n.cover[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  color: white;\n  font-size: 3.7em;\n}\n\n.cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 3em;\n}\n\n.cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 3em;\n}\n\n.cover[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  width: 8em;\n}\n\n.cover[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n  color: white;\n  font-size: 1.5em;\n}\n\n.about[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: -19px;\n  line-height: 2.5em;\n  height: 80%;\n}\n\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  text-align: center;\n  margin-top: 3em;\n  margin-bottom: 1em;\n  color: #1d0ea1;\n  padding-top: 1em;\n}\n\n.about[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f4b4b;\n  font-size: 1.1em;\n}\n\n.about[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f44f1b;\n  text-decoration: none;\n}\n\n.offer[_ngcontent-%COMP%] {\n  font-size: 150%;\n  text-align: center;\n  width: 80%;\n  margin: auto;\n}\n\n.discover[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.2em;\n  text-align: center;\n  width: 80%;\n  margin: auto;\n  font-weight: 600;\n}\n\n.namm[_ngcontent-%COMP%] {\n  font-size: 160%;\n  color: #321abb;\n}\n\n.mission[_ngcontent-%COMP%] {\n  background-image: url('mission.png');\n  height: 340px;\n  background-size: cover;\n  line-height: 2em;\n}\n\n.mission[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.mission[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #321abb;\n  font-size: 2.2em;\n}\n\n.mission[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3.7em;\n}\n\n.empower[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n}\n\n.travel[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: auto;\n}\n\n@media only screen and (max-width: 768px) {\n  .about[_ngcontent-%COMP%] {\n    height: 80%;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n\n@media only screen and (max-width: 479px) {\n  .about[_ngcontent-%COMP%] {\n    width: 95%;\n    line-height: 2em;\n    height: 80%;\n  }\n\n  .about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    margin-top: 2em;\n    margin-bottom: 1em;\n    font-weight: bold;\n  }\n\n  .about[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #4f4b4b;\n    font-size: 1.1em;\n  }\n\n  .offer[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n\n  .discover[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .mission[_ngcontent-%COMP%] {\n    background-image: url('mission.png');\n    height: 340px;\n    background-size: cover;\n  }\n\n  .mission[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .mission[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    color: #321abb;\n    font-size: 2.2em;\n  }\n\n  .mission[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 3.7em;\n  }\n\n  .empower[_ngcontent-%COMP%] {\n    width: 60%;\n    margin: auto;\n  }\n}\n\n.all[_ngcontent-%COMP%]:lang(ar) {\n  direction: rtl;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDSixtQkFBQTtBQUNBOztBQVNFO0VBQ00sMkJBQUE7RUFDQSxzQkFBQTtFQUNKLGlDQUFBO0VBQ0EsYUFBQTtBQU5KOztBQVFFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFPRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFNRTtFQUNJLGlCQUFBO0VBQ0YsWUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBS0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUlFO0VBQ0UsV0FBQTtBQURKOztBQUdFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUlFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBR047O0FBQ0U7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBR0o7O0FBREU7RUFDSSxnQkFBQTtFQUNGLGNBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFPSjs7QUFKRTtFQUNFO0lBQ0UsV0FBQTtFQU9KOztFQUxFO0lBQ0ksZUFBQTtFQVFOO0FBQ0Y7O0FBTEU7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUFPSjs7RUFMRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFRSjs7RUFORTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQVNKOztFQVBFO0lBQ0UsZUFBQTtFQVVKOztFQVJFO0lBQ0UsY0FBQTtFQVdKOztFQVBFO0lBQ0Usb0NBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFVSjs7RUFSRTtJQUNFLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFXSjs7RUFURTtJQUNJLGdCQUFBO0lBQ0YsY0FBQTtJQUNBLGdCQUFBO0VBWUo7O0VBVkU7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUFhSjs7RUFYRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VBY0o7QUFDRjs7QUFaRTtFQUNFLGNBQUE7QUFjSiIsImZpbGUiOiJhYm91dHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0UGFydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAvLyBTdGFydCBjb3ZlclxyXG4vLyAgIGhlYWRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8uLi9hc3NldHMvd2lmaS93aWZpLmpwZycpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICAgIGhlaWdodDogNDYwcHg7XHJcbi8vICAgfVxyXG4gIC5jb3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL0Fib3V0L3dpZmkuanBnKTtcclxuICAgIGhlaWdodDogNDYwcHg7XHJcbiAgfVxyXG4gIC5jb3ZlciAudGV4dCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5jb3ZlciBoMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5jb3ZlciAuYm9vayB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzLjdlbTtcclxuICB9XHJcbiAgLmNvdmVyIC5zZWFyY2gge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gIH1cclxuICAuY292ZXIgLnNlYXJjaCBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICB9XHJcbiAgLmNvdmVyIC5pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XHJcbiAgICB3aWR0aDogOGVtO1xyXG4gIH1cclxuICAuY292ZXIgLmljb24gaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICAvL0VuZCBjb3ZlclxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvL1N0YXJ0IGFib3V0XHJcbiAgLmFib3V0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTlweDtcclxuICAgIC8vIG1hcmdpbjogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICB9XHJcbiAgLmFib3V0IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBjb2xvcjogIzFkMGVhMTtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgfVxyXG4gIC5hYm91dCAuaG93IGEge1xyXG4gICAgY29sb3I6ICM0ZjRiNGI7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gIH1cclxuICAuYWJvdXQgLmhvdyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjQ0ZjFiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAub2ZmZXIge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmRpc2NvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5uYW1te1xyXG4gICAgICBmb250LXNpemU6IDE2MCU7XHJcbiAgICAgIGNvbG9yOiByZ2IoNTAsIDI2LCAxODcpO1xyXG4gIH1cclxuICAvL0VuZCBhYm91dFxyXG4gIC8vU3RhcnQgbWlzc2lvblxyXG4gIC5taXNzaW9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvQWJvdXQvbWlzc2lvbi5wbmcpO1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIH1cclxuICAubWlzc2lvbiAudGV4dCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLm1pc3Npb24gaDEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYig1MCwgMjYsIDE4Nyk7XHJcbiAgICBmb250LXNpemU6IDIuMmVtO1xyXG4gIH1cclxuICAubWlzc2lvbiAuYm9vayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMuN2VtO1xyXG4gIH1cclxuICAuZW1wb3dlciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAudHJhdmVsIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC8vRW5kIG1pc3Npb25cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYWJvdXQge1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgIH1cclxuICAgIC5vZmZlciB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwMCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xyXG4gICAgLmFib3V0IHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgaDEge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgLmhvdyBhIHtcclxuICAgICAgY29sb3I6ICM0ZjRiNGI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICB9XHJcbiAgICAub2ZmZXIge1xyXG4gICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGlzY292ZXIge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIC8vRW5kIGFib3V0XHJcbiAgICAvL1N0YXJ0IG1pc3Npb25cclxuICAgIC5taXNzaW9uIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9BYm91dC9taXNzaW9uLnBuZyk7XHJcbiAgICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAubWlzc2lvbiAudGV4dCB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLm1pc3Npb24gaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNTAsIDI2LCAxODcpO1xyXG4gICAgICBmb250LXNpemU6IDIuMmVtO1xyXG4gICAgfVxyXG4gICAgLm1pc3Npb24gLmJvb2sge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMy43ZW07XHJcbiAgICB9XHJcbiAgICAuZW1wb3dlciB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLmFsbDpsYW5nKGFyKSB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.scss']
            }]
    }], function () { return [{ type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "6NBV":
/*!*******************************************************************!*\
  !*** ./src/app/Components/login/not-found/not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 16, vars: 0, consts: [[1, "container-fluid"], [1, "row", "page-titles"], [1, "col-md-5", "align-self-center"], [1, "text-themecolor"], [1, "col-md-7", "align-self-center", "text-right"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"], ["type", "button", 1, "btn", "btn-info", "d-none", "d-lg-block", "m-l-15"], [1, "fa", "fa-plus-circle"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Basic Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Create New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BPly":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/login/full-insurance/full-insurance.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FullInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullInsuranceComponent", function() { return FullInsuranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_add_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/add-insurance.service */ "FWoX");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/lang.service */ "1Dne");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print */ "m1XX");













function FullInsuranceComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insurace.info"));
} }
function FullInsuranceComponent_div_21_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullInsuranceComponent_div_21_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullInsuranceComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullInsuranceComponent_div_21_small_2_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullInsuranceComponent_div_21_small_3_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.firstFormGroup.controls["Name"].errors == null ? null : ctx_r2.firstFormGroup.controls["Name"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.firstFormGroup.controls["Name"].errors == null ? null : ctx_r2.firstFormGroup.controls["Name"].errors.minlength);
} }
function FullInsuranceComponent_div_27_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullInsuranceComponent_div_27_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "example@example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullInsuranceComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullInsuranceComponent_div_27_small_2_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullInsuranceComponent_div_27_small_3_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.firstFormGroup.controls["Email"].errors == null ? null : ctx_r3.firstFormGroup.controls["Email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.firstFormGroup.controls["Email"].hasError("email"));
} }
function FullInsuranceComponent_div_34_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullInsuranceComponent_div_34_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullInsuranceComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullInsuranceComponent_div_34_small_2_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullInsuranceComponent_div_34_small_3_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.firstFormGroup.controls["Mobile"].errors == null ? null : ctx_r4.firstFormGroup.controls["Mobile"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.firstFormGroup.controls["Mobile"].errors == null ? null : ctx_r4.firstFormGroup.controls["Mobile"].errors.minlength);
} }
function FullInsuranceComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insurace.add"));
} }
function FullInsuranceComponent_option_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.no);
} }
function FullInsuranceComponent_div_448_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "insurace.child"));
} }
function FullInsuranceComponent_div_449_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "insurace.child"));
} }
function FullInsuranceComponent_ng_template_510_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insuracedoc.title"));
} }
function FullInsuranceComponent_ng_template_579_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insuracedoc.headform"));
} }
function FullInsuranceComponent_ng_template_665_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "company.title"));
} }
function FullInsuranceComponent_div_673_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_div_673_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const c_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addInfo(c_r21.NoDocument, c_r21.Icon, c_r21.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-header ", c_r21.ColorBck, " card-header-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r21.Icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, c_r21.NoDocument, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "company.btnChoose"), " ");
} }
function FullInsuranceComponent_ng_template_678_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "bill.top"));
} }
class FullInsuranceComponent {
    constructor(_formBuilder, dialog, insSer, languageService, translate) {
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.insSer = insSer;
        this.languageService = languageService;
        this.translate = translate;
        this.isEditable = false;
        this.dateOfBirth = '';
        this.noyear = '';
        this.icp1 = '';
        this.price = 0;
        this.price1 = 0;
        this.price2 = 0;
        this.price3 = 0;
        this.price4 = 0;
        this.price5 = 0;
        this.price1p = 0;
        this.price2p = 0;
        this.price3p = 0;
        this.price4p = 0;
        this.price5p = 0;
        this.price1y = 0;
        this.price2y = 0;
        this.price3y = 0;
        this.price4y = 0;
        this.price5y = 0;
        this.yearof = 0;
        this.cardsBool = true;
        this.statuesshow = '';
        this.Cards = [];
        this.listadd = { Section: '' };
        this.listaddthird = {};
        this.listaddfirst = {};
        this.listaddforth = {};
        this.today = Date.now();
        this.random = Math.floor((Math.random() * 100000000) + 1);
        this.cities = [];
        this.selectedCity3 = '';
        this.selectedCountry = '';
        this.countries = [];
        this.groupedCities = [];
        this.items = [];
        this.itemm = '';
        this.yeararr = [];
        this.compprice = '';
        this.item = { title: '', Icon: '', NoDocument: '' };
        this.showAge = 0;
        this.showAge2 = 0;
        this.translate.use(languageService.getLanguage());
        this.firstFormGroup = this._formBuilder.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](localStorage.getItem("currentUserEmail"), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(50)]),
            Mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11)]),
        });
        this.secondFormGroup = this._formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Booked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            OldPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Review: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Section: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            TourDiscount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            noChiled: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.thirdFormGroup = this._formBuilder.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            Mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.forthFormGroup = this._formBuilder.group({
            calender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.yeararr = [
            { no: 1970 },
            { no: 1971 },
            { no: 1972 },
            { no: 1973 },
            { no: 1974 },
            { no: 1975 },
            { no: 1976 },
            { no: 1977 },
            { no: 1978 },
            { no: 1979 },
            { no: 1980 },
            { no: 1981 },
            { no: 1982 },
            { no: 1983 },
            { no: 1984 },
            { no: 1985 },
            { no: 1986 },
            { no: 1987 },
            { no: 1988 },
            { no: 1989 },
            { no: 1990 },
            { no: 1991 },
            { no: 1992 },
            { no: 1993 },
            { no: 1994 },
            { no: 1995 },
            { no: 1996 },
            { no: 1997 },
            { no: 1998 },
            { no: 1999 },
            { no: 2001 },
            { no: 2002 },
            { no: 2003 },
            { no: 2004 },
            { no: 2005 },
            { no: 2006 },
            { no: 2007 },
            { no: 2008 },
            { no: 2009 },
            { no: 2010 },
            { no: 2011 },
            { no: 2012 },
            { no: 2013 },
            { no: 2014 },
            { no: 2015 },
            { no: 2016 },
            { no: 2017 },
            { no: 2018 },
            { no: 2019 },
            { no: 2020 },
            { no: 2021 },
        ];
    }
    //  ngOnChanges(changes: SimpleChanges): void {
    //   // this.setLanguage();
    //   throw new Error('Method not implemented.');
    //   // this.setLanguage();
    // }
    ngOnInit() {
    }
    // openDialog() {
    //   const dialogRef = this.dialog.open(InfoDialogComponent,{
    //     // width:'250px'
    //   });
    // }
    firstNext() {
        console.log(this.firstFormGroup.value);
        this.listaddfirst = this.firstFormGroup.value;
    }
    scondform() {
        console.log(this.secondFormGroup.value);
        this.listadd = this.secondFormGroup.value;
    }
    thirdform() {
        console.log(this.dateOfBirth);
        this.datee();
        this.Cards = [
            {
                title: "شركة ابن الهيثم ",
                NoDocument: this.price5,
                Icon: "../../../../assets/ibn.jpg",
                ColorBck: "card-header-primary"
            },
            {
                title: "شركة الانماء طوكيو",
                NoDocument: this.price1,
                Icon: "../../../../assets/ali.jpg",
                ColorBck: "card-header-warning"
            },
            {
                title: "شركة المجموعة المتحدة",
                NoDocument: this.price2,
                Icon: "../../../../assets/612770365.jpg",
                ColorBck: "card-header-success"
            },
            {
                title: "شركة المتوسط والخليج",
                NoDocument: this.price3,
                Icon: "../../../../assets/mid.png",
                ColorBck: "card-header-danger"
            },
            {
                title: "الدرع العربي للتأمين",
                NoDocument: this.price4,
                Icon: "../../../../assets/dre.png",
                ColorBck: "card-header-info"
            },
        ];
    }
    forthform() {
        console.log(this.thirdFormGroup.value);
        this.listaddthird = this.thirdFormGroup.value;
    }
    goBack(stepper) {
        stepper.previous();
    }
    add() {
        this.listadd = this.secondFormGroup.value;
        // console.log(this.listadd.Section)
        // this.price=this.listadd.Section;
    }
    addInfo(comapanyPrice, companyImage, companyName) {
        console.log(this.item.carType);
        this.compprice = comapanyPrice.toString();
        this.item.Icon = companyImage;
        this.item.title = companyName;
        this.item.NoDocument = this.compprice;
        this.item.Email = this.listaddfirst.Email;
        this.item.Name = this.listaddfirst.Name;
        this.item.Mobile = this.listaddfirst.Mobile;
        console.log(this.listadd);
        this.item.serialNumber = this.listadd.id;
        this.item.noshase = this.listadd.Booked;
        this.item.type = this.listadd.Date;
        this.item.year = this.listadd.Image;
        this.item.worktype = this.listadd.OldPrice;
        this.item.staues = this.listadd.Price;
        this.item.carType = this.listadd.Rate;
        this.item.carColor = this.listadd.Review;
        this.item.price = this.listadd.Section;
        this.item.carTypeOtam = this.listadd.Title;
        this.item.licenceType = this.listadd.TourDiscount;
        this.item.noChiled = this.listadd.noChiled;
        this.item.gender = this.listadd.gender;
        this.item.buldingNo = this.listaddthird.Name;
        this.item.elkadaa = this.listaddthird.Email;
        this.item.elmohafza = this.listaddthird.Mobile;
        this.item.date = this.dateOfBirth;
        this.item.currentdate = this.today.toString();
        this.item.insurancetype = "تأمين شامل";
        console.log(this.item);
        this.insSer.addInsurance(this.item);
    }
    printPage() {
        window.print();
    }
    datee() {
        this.listaddforth = this.forthFormGroup.value;
        const convertAge = new Date(this.dateOfBirth);
        const timeDiff = Math.abs(convertAge.getTime());
        this.showAge2 = this.showAge;
        console.log(this.listaddforth.calender);
        if (this.listaddforth.calender == 'شهر') {
            console.log('1');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 1)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.05;
            this.price2 = this.price * 0.03;
            this.price3 = this.price * 0.04;
            this.price4 = this.price * 0.06;
            this.price5 = this.price * 0.03;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'شهرين') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 2)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.1;
            this.price2 = this.price * 0.06;
            this.price3 = this.price * 0.08;
            this.price4 = this.price * 0.12;
            this.price5 = this.price * 0.06;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'ثلاث شهور') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 3)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.13;
            this.price2 = this.price * 0.09;
            this.price3 = this.price * 0.11;
            this.price4 = this.price * 0.13;
            this.price5 = this.price * 0.08;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'اربع شهور') {
            console.log('4');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 4)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.18;
            this.price2 = this.price * 0.12;
            this.price3 = this.price * 0.15;
            this.price4 = this.price * 0.19;
            this.price5 = this.price * 0.11;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'خمس شهور') {
            console.log('خمس');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 5)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.21;
            this.price2 = this.price * 0.15;
            this.price3 = this.price * 0.18;
            this.price4 = this.price * 0.20;
            this.price5 = this.price * 0.13;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'ست شهور') {
            console.log('6');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 6)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.26;
            this.price2 = this.price * 0.18;
            this.price3 = this.price * 0.22;
            this.price4 = this.price * 0.26;
            this.price5 = this.price * 0.16;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'سبع شهور') {
            console.log('7');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 7)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.29;
            this.price2 = this.price * 0.21;
            this.price3 = this.price * 0.24;
            this.price4 = this.price * 0.27;
            this.price5 = this.price * 0.18;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'ثمان شهور') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 8)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.34;
            this.price2 = this.price * 0.24;
            this.price3 = this.price * 0.28;
            this.price4 = this.price * 0.33;
            this.price5 = this.price * 0.21;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'تسعة شهور') {
            console.log('9');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 9)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.37;
            this.price2 = this.price * 0.27;
            this.price3 = this.price * 0.30;
            this.price4 = this.price * 0.34;
            this.price5 = this.price * 0.23;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'عشرة شهور') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 10)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.42;
            this.price2 = this.price * 0.29;
            this.price3 = this.price * 0.34;
            this.price4 = this.price * 0.40;
            this.price5 = this.price * 0.26;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'احدى عشر شهر') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 11)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.45;
            this.price2 = this.price * 0.32;
            this.price3 = this.price * 0.37;
            this.price4 = this.price * 0.41;
            this.price5 = this.price * 0.28;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'سنة') {
            console.log('4yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 12)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.50;
            this.price2 = this.price * 0.35;
            this.price3 = this.price * 0.41;
            this.price4 = this.price * 0.47;
            this.price5 = this.price * 0.30;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '1 month') {
            console.log('1');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 1)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.05;
            this.price2 = this.price * 0.03;
            this.price3 = this.price * 0.04;
            this.price4 = this.price * 0.06;
            this.price5 = this.price * 0.03;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '2 month') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 2)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.1;
            this.price2 = this.price * 0.06;
            this.price3 = this.price * 0.08;
            this.price4 = this.price * 0.12;
            this.price5 = this.price * 0.06;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '3 month') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 3)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.13;
            this.price2 = this.price * 0.09;
            this.price3 = this.price * 0.11;
            this.price4 = this.price * 0.13;
            this.price5 = this.price * 0.08;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '4 month') {
            console.log('4');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 4)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.18;
            this.price2 = this.price * 0.12;
            this.price3 = this.price * 0.15;
            this.price4 = this.price * 0.19;
            this.price5 = this.price * 0.11;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '5 month') {
            console.log('خمس');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 5)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.21;
            this.price2 = this.price * 0.15;
            this.price3 = this.price * 0.18;
            this.price4 = this.price * 0.20;
            this.price5 = this.price * 0.13;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '6 month') {
            console.log('6');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 6)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.26;
            this.price2 = this.price * 0.18;
            this.price3 = this.price * 0.22;
            this.price4 = this.price * 0.26;
            this.price5 = this.price * 0.16;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '7 month') {
            console.log('7');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 7)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.29;
            this.price2 = this.price * 0.21;
            this.price3 = this.price * 0.24;
            this.price4 = this.price * 0.27;
            this.price5 = this.price * 0.18;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '8 month') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 8)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.34;
            this.price2 = this.price * 0.24;
            this.price3 = this.price * 0.28;
            this.price4 = this.price * 0.33;
            this.price5 = this.price * 0.21;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '9 month') {
            console.log('9');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 9)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.37;
            this.price2 = this.price * 0.27;
            this.price3 = this.price * 0.30;
            this.price4 = this.price * 0.34;
            this.price5 = this.price * 0.23;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '10 month') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 10)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.42;
            this.price2 = this.price * 0.29;
            this.price3 = this.price * 0.34;
            this.price4 = this.price * 0.40;
            this.price5 = this.price * 0.26;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '11 month') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 11)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.45;
            this.price2 = this.price * 0.32;
            this.price3 = this.price * 0.37;
            this.price4 = this.price * 0.41;
            this.price5 = this.price * 0.28;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'year') {
            console.log('4yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 12)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.50;
            this.price2 = this.price * 0.35;
            this.price3 = this.price * 0.41;
            this.price4 = this.price * 0.47;
            this.price5 = this.price * 0.30;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        if (this.price <= 50000) {
            console.log('5000<');
            console.log(this.yearof);
            console.log(this.price);
            // this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
            // this.showAge2=this.showAge
            //     this.price1= this.price*0.01
            //     this.price2=this.price*0.02
            //    this.price3=this.price*0.02
            //    this.price4=this.price*0.01
            //  this.price5=this.price*0.01
            this.price1 = this.price1;
            this.price2 = this.price2;
            this.price3 = this.price3;
            this.price4 = this.price4;
            this.price5 = this.price5;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.price >= 50000) {
            console.log('5000>');
            //  this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
            //  this.showAge2=this.showAge
            this.price1p = this.price * 0.01;
            this.price2p = this.price * 0.02;
            this.price3p = this.price * 0.02;
            this.price4p = this.price * 0.01;
            this.price5p = this.price * 0.01;
            this.price1 = this.price1 + this.price1p;
            this.price2 = this.price2 + this.price2p;
            this.price3 = this.price3 + this.price3p;
            this.price4 = this.price4 + this.price4p;
            this.price5 = this.price5 + this.price5p;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        if (this.yearof <= 2000) {
            console.log('year2000<');
            this.price1y = this.price * 0.01;
            this.price2y = this.price * 0.01;
            this.price3y = this.price * 0.01;
            this.price4y = this.price * 0.01;
            this.price5y = this.price * 0.01;
            this.price1 = this.price1 + this.price1y;
            this.price2 = this.price2 + this.price2y;
            this.price3 = this.price3 + this.price3y;
            this.price4 = this.price4 + this.price4y;
            this.price5 = this.price5 + this.price5y;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.yearof > 2000 && this.yearof <= 2018) {
            console.log('year2000>2018');
            //     this.price1y= this.price*0.01
            //     this.price2y=this.price*0.01
            //    this.price3y=this.price*0.01
            //    this.price4y=this.price*0.01
            //  this.price5y=this.price*0.01
            this.price1 = this.price1;
            this.price2 = this.price2;
            this.price3 = this.price3;
            this.price4 = this.price4;
            this.price5 = this.price5;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.yearof < 2022 && this.yearof >= 2019) {
            this.price1y = this.price * 0.02;
            this.price2y = this.price * 0.03;
            this.price3y = this.price * 0.03;
            this.price4y = this.price * 0.03;
            this.price5y = this.price * 0.02;
            this.price1 = this.price1 + this.price1y;
            this.price2 = this.price2 + this.price2y;
            this.price3 = this.price3 + this.price3y;
            this.price4 = this.price4 + this.price4y;
            this.price5 = this.price5 + this.price5y;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
    }
    resetform(gg) {
        gg.reset();
    }
}
FullInsuranceComponent.ɵfac = function FullInsuranceComponent_Factory(t) { return new (t || FullInsuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_add_insurance_service__WEBPACK_IMPORTED_MODULE_3__["AddInsuranceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
FullInsuranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullInsuranceComponent, selectors: [["app-full-insurance"]], decls: 775, vars: 306, consts: [[1, "mt-5", "m-5", "divheader"], ["linear", "", "dir", "rtl", 1, "cc"], ["stepper", ""], [3, "stepControl"], ["dir", "rtl", 1, "divInput", 3, "formGroup"], ["matStepLabel", ""], [1, "flexheader"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["for", "validationServer01", 1, "font"], ["formControlName", "Name", "type", "text", "id", "validationServer01", "value", "Mark", "required", "", 1, "form-control"], [4, "ngIf"], ["autofocus", "", "formControlName", "Email", "type", "text", "id", "validationServer01", "value", "Name", 1, "form-control"], [1, "col-md-4", "mb-3"], ["formControlName", "Mobile", "type", "number", "id", "validationServer01", "value", "Mark", "required", "", 1, "form-control"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-lg", "btn-info", 3, "click"], ["mat-button", "", 1, "btn", "btn-lg", "btn-primary", "mr-4", 3, "click"], [1, "col-md-3", "mb-3", "form-group"], ["for", "TourID", 1, "font"], ["type", "text", "formControlName", "id", 1, "form-control"], ["for", "Title", 1, "font"], ["formControlName", "Title", "id", "Title", 1, "form-control"], ["value", "", 2, "display", "none"], ["for", "Date", 1, "font"], ["formControlName", "Date", "id", "Date", 1, "form-control"], ["for", "TourDistance", 1, "font"], ["type", "number", "id", "TourDistance", "formControlName", "Section", 1, "form-control", "inputprice", 3, "ngModel", "ngModelChange"], ["for", "Image", 1, "font"], ["title", "Select your surfboard", "formControlName", "Image", "id", "Rate", 1, "form-control", "selectpicker", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["for", "Rate", 1, "font"], ["matNativeControl", "", "formControlName", "Rate", 1, "form-control", "selectpicker"], ["label", "TOYOYA"], ["label", "Ford", 1, "ss"], ["label", "BMW"], ["label", "Audi", 1, "ss"], ["label", "Volkswagen"], ["label", "Mercedes ", 1, "ss"], ["label", "NISSAN "], ["label", " Mazda  ", 1, "ss"], ["label", "VOLVO"], ["label", "Mitsubishi", 1, "ss"], ["label", "Peugeot"], ["label", " KIA", 1, "ss"], ["label", " Lexus"], ["label", " Chevrolet", 1, "ss"], ["label", " GMC"], ["label", " Hyundai ", 1, "ss"], ["for", "Review", 1, "font"], ["type", "text", "id", "Review", "formControlName", "Review", 1, "form-control"], ["for", "TourBooked", 1, "font"], ["type", "text", "formControlName", "Booked", 1, "form-control"], ["for", "Price", 1, "font"], ["formControlName", "Price", "name", "sss", "id", "Price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-3 mb-3 form-group", 4, "ngIf"], ["for", "TourOldPrice", 1, "font"], ["formControlName", "OldPrice", "id", "OldPrice", 1, "form-control"], ["for", "gender", 1, "font"], ["formControlName", "gender", "id", "gender", 1, "form-control"], ["for", "TourDiscount", 1, "font"], ["formControlName", "TourDiscount", "id", "TourDiscount", 1, "form-control"], [1, "w-50"], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-lg", "btn-danger", "mr-3"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-lg", "btn-info", "mr-3", 3, "click"], ["class", "ng-template", "matStepLabel", ""], ["dir", "rtl", 1, "divInput2", 3, "formGroup"], [1, "flexdiv2"], [1, "font"], ["type", "date", "formControlName", "date", "name", "something", 1, "form-control", "w-25", 3, "ngModel", "ngModelChange"], ["formControlName", "calender", "id", "Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-lg", "btn-danger", "mr-4"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-lg", "btn-info", "mr-4", 3, "click"], ["formControlName", "Email", "type", "text", "id", "validationServer01", "value", "Mark", "required", "", 1, "form-control"], ["formControlName", "Mobile", "id", "Date", 1, "form-control"], [1, "content"], [1, "container-fluid"], [1, "row"], ["class", "col-lg-3 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-lg", "btn-danger"], ["dir", "rtl", 1, "divInput"], [1, "bckfont"], [1, "titleinsurance"], ["id", "print-section", 1, ""], [1, "flexdiv"], [1, "boldfont"], [1, "mr-5"], ["printSectionId", "print-section", "ngxPrint", "", 1, "btn", "btn-lg", "btn-success"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], ["formControlName", "noChiled", "id", "OldPrice", 1, "form-control"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "card", "card-stats"], [1, "card-icon"], [3, "src"], [1, "card-category"], [1, "card-title"], [1, "card-footer"], [1, "stats"], ["mat-button", "", "matStepperNext", "", 1, "ml-4", "btn", "btn-lg", "btn-success", 3, "click"]], template: function FullInsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FullInsuranceComponent_ng_template_9_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FullInsuranceComponent_div_21_Template, 5, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FullInsuranceComponent_div_27_Template, 6, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FullInsuranceComponent_div_34_Template, 6, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_36_listener() { return ctx.firstNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_38_listener() { return ctx.resetform(ctx.firstFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FullInsuranceComponent_ng_template_42_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullInsuranceComponent_Template_input_ngModelChange_88_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullInsuranceComponent_Template_select_ngModelChange_94_listener($event) { return ctx.yearof = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, FullInsuranceComponent_option_96_Template, 2, 1, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "optgroup", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "TOYOYA Avalon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "TOYOYA Camry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "TOYOYA Prius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "TOYOYA Yaris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "TOYOYA 86");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "TOYOYA Sienna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "TOYOYA C-HR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "TOYOYA RAV4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "TOYOYA Highlander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "TOYOYA 4Runner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "TOYOYA Tacoma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "TOYOYA Tundra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "optgroup", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Ford Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Ford Bronco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Ford Ecosport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Ford Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Ford Endeavo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Ford Escape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Ford Everest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Ford Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Ford F-450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "optgroup", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "BMW 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "BMW 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "BMW X2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "BMW X3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "BMW X4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "BMW X5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "BMW 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "BMW Z4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "BMW 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "BMW 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "BMW X6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "BMW X7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "BMW 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "BMW 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "BMW X1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "optgroup", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Audi A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Audi A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Audi A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Audi A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Audi S2 Coup\u00E9 B3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Audi S4 C4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Audi S2 Avant B4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Audi S2 Sedan B4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Audi Avant RS 2 P1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Audi S8 D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Audi A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Audi A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Audi A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "optgroup", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Volkswagen Cross Sport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Volkswagen Tiguan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Volkswagen Jetta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Volkswagen Jetta GLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Volkswagen Passat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Volkswagen Arteon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "optgroup", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Mercedes Vito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Mercedes C190 AMG GT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Mercedes X253 GLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Mercedes W213 E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Mercedes BR470 X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Mercedes W177 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Mercedes C257 CLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Mercedes Mercedes-AMG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Mercedes W463 G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Mercedes EQC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Mercedes W167 GLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Mercedes W247 B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Mercedes C118 CLA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Mercedes X247 GLB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Mercedes X167 GLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "optgroup", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "NISSAN 370Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "NISSAN Altima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "NISSAN Armada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "NISSAN GT-R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "NISSAN Kicks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "NISSAN Maxima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "NISSAN Murano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "NISSAN NV Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "optgroup", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Mazda MX-5 RF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Mazda 2. Hatchback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Mazda 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Mazda CX-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Mazda CX-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "optgroup", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "VOLVO S90/V90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Volvo C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "VOLVO XC40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "VOLVO C70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "VOLVO XC90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "VOLVO C30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "optgroup", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Mitsubishi CROSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Mitsubishi XPANDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Mitsubishi OUTLANDER PHEV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Mitsubishi OUTLANDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Mitsubishi TRITON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Mitsubishi ASX/OUTLANDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Mitsubishi PAJERO SPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "optgroup", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Peugeot 508");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Peugeot 2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Peugeot 3008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Peugeot Boxer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Peugeot Expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Peugeot Pars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Peugeot 5008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "optgroup", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "KIA K4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "KIA K5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "KIA Rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "KIA Stinger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "KIA Ceed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "KIA Optima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "KIA Cadenza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "KIA XCeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "\n] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "optgroup", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Lexus GX 470");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Lexus LX 450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Lexus LX 470");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Lexus RX 270");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Lexus LM 350 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Lexus NX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Lexus CT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "optgroup", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Chevrolet Blazer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Chevrolet Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Chevrolet Equinox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Chevrolet Captiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Chevrolet Tahoe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Chevrolet Bolt EUV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Chevrolet Groove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "optgroup", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "GMC Yukon XL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "GMC Acadia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "GMC Terrain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "GMC Hummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "optgroup", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Hyundai Kona Electric\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Hyundai Elantra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Hyundai Grand i10 Nios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Hyundai Xcent Prime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Hyundai Sonata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Hyundai Grandeur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Hyundai Veracruz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Hyundai Veloster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Hyundai Coupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Hyundai Kona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Hyundai Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Hyundai elantra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Hyundai Pony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Hyundai Tucson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Hyundai Getz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Hyundai Genesis Coupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Hyundai Genesis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Hyundai Santa Fe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Hyundai i10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Hyundai Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Hyundai Aero City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Hyundai Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Hyundai elantra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](427, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](432, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](439, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullInsuranceComponent_Template_select_ngModelChange_440_listener($event) { return ctx.statuesshow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](444, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](447, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](448, FullInsuranceComponent_div_448_Template, 28, 3, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](449, FullInsuranceComponent_div_449_Template, 28, 3, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](453, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](458, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](461, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](464, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](467, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](470, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](473, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](477, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "select", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](482, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](485, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](489, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](494, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](497, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](500, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_504_listener() { return ctx.scondform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_506_listener() { return ctx.resetform(ctx.secondFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](508, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](510, FullInsuranceComponent_ng_template_510_Template, 2, 3, "ng-template", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "form", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](515, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](520, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullInsuranceComponent_Template_input_ngModelChange_522_listener($event) { return ctx.dateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](529, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "select", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullInsuranceComponent_Template_select_ngModelChange_530_listener($event) { return ctx.noyear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](534, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](537, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](540, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](543, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](546, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](549, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](552, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](555, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](558, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](561, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](564, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](567, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](568, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](569, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_573_listener() { return ctx.thirdform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_575_listener() { return ctx.resetform(ctx.forthFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](579, FullInsuranceComponent_ng_template_579_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](583, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](584, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](589, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](590, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](594, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](600, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "select", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](602, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](605, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](608, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](611, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](614, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](617, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](620, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](623, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](626, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](629, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](632, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](635, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](638, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](641, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](644, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](647, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](650, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](653, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](656, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_660_listener() { return ctx.forthform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullInsuranceComponent_Template_button_click_662_listener() { return ctx.resetform(ctx.thirdFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](665, FullInsuranceComponent_ng_template_665_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](669, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](673, FullInsuranceComponent_div_673_Template, 15, 12, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](678, FullInsuranceComponent_ng_template_678_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "h1", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](683, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](688, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](692, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](696, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](699, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](703, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](706, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](710, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](716, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](721, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](722, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](728, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](734, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](740, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](747, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](753, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](756, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](760, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](763, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](767, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, " Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0 = null;
        let tmp_6_0 = null;
        let tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 118, "insurace.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 120, "insurace.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstFormGroup.controls["Name"].invalid && (((tmp_4_0 = ctx.firstFormGroup.get("Name")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.firstFormGroup.get("Name")) == null ? null : tmp_4_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 122, "insurace.mail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstFormGroup.controls["Email"].invalid && (((tmp_6_0 = ctx.firstFormGroup.get("Email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.firstFormGroup.get("Email")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 124, "insurace.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstFormGroup.controls["Mobile"].invalid && (((tmp_8_0 = ctx.firstFormGroup.get("Mobile")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.firstFormGroup.get("Mobile")) == null ? null : tmp_8_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 126, "insurace.add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 128, "insurace.serial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 130, "insurace.type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 132, "insurace.otom"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 134, "insurace.manual"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 136, "insurace.use"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 138, "insurace.personal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 140, "insurace.fare"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 142, "insurace.load"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 144, "insurace.other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 146, "insurace.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 148, "insurace.year"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yearof);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yeararr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 150, "insurace.typeof"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](427, 152, "insurace.color"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](432, 154, "insurace.shase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](439, 156, "insurace.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.statuesshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](444, 158, "insurace.single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](447, 160, "insurace.maried"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statuesshow == "\u0645\u062A\u0632\u0648\u062C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statuesshow == "Married");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](453, 162, "insurace.profession"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](458, 164, "insurace.gover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](461, 166, "insurace.private"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](464, 168, "insurace.freelance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](467, 170, "insurace.student"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](470, 172, "insurace.kasb"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](473, 174, "insurace.notworking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](477, 176, "insurace.owner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](482, 178, "insurace.male"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](485, 180, "insurace.female"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](489, 182, "insurace.licence"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](494, 184, "insurace.priva"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](497, 186, "insurace.general"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](500, 188, "insurace.otheer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](515, 190, "insuracedoc.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](520, 192, "insuracedoc.qustion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](529, 194, "insuracedoc.choosemonth"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.noyear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](534, 196, "insuracedoc.mon1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](537, 198, "insuracedoc.mon2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](540, 200, "insuracedoc.mon3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](543, 202, "insuracedoc.mon4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](546, 204, "insuracedoc.mon5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](549, 206, "insuracedoc.mon6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](552, 208, "insuracedoc.mon7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](555, 210, "insuracedoc.mon8"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](558, 212, "insuracedoc.mon9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](561, 214, "insuracedoc.mon10"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](564, 216, "insuracedoc.mon11"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](567, 218, "insuracedoc.mon12"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](583, 220, "insuracedoc.addres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](589, 222, "insuracedoc.dar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](594, 224, "insuracedoc.kada"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](600, 226, "insuracedoc.mohafza"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](605, 228, "insuracedoc.mohafza1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](608, 230, "insuracedoc.mohafza2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](611, 232, "insuracedoc.mohafza3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](614, 234, "insuracedoc.mohafza4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](617, 236, "insuracedoc.mohafza5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](620, 238, "insuracedoc.mohafza6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](623, 240, "insuracedoc.mohafza7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](626, 242, "insuracedoc.mohafza8"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](629, 244, "insuracedoc.mohafza9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](632, 246, "insuracedoc.mohafza10"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](635, 248, "insuracedoc.mohafza11"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](638, 250, "insuracedoc.mohafza12"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](641, 252, "insuracedoc.mohafza13"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](644, 254, "insuracedoc.mohafza14"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](647, 256, "insuracedoc.mohafza15"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](650, 258, "insuracedoc.mohafza16"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](653, 260, "insuracedoc.mohafza17"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](656, 262, "insuracedoc.mohafza18"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](669, 264, "company.toptitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](683, 266, "bill.thank"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](688, 268, "bill.shamel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](692, 270, "bill.please"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](696, 272, "bill.type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](699, 274, "bill.shamel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](703, 276, "bill.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](706, 278, "bill.tameni"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](710, 280, "bill.number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.random);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](716, 282, "bill.quntity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.item.NoDocument, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](721, 284, "bill.info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](728, 286, "bill.nameper"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](734, 288, "bill.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](740, 290, "bill.mail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](747, 292, "bill.tasalsol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.serialNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](753, 294, "bill.date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](756, 296, ctx.dateOfBirth, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](760, 299, "bill.dateend"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](763, 301, ctx.showAge, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](767, 304, "bill.vechtype"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.carType);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], ngx_print__WEBPACK_IMPORTED_MODULE_10__["NgxPrintDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: [".ng-template[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #15c280 !important;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n\nh1[_ngcontent-%COMP%] {\n  direction: rtl;\n  font-size: 30px;\n  font-weight: bolder;\n}\n\n.flexheader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.btnColor[_ngcontent-%COMP%] {\n  background-color: #4f546777;\n}\n\n.iconColor[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 13px;\n}\n\n.btnEdirColor[_ngcontent-%COMP%] {\n  background-color: #E46A76;\n  width: 100%;\n  margin: 0;\n}\n\n.fas[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n}\n\n.divInput[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right !important;\n  display: flex;\n  flex-direction: column;\n}\n\n.divheader[_ngcontent-%COMP%] {\n  border-radius: 50px !important;\n  border-width: 2px;\n}\n\noption[_ngcontent-%COMP%] {\n  border-top: black;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 100%;\n  background-color: #242423;\n  height: 1px;\n}\n\n.pform3[_ngcontent-%COMP%] {\n  direction: rtl;\n  font-size: 35px;\n  font-weight: bolder;\n}\n\n.divInput2[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right !important;\n}\n\n.font2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n  .mat-horizontal-stepper-header {\n  pointer-events: none !important;\n}\n\noption[_ngcontent-%COMP%] {\n  margin: 3px;\n  margin-bottom: 5px;\n  font-size: 17px;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: rgba(245, 235, 224, 0.445);\n}\n\n.card[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 250px;\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  border-radius: 6px;\n  color: #333333;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n}\n\n.card-header-primary[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #942bf7, #861beb);\n}\n\n.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%], .card[class*=bg-][_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n}\n\n.card[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  line-height: 33px;\n}\n\n.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%] {\n  margin: 0px 15px 0;\n  padding: 0;\n  position: relative;\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #999999;\n  padding: 15px;\n  margin-top: -20px;\n  margin-right: 15px;\n  float: left;\n}\n\n.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  float: none;\n  display: inline-block;\n  margin-right: 0;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n  text-align: center;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 56px;\n  width: 70px;\n  height: 56px;\n  text-align: center;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.card-category[_ngcontent-%COMP%] {\n  color: #020202;\n  font-size: 22px;\n  font-weight: bold;\n  font-family: \"Times New Roman\", Times, serif;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #3C4858;\n  text-align: center;\n}\n\n.btnsign[_ngcontent-%COMP%] {\n  background-color: #E64A19;\n  color: white;\n}\n\n.stats[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.card-header[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n  margin-top: 20px;\n}\n\n.card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%] {\n  padding-top: 0rem;\n  border: 0;\n  border-radius: 6px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  background: transparent;\n}\n\n.bckfont[_ngcontent-%COMP%] {\n  color: #0b550b;\n}\n\n.flexdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.boldfont[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.titleinsurance[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n\n.inputprice[_ngcontent-%COMP%] {\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"30\"><text x=\"5\" y=\"19\" style=\"font: bold 16px Arial;\">$</text></svg>') no-repeat;\n}\n\n[_nghost-%COMP%]     .p-dropdown {\n  width: 14rem;\n}\n\noptgroup[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 17px;\n  font-weight: bold;\n  direction: ltr;\n}\n\n.ss[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 255, 0.411);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZnVsbC1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQUtBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBLFlBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQUZGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFFRSwyQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFHQyxhQUFBO0VBQ0Qsc0JBQUE7QUFMRjs7QUFhQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFhQTtFQUNBLGlCQUFBO0FBVkE7O0FBWUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7QUFURjs7QUFjQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWNBO0VBQ0UsK0JBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFFRSw0Q0FBQTtBQVpGOztBQWdCQTtFQUNFLG1CQUFBO0FBYkY7O0FBZ0JBOzs7RUFHRSxzQkFBQTtBQWJGOztBQWdCQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtBQWJGOztBQWdCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWJGOztBQWdCQTtFQUNJLGFBQUE7RUFDRixTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLCtHQUFBO0FBYkY7O0FBaUJBO0VBRUUsb0RBQUE7QUFmRjs7QUFrQkE7RUFFRSxvREFBQTtBQWhCRjs7QUFtQkE7RUFFRSxvREFBQTtBQWpCRjs7QUFvQkE7RUFDRSxvREFBQTtBQWpCRjs7QUFtQkE7RUFDRSxvREFBQTtBQWhCRjs7QUFvQkE7O0VBRUUsV0FBQTtBQWpCRjs7QUFvQkE7RUFDRSwyQ0FBQTtBQWpCRjs7QUFxQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFsQkY7O0FBc0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFuQkY7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXBCRjs7QUF1QkE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBcEJGOztBQXlCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF0QkY7O0FBd0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxpQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBckJGOztBQXdCQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBckJGOztBQXdCQTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtBQXRCRjs7QUF5QkE7RUFFRSxvQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBdkJGOztBQTBCQTtFQUNBLGFBQUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQXZCRjs7QUEwQkE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGNBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXZCRjs7QUEyQkE7RUFDRSxpQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBeEJGOztBQTJCQTtFQUNFLG9MQUFBO0FBeEJGOztBQTRCQTtFQUNFLFlBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usd0NBQUE7QUF6QkYiLCJmaWxlIjoiZnVsbC1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqe1xyXG4vLyAgICAgZGlyZWN0aW9uOiBydGw7XHJcbi8vIH1cclxuXHJcbi5uZy10ZW1wbGF0ZXtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogcmdiKDIxLCAxOTQsIDEyOCkgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4ucnRse1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcbmgxe1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5cclxufVxyXG4uZmxleGhlYWRlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYnRuQ29sb3J7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjU0Njc3NztcclxufVxyXG5cclxuLmljb25Db2xvcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxufVxyXG5cclxuLmJ0bkVkaXJDb2xvcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ2QTc2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZhc3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZm9udHtcclxuXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuLmRpdklucHV0e1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcclxuXHJcblxyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8gZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jY3tcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBicm93biAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGl2aGVhZGVye1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxub3B0aW9ue1xyXG5ib3JkZXItdG9wOiBibGFjaztcclxufVxyXG5ocntcclxuICBib3JkZXI6IDA7XHJcbiAgY2xlYXI6Ym90aDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlOyAgICAgICAgICAgICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IzI0MjQyMztcclxuICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuLnBmb3JtM3tcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmRpdklucHV0MntcclxuICBkaXJlY3Rpb246IHJ0bDtcclxuICB0ZXh0LWFsaWduOiByaWdodCFpbXBvcnRhbnQ7XHJcblxyXG5cclxufVxyXG5cclxuLmZvbnQye1xyXG5cclxuICBmb250LXNpemU6MThweCA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVye1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm9wdGlvbntcclxuICBtYXJnaW46IDNweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyMzUsIDIyNCwgMC40NDUpXHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC1pY29uXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC1pY29uXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM2NmJiNmEsICM0M2EwNDcpO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC1pY29uXHJcbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmZmE3MjYsICNmYjhjMDApO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItZGFuZ2VyIC5jYXJkLWljb257XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWY1MzUwLCAjZTUzOTM1KTtcclxufVxyXG4uY2FyZC1oZWFkZXItcHJpbWFyeSAuY2FyZC1pY29ue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzk0MmJmNywgIzg2MWJlYik7XHJcblxyXG59XHJcblxyXG4uY2FyZCBbY2xhc3MqPVwiY2FyZC1oZWFkZXItXCJdLFxyXG4uY2FyZFtjbGFzcyo9XCJiZy1cIl0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxufVxyXG5cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uIGkge1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbn1cclxuXHJcblxyXG4uY2FyZCBbY2xhc3MqPVwiY2FyZC1oZWFkZXItXCJdIHtcclxuICBtYXJnaW46IDBweCAxNXB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8vICAgLmNhcmQgW2NsYXNzKj1cImNhcmQtaGVhZGVyLVwiXSBcclxuLmNhcmQtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJkIFtjbGFzcyo9XCJjYXJkLWhlYWRlci1cIl0gLmNhcmQtdGV4dCB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuXHJcblxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpbWcge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBsaW5lLWhlaWdodDogNTZweDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1zdGF0cyAuY2FyZC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNhcmQtY2F0ZWdvcnkge1xyXG4gIGNvbG9yOiAjMDIwMjAyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgY29sb3I6ICMzQzQ4NTg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuc2lnbntcclxuIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjRBMTk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8vIHdpZHRoOiA4MCU7XHJcbn1cclxuLnN0YXRze1xyXG4gIFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIrLmNhcmQtZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5Ky5jYXJkLWZvb3RlciB7XHJcbiAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYmNrZm9udHtcclxuICBjb2xvcjogcmdiKDExLCA4NSwgMTEpO1xyXG59XHJcblxyXG4uZmxleGRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYm9sZGZvbnR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXRsZWluc3VyYW5jZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0cHJpY2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjMwXCI+PHRleHQgeD1cIjVcIiB5PVwiMTlcIiBzdHlsZT1cImZvbnQ6IGJvbGQgMTZweCBBcmlhbDtcIj4kPC90ZXh0Pjwvc3ZnPicpIG5vLXJlcGVhdDtcclxuXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDE0cmVtO1xyXG59XHJcblxyXG5vcHRncm91cHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIFxyXG59XHJcbi5zc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC40MTEpO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullInsuranceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-insurance',
                templateUrl: './full-insurance.component.html',
                styleUrls: ['./full-insurance.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_services_add_insurance_service__WEBPACK_IMPORTED_MODULE_3__["AddInsuranceService"] }, { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "FWoX":
/*!***************************************************!*\
  !*** ./src/app/services/add-insurance.service.ts ***!
  \***************************************************/
/*! exports provided: AddInsuranceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInsuranceService", function() { return AddInsuranceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



class AddInsuranceService {
    constructor(fb) {
        this.fb = fb;
    }
    addInsurance(itemm) {
        ////old////
        //   return this.fb.doc('insurance').set({
        //     Password : itemm.NoDocument,
        //     Email : itemm.Icon,
        //     Date:itemm.title,
        // })
        ////old////
        return this.fb.collection('insurance').add(itemm).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
            return "error";
        });
    }
}
AddInsuranceService.ɵfac = function AddInsuranceService_Factory(t) { return new (t || AddInsuranceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
AddInsuranceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddInsuranceService, factory: AddInsuranceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddInsuranceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "LegZ":
/*!***********************************************************!*\
  !*** ./src/app/Components/login/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_signauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/signauth.service */ "X9iw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function LoginComponent_div_13_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "example@example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_small_1_Template, 2, 0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_13_small_2_Template, 2, 0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userInfo.controls["Email"].errors == null ? null : ctx_r0.userInfo.controls["Email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userInfo.controls["Email"].hasError("email"));
} }
function LoginComponent_div_19_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "your Password must be 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_19_small_1_Template, 2, 0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_19_small_2_Template, 2, 0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userInfo.controls["Password"].errors == null ? null : ctx_r1.userInfo.controls["Password"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userInfo.controls["Password"].errors == null ? null : ctx_r1.userInfo.controls["Password"].errors.minlength);
} }
class LoginComponent {
    constructor(_formBuilder, dialogRef, dialog, authSer) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.authSer = authSer;
        this.listadd = { Email: '', Name: '', Password: '' };
        this.userInfo = this._formBuilder.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
        });
    }
    ngOnInit() {
    }
    onNoClick() {
        console.log(this.listadd.Email, this.listadd.Password);
        this.listadd = this.userInfo.value;
        console.log(this.listadd.Email, this.listadd.Password);
        this.authSer
            .login(this.listadd.Email, this.listadd.Password)
            .then((result) => {
            this.dialogRef.close();
            localStorage.setItem('currentUserEmail', this.listadd.Email);
        })
            .catch((err) => {
            console.log(err);
            // this.errorMsg = err.message
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_signauth_service__WEBPACK_IMPORTED_MODULE_3__["SignauthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 12, consts: [[1, "divAll", "row"], [1, "col-8", "col-sm-12", "col-md-6", "col-lg-8", "col-xs-12"], [1, "divInput"], [3, "formGroup"], [1, "form-group"], [1, "font"], ["type", "email", "formControlName", "Email", 1, "form-control"], [4, "ngIf"], ["type", "password", "formControlName", "Password", 1, "form-control"], [1, "btndiv"], ["type", "submit", "value", "Login", 1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "d-inline", "d-lg-inline", "d-md-inline", "col-4", "col-sm-0", "col-md-6", "col-lg-4", "col-xs-0", "d-sm-none", "d-xs-none", "divSecond"], ["src", "../../../../assets/comp.png", 1, "w-100", "d-xs-none", "imgg"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_21_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        let tmp_5_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "sign.loghead"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "sign.mail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo.controls["Email"].invalid && (((tmp_3_0 = ctx.userInfo.get("Email")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userInfo.get("Email")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, "sign.pass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo.controls["Password"].invalid && (((tmp_5_0 = ctx.userInfo.get("Password")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.userInfo.get("Password")) == null ? null : tmp_5_0.touched)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".divAll[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n\n.divSecond[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  font-size: xx-large;\n  font-weight: bold;\n}\n\n.divInput[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right !important;\n  display: flex;\n  flex-direction: column;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #645d5d;\n}\n\n.imgg[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  align-self: center;\n  align-content: center;\n}\n\n.btndiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n.divacc[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 19px;\n  font-weight: 400;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNQSx5QkFBQTtBQUpBOztBQU9BO0VBQ0kseUJBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFNQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtFQUdDLGFBQUE7RUFDRCxzQkFBQTtBQUxKOztBQVNBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVQTtFQUNLLGFBQUE7RUFDRCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2QWxse1xyXG5cclxuICAgIC8vIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xyXG59XHJcblxyXG4uZGl2U2Vjb25ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQ2LCAyNDYsIDI0Nik7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kaXZJbnB1dHtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQhaW1wb3J0YW50O1xyXG5cclxuXHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLmZvbnR7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2IoMTAwLCA5MywgOTMpO1xyXG59XHJcblxyXG4uaW1nZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5kaXZ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZGl2YWNje1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_services_signauth_service__WEBPACK_IMPORTED_MODULE_3__["SignauthService"] }]; }, null); })();


/***/ }),

/***/ "MYt/":
/*!*************************************************************!*\
  !*** ./src/app/Components/login/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../sign-up/sign-up.component */ "yYUS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_signauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/signauth.service */ "X9iw");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/lang.service */ "1Dne");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.Logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(dialog, authser, languageService, translate) {
        this.dialog = dialog;
        this.authser = authser;
        this.languageService = languageService;
        this.translate = translate;
        this.isuser = true;
    }
    // "UU%\_%b2p=z:G#
    openDialog() {
        const dialogRef = this.dialog.open(_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"], {
        // width:'250px'
        });
        // const dialogRef = this.dialog.open(LoginComponent,{
        // width:'250px'
        // });
    }
    ngOnInit() {
        this.authser.user.subscribe(user => {
            if (user) {
                this.isuser = false;
                // console.log(user)s
            }
            else
                this.isuser = true;
        });
    }
    Logout() {
        this.authser.logout();
        localStorage.removeItem('currentUserEmail');
    }
    changeLanguage() {
        window.location.reload();
        this.languageService.setLanguage(this.languageService.getLanguage() == 'ar' ? 'en' : 'ar');
        this.translate.use(this.languageService.getLanguage());
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_signauth_service__WEBPACK_IMPORTED_MODULE_3__["SignauthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-dark", "bg-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], ["href", "#", 1, "navbar-brand"], ["src", "../../../../assets/logoo-removebg-preview.png", "width", "70", "height", "50", "alt", "", 1, "d-inline-block", "align-top"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0", "mr-5"], [1, "nav-item"], ["class", "nav-link fontlink", 3, "click", 4, "ngIf"], [1, "nav-link", "fontlink", 3, "click"], [1, "navbar-nav", "ml-auto", "mt-2", "mt-lg-0", "mr-5"], ["routerLinkActive", "active", "routerLink", "/home", 1, "nav-link", "fontlink"], ["routerLinkActive", "active", "routerLink", "/full", 1, "nav-link", "fontlink"], ["routerLinkActive", "active", "routerLink", "/third", 1, "nav-link", "fontlink"], ["routerLinkActive", "active", "routerLink", "/contact", 1, "nav-link", "fontlink"], ["routerLinkActive", "active", "routerLink", "/about", 1, "nav-link", "fontlink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Full Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Third-Party Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 3, "shared.language"), " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".fontlink[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-right: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udGxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC8vIGJvZHksaHRtbHtcclxuICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gLyogcmVtb3ZlIG91dGVyIHBhZGRpbmcgKi9cclxuICAvLyAubWFpbiAucm93e1xyXG4gIC8vICAgcGFkZGluZzogMHB4O1xyXG4gIC8vICAgbWFyZ2luOiAwcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIC8qUmVtb3ZlIHJvdW5kZWQgY29uZXJzKi9cclxuICBcclxuICAvLyBuYXYuc2lkZWJhci5uYXZiYXIge1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyBuYXYuc2lkZWJhciwgLm1haW57XHJcbiAgLy8gICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAyMDBtcyBlYXNlLW91dDtcclxuICAvLyAgICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XHJcbiAgLy8gICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAyMDBtcyBlYXNlLW91dDtcclxuICAvLyAgICAgdHJhbnNpdGlvbjogbWFyZ2luIDIwMG1zIGVhc2Utb3V0O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAvKiBBZGQgZ2FwIHRvIG5hdiBhbmQgcmlnaHQgd2luZG93cy4qL1xyXG4gIC8vIC5tYWlue1xyXG4gIC8vICAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gLyogLi4uLi5OYXZCYXI6IEljb24gb25seSB3aXRoIGNvbG9yaW5nL2xheW91dC4uLi4uKi9cclxuICBcclxuICAvLyAvKnNtYWxsL21lZGl1bSBzaWRlIGRpc3BsYXkqL1xyXG4gIC8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIFxyXG4gIC8vICAgLypBbGxvdyBtYWluIHRvIGJlIG5leHQgdG8gTmF2Ki9cclxuICAvLyAgIC5tYWlue1xyXG4gIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTsgLyprZWVwcyAxMDAlIG1pbnVzIG5hdiBzaXplKi9cclxuICAvLyAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgLy8gICAgIGZsb2F0OiByaWdodDtcclxuICAvLyAgIH1cclxuICBcclxuICAvLyAgIC8qbGV0cyBuYXYgYmFyIHRvIGJlIHNob3dlZCBvbiBtb3VzZW92ZXIqL1xyXG4gIC8vICAgbmF2LnNpZGViYXI6aG92ZXIgKyAubWFpbntcclxuICAvLyAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIC8vICAgfVxyXG4gIFxyXG4gIC8vICAgLypDZW50ZXIgQnJhbmQqL1xyXG4gIC8vICAgbmF2LnNpZGViYXIubmF2YmFyLnNpZGViYXI+LmNvbnRhaW5lciAubmF2YmFyLWJyYW5kLCAubmF2YmFyPi5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XHJcbiAgLy8gICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAvKkNlbnRlciBCcmFuZCovXHJcbiAgLy8gICBuYXYuc2lkZWJhciAubmF2YmFyLWJyYW5kLCBuYXYuc2lkZWJhciAubmF2YmFyLWhlYWRlcntcclxuICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAvLyAgIH1cclxuICBcclxuICAvLyAgIC8qQ2VudGVyIEljb25zKi9cclxuICAvLyAgIG5hdi5zaWRlYmFyIGF7XHJcbiAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgLy8gICB9XHJcbiAgXHJcbiAgLy8gICAvKmFkZHMgYm9yZGVyIHRvcCB0byBmaXJzdCBuYXYgYm94ICovXHJcbiAgLy8gICBuYXYuc2lkZWJhciAubmF2YmFyLW5hdiA+IGxpOmZpcnN0LWNoaWxke1xyXG4gIC8vICAgICBib3JkZXItdG9wOiAxcHggI2U1ZTVlNSBzb2xpZDtcclxuICAvLyAgIH1cclxuICBcclxuICAvLyAgIC8qYWRkcyBib3JkZXIgdG8gYm90dG9tIG5hdiBib3hlcyovXHJcbiAgLy8gICBuYXYuc2lkZWJhciAubmF2YmFyLW5hdiA+IGxpe1xyXG4gIC8vICAgICBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcclxuICAvLyAgIH1cclxuICBcclxuICAvLyAgIC8qIENvbG9ycy9zdHlsZSBkcm9wZG93biBib3gqL1xyXG4gIC8vICAgbmF2LnNpZGViYXIgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xyXG4gIC8vICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIC8vICAgICBmbG9hdDogbm9uZTtcclxuICAvLyAgICAgd2lkdGg6IGF1dG87XHJcbiAgLy8gICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8vICAgICBib3JkZXI6IDA7XHJcbiAgLy8gICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAvLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAvLyAgIH1cclxuICBcclxuICAvLyAgIC8qYWxsb3dzIG5hdiBib3ggdG8gdXNlIDEwMCUgd2lkdGgqL1xyXG4gIC8vICAgbmF2LnNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSwgbmF2LnNpZGViYXIgLmNvbnRhaW5lci1mbHVpZHtcclxuICAvLyAgICAgcGFkZGluZzogMCAwcHggMCAwcHg7XHJcbiAgLy8gICB9XHJcbiAgXHJcbiAgLy8gICAvKmNvbG9ycyBkcm9wZG93biBib3ggdGV4dCAqL1xyXG4gIC8vICAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmEge1xyXG4gIC8vICAgICBjb2xvcjogIzc3NztcclxuICAvLyAgIH1cclxuICBcclxuICAvLyAgIC8qZ2l2ZXMgc2lkZWJhciB3aWR0aC9oZWlnaHQqL1xyXG4gIC8vICAgbmF2LnNpZGViYXJ7XHJcbiAgLy8gICAgIHdpZHRoOiAyMDBweDtcclxuICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8vICAgICBtYXJnaW4tbGVmdDogLTE2MHB4O1xyXG4gIC8vICAgICBmbG9hdDogbGVmdDtcclxuICAvLyAgICAgei1pbmRleDogODAwMDtcclxuICAvLyAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIC8vICAgfVxyXG4gIFxyXG4gIC8vICAgLypnaXZlIHNpZGViYXIgMTAwJSB3aWR0aDsqL1xyXG4gIC8vICAgbmF2LnNpZGViYXIgbGkge1xyXG4gIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgIH1cclxuICBcclxuICAvLyAgIC8qIE1vdmUgbmF2IHRvIGZ1bGwgb24gbW91c2Ugb3ZlciovXHJcbiAgLy8gICBuYXYuc2lkZWJhcjpob3ZlcntcclxuICAvLyAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAvLyAgIH1cclxuICAvLyAgIC8qZm9yIGhpZGVuIHRoaW5ncyB3aGVuIG5hdmJhciBoaWRkZW4qL1xyXG4gIC8vICAgLmZvckFuaW1hdGV7XHJcbiAgLy8gICAgIG9wYWNpdHk6IDA7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIC8qIC4uLi4uTmF2QmFyOiBGdWxseSBzaG93aW5nIG5hdiBiYXIuLi4uLiAqL1xyXG4gIFxyXG4gIC8vIEBtZWRpYSAobWluLXdpZHRoOiAxMzMwcHgpIHtcclxuICBcclxuICAvLyAgIC8qQWxsb3cgbWFpbiB0byBiZSBuZXh0IHRvIE5hdiovXHJcbiAgLy8gICAubWFpbntcclxuICAvLyAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTsgLyprZWVwcyAxMDAlIG1pbnVzIG5hdiBzaXplKi9cclxuICAvLyAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIC8vICAgfVxyXG4gIFxyXG4gIC8vICAgLypTaG93IGFsbCBuYXYqL1xyXG4gIC8vICAgbmF2LnNpZGViYXJ7XHJcbiAgLy8gICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLypTaG93IGhpZGRlbiBpdGVtcyBvbiBuYXYqL1xyXG4gIC8vICAgbmF2LnNpZGViYXIgLmZvckFuaW1hdGV7XHJcbiAgLy8gICAgIG9wYWNpdHk6IDE7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIG5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIsIG5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMge1xyXG4gIC8vICAgY29sb3I6ICNDQ0M7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gbmF2OmhvdmVyIC5mb3JBbmltYXRle1xyXG4gIC8vICAgb3BhY2l0eTogMTtcclxuICAvLyB9XHJcbiAgLy8gc2VjdGlvbntcclxuICAvLyAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAvLyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_services_signauth_service__WEBPACK_IMPORTED_MODULE_3__["SignauthService"] }, { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "S/Yg":
/*!*********************************************************!*\
  !*** ./src/app/Components/login/sign/sign.component.ts ***!
  \*********************************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SignComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignComponent.ɵfac = function SignComponent_Factory(t) { return new (t || SignComponent)(); };
SignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignComponent, selectors: [["app-sign"]], decls: 31, vars: 0, consts: [["id", "wrapper", 1, "login-register", "login-sidebar", "ccc"], [1, "titlediv"], ["src", "../../../../assets/logo-light.png"], [1, "login-box", "card"], [1, "card-body"], ["id", "loginform", "action", "index.html", 1, "form-horizontal", "form-material", "text-center"], ["href", "javascript:void(0)", 1, "db"], ["src", "../assets/logo.png", "alt", "Home", "width", "20%"], [1, "form-group", "m-t-40", "formtop"], [1, "col-xs-12"], ["type", "text", "placeholder", "Username", "required", "", 1, "form-control"], [1, "form-group"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control"], [1, "form-group", "row"], [1, "col-md-12"], [1, "d-flex", "no-block", "align-items-center"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], [1, "ml-auto"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-muted"], [1, "fas", "fa-lock", "m-r-5"], [1, "form-group", "text-center", "m-t-20"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block", "text-uppercase", "btn-rounded"]], template: function SignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\n.card[_ngcontent-%COMP%] {\n  background-color: #156f7a25;\n}\n.login-register[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed;\n}\n.login-box[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto;\n}\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  width: 100%;\n  left: 0px;\n  right: 0px;\n}\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n#recoverform[_ngcontent-%COMP%] {\n  display: none;\n}\n.login-sidebar[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 0px;\n}\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n  right: 0px;\n  position: absolute;\n  height: 100%;\n}\n.ccc[_ngcontent-%COMP%] {\n  background-color: white;\n  background-size: contain;\n  background-position: left;\n}\n.formtop[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  width: 90%;\n  height: 50px;\n}\n.btn-rounded[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background-color: #006A78;\n}\n.titlediv[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 10%;\n  color: white;\n  font-family: \"Arial, Helvetica, sans-serif\";\n  font-weight: bolder;\n}\n@media (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    overflow: hidden;\n  }\n\n  .topbar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    -webkit-align-items: center;\n  }\n\n  .topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n  }\n\n  .topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.show[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.show[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 0;\n  }\n\n  .topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n\n  .mega-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    height: 480px;\n    overflow: auto;\n  }\n\n  .comment-text[_ngcontent-%COMP%]   .comment-footer[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px 0;\n  }\n\n  .vtabs[_ngcontent-%COMP%]   .tabs-vertical[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  .material-icon-list-demo[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .error-page[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    z-index: 10;\n  }\n\n  .error-box[_ngcontent-%COMP%], .login-register[_ngcontent-%COMP%], .login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .error-box[_ngcontent-%COMP%] {\n    padding-bottom: 60px;\n  }\n\n  .error-body[_ngcontent-%COMP%] {\n    padding-top: 10%;\n  }\n\n  .error-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 100px;\n    font-weight: 600;\n    line-height: 100px;\n  }\n\n  .login-register[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n\n  .login-box[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .login-sidebar[_ngcontent-%COMP%] {\n    padding: 10% 0;\n  }\n\n  .chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%] {\n    left: -250px;\n    position: absolute;\n    transition: 0.5s ease-in;\n    background: #fff;\n  }\n\n  .chat-main-box[_ngcontent-%COMP%]   .chat-left-aside.open-pnl[_ngcontent-%COMP%] {\n    left: 0;\n  }\n\n  .chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .open-panel[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]:before {\n    left: 40px;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 90px);\n    float: right;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n\n  .left-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    border: 0;\n  }\n\n  .right-aside[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .flex-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important;\n    -webkit-flex-wrap: wrap !important;\n  }\n\n  .chat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n  }\n\n  .fc-toolbar[_ngcontent-%COMP%]   .fc-center[_ngcontent-%COMP%], .fc-toolbar[_ngcontent-%COMP%]   .fc-left[_ngcontent-%COMP%], .fc-toolbar[_ngcontent-%COMP%]   .fc-right[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: center;\n    margin-top: 10px;\n    overflow: hidden;\n  }\n\n  .hidden-md-down[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxnRkFBQTtBQUVSO0VBQ0UsMkJBQUE7QUFBRjtBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFRjtBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7QUFHRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFHRjtBQURBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUlGO0FBREE7RUFDRSx1QkFBQTtFQUVBLHdCQUFBO0VBQ0EseUJBQUE7QUFHRjtBQUtBO0VBQ0UsZ0JBQUE7QUFGRjtBQUtBO0VBRUksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBSEo7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQUhKO0FBVUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQVBGOztFQVNBO0lBQ0UsV0FBQTtFQU5GOztFQVFBO0lBR0UsbUJBQUE7SUFDQSxpQkFBQTtJQUVBLDJCQUFBO0VBTkY7O0VBUUE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtFQUxGOztFQU9BO0lBQ0UsbUJBQUE7RUFKRjs7RUFNQTtJQUNFLGdCQUFBO0VBSEY7O0VBS0E7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQUZGOztFQUlBO0lBQ0Usa0JBQUE7RUFERjs7RUFHQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBQUY7O0VBRUE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQUNGOztFQUNBO0lBQ0UsV0FBQTtFQUVGOztFQUFBO0lBQ0UsV0FBQTtFQUdGOztFQURBO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VBSUY7O0VBRkE7OztJQUdFLGtCQUFBO0VBS0Y7O0VBSEE7SUFDRSxvQkFBQTtFQU1GOztFQUpBO0lBQ0UsZ0JBQUE7RUFPRjs7RUFMQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQVFGOztFQU5BO0lBQ0UsZ0JBQUE7RUFTRjs7RUFQQTtJQUNFLFVBQUE7RUFVRjs7RUFSQTtJQUNFLGNBQUE7RUFXRjs7RUFUQTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7RUFZRjs7RUFWQTtJQUNFLE9BQUE7RUFhRjs7RUFYQTtJQUNFLGNBQUE7RUFjRjs7RUFaQTtJQUNFLFdBQUE7RUFlRjs7RUFiQTtJQUNFLFVBQUE7RUFnQkY7O0VBZEE7SUFDRSx3QkFBQTtJQUNBLFlBQUE7RUFpQkY7O0VBZkE7SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFrQkY7O0VBaEJBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtJQUNBLG9CQUFBO0VBbUJGOztFQWpCQTtJQUNFLFdBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtFQW9CRjs7RUFsQkE7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBcUJGOztFQW5CQTtJQUNFLGNBQUE7RUFzQkY7O0VBcEJBO0lBQ0UsMEJBQUE7SUFDQSxrQ0FBQTtFQXVCRjs7RUFyQkE7SUFDRSx3QkFBQTtFQXdCRjs7RUF0QkE7OztJQUdFLFdBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBeUJGOztFQXZCQTtJQUNFLGFBQUE7RUEwQkY7QUFDRiIsImZpbGUiOiJzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMCk7XHJcblxyXG4uY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2ZjdhMjU7XHJcbn1cclxuLmxvZ2luLXJlZ2lzdGVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTAlIDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4ubG9naW4tYm94IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmxvZ2luLWJveCAuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG4ubG9naW4tYm94IC5zb2NpYWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNyZWNvdmVyZm9ybSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLXNpZGViYXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2NjIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwOi8vcGhhcm1hem9uZS1lZy5jb20vdjEvYXNzZXRzL21lZGlhL2JnLzUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6O1xyXG4gIC8vIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAvLyB3aWR0aDogMjAlO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC9sb2dpbi1yZWdpc3Rlci5qcGcpXHJcbiAgLy8gbWFyZ2luLWxlZjogMTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtdG9wIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLXJvdW5kZWR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkE3ODtcclxufVxyXG5cclxuLnRpdGxlZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTonQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICAvLyBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBtZWRpYSBxdWVyeSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC50b3BiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50b3BiYXIgLnRvcC1uYXZiYXIge1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAudG9wYmFyIC50b3AtbmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9wYmFyIC50b3AtbmF2YmFyIC5uYXZiYXItbmF2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIC50b3BiYXIgLnRvcC1uYXZiYXIgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0uc2hvdyB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxuICAudG9wYmFyIC50b3AtbmF2YmFyIC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtLnNob3cgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICAudG9wYmFyIC50b3AtbmF2YmFyIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLm1lZ2EtZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAuY29tbWVudC10ZXh0IC5jb21tZW50LWZvb3RlciAuYWN0aW9uLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICAudnRhYnMgLnRhYnMtdmVydGljYWwge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1pY29uLWxpc3QtZGVtbyAuaWNvbnMgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZXJyb3ItcGFnZSAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAuZXJyb3ItYm94LFxyXG4gIC5sb2dpbi1yZWdpc3RlcixcclxuICAubG9naW4tc2lkZWJhciAubG9naW4tYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmVycm9yLWJveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICB9XHJcbiAgLmVycm9yLWJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICB9XHJcbiAgLmVycm9yLWJvZHkgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1yZWdpc3RlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubG9naW4tYm94IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5sb2dpbi1zaWRlYmFyIHtcclxuICAgIHBhZGRpbmc6IDEwJSAwO1xyXG4gIH1cclxuICAuY2hhdC1tYWluLWJveCAuY2hhdC1sZWZ0LWFzaWRlIHtcclxuICAgIGxlZnQ6IC0yNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIC5jaGF0LW1haW4tYm94IC5jaGF0LWxlZnQtYXNpZGUub3Blbi1wbmwge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLmNoYXQtbWFpbi1ib3ggLmNoYXQtbGVmdC1hc2lkZSAub3Blbi1wYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmNoYXQtbWFpbi1ib3ggLmNoYXQtcmlnaHQtYXNpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHVsLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICB9XHJcbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IC0xNHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgfVxyXG4gIC5sZWZ0LWFzaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICAucmlnaHQtYXNpZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5mbGV4LXdyYXAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2hhdC1saXN0IGxpIC5jaGF0LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIH1cclxuICAuZmMtdG9vbGJhciAuZmMtY2VudGVyLFxyXG4gIC5mYy10b29sYmFyIC5mYy1sZWZ0LFxyXG4gIC5mYy10b29sYmFyIC5mYy1yaWdodCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5oaWRkZW4tbWQtZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign',
                templateUrl: './sign.component.html',
                styleUrls: ['./sign.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _Components_login_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/login/header/header.component */ "MYt/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(TranslateService) {
        this.TranslateService = TranslateService;
        this.title = 'myapp';
        this.TranslateService.setDefaultLang('en');
        const lang = localStorage.getItem('lang') || 'en';
        this.TranslateService.use(lang);
        document.documentElement.lang = lang;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_Components_login_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "X9iw":
/*!**********************************************!*\
  !*** ./src/app/services/signauth.service.ts ***!
  \**********************************************/
/*! exports provided: SignauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignauthService", function() { return SignauthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class SignauthService {
    // user:Observable<firebase.>
    constructor(afAuth, fb) {
        this.afAuth = afAuth;
        this.fb = fb;
        this.userid = '';
        this.userId = '';
        this.user = afAuth.user;
        if (localStorage.getItem("currentUser") === null) {
            this.userLogin = true;
        }
        else {
            this.userLogin = false;
        }
        console.log(this.userLogin);
        // this.user = afAuth.user
        // this.userLogin=false
        // this.itemss=this.fb.collection<User>('user').valueChanges();
    }
    ngOnChanges(changes) {
        if (localStorage.getItem("currentUser") === null) {
            this.userLogin = true;
        }
        else {
            this.userLogin = false;
        }
    }
    signup(user) {
        //old////
        return this.afAuth.createUserWithEmailAndPassword(user.Email, user.Password);
        //old////
    }
    login(email, password) {
        //old////
        return this.afAuth.signInWithEmailAndPassword(email, password);
        //old////
    }
    loginUser(email, password) {
        // console.log("auth",email,password);
        this.userLogin = false;
        return this.fb.collection('users', ref => ref.where('Email', '==', email).where('Password', '==', password))
            .snapshotChanges();
    }
    checkforAdmin(email, password) {
        return this.fb.collection('admins', ref => ref.where('Email', '==', email).where('Password', '==', password))
            .snapshotChanges();
    }
    addUser(id, itemm) {
        ////old////
        console.log('from', id, 'fkf', itemm === null || itemm === void 0 ? void 0 : itemm.Email);
        return this.fb.doc('users/' + id).set({
            Password: itemm === null || itemm === void 0 ? void 0 : itemm.Password,
            Email: itemm === null || itemm === void 0 ? void 0 : itemm.Email,
        });
        // .then(res=>{
        // console.log(res)
        //   }).catch(err=>{
        //     console.log(err)
        //   })
        ////old////
        // return this.fb.collection('users').add(itemm).then(function (docRef) {
        //   console.log("Document written with ID: ", docRef.id);
        //  return docRef.id;
        // })
        //   .catch(function (error) {
        //     console.error("Error adding document: ", error);
        //     return "error"
        //   });
    }
    addAdmin(itemm) {
        return this.fb.collection('admins').add(itemm).then(function (docRef) {
            console.log("admin added with ID: ", docRef.id);
            return docRef.id;
        })
            .catch(function (error) {
            console.error("Error adding document: ", error);
            return "error";
        });
    }
    logout() {
        ////old////
        return this.afAuth.signOut();
        ////old////
    }
    getalluser() {
        ///////old ////////////////////
        // return this.fb.collection<User>('user' ,ref => ref.where( 'Type' , '==', 'user' ))
        // .snapshotChanges();
        ///////old ////////////////////
        return this.fb.collection('users')
            .snapshotChanges();
    }
    getalladmin() {
        return this.fb.collection('admins')
            .snapshotChanges();
    }
    getbyID(idd) {
        // const [userDetails, setUserDetails] = useState('')
        return this.fb.collection('users').doc(idd).get();
        // .then(snapshot => setUserDetails(snapshot.data()))
    }
    deleteAdmin(id) {
        return this.fb.collection("admins").doc(id).delete();
        // this.afAuth.currentUser
    }
    deleteuser(id) {
        return this.fb.collection("users").doc(id).delete();
        // this.afAuth.currentUser
    }
    updateAdmin(item) {
        // console.log(item)
        // console.log(item.id)
        this.itemDoc = this.fb.doc(`admins/${item.id}`);
        this.itemDoc.update(item);
    }
    updateUsers(item) {
        // console.log(item)
        // console.log(item.id)
        this.itemDoc = this.fb.doc(`users/${item.id}`);
        this.itemDoc.update(item);
    }
}
SignauthService.ɵfac = function SignauthService_Factory(t) { return new (t || SignauthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
SignauthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignauthService, factory: SignauthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignauthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _Components_login_sign_sign_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/login/sign/sign.component */ "S/Yg");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _Components_login_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/login/not-found/not-found.component */ "6NBV");
/* harmony import */ var _Components_login_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/login/home/home.component */ "jPq6");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _Components_login_full_insurance_full_insurance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/login/full-insurance/full-insurance.component */ "BPly");
/* harmony import */ var _Components_login_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/login/header/header.component */ "MYt/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Components_login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/login/sign-up/sign-up.component */ "yYUS");
/* harmony import */ var _Components_login_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/login/login/login.component */ "LegZ");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _Components_login_thirdincurance_thirdincurance_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/login/thirdincurance/thirdincurance.component */ "fDwi");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/cascadeselect */ "A1Di");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-print */ "m1XX");
/* harmony import */ var _Components_login_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/login/aboutus/aboutus.component */ "40xS");
/* harmony import */ var _Components_login_contact_contact_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Components/login/contact/contact.component */ "r3/4");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_34__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
var firebaseConfig = {
    apiKey: "AIzaSyAzBJKDiRHQ0pgh52rSMCh_jvV5CBRwdCI",
    authDomain: "klooktest-520cb.firebaseapp.com",
    projectId: "klooktest-520cb",
    storageBucket: "klooktest-520cb.appspot.com",
    messagingSenderId: "486005586729",
    appId: "1:486005586729:web:7ced86ac11b96f1c9ad538"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_31__["NgxPrintModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_26__["CascadeSelectModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__["DropdownModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_28__["ButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"],
            // TranslateService,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClient"]],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Components_login_sign_sign_component__WEBPACK_IMPORTED_MODULE_5__["SignComponent"],
        _Components_login_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _Components_login_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _Components_login_full_insurance_full_insurance_component__WEBPACK_IMPORTED_MODULE_12__["FullInsuranceComponent"],
        _Components_login_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _Components_login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
        _Components_login_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
        _Components_login_thirdincurance_thirdincurance_component__WEBPACK_IMPORTED_MODULE_24__["ThirdincuranceComponent"],
        _Components_login_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_32__["AboutusComponent"],
        _Components_login_contact_contact_component__WEBPACK_IMPORTED_MODULE_33__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        ngx_print__WEBPACK_IMPORTED_MODULE_31__["NgxPrintModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_26__["CascadeSelectModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__["DropdownModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_28__["ButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"],
        // TranslateService,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Components_login_sign_sign_component__WEBPACK_IMPORTED_MODULE_5__["SignComponent"],
                    _Components_login_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                    _Components_login_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _Components_login_full_insurance_full_insurance_component__WEBPACK_IMPORTED_MODULE_12__["FullInsuranceComponent"],
                    _Components_login_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _Components_login_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                    _Components_login_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                    _Components_login_thirdincurance_thirdincurance_component__WEBPACK_IMPORTED_MODULE_24__["ThirdincuranceComponent"],
                    _Components_login_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_32__["AboutusComponent"],
                    _Components_login_contact_contact_component__WEBPACK_IMPORTED_MODULE_33__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(firebaseConfig),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    ngx_print__WEBPACK_IMPORTED_MODULE_31__["NgxPrintModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_26__["CascadeSelectModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_27__["DropdownModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_28__["ButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"],
                    // TranslateService,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClient"]],
                        },
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fDwi":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/login/thirdincurance/thirdincurance.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ThirdincuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdincuranceComponent", function() { return ThirdincuranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_add_insurance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/add-insurance.service */ "FWoX");
/* harmony import */ var src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/lang.service */ "1Dne");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print */ "m1XX");













function ThirdincuranceComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insurace.info"));
} }
function ThirdincuranceComponent_div_21_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThirdincuranceComponent_div_21_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThirdincuranceComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ThirdincuranceComponent_div_21_small_2_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThirdincuranceComponent_div_21_small_3_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.firstFormGroup.controls["Name"].errors == null ? null : ctx_r2.firstFormGroup.controls["Name"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.firstFormGroup.controls["Name"].errors == null ? null : ctx_r2.firstFormGroup.controls["Name"].errors.minlength);
} }
function ThirdincuranceComponent_div_27_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThirdincuranceComponent_div_27_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "example@example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThirdincuranceComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ThirdincuranceComponent_div_27_small_2_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThirdincuranceComponent_div_27_small_3_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.firstFormGroup.controls["Email"].errors == null ? null : ctx_r3.firstFormGroup.controls["Email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.firstFormGroup.controls["Email"].hasError("email"));
} }
function ThirdincuranceComponent_div_34_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThirdincuranceComponent_div_34_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThirdincuranceComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ThirdincuranceComponent_div_34_small_2_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThirdincuranceComponent_div_34_small_3_Template, 2, 0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.firstFormGroup.controls["Mobile"].errors == null ? null : ctx_r4.firstFormGroup.controls["Mobile"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.firstFormGroup.controls["Mobile"].errors == null ? null : ctx_r4.firstFormGroup.controls["Mobile"].errors.minlength);
} }
function ThirdincuranceComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insurace.add"));
} }
function ThirdincuranceComponent_option_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.no);
} }
function ThirdincuranceComponent_div_448_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "insurace.child"));
} }
function ThirdincuranceComponent_div_449_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "insurace.child"));
} }
function ThirdincuranceComponent_ng_template_510_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insuracedoc.title"));
} }
function ThirdincuranceComponent_ng_template_579_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "insuracedoc.headform"));
} }
function ThirdincuranceComponent_ng_template_665_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "company.title"));
} }
function ThirdincuranceComponent_div_673_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_div_673_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const c_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addInfo(c_r21.NoDocument, c_r21.Icon, c_r21.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-header ", c_r21.ColorBck, " card-header-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r21.Icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, c_r21.NoDocument, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "company.btnChoose"), " ");
} }
function ThirdincuranceComponent_ng_template_678_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "bill.top"));
} }
class ThirdincuranceComponent {
    constructor(_formBuilder, dialog, insSer, languageService, translate) {
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.insSer = insSer;
        this.languageService = languageService;
        this.translate = translate;
        this.isEditable = false;
        this.dateOfBirth = '';
        this.noyear = '';
        this.icp1 = '';
        this.price = 0;
        this.price1 = 0;
        this.price2 = 0;
        this.price3 = 0;
        this.price4 = 0;
        this.price5 = 0;
        this.price1p = 0;
        this.price2p = 0;
        this.price3p = 0;
        this.price4p = 0;
        this.price5p = 0;
        this.price1y = 0;
        this.price2y = 0;
        this.price3y = 0;
        this.price4y = 0;
        this.price5y = 0;
        this.yearof = 0;
        this.cardsBool = true;
        this.statuesshow = '';
        this.Cards = [];
        this.listadd = { Section: '' };
        this.listaddthird = {};
        this.listaddfirst = {};
        this.listaddforth = {};
        this.today = Date.now();
        this.random = Math.floor((Math.random() * 100000000) + 1);
        this.cities = [];
        this.selectedCity3 = '';
        this.selectedCountry = '';
        this.countries = [];
        this.groupedCities = [];
        this.items = [];
        this.itemm = '';
        this.yeararr = [];
        this.compprice = '';
        this.item = { title: '', Icon: '', NoDocument: '' };
        this.showAge = 0;
        this.showAge2 = 0;
        this.translate.use(languageService.getLanguage());
        this.firstFormGroup = this._formBuilder.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](localStorage.getItem("currentUserEmail"), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(50)]),
            Mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11)]),
        });
        this.secondFormGroup = this._formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Booked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            OldPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Review: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Section: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            TourDiscount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            noChiled: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.thirdFormGroup = this._formBuilder.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            Mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.forthFormGroup = this._formBuilder.group({
            calender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.yeararr = [
            { no: 1970 },
            { no: 1971 },
            { no: 1972 },
            { no: 1973 },
            { no: 1974 },
            { no: 1975 },
            { no: 1976 },
            { no: 1977 },
            { no: 1978 },
            { no: 1979 },
            { no: 1980 },
            { no: 1981 },
            { no: 1982 },
            { no: 1983 },
            { no: 1984 },
            { no: 1985 },
            { no: 1986 },
            { no: 1987 },
            { no: 1988 },
            { no: 1989 },
            { no: 1990 },
            { no: 1991 },
            { no: 1992 },
            { no: 1993 },
            { no: 1994 },
            { no: 1995 },
            { no: 1996 },
            { no: 1997 },
            { no: 1998 },
            { no: 1999 },
            { no: 2001 },
            { no: 2002 },
            { no: 2003 },
            { no: 2004 },
            { no: 2005 },
            { no: 2006 },
            { no: 2007 },
            { no: 2008 },
            { no: 2009 },
            { no: 2010 },
            { no: 2011 },
            { no: 2012 },
            { no: 2013 },
            { no: 2014 },
            { no: 2015 },
            { no: 2016 },
            { no: 2017 },
            { no: 2018 },
            { no: 2019 },
            { no: 2020 },
            { no: 2021 },
        ];
    }
    //  ngOnChanges(changes: SimpleChanges): void {
    //   // this.setLanguage();
    //   throw new Error('Method not implemented.');
    //   // this.setLanguage();
    // }
    ngOnInit() {
    }
    firstNext() {
        console.log(this.firstFormGroup.value);
        this.listaddfirst = this.firstFormGroup.value;
    }
    scondform() {
        console.log(this.secondFormGroup.value);
        this.listadd = this.secondFormGroup.value;
    }
    thirdform() {
        console.log(this.dateOfBirth);
        this.datee();
        this.Cards = [
            {
                title: "شركة ابن الهيثم ",
                NoDocument: this.price5,
                Icon: "../../../../assets/ibn.jpg",
                ColorBck: "card-header-primary"
            },
            {
                title: "شركة الانماء طوكيو",
                NoDocument: this.price1,
                Icon: "../../../../assets/ali.jpg",
                ColorBck: "card-header-warning"
            },
            {
                title: "شركة المجموعة المتحدة",
                NoDocument: this.price2,
                Icon: "../../../../assets/612770365.jpg",
                ColorBck: "card-header-success"
            },
            {
                title: "شركة المتوسط والخليج",
                NoDocument: this.price3,
                Icon: "../../../../assets/mid.png",
                ColorBck: "card-header-danger"
            },
            {
                title: "الدرع العربي للتأمين",
                NoDocument: this.price4,
                Icon: "../../../../assets/dre.png",
                ColorBck: "card-header-info"
            },
        ];
    }
    forthform() {
        console.log(this.thirdFormGroup.value);
        this.listaddthird = this.thirdFormGroup.value;
    }
    goBack(stepper) {
        stepper.previous();
    }
    add() {
        this.listadd = this.secondFormGroup.value;
        // console.log(this.listadd.Section)
        // this.price=this.listadd.Section;
    }
    addInfo(comapanyPrice, companyImage, companyName) {
        console.log(this.item.carType);
        this.compprice = comapanyPrice.toString();
        this.item.Icon = companyImage;
        this.item.title = companyName;
        this.item.NoDocument = this.compprice;
        this.item.Email = this.listaddfirst.Email;
        this.item.Name = this.listaddfirst.Name;
        this.item.Mobile = this.listaddfirst.Mobile;
        console.log(this.listadd);
        this.item.serialNumber = this.listadd.id;
        this.item.noshase = this.listadd.Booked;
        this.item.type = this.listadd.Date;
        this.item.year = this.listadd.Image;
        this.item.worktype = this.listadd.OldPrice;
        this.item.staues = this.listadd.Price;
        this.item.carType = this.listadd.Rate;
        this.item.carColor = this.listadd.Review;
        this.item.price = this.listadd.Section;
        this.item.carTypeOtam = this.listadd.Title;
        this.item.licenceType = this.listadd.TourDiscount;
        this.item.noChiled = this.listadd.noChiled;
        this.item.gender = this.listadd.gender;
        this.item.buldingNo = this.listaddthird.Name;
        this.item.elkadaa = this.listaddthird.Email;
        this.item.elmohafza = this.listaddthird.Mobile;
        this.item.date = this.dateOfBirth;
        this.item.currentdate = this.today.toString();
        this.item.insurancetype = "تأمين ضد الغير";
        console.log(this.item);
        this.insSer.addInsurance(this.item);
    }
    printPage() {
        window.print();
    }
    datee() {
        this.listaddforth = this.forthFormGroup.value;
        const convertAge = new Date(this.dateOfBirth);
        const timeDiff = Math.abs(convertAge.getTime());
        this.showAge2 = this.showAge;
        console.log(this.listaddforth.calender);
        if (this.listaddforth.calender == 'شهر') {
            console.log('1');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 1)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.05;
            this.price2 = this.price * 0.03;
            this.price3 = this.price * 0.04;
            this.price4 = this.price * 0.06;
            this.price5 = this.price * 0.03;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'شهرين') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 2)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.1;
            this.price2 = this.price * 0.06;
            this.price3 = this.price * 0.08;
            this.price4 = this.price * 0.12;
            this.price5 = this.price * 0.06;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'ثلاث شهور') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 3)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.13;
            this.price2 = this.price * 0.09;
            this.price3 = this.price * 0.11;
            this.price4 = this.price * 0.13;
            this.price5 = this.price * 0.08;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'اربع شهور') {
            console.log('4');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 4)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.18;
            this.price2 = this.price * 0.12;
            this.price3 = this.price * 0.15;
            this.price4 = this.price * 0.19;
            this.price5 = this.price * 0.11;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'خمس شهور') {
            console.log('خمس');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 5)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.21;
            this.price2 = this.price * 0.15;
            this.price3 = this.price * 0.18;
            this.price4 = this.price * 0.20;
            this.price5 = this.price * 0.13;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'ست شهور') {
            console.log('6');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 6)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.26;
            this.price2 = this.price * 0.18;
            this.price3 = this.price * 0.22;
            this.price4 = this.price * 0.26;
            this.price5 = this.price * 0.16;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'سبع شهور') {
            console.log('7');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 7)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.29;
            this.price2 = this.price * 0.21;
            this.price3 = this.price * 0.24;
            this.price4 = this.price * 0.27;
            this.price5 = this.price * 0.18;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'ثمان شهور') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 8)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.34;
            this.price2 = this.price * 0.24;
            this.price3 = this.price * 0.28;
            this.price4 = this.price * 0.33;
            this.price5 = this.price * 0.21;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'تسعة شهور') {
            console.log('9');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 9)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.37;
            this.price2 = this.price * 0.27;
            this.price3 = this.price * 0.30;
            this.price4 = this.price * 0.34;
            this.price5 = this.price * 0.23;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'عشرة شهور') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 10)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.42;
            this.price2 = this.price * 0.29;
            this.price3 = this.price * 0.34;
            this.price4 = this.price * 0.40;
            this.price5 = this.price * 0.26;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'احدى عشر شهر') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 11)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.45;
            this.price2 = this.price * 0.32;
            this.price3 = this.price * 0.37;
            this.price4 = this.price * 0.41;
            this.price5 = this.price * 0.28;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'سنة') {
            console.log('4yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 12)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.50;
            this.price2 = this.price * 0.35;
            this.price3 = this.price * 0.41;
            this.price4 = this.price * 0.47;
            this.price5 = this.price * 0.30;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '1 month') {
            console.log('1');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 1)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.05;
            this.price2 = this.price * 0.03;
            this.price3 = this.price * 0.04;
            this.price4 = this.price * 0.06;
            this.price5 = this.price * 0.03;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '2 month') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 2)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.1;
            this.price2 = this.price * 0.06;
            this.price3 = this.price * 0.08;
            this.price4 = this.price * 0.12;
            this.price5 = this.price * 0.06;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '3 month') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 3)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.13;
            this.price2 = this.price * 0.09;
            this.price3 = this.price * 0.11;
            this.price4 = this.price * 0.13;
            this.price5 = this.price * 0.08;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '4 month') {
            console.log('4');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 4)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.18;
            this.price2 = this.price * 0.12;
            this.price3 = this.price * 0.15;
            this.price4 = this.price * 0.19;
            this.price5 = this.price * 0.11;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '5 month') {
            console.log('خمس');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 5)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.21;
            this.price2 = this.price * 0.15;
            this.price3 = this.price * 0.18;
            this.price4 = this.price * 0.20;
            this.price5 = this.price * 0.13;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '6 month') {
            console.log('6');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 6)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.26;
            this.price2 = this.price * 0.18;
            this.price3 = this.price * 0.22;
            this.price4 = this.price * 0.26;
            this.price5 = this.price * 0.16;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '7 month') {
            console.log('7');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 7)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.29;
            this.price2 = this.price * 0.21;
            this.price3 = this.price * 0.24;
            this.price4 = this.price * 0.27;
            this.price5 = this.price * 0.18;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '8 month') {
            console.log('2yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 8)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.34;
            this.price2 = this.price * 0.24;
            this.price3 = this.price * 0.28;
            this.price4 = this.price * 0.33;
            this.price5 = this.price * 0.21;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '9 month') {
            console.log('9');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 9)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.37;
            this.price2 = this.price * 0.27;
            this.price3 = this.price * 0.30;
            this.price4 = this.price * 0.34;
            this.price5 = this.price * 0.23;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '10 month') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 10)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.42;
            this.price2 = this.price * 0.29;
            this.price3 = this.price * 0.34;
            this.price4 = this.price * 0.40;
            this.price5 = this.price * 0.26;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == '11 month') {
            console.log('عشرة');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 11)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.45;
            this.price2 = this.price * 0.32;
            this.price3 = this.price * 0.37;
            this.price4 = this.price * 0.41;
            this.price5 = this.price * 0.28;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.listaddforth.calender == 'year') {
            console.log('4yer');
            this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24) * 31 * 12)));
            this.showAge2 = this.showAge;
            this.price1 = this.price * 0.50;
            this.price2 = this.price * 0.35;
            this.price3 = this.price * 0.41;
            this.price4 = this.price * 0.47;
            this.price5 = this.price * 0.30;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        if (this.price <= 50000) {
            console.log('5000<');
            console.log(this.yearof);
            console.log(this.price);
            // this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
            // this.showAge2=this.showAge
            //     this.price1= this.price*0.01
            //     this.price2=this.price*0.02
            //    this.price3=this.price*0.02
            //    this.price4=this.price*0.01
            //  this.price5=this.price*0.01
            this.price1 = this.price1;
            this.price2 = this.price2;
            this.price3 = this.price3;
            this.price4 = this.price4;
            this.price5 = this.price5;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.price >= 50000) {
            console.log('5000>');
            //  this.showAge = Math.floor((timeDiff + ((1000 * 3600 * 24)*365*4)));
            //  this.showAge2=this.showAge
            this.price1p = this.price * 0.01;
            this.price2p = this.price * 0.02;
            this.price3p = this.price * 0.02;
            this.price4p = this.price * 0.01;
            this.price5p = this.price * 0.01;
            this.price1 = this.price1 + this.price1p;
            this.price2 = this.price2 + this.price2p;
            this.price3 = this.price3 + this.price3p;
            this.price4 = this.price4 + this.price4p;
            this.price5 = this.price5 + this.price5p;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        if (this.yearof <= 2000) {
            console.log('year2000<');
            this.price1y = this.price * 0.01;
            this.price2y = this.price * 0.01;
            this.price3y = this.price * 0.01;
            this.price4y = this.price * 0.01;
            this.price5y = this.price * 0.01;
            this.price1 = this.price1 + this.price1y;
            this.price2 = this.price2 + this.price2y;
            this.price3 = this.price3 + this.price3y;
            this.price4 = this.price4 + this.price4y;
            this.price5 = this.price5 + this.price5y;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.yearof > 2000 && this.yearof <= 2018) {
            console.log('year2000>2018');
            //     this.price1y= this.price*0.01
            //     this.price2y=this.price*0.01
            //    this.price3y=this.price*0.01
            //    this.price4y=this.price*0.01
            //  this.price5y=this.price*0.01
            this.price1 = this.price1;
            this.price2 = this.price2;
            this.price3 = this.price3;
            this.price4 = this.price4;
            this.price5 = this.price5;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
        else if (this.yearof < 2022 && this.yearof >= 2019) {
            this.price1y = this.price * 0.02;
            this.price2y = this.price * 0.03;
            this.price3y = this.price * 0.03;
            this.price4y = this.price * 0.03;
            this.price5y = this.price * 0.02;
            this.price1 = this.price1 + this.price1y;
            this.price2 = this.price2 + this.price2y;
            this.price3 = this.price3 + this.price3y;
            this.price4 = this.price4 + this.price4y;
            this.price5 = this.price5 + this.price5y;
            console.log("price1", this.price1);
            console.log("price2", this.price2);
            console.log("price3", this.price3);
            console.log("price4", this.price4);
            console.log("price5", this.price5);
        }
    }
    resetform(gg) {
        gg.reset();
    }
}
ThirdincuranceComponent.ɵfac = function ThirdincuranceComponent_Factory(t) { return new (t || ThirdincuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_add_insurance_service__WEBPACK_IMPORTED_MODULE_3__["AddInsuranceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
ThirdincuranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdincuranceComponent, selectors: [["app-thirdincurance"]], decls: 775, vars: 306, consts: [[1, "mt-5", "m-5", "divheader"], ["linear", "", "dir", "rtl", 1, "cc"], ["stepper", ""], [3, "stepControl"], ["dir", "rtl", 1, "divInput", 3, "formGroup"], ["matStepLabel", ""], [1, "flexheader"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["for", "validationServer01", 1, "font"], ["formControlName", "Name", "type", "text", "id", "validationServer01", "value", "Mark", "required", "", 1, "form-control"], [4, "ngIf"], ["autofocus", "", "formControlName", "Email", "type", "text", "id", "validationServer01", "value", "Name", 1, "form-control"], [1, "col-md-4", "mb-3"], ["formControlName", "Mobile", "type", "number", "id", "validationServer01", "value", "Mark", "required", "", 1, "form-control"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-lg", "btn-info", 3, "click"], ["mat-button", "", 1, "btn", "btn-lg", "btn-primary", "mr-4", 3, "click"], [1, "col-md-3", "mb-3", "form-group"], ["for", "TourID", 1, "font"], ["type", "text", "formControlName", "id", 1, "form-control"], ["for", "Title", 1, "font"], ["formControlName", "Title", "id", "Title", 1, "form-control"], ["value", "", 2, "display", "none"], ["for", "Date", 1, "font"], ["formControlName", "Date", "id", "Date", 1, "form-control"], ["for", "TourDistance", 1, "font"], ["type", "number", "id", "TourDistance", "formControlName", "Section", 1, "form-control", "inputprice", 3, "ngModel", "ngModelChange"], ["for", "Image", 1, "font"], ["title", "Select your surfboard", "formControlName", "Image", "id", "Rate", 1, "form-control", "selectpicker", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["for", "Rate", 1, "font"], ["matNativeControl", "", "formControlName", "Rate", 1, "form-control", "selectpicker"], ["label", "TOYOYA"], ["label", "Ford", 1, "ss"], ["label", "BMW"], ["label", "Audi", 1, "ss"], ["label", "Volkswagen"], ["label", "Mercedes ", 1, "ss"], ["label", "NISSAN "], ["label", " Mazda  ", 1, "ss"], ["label", "VOLVO"], ["label", "Mitsubishi", 1, "ss"], ["label", "Peugeot"], ["label", " KIA", 1, "ss"], ["label", " Lexus"], ["label", " Chevrolet", 1, "ss"], ["label", " GMC"], ["label", " Hyundai ", 1, "ss"], ["for", "Review", 1, "font"], ["type", "text", "id", "Review", "formControlName", "Review", 1, "form-control"], ["for", "TourBooked", 1, "font"], ["type", "text", "formControlName", "Booked", 1, "form-control"], ["for", "Price", 1, "font"], ["formControlName", "Price", "name", "sss", "id", "Price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-3 mb-3 form-group", 4, "ngIf"], ["for", "TourOldPrice", 1, "font"], ["formControlName", "OldPrice", "id", "OldPrice", 1, "form-control"], ["for", "gender", 1, "font"], ["formControlName", "gender", "id", "gender", 1, "form-control"], ["for", "TourDiscount", 1, "font"], ["formControlName", "TourDiscount", "id", "TourDiscount", 1, "form-control"], [1, "w-50"], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-lg", "btn-danger", "mr-3"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-lg", "btn-info", "mr-3", 3, "click"], ["class", "ng-template", "matStepLabel", ""], ["dir", "rtl", 1, "divInput2", 3, "formGroup"], [1, "flexdiv2"], [1, "font"], ["type", "date", "formControlName", "date", "name", "something", 1, "form-control", "w-25", 3, "ngModel", "ngModelChange"], ["formControlName", "calender", "id", "Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-lg", "btn-danger", "mr-4"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-lg", "btn-info", "mr-4", 3, "click"], ["formControlName", "Email", "type", "text", "id", "validationServer01", "value", "Mark", "required", "", 1, "form-control"], ["formControlName", "Mobile", "id", "Date", 1, "form-control"], [1, "content"], [1, "container-fluid"], [1, "row"], ["class", "col-lg-3 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-lg", "btn-danger"], ["dir", "rtl", 1, "divInput"], [1, "bckfont"], [1, "titleinsurance"], ["id", "print-section", 1, ""], [1, "flexdiv"], [1, "boldfont"], [1, "mr-5"], ["printSectionId", "print-section", "ngxPrint", "", 1, "btn", "btn-lg", "btn-success"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], ["formControlName", "noChiled", "id", "OldPrice", 1, "form-control"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "card", "card-stats"], [1, "card-icon"], [3, "src"], [1, "card-category"], [1, "card-title"], [1, "card-footer"], [1, "stats"], ["mat-button", "", "matStepperNext", "", 1, "ml-4", "btn", "btn-lg", "btn-success", 3, "click"]], template: function ThirdincuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ThirdincuranceComponent_ng_template_9_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ThirdincuranceComponent_div_21_Template, 5, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ThirdincuranceComponent_div_27_Template, 6, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ThirdincuranceComponent_div_34_Template, 6, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_36_listener() { return ctx.firstNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_38_listener() { return ctx.resetform(ctx.firstFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ThirdincuranceComponent_ng_template_42_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThirdincuranceComponent_Template_input_ngModelChange_88_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThirdincuranceComponent_Template_select_ngModelChange_94_listener($event) { return ctx.yearof = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ThirdincuranceComponent_option_96_Template, 2, 1, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "optgroup", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "TOYOYA Avalon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "TOYOYA Camry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "TOYOYA Prius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "TOYOYA Yaris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "TOYOYA 86");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "TOYOYA Sienna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "TOYOYA C-HR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "TOYOYA RAV4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "TOYOYA Highlander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "TOYOYA 4Runner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "TOYOYA Tacoma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "TOYOYA Tundra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "optgroup", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Ford Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Ford Bronco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Ford Ecosport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Ford Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Ford Endeavo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Ford Escape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Ford Everest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Ford Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Ford F-450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "optgroup", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "BMW 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "BMW 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "BMW X2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "BMW X3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "BMW X4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "BMW X5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "BMW 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "BMW Z4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "BMW 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "BMW 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "BMW X6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "BMW X7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "BMW 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "BMW 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "BMW X1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "optgroup", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Audi A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Audi A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Audi A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Audi A6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Audi S2 Coup\u00E9 B3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Audi S4 C4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Audi S2 Avant B4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Audi S2 Sedan B4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Audi Avant RS 2 P1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Audi S8 D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Audi A4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Audi A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Audi A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "optgroup", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Volkswagen Cross Sport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Volkswagen Tiguan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Volkswagen Jetta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Volkswagen Jetta GLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Volkswagen Passat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Volkswagen Arteon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "optgroup", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Mercedes Vito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Mercedes C190 AMG GT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Mercedes X253 GLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Mercedes W213 E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Mercedes BR470 X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Mercedes W177 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Mercedes C257 CLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Mercedes Mercedes-AMG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Mercedes W463 G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Mercedes EQC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Mercedes W167 GLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Mercedes W247 B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Mercedes C118 CLA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Mercedes X247 GLB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Mercedes X167 GLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "optgroup", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "NISSAN 370Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "NISSAN Altima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "NISSAN Armada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "NISSAN GT-R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "NISSAN Kicks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "NISSAN Maxima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "NISSAN Murano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "NISSAN NV Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "optgroup", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Mazda MX-5 RF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Mazda 2. Hatchback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Mazda 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Mazda CX-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Mazda CX-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "optgroup", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "VOLVO S90/V90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Volvo C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "VOLVO XC40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "VOLVO C70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "VOLVO XC90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "VOLVO C30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "optgroup", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Mitsubishi CROSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Mitsubishi XPANDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Mitsubishi OUTLANDER PHEV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Mitsubishi OUTLANDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Mitsubishi TRITON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Mitsubishi ASX/OUTLANDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Mitsubishi PAJERO SPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "optgroup", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Peugeot 508");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Peugeot 2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Peugeot 3008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Peugeot Boxer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Peugeot Expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Peugeot Pars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Peugeot 5008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "optgroup", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "KIA K4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "KIA K5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "KIA Rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "KIA Stinger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "KIA Ceed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "KIA Optima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "KIA Cadenza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "KIA XCeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "\n] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "optgroup", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Lexus GX 470");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Lexus LX 450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Lexus LX 470");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Lexus RX 270");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Lexus LM 350 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Lexus NX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Lexus CT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "optgroup", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Chevrolet Blazer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Chevrolet Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Chevrolet Equinox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Chevrolet Captiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Chevrolet Tahoe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Chevrolet Bolt EUV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Chevrolet Groove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "optgroup", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "GMC Yukon XL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "GMC Acadia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "GMC Terrain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "GMC Hummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "optgroup", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Hyundai Kona Electric\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Hyundai Elantra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Hyundai Grand i10 Nios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Hyundai Xcent Prime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Hyundai Sonata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Hyundai Grandeur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Hyundai Veracruz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Hyundai Veloster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Hyundai Coupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Hyundai Kona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Hyundai Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Hyundai elantra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Hyundai Pony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Hyundai Tucson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Hyundai Getz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Hyundai Genesis Coupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Hyundai Genesis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Hyundai Santa Fe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Hyundai i10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Hyundai Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Hyundai Aero City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Hyundai Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Hyundai elantra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](427, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](432, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](439, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThirdincuranceComponent_Template_select_ngModelChange_440_listener($event) { return ctx.statuesshow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](444, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](447, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](448, ThirdincuranceComponent_div_448_Template, 28, 3, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](449, ThirdincuranceComponent_div_449_Template, 28, 3, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](453, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](458, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](461, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](464, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](467, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](470, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](473, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](477, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "select", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](482, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](485, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](489, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](494, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](497, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](500, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_504_listener() { return ctx.scondform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_506_listener() { return ctx.resetform(ctx.secondFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](508, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](510, ThirdincuranceComponent_ng_template_510_Template, 2, 3, "ng-template", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "form", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](515, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](520, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThirdincuranceComponent_Template_input_ngModelChange_522_listener($event) { return ctx.dateOfBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](529, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "select", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThirdincuranceComponent_Template_select_ngModelChange_530_listener($event) { return ctx.noyear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](534, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](537, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](540, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](543, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](546, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](549, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](552, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](555, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](558, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](561, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](564, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](567, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](568, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](569, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_573_listener() { return ctx.thirdform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_575_listener() { return ctx.resetform(ctx.forthFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](579, ThirdincuranceComponent_ng_template_579_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](583, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](584, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](589, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](590, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](594, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](600, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "select", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](602, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](605, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](608, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](611, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](614, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](617, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](620, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](623, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](626, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](629, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](632, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](635, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](638, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](641, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](644, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](647, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](650, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](653, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](656, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_660_listener() { return ctx.forthform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdincuranceComponent_Template_button_click_662_listener() { return ctx.resetform(ctx.thirdFormGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](665, ThirdincuranceComponent_ng_template_665_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](669, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](673, ThirdincuranceComponent_div_673_Template, 15, 12, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](678, ThirdincuranceComponent_ng_template_678_Template, 2, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "h1", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](683, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](688, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](692, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](696, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](699, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](703, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](706, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](710, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](716, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](721, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](722, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](728, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](734, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](740, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](747, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](753, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](756, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](760, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](763, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "h3", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](767, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "h3", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, " Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0 = null;
        let tmp_6_0 = null;
        let tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 118, "insurace.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 120, "insurace.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstFormGroup.controls["Name"].invalid && (((tmp_4_0 = ctx.firstFormGroup.get("Name")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.firstFormGroup.get("Name")) == null ? null : tmp_4_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 122, "insurace.mail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstFormGroup.controls["Email"].invalid && (((tmp_6_0 = ctx.firstFormGroup.get("Email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.firstFormGroup.get("Email")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 124, "insurace.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstFormGroup.controls["Mobile"].invalid && (((tmp_8_0 = ctx.firstFormGroup.get("Mobile")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.firstFormGroup.get("Mobile")) == null ? null : tmp_8_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 126, "insurace.add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 128, "insurace.serial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 130, "insurace.type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 132, "insurace.otom"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 134, "insurace.manual"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 136, "insurace.use"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 138, "insurace.personal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 140, "insurace.fare"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 142, "insurace.load"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 144, "insurace.other"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 146, "insurace.value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 148, "insurace.year"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yearof);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yeararr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 150, "insurace.typeof"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](427, 152, "insurace.color"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](432, 154, "insurace.shase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](439, 156, "insurace.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.statuesshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](444, 158, "insurace.single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](447, 160, "insurace.maried"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statuesshow == "\u0645\u062A\u0632\u0648\u062C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statuesshow == "Married");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](453, 162, "insurace.profession"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](458, 164, "insurace.gover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](461, 166, "insurace.private"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](464, 168, "insurace.freelance"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](467, 170, "insurace.student"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](470, 172, "insurace.kasb"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](473, 174, "insurace.notworking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](477, 176, "insurace.owner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](482, 178, "insurace.male"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](485, 180, "insurace.female"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](489, 182, "insurace.licence"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](494, 184, "insurace.priva"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](497, 186, "insurace.general"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](500, 188, "insurace.otheer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forthFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](515, 190, "insuracedoc.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](520, 192, "insuracedoc.qustion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](529, 194, "insuracedoc.choosemonth"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.noyear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](534, 196, "insuracedoc.mon1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](537, 198, "insuracedoc.mon2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](540, 200, "insuracedoc.mon3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](543, 202, "insuracedoc.mon4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](546, 204, "insuracedoc.mon5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](549, 206, "insuracedoc.mon6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](552, 208, "insuracedoc.mon7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](555, 210, "insuracedoc.mon8"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](558, 212, "insuracedoc.mon9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](561, 214, "insuracedoc.mon10"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](564, 216, "insuracedoc.mon11"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](567, 218, "insuracedoc.mon12"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](583, 220, "insuracedoc.addres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](589, 222, "insuracedoc.dar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](594, 224, "insuracedoc.kada"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](600, 226, "insuracedoc.mohafza"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](605, 228, "insuracedoc.mohafza1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](608, 230, "insuracedoc.mohafza2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](611, 232, "insuracedoc.mohafza3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](614, 234, "insuracedoc.mohafza4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](617, 236, "insuracedoc.mohafza5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](620, 238, "insuracedoc.mohafza6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](623, 240, "insuracedoc.mohafza7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](626, 242, "insuracedoc.mohafza8"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](629, 244, "insuracedoc.mohafza9"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](632, 246, "insuracedoc.mohafza10"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](635, 248, "insuracedoc.mohafza11"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](638, 250, "insuracedoc.mohafza12"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](641, 252, "insuracedoc.mohafza13"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](644, 254, "insuracedoc.mohafza14"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](647, 256, "insuracedoc.mohafza15"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](650, 258, "insuracedoc.mohafza16"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](653, 260, "insuracedoc.mohafza17"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](656, 262, "insuracedoc.mohafza18"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](669, 264, "company.toptitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](683, 266, "bill.thank"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](688, 268, "bill.elkher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](692, 270, "bill.please"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](696, 272, "bill.type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](699, 274, "bill.elkher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](703, 276, "bill.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](706, 278, "bill.tameni"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](710, 280, "bill.number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.random);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](716, 282, "bill.quntity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.item.NoDocument, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](721, 284, "bill.info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](728, 286, "bill.nameper"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](734, 288, "bill.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](740, 290, "bill.mail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](747, 292, "bill.tasalsol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.serialNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](753, 294, "bill.date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](756, 296, ctx.dateOfBirth, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](760, 299, "bill.dateend"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](763, 301, ctx.showAge, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](767, 304, "bill.vechtype"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.carType);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], ngx_print__WEBPACK_IMPORTED_MODULE_10__["NgxPrintDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: [".ng-template[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #15c280 !important;\n}\n\n.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\nh1[_ngcontent-%COMP%] {\n  direction: rtl;\n  font-size: 30px;\n  font-weight: bolder;\n}\n\n.flexheader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.btnColor[_ngcontent-%COMP%] {\n  background-color: #4f546777;\n}\n\n.iconColor[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 13px;\n}\n\n.btnEdirColor[_ngcontent-%COMP%] {\n  background-color: #E46A76;\n  width: 100%;\n  margin: 0;\n}\n\n.fas[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n}\n\n.divInput[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right !important;\n  display: flex;\n  flex-direction: column;\n}\n\n.divheader[_ngcontent-%COMP%] {\n  border-radius: 50px !important;\n  border-width: 2px;\n}\n\noption[_ngcontent-%COMP%] {\n  border-top: black;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 100%;\n  background-color: #242423;\n  height: 1px;\n}\n\n.pform3[_ngcontent-%COMP%] {\n  direction: rtl;\n  font-size: 35px;\n  font-weight: bolder;\n}\n\n.divInput2[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right !important;\n}\n\n.font2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n  .mat-horizontal-stepper-header {\n  pointer-events: none !important;\n}\n\noption[_ngcontent-%COMP%] {\n  margin: 3px;\n  margin-bottom: 5px;\n  font-size: 17px;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: rgba(245, 235, 224, 0.445);\n}\n\n.card[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 250px;\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  border-radius: 6px;\n  color: #333333;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n}\n\n.card-header-primary[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #942bf7, #861beb);\n}\n\n.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%], .card[class*=bg-][_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n}\n\n.card[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  line-height: 33px;\n}\n\n.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%] {\n  margin: 0px 15px 0;\n  padding: 0;\n  position: relative;\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #999999;\n  padding: 15px;\n  margin-top: -20px;\n  margin-right: 15px;\n  float: left;\n}\n\n.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  float: none;\n  display: inline-block;\n  margin-right: 0;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n  text-align: center;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 56px;\n  width: 70px;\n  height: 56px;\n  text-align: center;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.card-category[_ngcontent-%COMP%] {\n  color: #020202;\n  font-size: 22px;\n  font-weight: bold;\n  font-family: \"Times New Roman\", Times, serif;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #3C4858;\n  text-align: center;\n}\n\n.btnsign[_ngcontent-%COMP%] {\n  background-color: #E64A19;\n  color: white;\n}\n\n.stats[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.card-header[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n  margin-top: 20px;\n}\n\n.card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%] {\n  padding-top: 0rem;\n  border: 0;\n  border-radius: 6px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  background: transparent;\n}\n\n.bckfont[_ngcontent-%COMP%] {\n  color: #0b550b;\n}\n\n.flexdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.boldfont[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.titleinsurance[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n\n.inputprice[_ngcontent-%COMP%] {\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"30\"><text x=\"5\" y=\"19\" style=\"font: bold 16px Arial;\">$</text></svg>') no-repeat;\n}\n\n[_nghost-%COMP%]     .p-dropdown {\n  width: 14rem;\n}\n\noptgroup[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 17px;\n  font-weight: bold;\n  direction: ltr;\n}\n\n.ss[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 255, 0.411);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGhpcmRpbmN1cmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUhKOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUlBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBLFlBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQURGOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFFSSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7RUFHQyxhQUFBO0VBQ0Qsc0JBQUE7QUFMSjs7QUFhQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFhQTtFQUNFLGlCQUFBO0FBVkY7O0FBWUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBVEo7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7QUFUSjs7QUFjQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQVpKOztBQWNBO0VBQ0ksK0JBQUE7QUFYSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWEo7O0FBY0E7RUFFSSw0Q0FBQTtBQVpKOztBQWdCQTtFQUNJLG1CQUFBO0FBYko7O0FBZ0JFOzs7RUFHRSxzQkFBQTtBQWJKOztBQWdCRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtBQWJKOztBQWdCRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWJKOztBQWdCRTtFQUNJLGFBQUE7RUFDRixTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLCtHQUFBO0FBYko7O0FBaUJFO0VBRUUsb0RBQUE7QUFmSjs7QUFrQkU7RUFFRSxvREFBQTtBQWhCSjs7QUFtQkU7RUFFRSxvREFBQTtBQWpCSjs7QUFvQkU7RUFDRSxvREFBQTtBQWpCSjs7QUFtQkU7RUFDRSxvREFBQTtBQWhCSjs7QUFvQkU7O0VBRUUsV0FBQTtBQWpCSjs7QUFvQkU7RUFDRSwyQ0FBQTtBQWpCSjs7QUFxQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBc0JFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFuQko7O0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXBCSjs7QUF1QkU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBcEJKOztBQXlCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF0Qko7O0FBd0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxpQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBckJKOztBQXdCRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBckJKOztBQXdCRTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtBQXRCSjs7QUF5QkE7RUFFSSxvQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FBdkJKOztBQTBCRTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBdkJKOztBQTBCRTtFQUNBLGFBQUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQXZCSjs7QUEwQkU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBdkJKOztBQTBCRTtFQUNFLGNBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXZCSjs7QUEyQkU7RUFDRSxpQkFBQTtBQXhCSjs7QUEyQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBeEJKOztBQTJCRTtFQUNFLG9MQUFBO0FBeEJKOztBQTRCRTtFQUNFLFlBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF6Qko7O0FBNEJFO0VBQ0Usd0NBQUE7QUF6QkoiLCJmaWxlIjoidGhpcmRpbmN1cmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqe1xyXG4vLyAgICAgZGlyZWN0aW9uOiBydGw7XHJcbi8vIH1cclxuXHJcbi5uZy10ZW1wbGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiKDIxLCAxOTQsIDEyOCkgIWltcG9ydGFudDtcclxufVxyXG4ucnRse1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBGaXJlZm94ICovXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuaDF7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG59XHJcbi5mbGV4aGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ0bkNvbG9ye1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjU0Njc3NztcclxufVxyXG5cclxuLmljb25Db2xvcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbn1cclxuXHJcbi5idG5FZGlyQ29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ2QTc2O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mYXN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mb250e1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uZGl2SW5wdXR7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8gZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jY3tcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJyb3duICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXZoZWFkZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxub3B0aW9ue1xyXG4gIGJvcmRlci10b3A6IGJsYWNrO1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY2xlYXI6Ym90aDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI0MjQyMztcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4ucGZvcm0ze1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uZGl2SW5wdXQye1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCFpbXBvcnRhbnQ7XHJcblxyXG5cclxufVxyXG5cclxuLmZvbnQye1xyXG5cclxuICAgIGZvbnQtc2l6ZToxOHB4IDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm9wdGlvbntcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjM1LCAyMjQsIDAuNDQ1KVxyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIH1cclxuICBcclxuICAqLFxyXG4gICo6OmJlZm9yZSxcclxuICAqOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBodG1sIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuIFxyXG4gIC5jYXJkIC5jYXJkLWhlYWRlci1pbmZvIC5jYXJkLWljb25cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC1pY29uXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZiYjZhLCAjNDNhMDQ3KTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgLmNhcmQtaGVhZGVyLXdhcm5pbmcgLmNhcmQtaWNvblxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXIgLmNhcmQtaWNvbntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2U1MzkzNSk7XHJcbiAgfVxyXG4gIC5jYXJkLWhlYWRlci1wcmltYXJ5IC5jYXJkLWljb257XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM5NDJiZjcsICM4NjFiZWIpO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgW2NsYXNzKj1cImNhcmQtaGVhZGVyLVwiXSxcclxuICAuY2FyZFtjbGFzcyo9XCJiZy1cIl0ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jYXJkIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uIGkge1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNhcmQgW2NsYXNzKj1cImNhcmQtaGVhZGVyLVwiXSB7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuLy8gICAuY2FyZCBbY2xhc3MqPVwiY2FyZC1oZWFkZXItXCJdIFxyXG4gIC5jYXJkLWljb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCBbY2xhc3MqPVwiY2FyZC1oZWFkZXItXCJdIC5jYXJkLXRleHQge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gaSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpbWcge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc3RhdHMgLmNhcmQtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtY2F0ZWdvcnkge1xyXG4gICAgY29sb3I6ICMwMjAyMDI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzNDNDg1ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG5zaWdue1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjRBMTk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyB3aWR0aDogODAlO1xyXG59XHJcbi5zdGF0c3tcclxuICAgIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcisuY2FyZC1mb290ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSsuY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmJja2ZvbnR7XHJcbiAgICBjb2xvcjogcmdiKDExLCA4NSwgMTEpO1xyXG4gIH1cclxuXHJcbiAgLmZsZXhkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmJvbGRmb250e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGVpbnN1cmFuY2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0cHJpY2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiMzBcIj48dGV4dCB4PVwiNVwiIHk9XCIxOVwiIHN0eWxlPVwiZm9udDogYm9sZCAxNnB4IEFyaWFsO1wiPiQ8L3RleHQ+PC9zdmc+Jykgbm8tcmVwZWF0O1xyXG5cclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAucC1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbiAgfVxyXG5cclxuICBvcHRncm91cHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBcclxuICB9XHJcbiAgLnNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNDExKTtcclxuXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdincuranceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thirdincurance',
                templateUrl: './thirdincurance.component.html',
                styleUrls: ['./thirdincurance.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_services_add_insurance_service__WEBPACK_IMPORTED_MODULE_3__["AddInsuranceService"] }, { type: src_app_services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "jPq6":
/*!*********************************************************!*\
  !*** ./src/app/Components/login/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");




// import { ObservableMedia, MediaChange } from '@angular/flex-layout';
class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    full() {
        this.router.navigate(['/full']);
    }
    third() {
        this.router.navigate(['/third']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 0, consts: [[1, "WelcomeText", "col-5"], [1, "flexx"], [1, "btn", "btn-info", "mm", 3, "click"], [1, "btn", "btn-danger", "mc", 3, "click"], [1, "pp", "w-100"], ["dir", "rtl"], [2, "margin-left", "15px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() { return ctx.full(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0623\u0645\u064A\u0646 \u0634\u0627\u0645\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.third(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u062A\u0623\u0645\u064A\u0646 \u0636\u062F \u0627\u0644\u063A\u064A\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ibn AL-Haitham Car Insurance Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 : Implementation Of Car Insurance Management System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0627\u0639\u062F\u0627\u062F \u0627\u0644\u0637\u0644\u0628\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 1 : \u0645\u062D\u0645\u062F \u0642\u062D\u0637\u0627\u0646 \u062E\u0644\u064A\u0641\u0629 \u0643\u0627\u0638\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 2 : \u0639\u0644\u064A \u0645\u062D\u0645\u062F \u0639\u0628\u064A\u062F \u063A\u0632\u0627\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0628\u0623\u0634\u0631\u0627\u0641 \u0627\u0644\u0627\u0633\u062A\u0627\u0630 : \u0645.\u062F \u0627\u062D\u0645\u062F \u0635\u0628\u064A\u062D \u062A\u0648\u0641\u064A\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Dir"]], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n\n.WelcomeText[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  width: 100% !important;\n  margin: 20% 30%;\n  text-align: center;\n}\n\n.pp[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 1% 57%;\n  text-align: center;\n  margin-bottom: 60px !important;\n}\n\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  font-size: 25px;\n  font-weight: bold;\n}\n\nh3[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  font-size: 20px;\n  font-weight: 400;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  font-weight: 500;\n}\n\n@media (max-width: 768px) {\n  .pp[_ngcontent-%COMP%] {\n    margin: 82% 1%;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 70px;\n    font-size: 20px;\n    font-weight: bold;\n  }\n}\n\n@media (max-width: 568px) {\n  .mc[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 150% !important;\n    height: 60px !important;\n    font-size: 15px !important;\n  }\n\n  .flexx[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    justify-content: space-around !important;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 90%;\n  }\n}\n\n.mm[_ngcontent-%COMP%] {\n  margin-bottom: 20px !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 70px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\nheader[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('22.jpg');\n  height: 100vh;\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n}\n\n.flexx[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 180%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFPQTtFQUNFLGtCQUFBO0VBR0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsOEJBQUE7QUFQRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0U7SUFFRSxjQUFBO0VBVEY7O0VBV0Y7SUFDRSxlQUFBO0VBUkE7O0VBV0Y7SUFDRSxlQUFBO0VBUkE7O0VBV0Y7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQVJBO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLGlCQUFBO0VBWkY7O0VBY0E7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsMEJBQUE7RUFYRjs7RUFpQkE7SUFDRSw4QkFBQTtJQUNBLHdDQUFBO0VBZEY7O0VBa0JGO0lBQ0UsZUFBQTtFQWZBOztFQWtCRjtJQUNFLGNBQUE7RUFmQTtBQUNGOztBQW1CQTtFQUNFLDhCQUFBO0FBakJGOztBQW9CQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakJGOztBQXNCQTtFQUNFLHdGQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBcEJGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWV2ZW50cyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxufVxyXG5cclxuXHJcbi5XZWxjb21lVGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8vIGhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luOiAyMCUgMzAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG5cclxuLnBwe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbjogMSUgNTclO1xyXG4gIC8vIDEwMiUgMTlcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuaDF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcHtcclxuICAgXHJcbiAgICBtYXJnaW46IDgyJSAxJTtcclxufVxyXG5oMXtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuXHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU2OHB4KSB7XHJcbiAgLm1je1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxuICAgIC8vIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG4gIFxyXG4gIH1cclxuICAuZmxleHh7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3cgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG5oMXtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG5cclxufVxyXG4ubW17XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG5cclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNSkscmdiYSgwLDAsMCwwLjUpKSx1cmwoLi4vLi4vLi4vLi4vYXNzZXRzLzIyLmpwZyk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZsZXh4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIHdpZHRoOiAxODAlO1xyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "r3/4":
/*!***************************************************************!*\
  !*** ./src/app/Components/login/contact/contact.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 55, vars: 12, consts: [[1, "all"], [1, "firstPart"], [1, "cover"], [1, "text", "text-center"], [1, "faqs", "container"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-10", "how"], [1, "col-lg-1", "col-md-1", "col-sm-1", "arrow"], [1, "fas", "fa-chevron-right"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mohq418@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "alimohammedobeid@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "07707934952");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 07825564644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "conect.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, "conect.conecthead"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, "conect.mail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 10, "conect.toconnect"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".firstPart[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding-bottom: 2em;\n}\n\n.cover[_ngcontent-%COMP%] {\n  background-image: url('contact.webp');\n  height: 440px;\n  background-size: cover;\n}\n\n.cover[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  height: 340px;\n  flex-direction: column;\n}\n\n.cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3em;\n  font-weight: 500;\n}\n\n.cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 3em;\n}\n\n.cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 3em;\n}\n\n.cover[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  width: 8em;\n}\n\n.cover[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n  color: white;\n  font-size: 1.5em;\n}\n\n.faqs[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  line-height: 2.5em;\n}\n\n.faqs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 2em;\n  text-align: center;\n  margin-top: 2em;\n  margin-bottom: 1em;\n}\n\n.faqs[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f4b4b;\n  font-size: 1.1em;\n}\n\n.faqs[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #240a96;\n  text-decoration: none;\n}\n\n.faqs[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.browse[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 2em;\n  text-align: center;\n  margin-top: 2.5em;\n}\n\n.browse[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.browse[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 0em transparent;\n  margin-top: 2em;\n  transition: 0.3s;\n}\n\n.browse[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);\n  transform: translate(0, -10px);\n}\n\n.browse[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 5em;\n  display: block;\n  margin: auto;\n  margin-top: 1em;\n}\n\n.browse[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.browse[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 0.9em;\n}\n\n.helpFind[_ngcontent-%COMP%] {\n  margin-top: 4em;\n}\n\n.helpFind[_ngcontent-%COMP%]   .find[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 600;\n}\n\n.helpFind[_ngcontent-%COMP%]   .ask[_ngcontent-%COMP%] {\n  border: 0.1em solid #f44f1b;\n  width: 11em;\n  margin: auto;\n  margin-top: 2em;\n  padding: 0.7em;\n}\n\n.helpFind[_ngcontent-%COMP%]   .ask[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f44f1b;\n  font-size: 1.5em;\n}\n\n.helpFind[_ngcontent-%COMP%]   .ask[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #f44f1b;\n  font-weight: 600;\n}\n\n@media only screen and (max-width: 768px) {\n  .firstPart[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 4em;\n  }\n\n  .firstPart[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    margin-left: 1em;\n  }\n\n  .faqs[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .faqs[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.75em;\n  }\n\n  .browse[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n\n@media only screen and (max-width: 479px) {\n  .firstPart[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    width: 75%;\n    height: 1.5em;\n  }\n\n  .cover[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 2em;\n  }\n\n  .faqs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .faqs[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .faqs[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .how[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.75em;\n  }\n\n  .faqs[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    width: 5%;\n  }\n\n  .browse[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n\n.all[_ngcontent-%COMP%]:lang(ar) {\n  direction: rtl;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHRTtFQUNFLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7QUFJSjs7QUFGRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQU1KOztBQUpFO0VBQ0UsV0FBQTtBQU9KOztBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtBQU9KOztBQUxFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFORTtFQUNFLHlDQUFBO0VBQ0EsOEJBQUE7QUFTSjs7QUFQRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFVSjs7QUFSRTtFQUNFLGdCQUFBO0FBV0o7O0FBVEU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFSRTtFQUNFLGVBQUE7QUFXSjs7QUFURTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFWRTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBY0o7O0FBWkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWVKOztBQVpFO0VBSUU7SUFDRSxVQUFBO0VBWUo7O0VBVkU7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBYUo7O0VBWEU7SUFFRSxVQUFBO0VBYUo7O0VBWEU7SUFDRSxpQkFBQTtFQWNKOztFQVpFO0lBQ0UsZ0JBQUE7RUFlSjtBQUNGOztBQWJFO0VBQ0U7SUFDRSxnQkFBQTtFQWVKOztFQWJFO0lBQ0UsVUFBQTtJQUNBLGFBQUE7RUFnQko7O0VBZEU7SUFDRSxXQUFBO0VBaUJKOztFQWRFO0lBQ0UsZ0JBQUE7RUFpQko7O0VBZkU7SUFDRSxVQUFBO0VBa0JKOztFQWhCRTtJQUNFLGlCQUFBO0VBbUJKOztFQWpCRTtJQUNFLFNBQUE7RUFvQko7O0VBbEJFO0lBQ0UsZ0JBQUE7RUFxQko7QUFDRjs7QUFsQkU7RUFDRSxjQUFBO0FBb0JKOztBQWhCRTtFQUNFLGFBQUE7QUFtQko7O0FBZkU7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBa0JOIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3RQYXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gIH1cclxuICBcclxuICAvLyBTdGFydCBjb3ZlclxyXG4gIC5jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL0Fib3V0L2NvbnRhY3Qud2VicCk7XHJcbiAgICBoZWlnaHQ6IDQ0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmNvdmVyIC50ZXh0IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmNvdmVyIGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmNvdmVyIC5zZWFyY2gge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gIH1cclxuICAuY292ZXIgLnNlYXJjaCBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICB9XHJcbiAgLmNvdmVyIC5pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XHJcbiAgICB3aWR0aDogOGVtO1xyXG4gIH1cclxuICAuY292ZXIgLmljb24gaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuICAvL0VuZCBjb3ZlclxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvL1N0YXJ0IEZBUXNcclxuICAuZmFxcyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgLy8gaGVpZ2h0OiAxOGVtO1xyXG4gIH1cclxuICAuZmFxcyBoMSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgfVxyXG4gIC5mYXFzIC5ob3cgYSB7XHJcbiAgICBjb2xvcjogIzRmNGI0YjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG4gIC5mYXFzIC5ob3cgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzI0MGE5NjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmZhcXMgLmFycm93IGkge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIC8vRW5kIEZBUXNcclxuICAvL1N0YXJ0IEJyb3dzZSBieSBjYXRlZ29yeVxyXG4gIC5icm93c2UgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgfVxyXG4gIC5icm93c2UgLmNhdGVnb3J5IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmJyb3dzZSAuY2F0ZWdvcnkgLmNhcmQge1xyXG4gICAgYm9yZGVyOiAwZW0gdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICAuYnJvd3NlIC5jYXRlZ29yeSAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcclxuICB9XHJcbiAgLmJyb3dzZSAuY2F0ZWdvcnkgLmNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcbiAgLmJyb3dzZSAuY2F0ZWdvcnkgLmNhcmQgLm1haW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcbiAgLmJyb3dzZSAuY2F0ZWdvcnkgLmNhcmQgLnN1YiB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG4gIC8vRW5kIEJyb3dzZSBieSBjYXRlZ29yeVxyXG4gIC8vU3RhcnQgZmluZFxyXG4gIC5oZWxwRmluZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgfVxyXG4gIC5oZWxwRmluZCAuZmluZCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLmhlbHBGaW5kIC5hc2sge1xyXG4gICAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjZjQ0ZjFiO1xyXG4gICAgd2lkdGg6IDExZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBwYWRkaW5nOiAwLjdlbTtcclxuICB9XHJcbiAgLmhlbHBGaW5kIC5hc2sgaSB7XHJcbiAgICBjb2xvcjogI2Y0NGYxYjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG4gIC5oZWxwRmluZCAuYXNrIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjZjQ0ZjFiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLy9FbmQgZmluZFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vICAgYm9keSB7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiA1MDBlbTtcclxuICAgIC8vICAgfVxyXG4gICAgLmZpcnN0UGFydCAuY292ZXIgLnNlYXJjaCAuaWNvbiB7XHJcbiAgICAgIHdpZHRoOiA0ZW07XHJcbiAgICB9XHJcbiAgICAuZmlyc3RQYXJ0IC5jb3ZlciAuc2VhcmNoIC5pY29uIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgfVxyXG4gICAgLmZhcXMge1xyXG4gICAgICAvLyBoZWlnaHQ6IDIwZW07XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuZmFxcyAuaG93IGEge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIH1cclxuICAgIC5icm93c2UgLmNhdGVnb3J5IC5jYXJkIC5zdWIge1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcbiAgICAuZmlyc3RQYXJ0IC5jb3ZlciBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgICAuY292ZXIgLnNlYXJjaCB7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIGhlaWdodDogMS41ZW07XHJcbiAgICB9XHJcbiAgICAuY292ZXIgLnNlYXJjaCBpbnB1dCB7XHJcbiAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZhcXMgaDEge1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgLmZhcXMgLnJvdyAuaG93IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5mYXFzIC5yb3cgLmhvdyBhIHtcclxuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICB9XHJcbiAgICAuZmFxcyAucm93IC5hcnJvdyB7XHJcbiAgICAgIHdpZHRoOiA1JTtcclxuICAgIH1cclxuICAgIC5icm93c2UgaDEge1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYWxsOmxhbmcoYXIpIHtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gIH1cclxuICBcclxuICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgLmFycm93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8vIH1cclxuXHJcbiAgcHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_login_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/login/aboutus/aboutus.component */ "40xS");
/* harmony import */ var _Components_login_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/login/contact/contact.component */ "r3/4");
/* harmony import */ var _Components_login_full_insurance_full_insurance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/login/full-insurance/full-insurance.component */ "BPly");
/* harmony import */ var _Components_login_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/login/home/home.component */ "jPq6");
/* harmony import */ var _Components_login_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/login/not-found/not-found.component */ "6NBV");
/* harmony import */ var _Components_login_thirdincurance_thirdincurance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/login/thirdincurance/thirdincurance.component */ "fDwi");










const routes = [
    // { path: 'List', component: DashbordMainComponent },
    { path: 'home', component: _Components_login_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'full', component: _Components_login_full_insurance_full_insurance_component__WEBPACK_IMPORTED_MODULE_4__["FullInsuranceComponent"] },
    { path: 'third', component: _Components_login_thirdincurance_thirdincurance_component__WEBPACK_IMPORTED_MODULE_7__["ThirdincuranceComponent"] },
    { path: 'about', component: _Components_login_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"] },
    { path: 'contact', component: _Components_login_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _Components_login_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yYUS":
/*!***************************************************************!*\
  !*** ./src/app/Components/login/sign-up/sign-up.component.ts ***!
  \***************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "LegZ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_signauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/signauth.service */ "X9iw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function SignUpComponent_div_13_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_13_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "example@example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_13_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_13_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userInfo.controls["Email"].errors == null ? null : ctx_r0.userInfo.controls["Email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userInfo.controls["Email"].hasError("email"));
} }
function SignUpComponent_div_19_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_19_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "your Mobile must be 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_19_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "your Mobile must be 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_19_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_19_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignUpComponent_div_19_small_3_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userInfo.controls["mobile"].errors == null ? null : ctx_r1.userInfo.controls["mobile"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userInfo.controls["mobile"].errors == null ? null : ctx_r1.userInfo.controls["mobile"].errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userInfo.controls["mobile"].errors == null ? null : ctx_r1.userInfo.controls["mobile"].errors.maxlength);
} }
function SignUpComponent_div_25_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Your Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_25_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "your password must be 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpComponent_div_25_small_1_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpComponent_div_25_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userInfo.controls["Password"].errors == null ? null : ctx_r2.userInfo.controls["Password"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userInfo.controls["Password"].errors == null ? null : ctx_r2.userInfo.controls["Password"].errors.minlength);
} }
class SignUpComponent {
    constructor(_formBuilder, dialogRef, dialog, authSer) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.authSer = authSer;
        this.listadd = { id: '', Email: '', Password: '', Name: '' };
        this.userInfo = this._formBuilder.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)])
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], {
        // width:'250px'
        });
    }
    ngOnInit() {
    }
    onNoClick() {
        this.signupp();
        this.dialogRef.close();
    }
    hasacc() {
        this.openDialog();
        this.dialogRef.close();
    }
    signupp() {
        ////old////
        this.listadd = this.userInfo.value;
        // this.listadd.Email=this.Email.value;
        // this.listadd.Password=this.Password.value;
        // this.listadd.Name=this.Password.value;
        // this.listadd.JoinDate = Date.now()
        console.log(this.listadd);
        console.log(this.listadd.Email);
        console.log(this.listadd.Password);
        console.log(this.listadd.Name);
        this.authSer
            .signup(this.listadd)
            .then((result) => {
            var _a;
            this.authSer
                .addUser((_a = result.user) === null || _a === void 0 ? void 0 : _a.uid, this.listadd)
                .then(() => {
                // localStorage.setItem('currentUser', result.user?.uid)
                // localStorage.setItem('currentUserName', this.listadd.Name)
                localStorage.setItem('currentUserEmail', this.listadd.Email);
                this.authSer.userLogin = false;
                // this.router.navigate(['/'])
                // window.history.back()
                // window.location.reload()
            })
                .catch((errr) => console.log(errr));
        })
            .catch((err) => {
            // this.errorMsg = err.message
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signauth_service__WEBPACK_IMPORTED_MODULE_4__["SignauthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 34, vars: 19, consts: [[1, "divAll", "row"], [1, "col-8", "col-sm-12", "col-md-6", "col-lg-8", "col-xs-12"], [1, "divInput"], [3, "formGroup"], [1, "form-group"], [1, "font"], ["type", "email", "formControlName", "Email", 1, "form-control"], [4, "ngIf"], ["type", "tel", "formControlName", "mobile", 1, "form-control"], ["type", "Password", "formControlName", "Password", 1, "form-control"], [1, "btndiv"], ["type", "submit", "value", "SignUp", 1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "divacc"], [3, "click"], [1, "d-inline", "d-lg-inline", "d-md-inline", "col-4", "col-sm-0", "col-md-6", "col-lg-4", "col-xs-0", "d-sm-none", "d-xs-none", "divSecond"], ["src", "../../../../assets/comp.png", 1, "w-100", "d-xs-none", "imgg"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignUpComponent_div_13_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignUpComponent_div_19_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignUpComponent_div_25_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_input_click_27_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_a_click_29_listener() { return ctx.hasacc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        let tmp_5_0 = null;
        let tmp_7_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "sign.head"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "sign.mail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo.controls["Email"].invalid && (((tmp_3_0 = ctx.userInfo.get("Email")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userInfo.get("Email")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, "sign.mob"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo.controls["mobile"].invalid && (((tmp_5_0 = ctx.userInfo.get("mobile")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.userInfo.get("mobile")) == null ? null : tmp_5_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "sign.pass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo.controls["Password"].invalid && (((tmp_7_0 = ctx.userInfo.get("Password")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.userInfo.get("Password")) == null ? null : tmp_7_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 17, "sign.have"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".divAll[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n\n.divSecond[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  font-size: xx-large;\n  font-weight: bold;\n}\n\n.divInput[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right !important;\n  display: flex;\n  flex-direction: column;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #645d5d;\n}\n\n.imgg[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  align-self: center;\n  align-content: center;\n}\n\n.btndiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n.divacc[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 19px;\n  font-weight: 400;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1BLHlCQUFBO0FBSkE7O0FBT0E7RUFDSSx5QkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0VBR0MsYUFBQTtFQUNELHNCQUFBO0FBTEo7O0FBU0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVBKOztBQVVBO0VBQ0ssYUFBQTtFQUNELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQVBKOztBQVVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQSiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdkFsbHtcclxuXHJcbiAgICAvLyBkaXJlY3Rpb246IHJ0bDtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLy8gZmxleC13cmFwOiBub3dyYXA7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcclxufVxyXG5cclxuLmRpdlNlY29uZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NiwgMjQ2LCAyNDYpO1xyXG59XHJcblxyXG5oMXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGl2SW5wdXR7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8gZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5mb250e1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwgOTMsIDkzKTtcclxufVxyXG5cclxuLmltZ2d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuZGl2e1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmRpdmFjY3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _services_signauth_service__WEBPACK_IMPORTED_MODULE_4__["SignauthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map