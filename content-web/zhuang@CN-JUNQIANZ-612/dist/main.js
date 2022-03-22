(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/97o":
/*!*************************************************!*\
  !*** ./src/app/sessions/sessions.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb25zL3Nlc3Npb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/DevOpsAdmin/fabmedical/Fabmedical/content-web/src/main.ts */"zUnb");


/***/ }),

/***/ "1cYQ":
/*!****************************************!*\
  !*** ./src/app/stats/stats.service.ts ***!
  \****************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "F5nt");




var StatsService = /** @class */ (function () {
    function StatsService(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    StatsService.prototype.getStats = function () {
        return this.http.get('/api/stats');
    };
    StatsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    StatsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
var environment = {
    production: false,
    baseUrl: 'http://localhost:3001/'
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

/***/ "DKUH":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contentband autosize alt-color2\" style=\"text-align: center;\">\r\n    <div class=\"row\">\r\n        <div class=\"small-12 large-12 column\">\r\n            <img src=\"assets/images/logo-contoso.png\">\r\n            <hr class=\"primary\" align=\"center\" style=\"border-top-color: #49a2a2; width: 120px;\">\r\n            <p class=\"lead\" style=\"font-size: 1.2rem; font-weight: 100;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum quis justo eget aliquet. Vestibulum eget lacinia metus. Sed dignissim tincidunt pellentesque. Donec sem neque, mollis a nibh vitae, luctus laoreet est. Proin id dapibus sapien. Etiam vitae odio eget sem tempus consectetur. Fusce ac vehicula erat. Nunc pharetra, turpis sed dapibus accumsan, nibh augue fermentum odio, non laoreet dui diam ac lacus. In hac habitasse platea dictumst. Etiam nisi neque, pulvinar eleifend molestie eget, interdum non nisl. Cras ligula urna, porta sed justo ut, facilisis auctor ligula. Fusce porta urna at tempus varius.</p>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "I+nI":
/*!************************************************!*\
  !*** ./src/app/sessions/sessions.component.ts ***!
  \************************************************/
/*! exports provided: SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsComponent", function() { return SessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sessions.component.html */ "RoPg");
/* harmony import */ var _sessions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessions.component.css */ "/97o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sessions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions.service */ "lVJV");





var SessionsComponent = /** @class */ (function () {
    function SessionsComponent(sessionsService) {
        this.sessionsService = sessionsService;
        this.sessions = [];
    }
    SessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionsService.getSessions().subscribe(function (res) {
            _this.sessions = res.page.list;
        });
    };
    SessionsComponent.ctorParameters = function () { return [
        { type: _sessions_service__WEBPACK_IMPORTED_MODULE_4__["SessionsService"] }
    ]; };
    SessionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sessions',
            template: _raw_loader_sessions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sessions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], SessionsComponent);
    return SessionsComponent;
}());



/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "RoPg":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sessions/sessions.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a name=\"sessions\"></a>\r\n<div class=\"contentband bottom-ruled autosize\">\r\n    <div class=\"row\">\r\n        <div class=\"small-12 large-12\">\r\n            <h1 class=\"page-title\"><span class=\"header-icon sessions\" style=\"text-indent: 0px\">9</span>sessions</h1>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"small-12 large-12 column band-panel center\">\r\n\r\n            <ul id=\"session-list\" class=\"session-list-detailed\">\r\n                <li *ngFor=\"let session of sessions\">\r\n                    <h1>{{session.title}}</h1>\r\n                    <h2>\r\n                        <span *ngFor=\"let speakerName of session.speakerNames last as isLast\">\r\n                            <span [innerHTML]=\"speakerName\"></span><span *ngIf=\"!isLast\"> - </span></span>\r\n                    </h2>\r\n                    <p class=\"abstract\" [innerHTML]=\"session.myAbstract\"></p>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Sl9i":
/*!*************************************************!*\
  !*** ./src/app/speakers/speakers.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWFrZXJzL3NwZWFrZXJzLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "F5nt");





var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'content-web';
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.appService.getSettings();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TtVv":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stats.component.html */ "jPZC");
/* harmony import */ var _stats_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.component.css */ "DKUH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats.service */ "1cYQ");
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../window.provider */ "sX8H");






