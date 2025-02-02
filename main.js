(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding-top:80px;\r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n    height: 500px;\r\n    padding-top:30px;\r\n    padding-bottom: 50px;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    \r\n}\r\n\r\n.text{\r\n    padding: 30px 100px 80px 100px;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div>\n    <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/57d1be9f15d5dbc5375079ad/1473363621992/IMG_6823.JPG?format=2500w\"/>\n\n  </div>\n  <div class=\"text\">\n    <h5>Non-invasive Inspection solution for Infrastructures</h5><br/>\n    <p>ITI is a service company in non-destructive testing industry for assessing the condition of reinforced concrete in bridges and parking structures. </p><br/>\n    <p><small>\n      ITI's owners have industrial experience in the area of non-destructive testing. The inspection device was invented and developed in the University of Waterloo by the founders. Maurice Dusseault as a founder has experience in starting and running three successful engineering businesses during the past 30 years in Canada.<br /><br/> SeyedBijan Mahbaz as a founder has 10 years of experience in starting and running a successful engineering business during outside of Canada in an oil and gas NDT area. Based on the founders' industrial experiences, there is lack of reliable advanced NDT methods to detect corrosion and cracks in reinforced concrete structures; this is the main problem in the assessment of the condition of bridges and parking structures.\n    </small></p>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/aging/aging.component.css":
/*!*******************************************!*\
  !*** ./src/app/aging/aging.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody{\r\n    padding-top:100px;\r\n    overflow: hidden\r\n   \r\n}\r\n\r\n.siderright{\r\n   float:right; \r\n width:600px;\r\n margin-right:50px;\r\n margin-bottom: 60px;\r\n font-family: \"Source Sans Pro\", sans-serif;\r\n color: rgb(91, 91, 91);\r\n font-size: 18.6667px;\r\n \r\n}\r\n\r\nimg{\r\n    width: 600px;\r\n    height: 350px;\r\n    padding-top:30px;\r\n    padding-bottom: 50px;\r\n    \r\n}\r\n\r\n#imgleft{\r\n    width:300px;\r\n    height: 280px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n#footer{\r\n    font-size: x-small;\r\n}\r\n\r\n/* The sidebar menu */\r\n\r\n.sidereft {\r\n    height: 150px; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 400px; /* Set the width of the sidebar */\r\n   \r\n    z-index: 1; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n    background-color: white;\r\n    \r\n    padding-top: 80px;\r\n    color: black;\r\n    float:left;\r\n    padding-left: 50px;\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .siderleft p, .sideright p{\r\n        float:center;\r\n        margin-right:15%;\r\n        margin-left:0%;\r\n    }\r\n    #p2{\r\n        float:right;\r\n        margin-right:10%;\r\n        margin-left:0%;\r\n    }\r\n    .sideright{\r\n        float:center;\r\n        width:300px;\r\n        padding-right:0;\r\n        margin-left:5%;\r\n        margin-top:5%;\r\n       padding-top:50%;\r\n        \r\n    }\r\n    #imgright{\r\n        display:none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n   .siderleft{\r\n       width:100%;\r\n       padding-right:5%;\r\n       padding-bottom: 30%;\r\n   }\r\n     .sideright{\r\n        width:100%;\r\n        padding-right:5%;\r\n        padding-top:20%;\r\n        padding-left: 15%;\r\n     }   \r\n    \r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/aging/aging.component.html":
/*!********************************************!*\
  !*** ./src/app/aging/aging.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"sidereft\">\n    <p>\n        <small>Corrosion is a key aspect of infrastructure life span and maintenance; it affects everyday life and its effects are visible everywhere (Gardiner Expressway in Toronto – Beerjis and Panesar 2011). A technology developed at InspecTerra Inc. based on a passive magnetic inspection method is able to detect corrosion percentage of rebar by scanning concrete from the surface</small>\n    </p>\n    <img id=\"imgleft\"src=\"data:image/jpeg;base64,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\"/>\n   <!-- <p id=\"footer\"><small>(Figure 1)</small></p>-->\n  </div>\n  \n  <!-- Page content -->\n  <div class=\"siderright\">\n    <h3>Aging Infrustructure</h3>\n    <img id=\"imgright\" src=\"http://www.sgccanada.ca/images/pic05.jpg\"/>\n  \n    <p id=\"p2\">\n      <small>Bridge collapses arising from quality control issues during construction and from aging of infrastructure causing reduction in load capacities are rare and unfortunate events (e.g., collapsed in Laval Quebec in 2007, Morandy Bridge, Gonoa, Italy, 2018).  Based on a report on 2016, there is an average of 188 million trips across a structurally deficient bridge somewhere each day.<br/><br/>\nQuantified risk assessment analysis over time, based on measurements, is the only reliable way to prioritize maintenance or rehabilitation of deteriorated bridges, or to make decisions for replacement. Quantification of a structure’s health condition should be done through appropriate non-destructive testing methods.<br/><br/>\nUsing developed technology at InspecTerra Inc., the progress of corrosion of reinforcement and concrete cracks can be tracked quantitatively, helping to prioritize structures for their next inspection, maintenance, rehabilitation or decommissioning times. \n</small>\n    </p>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/aging/aging.component.ts":
/*!******************************************!*\
  !*** ./src/app/aging/aging.component.ts ***!
  \******************************************/
/*! exports provided: AgingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgingComponent", function() { return AgingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgingComponent = /** @class */ (function () {
    function AgingComponent() {
    }
    AgingComponent.prototype.ngOnInit = function () {
    };
    AgingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aging',
            template: __webpack_require__(/*! ./aging.component.html */ "./src/app/aging/aging.component.html"),
            styles: [__webpack_require__(/*! ./aging.component.css */ "./src/app/aging/aging.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgingComponent);
    return AgingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    position: absolute;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: 240px;\r\n    max-height: 100%;\r\n    padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class=\"container\">\n\n  <router-outlet></router-outlet> \n  <app-footer></app-footer>\n </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideshow/slideshow.component */ "./src/app/slideshow/slideshow.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _part_a_part_a_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./part-a/part-a.component */ "./src/app/part-a/part-a.component.ts");
/* harmony import */ var _part_b_part_b_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./part-b/part-b.component */ "./src/app/part-b/part-b.component.ts");
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlay/overlay.component */ "./src/app/overlay/overlay.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _leadership_leadership_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./leadership/leadership.component */ "./src/app/leadership/leadership.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _scan_tech_scan_tech_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scan-tech/scan-tech.component */ "./src/app/scan-tech/scan-tech.component.ts");
/* harmony import */ var _aging_aging_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./aging/aging.component */ "./src/app/aging/aging.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _renew_renew_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./renew/renew.component */ "./src/app/renew/renew.component.ts");
/* harmony import */ var _publication_publication_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./publication/publication.component */ "./src/app/publication/publication.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["SlideshowComponent"],
                _part_a_part_a_component__WEBPACK_IMPORTED_MODULE_9__["PartAComponent"],
                _part_b_part_b_component__WEBPACK_IMPORTED_MODULE_10__["PartBComponent"],
                _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_11__["OverlayComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _leadership_leadership_component__WEBPACK_IMPORTED_MODULE_15__["LeadershipComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_18__["PartnersComponent"],
                _scan_tech_scan_tech_component__WEBPACK_IMPORTED_MODULE_19__["ScanTechComponent"],
                _aging_aging_component__WEBPACK_IMPORTED_MODULE_20__["AgingComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _training_training_component__WEBPACK_IMPORTED_MODULE_22__["TrainingComponent"],
                _renew_renew_component__WEBPACK_IMPORTED_MODULE_23__["RenewComponent"],
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_24__["PublicationComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_25__["ContactusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_7__["SlideshowModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"] },
                    { path: 'leadership', component: _leadership_leadership_component__WEBPACK_IMPORTED_MODULE_15__["LeadershipComponent"] },
                    { path: 'scanning', component: _scan_tech_scan_tech_component__WEBPACK_IMPORTED_MODULE_19__["ScanTechComponent"] },
                    { path: 'aging', component: _aging_aging_component__WEBPACK_IMPORTED_MODULE_20__["AgingComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"] },
                    { path: 'renew', component: _renew_renew_component__WEBPACK_IMPORTED_MODULE_23__["RenewComponent"] },
                    { path: 'training', component: _training_training_component__WEBPACK_IMPORTED_MODULE_22__["TrainingComponent"] },
                    { path: 'publication', component: _publication_publication_component__WEBPACK_IMPORTED_MODULE_24__["PublicationComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"] },
                    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_25__["ContactusComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.block{\r\n    background-image:linear-gradient( \r\n        rgba(34, 88, 138, 0.82),\r\n        rgba(34, 88, 138, 0.82)\r\n    ),\r\n    url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsglCODJP2_TOQu4B0eLGpRLUF0WxtcEaZXPIdnjqZQWNw-uMo\");\r\n    height:350px;\r\n    width: 100%;\r\n    color:white;\r\n    padding-top:5%;\r\n    background-size: cover;\r\n    background-position: 0px 85px;\r\n    background-size: 100% 100%;\r\n    \r\n}\r\na{\r\n    color:white;\r\n}\r\nh1{\r\n    text-align: left;\r\n    color:white;\r\n    vertical-align: middle;\r\n    padding-left: 20px;\r\n    padding-top:10%;\r\n}\r\nimg{\r\n    float:right;\r\n    padding-right:40px;\r\n}\r\n.content{\r\n    background-color: rgba(163, 168, 168, 0.226);\r\n}\r\n#text{\r\n    padding: 20px 50px 40px 120px;\r\n    \r\n}\r\n.contact{\r\n    background-color: rgb(0, 113, 153);\r\n    color:white;\r\n    float:left;\r\n    width: 100%;\r\n    padding:20px 20px 20px 180px;\r\n}\r\n#support{\r\n    padding:20px 20px 20px 10px;\r\n    font-size: small;\r\n}\r\n.footer{\r\n    padding-top:50px; \r\n    padding-bottom: 50px;\r\n    text-align:center;\r\n    color:gray;\r\n}\r\n#small{\r\n    padding-top:0;\r\n}\r\n.footer p{\r\n    padding-bottom: 0;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .footer{\r\n        padding-left:5%;\r\n        padding-right:5%;\r\n    }\r\n    #text2{\r\n        padding-left:10%;\r\n        padding-right:10%;\r\n        float:right;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"block\">\n        <h1>Contact Us</h1>\n  </div>\n  <div class=\"content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-8\" id=\"text\">\n    \n    <h3>\n     Let’s Talk\n     </h3>\n     <p> \n      Looking for support, sales, or just want to tell us about your cute cat? Pull up a chair and we’ll put on some coffee.\n\n      </p>\n      \n    </div>\n  <div class=\"col-sm-4\" >\n    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfCYifiXmMR98JW-F5cPHwiw7i6Hc2LEmWkET5uPiUxc2xmEW1Q\"/>\n  </div>\n  </div>\n \n      <div class=\"row\"> \n          <div class=\"col-sm-9\" >\n         <div class=\"contact\">\n            <div class=\"row\" id=\"text2\"> \n           <div class=\"col-sm-4\">       \n            <h5>Need support?<br/>We’re here for you.</h5>\n           </div>\n           <div id=\"support\" class=\"col-sm-6\">      \n              \n            Connecting with our customers is important to us. Every inquiry is evaluated and directed to the appropriate manager for response.\n           <br>Email us at: <a href=\"mailto:mohsen.haghighi@inspecterra.com\"> mohsen.haghighi@inspecterra.com</a>\n        </div> \n        \n        </div>\n     </div>\n     </div> \n  </div>\n  <div class=\"footer\">\n    <p>\n        Are we friends yet?\n    </p>\n    <p id=\"small\"><small>Hang with us on social for the latest news, updates and resources</small></p>\n  </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ;
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-div\">\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">Sign up</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputEmail\" class=\"control-label\">Email id</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email Id\" [(ngModel)]=\"newUser.username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"inputPassword\" class=\"control-label\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"password\"  [(ngModel)]=\"newUser.password\">\n\t\t\t\t\n\t\t\t</div>       \n\t\t\t <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"addUser()\">Sign up</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {HttpClient} from '@angular/common/http';
//import {HttpErrorResponse} from '@angular/common/http';

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(userservice) {
        this.userservice = userservice;
        this.newUser = {
            username: '',
            password: ''
        };
    }
    ContactusComponent.prototype.addUser = function () {
        this.userservice.addNew(this.newUser);
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 600px) {\r\n    #company{\r\n        padding-left:0;\r\n        float:left;\r\n    }\r\n    #social-block {\r\n        padding-top:10%;\r\n        padding-left:0;\r\n    }\r\n}\r\n\r\nbody{\r\n    background: #122841;\r\n    color: white;\r\n    text-align: center;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    padding-top:5%;\r\n    padding-bottom: 5%;\r\n    font-size: x-small;\r\n    text-align: left;\r\n   margin: auto;\r\n   \r\n    \r\n    }\r\n\r\n#social-block a{\r\n   color:white;\r\n   font:white;\r\n   font-size: 20px;\r\n   padding-left:20%;\r\n   \r\n    }\r\n\r\nbody ul li a{\r\n        color:white;\r\n        \r\n    }\r\n\r\n#social-block a:hover{\r\n        color:#717fcf;\r\n    }\r\n\r\nbody ul li a:hover{\r\n    color:#717fcf;\r\n    }\r\n\r\nbody ul{\r\n       list-style-type: none; \r\n       margin: 0 auto;\r\n    }\r\n\r\n#company{\r\n       padding-left:0px;\r\n       padding-top:20px;\r\n    }\r\n\r\n#products{\r\n        padding-top:20px;\r\n        padding-left:0;\r\n    }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<body>\n    <div class=\"row\"> \n        <div class=\"col-sm-3\">\n            <div id=\"copyright\" class=\"copyright footer-block\">© 2018 Inspecterra</div>\n            <p></p>\n            <div class=\"offices visible\">\n              <div class=\"office-name text-uppercase\"><strong>Canada Head Office</strong></div>\n              <div class=\"office-address\">Unit 5A-150, University Ave W</div>\n              <div class=\"office-location\">Waterloo, ON, N2L3E4</div>\n             \n              </div>\n              <p></p>\n              <div class=\"office-phon\"></div>\n            <div class=\"office\">Email us at: <a href=\"mailto:mohsen.haghighi@inspecterra.com\"> mohsen.haghighi@inspecterra.com</a></div>\n          </div>\n          <div class=\"col-sm-2\" >\n           \n             <ul id=\"company\">\n               <li>\n                  <p><strong>Company</strong></p>\n               </li>\n                  <li>\n                    <a href=\"https://www.acuren.com/about/\">About Us</a>\n                  </li>\n                  <li>\n                      <a routerLink=\"/leadership\">Leadership</a>\n                </li>\n                  <li>\n                      <a href=\"https://www.acuren.com/about/\">Contact Us</a>\n                  </li>\n               </ul>    \n                 \n          </div>\n          <div class=\"col-sm-5\">\n            \n            <ul id=\"products\">\n                    <li>\n                      <p><strong>Products</strong></p>\n                    </li>\n                    <li>\n                        <a href=\"https://www.acuren.com/about/\">Training</a>\n                  \n                   </li>\n                   <li><a routerLink=\"/scanning\">Scanning Technology</a></li>\n                   <li><a routerLink=\"/aging\">Aging Infrustructure</a></li>\n                   \n                    </ul>\n        </div>\n        <div class=\"col-sm-2\">\n            <div id=\"social-block\">\n              \n              <div class=\"social-facebook\">\n                <a href=\"https://www.facebook.com/AcurenGroup\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n              </div>\n              <div class=\"social-twitter\">\n                <a href=\"https://twitter.com/acuren_ndt\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n              </div>\n              <div class=\"social-linkedin\">\n                <a href=\"https://www.linkedin.com/company/acuren\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n              </div>\n              <div class=\"social-youtube\">\n                <a href=\"https://www.youtube.com/channel/UCvJrY4noei2iwWE_Z-mBnOg\" target=\"_blank\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height:100px;\r\n    width:120px;\r\n    \r\n}\r\nh5{\r\n    padding: 20px;\r\n    text-align: center;\r\n    padding-top:0;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n     <div class=\"row\"> \n         <div class=\"col-sm-4\">\n            <h5>Tech Base Company</h5>\n        </div>\n        <div class=\"col-sm-4\">\n                <h5>Non Destructive and Renewable Energy Solution</h5>\n        </div>\n         <div class=\"col-sm-4\">\n            <h5>Safe and Sustainable</h5>\n         </div>\n    </div>\n  \n   </body>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-slideshow></app-slideshow>\n<app-part-a></app-part-a>\n<app-part-b></app-part-b>\n<app-overlay></app-overlay>\n<app-partners></app-partners>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leadership/leadership.component.css":
/*!*****************************************************!*\
  !*** ./src/app/leadership/leadership.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.block{\r\n    background-image: linear-gradient( \r\n        rgba(34, 88, 138, 0.82),\r\n        rgba(34, 88, 138, 0.82)\r\n ),\r\n    url(\"https://www.airconco.com/wp-content/uploads/2016/01/office.jpg\");\r\n    height:350px;\r\n    width: 100%;\r\n    color:white;\r\n    padding-top:5%;\r\n    background-size: cover;\r\n    background-position: 0px 85px;\r\n    background-size: 100% 100%;\r\n    \r\n\r\n}\r\n\r\nh1{\r\n    text-align: left;\r\n    color:white;\r\n    vertical-align: middle;\r\n    padding-left: 20px;\r\n    padding-top:10%;\r\n}\r\n\r\n.row{\r\n   padding:20px 20px 20px 30px;\r\n}\r\n\r\n.row img{\r\n    height: 180px;\r\n    width: 210px;\r\n    padding-left:25px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.row h3{\r\n   \r\n     font-size: 20px;\r\n     font-weight: 300;\r\n    \r\n    \r\n }\r\n\r\n.row p{\r\n    font-size: 12px;\r\n    display:block;\r\n    margin:0 auto;\r\n    \r\n }\r\n\r\n#box{\r\n    text-align: center;\r\n    padding:10px;\r\n }\r\n\r\n.info{\r\n     padding-top:40px;\r\n     padding-left:0;\r\n }"

/***/ }),

/***/ "./src/app/leadership/leadership.component.html":
/*!******************************************************!*\
  !*** ./src/app/leadership/leadership.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n        <div class=\"block\">\n               <h1>Leadership</h1>\n    </div>\n       \n    \n     <div class=\"row\">\n         <div class=\"col-sm-4\" id=\"box\">\n             <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/57d1afcb29687f5d12c75ca5/1539451908487/?format=500w\"/>\n         </div>\n         <div class=\"col-sm-6\">  \n             <div class=\"info\"> \n             <h3>Maurice Dusseault</h3>\n             <p>Founder of InspecTerra Inc</p>\n             <p>30 years of experience in industry & academia, and founder of 3 successful start-ups in tech area.</p>\n             </div>\n         </div>\n         </div>\n\n         <div class=\"row\">\n            <div class=\"col-sm-4\" id=\"box\">\n                <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/58a5e40aa5790aee8a413fb2/1487266927367/?format=500w\"/>\n            </div>\n            <div class=\"col-sm-6\">  \n                <div class=\"info\"> \n                <h3>SeyedBijan Mahbaz</h3>\n                <p>Founder and Technical Director of InspecTerra Inc. </p>\n                <p>Ph.D. in Civil engineering, 10 years of experiences in Up-stream oil and gas and NDT industry, one successful start-up in tech area. </p>\n                </div>\n            </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-4\" id=\"box\">\n                    <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/57d1b21f3e00be8ad66c028c/1539451892515/?format=500w\"/>\n                </div>\n                <div class=\"col-sm-6\">  \n                    <div class=\"info\"> \n                    <h3>Giovanni Cascante</h3>\n                    <p>Professor at University of Waterloo. </p>\n                    <p>20 years of experience in NDT industry & academia.</p>\n                    </div>\n                </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\" id=\"box\">\n                        <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/5bc21de4c83025dddf286102/1539448442258/photo_2018-10-02_10-56-15.jpg?format=500w\"/>\n                    </div>\n                    <div class=\"col-sm-6\">  \n                        <div class=\"info\"> \n                        <h3>Mohsen Haghighi</h3>\n                        <p>Business Development and Marketing Manager</p>\n                        <p>More than 15 years of experience in marketing and business development.</p>\n                        </div>\n                    </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\" id=\"box\">\n                            <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/5bc22b5f1905f4c1ac9a557b/1539451772834/Alireza+image.jpg?format=500w\"/>\n                        </div>\n                        <div class=\"col-sm-6\">  \n                            <div class=\"info\"> \n                            <h3>Alireza Dehgahni-Sanij</h3>\n                            <p>Technical Manager</p>\n                            <p>10 years of experience in HVAC systems.</p>\n                            </div>\n                        </div>\n                        </div>\n        <!-- <div class=\"col-sm-3\" id=\"box\"> \n                <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/58a5e40aa5790aee8a413fb2/1487266927367/?format=500w\"/>\n                <h3>SeyedBijan Mahbaz</h3>\n                <p>Founder and Technical Director <br/>of InspecTerra Inc</p>\n        </div>\n        <div class=\"col-sm-3\" id=\"box\">\n            <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/57d1b21f3e00be8ad66c028c/1473360421352/?format=500w\"/>\n            <h3>Giovanni Cascante</h3>\n            <p>Professor at University of Waterloo</p>\n        </div>\n        <div class=\"col-sm-3\" id=\"box\">\n            <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/5bc21de4c83025dddf286102/1539448442258/photo_2018-10-02_10-56-15.jpg?format=500w\"/>\n            <h3>Mohsen Haghighi</h3>\n            <p>Business Development and <br/>Marketing Manager</p>\n        </div>\n        \n    -->\n    <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "./src/app/leadership/leadership.component.ts":
/*!****************************************************!*\
  !*** ./src/app/leadership/leadership.component.ts ***!
  \****************************************************/
/*! exports provided: LeadershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadershipComponent", function() { return LeadershipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeadershipComponent = /** @class */ (function () {
    function LeadershipComponent() {
    }
    LeadershipComponent.prototype.ngOnInit = function () {
    };
    LeadershipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leadership',
            template: __webpack_require__(/*! ./leadership.component.html */ "./src/app/leadership/leadership.component.html"),
            styles: [__webpack_require__(/*! ./leadership.component.css */ "./src/app/leadership/leadership.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeadershipComponent);
    return LeadershipComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    position: absolute;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: 240px;\r\n    max-height: 100%;\r\n    padding: 0;\r\n}\r\n.nav-item a{\r\n    font-size:small;\r\n}\r\n.nav-item a:hover{\r\n    color: #717fcf;\r\n}\r\n#dropdownBasic1{\r\n    color:white;\r\n    border:none;\r\n}\r\nform{\r\n    border:none;\r\n    color:white;\r\n}\r\n.form-inline:hover{\r\n    color: #717fcf;\r\n}\r\nimg{\r\n    height:50px;\r\n    width: 120px;\r\n}\r\n@media only screen and (min-width: 768px) {\r\na{\r\n    font-size: small;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    \n    <img src=\"https://i.paste.pics/a93ac461e286c75800fb576396a32f39.png\" alt=\"LogoNewSept20185fed020ca1b5d2e0.jpg\"/>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"  routerLink=\"/about\">About</a>\n        </li>\n        <li ngbDropdown class=\"nav-item dropdown \">\n            <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Inspection</a>\n            <div ngbDropdownMenu class=\"dropdown-menu \" aria-labelledby=\"dropdown01\">\n              <a class=\"dropdown-item\" routerLink=\"/scanning\">Scanning Technology</a>\n              <a class=\"dropdown-item\" routerLink=\"/aging\">Aging Infrustructure</a>\n              \n            </div>\n        </li>\n       <!--\n         <li class=\"nav-item\">\n            <a class=\"nav-link dropdown-toggle\" href=\"https://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Partners</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n         </li>-->\n         <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/publication\">Publication</a>\n        </li>\n         <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/renew\">Renewable Energy Solution</a>\n        </li>\n         <li class=\"nav-item\">\n           <a class=\"nav-link\" routerLink=\"/training\">Training</a>\n         </li>\n         <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/leadership\">Leadership</a>\n           </li>\n         <li class=\"nav-item\">\n           <a class=\"nav-link\" routerLink=\"/contact\">Contact Us</a>\n          </li>\n       \n      </ul>\n      <!--\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>-->\n    </div>\n  </nav>\n\n  <main role=\"main\" class=\"container\">\n\n    \n  </main><!-- /.container -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/overlay/overlay.component.css":
/*!***********************************************!*\
  !*** ./src/app/overlay/overlay.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 600px) {\r\n    #text{\r\n        padding-left:10%;\r\n        padding-right:10%;\r\n    }\r\n}\r\nbody{\r\n    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(\"https://www.acuren.com/wp-content/uploads/2016/06/PUMP-BOX-12-featured.jpg\");\r\n    height:350px;\r\n    width: 100%;\r\n    color:white;\r\n    padding-top:5%;\r\n}\r\na{\r\n   \r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/overlay/overlay.component.html":
/*!************************************************!*\
  !*** ./src/app/overlay/overlay.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"row\"> \n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-4\" id=\"text\">\n           \n            <div class=\"ss-title\"><h4>A comprehensive methodology for condition assessment of infrastructure.</h4></div>\n            <div class=\"ss-excerpt\">\n               <p><small>We have developed a unique, reliable, time and cost effective device, and our approach costs less than\n                the other inspection methods.</small></p>\n                <p><small>\n                Our method is not affected by any kind of environmental factors such as water and chemicals.</small></p>\n            </div>\n            <div class=\"ss-link\"><a href=\"https://www.acuren.com/about/success-stories/ropes-team-saves-thousands-pump-box-work/\">Read More</a></div>\n        </div>\n        <div class=\"col-sm-6\"></div>\n    </div>\n</body>\n"

/***/ }),

/***/ "./src/app/overlay/overlay.component.ts":
/*!**********************************************!*\
  !*** ./src/app/overlay/overlay.component.ts ***!
  \**********************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverlayComponent = /** @class */ (function () {
    function OverlayComponent() {
    }
    OverlayComponent.prototype.ngOnInit = function () {
    };
    OverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overlay',
            template: __webpack_require__(/*! ./overlay.component.html */ "./src/app/overlay/overlay.component.html"),
            styles: [__webpack_require__(/*! ./overlay.component.css */ "./src/app/overlay/overlay.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverlayComponent);
    return OverlayComponent;
}());



/***/ }),

/***/ "./src/app/part-a/part-a.component.css":
/*!*********************************************!*\
  !*** ./src/app/part-a/part-a.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\nbackground: #122841;\r\ncolor: white;\r\ntext-align: center;\r\npadding-left: 20%;\r\npadding-right: 20%;\r\npadding-top:10%;\r\n}\r\n\r\nh4{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    padding-bottom: 20%;\r\n    margin: 0 0 20px 0;\r\n}"

/***/ }),

/***/ "./src/app/part-a/part-a.component.html":
/*!**********************************************!*\
  !*** ./src/app/part-a/part-a.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<h4>\n    The world’s first scanning device using a cutting-edge technology to detect corrosion in reinforced\nconcrete.\n</h4>\n</body>"

/***/ }),

/***/ "./src/app/part-a/part-a.component.ts":
/*!********************************************!*\
  !*** ./src/app/part-a/part-a.component.ts ***!
  \********************************************/
/*! exports provided: PartAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartAComponent", function() { return PartAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartAComponent = /** @class */ (function () {
    function PartAComponent() {
    }
    PartAComponent.prototype.ngOnInit = function () {
    };
    PartAComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-a',
            template: __webpack_require__(/*! ./part-a.component.html */ "./src/app/part-a/part-a.component.html"),
            styles: [__webpack_require__(/*! ./part-a.component.css */ "./src/app/part-a/part-a.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartAComponent);
    return PartAComponent;
}());



/***/ }),

/***/ "./src/app/part-b/part-b.component.css":
/*!*********************************************!*\
  !*** ./src/app/part-b/part-b.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 600px) {\r\n    #text{\r\n        padding-top:10%;\r\n    }\r\n}\r\n\r\nbody{\r\n    padding-left: 20%;\r\n    padding-right: 20%;\r\n    padding-top:10%;\r\n    padding-bottom: 15%;\r\n}\r\n\r\nimg{\r\n    background-color: rgba(248, 247, 216, 0.7);\r\n    float: left;\r\n    width:230px;\r\n    height:170px;\r\n   \r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    h4{\r\n        font-size:small;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/part-b/part-b.component.html":
/*!**********************************************!*\
  !*** ./src/app/part-b/part-b.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n    <div class=\"row\"> \n     \n      <div class=\"col-sm-6\">\n      <img src=\"https://www.acuren.com/wp-content/uploads/2018/09/IMG_1193-C-small.jpg\" alt=\"\" draggable=\"false\">\n      </div>\n      <div class=\"col-sm-6\" id=\"text\">\n      \n      <div class=\"blog-title\"><h4>Non-Destructive Testing (NDT) industry needs a quick and reliable method to detect corrosion of\n        reinforced concrete structures.</h4></div>\n      </div>\n      </div>\n     \n      \n</body>"

/***/ }),

/***/ "./src/app/part-b/part-b.component.ts":
/*!********************************************!*\
  !*** ./src/app/part-b/part-b.component.ts ***!
  \********************************************/
/*! exports provided: PartBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartBComponent", function() { return PartBComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartBComponent = /** @class */ (function () {
    function PartBComponent() {
    }
    PartBComponent.prototype.ngOnInit = function () {
    };
    PartBComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-b',
            template: __webpack_require__(/*! ./part-b.component.html */ "./src/app/part-b/part-b.component.html"),
            styles: [__webpack_require__(/*! ./part-b.component.css */ "./src/app/part-b/part-b.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartBComponent);
    return PartBComponent;
}());



/***/ }),

/***/ "./src/app/partners/partners.component.css":
/*!*************************************************!*\
  !*** ./src/app/partners/partners.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 600px) {\r\n    .row{\r\n        padding-top:10%;\r\n        \r\n    }\r\n    #uw{\r\n        padding-top:20%;\r\n    }\r\n    #wise{\r\n        padding-left:15%;\r\n        padding-bottom: 10%;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    #ctec{\r\n        padding:10% 10% 10% 20%;\r\n    }\r\n}\r\n\r\n#wise{\r\n    width:180px;\r\n    height: 80px;\r\n    filter: grayscale(100%);\r\n    -webkit-filter: grayscale(100%);\r\n}\r\n\r\n#wise:hover{\r\n    filter: none;\r\n    -webkit-filter: grayscale(0);\r\n}\r\n\r\n#uw{\r\n    width:220px;\r\n    height: 120px;\r\n    padding-top:0px;\r\n    filter: grayscale(100%);\r\n    -webkit-filter: grayscale(100%);\r\n}\r\n\r\n#uw:hover{\r\n    filter: none;\r\n    -webkit-filter: grayscale(0);\r\n}\r\n\r\n#ctec{\r\n    width: 200px;\r\n    height: 100;\r\n    padding-top:28px;\r\n    padding-left:20px;\r\n    filter: grayscale(100%);\r\n    -webkit-filter: grayscale(100%);\r\n}\r\n\r\n#ctec:hover{\r\n    filter: none;\r\n    -webkit-filter: grayscale(0);\r\n}\r\n\r\nbody{\r\n    padding-top: 20px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\nh3{\r\n    padding-left:50px;\r\n}\r\n\r\n.row{\r\n    padding-left:25%;\r\n    padding-right:10%;\r\n}"

/***/ }),

/***/ "./src/app/partners/partners.component.html":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<h3>Partners</h3>\n<div class=\"row\">\n   \n    <div class=\"col-sm-4\" id=\"box\">\n        <a href=\"https://wise.uwaterloo.ca/\"><img id=\"wise\" src=\"data:image/jpeg;base64,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\"/></a>\n      </div>\n      <div class=\"col-sm-4\" id=\"box\">\n          <a href=\"https://uwaterloo.ca/\"><img id=\"uw\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAABI1BMVEX///8AAAD+1k77+/v29vbg4ODW1tb5+fnv7++JiYnq6upQUFDl5eVNRCbo6Ojz8/NpaWldXV20lzkQEBD50UweHh55eXkvLy/CwsIJCQmlpaX/2E6enp6srKw/Pz86OjrOzs4XFxdISEgnJyeYmJhgYGC4uLh1dXUzMzNLS0vQ0NDxs0n5yEwVFRX3wUuCgoK0ADPnmEXVbD/sp0fbeUHFpjzDOTjlk0S/JTbjv0bwsEnSXj3eg0LAKjfVZz4WEgbOUjvIRjrOVTzVs0GjijI6MRF2YySFcCjdukNGOxXuyknef0JVSB1PSTaagS4hHAlEQDdmVyJVSBosJQ1BOyl8ai5dSwmMdSNiWkIEChVrYDxhXFBPQhhpWy29nzkzLBBwXBZZ/w5qAAATgklEQVR4nO1daXvaxhZGSAgJKEJBgFgEGITARhaLMJLZwuLEDm6T2l3Se9Pr9v//invOjMBA7Da3z2Psi/V+cLSMhplXZ51FCQR8+PDhw4cPHz58+PDhw4cPHz58+PDhw4cPHz58+PDhw4cPHz58+PDhw8c/AfvgGft1wUce3y3JPnK8/dA3179HCLEwNE2KcHgSjkfwbyQSxjM2Hif/ROLkVIhL9AEELc9F8HBdl8TzAj1aVRGJ0dIsOeZobdx2C+InJ9K6MYjdAs8BKVEywoFQq5LDxhiVihoOlBOyih0JlaIx+DcilkRoeLkSxaucWCoCKjnod9iI4nFUJ1VF9GipVGyF4JAt12gVx0UC+QQebBVroYBQKCbKG/LBltOVRqOS5vFEoHUXC+G987ALocJowEuC0fGdaQwTPWHVYsbApvNMNYT/6kwjFgi0mCIKA5dmmGQymSG85FJM8pRhUqSnaoNpVJkqUBCAKhqkikYyy0D5ygleq2ZFqVxJipGN3y/LWaZaZbIyvpZImslC3Sn9+QVmxUuW8pJksmmhXGls8WI0GHidVSaBDwAvYgiEHYsDL1EjBnygPAVywGlMI/UgL1TkeJWp6nwIOyrpTEUVmRq/KS4FhsmFQmnmFFqBvOirup8ZX/FyxNTVHV6ENJMO8UyjjA8AL3VN00ivgRe5LMVkpkUezjK1HE8t04oXeJhpGKsfyzDJjTMsV5YZFDy2zkRjhJeWWlb5F2CHd3k5amVL6dI2L+FctYEvmthU1COALHg30nriNGugPPCJKqiMCP3b5CXCZLTVj2kp5qgV3/h1Vq0c4U+B2ByHCC+IirCv3j8O4AUsLp/IFigvKT6RTKW2eQnwMiOWkjlyDLwUE4mESPUILAPDZGtESMJ8IXF8xOjhR3mJ10GTtly3Gk2iwedEJkp5aUSj0fpL4EVm6iHBKFZRv5EXlk8wzA4vYT2VZY7piwZeChLLhleCVE8kq2VyJ6byHDAoS4/ywuWYWnzr52MtRi4LkpohJiri1f303f5bcDqTSuvQG+JStGyK5dTqLi/sSZFhCtRJAC+yrusFLE/sS6hEDXJAq8KNCpPm/pKX2PbvG2DOdb3IZNCoAC+553dFFCHxiGFOKxppj5HKsAFBbxQpL9kM5QXs4injeddwi8mC7hBfGtYyCT6QyxyVie7I1Ww2S6IT0I/iipdUcW1pOS2b2JaXQDwnw++naoS7SIvRXoKwEEg5XSyo1DWGcjn4Gzc0DM4CQi638phqoRC4PwTkiHzxOUOA3hZU7E2Y13RRJwFaIGZonmBwOVoZgoXyu/LAlQuimKNPcWrhJfgiD5wQkVatCYfv/97/i4nCOqZguTCCPkHNDOdJVVgQVsXujUR4UwLCX3cbcpCIV0GAfeC+Dx8+/r/ASZIUfvBEuj8BmyKtrCS3C7y/fYV69PXppqVgvSe2wUoC2KOv/Q+Hl7nnMDSRFkSshVVa26rJCcNrXqieSNSpz2ANDGs9X5ITdwDNN7avGCRuWZ/qWjniVSphycIOMVKoUI9WjmuiGt+KgOOqKFcqcl0L7T97jB9DFnK8isgxJanTsALTW8ZL8yNROK7mSN+4KLMDNhCpbV9JA89SOrlxRTY87w8RNNOIbDdBTK2K1dR7yiR1/UsNfSfUeXpw2P1TkinCK8ZGlFRyQ8BWRXkvVyZ9IwIjPcSLvMNLfJcXeJr0mPCS2eRFME63iq2C4JMtrovGvhMlCPVBRmiX69iEbI5c5/F6gshRJIEjSl4QLx3/M15oWP8VL5JWorezq2dJU0hqtnm9qO3ZysSwAVE6ctQgTSD5caAA3Tqio5Kq1/QWFuJEsDV1HEdgUjKYoETC46WaqK+gSR4vSXKtVkKKSqGHeFErhPJaWmwlioRJESUjhikJ5CTplliXq4SY0FdNf1JwBvzoEZpCNke7T0lCdamUSREcCsEmH9+Pxnpa5p0RXqLbDSe8ZIj0C1oU3zq+8V1eIkQsGlqctCSB+poEsZQKeFStE5UO6RnyVvZsY0LkR9FSeqJbRYlnQXa8zC6EHMgptMJrv/CtvFAGhAK+crThO7ywBoriUY5Oj+DQBP4UFCPGRQxRLxYT8fGM+pQsfA0BG1OBLvLQxmyKqnhYRR6IQ5WwUykDhaZ2sn7oAV54lmRLXriyyQtroIaKX/MSaWXXiosgNFVjgXLSaxNFiNgqcb/emitg2+BlFEClM2h6K2pAwgYXScN4fHd14QRbvI48HuCl0dIpcsSJbfJCqM3ilMcOL6Tu6pptauGPDAl1m7mXTipW0W33/tRg1Qz1FthkGVuU0tgY9jSBDWGJw1BZgfitlRd9gJfsUYrgqEQGTigvnv8n9kX9yr6wKjq36P34FIehTFKPYfBARnu9ckTBGjvjWE+NEMpIgo8V0f4Sza6HUPCTJPKN1aFPjXCA1XEIaqXjD/CyBpWqe3+UoP5IRjZ2eDGKK/q9CzkyXh4SiT2598wxbGJ1zx5JymHPDQ2a1DghcV6jjG4yJZApMhSXtCQJRmZDtv+Sl9xaXjZBnNmuvKCX3hi3CxcoLzpWcy8v9LF988Ji17N6IkneKdEqDdtRIXeRJ+YYwhT0SIzsUfEAL8lGsUQQNdb2ZQP6fQc3eMFqipt6BO/jtBAhEcOGHpV3yu0HESK2p9QEhNDxNJADLUBnu7a7R+Pxb/TTa4hen3bsLlFhJrcmgMdqUzxNSKJrOZL0IyK0T0XAY9BWzWdRq7x8JYX95HIpZguewHwjL0ctUaxhfQmv6A4vnI7Vl1b1sCTKLQE/JJLzck1PrLLG3scbyjQBIJpDdR67gq0iL9RzNClstOclvpGXaozjiMQlCxv5dCaOC10IiIIwMhl6YQVihrMtnCVBB1ZUiXCGeZKfyXs2L4A4nfQkmhMQRHqCUxphDd9nK0fH/UWkj7iVh3gp5tQVeG4zDyBEZ7V7XlI5w0MoQASGaejqSVmjGbSM6kP5YmpquayKJD3Lnux/eIrDkA7eLu0n1aoGnpBZ4ipPh97CMUIf/wgvq/gFgOn5fVwnifi6S9KalzUyGsvXacJcLTWo/tLJJsFLs48aJarIR+lnmJGl8RVTp7JeLhJLie0ger5uEQ3nC3hKeDl+2E+DCm7xEjiRs6vntnlJ5cJsuXW0cSV77I1MCbliduN6Sdy/FgGoJHiGzRMLtMEoOpl7e0esTRHD9h152RmvW/NSJZTS8O3UYHd5IZGOIFbWnquUXieHklGvrvmLas+zDoYzatFownslnAYnOOUeiOjH0ejGm5I0Ge5ggCa1otFoa3VHEKNbEOOom1C2RrsT0eE4ii4+om+Wq1GdUXUZlChbjaaN0P3YNxfK1Y9BllKlRKH8XMuDhBDPh9jNEzwIwwEf2ximF+CcrCdkY3Cw7gQ52wB5JI5HXpUR3iu+U5JqKCvxZbDWZT6+PSPAxXi04uXQs8wI+PDhw4cPHz4ODmwk9I8QeymrCZ8IEf2n7/4Bfpb5v6/7/xkR/deLN/873n85cF4E/fJcMRUPJkJ5BPSW1ek0zeXF4fPyeWk5dqcZDAaVQWd03cMjOLZse2Aq3jH8Me3OyLFtpTt2J03lzaHzIhUul9ZkPhuZ+WCzO5yN+zaQkM/b3els2nWaQE3e6jaDit0b9seza8ttt/uOcvDyIhX+XDbnbntimgPHGfXbs15TCSrNPvS/3R4jX9dDdzQYzXtdtz0bWe1hv99RLhIHzguX+3NpOnN3ZnUmw9Fo3B7Ors2gOURWXHc8HCh5uDgZONedbtudDO2+3Ztbhy8v4dyf50HTmrmO0rS781nvuj+1grbrdq/nE7tpgRr12u54ZDVH0/lo7namzd5IAXl5lgHJ/YHVgBcwJ7P2yAJv0+z12/2m2XUHoEzU7ObtjtlzZx0T7rltsNATM/hKeAEH3Bm7YDw6UzAr06Y5mZlWME+cEfDSDNozdz4awj23aTbBHR0+LwHjz3OzOwFi+kDMGM1Kz1SuJ72JmSfEKMHx0AxaznCK92aW0pk5ivKxfvC8/HrV6bcdCwI2h/ggt6MEB2hvaOziTMbuIJ83u8QQA4E9l/Cy79n3fYPy4g5HjtMhXe/bitnp9wdUiczerN3ugocazfqzGbht4GWkLD+n975Eec9Qf12YvSl0GWIViFcmw4mt2MOxxwtEMmBzZyN7MHC6k+nQVpQR4aW139Vg+4d6s1CaTdtuOo7dHYJdgeDWGvRmFuUlaHa7NoR77qQL3si1g2ChO8ryUnwBO1yfFOrtmaKgeYXE0J5jjAuWRbHB7HrEQAxjdobuFEM94KXZm5nB818On5fvz8AjWxCTDEa93qQPftpWrJ6tBDeARrmDxIyUbh95ea8/19ThvqB+d6co1uTaNCft/mg0BVc9c667KELnVytywGWbIE1ue2r1RsDZ1c3uJpuDQ/k34GXQH1vm0J13Z2P01dedJmjR1eX7M8WjJU9EZui6Hcsc9JSr/7yYXdFPhZMvbxSUhGGvP+7OSADTt1Bazn5/m333+ZxoEYiIOeoPO7N23wpaQ3Px28vZFf1E4L9cKJYzdifueDpCuzsc4QjM+cUHXJrx9vIKrbDbNa2uO7wG69OzOj1l8Ztx6LyEEhcKOOOR1RtYpg3B/qSJivP5J7pm5e3Ned4CMbGt4XyIgzLjGeTbZ1/UQ1+bEEt/XKIBQRNiBoODuTuxgotbXMbT0slCxrOljRlju0cGZfpNKHonlw+dF0G8XOZJ7mx25p3OsN9rKneoQxk9Jhi4I+DTx0W3N+lB2Ic2eWwr+eBd7cCHpXCx8fsrGsI1ITV0px1zefYHw2SL6Im5k8QpGhk6FWB35/OpO+vklYuDTxsDYe3fizzJEEcQ58+bwcUlfhin7u2aiZBVrbd3S+KtFTM/bM/zkB4delgXYI3fzuhAy2Da73bMxfu3DHNaXy87i2sZoOn3NwoZoupZ124vf/XLC/i+2BODVWXKS9B0Otb53Q3QUtHJ4nn+BLeisFotyTAfLq5wqHc8mvbt/OLfBx++4Me13qyj2vMLNC0V8vEXwZArBbKIkcddb2/fL5Rg14VUwAzeHb6bxsXg4Kgprj6/A2NSI18tkIxKlsm00L6GY60UEnOmdPrj65GivEmEDp8XTv/liibNi5tPuFuWfLKPF8ly8dM6+e5QXJOBmNuLq4FtmsHl5/TBmxf8JOZvONIQXL7BYK6ok++MhmT0z59wlTzJnDlVTmIkg3Mqwasb/bkbvQewJ/KdArblI+rQsUHGJ8mmmk+XJEei33vjyrj0/af358Dg4rvcM7d5L+DSn5fBK+qeefqNAoxZfj9bKleXcDVF5qJZCTdzvv3jDMzLl/IzN3k/0G8WZ7e4TVZEc8qGyAdLbs/Q5pwjMUyUJ99GzaHJeffm/LJ+6JMBFNoPRIeORPoNkzruC3l/BTYHIpblRzQy9FuPEtm68+n993veMv9coJ9RkEnkL5A98T99zEMaOey7Y8c8/4A7iFr0A83osJniK4heEFLrlEnKZFtJXEdafn+zVCxnNh7jdH1wgSFwKn2C+0ji+IWO2qHPwXpgtUaGfMcmHMN9ip9uF4rZdHq9vtufzAcY7v2Ee+7L5NNcheLRwc8FrBCrpckORhUV6t3llW1PHMfpTaeTqWsrzaZ58TvoUiWH3wZn9dIrCHYpJB338pHIn/nj4tyazsdd0xxNwMC49mA4HFl3N8BYA7/jLdTl527u3sCGKjkuVIjicC6YFnPmujNn0O3jwg671x53HWvx/g/85EI5rBZfRVDnIR0to3uGpNm07eZsNm/Pejia2x42R223O7KV848Y/EaN+jNsDH8+GA0a+S+CZnfatG175EzIapiuZY3b/YGjBJcXGOQUqwc/07gJATcVf7g7VwbdsdsdWKZl2d3u3AVe8qOx07w2IbE8w1wh+prEBTLFKnML6WOwA7ZlPB1OJt1RfzacuhMrPxg27ek1ruo9B2IOfkJtG0Lr7RnQEjSd/nA6Hbrtfrfd7veubSVv2g7wY+KI3tXt29ekRYjwp0s6bGeZigL0YFjXdt0O8DIZt90RmTO4+MP4+5oODPqHu9XKVFwQ03E6uEJqZOY7s36738F7y9tXkklvIiTfeMtdcP1Ux3WnTmfevjbzg+ag30E1Wl78+Eoyxi2Ujz8TTbKGPTM4AgszB3mZNpW8YjtoepQ379TXZXQpBO3DGyWYV0BvnIEDuoMrmd3rpmX3cBFifnGz+18FvBLE6/85wwWYYGZnkEsP4YAs7L22UVrOL2sHv4jhEfCJm4WiDOZASb/rNAfXkDf27CZZmnl1Kb9KLUJw5cSfi6DiOJbZsSCOs5zJuN8lSrS8/OGZPmrzEhAuo8Tg3j1cYdccdZpdd2yC2776+EU79BW7f4WwWvvFW4Sp2BN3COlSD44Xl1/2/mXulwXppHZ7hzts8iYEvO50DAlS/vzXH7TXFv9/hZD480eyOnUwnHXnjgXh3Pf1k1dPSyAQy/1MFjQ3hyMLkqXl5c/12Ct10NsIGz9+ugNFssDi5s9+fasf/GK6bwWr/evdBSQFy8VNKuHLyj04tf7j+7uzy+9qxuuM/R8DGzHkH3+M6qHXGuM+Dk5VX3fM8hjC/v+N5sOHDx8+fPjw4cOHDx8+fPjw4cOHDx8+fPjw4cOHDx8+fPjw4cOHDx/7x38BFoJyF37Zq+QAAAAASUVORK5CYII=\"/></a>\n      </div>\n      <div class=\"col-sm-4\" id=\"box\">\n          <a href=\"https://www.communitech.ca/\"><img id=\"ctec\" src=\"data:image/png;base64,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\"/></a>\n        \n      </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/*!************************************************!*\
  !*** ./src/app/partners/partners.component.ts ***!
  \************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/partners/partners.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/publication/publication.component.css":