var StatsComponent = /** @class */ (function () {
    function StatsComponent(statsService, window) {
        this.statsService = statsService;
        this.window = window;
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statsService.getStats().subscribe(function (res) {
            _this.stats = res;
        });
    };
    StatsComponent.ctorParameters = function () { return [
        { type: _stats_service__WEBPACK_IMPORTED_MODULE_4__["StatsService"] },
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_window_provider__WEBPACK_IMPORTED_MODULE_5__["WINDOW"],] }] }
    ]; };
    StatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-stats',
            template: _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_stats_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"off-canvas-wrap\" data-offcanvas>\r\n  <div class=\"inner-wrap\">\r\n\r\n    <!-- Off Canvas Menu -->\r\n    <aside class=\"right-off-canvas-menu\">\r\n      <ul class=\"off-canvas-list\">\r\n        <li class=\"\"><a [routerLink]=\"['/speakers']\" routerLinkActive=\"router-link-active\">Speakers</a></li>\r\n        <li class=\"\"><a [routerLink]=\"['/sessions']\" routerLinkActive=\"router-link-active\">Sessions</a></li>\r\n        <li class=\"\"><a [routerLink]=\"['/stats']\" routerLinkActive=\"router-link-active\">Stats</a></li>\r\n  </ul>\r\n    </aside>\r\n    <div class=\"contain-to-grid sticky show-for-small-up fixed\">\r\n      <nav id=\"top-bar\" data-topbar class=\"top-bar\" role=\"navigation\" data-options=\"sticky_on: small-up\">\r\n        <ul class=\"title-area\">\r\n          <li class=\"name\">\r\n            <h1 class=\"contosoevents\"><a href=\"/\">Contoso Neuro 2017 Conference</a></h1>\r\n          </li>\r\n          <li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span>Menu</span></a></li>\r\n        </ul>\r\n        <section class=\"top-bar-section\">\r\n          <!-- Right Nav Section -->\r\n          <section id=\"mobile-nav\" class=\"right-small show-for-medium-down\">\r\n            <a class=\"right-off-canvas-toggle menu-icon\" href=\"#\"><span class=\"\"></span></a>\r\n          </section>\r\n          <ul id=\"desktop-nav\" class=\"right buttons show-for-large-up\">\r\n            <li class=\"\"><a [routerLink]=\"['/speakers']\" routerLinkActive=\"router-link-active\">Speakers</a></li>\r\n            <li class=\"\"><a [routerLink]=\"['/sessions']\" routerLinkActive=\"router-link-active\">Sessions</a></li>\r\n            <li class=\"\"><a [routerLink]=\"['/stats']\" routerLinkActive=\"router-link-active\">Stats</a></li>\r\n          </ul>\r\n        </section>\r\n      </nav>\r\n    </div>\r\n    <div class=\"hero large-4 hero-panel\">\r\n      <div class=\"row\">\r\n        <h1>SEPTEMBER <span class=\"highlight\">14-17,</span> 2021</h1>\r\n        <p>Monterey Conference Center<p>\r\n            <p>Monterey, California<p>\r\n                <!--<p style=\"font-size: 40px; color: #fff; text-shadow: -1px 1px 2px rgba(150, 150, 150, 1); padding: 120px;\">October 22-28<br>at Super Fancy Hotel</p>-->\r\n      </div>\r\n    </div>\r\n    <hr style=\"padding: 0; margin: 0;\" />\r\n    <router-outlet></router-outlet>\r\n    <div class=\"footer contentband\">\r\n      <div class=\"row\">\r\n        <div class=\"small-12 columns\">\r\n          <ul style=\"margin-bottom: 0;\">\r\n            <li>Copyright &copy; 2017-2021 Contoso Neuro. All rights reserved.</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return initApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speakers/speakers.component */ "prpo");
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sessions/sessions.component */ "I+nI");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stats/stats.component */ "TtVv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./window.provider */ "sX8H");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.service */ "F5nt");