/*!*******************************************************!*\
  !*** ./src/app/publication/publication.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding-top:80px;\r\n    padding-bottom:80px;\r\n}\r\n.text{\r\n    padding:80px 100px 50px 100px;\r\n   \r\n}\r\nhr{\r\n   background-color:#007bff;\r\n    font-size: 3px;\r\n    width: 60%;\r\n    float:left;\r\n    \r\n    height: 2px\r\n}\r\nh5{\r\n    color:#007bff;\r\n}"

/***/ }),

/***/ "./src/app/publication/publication.component.html":
/*!********************************************************!*\
  !*** ./src/app/publication/publication.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"text\">\n    <h5>Detecting Defects in Steel Reinforcement Using the Passive Magnetic Inspection Method</h5>\n   \n    \n    <h5><small>SeyedBijan Mahbaz, Maurice B. Dusseault, Giovanni Cascante, Philippe Vanheeghe, June 2017, Journal of Environmental & Engineering Geophysics</small></h5>\n    <div>\n    <p><small>\n      Abstract Defects in steel reinforcement are critical factors in the evaluation of the service life of reinforced concrete (RC). Steel reinforcement (bar) defects or deterioration may lead to crack propagation and strength decrease in RC structural members. Deterioration also changes the steel magnetic properties; the evaluation of these changes can be investigated by an indirect passive and non-invasive method to locate and quantify defect in RC structures. Herein, a passive magnetic inspection (PMI) method is modified and used to examine its potential as a non-destructive testing (NDT) method for condition assessment of steel reinforcement. The passive magnetic flux density of steel bar with three small holes in three different positions and locations along the bar is measured in the laboratory. A signal processing methodology based on frequency spectrum analysis and filtering is applied to the experimental data, and the results are compared with the numerical simulation. The processed data from the experimental test shows the potential of PMI method to detect, locate and evaluate bar condition. Both experimental results (after signal processing) and simulation results show a good similarity for top and bottom holes. Cross-correlation of numerical simulation with experimental data was necessary to reveal detection of the side hole.\n    </small></p>\n    </div>\n    <hr>\n\n    \n  </div>\n\n  <div class=\"text\">\n    <h5>Molecular Dynamic Model Applications in Reservoir Geomechanics and Fracture Propagation in Pure Calcium Carbonate</h5>\n    <h5><small>Milad Mosharafi, SeyedBijan Mahbaz, Maurice B. Dusseault,  ARMA 2017, San Francisco, California, USA, Volume: 51</small></h5>  \n    <p><small>\n        Fracture initiation and propagation are important research topics in reservoir geomechanics. A high proportion of the oil and gas reservoirs around the world are carbonate reservoirs, dominated by brittle and fractured carbonate rocks such as calcium carbonate (CaCO3) and dolomite (CaMg(CO3)2). Investigation of fracture behavior has been extensively carried out by different approaches but usually involving macro-scale continuum-based methods. Such methods have limitations for analyzing discontinuous porous media like carbonate rocks. Dis-continuum based methods are needed for understanding fracture complexity challenges in naturally fractured strata. Micro-scale dis-continuum methods such as Molecular Dynamic (MD) modeling have been widely used in physics and mechanics, but much less so in rock mechanics. This article contains a literature review of MD modeling and dis-continuum methods for fracture simulation, addressing their advantages and disadvantages. Subsequently, the context of MD as a micro-scale dis-continuum method is described. Then, an MD model of pure calcium carbonate (Calcite) is developed and a numerical simulation of a uniaxial test is carried out. Results are compared to simple uniaxial experiments, and results showed fair agreement. This preliminary application of MD at a small scale may aid in understanding and implementing fracture initiation and small-scale fracture propagation during early stages of the fracture stimulation process.\n    </small></p>\n    <hr>\n  </div>\n\n  <div class=\"text\">\n      <h5>Scanning Electron Microscopy (SEM) and Profilometer Scanning Microscopy to Estimate In Situ Stresses in a Dolomite Core Specimen</h5>\n      <h5><small>SeyedBijan Mahbaz, Ashley Goddard, Maurice B. Dusseault, ARMA 2013</small></h5>  \n      <p><small>\n          Knowledge of the in situ stress state is an essential element of a geomechanics study. Current methods of evaluating in situ stress are based on direct and indirect measurements on the centimeter to kilometer scale. A new core-based technique to estimate in situ stress magnitudes and orientations is tested in this study. The method is based on the nanometer to micrometer scale study of samples to identify nano-features and micro-features that have a direct or indirect relation to in situ stress magnitudes and orientations. A dense dolomite core was divided into three parts; each sample was loaded with a different uniaxial load ranging from 0-45MPa, and then scanning electron microscope (SEM) images were taken and analyzed for sections from each of the samples. More specifically, microcracks and micro-laminations were detected, classified, and quantified at the nano- to micro-scale. Lastly, the surface roughness of the sample sections was studied by taking advantage of Profilometer scanning microscope images in relation to the applied stress load. This paper details the experimental procedures used and the results obtained to date.\n      </small></p>\n      <hr>\n    </div>\n\n    <div class=\"text\">\n        <h5>Low strain measurement of shear modulus with resonant column and bender element tests – Frequency effects</h5>\n        <h5><small>Hassan Ali, SeyedBijan Mahbaz, Giovanni Cascante, Murray Garbinsky, GEO Montreal 2013</small></h5>  \n        <p><small>\n            Laboratory determination of shear modulus at small strains is usually done through resonant column (RC) or bender element (BE) tests. However, the exact determination of the arrival time in BE tests is not always well defined. In this paper, BE and RC tests are performed on three different soils using a modified Stokoe-type RC test setup. Time domain analysis of BE signals is typically done; however, the change in the frequency content of the signals during testing is not well understood. The frequency domain analysis is required for the consistent and accurate determination of arrival times because of near-field and boundary condition effects on the results. In this study, both frequency domain and time domain analyses are used for the interpretation of BE tests. The increase in resonant frequency is compared with the increase in the main frequency component present in the BE response. Both frequencies increase according to the exponential law between the frequency (f) and the confining pressure (sigma_o) (f = a(sigma_o)^b) however, the exponents are different and the BE test shows higher sensitivity to the confining pressure. In RC testing, the change in frequency does not affect the interpretation of the results, as the wavelengths are much larger than the size of the specimen. Conversely in BE test, the change in frequency affects the participation of compressional waves in the response and the arrival of shear waves is masked. The is an increasing difference in the shear wave velocities computed from BE and RC tests with the increase in confining pressure. According the results from the thee soils studied, BE results should be corrected for the increase in frequency content specially at high confining pressures (sigma_o > 400 kPa).\n        </small></p>\n        <hr>\n      </div>\n\n      <div class=\"text\">\n          <h5>Poisson Impedance as a Rock Physics Attribute for Developing Geomechanics Earth Models: Case Study from Southwest Iran</h5>\n          <h5><small>SeyedBijan Mahbaz, Maurice B. Dusseault, RockEng 2012</small></h5>  \n          <p><small>\n              ABSTRACT: Development of Geomechanical Earth Models (GEM) is a prerequisite to reservoir management, involving issues such as stress path analysis, prediction of induced seismicity and sanding initiation, and coupled flow-stress modeling that leads to more realistic predictions of oil rates and rock response. Part of GEM development is the stipulation of the 3-D lithostratigraphic disposition (geometry) which is used to choose the geomechanical units. The digital geological model is then populated with quantitative and semi-quantitative data on rock properties, fluid properties, saturations, initial conditions (p, T, [σ]) and other information. Both fluid and solid properties are needed this requires integration of geomechanics skills with geophysical and rock physics skills, and this article deals with a subset of this integration process, with an example from two wells in southwest Iran. Rock physics approaches are used to predict reservoir rock and fluid properties with wellbore and 3-D seismic data, which are also used to interpolate rock mechanics properties to the inter-well regions. The first step in a generic rock physics approach is diagnostic and involves the introduction of a suitable Rock Physics model.Acoustic impedance (AI), shear impedance (SI), and density (ρ) are the fundamental rock properties usually derived using AVO equations, and these parameters, along with attenuation coefficients, can then be correlated to static rock mechanics properties that define deformability and perhaps even strength. In this study, Poisson Impedance is introduced as a new seismic attribute used for lithology and fluid differentiation in the FahliyanFormation (reservoir rock) in two oil wells in the southwest of Iran. To do this, a novel rock physics model was developed for this naturally fractured carbonate reservoir.Currently, these data are also being used to correlate to a limited rock mechanics data base to develop a more extensive GEM to serve as input to more general geomechanical and reservoir modeling tasks.\n\n          </small></p>\n          <hr>\n        </div>\n\n        <div class=\"text\">\n            <h5>Determination of a rock physics model for the carbonate Fahliyan Formation in two oil wells in southwestern Iran</h5>\n            <h5><small>SeyedBijan Mahbaz, Hossein Memarian, Exploration Geophysics 43(10.1071/EGv43n1toc):47-57 · March 2012\n\n                DOI: 10.1071/EG11006</small></h5>  \n            <p><small>\n                Geophysical methods, especially seismic inversion, have improved considerably in recent years. The prediction of elastic behaviour is important to decrease risk in mining operations. The investigation of rock physics is a way to predict rock behaviours, especially reservoir geomechanical parameters. The first step in rock physics studies is to diagnose and introduce a suitable rock physics model. In this paper, we review rock physics models, such as the Rymer–Greenberg–Castagna model, and we compare them with real data trends in two oil wells of a carbonate reservoir (the Fahliyan Formation) in the Zagros Basin of southwestern Iran using sonic, density and porosity logs. After omitting the effect of water saturation and clay content, the best model for clean carbonate of the Fahliyan Formation was developed in two oil wells (A1 and A2).\n  \n            </small></p>\n            <hr>\n        </div>\n        \n        <div class=\"text\">\n            <h5>Optimization of reservoir cut-off parameters: A case study in SW Iran</h5>\n            <h5><small>SeyedBijan Mahbaz, Yaser Mirzaahmadian, Petroleum Geoscience 17(4):355-363 · November 2011\n\n                DOI: 10.1144/1354-079311-005</small></h5>  \n            <p><small>\n                Although reservoir quality cut-off criteria have been used formore than 50 years as a guide for economic decisions, there is still no rationalprocedure for identifying and applying them in Iranian oil and gas fields. Inother words, there are different 'rules-of-thumb' in different sections of theNational Iranian Oil Companies for determination of cut-off values. Forinstance, in one section, values of 10%, 50% and 50% are used for porosity,water saturation and shale content cut-offs, respectively; in another section,cut-off criteria are not used at all, simply an estimate of the time when 20%of oil-in-place could be produced. This paper addresses the optimization ofcut-off value estimation from raw and processed petrophysical data based onextracting the most appropriate relationship for permeability as a functionof porosity, water saturation and shale content - k = $(φ, Sw, Vsh). Theprocedure starts by looking at permeability as the key parameter in choosinga cut-off value because sometimes the minimum value (the permeabilitycut-off) is directly related to economic circumstances and is defined by theclient. Regression analysis coefficients of 0.936 and 0.870 were achieved forrelationships of the form k = $ (φ, Sw, Vsh) in the two petrofacies intervalsstudied. This leads to specification of minimum k values of permeability anddetermination of optimum cut-off values for φ, Sw and Vsh. This method isthen used to determine optimum cut-off values for the Burgan Member(sandstone) in the Kazhdumi Formation in an offshore oil field in the PersianGulf. The calculated cut-off values for this case for k = 1.0 mD are φ = 12.5%,Sw = 60% and Vsh = 27%, as opposed to the 'standard' corporate values ofφ = 10%, Sw = 50% and Vsh = 50%.\n  \n            </small></p>\n            <hr>\n          </div>\n          \n          <div class=\"text\">\n              <h5>Poroelastic effects in reactivation of a finger-like hydraulic fracture</h5>\n              <h5><small>Erfan Sarvaramini, Dmitry Garagash, Journal of Applied Mechanics 83(6) · March 2016</small></h5>  \n              <p><small>\n                  This paper studies the transient pressurization of a pre-existing, fingerlike crack in a poroelastic, permeable rock due to a fluid injection, the problem previously considered in the nonporoelastic reservoir context in the companion paper [Sarvaramini and Garagash, J. Appl. Mech., 2015]. Large-scale fluid leak-off from the crack and the associated pore-fluid diffusion within the permeable rock formation lead to dilation of the pore volume, which acts to additionally confine/close the crack. The influence of this so-called \"poroelastic backstress\" on the evolution of the fluid pressure in the crack and the onset of the fracture propagation are investigated. We first revisit the existing solution to an auxiliary problem of a poroelastic crack subjected to a step pressure increase, and generalize it to account for the full-space fluid leak-off diffusion. This solution is then used to formulate the solution to the transient pressurization of the crack due to a constant rate of fluid injection via the Green's function approach. Comparison to the reference solution for a fingerlike crack in a nonporoelastic reservoir shows that the poroelasticity has a minor effect on the fluid pressure evolution in the crack. However, the evolution of the fracture volume and the onset of the fracture propagation are shown to be significantly hindered by the poroelastic backstress at large enough injection time when fluid diffusion becomes fully two or three dimensional.\n    \n              </small></p>\n              <hr>\n          </div> \n          \n          <div class=\"text\">\n              <h5>Breakdown of a Pressurized Fingerlike Crack in a Permeable Solid</h5>\n              <h5><small>Erfan Sarvaramini, Dmitry Garagash, Journal of Applied Mechanics 82(6):061006 · April 2015</small></h5>  \n              <p><small>\n                  This paper is concerned with the analysis of a low-viscosity fluid injection into a pre-existing, finger-like crack within a linear elastic, permeable rock, and of the conditions leading to the onset of the fracture propagation (i.e., the breakdown). The problem is of interest in reservoir waterflooding, supercritical CO2 injection for geological storage, and other subsurface fluid injection applications. Fluid injection into a stationary crack leads to its elastic dilation and pressurization, buffered by the fluid leak-off into the surrounding rock. The solution of the problem, therefore, requires coupling of the crack deformation and the full-space pore-fluid pressure diffusion in the permeable rock. Contrary to the case of propagating hydraulic fractures, when significant part of the energy input is dissipated in the viscous fluid flow in the fracture , we find that the viscous fluid pressure drop inside a stationary fracture can be often neglected (we establish the conditions when one can do so). This, in turn, allows for a semi-analytical solution of the problem using the Green's function method, and, furthermore, for the full analytical treatment of the small/large injection time asymptotics. We apply the transient pressurization solution to predict the the onset of the propagation based on the criteria derived from the energy considerations for a finger-like crack.\n              </small></p>\n              <hr>\n          </div> \n          <div class=\"text\">\n              <h5>Initiation and propagation of a PKN hydraulic fracture in permeable rock: Toughness dominated regime</h5>\n              <h5><small>Erfan Sarvaramini, Dmitry Garagash, December 2011</small></h5>  \n              <p><small>\n                  The present work investigates the injection of a low-viscosity fluid into a pre-existing fracture with constrained height (PKN), as in waterflooding or supercritical CO2 injection. Contrary to conventional hydraulic fracturing, where 'cake build up' limits diffusion to a small zone, the low viscosity fluid allows for diffusion over a wider range of scales. Over large injection times the pattern becomes 2 or 3-D, necessitating a full-space diffusion modeling. In addition, the dissipation of energy associated with fracturing of rock dominates the energy needed for the low-viscosity fluid flow into the propagating crack. As a result, the fracture toughness is important in evaluating both the initiation and the ensuing propagation of these fractures. Classical PKN hydraulic fracturing model, amended to account for full-space leak-off and the toughness [Garagash, unpublished 2009], is used to evaluate the pressure history and fluid leak-off volume during the injection of low viscosity fluid into a pre-existing and initially stationary. In order to find the pressure history, the stationary crack is first subject to a step pressure increase. The response of the porous medium to the step pressure increase in terms of fluid leak-off volume provides the fundamental solution, which then can be used to find the transient pressurization using Duhamel theorem [Detournay & Cheng, IJSS 1991]. For the step pressure increase an integral equation technique is used to find the leak-off rate history. For small time the solution must converge to short time asymptote, which corresponds to 1-D diffusion pattern. However, as the diffusion length in the zone around the fracture increases the assumption of a 1-D pattern is no longer valid and the diffusion follows a 2-D pattern. The solution to the corresponding integral equation gives the leak-off rate history, which is used to find the cumulative leak-off volume. The transient pressurization solution is obtained using global conservation of fluid injected into the fracture. With increasing pressure in the fracture due to the fluid injection, the energy release rate eventually becomes equal to the toughness and fracture propagates. The evolution of the fracture length is established using the method similar to the one employed for the stationary crack.\n              </small></p>\n              \n          </div> \n</body>"

/***/ }),

/***/ "./src/app/publication/publication.component.ts":
/*!******************************************************!*\
  !*** ./src/app/publication/publication.component.ts ***!
  \******************************************************/
/*! exports provided: PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicationComponent = /** @class */ (function () {
    function PublicationComponent() {
        this.fullText = true;
        this.showMore = false;
        this.showLess = false;
        this.rmTextShort = '';
        this.rmTextFull = '';
        this.inputWords = [];
    }
    PublicationComponent.prototype.readMore = function (flag) {
        if (flag) {
            this.showMore = false;
            this.fullText = true;
            this.rmTextFull = this.text;
            this.showLess = true;
        }
        else {
            this.showLess = false;
            this.showMore = true;
            this.fullText = false;
        }
    };
    PublicationComponent.prototype.ngOnChanges = function () {
        this.rmTextShort = this.text;
        this.rmTextFull = this.text;
        this.inputWords = this.text.split(' ');
        if (this.inputWords.length > 30) {
            this.fullText = false;
            this.showMore = true;
            this.rmTextShort = this.inputWords.slice(0, 30).join(' ') + '...';
        }
        else {
            if (this.rmTextShort.length > 300) {
                this.fullText = false;
                this.showMore = true;
                this.rmTextShort = this.rmTextShort.substr(0, 300) + '...';
            }
            else {
                var lineBreaks = this.rmTextShort.split(/\n/g);
                if (lineBreaks.length > 4) {
                    this.fullText = false;
                    this.showMore = true;
                    this.rmTextShort = lineBreaks.slice(0, 4).join('\n') + '...';
                }
            }
        }
    };
    PublicationComponent.prototype.ngOnInit = function () {
    };
    PublicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publication',
            template: __webpack_require__(/*! ./publication.component.html */ "./src/app/publication/publication.component.html"),
            styles: [__webpack_require__(/*! ./publication.component.css */ "./src/app/publication/publication.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "./src/app/renew/renew.component.css":
/*!*******************************************!*\
  !*** ./src/app/renew/renew.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nbody{\r\n    padding-top:100px;\r\n    overflow: hidden;\r\n    padding-bottom:330px;\r\n}\r\n\r\n.siderright{\r\n   float:right; \r\n width:300px;\r\n margin-top:400px;\r\n margin-right:50px;\r\n margin-bottom: 60px;\r\n  \r\n}\r\n\r\nimg{\r\n    width: 600px;\r\n    height: 450px;\r\n    padding-top:30px;\r\n    padding-bottom: 50px;\r\n    \r\n}\r\n\r\n#imgleft{\r\n    width:200px;\r\n    height: 230px;\r\n    padding-bottom: 0;\r\n    padding-top:0;\r\n}\r\n\r\n/* The sidebar menu */\r\n\r\n.siderleft {\r\n    height: 400px; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 500px; /* Set the width of the sidebar */\r\n   \r\n    z-index: 1; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n    background-color: white;\r\n    \r\n    padding:80px 20px 150px 40px;\r\n    color: black;\r\n    float:left;\r\n    margin-bottom: 80px;\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n body{\r\n        padding-top:0%;\r\n    }\r\n    .sideright{\r\n        margin-top:20%;\r\n        padding-right:0%;\r\n        \r\n    }\r\n\r\n    .siderleft {\r\n        height: 200px; /* Full-height: remove this if you want \"auto\" height */\r\n        width: 400px; /* Set the width of the sidebar */\r\n        margin-bottom: 850px;\r\n        padding-right: 10%;\r\n    } \r\n    img{\r\n        width:250px;\r\n        height: 230px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    body{\r\n        padding-top:0%;\r\n    }\r\n    .sideright{\r\n        float:left;\r\n        width:700px;\r\n        padding-left:10%;\r\n        padding-top:0%;\r\n        margin-top:20%;\r\n        \r\n    }\r\n\r\n    .siderleft {\r\n        margin-bottom: 700px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/renew/renew.component.html":
/*!********************************************!*\
  !*** ./src/app/renew/renew.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"siderright\">\n      <p>\n          <small>Our innovative technology (innovated wind tower) for natural ventilation and passive cooling\n            focuses on temperature control and heat reduction in residential and commercial buildings\n            (e.g., school buildings and store retailers) to provide thermal comfort for inhabitants and\n            customers with Zero Grid Electricity.\n            \n            </small>\n      </p>\n      <img id=\"imgleft\"src=\"data:image/jpeg;base64,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\"/>\n     <!-- <p id=\"footer\"><small>(Figure 1)</small></p>-->\n    </div>\n    \n    <!-- Page content -->\n    <div class=\"siderleft\">\n      <h3>Renewable Energy Solution</h3>\n      <img  src=\"http://www.sgccanada.ca/images/pic05.jpg\"/>\n    \n      <p>\n        <small>Optimized energy consumption and thermal comfort for inhabitants are important factors in\n          buildings design. Nowadays, air conditioning systems have a significant share in consuming\n          electrical energy in residential and commercial buildings. Passive cooling systems, such as wind\n          towers, can help to reduce energy use in buildings and at the same time diminish greenhouse\n          gas (GHG) emissions. Wind towers can naturally ventilate buildings as well as create enhanced\n          thermal comfort for inhabitants throughout the warm months.<br/><br/>\n          Our innovative wind tower design is a practical solution to provide natural ventilation and\n          passive cooling in residential and commercial buildings (e.g., school buildings and store\n          retailers) in order to control temperature and decrease heat during the summer months. The\n          innovated wind tower has the following important specifications: simple design and\n          manufacturing; easy installation and usage; high efficiency by capturing maximum available\n          wind; no electricity needed from grid; no-noise; and sustainable technology.<br/><br/>\n          An example for the use of innovated wind tower is store retailers. It is estimated that\n          approximately 20% of energy consumption in store retailers in Ontario, Canada is for HVAC\n          systems. The use of our innovative technology can create a more comfortable shopping\n          experience for customers as well as help to keep food product quality and reduce costs. Due to\n          the large number of these retail stores in North America, by using this innovated wind tower,\n          they can significantly help to reduce GHG emissions and environmental pollution (especially CO 2\n          emissions) associated with conventional air conditioning systems.<br/><br/>\n          Our innovative design can be used as a green architectural component in new residential and\n          commercial buildings.\n  </small>\n      </p>\n    </div>\n  </body>"

/***/ }),

/***/ "./src/app/renew/renew.component.ts":
/*!******************************************!*\
  !*** ./src/app/renew/renew.component.ts ***!
  \******************************************/
/*! exports provided: RenewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewComponent", function() { return RenewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RenewComponent = /** @class */ (function () {
    function RenewComponent() {
    }
    RenewComponent.prototype.ngOnInit = function () {
    };
    RenewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renew',
            template: __webpack_require__(/*! ./renew.component.html */ "./src/app/renew/renew.component.html"),
            styles: [__webpack_require__(/*! ./renew.component.css */ "./src/app/renew/renew.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RenewComponent);
    return RenewComponent;
}());



/***/ }),

/***/ "./src/app/scan-tech/scan-tech.component.css":
/*!***************************************************!*\
  !*** ./src/app/scan-tech/scan-tech.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* 1st example\r\ninspired from :\r\n- http://stackoverflow.com/questions/25573562/wrapping-a-youtube-video-in-a-static-image-frame-and-maintain-responsive-resiz\r\n- http://jsfiddle.net/4g9e3ywy/ */\r\ndiv.laptop-wrapper {\r\n    position: relative;\r\n    padding-top: 25px;\r\n    padding-bottom: 67.5%;\r\n    height: 0;\r\n}\r\ndiv.laptop-wrapper iframe {\r\n    box-sizing: border-box;\r\n    background: url(https://i.stack.imgur.com/zZNgk.png) center center no-repeat;\r\n    background-size: contain;\r\n    padding: 11.9% 15.5% 14.8%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n#top{\r\n    height:350px;\r\n    width: 100%;\r\n    color:white;\r\n    padding-bottom: 5%;\r\n    background-size: cover;\r\n}\r\nbody{\r\n    padding-top: 80px;\r\n    \r\n}\r\nimg{\r\n    width:300px;\r\n    height: 250px;\r\n}\r\n.row{\r\n    padding-top:20px;\r\n    padding-left:100px;\r\n    padding-right:50px;\r\n}\r\n#secondimg{\r\n    width:400px;\r\n    height: 250px;\r\n    \r\n}\r\n#second, #th{\r\n    padding-top:80px;\r\n    padding-bottom: 80px;\r\n}\r\n#first{\r\n    \r\n     background-color: rgb(235, 239, 245);\r\n    padding-top:80px;\r\n    padding-bottom: 80px;\r\n}\r\n#sec{\r\n    background-image: url(\"https://www.d2l.com/wp-content/uploads/2018/02/ent-solutions-screenshot-bg.png\");\r\n   color:white;\r\n   padding-top:80px;\r\n   padding-bottom: 80px;\r\n}\r\n#third{\r\n    background-color: rgb(235, 239, 245);\r\n    padding-top:80px;\r\n    padding-bottom: 80px;\r\n}\r\nvideo#bgVideo {\r\n    position: absolute; \r\n    top: 0px; \r\n    left: 0px; \r\n    min-width: 100%; \r\n    min-height: 100%;\r\n    z-index: -1; \r\n  }\r\n@media only screen and (max-width: 600px) {\r\n    .laptop-wrapper{\r\n        display: none;\r\n    }\r\n    .row{\r\n        padding-left:0%;\r\n        padding-right:0%;\r\n    }\r\n    p, h5{\r\n        padding-left:5%;\r\n        padding-right:5%;\r\n    }\r\n    img{\r\n        width:400px;\r\n        height: 250px;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n      #secondimg{\r\n          padding-right:10%;\r\n      }\r\n      .laptop-wrapper{\r\n          display: none;\r\n      }\r\n    }"

/***/ }),

/***/ "./src/app/scan-tech/scan-tech.component.html":
/*!****************************************************!*\
  !*** ./src/app/scan-tech/scan-tech.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div>\n      <img id=\"top\" src=\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/NGTYhyRhgilq4uu1a/animation-of-digital-hologram-scanning-technology-of-modern-city-in-business-and-telecommunication-internet-network-concept-in-4k_hg1u5za_e_thumbnail-full01.png\"/>\n  </div>\n  \n    \n      <div class=\"row\" id=\"first\"> \n         \n          <div class=\"col-sm-6\">\n              <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/5ad1048bf950b77bff2d5c13/1523647852495/IMG_7345.JPG?format=2500w\"/>\n        </div>\n        <div class=\"col-sm-6\">\n              <p><strong>InspecTerra Inc.</strong> developed a scanning device and software to evaluate reinforcement from the surface of concrete and detect defects (corrosion, pitting, and cracks). InspecTerra believes that with the quickness and reliability of the method, failure probability in RC structures can be detected sooner which increase safety, and assure their designed service capacity.</p>\n        </div>\n        \n      \n      </div>\n      <div>\n          <div class=\"row\" id=\"second\"> \n             \n             \n       <div class=\"col-sm-4\">\n        <p>Non-Destructive Testing (NDT) industry needs a quick and reliable method to detect corrosion of\n            reinforced concrete structures.</p>\n        </div>\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-6\">\n            <img id=\"secondimg\" src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/5bc21fc74785d3ab4dedea60/1539448783032/IMG_0756.JPG?format=2500w\" />\n           </div>\n        </div>\n    </div>\n      <div class=\"row\" id=\"sec\">\n\n          <div class=\"col-sm-6\">\n              <h5>\n                  Technology\n              </h5>\n              <p>\n                  InspecTerra Inc. TM (ITI TM) offers unique, reliable, time and cost effective, and environmentally friendly method for condition assessment of reinforced concrete structures.\n              </p>\n              <p><small>\n                  Corrosion is a leading cause of structural deficiency in concrete bridges and has a negative impact on structural building components.\n                </small>\n                </p>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"laptop-wrapper\">\n                  <iframe width=\"560\" height=\"315\" src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/57d19029197aea942bd6435c/1473351721780/TECHNOLOGY3.jpg?format=1500w\" frameborder=\"0\" allowfullscreen></iframe>\n                </div>\n            </div>\n          </div>\n            \n\n    <div class=\"row\" id=\"th\"> \n       \n       \n\n  \n  <div class=\"col-sm-6\">\n      <img id=\"secondimg\" src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/5bc21ff24192027cad6c4dba/1539448827478/IMG_0758.JPG?format=2500w\" />\n     </div>\n     <div class=\"col-sm-2\"></div>\n  <div class=\"col-sm-4\">\n      <p>We have developed a unique, reliable, time and cost effective device, and our approach costs less than\n          the other inspection methods.</p>\n      </div>\n</div>\n       \n        \n       \n       <div class=\"row\" id=\"third\"> \n    \n          <div class=\"col-sm-6\">\n                  \n                  <h5>Advantages of developed method:</h5>\n                    <ul>\n                      <li><small>Load distribution mapping</small></li>\n                      <li><small>No specific surface preparation</small></li>\n                      <li><small>Inspection speed: 10 meter/minute</small></li>\n                      <li><small>Not affected by environmental conditions (moisture, salt, temperature)</small></li>\n                      <li><small>No limitations in repeatability</small></li>\n                      <li><small>Easy to operate</small></li>\n                      <li><small>Competitive cost</small> </li>\n                    </ul>\n                    \n          </div>\n          <div class=\"col-sm-4\">\n              <img src=\"https://static1.squarespace.com/static/57c884f746c3c4fc1ca6d24b/t/5ad10672352f53c87aef1812/1523648162981/IMG_7349.JPG?format=750w\"/>\n          </div>\n       \n        </div>\n        <footer></footer>\n</body>\n"

/***/ }),

/***/ "./src/app/scan-tech/scan-tech.component.ts":
/*!**************************************************!*\
  !*** ./src/app/scan-tech/scan-tech.component.ts ***!
  \**************************************************/
/*! exports provided: ScanTechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanTechComponent", function() { return ScanTechComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScanTechComponent = /** @class */ (function () {
    function ScanTechComponent() {
    }
    ScanTechComponent.prototype.ngOnInit = function () {
    };
    ScanTechComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scan-tech',
            template: __webpack_require__(/*! ./scan-tech.component.html */ "./src/app/scan-tech/scan-tech.component.html"),
            styles: [__webpack_require__(/*! ./scan-tech.component.css */ "./src/app/scan-tech/scan-tech.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScanTechComponent);
    return ScanTechComponent;
}());



/***/ }),

/***/ "./src/app/slideshow/slideshow.component.css":
/*!***************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media only screen and (max-width: 600px) {\r\n  body{\r\n    height:1000px;\r\n  }\r\n  p, h3{\r\n   font-size:small;\r\n  }\r\n}\r\n  img{\r\n    width: 100%;\r\n    position: relative;\r\n    background-size: cover;\r\n   \r\n    margin-right: -100%;\r\n   display: inline-block;\r\n  height: 400px;;\r\n   margin: 0;\r\n   \r\n    \r\n  }\r\n  .slideshow \r\n { background-size: cover;\r\n }\r\n"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.html":
/*!****************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\n    <ng-template ngbSlide>\n      <img [src]=\"images[0]\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n        <h3>Condition and Performance Assessment of Infrastructure</h3>\n        <p>The world’s first scanning device using a cutting-edge technology to detect corrosion in reinforced concrete.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img [src]=\"images[1]\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n        <h3>Pipeline Inspection</h3>\n        <p>Our semi-autonomous terrestrial robotic pipeline sensor platform helps us to inspect surface and underground pipelines and refinery facilities. </p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img [src]=\"images[2]\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Passive HVAC System</h3>\n        <p>Our innovative technology (wind tower) for Natural Ventilation focuses on temperature control and heat dissipation in school buildings and store retailers to provide thermal comfort for students and customers with ZERO GRID CHARGE. \n\n          </p>\n      </div>\n    </ng-template>\n  </ngb-carousel>"

/***/ }),

/***/ "./src/app/slideshow/slideshow.component.ts":
/*!**************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.ts ***!
  \**************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent(config) {
        this.config = config;
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); }); //`https://i.paste.pics/f414330ef1e1de8f653af5535d6221bf.png`);
        // customize default values of carousels used by this component tree
        this.config.interval = 10000;
        this.config.wrap = false;
        this.config.keyboard = false;
        this.config.pauseOnHover = false;
    }
    //constructor() { }
    SlideshowComponent.prototype.ngOnInit = function () {
    };
    SlideshowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slideshow',
            template: __webpack_require__(/*! ./slideshow.component.html */ "./src/app/slideshow/slideshow.component.html"),
            styles: [__webpack_require__(/*! ./slideshow.component.css */ "./src/app/slideshow/slideshow.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "./src/app/training/training.component.css":
/*!*************************************************!*\
  !*** ./src/app/training/training.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding-top:80px;\r\n    padding-bottom:80px;\r\n}\r\n.text{\r\n    padding:80px 100px 50px 100px;\r\n   \r\n}\r\nhr{\r\n   background-color:#007bff;\r\n    font-size: 3px;\r\n    width: 60%;\r\n    float:left;\r\n    \r\n    height: 2px\r\n}\r\nh5{\r\n    color:#007bff;\r\n}\r\nul li{\r\n    text-decoration: none;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .text{\r\n        padding-left:5%;\r\n        padding-right:5%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/training/training.component.html":
/*!**************************************************!*\
  !*** ./src/app/training/training.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"text\">\n      <h5>Nanotechnology Application in Reservoir Geomechanics</h5>  \n      <p><small>\n          Fracture propagation starts at the molecular scale. Failure initiates at weakly bonded sites, generally between crystals or grains of the structure. Fracture propagation follows weakly bond elements in the structure (various scales from the grain scale to the jointed rock mass scale) and the work aspects of propagation are dominated by the stress distributions in the field and the local fracture toughness. The purpose of this course is to learn basics of Nanotechnology and its application to model the fracture propagation of hard rocks based on Molecular Dynamic Modelling point of view.\n\n          <br/>Course contents: \n          <ul>\n          <li>Fundamentals of Nanotechnology</li>\n          \n          <li>Nanotechnology Tools</li>\n          \n          <li>Advanced Molecular Dynamic Modelling of Brittle Rocks</li>\n          </ul>\n      </small></p>\n      <hr> \n    </div>\n\n    <div class=\"text\">\n        <h5>Life cycle Impact Assessment</h5>  \n        <p><small>\n            Life cycle assessment (LCA) is one of the tools used primarily for environmental impact assessment of different products and services throughout their life cycle stages (ISO 14040, 2006). The purpose of this course is to introduce the life cycle assessment concept and tools. The participants will learn the steps involved in conducting an LCA of a product system and complete a simple life cycle assessment.\n        </small></p>\n        <hr> \n      </div>\n\n      <div class=\"text\">\n          <h5>Infrastructure Asset Management</h5>  \n          <p><small>\n              Asset management is the “systematic and coordinated activities and practice which an organization optimally and sustainability manages its assets, their associated performance, risks and expenditures over their life cycles for the purposes of achieving its organizational strategic plan”. The purpose of this course is to review various asset management tools and to develop the skills and knowledge needs of asset management specialists, middle and senior managers who have responsibility for the financial, capital, and operational management of municipal public assets.\n          </small></p>\n          <hr> \n        </div>\n\n        <div class=\"text\">\n            <h5>Non-Destructive Testing -Surface Wave Analysis  - Displacement Measurement with Laser Vibrometer </h5>  \n            <p><small>\n                One of the main hot topics in Non-destructive testing is ultrasonic surface wave analysis. This course contains the basic of ultrasonic surface waves analysis method for discontinuity detection of any material and the application of displacement measurement using Laser Vibrometer for surface wave analysis.\n            </small></p>\n            \n          </div>\n</body>"

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingComponent = /** @class */ (function () {
    function TrainingComponent() {
    }
    TrainingComponent.prototype.ngOnInit = function () {
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
8;
19;
20;
21;
22;
23;
24;
25;
26;


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.addNew = function (usercreds) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        var emailid = 'name=' + usercreds.username;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        this.http.post('http://localhost:3333/adduser', creds, { headers: headers }).subscribe(function (data) {
            if (data.json().success) {
                _this.http.post('http://localhost:3333/sendmail', emailid, { headers: headers }).subscribe(function (data) {
                    if (data.json().success) {
                        console.log('Sent successfully');
                    }
                });
            }
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Azadeh\Desktop\azresume\angular\inspecterra\inspect\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map