function initApp(appService) {
    return function () {
        //appService.getSettings();
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_6__["SpeakersComponent"],
                _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_7__["SessionsComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_8__["StatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_window_provider__WEBPACK_IMPORTED_MODULE_10__["WINDOW_PROVIDERS"],
                _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"], {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initApp,
                    multi: true,
                    deps: [_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"]]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "b/+p":
/*!*********************************************!*\
  !*** ./src/app/speakers/speaker.service.ts ***!
  \*********************************************/
/*! exports provided: SpeakerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerService", function() { return SpeakerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "F5nt");




var SpeakerService = /** @class */ (function () {
    function SpeakerService(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    SpeakerService.prototype.getSpeakers = function () {
        return this.http.get('/api/speakers');
    };
    SpeakerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    SpeakerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SpeakerService);
    return SpeakerService;
}());



/***/ }),

/***/ "jPZC":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stats/stats.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contentband bottom-ruled autosize\">\r\n  <div class=\"row\">\r\n    <div class=\"small-12 large-12\">\r\n      <h1 class=\"page-title\"><span class=\"header-icon sessions\" style=\"text-indent: 0px\">9</span>Stats</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"small-12 large-12 column band-panel center\">\r\n      <table>\r\n        <tr>\r\n          <td><b>webTaskId</b></td>\r\n          <td align=\"left\"><span [innerHTML]=\"stats.webTaskId\"></span></td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>taskId</b></td>\r\n          <td align=\"left\"><span [innerHTML]=\"stats.taskId\"></span></td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>hostName</b></td>\r\n          <td align=\"left\"><span [innerHTML]=\"stats.hostName\"></span></td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>pid</b></td>\r\n          <td align=\"left\"><span [innerHTML]=\"stats.pid\"></span></td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>mem</b></td>\r\n          <td align=\"left\"><span>{{stats.mem| json}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>counters</b></td>\r\n          <td align=\"left\"><span>{{stats.counters| json}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>uptime</b></td>\r\n          <td align=\"left\"><span [innerHTML]=\"stats.uptime\"></span></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "lVJV":
/*!**********************************************!*\
  !*** ./src/app/sessions/sessions.service.ts ***!
  \**********************************************/
/*! exports provided: SessionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsService", function() { return SessionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "F5nt");




var SessionsService = /** @class */ (function () {
    function SessionsService(http, appService) {
        this.http = http;
        this.appService = appService;
    }
    SessionsService.prototype.getSessions = function () {
        return this.http.get('/api/sessions');
    };
    SessionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    SessionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SessionsService);
    return SessionsService;
}());



/***/ }),

/***/ "prpo":
/*!************************************************!*\
  !*** ./src/app/speakers/speakers.component.ts ***!
  \************************************************/
/*! exports provided: SpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersComponent", function() { return SpeakersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_speakers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./speakers.component.html */ "qsWq");
/* harmony import */ var _speakers_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speakers.component.css */ "Sl9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _speaker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speaker.service */ "b/+p");





var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent(speakersService) {
        this.speakersService = speakersService;
        this.speakers = [];
    }
    SpeakersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speakersService.getSpeakers().subscribe(function (res) {
            _this.speakers = res.page.list;
        });
    };
    SpeakersComponent.ctorParameters = function () { return [
        { type: _speaker_service__WEBPACK_IMPORTED_MODULE_4__["SpeakerService"] }
    ]; };
    SpeakersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-speakers',
            template: _raw_loader_speakers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_speakers_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], SpeakersComponent);
    return SpeakersComponent;
}());



/***/ }),

/***/ "qsWq":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/speakers/speakers.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a name=\"speakers\"></a>\r\n<div class=\"contentband bottom-ruled autosize\">\r\n    <div class=\"row\">\r\n        <div class=\"small-12 large-12\">\r\n            <h1 class=\"page-title\"><span class=\"header-icon workshops\" style=\"text-indent: 0em\">O</span>speakers</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"small-12 large-12 column band-panel center\">\r\n            <ul id=\"speakers-list\" class=\"speakers-list\" data-bind=\"foreach: filteredSpeakers\">\r\n\r\n                <li *ngFor=\"let speaker of speakers\">\r\n                    <div *ngIf=\"speaker.photo !== '' && speaker.photo !== null\">\r\n                        <img [src]=\"'assets/images/' + speaker.photo\" />\r\n                    </div>\r\n                    <h1><a><span [innerHTML]=\"speaker.first\"></span> <span [innerHTML]=\"speaker.last\"></span></a></h1>\r\n                    <h2>\r\n                        <span [innerHTML]=\"speaker.title ? speaker.title : ''\"></span>\r\n                        <span *ngIf=\"speaker.title !== '' &&  speaker.company \"> | </span>\r\n                        <span [innerHTML]=\"speaker.company \"></span>\r\n                    </h2>\r\n                    <p class=\"abstract\"><span [innerHTML]=\"speaker.bio\"></span></p>\r\n\r\n                    <div style=\"clear: both;\"></div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "sX8H":
/*!************************************!*\
  !*** ./src/app/window.provider.ts ***!
  \************************************/
/*! exports provided: WINDOW, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('window');
var windowProvider = {
    provide: WINDOW,
    useFactory: function () { return window; }
};
var WINDOW_PROVIDERS = [
    windowProvider
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speakers/speakers.component */ "prpo");
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions/sessions.component */ "I+nI");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats/stats.component */ "TtVv");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'speakers', component: _speakers_speakers_component__WEBPACK_IMPORTED_MODULE_4__["SpeakersComponent"] },
    { path: 'sessions', component: _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_5__["SessionsComponent"] },
    { path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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