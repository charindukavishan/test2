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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/addadmin/addadmin.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/addadmin/addadmin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div a class=\"row\">\n      <div  class=\"col-md-12 mr-auto ml-auto\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h5 class=\"title\">Register Admin</h5>\n          </div>\n          <div class=\"card-body\">\n            <form #regForm=\"ngForm\">\n              \n              \n              <div class=\"row\">\n                <div class=\"col-md-6 pr-1\">\n                  <div class=\"form-group\">\n                    <label>First Name</label>\n                    <input #firstname=\"ngModel\" required id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Company\" [(ngModel)]=\"reg.firstName\">\n                    <!-- <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">First Name is required</div> -->\n                    <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">Email is required and must be valid</div>\n                  </div>\n                </div>\n                <div class=\"col-md-6 pl-1\">\n                  <div class=\"form-group\">\n                    <label>Last Name</label>\n                    <input #lastName=\"ngModel\" required type=\"text\" id=\"lastName\" name=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"reg.lastName\">\n                    <div class=\"form-control-feedback\" [hidden]=\"lastName.valid\">Email is required and must be valid</div>\n\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\"> -->\n                  <!-- <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                      <label>Company (disabled)</label>\n                      <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"col-md-3 px-1\">\n                    <div class=\"form-group\">\n                      <label>Username</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"col-md-12 pl-1\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                    </div>\n                  </div> -->\n                <!-- </div> -->\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Email address</label>\n                          <input #email=\"ngModel\" pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" required type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"reg.email\">\n                          <div class=\"form-control-feedback\" [hidden]=\"email.valid\">Email is required and must be valid</div>\n                        </div>\n                    </div>\n                    \n                  </div>\n                  <p *ngIf=\"iserror\">\n                      <ngb-alert type=\"danger\"  [dismissible]=\"false\">\n                          <div class=\"container\">\n                              <ng-container>\n                                  <i class=\"nc-icon nc-bell-55\"></i>\n                              </ng-container>\n                  {{ serverErrorMessages }}\n                              <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert()\">\n                                  <i class=\"nc-icon nc-simple-remove\"></i>\n                              </button>\n                          </div>\n                      </ngb-alert>\n                  </p>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>Address</label>\n                    <input #address=\"ngModel\" id=\"address\" required name=\"address\" type=\"text\" class=\"form-control\" [(ngModel)]=\"reg.address\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 pr-1\">\n                  <div class=\"form-group\">\n                    <label>City</label>\n                    <input #city=\"ngModel\" type=\"text\" required id=\"city\" name=\"city\" class=\"form-control\" placeholder=\"City\" [(ngModel)]=\"reg.city\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 px-1\">\n                  <div class=\"form-group\">\n                    <label>Country</label>\n                    <input #country=\"ngModel\" type=\"text\" required id=\"country\" name=\"country\" class=\"form-control\" placeholder=\"Country\" [(ngModel)]=\"reg.country\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 pl-1\">\n                  <div class=\"form-group\">\n                    <label>Postal Code</label>\n                    <input #zip=\"ngModel\" type=\"number\" required id=\"zip\" name=\"zip\" class=\"form-control\" placeholder=\"ZIP Code\" [(ngModel)]=\"reg.zip\">\n                    <div class=\"form-control-feedback\" [hidden]=\"email.valid\">Must be number</div>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>About Me</label>\n                    <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\" >Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                  </div>\n                </div>\n              </div> -->\n              <div class=\"row\">\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"password\">Create Password</label>  \n                          <input class=\"form-control input-md\" #password=\"ngModel\" pattern=\".{6,}\" required id=\"password\" name=\"password\" type=\"password\" placeholder=\"Create password\" [(ngModel)]=\"reg.password\">   \n                          <div class=\"form-control-feedback\" [hidden]=\"password.valid\">Password must be at least 6 characters long</div>\n                      </div>\n                  </div>\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                           <label class=\"control-label\" for=\"confirmPassword\">Repeat Password</label>  \n                          <input  class=\"form-control input-md\" #confirmPassword=\"ngModel\" required id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" placeholder=\"Repeat password\" [(ngModel)]=\"reg.confirmPassword\">\n                          <div class=\"form-control-feedback\" *ngIf=\"password.value!=confirmPassword.value\">Password not match</div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"ml-auto mr-auto text-center\">\n                  <button (click)=\"register()\" [disabled]=\"!regForm.valid||(password.value!=confirmPassword.value)\" class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-tap-01\"></i>Sing Up</button>\n               </div>\n            </form>\n            \n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/admin/addadmin/addadmin.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/addadmin/addadmin.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/addadmin/addadmin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/addadmin/addadmin.component.ts ***!
  \******************************************************/
/*! exports provided: AddadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddadminComponent", function() { return AddadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddadminComponent = /** @class */ (function () {
    function AddadminComponent(service, router) {
        this.service = service;
        this.router = router;
        this.reg = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            country: '',
            zip: '',
            nic: '',
            password: '',
            confirmPassword: '',
            role: 'admin'
        };
        this.iserror = false;
        this.res = '';
        this.serverErrorMessages = '';
    }
    AddadminComponent.prototype.ngOnInit = function () {
    };
    AddadminComponent.prototype.register = function () {
        var _this = this;
        this.service.storedetails(this.reg)
            .subscribe(function (response) {
            if (response) {
                _this.res = response['status'];
                console.log(response);
                if (!_this.res) {
                    _this.serverErrorMessages = 'Your email is already exists';
                }
                else {
                    console.log(response);
                    _this.serverErrorMessages = "Registration Succsesfull";
                    _this.router.navigateByUrl('/signup');
                }
            }
        }, function (error) {
            console.log(error);
            _this.iserror = true;
            {
                if (error)
                    _this.serverErrorMessages = 'Your email is already exists';
            }
        });
    };
    AddadminComponent.prototype.closeAlert = function () {
        this.iserror = false;
    };
    AddadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addadmin',
            template: __webpack_require__(/*! ./addadmin.component.html */ "./src/app/admin/addadmin/addadmin.component.html"),
            styles: [__webpack_require__(/*! ./addadmin.component.scss */ "./src/app/admin/addadmin/addadmin.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddadminComponent);
    return AddadminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-pic/admin-pic.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-pic/admin-pic.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n    <br>\n      <form>\n          <div  class=\"form-group\">\n              <label for=\"multiple\">Choose file</label>\n              <!-- <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  /> -->\n  \n              <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\n              <div *ngIf=\"isloading\" class=\"loader\"></div>\n            </div>            \n      </form>\n      <!-- <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"fa fa-upload\"></span> Upload all\n                </button> -->\n  </div>\n  \n  \n  <!-- <div class=\"card-body\">\n      <h5 class=\"card-title\">Select a file for upload:</h5>\n      <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\n    </div>\n    \n    <br>\n          <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\n              File uploaded: <a [href]=\"downloadSrc\">{{downloadSrc}}</a>\n              <img src={{downloadSrc}} alt=\"\">\n          </div>\n    \n          <br> -->"

/***/ }),

/***/ "./src/app/admin/admin-pic/admin-pic.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-pic/admin-pic.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  border: 10px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite; }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/admin/admin-pic/admin-pic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/admin-pic/admin-pic.component.ts ***!
  \********************************************************/
/*! exports provided: AdminPicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPicComponent", function() { return AdminPicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminPicComponent = /** @class */ (function () {
    function AdminPicComponent(service, afStorage, router, admin) {
        this.service = service;
        this.afStorage = afStorage;
        this.router = router;
        this.admin = admin;
        this.pic = "";
        this.files = [];
        this.id = '';
        this.url = '';
        this.model = {
            url: "",
            PicUrl: ""
        };
        this.isloading = false;
    }
    AdminPicComponent.prototype.ngOnInit = function () {
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.id = tokenPayload._id;
        this.url = 'http://localhost:3001/api/updateprofilepic/' + tokenPayload._id;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: this.url, itemAlias: 'photo' });
    };
    AdminPicComponent.prototype.upload = function (event) {
        var _this = this;
        this.isloading = true;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.downloadURL = _this.ref.getDownloadURL(); }))
            .subscribe();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (PicUrl) {
                _this.model.PicUrl = PicUrl;
                _this.isloading = false;
                // console.log(url); // <-- do what ever you want with the url..
                var token = _this.service.getToken();
                var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
                _this.id = tokenPayload._id;
                _this.model.url = 'http://157.230.218.160:3000/api/updateprofilepic/' + tokenPayload._id;
                _this.service.editPic(_this.model).subscribe(function (res) {
                    _this.admin.ngOnInit();
                    _this.admin.editpi = false;
                }, function (err) {
                    console.log(err);
                });
                // this.pic=url;
            });
        })).subscribe();
    };
    AdminPicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-pic',
            template: __webpack_require__(/*! ./admin-pic.component.html */ "./src/app/admin/admin-pic/admin-pic.component.html"),
            styles: [__webpack_require__(/*! ./admin-pic.component.scss */ "./src/app/admin/admin-pic/admin-pic.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"]])
    ], AdminPicComponent);
    return AdminPicComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/12.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"{{pic}}\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\">\n                </div>\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class='fas fa-edit' style='font-size:24px'></i></button> -->\n                <button type=\"file\" rel=\"tooltip\" (click)=\"editpic()\" ngbTooltip=\"Edit profile picture\" data-placement=\"bottom\" type=\"button\"\n                    class=\"btn btn-primary btn-link\">\n                    <i class='fa fa-edit' style='font-size:36px'></i>\n                </button>\n                <div *ngIf=\"editpi\">\n                    <app-admin-pic></app-admin-pic>\n                </div>\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class='fas fa-edit' style='font-size:24px'></i></button> -->\n                <!-- <button type=\"file\" rel=\"tooltip\" ngbTooltip=\"Edit profile picture\" data-placement=\"bottom\" type=\"button\" class=\"btn btn-primary btn-link\"> <i class='fa fa-edit' style='font-size:36px'></i></button> -->\n                <h2 class=\"title\">{{firstName}} {{lastName}}\n                    <br />\n                </h2>\n\n\n                <!-- <app-editpropic></app-editpropic> -->\n                <!-- <div class=\"name\">\n                    <h2 class=\"title\">{{userDetails.firstName}} {{userDetails.lastName}}<br /></h2>\n                \n                </div> -->\n            </div>\n            <div class=\"row\">\n                <div *ngIf=\"ishome()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/admin/owners\">\n                        <button class=\"btn btn-outline-default btn-round\">\n                            <i class=\"nc-icon nc-single-02\" style=\"font-size:20px;\"></i> Park owners</button>\n                    </a>\n                </div>\n                <div *ngIf=\"ishome()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/admin/newparks\">\n                        <button class=\"btn btn-outline-default btn-round\">\n                            <i class=\"nc-icon nc-bank\" style=\"font-size:20px;\"></i> New parks</button>\n                    </a>\n                </div>\n                <div *ngIf=\"ishome()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/admin/map\">\n                        <button class=\"btn btn-outline-default btn-round\">\n                            <i class=\"nc-icon nc-pin-3\" style=\"font-size:20px;\"></i> Map</button>\n                    </a>\n                </div>\n                <div *ngIf=\"ishome()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/admin/reported\">\n                        <button class=\"btn btn-outline-danger btn-round\">\n                            <i class=\"fa fa-wheelchair-alt\" style=\"font-size:20px;\"></i>Reported parks</button>\n                    </a>\n                </div>\n\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, router, location) {
        this.service = service;
        this.router = router;
        this.location = location;
        this.userId = '';
        this.firstName = "";
        this.lastName = "";
        this.editpi = false;
        this.pic = "../../assets/img/faces/default.jpg";
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.service.isLoggedIn())
            this.router.navigate(['/login']);
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            _this.userId = _this.userDetails._id;
            _this.firstName = _this.userDetails.firstName;
            _this.lastName = _this.userDetails.lastName;
            if (_this.userDetails.proPic != '')
                _this.pic = _this.userDetails.proPic;
            _this.service.setid(_this.userDetails._id);
            // console.log(this.userId);
            // console.log(this.userDetails)
        }, function (err) {
            console.log(err);
        });
    };
    AdminComponent.prototype.onLogout = function () {
        this.service.deleteToken();
        this.router.navigate(['/login']);
    };
    AdminComponent.prototype.navigate = function () {
        console.log('navigate');
        this.router.navigate(['/userprofile/myparks']);
    };
    AdminComponent.prototype.ishome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/admin') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminComponent.prototype.editpic = function () {
        if (this.editpi == false)
            this.editpi = true;
        else
            this.editpi = false;
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminmap/adminmap.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/adminmap/adminmap.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          Google Maps\n        </div>\n        <div class=\"card-body \">\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n            <!-- <agm-direction\n                      *ngIf=\"destination.lat !== null\"\n                      [origin]=\"{ lat: lat, lng: lng }\"\n                      [destination]=\"destination\"\n                    >\n                    </agm-direction> -->\n\n            <!-- <agm-marker\n                    *ngIf=\"destination.lat === null\"\n                    [latitude]=\"lat\"\n                    [longitude]=\"lng\"\n                  ></agm-marker> -->\n            <agm-marker ng-click=\"click()\" *ngFor=\"let keeper of keepers\" [latitude]=\" keeper.lat\" [longitude]=\" keeper.lng\"></agm-marker>\n          </agm-map>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/adminmap/adminmap.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/adminmap/adminmap.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 500px; }\n"

/***/ }),

/***/ "./src/app/admin/adminmap/adminmap.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/adminmap/adminmap.component.ts ***!
  \******************************************************/
/*! exports provided: AdminmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmapComponent", function() { return AdminmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminmapComponent = /** @class */ (function () {
    function AdminmapComponent(mapsAPILoader, ngZone, service) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.service = service;
        this.lat = null;
        this.lng = null;
        this.zoom = 4;
        this.origin = { lat: this.lat, lng: this.lng };
        this.destination = { lat: null, lng: null };
        this.keepers = [];
    }
    AdminmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            _this.zoom = 12;
            console.log(_this.lat, _this.lng);
        }, function (err) { return console.log(err); });
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: [],
                componentRestrictions: { country: "LK" }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.destination.lat = place.geometry.location.lat();
                    _this.destination.lng = place.geometry.location.lng();
                    console.log(_this.destination);
                });
            });
        });
        this.service.allkeepers().subscribe(function (response) {
            _this.kepers = response;
            _this.res = _this.kepers.length;
            for (var i = 0; i < _this.kepers.length; i++) {
                if (_this.kepers[i].state == "open") {
                    _this.class = "btn btn-danger btn-round";
                    _this.kepers[i].state = "close";
                }
                else {
                    _this.class = "btn btn-warning btn-round";
                    _this.kepers[i].state = "open";
                }
                _this.keepers[i] = {
                    lat: _this.kepers[i].lat,
                    lng: _this.kepers[i].lng,
                };
            }
        });
    };
    // calculateDuration() {
    //   var directionsService = new google.maps.DirectionsService();
    //   var directionsDisplay = new google.maps.DirectionsRenderer();
    //   var mapOptions = {
    //     zoom: 15,
    //     center: this.origin
    //   };
    //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //   directionsDisplay.setMap(map);
    //   var request = {
    //     origin: this.origin,
    //     destination: this.destination,
    //     travelMode: "DRIVING"
    //   };
    //   directionsService.route(request, function(response, status) {
    //     console.log(response);
    //     // var point = response.routes[0].legs[0];
    //     // if (status == "OK") {
    //     //   document.getElementById("point").innerHTML =
    //     //     point + point.duration.text + " km";
    //     // }
    //   });
    // }
    // calculateDuration() {
    //   var duration = google.maps.geometry.duration(
    //     new google.maps.LatLng(this.lat, this.lng),
    //     new google.maps.LatLng(this.destination.lat, this.destination.lng)
    //   );
    //   document.getElementById("duration").innerHTML = duration / 1000 + "S";
    // }
    AdminmapComponent.prototype.calculateDistance = function () {
        // console.log(google.maps.geometry.spherical.computeDurationBetween());
        var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.lat, this.lng), new google.maps.LatLng(this.destination.lat, this.destination.lng));
        console.log(distance);
        document.getElementById("distance").innerHTML = distance / 1000 + "km";
    };
    AdminmapComponent.prototype.click = function () {
        console.log('click');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdminmapComponent.prototype, "searchElementRef", void 0);
    AdminmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminmap',
            template: __webpack_require__(/*! ./adminmap.component.html */ "./src/app/admin/adminmap/adminmap.component.html"),
            styles: [__webpack_require__(/*! ./adminmap.component.scss */ "./src/app/admin/adminmap/adminmap.component.scss")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], AdminmapComponent);
    return AdminmapComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminmessages/adminmessages.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/adminmessages/adminmessages.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  adminmessages works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/adminmessages/adminmessages.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/adminmessages/adminmessages.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/adminmessages/adminmessages.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/adminmessages/adminmessages.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminmessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmessagesComponent", function() { return AdminmessagesComponent; });
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

var AdminmessagesComponent = /** @class */ (function () {
    function AdminmessagesComponent() {
    }
    AdminmessagesComponent.prototype.ngOnInit = function () {
    };
    AdminmessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminmessages',
            template: __webpack_require__(/*! ./adminmessages.component.html */ "./src/app/admin/adminmessages/adminmessages.component.html"),
            styles: [__webpack_require__(/*! ./adminmessages.component.scss */ "./src/app/admin/adminmessages/adminmessages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminmessagesComponent);
    return AdminmessagesComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminreceive/adminreceive.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/adminreceive/adminreceive.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>File Name</th>\n          <th>User</th>\n          <th>Date</th>\n          <th>Time</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files\">\n          <td>{{ file.originalname }}</td>\n          <td>{{ file.username }}</td>\n          <td>{{file.time | date:'MMM dd, yyyy'}}</td>\n      <td>{{ file.time | date:'hh:mm' }}</td>\n      <!-- <td>{{ file.username }}</td> -->\n          <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\n        </tr>   \n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/adminreceive/adminreceive.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/adminreceive/adminreceive.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/adminreceive/adminreceive.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/adminreceive/adminreceive.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminreceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminreceiveComponent", function() { return AdminreceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/admin/servers/files.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminreceiveComponent = /** @class */ (function () {
    function AdminreceiveComponent(FileService, service) {
        this.FileService = FileService;
        this.service = service;
        this.files = [];
    }
    AdminreceiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FileService.showFileNames().subscribe(function (res) {
            _this.response = res;
            console.log(_this.response);
            var _loop_1 = function (i) {
                _this.FileService.getusername(_this.response.json()[i].userId).subscribe(function (resss) {
                    _this.user = resss;
                    console.log(resss.json().firstName);
                    _this.files[i] = {
                        filename: _this.response.json()[i].filename,
                        originalname: _this.response.json()[i].originalname,
                        contentType: _this.response.json()[i].mimetype,
                        time: _this.response.json()[i].time,
                        username: resss.json().firstName
                    };
                });
                // console.log(this.user)
                //  console.log(this.response.json()[i].mimetype)
            };
            for (var i = 0; i < _this.response.json().length; i++) {
                _loop_1(i);
            }
        });
    };
    AdminreceiveComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.downloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    AdminreceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminreceive',
            template: __webpack_require__(/*! ./adminreceive.component.html */ "./src/app/admin/adminreceive/adminreceive.component.html"),
            styles: [__webpack_require__(/*! ./adminreceive.component.scss */ "./src/app/admin/adminreceive/adminreceive.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], AdminreceiveComponent);
    return AdminreceiveComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminsend/adminsend.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminsend/adminsend.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  adminsend works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/adminsend/adminsend.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminsend/adminsend.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/adminsend/adminsend.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/adminsend/adminsend.component.ts ***!
  \********************************************************/
/*! exports provided: AdminsendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsendComponent", function() { return AdminsendComponent; });
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

var AdminsendComponent = /** @class */ (function () {
    function AdminsendComponent() {
    }
    AdminsendComponent.prototype.ngOnInit = function () {
    };
    AdminsendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminsend',
            template: __webpack_require__(/*! ./adminsend.component.html */ "./src/app/admin/adminsend/adminsend.component.html"),
            styles: [__webpack_require__(/*! ./adminsend.component.scss */ "./src/app/admin/adminsend/adminsend.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminsendComponent);
    return AdminsendComponent;
}());



/***/ }),

/***/ "./src/app/admin/adminupload/adminupload.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/adminupload/adminupload.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n        <br><h1>{{user}}</h1>\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"multiple\">Choose file(s)</label>\n                  <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n              </div>            \n          </form>\n      </div>\n      </div>\n      <br>\n      <div class=\"col-md-8\">\n           File(s) Selected: {{ uploader?.queue?.length }}\n          <table class=\"table\">\n              <thead>\n              <tr>\n                  <th width=\"50%\">Name</th>\n                  <th>Size</th>\n                  <th>Progress</th>\n                  <th>Status</th>\n                  <th>Actions</th>\n              </tr>\n              </thead> \n              <tbody>\n              <tr *ngFor=\"let item of uploader.queue\">\n                  <td><strong>{{ item.file.name }}</strong></td>\n                  <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                  <td>\n                      <div class=\"progress\" style=\"margin-bottom: 0;\">\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                      </div>\n                  </td>\n                  <td class=\"text-center\">\n                      <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-check\"></i></span>\n                      <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\n                      <span *ngIf=\"item.isError\"><i class=\"fa fa-times\"></i></span>\n                  </td>\n                  <td nowrap>\n                      <button type=\"button\" class=\"btn btn-success btn-xs\"\n                              (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"fa fa-upload\"></span> Upload\n                      </button>\n                      <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                              (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                          <span class=\"fa fa-ban\"></span> Cancel\n                      </button>\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                              (click)=\"item.remove()\">\n                          <span class=\"fa fa-trash\"></span> Remove\n                      </button>\n                  </td>\n              </tr>\n              </tbody>\n          </table>\n\n          <div>\n              <hr>\n              <div>\n                  Total progress:\n                  <div class=\"progress\">\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                  </div>\n                  <hr>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-s\"\n                      (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                  <span class=\"fa fa-upload\"></span> Upload all\n              </button>\n              <button type=\"button\" class=\"btn btn-warning btn-s\"\n                      (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                  <span class=\"fa fa-ban\"></span> Cancel all\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-s\"\n                      (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                  <span class=\"fa fa-trash\"></span> Remove all\n              </button>\n          </div>\n      </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/admin/adminupload/adminupload.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/adminupload/adminupload.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/adminupload/adminupload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/adminupload/adminupload.component.ts ***!
  \************************************************************/
/*! exports provided: AdminuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminuploadComponent", function() { return AdminuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/admin/servers/files.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminuploadComponent = /** @class */ (function () {
    function AdminuploadComponent(FileService, service, route) {
        this.FileService = FileService;
        this.service = service;
        this.route = route;
        this.files = [];
        this.id = '';
        this.user = '';
        this.url = '';
        this.au = 'Bearer ' + this.service.getToken();
    }
    AdminuploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sid = params['id'];
        });
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.id = tokenPayload._id;
        this.url = 'http://localhost:3001/api/upload/' + this.id + '/' + this.sid;
        console.log(this.url);
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: this.url, itemAlias: 'photo' });
    };
    AdminuploadComponent.prototype.clear = function () {
        this.files = [];
        this.id = '';
    };
    AdminuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminupload',
            template: __webpack_require__(/*! ./adminupload.component.html */ "./src/app/admin/adminupload/adminupload.component.html"),
            styles: [__webpack_require__(/*! ./adminupload.component.scss */ "./src/app/admin/adminupload/adminupload.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_4__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AdminuploadComponent);
    return AdminuploadComponent;
}());



/***/ }),

/***/ "./src/app/admin/keeper-pro-view/keeper-pro-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/keeper-pro-view/keeper-pro-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"{{pic}}\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class='fas fa-edit' style='font-size:24px'></i></button> -->\n                <!-- <button type=\"file\" rel=\"tooltip\" ngbTooltip=\"Edit profile picture\" data-placement=\"bottom\" type=\"button\" class=\"btn btn-primary btn-link\"> <i class='fa fa-edit' style='font-size:36px'></i></button>\n                \n                <app-editpropic></app-editpropic> -->\n                <!-- <div class=\"name\">\n                    <h2 class=\"title\">{{firstName}} {{lastName}}<br /></h2>\n                   <a routerLink=\"/admin/sendfile/{{_id}}\"><i class='fas fa-archive' style='font-size:36px;color:brown'></i></a> \n                </div> -->\n            </div>\n            <div class=\"row\">\n                \n              \n                    \n                      \n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n  \n                  <div class=\"panel-header panel-header-sm\">\n                  </div>\n                  <div class=\"main-content\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"card\">\n                          <div class=\"card-header\">\n                            <h4 class=\"card-title\">Park Details</h4>\n                          </div>\n                          <div class=\"card-body\">\n                            \n                              \n                                <ul class=\"list-group\">\n                                    <li class=\"list-group-item\" style=\"color:black\"><b>Park Name:  {{parkName}}</b></li>\n                                  <li class=\"list-group-item\" style=\"color:black\"><b>Number of total slots:  {{numberOfSlots}}</b></li>\n                                  <li class=\"list-group-item\"  style=\"color:black\"><b>Open Hours:  {{openHours}} </b></li>\n                                  <li class=\"list-group-item\"  style=\"color:black\"><b><a href=\"{{docUrl}}\">Park legal documents</a> </b></li>\n                                </ul>\n                                \n                                <br>\n                                <br>\n                                <br>\n                                \n                                <table class=\"table\">\n                                  <thead class=\"thead-dark\">\n                                  \n                                    <tr>\n                                      <th scope=\"col\">Vehicle Type</th>\n                                      <th scope=\"col\">Number of slots allocated</th>\n                                      <th scope=\"col\">Charge per one hour</th>\n                                      \n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr>\n                                      <th scope=\"row\" style=\"color:black\">Cars and Vans</th>\n                                      <td>{{alocatedSlots1}}</td>\n                                      <td>{{hourCharge1}}</td>\n                                     \n                                    </tr>\n                                    <tr>\n                                      <th scope=\"row\" style=\"color:blue\">Bikes</th>\n                                      <td>{{alocatedSlots2}}</td>\n                                      <td>{{hourCharge2}}</td>\n                                      \n                                    </tr>\n                                    <tr>\n                                      <th scope=\"row\" style=\"color:red\">Lorries and Buses</th>\n                                      <td>{{alocatedSlots3}}</td>\n                                      <td>{{hourCharge3}}</td>\n                                    </tr>\n                                    <tr>\n                                      <th scope=\"row\" style=\"color:green\">Three Wheelers</th>\n                                      <td>{{alocatedSlots4}}</td>\n                                      <td>{{hourCharge4}}</td>\n                                    </tr>\n                                    <tr>\n                                      <th scope=\"row\" style=\"color:yellow\">Long Vehicles</th>\n                                      <td>{{alocatedSlots5}}</td>\n                                      <td>{{hourCharge5}}</td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                            \n                          </div>\n                        </div>\n                      </div>\n                      \n                    </div>\n                  </div>\n                  \n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/admin/keeper-pro-view/keeper-pro-view.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/keeper-pro-view/keeper-pro-view.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/keeper-pro-view/keeper-pro-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/keeper-pro-view/keeper-pro-view.component.ts ***!
  \********************************************************************/
/*! exports provided: KeeperProViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeeperProViewComponent", function() { return KeeperProViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeeperProViewComponent = /** @class */ (function () {
    function KeeperProViewComponent(service, route) {
        this.service = service;
        this.route = route;
        this.keepers = [];
        this.userId = '';
        this.pic = "../../../assets/img/faces/default.jpg";
    }
    KeeperProViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('jhsdvcshdvfhk');
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.service.getkeeperprofile(this.id).subscribe(function (res) {
            _this.user = res;
            _this.userId = _this.user._id;
            _this.service.setid(_this.user._id);
            _this.pic = _this.user.proPic;
            // console.log(this.userId);
            console.log(_this.user);
            _this.email = _this.user.email;
            _this.parkName = _this.user.parkName;
            _this.numberOfSlots = _this.user.numberOfSlots;
            _this.openHours = _this.user.openHours;
            _this.alocatedSlots1 = _this.user.alocatedSlots1;
            _this.hourCharge1 = _this.user.hourCharge1;
            _this.alocatedSlots2 = _this.user.alocatedSlots2;
            _this.hourCharge2 = _this.user.hourCharge2;
            _this.alocatedSlots3 = _this.user.alocatedSlots3;
            _this.hourCharge3 = _this.user.hourCharge3;
            _this.alocatedSlots4 = _this.user.alocatedSlots4;
            _this.hourCharge4 = _this.user.hourCharge4;
            _this.alocatedSlots5 = _this.user.alocatedSlots5;
            _this.hourCharge5 = _this.user.hourCharge5;
            _this.docUrl = _this.user.docUrl;
        }, function (err) {
            console.log(err);
        });
    };
    KeeperProViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keeper-pro-view',
            template: __webpack_require__(/*! ./keeper-pro-view.component.html */ "./src/app/admin/keeper-pro-view/keeper-pro-view.component.html"),
            styles: [__webpack_require__(/*! ./keeper-pro-view.component.scss */ "./src/app/admin/keeper-pro-view/keeper-pro-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], KeeperProViewComponent);
    return KeeperProViewComponent;
}());



/***/ }),

/***/ "./src/app/admin/keepers/keepers.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/keepers/keepers.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">New Parks</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Park Name\n                  </th>\n                  <th>\n                    owner name\n                  </th>\n                  <th>\n                    Park\n                  </th>\n                  <th class=\"text-right\">\n                    \n                  </th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let keeper of keepers\">\n                    <td>\n                      {{ keeper.parkName }}\n                    </td>\n                    <td>\n                      \n                      <button type=\"button\" (click)=\"profile(keeper.ownerid)\" class=\"btn btn-outline-primary btn-round\">{{ keeper.owner }}</button>\n                    </td>\n                    <td>\n                        <button type=\"button\" (click)=\"parkPro(keeper.id)\" class=\"btn btn-outline-primary btn-round\">Show park</button>\n                        <!-- <button type=\"button\" class=\"btn btn-danger btn-round\">close</button> -->\n                      \n                    </td>\n                    <td class=\"text-right\">\n                        <button type=\"button\" (click)=\"reject(keeper.id)\" class=\"btn btn-danger btn-round\">Reject</button>\n                      </td>\n                    <td class=\"text-right\">\n                      <button type=\"button\" (click)=\"accept(keeper.id)\" class=\"btn btn-info btn-round\">Accept</button>\n                    </td>\n                  </tr>\n                  \n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/admin/keepers/keepers.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/keepers/keepers.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/keepers/keepers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/keepers/keepers.component.ts ***!
  \****************************************************/
/*! exports provided: KeepersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepersComponent", function() { return KeepersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeepersComponent = /** @class */ (function () {
    function KeepersComponent(service, router) {
        this.service = service;
        this.router = router;
        this.keepers = [];
    }
    // ow;
    KeepersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.service.getnewkeepers().subscribe(function (response) {
            _this.kepers = response;
            _this.res = _this.kepers.length;
            var _loop_1 = function (i) {
                _this.service.getowner(_this.kepers[i].ownerid).subscribe(function (user) {
                    _this.owner = user;
                    console.log(_this.kepers[i].name);
                    _this.keepers[i] = {
                        id: _this.kepers[i]._id,
                        name: _this.kepers[i].name,
                        owner: _this.owner.firstName,
                        ownerid: _this.owner._id,
                        state: _this.kepers[i].state,
                        parkName: _this.kepers[i].parkName
                    };
                });
            };
            for (var i = 0; i < _this.kepers.length; i++) {
                _loop_1(i);
            }
        });
    };
    KeepersComponent.prototype.accept = function (id) {
        var _this = this;
        this.service.acceptpark(id).subscribe(function (response) {
            _this.ngOnInit();
        });
    };
    KeepersComponent.prototype.ownerpro = function (id) {
    };
    KeepersComponent.prototype.parkPro = function (id) {
        console.log(id);
        this.router.navigateByUrl('park/' + id);
    };
    KeepersComponent.prototype.profile = function (id) {
        console.log(id);
        this.router.navigateByUrl('owner/' + id);
    };
    KeepersComponent.prototype.reject = function (id) {
        var _this = this;
        this.service.reject(id).subscribe(function (response) {
            _this.ngOnInit();
        });
    };
    KeepersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keepers',
            template: __webpack_require__(/*! ./keepers.component.html */ "./src/app/admin/keepers/keepers.component.html"),
            styles: [__webpack_require__(/*! ./keepers.component.scss */ "./src/app/admin/keepers/keepers.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], KeepersComponent);
    return KeepersComponent;
}());



/***/ }),

/***/ "./src/app/admin/newaddedparks/newaddedparks.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/newaddedparks/newaddedparks.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\"> Park Keepers</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Name\n                  </th>\n                  <th>\n                    Activate\n                  </th>\n                  <th>\n                    state\n                  </th>\n                  <th class=\"text-right\">\n                    \n                  </th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let keeper of keepers\">\n                    <td>\n                      {{ keeper.name }}\n                    </td>\n                    <td>\n                      {{ keeper.isactivate }}\n                    </td>\n                    <td>\n                        <button type=\"button\" (click)=\"update(keeper.state,keeper.id)\"  class=\"{{keeper.class}}\">{{keeper.state}}</button>\n                        <!-- <button type=\"button\" class=\"btn btn-danger btn-round\">close</button> -->\n                      \n                    </td>\n                    <td class=\"text-right\">\n                      <button type=\"button\" class=\"btn btn-info btn-round\">view profile</button>\n                    </td>\n                  </tr>\n                 \n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/admin/newaddedparks/newaddedparks.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/newaddedparks/newaddedparks.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/newaddedparks/newaddedparks.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/newaddedparks/newaddedparks.component.ts ***!
  \****************************************************************/
/*! exports provided: NewaddedparksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaddedparksComponent", function() { return NewaddedparksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewaddedparksComponent = /** @class */ (function () {
    function NewaddedparksComponent(service) {
        this.service = service;
        this.keepers = [];
    }
    NewaddedparksComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.service.getkeepers(tokenPayload._id).subscribe(function (response) {
            _this.kepers = response;
            _this.res = _this.kepers.length;
            for (var i = 0; i < _this.kepers.length; i++) {
                if (_this.kepers[i].state == "open") {
                    _this.class = "btn btn-danger btn-round";
                    _this.kepers[i].state = "close";
                }
                else {
                    _this.class = "btn btn-warning btn-round";
                    _this.kepers[i].state = "open";
                }
                _this.keepers[i] = {
                    id: _this.kepers[i]._id,
                    name: _this.kepers[i].name,
                    class: _this.class,
                    isactivate: _this.kepers[i].isactivate,
                    state: _this.kepers[i].state
                    // time:response[i].state,
                };
            }
        });
    };
    NewaddedparksComponent.prototype.update = function (state, id) {
        var _this = this;
        this.service.keeperstate(state, id).subscribe(function (response) {
            _this.ngOnInit();
        });
    };
    NewaddedparksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newaddedparks',
            template: __webpack_require__(/*! ./newaddedparks.component.html */ "./src/app/admin/newaddedparks/newaddedparks.component.html"),
            styles: [__webpack_require__(/*! ./newaddedparks.component.scss */ "./src/app/admin/newaddedparks/newaddedparks.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], NewaddedparksComponent);
    return NewaddedparksComponent;
}());



/***/ }),

/***/ "./src/app/admin/ownerprofile/ownerprofile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/ownerprofile/ownerprofile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n      <div class=\"filter\"></div>\n  </div>\n  <div class=\"section profile-content\">\n      <div class=\"container\">\n          <div class=\"owner\">\n              <div class=\"avatar\">\n                  <img src=\"{{pic}}\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n              </div>\n              <!-- <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class='fas fa-edit' style='font-size:24px'></i></button> -->\n              <!-- <button type=\"file\" rel=\"tooltip\" ngbTooltip=\"Edit profile picture\" data-placement=\"bottom\" type=\"button\" class=\"btn btn-primary btn-link\"> <i class='fa fa-edit' style='font-size:36px'></i></button>\n              \n              <app-editpropic></app-editpropic> -->\n              <div class=\"name\">\n                  <h2 class=\"title\">{{userDetails.firstName}} {{userDetails.lastName}}<br /></h2>\n                 <!-- <a routerLink=\"/admin/sendfile/{{userDetails._id}}\"><i class='fas fa-archive' style='font-size:36px;color:brown'></i></a>  -->\n              </div>\n          </div>\n          <div class=\"row\">\n              \n            \n                  \n                    \n          </div>\n          <br/>\n          <div class=\"nav-tabs-navigation\">\n              <div class=\"nav-tabs-wrapper\">\n\n                <div class=\"panel-header panel-header-sm\">\n                </div>\n                <div class=\"main-content\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"card\">\n                        <div class=\"card-header\">\n                          <h4 class=\"card-title\">Parks' Details</h4>\n                        </div>\n                        <div class=\"card-body\" style=\"color:black;font-size: 20px\">\n                          <div class=\"table-responsive\">\n                            <table class=\"table\">\n                              <thead class=\" text-primary\">\n                                <th>\n                                  Park Name\n                                </th>\n                                <th>\n                                  Activate\n                                </th>\n                                <th>\n                                  Status\n                                </th>\n                                <th class=\"text-right\">\n                                  \n                                </th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let keeper of keepers\">\n                                  <td>\n                                    {{ keeper.parkName }}\n                                  </td>\n                                  <td>\n                                    {{ keeper.isactivate }}\n                                  </td>\n                                  <td>\n                                      <button type=\"button\"   class=\"{{keeper.class}}\">{{keeper.state}}</button>\n                                      <!-- <button type=\"button\" class=\"btn btn-danger btn-round\">close</button> -->\n                                    \n                                  </td>\n                                  <td class=\"text-right\">\n                                    <button type=\"button\" (click)=\"parkPro(keeper.id)\" class=\"btn btn-info btn-round\">view profile</button>\n                                  </td>\n                                </tr>\n                               \n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    \n                  </div>\n                </div>\n                \n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/ownerprofile/ownerprofile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/ownerprofile/ownerprofile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/ownerprofile/ownerprofile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/ownerprofile/ownerprofile.component.ts ***!
  \**************************************************************/
/*! exports provided: OwnerprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerprofileComponent", function() { return OwnerprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerprofileComponent = /** @class */ (function () {
    function OwnerprofileComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.keepers = [];
        this.userId = '';
    }
    OwnerprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.service.getowner(this.id).subscribe(function (res) {
            _this.userDetails = res;
            _this.userId = _this.userDetails._id;
            _this.service.setid(_this.userDetails._id);
            // console.log(this.userId);
            console.log(_this.userDetails);
            _this.pic = _this.userDetails.proPic;
        }, function (err) {
            console.log(err);
        });
        this.service.getkeepers(this.id).subscribe(function (response) {
            _this.kepers = response;
            _this.res = _this.kepers.length;
            for (var i = 0; i < _this.kepers.length; i++) {
                if (_this.kepers[i].state == "close") {
                    _this.class = "btn btn-danger btn-round";
                }
                else {
                    _this.class = "btn btn-warning btn-round";
                }
                _this.keepers[i] = {
                    id: _this.kepers[i]._id,
                    name: _this.kepers[i].name,
                    class: _this.class,
                    isactivate: _this.kepers[i].isactivate,
                    state: _this.kepers[i].state,
                    parkName: _this.kepers[i].parkName
                    // time:response[i].state,
                };
            }
        });
    };
    OwnerprofileComponent.prototype.parkPro = function (id) {
        console.log(id);
        this.router.navigateByUrl('park/' + id);
    };
    OwnerprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ownerprofile',
            template: __webpack_require__(/*! ./ownerprofile.component.html */ "./src/app/admin/ownerprofile/ownerprofile.component.html"),
            styles: [__webpack_require__(/*! ./ownerprofile.component.scss */ "./src/app/admin/ownerprofile/ownerprofile.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OwnerprofileComponent);
    return OwnerprofileComponent;
}());



/***/ }),

/***/ "./src/app/admin/owners/owners.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/owners/owners.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\"> Park Owners</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n                <th>\n                  Owner Name\n                </th>\n                <th>\n                  Owner Address\n                </th>\n                <th>\n                  Profile\n                </th>\n                <!-- <th class=\"text-right\">\n                  profile\n                </th> -->\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let keeper of keepers\">\n                  <td>\n                    {{ keeper.firstName }} {{keeper.lastName}}\n                  </td>\n                  <td>\n                    {{keeper.address}} , {{keeper.city}} , {{keeper.country}}\n                  </td>\n                  <td>\n                      <button type=\"button\" (click)=\"profile(keeper.id)\" class=\"btn btn-outline-primary btn-round\">Show profile</button>\n                      <!-- <button type=\"button\" class=\"btn btn-danger btn-round\">close</button> -->\n                    \n                  </td>\n                  <!-- <td class=\"text-right\">\n                    <button type=\"button\" (click)=\"accept(keeper.id)\" class=\"btn btn-info btn-round\">Accept</button>\n                  </td> -->\n                </tr>\n                \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/owners/owners.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/owners/owners.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/owners/owners.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/owners/owners.component.ts ***!
  \**************************************************/
/*! exports provided: OwnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersComponent", function() { return OwnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OwnersComponent = /** @class */ (function () {
    function OwnersComponent(service, router) {
        this.service = service;
        this.router = router;
        this.keepers = [];
    }
    // ow;
    OwnersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.service.getowners().subscribe(function (response) {
            _this.kepers = response;
            console.log(response);
            _this.res = _this.kepers.length;
            for (var i = 0; i < _this.kepers.length; i++) {
                console.log(_this.kepers[i].name);
                _this.keepers[i] = {
                    firstName: _this.kepers[i].firstName,
                    lastName: _this.kepers[i].lastName,
                    city: _this.kepers[i].city,
                    address: _this.kepers[i].address,
                    country: _this.kepers[i].country,
                    id: _this.kepers[i]._id
                    // state:this.kepers[i].state
                    // time:response[i].state,
                };
            }
        });
    };
    OwnersComponent.prototype.profile = function (id) {
        this.router.navigateByUrl('owner/' + id);
    };
    OwnersComponent.prototype.ownerpro = function (id) {
    };
    OwnersComponent.prototype.keeperpro = function (id) {
    };
    OwnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owners',
            template: __webpack_require__(/*! ./owners.component.html */ "./src/app/admin/owners/owners.component.html"),
            styles: [__webpack_require__(/*! ./owners.component.scss */ "./src/app/admin/owners/owners.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OwnersComponent);
    return OwnersComponent;
}());



/***/ }),

/***/ "./src/app/admin/parks/parks.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/parks/parks.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  parks works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/parks/parks.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/parks/parks.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/parks/parks.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/parks/parks.component.ts ***!
  \************************************************/
/*! exports provided: ParksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParksComponent", function() { return ParksComponent; });
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

var ParksComponent = /** @class */ (function () {
    function ParksComponent() {
    }
    ParksComponent.prototype.ngOnInit = function () {
    };
    ParksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parks',
            template: __webpack_require__(/*! ./parks.component.html */ "./src/app/admin/parks/parks.component.html"),
            styles: [__webpack_require__(/*! ./parks.component.scss */ "./src/app/admin/parks/parks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParksComponent);
    return ParksComponent;
}());



/***/ }),

/***/ "./src/app/admin/profileeditadmin/profileeditadmin.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/profileeditadmin/profileeditadmin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div a class=\"row\">\n      <div  class=\"col-md-12 mr-auto ml-auto\">\n        <div class=\"card\">  <p *ngIf=\"issuccess\">\n            <ngb-alert type=\"info\"  [dismissible]=\"false\">\n                <div class=\"container\">\n                    <ng-container>\n                        <i class=\"nc-icon nc-check-2\"></i>\n                    </ng-container>\n        {{ message }}\n                    <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert()\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                    </button>\n                </div>\n            </ngb-alert>\n        </p>\n          <div class=\"card-header\">\n            <h5 class=\"title\">Edit admin</h5>\n          </div>\n          <div class=\"card-body\">\n            <form #regForm=\"ngForm\">\n              \n              <div class=\"row\">\n                <div class=\"col-md-6 pr-1\">\n                  <div class=\"form-group\">\n                    <label>First Name</label>\n                    <input #firstname=\"ngModel\" [value]=\"userDetails.firstName\" id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Company\" [(ngModel)]=\"reg.firstName\">\n                    <!-- <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">First Name is </div> -->\n                    <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">Email is  and must be valid</div>\n                  </div>\n                </div>\n                <div class=\"col-md-6 pl-1\">\n                  <div class=\"form-group\">\n                    <label>Last Name</label>\n                    <input #lastName=\"ngModel\" [value]=\"userDetails.lastName\" type=\"text\" id=\"lastName\" name=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"reg.lastName\">\n                    <div class=\"form-control-feedback\" [hidden]=\"lastName.valid\">Email is  and must be valid</div>\n  \n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\"> -->\n                  <!-- <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                      <label>Company (disabled)</label>\n                      <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"col-md-3 px-1\">\n                    <div class=\"form-group\">\n                      <label>Username</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"col-md-12 pl-1\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                    </div>\n                  </div> -->\n                <!-- </div> -->\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Email address</label>\n                          <input disabled=\"\" #email=\"ngModel\" pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" [value]=\"userDetails.email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"reg.email\">\n                        </div>\n                    </div>\n                  </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>Address</label>\n                    <input #address=\"ngModel\" id=\"address\" [value]=\"userDetails.address\" name=\"address\" type=\"text\" class=\"form-control\" [(ngModel)]=\"reg.address\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 pr-1\">\n                  <div class=\"form-group\">\n                    <label>City</label>\n                    <input #city=\"ngModel\" type=\"text\" [value]=\"userDetails.city\" id=\"city\" name=\"city\" class=\"form-control\" placeholder=\"City\" [(ngModel)]=\"reg.city\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 px-1\">\n                  <div class=\"form-group\">\n                    <label>Country</label>\n                    <input #country=\"ngModel\" type=\"text\" [value]=\"userDetails.country\" id=\"country\" name=\"country\" class=\"form-control\" placeholder=\"Country\" [(ngModel)]=\"reg.country\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 pl-1\">\n                  <div class=\"form-group\">\n                    <label>Postal Code</label>\n                    <input #zip=\"ngModel\" type=\"number\" [value]=\"userDetails.email\" id=\"zip\" name=\"zip\" class=\"form-control\" placeholder=\"ZIP Code\" [(ngModel)]=\"reg.zip\">\n                    <div class=\"form-control-feedback\" [hidden]=\"email.valid\">Must be number</div>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>About Me</label>\n                    <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\" >Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                  </div>\n                </div>\n              </div> -->\n             \n              <div class=\"ml-auto mr-auto text-center\">\n                  <button (click)=\"edit()\" [disabled]=\"!regForm.valid\" class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-tap-01\"></i>Submit</button>\n               </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/admin/profileeditadmin/profileeditadmin.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/profileeditadmin/profileeditadmin.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/profileeditadmin/profileeditadmin.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/profileeditadmin/profileeditadmin.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileeditadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileeditadminComponent", function() { return ProfileeditadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileeditadminComponent = /** @class */ (function () {
    function ProfileeditadminComponent(service) {
        this.service = service;
        this.userId = '';
        this.name = "charindu";
        this.reg = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            country: '',
            zip: '',
            nic: '',
            password: '',
            confirmPassword: ''
        };
        this.issuccess = false;
        this.message = "Success";
    }
    ProfileeditadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            _this.userId = _this.userDetails._id;
            _this.service.setid(_this.userDetails._id);
            console.log(_this.name);
            // console.log(this.userId);
            // console.log(this.userDetails)
            _this.reg.firstName = _this.userDetails.firstName;
            _this.reg.lastName = _this.userDetails.lastName;
            _this.reg.address = _this.userDetails.address;
            _this.reg.city = _this.userDetails.city;
            _this.reg.country = _this.userDetails.country;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileeditadminComponent.prototype.edit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.service.edit(this.reg, tokenPayload._id).subscribe(function (res) {
            _this.issuccess = true;
            _this.message = "Success";
        }, function (err) {
        });
    };
    ProfileeditadminComponent.prototype.closeAlert = function () {
        this.issuccess = true;
    };
    ProfileeditadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profileeditadmin',
            template: __webpack_require__(/*! ./profileeditadmin.component.html */ "./src/app/admin/profileeditadmin/profileeditadmin.component.html"),
            styles: [__webpack_require__(/*! ./profileeditadmin.component.scss */ "./src/app/admin/profileeditadmin/profileeditadmin.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], ProfileeditadminComponent);
    return ProfileeditadminComponent;
}());



/***/ }),

/***/ "./src/app/admin/reported/reported.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/reported/reported.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Reported Parks</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Name\n                  </th>\n                  <th>\n                    owner name\n                  </th>\n                  <th>\n                    Park\n                  </th>\n                  <th class=\"text-right\">\n                    \n                  </th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let keeper of keepers\">\n                    <td>\n                      {{ keeper.name }}\n                    </td>\n                    <td>\n                      \n                      <button type=\"button\" (click)=\"profile(keeper.ownerid)\" class=\"btn btn-outline-primary btn-round\">{{ keeper.owner }}</button>\n                    </td>\n                    <td>\n                        <button type=\"button\" (click)=\"parkPro(keeper.id)\" class=\"btn btn-outline-primary btn-round\">Show park</button>\n                        <!-- <button type=\"button\" class=\"btn btn-danger btn-round\">close</button> -->\n                      \n                    </td>\n                    <td class=\"text-right\">\n                        <button type=\"button\" (click)=\"reject(keeper.id)\" class=\"btn btn-danger btn-round\">Reject</button>\n                      </td>\n                    <td class=\"text-right\">\n                      <button type=\"button\" (click)=\"accept(keeper.id)\" class=\"btn btn-info btn-round\">Accept</button>\n                    </td>\n                  </tr>\n                  \n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/admin/reported/reported.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/reported/reported.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/reported/reported.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/reported/reported.component.ts ***!
  \******************************************************/
/*! exports provided: ReportedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedComponent", function() { return ReportedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportedComponent = /** @class */ (function () {
    function ReportedComponent(service, router) {
        this.service = service;
        this.router = router;
        this.keepers = [];
    }
    // ow;
    ReportedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.reported().subscribe(function (response) {
            _this.kepers = response;
            // console.log(response)
            _this.res = _this.kepers.length;
            var _loop_1 = function (i) {
                _this.service.getowner(_this.kepers[i].ownerid).subscribe(function (user) {
                    _this.owner = user;
                    console.log(_this.kepers[i].name);
                    _this.keepers[i] = {
                        id: _this.kepers[i]._id,
                        name: _this.kepers[i].name,
                        owner: _this.owner.firstName,
                        ownerid: _this.owner._id,
                        state: _this.kepers[i].state
                        // time:response[i].state,
                    };
                    console.log(_this.keepers[i].owner);
                });
            };
            for (var i = 0; i < _this.kepers.length; i++) {
                _loop_1(i);
            }
        });
    };
    ReportedComponent.prototype.accept = function (id) {
        var _this = this;
        this.service.acceptpark(id).subscribe(function (response) {
            _this.ngOnInit();
        });
    };
    ReportedComponent.prototype.parkPro = function (id) {
        console.log(id);
        this.router.navigateByUrl('park/' + id);
    };
    ReportedComponent.prototype.profile = function (id) {
        console.log(id);
        this.router.navigateByUrl('owner/' + id);
    };
    ReportedComponent.prototype.reject = function (id) {
        var _this = this;
        this.service.reject(id).subscribe(function (response) {
            _this.ngOnInit();
        });
    };
    ReportedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reported',
            template: __webpack_require__(/*! ./reported.component.html */ "./src/app/admin/reported/reported.component.html"),
            styles: [__webpack_require__(/*! ./reported.component.scss */ "./src/app/admin/reported/reported.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportedComponent);
    return ReportedComponent;
}());



/***/ }),

/***/ "./src/app/admin/servers/files.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/servers/files.service.ts ***!
  \************************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
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


var FilesService = /** @class */ (function () {
    function FilesService(http) {
        this.http = http;
    }
    FilesService.prototype.downloadPDF = function (filename, filetype) {
        return this.http.get('http://localhost:3000/api/file/' + filename, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob });
    };
    FilesService.prototype.admindownloadPDF = function (filename, filetype) {
        return this.http.get('http://localhost:3000/api/adminfile/' + filename, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob });
    };
    FilesService.prototype.showFileNames = function () {
        return this.http.get('http://localhost:3001/api/userfiles');
    };
    FilesService.prototype.getusername = function (id) {
        return this.http.get('http://localhost:3000/api/getusername/' + id);
    };
    FilesService.prototype.adminsent = function () {
        return this.http.get('http://localhost:3000/api/admindoc');
    };
    FilesService.prototype.recevefile = function (id) {
        return this.http.get('http://localhost:3000/api/rfiles/' + id);
    };
    FilesService.prototype.readmsg = function (file) {
        console.log(file);
        return this.http.get('http://localhost:3000/api/readmsg/' + file);
    };
    FilesService.prototype.message = function () {
        return this.http.get('http://localhost:3000/api/messages');
    };
    FilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n\n\n\n "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/receive/receive.component */ "./src/app/profile/receive/receive.component.ts");
/* harmony import */ var _tt_tt_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tt/tt.component */ "./src/app/tt/tt.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _profile_parkkeepers_parkkeepers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profile/parkkeepers/parkkeepers.component */ "./src/app/profile/parkkeepers/parkkeepers.component.ts");
/* harmony import */ var _profile_map_map_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile/map/map.component */ "./src/app/profile/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _profile_editpropic_editpropic_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./profile/editpropic/editpropic.component */ "./src/app/profile/editpropic/editpropic.component.ts");
/* harmony import */ var _profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profileedit/profileedit.component */ "./src/app/profile/profileedit/profileedit.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _parkkeeper_parkkeeper_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./parkkeeper/parkkeeper.component */ "./src/app/parkkeeper/parkkeeper.component.ts");
/* harmony import */ var _parkkeeper_keeperreg_keeperreg_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./parkkeeper/keeperreg/keeperreg.component */ "./src/app/parkkeeper/keeperreg/keeperreg.component.ts");
/* harmony import */ var _admin_profileeditadmin_profileeditadmin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/profileeditadmin/profileeditadmin.component */ "./src/app/admin/profileeditadmin/profileeditadmin.component.ts");
/* harmony import */ var _admin_parks_parks_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/parks/parks.component */ "./src/app/admin/parks/parks.component.ts");
/* harmony import */ var _admin_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/keepers/keepers.component */ "./src/app/admin/keepers/keepers.component.ts");
/* harmony import */ var _admin_adminreceive_adminreceive_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/adminreceive/adminreceive.component */ "./src/app/admin/adminreceive/adminreceive.component.ts");
/* harmony import */ var _admin_newaddedparks_newaddedparks_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/newaddedparks/newaddedparks.component */ "./src/app/admin/newaddedparks/newaddedparks.component.ts");
/* harmony import */ var _admin_adminmap_adminmap_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/adminmap/adminmap.component */ "./src/app/admin/adminmap/adminmap.component.ts");
/* harmony import */ var _admin_owners_owners_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/owners/owners.component */ "./src/app/admin/owners/owners.component.ts");
/* harmony import */ var _admin_ownerprofile_ownerprofile_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/ownerprofile/ownerprofile.component */ "./src/app/admin/ownerprofile/ownerprofile.component.ts");
/* harmony import */ var _admin_adminupload_adminupload_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/adminupload/adminupload.component */ "./src/app/admin/adminupload/adminupload.component.ts");
/* harmony import */ var _admin_adminmessages_adminmessages_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/adminmessages/adminmessages.component */ "./src/app/admin/adminmessages/adminmessages.component.ts");
/* harmony import */ var _admin_adminsend_adminsend_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/adminsend/adminsend.component */ "./src/app/admin/adminsend/adminsend.component.ts");
/* harmony import */ var _parkkeeper_keeperprofile_keeperprofile_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./parkkeeper/keeperprofile/keeperprofile.component */ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_parkingslot_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./parkkeeper/parkingslot/parkingslot.component */ "./src/app/parkkeeper/parkingslot/parkingslot.component.ts");
/* harmony import */ var _signup_resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./signup/resetpw/resetpw.component */ "./src/app/signup/resetpw/resetpw.component.ts");
/* harmony import */ var _signup_newpw_newpw_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./signup/newpw/newpw.component */ "./src/app/signup/newpw/newpw.component.ts");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _parkkeeper_details_details_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./parkkeeper/details/details.component */ "./src/app/parkkeeper/details/details.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _servers_validate_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./servers/validate.service */ "./src/app/servers/validate.service.ts");
/* harmony import */ var _parkkeeper_parkingslot_car_car_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./parkkeeper/parkingslot/car/car.component */ "./src/app/parkkeeper/parkingslot/car/car.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_bike_bike_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./parkkeeper/parkingslot/bike/bike.component */ "./src/app/parkkeeper/parkingslot/bike/bike.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_long_vehicle_long_vehicle_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./parkkeeper/parkingslot/long-vehicle/long-vehicle.component */ "./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_lorry_lorry_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./parkkeeper/parkingslot/lorry/lorry.component */ "./src/app/parkkeeper/parkingslot/lorry/lorry.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_weel_weel_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./parkkeeper/parkingslot/weel/weel.component */ "./src/app/parkkeeper/parkingslot/weel/weel.component.ts");
/* harmony import */ var _admin_admin_pic_admin_pic_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./admin/admin-pic/admin-pic.component */ "./src/app/admin/admin-pic/admin-pic.component.ts");
/* harmony import */ var _parkkeeper_keeper_pic_keeper_pic_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./parkkeeper/keeper-pic/keeper-pic.component */ "./src/app/parkkeeper/keeper-pic/keeper-pic.component.ts");
/* harmony import */ var _admin_keeper_pro_view_keeper_pro_view_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./admin/keeper-pro-view/keeper-pro-view.component */ "./src/app/admin/keeper-pro-view/keeper-pro-view.component.ts");
/* harmony import */ var _parkkeeper_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./parkkeeper/bookings/bookings.component */ "./src/app/parkkeeper/bookings/bookings.component.ts");
/* harmony import */ var _parkkeeper_bookinghistory_bookinghistory_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./parkkeeper/bookinghistory/bookinghistory.component */ "./src/app/parkkeeper/bookinghistory/bookinghistory.component.ts");
/* harmony import */ var _parkkeeper_keeperedit_keeperedit_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./parkkeeper/keeperedit/keeperedit.component */ "./src/app/parkkeeper/keeperedit/keeperedit.component.ts");
/* harmony import */ var _admin_reported_reported_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./admin/reported/reported.component */ "./src/app/admin/reported/reported.component.ts");
/* harmony import */ var _admin_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./admin/addadmin/addadmin.component */ "./src/app/admin/addadmin/addadmin.component.ts");
/* harmony import */ var _profile_progress_progress_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./profile/progress/progress.component */ "./src/app/profile/progress/progress.component.ts");
/* harmony import */ var _profile_documentsupload_documentsupload_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./profile/documentsupload/documentsupload.component */ "./src/app/profile/documentsupload/documentsupload.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__["SigninComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_19__["FileUploadComponent"],
                _profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_21__["ReceiveComponent"],
                _tt_tt_component__WEBPACK_IMPORTED_MODULE_22__["TtComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["UserProfileComponent"],
                _profile_parkkeepers_parkkeepers_component__WEBPACK_IMPORTED_MODULE_24__["ParkkeepersComponent"],
                _profile_map_map_component__WEBPACK_IMPORTED_MODULE_25__["MapComponent"],
                _profile_editpropic_editpropic_component__WEBPACK_IMPORTED_MODULE_27__["EditpropicComponent"],
                _profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_28__["ProfileeditComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_29__["AdminComponent"],
                _parkkeeper_parkkeeper_component__WEBPACK_IMPORTED_MODULE_30__["ParkkeeperComponent"],
                _parkkeeper_keeperreg_keeperreg_component__WEBPACK_IMPORTED_MODULE_31__["KeeperregComponent"],
                _admin_profileeditadmin_profileeditadmin_component__WEBPACK_IMPORTED_MODULE_32__["ProfileeditadminComponent"],
                _admin_parks_parks_component__WEBPACK_IMPORTED_MODULE_33__["ParksComponent"],
                _admin_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_34__["KeepersComponent"],
                _admin_adminreceive_adminreceive_component__WEBPACK_IMPORTED_MODULE_35__["AdminreceiveComponent"],
                _admin_newaddedparks_newaddedparks_component__WEBPACK_IMPORTED_MODULE_36__["NewaddedparksComponent"],
                _admin_adminmap_adminmap_component__WEBPACK_IMPORTED_MODULE_37__["AdminmapComponent"],
                _admin_owners_owners_component__WEBPACK_IMPORTED_MODULE_38__["OwnersComponent"],
                _admin_ownerprofile_ownerprofile_component__WEBPACK_IMPORTED_MODULE_39__["OwnerprofileComponent"],
                _admin_adminupload_adminupload_component__WEBPACK_IMPORTED_MODULE_40__["AdminuploadComponent"],
                _admin_adminmessages_adminmessages_component__WEBPACK_IMPORTED_MODULE_41__["AdminmessagesComponent"],
                _admin_adminsend_adminsend_component__WEBPACK_IMPORTED_MODULE_42__["AdminsendComponent"],
                _parkkeeper_keeperprofile_keeperprofile_component__WEBPACK_IMPORTED_MODULE_43__["KeeperprofileComponent"],
                _parkkeeper_parkingslot_parkingslot_component__WEBPACK_IMPORTED_MODULE_44__["ParkingslotComponent"],
                _signup_resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_45__["ResetpwComponent"],
                _signup_newpw_newpw_component__WEBPACK_IMPORTED_MODULE_46__["NewpwComponent"],
                _parkkeeper_details_details_component__WEBPACK_IMPORTED_MODULE_50__["DetailsComponent"],
                _parkkeeper_parkingslot_car_car_component__WEBPACK_IMPORTED_MODULE_53__["CarComponent"],
                _parkkeeper_parkingslot_bike_bike_component__WEBPACK_IMPORTED_MODULE_54__["BikeComponent"],
                _parkkeeper_parkingslot_long_vehicle_long_vehicle_component__WEBPACK_IMPORTED_MODULE_55__["LongVehicleComponent"],
                _parkkeeper_parkingslot_lorry_lorry_component__WEBPACK_IMPORTED_MODULE_56__["LorryComponent"],
                _parkkeeper_parkingslot_weel_weel_component__WEBPACK_IMPORTED_MODULE_57__["WeelComponent"],
                _parkkeeper_parkingslot_bike_bike_component__WEBPACK_IMPORTED_MODULE_54__["NgbdModalContent"],
                _admin_admin_pic_admin_pic_component__WEBPACK_IMPORTED_MODULE_58__["AdminPicComponent"],
                _parkkeeper_keeper_pic_keeper_pic_component__WEBPACK_IMPORTED_MODULE_59__["KeeperPicComponent"],
                _admin_keeper_pro_view_keeper_pro_view_component__WEBPACK_IMPORTED_MODULE_60__["KeeperProViewComponent"],
                _parkkeeper_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_61__["BookingsComponent"],
                _parkkeeper_bookinghistory_bookinghistory_component__WEBPACK_IMPORTED_MODULE_62__["BookinghistoryComponent"],
                _parkkeeper_keeperedit_keeperedit_component__WEBPACK_IMPORTED_MODULE_63__["KeepereditComponent"],
                _admin_reported_reported_component__WEBPACK_IMPORTED_MODULE_64__["ReportedComponent"],
                _admin_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_65__["AddadminComponent"],
                _profile_progress_progress_component__WEBPACK_IMPORTED_MODULE_66__["ProgressComponent"],
                _profile_documentsupload_documentsupload_component__WEBPACK_IMPORTED_MODULE_67__["DocumentsuploadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_15__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__["FileUploadModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_47__["JwBootstrapSwitchNg2Module"],
                _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDySdsZG3tJO4FJqgu24ujKy8kIdlexmsE'
                }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_48__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyD3dyNOte2kt3vQd1KjhivBe9Ahc3dtCiY",
                    authDomain: "parkherefiles.firebaseapp.com",
                    storageBucket: "parkherefiles.appspot.com",
                    projectId: "parkherefiles",
                }),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_49__["AngularFireStorageModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_51__["FlashMessagesModule"],
            ],
            providers: [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_14__["RegserviceService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
                    multi: true
                }, angular2_flash_messages__WEBPACK_IMPORTED_MODULE_51__["FlashMessagesService"], _servers_validate_service__WEBPACK_IMPORTED_MODULE_52__["ValidateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_parkkeeper_parkingslot_bike_bike_component__WEBPACK_IMPORTED_MODULE_54__["NgbdModalContent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/receive/receive.component */ "./src/app/profile/receive/receive.component.ts");
/* harmony import */ var _profile_parkkeepers_parkkeepers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/parkkeepers/parkkeepers.component */ "./src/app/profile/parkkeepers/parkkeepers.component.ts");
/* harmony import */ var _profile_map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/map/map.component */ "./src/app/profile/map/map.component.ts");
/* harmony import */ var _profile_editpropic_editpropic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/editpropic/editpropic.component */ "./src/app/profile/editpropic/editpropic.component.ts");
/* harmony import */ var _profile_progress_progress_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/progress/progress.component */ "./src/app/profile/progress/progress.component.ts");
/* harmony import */ var _profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profileedit/profileedit.component */ "./src/app/profile/profileedit/profileedit.component.ts");
/* harmony import */ var _parkkeeper_keeperreg_keeperreg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parkkeeper/keeperreg/keeperreg.component */ "./src/app/parkkeeper/keeperreg/keeperreg.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_role_guard_service_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/role-guard-service.guard */ "./src/app/auth/role-guard-service.guard.ts");
/* harmony import */ var _admin_profileeditadmin_profileeditadmin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/profileeditadmin/profileeditadmin.component */ "./src/app/admin/profileeditadmin/profileeditadmin.component.ts");
/* harmony import */ var _admin_adminmap_adminmap_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/adminmap/adminmap.component */ "./src/app/admin/adminmap/adminmap.component.ts");
/* harmony import */ var _admin_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/keepers/keepers.component */ "./src/app/admin/keepers/keepers.component.ts");
/* harmony import */ var _admin_owners_owners_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/owners/owners.component */ "./src/app/admin/owners/owners.component.ts");
/* harmony import */ var _admin_ownerprofile_ownerprofile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/ownerprofile/ownerprofile.component */ "./src/app/admin/ownerprofile/ownerprofile.component.ts");
/* harmony import */ var _admin_adminupload_adminupload_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/adminupload/adminupload.component */ "./src/app/admin/adminupload/adminupload.component.ts");
/* harmony import */ var _admin_adminreceive_adminreceive_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/adminreceive/adminreceive.component */ "./src/app/admin/adminreceive/adminreceive.component.ts");
/* harmony import */ var _parkkeeper_keeperprofile_keeperprofile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./parkkeeper/keeperprofile/keeperprofile.component */ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.ts");
/* harmony import */ var _signup_resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./signup/resetpw/resetpw.component */ "./src/app/signup/resetpw/resetpw.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_parkingslot_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./parkkeeper/parkingslot/parkingslot.component */ "./src/app/parkkeeper/parkingslot/parkingslot.component.ts");
/* harmony import */ var _signup_newpw_newpw_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./signup/newpw/newpw.component */ "./src/app/signup/newpw/newpw.component.ts");
/* harmony import */ var _parkkeeper_details_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./parkkeeper/details/details.component */ "./src/app/parkkeeper/details/details.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_car_car_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./parkkeeper/parkingslot/car/car.component */ "./src/app/parkkeeper/parkingslot/car/car.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_bike_bike_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./parkkeeper/parkingslot/bike/bike.component */ "./src/app/parkkeeper/parkingslot/bike/bike.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_lorry_lorry_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./parkkeeper/parkingslot/lorry/lorry.component */ "./src/app/parkkeeper/parkingslot/lorry/lorry.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_weel_weel_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./parkkeeper/parkingslot/weel/weel.component */ "./src/app/parkkeeper/parkingslot/weel/weel.component.ts");
/* harmony import */ var _parkkeeper_parkingslot_long_vehicle_long_vehicle_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./parkkeeper/parkingslot/long-vehicle/long-vehicle.component */ "./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.ts");
/* harmony import */ var _admin_keeper_pro_view_keeper_pro_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/keeper-pro-view/keeper-pro-view.component */ "./src/app/admin/keeper-pro-view/keeper-pro-view.component.ts");
/* harmony import */ var _parkkeeper_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./parkkeeper/bookings/bookings.component */ "./src/app/parkkeeper/bookings/bookings.component.ts");
/* harmony import */ var _parkkeeper_bookinghistory_bookinghistory_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./parkkeeper/bookinghistory/bookinghistory.component */ "./src/app/parkkeeper/bookinghistory/bookinghistory.component.ts");
/* harmony import */ var _home_about_about_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./home/about/about.component */ "./src/app/home/about/about.component.ts");
/* harmony import */ var _parkkeeper_keeperedit_keeperedit_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./parkkeeper/keeperedit/keeperedit.component */ "./src/app/parkkeeper/keeperedit/keeperedit.component.ts");
/* harmony import */ var _admin_reported_reported_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/reported/reported.component */ "./src/app/admin/reported/reported.component.ts");
/* harmony import */ var _admin_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/addadmin/addadmin.component */ "./src/app/admin/addadmin/addadmin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'keeper', component: _parkkeeper_keeperprofile_keeperprofile_component__WEBPACK_IMPORTED_MODULE_27__["KeeperprofileComponent"], canActivate: [_auth_role_guard_service_guard__WEBPACK_IMPORTED_MODULE_19__["RoleGuardServiceGuard"]], data: {
            expectedRole: 'keeper'
        },
        children: [
            { path: 'details', component: _parkkeeper_details_details_component__WEBPACK_IMPORTED_MODULE_31__["DetailsComponent"] },
            { path: 'slot', component: _parkkeeper_parkingslot_parkingslot_component__WEBPACK_IMPORTED_MODULE_29__["ParkingslotComponent"] },
            { path: 'car', component: _parkkeeper_parkingslot_car_car_component__WEBPACK_IMPORTED_MODULE_32__["CarComponent"] },
            { path: 'edit', component: _parkkeeper_keeperedit_keeperedit_component__WEBPACK_IMPORTED_MODULE_41__["KeepereditComponent"] },
            { path: 'bike', component: _parkkeeper_parkingslot_bike_bike_component__WEBPACK_IMPORTED_MODULE_33__["BikeComponent"] },
            { path: 'lorry', component: _parkkeeper_parkingslot_lorry_lorry_component__WEBPACK_IMPORTED_MODULE_34__["LorryComponent"] },
            { path: 'weel', component: _parkkeeper_parkingslot_weel_weel_component__WEBPACK_IMPORTED_MODULE_35__["WeelComponent"] },
            { path: 'longVehicle', component: _parkkeeper_parkingslot_long_vehicle_long_vehicle_component__WEBPACK_IMPORTED_MODULE_36__["LongVehicleComponent"] },
            { path: 'booking', component: _parkkeeper_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_38__["BookingsComponent"] },
            { path: 'recent', component: _parkkeeper_bookinghistory_bookinghistory_component__WEBPACK_IMPORTED_MODULE_39__["BookinghistoryComponent"] }
        ]
    },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_auth_role_guard_service_guard__WEBPACK_IMPORTED_MODULE_19__["RoleGuardServiceGuard"]], data: {
            expectedRole: 'user'
        },
        children: [
            { path: 'send', component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__["FileUploadComponent"] },
            //   {path: 'settings', component: SettingsComponent},
            { path: 'inbox', component: _profile_receive_receive_component__WEBPACK_IMPORTED_MODULE_11__["ReceiveComponent"] },
            { path: 'edit', component: _profile_profileedit_profileedit_component__WEBPACK_IMPORTED_MODULE_16__["ProfileeditComponent"] },
            { path: 'myparks', component: _profile_parkkeepers_parkkeepers_component__WEBPACK_IMPORTED_MODULE_12__["ParkkeepersComponent"] },
            { path: 'map', component: _profile_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"] },
            { path: 'pic', component: _profile_editpropic_editpropic_component__WEBPACK_IMPORTED_MODULE_14__["EditpropicComponent"] },
            { path: 'progress', component: _profile_progress_progress_component__WEBPACK_IMPORTED_MODULE_15__["ProgressComponent"] },
            { path: 'regkeeper', component: _parkkeeper_keeperreg_keeperreg_component__WEBPACK_IMPORTED_MODULE_17__["KeeperregComponent"] },
            { path: 'keeper', component: _parkkeeper_keeperprofile_keeperprofile_component__WEBPACK_IMPORTED_MODULE_27__["KeeperprofileComponent"] },
            { path: '', redirectTo: 'userHome', pathMatch: 'full' },
        ]
    },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"], canActivate: [_auth_role_guard_service_guard__WEBPACK_IMPORTED_MODULE_19__["RoleGuardServiceGuard"]], data: {
            expectedRole: 'admin'
        }, children: [
            { path: 'edit', component: _admin_profileeditadmin_profileeditadmin_component__WEBPACK_IMPORTED_MODULE_20__["ProfileeditadminComponent"] },
            { path: 'addadmin', component: _admin_addadmin_addadmin_component__WEBPACK_IMPORTED_MODULE_43__["AddadminComponent"] },
            { path: 'map', component: _admin_adminmap_adminmap_component__WEBPACK_IMPORTED_MODULE_21__["AdminmapComponent"] },
            { path: 'newparks', component: _admin_keepers_keepers_component__WEBPACK_IMPORTED_MODULE_22__["KeepersComponent"] },
            { path: 'owners', component: _admin_owners_owners_component__WEBPACK_IMPORTED_MODULE_23__["OwnersComponent"] },
            { path: 'reported', component: _admin_reported_reported_component__WEBPACK_IMPORTED_MODULE_42__["ReportedComponent"] },
            { path: 'sendfile/:id', component: _admin_adminupload_adminupload_component__WEBPACK_IMPORTED_MODULE_25__["AdminuploadComponent"] },
            { path: 'messages', component: _admin_adminreceive_adminreceive_component__WEBPACK_IMPORTED_MODULE_26__["AdminreceiveComponent"] },
        ] },
    { path: 'owner/:id', component: _admin_ownerprofile_ownerprofile_component__WEBPACK_IMPORTED_MODULE_24__["OwnerprofileComponent"], canActivate: [_auth_role_guard_service_guard__WEBPACK_IMPORTED_MODULE_19__["RoleGuardServiceGuard"]], data: {
            expectedRole: 'admin'
        } },
    { path: 'park/:id', component: _admin_keeper_pro_view_keeper_pro_view_component__WEBPACK_IMPORTED_MODULE_37__["KeeperProViewComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'resetpassword', component: _signup_resetpw_resetpw_component__WEBPACK_IMPORTED_MODULE_28__["ResetpwComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__["NucleoiconsComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"] },
    { path: 'slot', component: _parkkeeper_parkingslot_parkingslot_component__WEBPACK_IMPORTED_MODULE_29__["ParkingslotComponent"] },
    { path: 'newpassword/:token/:type', component: _signup_newpw_newpw_component__WEBPACK_IMPORTED_MODULE_30__["NewpwComponent"] },
    // { path: 'newpassword/:token',      component: NewpwComponent },
    { path: 'about', component: _home_about_about_component__WEBPACK_IMPORTED_MODULE_40__["AboutComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var expectedRole = next.data.expectedRole;
        var token = this.service.getToken();
        // decode the token to get its payload
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        if (!this.service.isLoggedIn() || tokenPayload.role !== expectedRole) {
            this.router.navigateByUrl('/login');
            this.service.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.service.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/role-guard-service.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/role-guard-service.guard.ts ***!
  \**************************************************/
/*! exports provided: RoleGuardServiceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardServiceGuard", function() { return RoleGuardServiceGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleGuardServiceGuard = /** @class */ (function () {
    function RoleGuardServiceGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    RoleGuardServiceGuard.prototype.canActivate = function (next, state) {
        var expectedRole = next.data.expectedRole;
        var token = this.service.getToken();
        // decode the token to get its payload
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        if (!this.service.isLoggedIn() || tokenPayload.role !== expectedRole) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    RoleGuardServiceGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuardServiceGuard);
    return RoleGuardServiceGuard;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div> \n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
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

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = false;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basicelements></app-basicelements>\n<app-navigation></app-navigation>\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Progress Bar</h3>\n                    <br/>\n                </div>\n                <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Pagination</h3>\n                    <br/>\n                </div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                <br/>\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Navigation Tabs</h3>\n                </div>\n\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Home\">\n                                <ng-template ngbTabContent>\n                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Profile\">\n                                <ng-template ngbTabContent>\n                                    <p>Here is your profile.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Messages\">\n                                <ng-template ngbTabContent>\n                                    <p>Here are your messages.</p>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Labels</h3>\n                </div>\n                <span class=\"label label-default\">Default</span>\n                <span class=\"label label-primary\">Primary</span>\n                <span class=\"label label-info\">Info</span>\n                <span class=\"label label-success\">Success</span>\n                <span class=\"label label-warning\">Warning</span>\n                <span class=\"label label-danger\">Danger</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section section-notifications\" id=\"notifications\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Notification</h3>\n        </div>\n    </div>\n    <app-notification></app-notification>\n</div>\n<app-typography></app-typography>\n<div class=\"section javascript-components\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Angular Native Components</h2>\n        </div>\n        <div class=\"row\" id=\"modals\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Modal</h3>\n                </div>\n                <app-modal-component></app-modal-component>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Popovers</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                    on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                    on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                    on left\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                    on bottom\n                </button>\n\n            </div>\n            <br/>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Datepicker</h3>\n                </div>\n                <div class=\"row\">\n                    <div class='col-sm-6'>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group date\">\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\n                                    <span class=\"input-group-addon\">\n                                        <span class=\"glyphicon glyphicon-calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Tooltips</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                   on right\n               </button>\n               <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  on left\n               </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                   on top\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                   on bottom\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section\" id=\"carousel\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Carousel</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <div class=\"card page-carousel\">\n                    <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere else</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
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

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
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

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.html":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n        <br>\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"multiple\">Choose file(s)</label>\n                  <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n              </div>            \n          </form>\n      </div>\n      </div>\n      <br>\n      <div class=\"col-md-8\">\n           File(s) Selected: {{ uploader?.queue?.length }}\n          <table class=\"table\">\n              <thead>\n              <tr>\n                  <th width=\"50%\">Name</th>\n                  <th>Size</th>\n                  <th>Progress</th>\n                  <th>Status</th>\n                  <th>Actions</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let item of uploader.queue\">\n                  <td><strong>{{ item.file.name }}</strong></td>\n                  <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                  <td>\n                      <div class=\"progress\" style=\"margin-bottom: 0;\">\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                      </div>\n                  </td>\n                  <td class=\"text-center\">\n                      <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-check\"></i></span>\n                      <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\n                      <span *ngIf=\"item.isError\"><i class=\"fa fa-times\"></i></span>\n                  </td>\n                  <td nowrap>\n                      <button type=\"button\" class=\"btn btn-success btn-xs\"\n                              (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"fa fa-upload\"></span> Upload\n                      </button>\n                      <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                              (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                          <span class=\"fa fa-ban\"></span> Cancel\n                      </button>\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                              (click)=\"item.remove()\">\n                          <span class=\"fa fa-trash\"></span> Remove\n                      </button>\n                  </td>\n              </tr>\n              </tbody>\n          </table>\n\n          <div>\n              <hr>\n              <div>\n                  Total progress:\n                  <div class=\"progress\">\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                  </div>\n                  <hr>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-s\"\n                      (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                  <span class=\"fa fa-upload\"></span> Upload all\n              </button>\n              <button type=\"button\" class=\"btn btn-warning btn-s\"\n                      (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                  <span class=\"fa fa-ban\"></span> Cancel all\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-s\"\n                      (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                  <span class=\"fa fa-trash\"></span> Remove all\n              </button>\n          </div>\n      </div>\n</div>\n<hr>\n\n<div class=\"container\">\n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>File Name</th>\n            <th>Date</th>\n            <th>Time</th>\n            <th>Link</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let file of files\">\n            <td>{{ file.originalname }}</td>\n            <td>{{file.time | date:'MMM dd, yyyy'}}</td>\n        <td>{{ file.time | date:'hh:mm' }}</td>\n            <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\n          </tr>   \n        </tbody>\n      </table>\n  </div>\n  "

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.scss":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servers/files.service */ "./src/app/servers/files.service.ts");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(FileService, service) {
        this.FileService = FileService;
        this.service = service;
        this.files = [];
        this.id = '';
        this.url = '';
        this.au = 'Bearer ' + this.service.getToken();
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        this.id = tokenPayload._id;
        this.url = 'http://localhost:3001/api/upload/' + tokenPayload._id;
        console.log(this.url);
        this.FileService.showFileNames(this.id).subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.json().length; i++) {
                _this.files[i] = {
                    filename: response.json()[i].filename,
                    originalname: response.json()[i].originalname,
                    contentType: response.json()[i].mimetype,
                    time: response.json()[i].time,
                };
                console.log(response.json()[i].mimetype);
            }
        });
        console.log(this.url);
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: this.url, itemAlias: 'photo' });
    };
    FileUploadComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.downloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    FileUploadComponent.prototype.clear = function () {
        this.files = [];
        this.id = '';
    };
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/file-upload/file-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/home/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('assets/img/mainpic.jpg')\">\n  <div class=\"filter\"></div>\n  <div class=\"container\">\n    <div class=\"motto text-center\">\n      <h1 class=\"presentation-title\">\n        <b>PARK HERE</b>\n      </h1>\n      <h3>Assuring Your Secure and Pleasure</h3>\n      <br />\n\n    </div>\n  </div>\n</div>\n<div class=\"main\">\n  <div class=\"section text-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mr-auto ml-auto\">\n          <h2 class=\"title\">\n            <b>What is PARK HERE?</b>\n          </h2>\n          <h5 style=\"color:black\">Are you get confusing when parking your vehicle somewhere?</h5>\n          <h5 style=\"color:black\">Now it’s time to change your way. Solution PARK HERE</h5>\n          <h5 style=\"color:black\">We assure your safety and the best ever experience with parking</h5>\n          <br>\n\n        </div>\n      </div>\n      <br/>\n      <br/>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n                <i class='fas fa-globe' style='font-size:48px'></i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">\n                <b>Our Mission</b>\n              </h4>\n              <p class=\"description\" style=\"color:black\">\"To provide a secure, and pleasurable environment to park your vehicle with effient and relaiable manner</p>\n\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-6\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class='far fa-handshake' style='font-size:48px;'></i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">\n                <b>Our Vision</b>\n              </h4>\n              <p style=\"color:black\">Beyond the boundaries make the best plase in your heart as the most realiable and effienet parking system in\n                Sri Lanka</p>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"section section-dark text-center\">\n    <div class=\"container\">\n      <h2 class=\"title\">To be connected</h2>\n      <br>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-profile card-plain\">\n            <div class=\"card-avatar\">\n\n            </div>\n            <div class=\"card-block\">\n              <a href=\"#paper-kit\">\n                <div class=\"author\">\n                    <div class=\"icon icon-danger\">\n                        <i class='fas fa-phone-volume' style='font-size:48px;color:red'></i>\n                      </div>\n                  <h4 class=\"card-title\">Contact Us</h4>\n                  \n                    <br>\n                    <h6 class=\"card-category\">Address- University of Moratuwa, Katubedda, Sri Lanka</h6>\n                  <h6 class=\"card-category\">Tel - +94 71 765 7216</h6>\n                  <h6 class=\"card-category\">E-mail- parkhere@gmail.com</h6>\n                  \n                </div>\n              </a>\n\n            </div>\n         "

/***/ }),

/***/ "./src/app/home/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
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
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/home/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/home/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/mainpic.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <!-- <div class=\"angular-logo\">\n                        \n                        \n                    </div> -->\n                    <!-- <img style=\"width: 300px\" src=\"../../assets/img/WebNew.png\" alt=\"\"> -->\n                    <h1 class=\"presentation-title\">PARK HERE</h1>\n                    <!-- <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div> -->\n                    <!-- <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div> -->\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">Assuring Your Secure and Pleasure</h2>\n            </div>\n        </div>\n        <!-- <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div> -->\n        <!-- <h6 class=\" category-absolute ml-auto mr-auto\">Designed and coded by -->\n        <h6 class=\"category category-absolute\">Designed and coded by Park Here \n\n            \n        </h6>\n    </div>\n    <div class=\"main\">\n        <div class=\"section text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">Welcome to PARK HERE</h2>\n                    <h5 class=\"description\" style=\"color:black\">Parking your vehicle is a problem for you? It won't be an issue anymore with <strong>PARK HERE</strong>. Feel the best parking experience with the relaiable security ever.</h5>\n                    <br>\n                    <a href=\"#paper-kit\" routerLink=\"/about\" class=\"btn btn-danger btn-round\">About Us</a>\n                </div>\n            </div>\n            <br/><br/>\n            <div class=\"row\" style=\"color:black\">\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                                <i class='fas fa-taxi' style='font-size:48px'></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\"><b>Innovative Parking Solutions</b></h4>\n                            <p class=\"description\" style=\"color:black\">Provides advanced parkings services to drives in island wide.</p>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                                <i class='fas fa-mobile-alt' style='font-size:48px'></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\"><b>Easy Park Mobile</b></h4>\n                            <p style=\"color:black\">The most innovative parking pay by phone solution</p>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                                <i class='fab fa-amazon-pay' style='font-size:48px'></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\"><b>User friendly, easy to operate</b></h4>\n                            <p style=\"color:black\">Pay for exact time parked with cash or card.</p>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                                <i class='fas fa-child' style='font-size:48px'></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\"><b>Increase Your Parking Operations net Revenues</b> </h4>\n                            <p style=\"color:black\">Higher net income and happier customers !</p>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n    \n        </div>\n    </div>\n    <div class=\"panel-header panel-header-sm\">\n    </div>\n    <div class=\"main-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card \">\n            <div class=\"card-header \">\n              Google Maps\n            </div>\n            <div class=\"card-body \">\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n                            <!-- <agm-direction\n                              *ngIf=\"destination.lat !== null\"\n                              [origin]=\"{ lat: lat, lng: lng }\"\n                              [destination]=\"destination\"\n                            >\n                            </agm-direction> -->\n                \n                            <!-- <agm-marker\n                            *ngIf=\"destination.lat === null\"\n                            [latitude]=\"lat\"\n                            [longitude]=\"lng\"\n                          ></agm-marker> -->\n                          <agm-marker ng-click=\"click()\" *ngFor=\"let keeper of keepers\"\n                            [latitude]=\" keeper.lat\"\n                            [longitude]=\" keeper.lng\"\n                          ></agm-marker>\n                          </agm-map> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-dark text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Let's talk about us</h2>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/charindu.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-block\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Charindu Kavishan</h4>\n                                    <h6 class=\"card-category\">Developer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/wageesha.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-block\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Thilina Nisansala</h4>\n                                    <h6 class=\"card-category\">Developer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/thari1.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-block\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Tharinduni Kaushalya</h4>\n                                    <h6 class=\"card-category\">Developer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                            The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/piumika.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-block\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Piumika Bhashani</h4>\n                                    <h6 class=\"card-category\">Developer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                                    Team means encouraging a high regard on such things as team spirit, respecting others, and valuing their contributions and fostering a sense that more can be achieved by working together than as individuals.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#avatar\"><img src=\"./assets/img/faces/piumi.jpg\" alt=\"...\"></a>\n                        </div>\n                        <div class=\"card-block\">\n                            <a href=\"#paper-kit\">\n                                <div class=\"author\">\n                                    <h4 class=\"card-title\">Piyumi Madhubhashani</h4>\n                                    <h6 class=\"card-category\">Developer</h6>\n                                </div>\n                            </a>\n                            <p class=\"card-description text-center\">\n                                    Teamwork suggests that people work in an atmosphere of mutual support and trust, working together cohesively, with good inter-group relations. Each other’s strengths are valued.\n                            </p>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n\n\n\n \n    \n\n\n\n\n       "

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 500px; }\n"

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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
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
    function HomeComponent(mapsAPILoader, ngZone, service) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.service = service;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.lat = null;
        this.lng = null;
        this.zoom = 4;
        this.origin = { lat: this.lat, lng: this.lng };
        this.destination = { lat: null, lng: null };
        this.keepers = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            _this.zoom = 8;
            console.log(_this.lat, _this.lng);
        }, function (err) { return console.log(err); });
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: [],
                componentRestrictions: { country: "LK" }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.destination.lat = place.geometry.location.lat();
                    _this.destination.lng = place.geometry.location.lng();
                    console.log(_this.destination);
                });
            });
        });
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        this.service.allkeepers().subscribe(function (response) {
            console.log(response);
            _this.kepers = response;
            _this.res = _this.kepers.length;
            for (var i = 0; i < _this.kepers.length; i++) {
                if (_this.kepers[i].state == "open") {
                    _this.class = "btn btn-danger btn-round";
                    _this.kepers[i].state = "close";
                }
                else {
                    _this.class = "btn btn-warning btn-round";
                    _this.kepers[i].state = "open";
                }
                _this.keepers[i] = {
                    id: _this.kepers[i]._id,
                    name: _this.kepers[i].name,
                    class: _this.class,
                    isactivate: _this.kepers[i].isactivate,
                    state: _this.kepers[i].state,
                    lat: _this.kepers[i].lat,
                    lng: _this.kepers[i].lng,
                };
            }
        });
    };
    // calculateDuration() {
    //   var directionsService = new google.maps.DirectionsService();
    //   var directionsDisplay = new google.maps.DirectionsRenderer();
    //   var mapOptions = {
    //     zoom: 15,
    //     center: this.origin
    //   };
    //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //   directionsDisplay.setMap(map);
    //   var request = {
    //     origin: this.origin,
    //     destination: this.destination,
    //     travelMode: "DRIVING"
    //   };
    //   directionsService.route(request, function(response, status) {
    //     console.log(response);
    //     // var point = response.routes[0].legs[0];
    //     // if (status == "OK") {
    //     //   document.getElementById("point").innerHTML =
    //     //     point + point.duration.text + " km";
    //     // }
    //   });
    // }
    // calculateDuration() {
    //   var duration = google.maps.geometry.duration(
    //     new google.maps.LatLng(this.lat, this.lng),
    //     new google.maps.LatLng(this.destination.lat, this.destination.lng)
    //   );
    //   document.getElementById("duration").innerHTML = duration / 1000 + "S";
    // }
    HomeComponent.prototype.calculateDistance = function () {
        // console.log(google.maps.geometry.spherical.computeDurationBetween());
        var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.lat, this.lng), new google.maps.LatLng(this.destination.lat, this.destination.lng));
        console.log(distance);
        document.getElementById("distance").innerHTML = distance / 1000 + "km";
    };
    HomeComponent.prototype.click = function () {
        console.log('click');
    };
    HomeComponent.prototype.sendmessage = function () {
        console.log(this.email);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "searchElementRef", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_4__["RegserviceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/home/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDySdsZG3tJO4FJqgu24ujKy8kIdlexmsE'
                })
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>Example page</h1>\n            <h3>Start designing your landing page here.</h3>\n            <br />\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Let's talk product</h2>\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Henry Ford</h4>\n                                <h6 class=\"card-category\">Product Manager</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Sophie West</h4>\n                                <h6 class=\"card-category\">Designer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Robert Orben</h4>\n                                <h6 class=\"card-category\">Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/bookinghistory/bookinghistory.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/parkkeeper/bookinghistory/bookinghistory.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n  <div class=\"panel-header panel-header-sm\">\n    </div>\n    <div class=\"main-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card \">\n            <div class=\"card-header \">\n              Bookings\n            </div>\n            <div class=\"card-body \">\n                <flash-messages></flash-messages>\n                <table style=\"border-collapse: collapse;\n                border-spacing: 20px;\n                width: 100%\">\n                <tr style=\"font-size:15px\">\n                  <th>Vehicle Number</th>\n                  <th>Slot type</th>\n                  <th>Slot No</th>\n                  <th>Date</th>\n                  <th>Arrive Time</th>\n                  <th>Leave Time</th>\n                </tr>\n               \n                <tr *ngFor=\"let i of bookings\" >\n                  <td>{{i.vehicleNum}}</td>\n                  <td>{{i.vehicleType}}</td>\n                  <td>{{i.slotNum}}</td>\n                  <td>{{i.date}}</td>\n                  <td>{{i.arivalTime}}</td>\n                  <td>{{i.depatureTime}}</td>\n                  \n                </tr>\n                \n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/parkkeeper/bookinghistory/bookinghistory.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/parkkeeper/bookinghistory/bookinghistory.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/bookinghistory/bookinghistory.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/parkkeeper/bookinghistory/bookinghistory.component.ts ***!
  \***********************************************************************/
/*! exports provided: BookinghistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinghistoryComponent", function() { return BookinghistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookinghistoryComponent = /** @class */ (function () {
    function BookinghistoryComponent(flashMessage, service) {
        this.flashMessage = flashMessage;
        this.service = service;
    }
    BookinghistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        this.service.gethistory(tokenPayload._id).subscribe(function (res) {
            _this.bookings = res;
        }, function (err) {
        });
    };
    BookinghistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookinghistory',
            template: __webpack_require__(/*! ./bookinghistory.component.html */ "./src/app/parkkeeper/bookinghistory/bookinghistory.component.html"),
            styles: [__webpack_require__(/*! ./bookinghistory.component.scss */ "./src/app/parkkeeper/bookinghistory/bookinghistory.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"]])
    ], BookinghistoryComponent);
    return BookinghistoryComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/bookings/bookings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/parkkeeper/bookings/bookings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n  <div class=\"panel-header panel-header-sm\">\n    </div>\n    <div class=\"main-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card \">\n            <div class=\"card-header \">\n              Bookings\n            </div>\n            <div class=\"card-body \">\n                <flash-messages></flash-messages>\n                <table style=\"border-collapse: collapse;\n                border-spacing: 20px;\n                width: 100%\">\n                <tr style=\"font-size:15px\">\n                  <th>Vehicle Number</th>\n                  <th>Slot type</th>\n                  <th>Slot No</th>\n                  <th>Date</th>\n                  <th>Arrive Time</th>\n                  <th>Leave Time</th>\n                  <th>Release</th>\n                  <th>Cancel</th>\n                </tr>\n               \n                <tr *ngFor=\"let i of bookings\" >\n                  <td>{{i.vehicleNum}}</td>\n                  <td>{{i.vehicleType}}</td>\n                  <td>{{i.slotNum}}</td>\n                  <td>{{i.date}}</td>\n                  <td>{{i.arivalTime}}</td>\n                  <td>{{i.depatureTime}}</td>\n                  <td><button type=\"button\" (click)=\"sethistory(i)\"  class=\"btn btn-primary btn-sm\">Release</button></td>\n                  <td><button type=\"button\" (click)=\"delete(i.bookId)\" class=\"btn btn-danger btn-sm\">Cancel</button></td>\n                </tr>\n                \n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/parkkeeper/bookings/bookings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/parkkeeper/bookings/bookings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/bookings/bookings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/parkkeeper/bookings/bookings.component.ts ***!
  \***********************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingsComponent = /** @class */ (function () {
    function BookingsComponent(flashMessage, service) {
        this.flashMessage = flashMessage;
        this.service = service;
    }
    BookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        this.service.getbooking(tokenPayload._id).subscribe(function (res) {
            _this.bookings = res;
        }, function (err) {
        });
    };
    BookingsComponent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.service.deletebook(id).subscribe(function (res) {
            _this.flashMessage.show('Delete successfull', { cssClass: 'alert-danger', timeout: 3000 });
            _this.ngOnInit();
        });
    };
    BookingsComponent.prototype.sethistory = function (data) {
        var _this = this;
        this.service.sethistory(data).subscribe(function (res) {
            _this.flashMessage.show('Release successfull', { cssClass: 'alert-success', timeout: 3000 });
            _this.service.deletebook(data.bookId).subscribe(function (res) {
                _this.flashMessage.show('Remove booking', { cssClass: 'alert-danger', timeout: 3000 });
                _this.ngOnInit();
            });
            _this.ngOnInit();
        });
    };
    BookingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! ./bookings.component.html */ "./src/app/parkkeeper/bookings/bookings.component.html"),
            styles: [__webpack_require__(/*! ./bookings.component.scss */ "./src/app/parkkeeper/bookings/bookings.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"]])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/details/details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/parkkeeper/details/details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"panel-header panel-header-sm\">\n    </div>\n    <div class=\"main-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card \">\n            <div class=\"card-header \">\n              My Details\n            </div>\n            <div class=\"card-body \">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" style=\"color:black\"><b>Username:   {{user.username}}</b></li>\n                    <li class=\"list-group-item\"  style=\"color:black\"><b>Email:   {{user.email}}</b></li>\n                    <li class=\"list-group-item\" style=\"color:black\"><b>Mobile Number:   {{user.mobileNum}}</b></li>\n                    <li class=\"list-group-item\" style=\"color:black\"><b>NIC Number:   {{user.NICnumber}}</b></li>\n                  </ul> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/parkkeeper/details/details.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/parkkeeper/details/details.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/parkkeeper/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(service) {
        this.service = service;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getKeeperProfile().subscribe(function (res) {
            _this.user = res['user'];
            console.log(_this.user);
        }, function (err) {
            console.log(err);
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/parkkeeper/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/parkkeeper/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/keeper-pic/keeper-pic.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/keeper-pic/keeper-pic.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n        <br>\n          <form> \n              <div  class=\"form-group\">\n                  <label for=\"multiple\">Choose file(s)</label>\n                  <!-- <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  /> -->\n      \n                  <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\n              </div>            \n          </form>\n          <!-- <button type=\"button\" class=\"btn btn-success btn-s\"\n                            (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                        <span class=\"fa fa-upload\"></span> Upload all\n                    </button> -->\n      </div>\n      \n      \n      <!-- <div class=\"card-body\">\n          <h5 class=\"card-title\">Select a file for upload:</h5>\n          <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\n        </div>\n        \n        <br>\n              <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\n                  File uploaded: <a [href]=\"downloadSrc\">{{downloadSrc}}</a>\n                  <img src={{downloadSrc}} alt=\"\">\n              </div>\n        \n              <br> -->"

/***/ }),

/***/ "./src/app/parkkeeper/keeper-pic/keeper-pic.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/keeper-pic/keeper-pic.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/keeper-pic/keeper-pic.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/keeper-pic/keeper-pic.component.ts ***!
  \***************************************************************/
/*! exports provided: KeeperPicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeeperPicComponent", function() { return KeeperPicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _keeperprofile_keeperprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../keeperprofile/keeperprofile.component */ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KeeperPicComponent = /** @class */ (function () {
    function KeeperPicComponent(service, afStorage, router, keeper) {
        this.service = service;
        this.afStorage = afStorage;
        this.router = router;
        this.keeper = keeper;
        this.pic = "";
        this.files = [];
        this.id = '';
        this.url = '';
        this.model = {
            url: "",
            PicUrl: ""
        };
    }
    KeeperPicComponent.prototype.ngOnInit = function () {
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.id = tokenPayload._id;
        this.url = 'http://localhost:3001/api/updatekeeperpic/' + tokenPayload._id;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: this.url, itemAlias: 'photo' });
    };
    KeeperPicComponent.prototype.upload = function (event) {
        var _this = this;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.downloadURL = _this.ref.getDownloadURL(); }))
            .subscribe();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (PicUrl) {
                _this.model.PicUrl = PicUrl;
                // console.log(url); // <-- do what ever you want with the url..
                var token = _this.service.getToken();
                var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
                _this.id = tokenPayload._id;
                _this.model.url = 'http://localhost:3000/api/updatekeeperpic/' + tokenPayload._id;
                _this.service.editkeeperPic(_this.model).subscribe(function (res) {
                    _this.keeper.ngOnInit();
                    _this.keeper.editpi = false;
                }, function (err) {
                    console.log(err);
                });
                // this.pic=url;
            });
        })).subscribe();
    };
    KeeperPicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keeper-pic',
            template: __webpack_require__(/*! ./keeper-pic.component.html */ "./src/app/parkkeeper/keeper-pic/keeper-pic.component.html"),
            styles: [__webpack_require__(/*! ./keeper-pic.component.scss */ "./src/app/parkkeeper/keeper-pic/keeper-pic.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _keeperprofile_keeperprofile_component__WEBPACK_IMPORTED_MODULE_7__["KeeperprofileComponent"]])
    ], KeeperPicComponent);
    return KeeperPicComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/keeperedit/keeperedit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/keeperedit/keeperedit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div a class=\"row\">\n      <div  class=\"col-md-12 mr-auto ml-auto\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h5 class=\"title\">Edit park details</h5>\n          </div>\n          <div class=\"card-body\">\n            <form #regForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" [value]=\"userDetails.name\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Username</label>\n                      <input type=\"text\" [value]=\"userDetails.username\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input type=\"text\" [value]=\"userDetails.email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n                      </div>\n                        <div class=\"form-group\">\n                          <label>Mobile Number</label>\n                          <input type=\"text\" [value]=\"userDetails.mobileNum\" [(ngModel)]=\"mobileNum\" name=\"mobileNum\" class=\"form-control\">\n                        </div>\n                        <div class=\"form-group\">\n                          <label>NIC number</label>\n                          <input type=\"text\" [value]=\"userDetails.NICnumber\" [(ngModel)]=\"NICnumber\" name=\"NICnumber\" class=\"form-control\">\n                        </div>\n                        <br>\n                        <br>\n                        <br>\n                        <h2>Fill this fields for get your park details</h2>\n                        <div class=\"form-group\">\n                          <label>Park Name</label>\n                          <input type=\"text\"[value]=\"userDetails.parkName\" [(ngModel)]=\"parkName\" name=\"parkName\" class=\"form-control\">\n                        </div>\n                        <div class=\"form-group\">\n                          <label>Number of total slots</label>\n                          <input type=\"number\" [value]=\"userDetails.numberOfSlots\" [(ngModel)]=\"numberOfSlots\" name=\"numberOfSlots\" class=\"form-control\">\n                          <label>Open houres</label>\n                          <input type=\"text\" [value]=\"userDetails.openHours\" [(ngModel)]=\"openHours\" name=\"openHours\" class=\"form-control\">\n                        </div>\n                        \n                        <br>\n                <br>\n                <br>\n                <h2>Please fill these fileds to get your paking slots' details</h2>\n                \n                        <table class=\"table\">\n                          <thead class=\"thead-dark\">\n                          \n                            <tr>\n                              <th scope=\"col\">Vehicle Type</th>\n                              <th scope=\"col\">Number of slots allocated</th>\n                              <th scope=\"col\">Charge per one hour</th>\n                              \n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <th scope=\"row\" style=\"color:black\">Cars and Vans</th>\n                              <td><input type=\"number\" [value]=\"userDetails.alocatedSlots1\" [(ngModel)]=\"alocatedSlots1\" name=\"alocatedSlots1\" class=\"form-control\"></td>\n                              <td><input type=\"text\" [value]=\"userDetails.hourCharge1\" [(ngModel)]=\"hourCharge1\" name=\"hourCharge1\" class=\"form-control\"></td>\n                             \n                            </tr>\n                            <tr>\n                              <th scope=\"row\" style=\"color:blue\">Bikes</th>\n                              <td><input type=\"number\" [value]=\"userDetails.alocatedSlots2\" [(ngModel)]=\"alocatedSlots2\" name=\"alocatedSlots2\" class=\"form-control\"></td>\n                              <td><input type=\"text\" [value]=\"userDetails.hourCharge2\" [(ngModel)]=\"hourCharge2\" name=\"hourCharge2\" class=\"form-control\"></td>\n                              \n                            </tr>\n                            <tr>\n                              <th scope=\"row\" style=\"color:red\">Lorries and Buses</th>\n                              <td><input type=\"number\" [value]=\"userDetails.alocatedSlots3\" [(ngModel)]=\"alocatedSlots3\" name=\"alocatedSlots3\" class=\"form-control\"></td>\n                              <td><input type=\"text\" [value]=\"userDetails.hourCharge3\" [(ngModel)]=\"hourCharge3\" name=\"hourCharge3\" class=\"form-control\"></td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\" style=\"color:green\">Three Wheelers</th>\n                              <td><input type=\"number\" [value]=\"userDetails.alocatedSlots4\" [(ngModel)]=\"alocatedSlots4\" name=\"alocatedSlots4\" class=\"form-control\"></td>\n                              <td><input type=\"text\" [value]=\"userDetails.hourCharge4\" [(ngModel)]=\"hourCharge4\" name=\"hourCharge4\" class=\"form-control\"></td>\n                            </tr>\n                            <tr>\n                              <th scope=\"row\" style=\"color:yellow\">Long Vehicles</th>\n                              <td><input type=\"number\" [value]=\"userDetails.alocatedSlots5\" [(ngModel)]=\"alocatedSlots5\" name=\"alocatedSlots5\" class=\"form-control\"></td>\n                              <td><input type=\"text\" [value]=\"userDetails.hourCharge5\" [(ngModel)]=\"hourCharge5\" name=\"hourCharge5\" class=\"form-control\"></td>\n                            </tr>\n                          </tbody>\n                        </table>\n                        <br>\n                        <br>\n                        <br>\n                        <div class=\"form-group\">\n                          <label>Maximum Weight</label>\n                          <input type=\"text\" [value]=\"userDetails.MaximumWeight\" [(ngModel)]=\"MaximumWeight\" name=\"MaximumWeight\" class=\"form-control\">\n                        </div>\n                        <div class=\"form-group\">\n                          <label>Maximum Height</label>\n                          <input type=\"text\" [value]=\"userDetails.MaximumHeight\" [(ngModel)]=\"MaximumHeight\" name=\"MaximumHeight\" class=\"form-control\">\n                        </div>\n                        <br>\n                        <br>\n                        <br>\n                        <flash-messages></flash-messages>\n                        <div class=\"ml-auto mr-auto text-center\">\n                            <button (click)=\"register()\"  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-tap-01\"></i>Add</button>\n                         </div>\n            </form>\n            \n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  \n   "

/***/ }),

/***/ "./src/app/parkkeeper/keeperedit/keeperedit.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/keeperedit/keeperedit.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/keeperedit/keeperedit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/keeperedit/keeperedit.component.ts ***!
  \***************************************************************/
/*! exports provided: KeepereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepereditComponent", function() { return KeepereditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _servers_validate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servers/validate.service */ "./src/app/servers/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KeepereditComponent = /** @class */ (function () {
    function KeepereditComponent(validateService, flashMessage, service, router, mapsAPILoader, ngZone) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.service = service;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.iserror = false;
        this.res = '';
        this.serverErrorMessages = '';
        this.laat = null;
        this.lnng = null;
        this.zoom = 4;
        this.origin = { lat: this.laat, lng: this.lnng };
        this.destination = { lat: null, lng: null };
        this.userId = '';
    }
    KeepereditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.service.isLoggedIn())
            this.router.navigate(['/login']);
        this.service.getKeeperProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            console.log(_this.userDetails);
            _this.userId = _this.userDetails._id;
            // console.log(this.userId);
            console.log(_this.userDetails.name);
        }, function (err) {
            console.log(err);
        });
    };
    KeepereditComponent.prototype.register = function () {
        var _this = this;
        console.log('skjfgnfsfnkagjb');
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            // password: this.password,
            mobileNum: this.mobileNum,
            NICnumber: this.NICnumber,
            parkName: this.parkName,
            numberOfSlots: this.numberOfSlots,
            openHours: this.openHours,
            alocatedSlots1: this.alocatedSlots1,
            hourCharge1: this.hourCharge1,
            alocatedSlots2: this.alocatedSlots2,
            hourCharge2: this.hourCharge2,
            alocatedSlots3: this.alocatedSlots3,
            hourCharge3: this.hourCharge3,
            alocatedSlots4: this.alocatedSlots4,
            hourCharge4: this.hourCharge4,
            alocatedSlots5: this.alocatedSlots5,
            hourCharge5: this.hourCharge5,
            MaximumWeight: this.MaximumWeight,
            MaximumHeight: this.MaximumHeight,
            role: "keeper",
        };
        console.log(user);
        // if(!this.validateService. validateRegister(user)){
        //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
        //   return false;
        // }
        // ///Validate Email
        // if(!this.validateService.validateEmail(user.email)){
        //   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        //   return false;
        // }
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        this.service.regkeeper(user, tokenPayload._id)
            .subscribe(function (response) {
            if (response) {
                _this.res = response['status'];
                console.log(response);
                if (!_this.res) {
                    _this.serverErrorMessages = 'Your email is already exists';
                }
                else {
                    console.log(response);
                    _this.serverErrorMessages = "Registration Succsesfull";
                    _this.router.navigateByUrl('/user-profile/myparks');
                }
            }
        }, function (error) {
            console.log(error);
            _this.iserror = true;
            {
                if (error)
                    _this.serverErrorMessages = 'Your email is already exists';
            }
        });
    };
    KeepereditComponent.prototype.closeAlert = function () {
        this.iserror = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], KeepereditComponent.prototype, "searchElementRef", void 0);
    KeepereditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keeperedit',
            template: __webpack_require__(/*! ./keeperedit.component.html */ "./src/app/parkkeeper/keeperedit/keeperedit.component.html"),
            styles: [__webpack_require__(/*! ./keeperedit.component.scss */ "./src/app/parkkeeper/keeperedit/keeperedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_validate_service__WEBPACK_IMPORTED_MODULE_6__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], KeepereditComponent);
    return KeepereditComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/parkkeeper/keeperprofile/keeperprofile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/8.jpg');\">\n        <div class=\"filter\"></div>\n        \n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                    <div class=\"avatar\">\n                            <img src=\"{{pic}}\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\">\n                        </div>\n                        <!-- <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class='fas fa-edit' style='font-size:24px'></i></button> -->\n                        <button type=\"file\" rel=\"tooltip\" (click)=\"editpic()\" ngbTooltip=\"Edit profile picture\" data-placement=\"bottom\" type=\"button\"\n                            class=\"btn btn-primary btn-link\">\n                            <i class='fa fa-edit' style='font-size:36px'></i>\n                        </button>\n                        <div *ngIf=\"editpi\">\n                            <app-keeper-pic></app-keeper-pic>\n                        </div>\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class='fas fa-edit' style='font-size:24px'></i></button> -->\n                <!-- <button type=\"file\" rel=\"tooltip\" (click)=\"editpic()\" ngbTooltip=\"Edit profile picture\" data-placement=\"bottom\" type=\"button\" class=\"btn btn-primary btn-link\"> <i class='fa fa-edit' style='font-size:36px'></i></button> -->\n                <!-- <s -->\n                <div class=\"name\">\n                    <h2 class=\"title\">{{userDetails.parkName}}<br /></h2>\n                \n                </div>\n            </div>\n            <div class=\"row\">\n                <div *ngIf=\"ishome()&& home\" class=\"ml-auto mr-auto text-center\">\n                    \n                    <a routerLink=\"/keeper/details\"> <button class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i>Details</button></a>\n                </div>\n                <div  *ngIf=\"ishome()&& home\" class=\"ml-auto mr-auto text-center\">\n                    \n                       <a routerLink=\"/keeper/slot\"><button (click)=\"slotmode()\" class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-bank\"></i> Parking Slot</button></a> \n                </div>\n                <div  *ngIf=\"ishome() && home\" class=\"ml-auto mr-auto text-center\">\n                    \n                   <a routerLink=\"/keeper/booking\"><button  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-pin-3\"></i> Booking details</button></a> \n                </div>\n                <div  *ngIf=\"ishome() && home\" class=\"ml-auto mr-auto text-center\">\n                    \n                   <a routerLink=\"/keeper/recent\"><button  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i> Recent activities</button></a> \n                </div>\n                <div  *ngIf=\"isslot()\" class=\"ml-auto mr-auto text-center\">\n                    <a routerLink=\"/keeper\"><button (click)=\"gohome()\" class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i> Home</button></a> \n                </div>\n                <div  *ngIf=\"isslot()\" class=\"ml-auto mr-auto text-center\">\n                    \n                    <a routerLink=\"/keeper/car\"><button  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i>car and Van</button></a> \n                 </div>\n                 <div  *ngIf=\"isslot()\" class=\"ml-auto mr-auto text-center\">\n                    \n                    <a routerLink=\"/keeper/bike\"><button  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i>Bikes</button></a> \n                 </div>\n                 <div  *ngIf=\"isslot()\" class=\"ml-auto mr-auto text-center\">\n                    \n                    <a routerLink=\"/keeper/lorry\"><button  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i>Busses and Lorries</button></a> \n                </div>\n                <div  *ngIf=\"isslot()\" class=\"ml-auto mr-auto text-center\">\n                    \n                    <a routerLink=\"/keeper/weel\"><button  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i>Three Wheelers</button></a> \n                 </div>\n                 <div  *ngIf=\"isslot()\" class=\"ml-auto mr-auto text-center\">\n                    \n                    <a routerLink=\"/keeper/longVehicle\"><button  class=\"btn btn-outline-default btn-round\"><i class=\"nc-icon nc-simple-add\"></i>Long</button></a> \n                 </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                        <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/parkkeeper/keeperprofile/keeperprofile.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/parkkeeper/keeperprofile/keeperprofile.component.ts ***!
  \*********************************************************************/
/*! exports provided: KeeperprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeeperprofileComponent", function() { return KeeperprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeeperprofileComponent = /** @class */ (function () {
    function KeeperprofileComponent(service, router, location) {
        this.service = service;
        this.router = router;
        this.location = location;
        this.isSlot = false;
        this.home = true;
        this.MotorBicycle = false;
        this.ThreeWheelers = false;
        this.LightVehicle = false;
        this.HeavyVehicle = false;
        this.userId = '';
        this.editpi = false;
        this.pic = "../../../assets/img/faces/default.jpg";
    }
    KeeperprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.service.isLoggedIn())
            this.router.navigate(['/login']);
        this.service.getKeeperProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            console.log(_this.userDetails);
            _this.userId = _this.userDetails._id;
            _this.pic = _this.userDetails.proPic;
            _this.service.setid(_this.userDetails._id);
            // console.log(this.userId);
            console.log(_this.userDetails.name);
        }, function (err) {
            console.log(err);
        });
    };
    KeeperprofileComponent.prototype.slotmode = function () {
        this.isSlot = true;
        this.home = false;
    };
    KeeperprofileComponent.prototype.gohome = function () {
        this.isSlot = false;
        this.home = true;
    };
    KeeperprofileComponent.prototype.ishome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/keeper') {
            return true;
        }
        else {
            return false;
        }
    };
    KeeperprofileComponent.prototype.isslot = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/keeper/slot') {
            return true;
        }
        else {
            return false;
        }
    };
    KeeperprofileComponent.prototype.editpic = function () {
        if (this.editpi == false)
            this.editpi = true;
        else
            this.editpi = false;
    };
    KeeperprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keeperprofile',
            template: __webpack_require__(/*! ./keeperprofile.component.html */ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.html"),
            styles: [__webpack_require__(/*! ./keeperprofile.component.scss */ "./src/app/parkkeeper/keeperprofile/keeperprofile.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], KeeperprofileComponent);
    return KeeperprofileComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/keeperreg/keeperreg.component.html":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/keeperreg/keeperreg.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div a class=\"row\">\n    <div class=\"col-md-12 mr-auto ml-auto\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2 class=\"title\">Add park</h2>\n        </div>\n        <h3>Fill this fields for get your park keeper details</h3>\n        <div class=\"card-body\">\n          <form #regForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label>Park Keeper Name</label>\n              <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Username</label>\n              <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Email</label>\n              <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Search your park\n                <i class=\"fas fa-map-marker-alt\"></i>\n              </label>\n              <input required placeholder=\"search the park\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\"\n                #search [formControl]=\"searchControl\" />\n\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\"  [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Mobile Number</label>\n              <input type=\"text\" [(ngModel)]=\"mobileNum\" name=\"mobileNum\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>NIC number</label>\n              <input type=\"text\" [(ngModel)]=\"NICnumber\" name=\"NICnumber\" class=\"form-control\">\n            </div>\n            \n            <br>\n            <br>\n            <br>\n            <h2>Fill this fields for get your park details</h2>\n            <div class=\"form-group\">\n              <label>Park Name</label>\n              <input type=\"text\" [(ngModel)]=\"parkName\" name=\"parkName\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Number of total slots</label>\n              <input type=\"number\" [(ngModel)]=\"numberOfSlots\" name=\"numberOfSlots\" class=\"form-control\">\n              <label>Open houres</label>\n              <input type=\"text\" [(ngModel)]=\"openHours\" name=\"openHours\" class=\"form-control\">\n            </div>\n\n            <br>\n            <br>\n            <br>\n            <h2>Please fill these fileds to get your paking slots' details</h2>\n\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n\n                <tr>\n                  <th scope=\"col\">Vehicle Type</th>\n                  <th scope=\"col\">Number of slots allocated</th>\n                  <th scope=\"col\">Charge per one hour</th>\n\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\" style=\"color:black\">Cars and Vans</th>\n                  <td>\n                    <input type=\"number\" [(ngModel)]=\"alocatedSlots1\" name=\"alocatedSlots1\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" [(ngModel)]=\"hourCharge1\" name=\"hourCharge1\" class=\"form-control\">\n                  </td>\n\n                </tr>\n                <tr>\n                  <th scope=\"row\" style=\"color:blue\">Bikes</th>\n                  <td>\n                    <input type=\"number\" [(ngModel)]=\"alocatedSlots2\" name=\"alocatedSlots2\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" [(ngModel)]=\"hourCharge2\" name=\"hourCharge2\" class=\"form-control\">\n                  </td>\n\n                </tr>\n                <tr>\n                  <th scope=\"row\" style=\"color:red\">Lorries and Buses</th>\n                  <td>\n                    <input type=\"number\" [(ngModel)]=\"alocatedSlots3\" name=\"alocatedSlots3\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" [(ngModel)]=\"hourCharge3\" name=\"hourCharge3\" class=\"form-control\">\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\" style=\"color:green\">Three Wheelers</th>\n                  <td>\n                    <input type=\"number\" [(ngModel)]=\"alocatedSlots4\" name=\"alocatedSlots4\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" [(ngModel)]=\"hourCharge4\" name=\"hourCharge4\" class=\"form-control\">\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\" style=\"color:yellow\">Long Vehicles</th>\n                  <td>\n                    <input type=\"number\" [(ngModel)]=\"alocatedSlots5\" name=\"alocatedSlots5\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" [(ngModel)]=\"hourCharge5\" name=\"hourCharge5\" class=\"form-control\">\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\" >Total Slots</th>\n                  <td>\n                    <input disabled type=\"number\" [(ngModel)]=\"numberOfSlots\" [value]=\"(alocatedSlots1+alocatedSlots2+alocatedSlots3+alocatedSlots4+alocatedSlots5)\" name=\"numberOfSlots\" class=\"form-control\">\n                  </td>\n                  <td>\n                  </td>\n                </tr>\n              \n              </tbody>\n            </table>\n            <br>\n            <br>\n            <br>\n            <div class=\"form-group\">\n              <label>Maximum Weight</label>\n              <input type=\"text\" [(ngModel)]=\"MaximumWeight\" name=\"MaximumWeight\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n              <label>Maximum Height</label>\n              <input type=\"text\" [(ngModel)]=\"MaximumHeight\" name=\"MaximumHeight\" class=\"form-control\">\n            </div>\n            <form>\n              <div class=\"form-group\">\n                <label for=\"multiple\">Upload park's legal documents</label>\n                <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\"  accept=\".png,.jpg,.doc,.docx,.pdf\" />\n              </div>\n            </form>\n            <br>\n            <br>\n            <br>\n            <div *ngIf=\"isloading\" class=\"loader\"></div>\n            <flash-messages></flash-messages>\n            <div class=\"ml-auto mr-auto text-center\">\n              <button (click)=\"register()\" class=\"btn btn-outline-default btn-round\">\n                <i class=\"nc-icon nc-tap-01\"></i>Add</button>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/parkkeeper/keeperreg/keeperreg.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/keeperreg/keeperreg.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  border: 10px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite; }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/parkkeeper/keeperreg/keeperreg.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/parkkeeper/keeperreg/keeperreg.component.ts ***!
  \*************************************************************/
/*! exports provided: KeeperregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeeperregComponent", function() { return KeeperregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _servers_validate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../servers/validate.service */ "./src/app/servers/validate.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var KeeperregComponent = /** @class */ (function () {
    function KeeperregComponent(validateService, flashMessage, service, router, mapsAPILoader, ngZone, afStorage) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.service = service;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.afStorage = afStorage;
        this.model = {
            url: "",
            PicUrl: ""
        };
        this.isloading = false;
        this.iserror = false;
        this.res = '';
        this.serverErrorMessages = '';
        this.laat = null;
        this.lnng = null;
        this.zoom = 4;
        this.origin = { lat: this.laat, lng: this.lnng };
        this.destination = { lat: null, lng: null };
        this.id = '';
        this.message1 = "";
    }
    KeeperregComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: [],
                componentRestrictions: { country: "LK" }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.destination.lat = place.geometry.location.lat();
                    _this.destination.lng = place.geometry.location.lng();
                    console.log(_this.destination);
                    _this.lat = _this.destination.lat;
                    _this.lng = _this.destination.lng;
                    // console.log(this.reg.lat)
                });
            });
        });
    };
    KeeperregComponent.prototype.register = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            mobileNum: this.mobileNum,
            NICnumber: this.NICnumber,
            parkName: this.parkName,
            numberOfSlots: this.numberOfSlots,
            openHours: this.openHours,
            alocatedSlots1: this.alocatedSlots1,
            hourCharge1: this.hourCharge1,
            alocatedSlots2: this.alocatedSlots2,
            hourCharge2: this.hourCharge2,
            alocatedSlots3: this.alocatedSlots3,
            hourCharge3: this.hourCharge3,
            alocatedSlots4: this.alocatedSlots4,
            hourCharge4: this.hourCharge4,
            alocatedSlots5: this.alocatedSlots5,
            hourCharge5: this.hourCharge5,
            MaximumWeight: this.MaximumWeight,
            MaximumHeight: this.MaximumHeight,
            role: "keeper",
            lat: this.lat,
            lng: this.lng,
            docUrl: this.docUrl
        };
        console.log(user);
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        ///Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        this.service.regkeeper(user, tokenPayload._id)
            .subscribe(function (response) {
            if (response) {
                _this.res = response['status'];
                console.log(response);
                if (!_this.res) {
                    _this.serverErrorMessages = 'Your email is already exists';
                }
                else {
                    console.log(response);
                    _this.serverErrorMessages = "Registration Succsesfull";
                    _this.router.navigateByUrl('/user-profile/myparks');
                }
            }
        }, function (error) {
            console.log(error);
            _this.iserror = true;
            {
                if (error)
                    _this.serverErrorMessages = 'Your email is already exists';
            }
        });
    };
    KeeperregComponent.prototype.closeAlert = function () {
        this.iserror = false;
    };
    KeeperregComponent.prototype.upload = function (event) {
        var _this = this;
        this.isloading = true;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.downloadURL = _this.ref.getDownloadURL(); }))
            .subscribe();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (PicUrl) {
                _this.docUrl = PicUrl;
                console.log(_this.docUrl);
                _this.isloading = false;
                // console.log(url); // <-- do what ever you want with the url..
                // const token = this.service.getToken();
                // const tokenPayload = decode(token);
                // this.id = tokenPayload._id;
                // this.pic=url;
            });
        })).subscribe();
    };
    KeeperregComponent.prototype.validateNIC = function () {
        var nic = document.getElementById('NICnumber');
        var mesg = document.getElementById('message1');
        if (this.NICnumber.length != 14) {
            mesg.innerHTML = "Length must be 14 characters";
        }
        else {
            mesg.innerHTML = "Length is good";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], KeeperregComponent.prototype, "searchElementRef", void 0);
    KeeperregComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keeperreg',
            template: __webpack_require__(/*! ./keeperreg.component.html */ "./src/app/parkkeeper/keeperreg/keeperreg.component.html"),
            styles: [__webpack_require__(/*! ./keeperreg.component.scss */ "./src/app/parkkeeper/keeperreg/keeperreg.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_validate_service__WEBPACK_IMPORTED_MODULE_7__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]])
    ], KeeperregComponent);
    return KeeperregComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/bike/bike.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/bike/bike.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Bikes</h1>\n<br>\n<br>\n<br>\n<h2>Total number of allocated slots: {{amounts}}</h2>\n<h2>Charge per Hour: {{charge}}</h2>\n<flash-messages></flash-messages>\n\n<div class=\"grid-container\">\n  <div *ngFor=\"let i of Arr\">\n    <div class=\"flip-card\">\n      <div class=\"flip-card-inner\">\n\n        <div class=\"flip-card-front\" style=\"background-color:rgb(19, 198, 221)\">\n          <div class=\"card-header\" style=\"font-size: 30pt\">{{i.slotNumber}}</div>\n\n          <div class=\"card-body\">\n            <h1 *ngIf=\"i.isBook==false\" style=\"font-size: 20pt\">Available Now</h1>\n            <h1 *ngIf=\"i.isBook==true\" style=\"font-size: 20pt\">Parked</h1>\n          </div>\n        </div>\n        <div class=\"flip-card-back\">\n          <h3 *ngIf=\"i.isBook\">Reserved by : {{i.name}}</h3>\n          <h3 *ngIf=\"i.isBook\">Reverver Id : {{i.nic}}</h3>\n          <h3 *ngIf=\"i.isBook\">Parks : {{i.parkedAt}}</h3>\n          <h3 *ngIf=\"i.isBook\">Leaves : {{i.leavAt}}</h3>\n          <br>\n          \n          \n          <button class=\"btn btn-success btn-sm\" (click)=\"open(i.slotId)\">Details</button>\n          <button class=\"btn btn-danger btn-sm\"*ngIf=\"i.isBook\" (click)=\"Release(i.slotId)\">Release</button>\n          <br>\n          <br>\n          <button (click)=\"price(i)\" type=\"top\" class=\"btn btn-outline-light  btn-sm btn-round\" placement=\"top\" ngbPopover=\"Rs. {{finalPrice}}\"\n            popoverTitle=\"Calculated charge\">\n            Calculate charge\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/bike/bike.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/bike/bike.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.flip-card {\n  background-color: transparent;\n  width: 250px;\n  height: 250px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.flip-card-front {\n  background-color: #bbb;\n  color: black;\n  z-index: 2; }\n\n.flip-card-back {\n  background-color: #2980b9;\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  z-index: 1; }\n\n.grid-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto;\n      grid-template-columns: auto auto auto auto;\n  grid-gap: 80px;\n  /* background-color: #2196F3; */\n  padding: 10px; }\n\n.grid-container > div {\n  /* background-color: rgba(255, 255, 255, 0.8); */\n  text-align: center;\n  padding: 20px 0;\n  font-size: 7px; }\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/bike/bike.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/bike/bike.component.ts ***!
  \***************************************************************/
/*! exports provided: NgbdModalContent, popup, BikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeComponent", function() { return BikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getbookings(this.Id).subscribe(function (res) {
            _this.bookings = res;
        }, function (err) {
        });
    };
    NgbdModalContent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.service.deletebook(id).subscribe(function (res) {
            _this.flashMessage.show('Delete successfull', { cssClass: 'alert-danger', timeout: 3000 });
            _this.ngOnInit();
        });
    };
    NgbdModalContent.prototype.sethistory = function (data) {
        var _this = this;
        this.service.sethistory(data).subscribe(function (res) {
            _this.flashMessage.show('Accept', { cssClass: 'alert-success', timeout: 3000 });
            _this.service.deletebook(data.bookId).subscribe(function (res) {
                _this.flashMessage.show('Remove booking', { cssClass: 'alert-danger', timeout: 3000 });
                _this.ngOnInit();
            });
            _this.ngOnInit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "Id", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"card bg-light mb-3\" style=\"width: 100%;\">\n  \n  <div class=\"card-body\">\n  <flash-messages></flash-messages>\n  <table style=\"border-collapse: collapse;\n  border-spacing: 20px;\n  width: 100%;\n  borde:none\">\n  <tr style=\"font-size:10px\">\n    <th>Vehicle Number</th>\n    <th>Driver Name</th>\n    <th>Diver Id</th>\n    <th>Date</th>\n    <th>Arrive Time</th>\n    <th>Leave Time</th>\n    <th>Release</th>\n    <th>Cancel</th>\n  </tr>\n \n  <tr *ngFor=\"let i of bookings\" >\n    <td>{{i.vehicleNum}}</td>\n    <td>{{i.DriverName}}</td>\n    <td>{{i.DriverId}}</td>\n    <td>{{i.date}}</td>\n    <td>{{i.arivalTime}}</td>\n    <td>{{i.depatureTime}}</td>\n    <td><button type=\"button\"  (click)=\"sethistory(i)\"  class=\"btn btn-primary btn-sm\">Accept</button></td>\n    <td><button type=\"button\" (click)=\"delete(i.bookId)\" class=\"btn btn-danger btn-sm\">Cancel</button></td>\n  </tr>\n  \n</table>\n    \n </div>\n  \n</div>\n"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var popup = /** @class */ (function () {
    function popup(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    popup.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], popup.prototype, "Id", void 0);
    popup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popup',
            template: ""
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], popup);
    return popup;
}());

var BikeComponent = /** @class */ (function () {
    function BikeComponent(flashMessage, modalService, service, router) {
        this.flashMessage = flashMessage;
        this.modalService = modalService;
        this.service = service;
        this.router = router;
        this.data = {
            keeperId: '',
            slotId: '',
            charge: 0
        };
        this.finalPrice = 0;
        this.penalty = 0;
    }
    BikeComponent.prototype.open = function (id) {
        var modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
        modalRef.componentInstance.Id = id;
    };
    BikeComponent.prototype.Release = function (id) {
        var _this = this;
        this.data.slotId = id;
        this.data.charge = this.finalPrice;
        this.service.release(this.data).subscribe(function (res) {
            _this.ngOnInit();
            // console.log('success');
            _this.flashMessage.show('Slot is available now', { cssClass: 'alert-success', timeout: 3000 });
        });
    };
    BikeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getKeeperProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            _this.amounts = _this.user.alocatedSlots2;
            _this.num = _this.user.alocatedSlots2;
            _this.charge = _this.user.hourCharge2;
            _this.Arr = _this.user.type2;
            _this.data.keeperId = _this.user._id;
            console.log(_this.Arr);
            //   this.i = this.Arr.indexof(this.Arr);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    //   onClick(){
    //     this.Arr.i.isBook="false";
    //   }
    BikeComponent.prototype.price = function (data) {
        // console.log(this.finalPrice)
        //     let date=new Date();
        //     var one_hour=1000*60;
        //   var date1_ms = date.getTime();
        //   var date2_ms = data.parkedAtgetTime();
        //   var difference_ms = date2_ms - date1_ms;    
        // if(Math.round(difference_ms/one_hour)>15)
        // this.penalty=(difference_ms/one_hour);
        // else this.penalty=0;
        this.finalPrice = (data.charge);
        console.log(this.finalPrice);
        // console.log(dat.getTime())
    };
    BikeComponent.prototype.onClick1 = function () {
        alert("shqwqwk");
    };
    BikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bike',
            template: __webpack_require__(/*! ./bike.component.html */ "./src/app/parkkeeper/parkingslot/bike/bike.component.html"),
            styles: [__webpack_require__(/*! ./bike.component.scss */ "./src/app/parkkeeper/parkingslot/bike/bike.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BikeComponent);
    return BikeComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/car/car.component.html":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/car/car.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        \n    <h1>Cars and Vans</h1>\n<br>\n<br>\n<br>\n<h2>Total number of allocated slots: {{amounts}}</h2>\n<h2>Charge per Hour: {{charge}}</h2>\n<flash-messages></flash-messages>\n<div class=\"grid-container\">\n  <div *ngFor=\"let i of Arr\">\n    <div class=\"flip-card\">\n      <div class=\"flip-card-inner\">\n\n        <div class=\"flip-card-front\" style=\"background-color:rgb(53, 57, 58)\">\n          <div class=\"card-header\" style=\"font-size: 30pt\">{{i.slotNumber}}</div>\n\n          <div class=\"card-body\">\n            <h1 *ngIf=\"i.isBook==false\" style=\"font-size: 20pt\">Available Now</h1>\n            <h1 *ngIf=\"i.isBook==true\" style=\"font-size: 20pt\">Parked</h1>\n          </div>\n        </div>\n        <div class=\"flip-card-back\">\n          <h3 *ngIf=\"i.isBook\">Reserved by : {{i.name}}</h3>\n          <h3 *ngIf=\"i.isBook\">Reverver Id : {{i.nic}}</h3>\n          <h3 *ngIf=\"i.isBook\">Parks : {{i.parkedAt}}</h3>\n          <h3 *ngIf=\"i.isBook\">Leaves : {{i.leavAt}}</h3>\n          <br>\n          <button class=\"btn btn-success btn-sm \" (click)=\"open(i.slotId)\">Details</button>\n          <button class=\"btn btn-danger btn-sm \" *ngIf=\"i.isBook\" (click)=\"Release(i.slotId)\">Release</button>\n          <br>\n          <br>\n          <button (click)=\"price(i)\" type=\"top\" class=\"btn btn-outline-light btn-sm btn-round\" placement=\"top\" ngbPopover=\"Rs. {{finalPrice}}\"\n            popoverTitle=\"Calculated charge\">\n            Calculate charge\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/car/car.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/car/car.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.flip-card {\n  background-color: transparent;\n  width: 250px;\n  height: 250px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.flip-card-front {\n  background-color: #bbb;\n  color: black;\n  z-index: 2; }\n\n.flip-card-back {\n  background-color: #2980b9;\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  z-index: 1; }\n\n.grid-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto;\n      grid-template-columns: auto auto auto auto;\n  grid-gap: 80px;\n  /* background-color: #2196F3; */\n  padding: 10px; }\n\n.grid-container > div {\n  /* background-color: rgba(255, 255, 255, 0.8); */\n  text-align: center;\n  padding: 20px 0;\n  font-size: 7px; }\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/car/car.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/car/car.component.ts ***!
  \*************************************************************/
/*! exports provided: NgbdModalContent, popup, CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getbookings(this.Id).subscribe(function (res) {
            _this.bookings = res;
        }, function (err) {
        });
    };
    NgbdModalContent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.service.deletebook(id).subscribe(function (res) {
            _this.flashMessage.show('Delete successfull', { cssClass: 'alert-danger', timeout: 3000 });
            _this.ngOnInit();
        });
    };
    NgbdModalContent.prototype.sethistory = function (data) {
        var _this = this;
        this.service.sethistory(data).subscribe(function (res) {
            _this.flashMessage.show('Accept', { cssClass: 'alert-success', timeout: 3000 });
            _this.service.deletebook(data.bookId).subscribe(function (res) {
                _this.flashMessage.show('Remove booking', { cssClass: 'alert-danger', timeout: 3000 });
                _this.ngOnInit();
            });
            _this.ngOnInit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "Id", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"card bg-light mb-3\" style=\"width: 100%;\">\n  \n  <div class=\"card-body\">\n  <flash-messages></flash-messages>\n  <table style=\"border-collapse: collapse;\n  border-spacing: 20px;\n  width: 100%;\n  borde:none\">\n  <tr style=\"font-size:10px\">\n    <th>Vehicle Number</th>\n    <th>Driver Name</th>\n    <th>Diver Id</th>\n    <th>Date</th>\n    <th>Arrive Time</th>\n    <th>Leave Time</th>\n    <th>Release</th>\n    <th>Cancel</th>\n  </tr>\n \n  <tr *ngFor=\"let i of bookings\" >\n    <td>{{i.vehicleNum}}</td>\n    <td>{{i.DriverName}}</td>\n    <td>{{i.DriverId}}</td>\n    <td>{{i.date}}</td>\n    <td>{{i.arivalTime}}</td>\n    <td>{{i.bookId}}</td>\n    <td><button type=\"button\"  (click)=\"sethistory(i)\"  class=\"btn btn-primary btn-sm\">Accept</button></td>\n    <td><button type=\"button\" (click)=\"delete(i.bookId)\" class=\"btn btn-danger btn-sm\">Cancel</button></td>\n  </tr>\n  \n</table>\n    \n </div>\n  \n</div>\n"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var popup = /** @class */ (function () {
    function popup(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    popup.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], popup.prototype, "Id", void 0);
    popup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popup',
            template: ""
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], popup);
    return popup;
}());

var CarComponent = /** @class */ (function () {
    function CarComponent(flashMessage, modalService, service, router) {
        this.flashMessage = flashMessage;
        this.modalService = modalService;
        this.service = service;
        this.router = router;
        this.data = {
            keeperId: '',
            slotId: ''
        };
        this.finalPrice = 0;
        this.penalty = 0;
    }
    CarComponent.prototype.open = function (id) {
        var modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
        modalRef.componentInstance.Id = id;
    };
    CarComponent.prototype.Release = function (id) {
        var _this = this;
        this.data.slotId = id;
        this.service.release(this.data).subscribe(function (res) {
            _this.ngOnInit();
            // console.log('success');
            _this.flashMessage.show('Slot is available now', { cssClass: 'alert-success', timeout: 3000 });
        });
    };
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getKeeperProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            _this.amounts = _this.user.alocatedSlots1;
            _this.num = _this.user.alocatedSlots1;
            _this.charge = _this.user.hourCharge1;
            _this.Arr = _this.user.type1;
            _this.data.keeperId = _this.user._id;
            console.log(_this.Arr);
            //   this.i = this.Arr.indexof(this.Arr);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    //   onClick(){
    //     this.Arr.i.isBook="false";
    //   }
    CarComponent.prototype.price = function (data) {
        var date = new Date();
        var one_hour = 1000 * 60;
        var date1_ms = date.getTime();
        var date2_ms = data.parkedAtgetTime();
        var difference_ms = date2_ms - date1_ms;
        if (Math.round(difference_ms / one_hour) > 15)
            this.penalty = (difference_ms / one_hour);
        else
            this.penalty = 0;
        this.finalPrice = (data.charge + this.penalty);
        console.log(date.getTime());
    };
    CarComponent.prototype.onClick1 = function () {
        alert("shqwqwk");
    };
    CarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/parkkeeper/parkingslot/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.scss */ "./src/app/parkkeeper/parkingslot/car/car.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Long Vehicles</h1>\n<br>\n<br>\n<br>\n<h2>Total number of allocated slots: {{amounts}}</h2>\n<h2>Charge per Hour: {{charge}}</h2>\n<flash-messages></flash-messages>\n<div class=\"grid-container\">\n  <div *ngFor=\"let i of Arr\">\n    <div class=\"flip-card\">\n      <div class=\"flip-card-inner\">\n\n        <div class=\"flip-card-front\" style=\"background-color:rgb(213, 223, 85)\">\n          <div class=\"card-header\" style=\"font-size: 30pt\">{{i.slotNumber}}</div>\n\n          <div class=\"card-body\">\n            <h1 *ngIf=\"i.isBook==false\" style=\"font-size: 20pt\">Available Now</h1>\n            <h1 *ngIf=\"i.isBook==true\" style=\"font-size: 20pt\">Parked</h1>\n          </div>\n        </div>\n        <div class=\"flip-card-back\">\n          <h3 *ngIf=\"i.isBook\">Reserved by : {{i.name}}</h3>\n          <h3 *ngIf=\"i.isBook\">Reverver Id : {{i.nic}}</h3>\n          <h3 *ngIf=\"i.isBook\">Parks : {{i.parkedAt}}</h3>\n          <h3 *ngIf=\"i.isBook\">Leaves : {{i.leavAt}}</h3>\n          <br>\n          <button class=\"btn btn-success btn-sm \" (click)=\"open(i.slotId)\">Details</button>\n          <button class=\"btn btn-danger btn-sm \" *ngIf=\"i.isBook\" (click)=\"Release(i.slotId)\">Release</button>\n          <br>\n          <br>\n          <button (click)=\"price(i)\" type=\"top\" class=\"btn btn-outline-light btn-sm btn-round\" placement=\"top\" ngbPopover=\"Rs. {{finalPrice}}\"\n            popoverTitle=\"Calculated charge\">\n            Calculate charge\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.flip-card {\n  background-color: transparent;\n  width: 250px;\n  height: 250px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.flip-card-front {\n  background-color: #bbb;\n  color: black;\n  z-index: 2; }\n\n.flip-card-back {\n  background-color: #2980b9;\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  z-index: 1; }\n\n.grid-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto;\n      grid-template-columns: auto auto auto auto;\n  grid-gap: 80px;\n  /* background-color: #2196F3; */\n  padding: 10px; }\n\n.grid-container > div {\n  /* background-color: rgba(255, 255, 255, 0.8); */\n  text-align: center;\n  padding: 20px 0;\n  font-size: 7px; }\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgbdModalContent, popup, LongVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongVehicleComponent", function() { return LongVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getbookings(this.Id).subscribe(function (res) {
            _this.bookings = res;
        }, function (err) {
        });
    };
    NgbdModalContent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.service.deletebook(id).subscribe(function (res) {
            _this.flashMessage.show('Delete successfull', { cssClass: 'alert-danger', timeout: 3000 });
            _this.ngOnInit();
        });
    };
    NgbdModalContent.prototype.sethistory = function (data) {
        var _this = this;
        this.service.sethistory(data).subscribe(function (res) {
            _this.flashMessage.show('Accept', { cssClass: 'alert-success', timeout: 3000 });
            _this.service.deletebook(data.bookId).subscribe(function (res) {
                _this.flashMessage.show('Remove booking', { cssClass: 'alert-danger', timeout: 3000 });
                _this.ngOnInit();
            });
            _this.ngOnInit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "Id", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"card bg-light mb-3\" style=\"width: 100%;\">\n  \n  <div class=\"card-body\">\n  <flash-messages></flash-messages>\n  <table style=\"border-collapse: collapse;\n  border-spacing: 20px;\n  width: 100%;\n  borde:none\">\n  <tr style=\"font-size:10px\">\n    <th>Vehicle Number</th>\n    <th>Driver Name</th>\n    <th>Diver Id</th>\n    <th>Date</th>\n    <th>Arrive Time</th>\n    <th>Leave Time</th>\n    <th>Release</th>\n    <th>Cancel</th>\n  </tr>\n \n  <tr *ngFor=\"let i of bookings\" >\n    <td>{{i.vehicleNum}}</td>\n    <td>{{i.DriverName}}</td>\n    <td>{{i.DriverId}}</td>\n    <td>{{i.date}}</td>\n    <td>{{i.arivalTime}}</td>\n    <td>{{i.bookId}}</td>\n    <td><button type=\"button\"  (click)=\"sethistory(i)\"  class=\"btn btn-primary btn-sm\">Accept</button></td>\n    <td><button type=\"button\" (click)=\"delete(i.bookId)\" class=\"btn btn-danger btn-sm\">Cancel</button></td>\n  </tr>\n  \n</table>\n    \n </div>\n  \n</div>\n"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var popup = /** @class */ (function () {
    function popup(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    popup.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], popup.prototype, "Id", void 0);
    popup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popup',
            template: ""
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], popup);
    return popup;
}());

var LongVehicleComponent = /** @class */ (function () {
    function LongVehicleComponent(flashMessage, modalService, service, router) {
        this.flashMessage = flashMessage;
        this.modalService = modalService;
        this.service = service;
        this.router = router;
        this.data = {
            keeperId: '',
            slotId: ''
        };
        this.finalPrice = 0;
        this.penalty = 0;
    }
    LongVehicleComponent.prototype.open = function (id) {
        var modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
        modalRef.componentInstance.Id = id;
    };
    LongVehicleComponent.prototype.Release = function (id) {
        var _this = this;
        this.data.slotId = id;
        this.service.release(this.data).subscribe(function (res) {
            _this.ngOnInit();
            // console.log('success');
            _this.flashMessage.show('Slot is available now', { cssClass: 'alert-success', timeout: 3000 });
        });
    };
    LongVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getKeeperProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            _this.amounts = _this.user.alocatedSlots5;
            _this.num = _this.user.alocatedSlots5;
            _this.charge = _this.user.hourCharge5;
            _this.Arr = _this.user.type5;
            _this.data.keeperId = _this.user._id;
            console.log(_this.Arr);
            //   this.i = this.Arr.indexof(this.Arr);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    //   onClick(){
    //     this.Arr.i.isBook="false";
    //   }
    LongVehicleComponent.prototype.price = function (data) {
        var date = new Date();
        var one_hour = 1000 * 60;
        var date1_ms = date.getTime();
        var date2_ms = data.parkedAtgetTime();
        var difference_ms = date2_ms - date1_ms;
        if (Math.round(difference_ms / one_hour) > 15)
            this.penalty = (difference_ms / one_hour);
        else
            this.penalty = 0;
        this.finalPrice = (data.charge + this.penalty);
        console.log(date.getTime());
    };
    LongVehicleComponent.prototype.onClick1 = function () {
        alert("shqwqwk");
    };
    LongVehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-long-vehicle',
            template: __webpack_require__(/*! ./long-vehicle.component.html */ "./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./long-vehicle.component.scss */ "./src/app/parkkeeper/parkingslot/long-vehicle/long-vehicle.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LongVehicleComponent);
    return LongVehicleComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/lorry/lorry.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/lorry/lorry.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Buses and Lorries</h1>\n<br>\n<br>\n<br>\n<h2>Total number of allocated slots: {{amounts}}</h2>\n<h2>Charge per Hour: {{charge}}</h2>\n<flash-messages></flash-messages>\n<div class=\"grid-container\">\n  <div *ngFor=\"let i of Arr\">\n    <div class=\"flip-card\">\n      <div class=\"flip-card-inner\">\n\n        <div class=\"flip-card-front\" style=\"background-color:rgb(233, 123, 108)\">\n          <div class=\"card-header\" style=\"font-size: 30pt\">{{i.slotNumber}}</div>\n\n          <div class=\"card-body\">\n            <h1 *ngIf=\"i.isBook==false\" style=\"font-size: 20pt\">Available Now</h1>\n            <h1 *ngIf=\"i.isBook==true\" style=\"font-size: 20pt\">Parked</h1>\n          </div>\n        </div>\n        <div class=\"flip-card-back\">\n          <h3 *ngIf=\"i.isBook\">Reserved by : {{i.name}}</h3>\n          <h3 *ngIf=\"i.isBook\">Reverver Id : {{i.nic}}</h3>\n          <h3 *ngIf=\"i.isBook\">Parks : {{i.parkedAt}}</h3>\n          <h3 *ngIf=\"i.isBook\">Leaves : {{i.leavAt}}</h3>\n          <br>\n          <button class=\"btn btn-success btn-sm \" (click)=\"open(i.slotId)\">Details</button>\n          <button class=\"btn btn-danger btn-sm \" *ngIf=\"i.isBook\" (click)=\"Release(i.slotId)\">Release</button>\n          <br>\n          <br>\n          <button (click)=\"price(i)\" type=\"top\" class=\"btn btn-outline-light btn-sm btn-round\" placement=\"top\" ngbPopover=\"Rs. {{finalPrice}}\"\n            popoverTitle=\"Calculated charge\">\n            Calculate charge\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/lorry/lorry.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/lorry/lorry.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.flip-card {\n  background-color: transparent;\n  width: 250px;\n  height: 250px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.flip-card-front {\n  background-color: #bbb;\n  color: black;\n  z-index: 2; }\n\n.flip-card-back {\n  background-color: #2980b9;\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  z-index: 1; }\n\n.grid-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto;\n      grid-template-columns: auto auto auto auto;\n  grid-gap: 80px;\n  /* background-color: #2196F3; */\n  padding: 10px; }\n\n.grid-container > div {\n  /* background-color: rgba(255, 255, 255, 0.8); */\n  text-align: center;\n  padding: 20px 0;\n  font-size: 7px; }\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/lorry/lorry.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/lorry/lorry.component.ts ***!
  \*****************************************************************/
/*! exports provided: NgbdModalContent, popup, LorryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LorryComponent", function() { return LorryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getbookings(this.Id).subscribe(function (res) {
            _this.bookings = res;
        }, function (err) {
        });
    };
    NgbdModalContent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.service.deletebook(id).subscribe(function (res) {
            _this.flashMessage.show('Delete successfull', { cssClass: 'alert-danger', timeout: 3000 });
            _this.ngOnInit();
        });
    };
    NgbdModalContent.prototype.sethistory = function (data) {
        var _this = this;
        this.service.sethistory(data).subscribe(function (res) {
            _this.flashMessage.show('Accept', { cssClass: 'alert-success', timeout: 3000 });
            _this.service.deletebook(data.bookId).subscribe(function (res) {
                _this.flashMessage.show('Remove booking', { cssClass: 'alert-danger', timeout: 3000 });
                _this.ngOnInit();
            });
            _this.ngOnInit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "Id", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"card bg-light mb-3\" style=\"width: 100%;\">\n  \n  <div class=\"card-body\">\n  <flash-messages></flash-messages>\n  <table style=\"border-collapse: collapse;\n  border-spacing: 20px;\n  width: 100%;\n  borde:none\">\n  <tr style=\"font-size:10px\">\n    <th>Vehicle Number</th>\n    <th>Driver Name</th>\n    <th>Diver Id</th>\n    <th>Date</th>\n    <th>Arrive Time</th>\n    <th>Leave Time</th>\n    <th>Release</th>\n    <th>Cancel</th>\n  </tr>\n \n  <tr *ngFor=\"let i of bookings\" >\n    <td>{{i.vehicleNum}}</td>\n    <td>{{i.DriverName}}</td>\n    <td>{{i.DriverId}}</td>\n    <td>{{i.date}}</td>\n    <td>{{i.arivalTime}}</td>\n    <td>{{i.bookId}}</td>\n    <td><button type=\"button\"  (click)=\"sethistory(i)\"  class=\"btn btn-primary btn-sm\">Accept</button></td>\n    <td><button type=\"button\" (click)=\"delete(i.bookId)\" class=\"btn btn-danger btn-sm\">Cancel</button></td>\n  </tr>\n  \n</table>\n    \n </div>\n  \n</div>\n"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var popup = /** @class */ (function () {
    function popup(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    popup.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], popup.prototype, "Id", void 0);
    popup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popup',
            template: ""
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], popup);
    return popup;
}());

var LorryComponent = /** @class */ (function () {
    function LorryComponent(flashMessage, modalService, service, router) {
        this.flashMessage = flashMessage;
        this.modalService = modalService;
        this.service = service;
        this.router = router;
        this.data = {
            keeperId: '',
            slotId: ''
        };
        this.finalPrice = 0;
        this.penalty = 0;
    }
    LorryComponent.prototype.open = function (id) {
        var modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
        modalRef.componentInstance.Id = id;
    };
    LorryComponent.prototype.Release = function (id) {
        var _this = this;
        this.data.slotId = id;
        this.service.release(this.data).subscribe(function (res) {
            _this.ngOnInit();
            // console.log('success');
            _this.flashMessage.show('Slot is available now', { cssClass: 'alert-success', timeout: 3000 });
        });
    };
    LorryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getKeeperProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            _this.amounts = _this.user.alocatedSlots3;
            _this.num = _this.user.alocatedSlots3;
            _this.charge = _this.user.hourCharge3;
            _this.Arr = _this.user.type3;
            _this.data.keeperId = _this.user._id;
            console.log(_this.Arr);
            //   this.i = this.Arr.indexof(this.Arr);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    //   onClick(){
    //     this.Arr.i.isBook="false";
    //   }
    LorryComponent.prototype.price = function (data) {
        var date = new Date();
        var one_hour = 1000 * 60;
        var date1_ms = date.getTime();
        var date2_ms = data.parkedAtgetTime();
        var difference_ms = date2_ms - date1_ms;
        if (Math.round(difference_ms / one_hour) > 15)
            this.penalty = (difference_ms / one_hour);
        else
            this.penalty = 0;
        this.finalPrice = (data.charge + this.penalty);
        console.log(date.getTime());
    };
    LorryComponent.prototype.onClick1 = function () {
        alert("shqwqwk");
    };
    LorryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lorry',
            template: __webpack_require__(/*! ./lorry.component.html */ "./src/app/parkkeeper/parkingslot/lorry/lorry.component.html"),
            styles: [__webpack_require__(/*! ./lorry.component.scss */ "./src/app/parkkeeper/parkingslot/lorry/lorry.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LorryComponent);
    return LorryComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/parkingslot.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/parkingslot.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card \">\n          <div class=\"card-header \">\n            My Details\n          </div>\n          <div class=\"card-body \">\n              <ul class=\"list-group\">\n                  <li class=\"list-group-item\" style=\"color:black\"><b>Park Name:  {{parkName}}</b></li>\n                <li class=\"list-group-item\" style=\"color:black\"><b>Number of total slots:  {{numberOfSlots}}</b></li>\n                <li class=\"list-group-item\"  style=\"color:black\"><b>Open Hours:  {{openHours}} </b></li>\n              </ul>\n              \n              <br>\n              <br>\n              <br>\n              \n              <table class=\"table\">\n                <thead class=\"thead-dark\">\n                \n                  <tr>\n                    <th scope=\"col\">Vehicle Type</th>\n                    <th scope=\"col\">Number of slots allocated</th>\n                    <th scope=\"col\">Charge per one hour</th>\n                    \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\" style=\"color:black\">Cars and Vans</th>\n                    <td>{{alocatedSlots1}}</td>\n                    <td>{{hourCharge1}}</td>\n                   \n                  </tr>\n                  <tr>\n                    <th scope=\"row\" style=\"color:blue\">Bikes</th>\n                    <td>{{alocatedSlots2}}</td>\n                    <td>{{hourCharge2}}</td>\n                    \n                  </tr>\n                  <tr>\n                    <th scope=\"row\" style=\"color:red\">Lorries and Buses</th>\n                    <td>{{alocatedSlots3}}</td>\n                    <td>{{hourCharge3}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\" style=\"color:green\">Three Wheelers</th>\n                    <td>{{alocatedSlots4}}</td>\n                    <td>{{hourCharge4}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\" style=\"color:yellow\">Long Vehicles</th>\n                    <td>{{alocatedSlots5}}</td>\n                    <td>{{hourCharge5}}</td>\n                  </tr>\n                </tbody>\n              </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/parkingslot.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/parkingslot.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/parkingslot.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/parkingslot.component.ts ***!
  \*****************************************************************/
/*! exports provided: ParkingslotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingslotComponent", function() { return ParkingslotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParkingslotComponent = /** @class */ (function () {
    function ParkingslotComponent(service) {
        this.service = service;
    }
    ParkingslotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getKeeperProfile().subscribe(function (res) {
            _this.user = res['user'];
            console.log(_this.user);
            _this.email = _this.user.email;
            _this.parkName = _this.user.parkName;
            _this.numberOfSlots = _this.user.numberOfSlots;
            _this.openHours = _this.user.openHours;
            _this.alocatedSlots1 = _this.user.alocatedSlots1;
            _this.hourCharge1 = _this.user.hourCharge1;
            _this.alocatedSlots2 = _this.user.alocatedSlots2;
            _this.hourCharge2 = _this.user.hourCharge2;
            _this.alocatedSlots3 = _this.user.alocatedSlots3;
            _this.hourCharge3 = _this.user.hourCharge3;
            _this.alocatedSlots4 = _this.user.alocatedSlots4;
            _this.hourCharge4 = _this.user.hourCharge4;
            _this.alocatedSlots5 = _this.user.alocatedSlots5;
            _this.hourCharge5 = _this.user.hourCharge5;
        }, function (err) {
            console.log(err);
        });
    };
    ParkingslotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parkingslot',
            template: __webpack_require__(/*! ./parkingslot.component.html */ "./src/app/parkkeeper/parkingslot/parkingslot.component.html"),
            styles: [__webpack_require__(/*! ./parkingslot.component.scss */ "./src/app/parkkeeper/parkingslot/parkingslot.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], ParkingslotComponent);
    return ParkingslotComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/weel/weel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/weel/weel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Three Wheels</h1>\n<br>\n<br>\n<br>\n<h2>Total number of allocated slots: {{amounts}}</h2>\n<h2>Charge per Hour: {{charge}}</h2>\n<flash-messages></flash-messages>\n<div class=\"grid-container\">\n  <div *ngFor=\"let i of Arr\">\n    <div class=\"flip-card\">\n      <div class=\"flip-card-inner\">\n\n        <div class=\"flip-card-front\" style=\"background-color:rgb(10, 163, 112)\">\n          <div class=\"card-header\" style=\"font-size: 30pt\">{{i.slotNumber}}</div>\n\n          <div class=\"card-body\">\n            <h1 *ngIf=\"i.isBook==false\" style=\"font-size: 20pt\">Available Now</h1>\n            <h1 *ngIf=\"i.isBook==true\" style=\"font-size: 20pt\">Parked</h1>\n          </div>\n        </div>\n        <div class=\"flip-card-back\">\n          <h3 *ngIf=\"i.isBook\">Reserved by : {{i.name}}</h3>\n          <h3 *ngIf=\"i.isBook\">Reverver Id : {{i.nic}}</h3>\n          <h3 *ngIf=\"i.isBook\">Parks : {{i.parkedAt}}</h3>\n          <h3 *ngIf=\"i.isBook\">Leaves : {{i.leavAt}}</h3>\n          <br>\n          <button class=\"btn btn-success btn-sm \" (click)=\"open(i.slotId)\">Details</button>\n          <button class=\"btn btn-danger btn-sm \" *ngIf=\"i.isBook\" (click)=\"Release(i.slotId)\">Release</button>\n          <br>\n          <br>\n          <button (click)=\"price(i)\" type=\"top\" class=\"btn btn-outline-light btn-sm btn-round\" placement=\"top\" ngbPopover=\"Rs. {{finalPrice}}\"\n            popoverTitle=\"Calculated charge\">\n            Calculate charge\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/weel/weel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/weel/weel.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.flip-card {\n  background-color: transparent;\n  width: 250px;\n  height: 250px;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.flip-card:hover .flip-card-inner {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.flip-card-front {\n  background-color: #bbb;\n  color: black;\n  z-index: 2; }\n\n.flip-card-back {\n  background-color: #2980b9;\n  color: white;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  z-index: 1; }\n\n.grid-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto;\n      grid-template-columns: auto auto auto auto;\n  grid-gap: 80px;\n  /* background-color: #2196F3; */\n  padding: 10px; }\n\n.grid-container > div {\n  /* background-color: rgba(255, 255, 255, 0.8); */\n  text-align: center;\n  padding: 20px 0;\n  font-size: 7px; }\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkingslot/weel/weel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/parkkeeper/parkingslot/weel/weel.component.ts ***!
  \***************************************************************/
/*! exports provided: NgbdModalContent, popup, WeelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popup", function() { return popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeelComponent", function() { return WeelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getbookings(this.Id).subscribe(function (res) {
            _this.bookings = res;
        }, function (err) {
        });
    };
    NgbdModalContent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        this.service.deletebook(id).subscribe(function (res) {
            _this.flashMessage.show('Delete successfull', { cssClass: 'alert-danger', timeout: 3000 });
            _this.ngOnInit();
        });
    };
    NgbdModalContent.prototype.sethistory = function (data) {
        var _this = this;
        this.service.sethistory(data).subscribe(function (res) {
            _this.flashMessage.show('Accept', { cssClass: 'alert-success', timeout: 3000 });
            _this.service.deletebook(data.bookId).subscribe(function (res) {
                _this.flashMessage.show('Remove booking', { cssClass: 'alert-danger', timeout: 3000 });
                _this.ngOnInit();
            });
            _this.ngOnInit();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "Id", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"card bg-light mb-3\" style=\"width: 100%;\">\n  \n  <div class=\"card-body\">\n  <flash-messages></flash-messages>\n  <table style=\"border-collapse: collapse;\n  border-spacing: 20px;\n  width: 100%;\n  borde:none\">\n  <tr style=\"font-size:10px\">\n    <th>Vehicle Number</th>\n    <th>Driver Name</th>\n    <th>Diver Id</th>\n    <th>Date</th>\n    <th>Arrive Time</th>\n    <th>Leave Time</th>\n    <th>Release</th>\n    <th>Cancel</th>\n  </tr>\n \n  <tr *ngFor=\"let i of bookings\" >\n    <td>{{i.vehicleNum}}</td>\n    <td>{{i.DriverName}}</td>\n    <td>{{i.DriverId}}</td>\n    <td>{{i.date}}</td>\n    <td>{{i.arivalTime}}</td>\n    <td>{{i.bookId}}</td>\n    <td><button type=\"button\"  (click)=\"sethistory(i)\"  class=\"btn btn-primary btn-sm\">Accept</button></td>\n    <td><button type=\"button\" (click)=\"delete(i.bookId)\" class=\"btn btn-danger btn-sm\">Cancel</button></td>\n  </tr>\n  \n</table>\n    \n </div>\n  \n</div>\n"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var popup = /** @class */ (function () {
    function popup(flashMessage, activeModal, service) {
        this.flashMessage = flashMessage;
        this.activeModal = activeModal;
        this.service = service;
    }
    popup.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], popup.prototype, "Id", void 0);
    popup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popup',
            template: ""
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], popup);
    return popup;
}());

var WeelComponent = /** @class */ (function () {
    function WeelComponent(flashMessage, modalService, service, router) {
        this.flashMessage = flashMessage;
        this.modalService = modalService;
        this.service = service;
        this.router = router;
        this.data = {
            keeperId: '',
            slotId: ''
        };
        this.finalPrice = 0;
        this.penalty = 0;
    }
    WeelComponent.prototype.open = function (id) {
        var modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
        modalRef.componentInstance.Id = id;
    };
    WeelComponent.prototype.Release = function (id) {
        var _this = this;
        this.data.slotId = id;
        this.service.release(this.data).subscribe(function (res) {
            _this.ngOnInit();
            // console.log('success');
            _this.flashMessage.show('Slot is available now', { cssClass: 'alert-success', timeout: 3000 });
        });
    };
    WeelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getKeeperProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            console.log(_this.user);
            _this.amounts = _this.user.alocatedSlots4;
            _this.num = _this.user.alocatedSlots14;
            _this.charge = _this.user.hourCharge4;
            _this.Arr = _this.user.type4;
            _this.data.keeperId = _this.user._id;
            console.log(_this.Arr);
            //   this.i = this.Arr.indexof(this.Arr);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    //   onClick(){
    //     this.Arr.i.isBook="false";
    //   }
    WeelComponent.prototype.price = function (data) {
        var date = new Date();
        var one_hour = 1000 * 60;
        var date1_ms = date.getTime();
        var date2_ms = data.parkedAtgetTime();
        var difference_ms = date2_ms - date1_ms;
        if (Math.round(difference_ms / one_hour) > 15)
            this.penalty = (difference_ms / one_hour);
        else
            this.penalty = 0;
        this.finalPrice = (data.charge + this.penalty);
        console.log(date.getTime());
    };
    WeelComponent.prototype.onClick1 = function () {
        alert("shqwqwk");
    };
    WeelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weel',
            template: __webpack_require__(/*! ./weel.component.html */ "./src/app/parkkeeper/parkingslot/weel/weel.component.html"),
            styles: [__webpack_require__(/*! ./weel.component.scss */ "./src/app/parkkeeper/parkingslot/weel/weel.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WeelComponent);
    return WeelComponent;
}());



/***/ }),

/***/ "./src/app/parkkeeper/parkkeeper.component.html":
/*!******************************************************!*\
  !*** ./src/app/parkkeeper/parkkeeper.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  parkkeeper works!\n</p>\n"

/***/ }),

/***/ "./src/app/parkkeeper/parkkeeper.component.scss":
/*!******************************************************!*\
  !*** ./src/app/parkkeeper/parkkeeper.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parkkeeper/parkkeeper.component.ts":
/*!****************************************************!*\
  !*** ./src/app/parkkeeper/parkkeeper.component.ts ***!
  \****************************************************/
/*! exports provided: ParkkeeperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkkeeperComponent", function() { return ParkkeeperComponent; });
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

var ParkkeeperComponent = /** @class */ (function () {
    function ParkkeeperComponent() {
    }
    ParkkeeperComponent.prototype.ngOnInit = function () {
    };
    ParkkeeperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parkkeeper',
            template: __webpack_require__(/*! ./parkkeeper.component.html */ "./src/app/parkkeeper/parkkeeper.component.html"),
            styles: [__webpack_require__(/*! ./parkkeeper.component.scss */ "./src/app/parkkeeper/parkkeeper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParkkeeperComponent);
    return ParkkeeperComponent;
}());



/***/ }),

/***/ "./src/app/profile/documentsupload/documentsupload.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile/documentsupload/documentsupload.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  documentsupload works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/documentsupload/documentsupload.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/profile/documentsupload/documentsupload.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/documentsupload/documentsupload.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/documentsupload/documentsupload.component.ts ***!
  \**********************************************************************/
/*! exports provided: DocumentsuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsuploadComponent", function() { return DocumentsuploadComponent; });
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

var DocumentsuploadComponent = /** @class */ (function () {
    function DocumentsuploadComponent() {
    }
    DocumentsuploadComponent.prototype.ngOnInit = function () {
    };
    DocumentsuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentsupload',
            template: __webpack_require__(/*! ./documentsupload.component.html */ "./src/app/profile/documentsupload/documentsupload.component.html"),
            styles: [__webpack_require__(/*! ./documentsupload.component.scss */ "./src/app/profile/documentsupload/documentsupload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentsuploadComponent);
    return DocumentsuploadComponent;
}());



/***/ }),

/***/ "./src/app/profile/editpropic/editpropic.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile/editpropic/editpropic.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\r\n    <br>\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <label for=\"multiple\">Choose file(s)</label>\r\n            <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" accept=\".png,.jpg\" />\r\n            <div *ngIf=\"isloading\" class=\"loader\"></div>\r\n        </div>\r\n    </form>\r\n</div> "

/***/ }),

/***/ "./src/app/profile/editpropic/editpropic.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/editpropic/editpropic.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  border: 10px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite; }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/profile/editpropic/editpropic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/editpropic/editpropic.component.ts ***!
  \************************************************************/
/*! exports provided: EditpropicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpropicComponent", function() { return EditpropicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditpropicComponent = /** @class */ (function () {
    function EditpropicComponent(service, afStorage, router, keeper) {
        this.service = service;
        this.afStorage = afStorage;
        this.router = router;
        this.keeper = keeper;
        this.pic = "";
        this.files = [];
        this.id = '';
        this.url = '';
        this.model = {
            url: "",
            PicUrl: ""
        };
        this.isloading = false;
    }
    EditpropicComponent.prototype.ngOnInit = function () {
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        this.id = tokenPayload._id;
    };
    EditpropicComponent.prototype.upload = function (event) {
        var _this = this;
        this.isloading = true;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.downloadURL = _this.ref.getDownloadURL(); }))
            .subscribe();
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (PicUrl) {
                _this.model.PicUrl = PicUrl;
                _this.isloading = false;
                // console.log(url); // <-- do what ever you want with the url..
                var token = _this.service.getToken();
                var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
                _this.id = tokenPayload._id;
                _this.model.url = 'http://157.230.218.160:3000/api/updateprofilepic/' + tokenPayload._id;
                _this.service.editkeeperPic(_this.model).subscribe(function (res) {
                    _this.keeper.ngOnInit();
                    _this.keeper.editpi = false;
                }, function (err) {
                    console.log(err);
                });
                // this.pic=url;
            });
        })).subscribe();
    };
    EditpropicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editpropic',
            template: __webpack_require__(/*! ./editpropic.component.html */ "./src/app/profile/editpropic/editpropic.component.html"),
            styles: [__webpack_require__(/*! ./editpropic.component.scss */ "./src/app/profile/editpropic/editpropic.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]])
    ], EditpropicComponent);
    return EditpropicComponent;
}());



/***/ }),

/***/ "./src/app/profile/map/map.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/map/map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"panel-header panel-header-sm\">\n    </div>\n    <div class=\"main-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card \">\n            <div class=\"card-header \">\n              Google Maps\n            </div>\n            <div class=\"card-body \">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n                    <!-- <agm-direction\n                      *ngIf=\"destination.lat !== null\"\n                      [origin]=\"{ lat: lat, lng: lng }\"\n                      [destination]=\"destination\"\n                    >\n                    </agm-direction> -->\n        \n                    <!-- <agm-marker\n                    *ngIf=\"destination.lat === null\"\n                    [latitude]=\"lat\"\n                    [longitude]=\"lng\"\n                  ></agm-marker> -->\n                  <agm-marker ng-click=\"click()\" *ngFor=\"let keeper of keepers\"\n                    [latitude]=\" keeper.lat\"\n                    [longitude]=\" keeper.lng\"\n                  ></agm-marker>\n                  </agm-map> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/profile/map/map.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/map/map.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 600px; }\n"

/***/ }),

/***/ "./src/app/profile/map/map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(mapsAPILoader, ngZone, service) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.service = service;
        this.lat = null;
        this.lng = null;
        this.zoom = 4;
        this.origin = { lat: this.lat, lng: this.lng };
        this.destination = { lat: null, lng: null };
        this.keepers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            _this.zoom = 8;
            console.log(_this.lat, _this.lng);
        }, function (err) { return console.log(err); });
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: [],
                componentRestrictions: { country: "LK" }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.destination.lat = place.geometry.location.lat();
                    _this.destination.lng = place.geometry.location.lng();
                    console.log(_this.destination);
                });
            });
        });
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        this.service.getkeepers(tokenPayload._id).subscribe(function (response) {
            _this.kepers = response;
            _this.res = _this.kepers.length;
            for (var i = 0; i < _this.kepers.length; i++) {
                if (_this.kepers[i].state == "open") {
                    _this.class = "btn btn-danger btn-round";
                    _this.kepers[i].state = "close";
                }
                else {
                    _this.class = "btn btn-warning btn-round";
                    _this.kepers[i].state = "open";
                }
                _this.keepers[i] = {
                    id: _this.kepers[i]._id,
                    name: _this.kepers[i].name,
                    class: _this.class,
                    isactivate: _this.kepers[i].isactivate,
                    state: _this.kepers[i].state,
                    lat: _this.kepers[i].lat,
                    lng: _this.kepers[i].lng,
                };
            }
        });
    };
    // calculateDuration() {
    //   var directionsService = new google.maps.DirectionsService();
    //   var directionsDisplay = new google.maps.DirectionsRenderer();
    //   var mapOptions = {
    //     zoom: 15,
    //     center: this.origin
    //   };
    //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //   directionsDisplay.setMap(map);
    //   var request = {
    //     origin: this.origin,
    //     destination: this.destination,
    //     travelMode: "DRIVING"
    //   };
    //   directionsService.route(request, function(response, status) {
    //     console.log(response);
    //     // var point = response.routes[0].legs[0];
    //     // if (status == "OK") {
    //     //   document.getElementById("point").innerHTML =
    //     //     point + point.duration.text + " km";
    //     // }
    //   });
    // }
    // calculateDuration() {
    //   var duration = google.maps.geometry.duration(
    //     new google.maps.LatLng(this.lat, this.lng),
    //     new google.maps.LatLng(this.destination.lat, this.destination.lng)
    //   );
    //   document.getElementById("duration").innerHTML = duration / 1000 + "S";
    // }
    MapComponent.prototype.calculateDistance = function () {
        // console.log(google.maps.geometry.spherical.computeDurationBetween());
        var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.lat, this.lng), new google.maps.LatLng(this.destination.lat, this.destination.lng));
        console.log(distance);
        document.getElementById("distance").innerHTML = distance / 1000 + "km";
    };
    MapComponent.prototype.click = function () {
        console.log('click');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapComponent.prototype, "searchElementRef", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/profile/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/profile/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/profile/parkkeepers/parkkeepers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/parkkeepers/parkkeepers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">My Parks</h4>\n        </div>\n        <div class=\"card-body\" >\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\" text-primary\">\n                <th>\n                  Park Keeper Name\n                </th>\n                <th>\n                  Park Name\n                </th>\n                <th>\n                  Activate\n                </th>\n                <th>\n                  Status\n                </th>\n                <th class=\"text-right\">\n\n                </th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let keeper of keepers\">\n                  <td>\n                    {{ keeper.name }}\n                  </td>\n                  <td>\n                    {{ keeper.parkName }}\n                  </td>\n                  <td>\n                    {{ keeper.isactivate }}\n                  </td>\n                  <td>\n                    <button type=\"button\" (click)=\"update(keeper.state,keeper.id)\" class=\"{{keeper.class}}\">{{keeper.state}}</button>\n                    <!-- <button type=\"button\" class=\"btn btn-danger btn-round\">close</button> -->\n\n                  </td>\n                  <td class=\"text-right\">\n                    <button type=\"button\" (click)=\" parkPro(keeper.id)\" class=\"btn btn-info btn-round\">view profile</button>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/parkkeepers/parkkeepers.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/parkkeepers/parkkeepers.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/parkkeepers/parkkeepers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/parkkeepers/parkkeepers.component.ts ***!
  \**************************************************************/
/*! exports provided: ParkkeepersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkkeepersComponent", function() { return ParkkeepersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParkkeepersComponent = /** @class */ (function () {
    function ParkkeepersComponent(service, router) {
        this.service = service;
        this.router = router;
        this.keepers = [];
    }
    ParkkeepersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.service.getkeepers(tokenPayload._id).subscribe(function (response) {
            _this.kepers = response;
            _this.res = _this.kepers.length;
            console.log(response);
            for (var i = 0; i < _this.kepers.length; i++) {
                if (_this.kepers[i].state == "open") {
                    _this.class = "btn btn-danger btn-round";
                    _this.kepers[i].state = "close";
                }
                else {
                    _this.class = "btn btn-warning btn-round";
                    _this.kepers[i].state = "open";
                }
                _this.keepers[i] = {
                    id: _this.kepers[i]._id,
                    name: _this.kepers[i].name,
                    class: _this.class,
                    isactivate: _this.kepers[i].isactivate,
                    state: _this.kepers[i].state,
                    parkName: _this.kepers[i].parkName
                    // time:response[i].state,
                };
            }
        });
    };
    ParkkeepersComponent.prototype.update = function (state, id) {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        if (tokenPayload.role == "admin")
            return;
        this.service.keeperstate(state, id).subscribe(function (response) {
            _this.ngOnInit();
        });
    };
    ParkkeepersComponent.prototype.parkPro = function (id) {
        console.log(id);
        this.router.navigateByUrl('park/' + id);
    };
    ParkkeepersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parkkeepers',
            template: __webpack_require__(/*! ./parkkeepers.component.html */ "./src/app/profile/parkkeepers/parkkeepers.component.html"),
            styles: [__webpack_require__(/*! ./parkkeepers.component.scss */ "./src/app/profile/parkkeepers/parkkeepers.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ParkkeepersComponent);
    return ParkkeepersComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\"  data-parallax=\"true\" style=\"background-image: url('./assets/img/ownerwall.jpg');\">\n        <div class=\"filter\"></div>\n        \n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"{{pic}}\" alt=\"Circle Image\" class=\"img-thumbnail img-responsive\">\n                </div>\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class='fas fa-edit' style='font-size:24px'></i></button> -->\n                <button type=\"file\" rel=\"tooltip\" (click)=\"editpic()\" ngbTooltip=\"Edit profile picture\" data-placement=\"bottom\" type=\"button\"\n                    class=\"btn btn-primary btn-link\">\n                    <i class='fa fa-edit' style='font-size:36px'></i>\n                </button>\n                <div *ngIf=\"editpi\">\n                    <app-editpropic></app-editpropic>\n                    \n                </div>\n                <div class=\"name\">\n                    <h2 class=\"title\">{{userDetails.firstName}} {{userDetails.lastName}}\n                        <br />\n                    </h2>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div *ngIf=\"ishome() && isuser()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/user-profile/regkeeper\">\n                        <button class=\"btn btn-outline-default btn-round\">\n                            <i class=\"nc-icon nc-simple-add\"></i> Add Park</button>\n                    </a>\n                </div>\n                <div *ngIf=\"ishome()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/user-profile/myparks\">\n                        <button class=\"btn btn-outline-default btn-round\">\n                            <i class=\"nc-icon nc-bank\"></i> My Parks</button>\n                    </a>\n                </div>\n                <div *ngIf=\"ishome()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/user-profile/map\">\n                        <button class=\"btn btn-outline-default btn-round\">\n                            <i class=\"nc-icon nc-pin-3\"></i>Map</button>\n                    </a>\n                </div>\n                \n                <div *ngIf=\"ishome()\" class=\"ml-auto mr-auto text-center\">\n\n                    <a routerLink=\"/user-profile/progress\">\n                        <button class=\"btn btn-outline-default btn-round\">\n                            <i class=\"nc-icon nc-simple-add\"></i> Progress</button>\n                    </a>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n\n\n                    <!-- <ngb-tab routerLink=\"/userprofile/userHome\" title=\"Send\">\n                            <ng-template ngbTabContent >\n                                \n                                    <router-outlet></router-outlet>\n                                    </ng-template>\n                        </ngb-tab>\n                        <ngb-tab routerLink=\"/userprofile/gallery\" title=\"Receive\">\n                            <ng-template ngbTabContent>\n                                <router-outlet></router-outlet>\n                            </ng-template>\n                        </ngb-tab> -->\n\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification {\n  background-color: #555;\n  color: white;\n  text-decoration: none;\n  padding: 15px 26px;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px; }\n\n.notification:hover {\n  background: red; }\n\n.notification .badge {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  padding: 5px 10px;\n  border-radius: 50%;\n  background: red;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, router, location) {
        this.service = service;
        this.router = router;
        this.location = location;
        this.userId = '';
        this.editpi = false;
        this.isloading = false;
        this.pic = "./assets/img/faces/default.jpg";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editpi = false;
        if (!this.service.isLoggedIn())
            this.router.navigate(['/login']);
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            _this.userId = _this.userDetails._id;
            if (_this.userDetails.proPic)
                _this.pic = _this.userDetails.proPic;
            _this.service.setid(_this.userDetails._id);
            // console.log(this.userId);
            // console.log(this.userDetails)
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.onLogout = function () {
        this.service.deleteToken();
        this.router.navigate(['/login']);
    };
    ProfileComponent.prototype.navigate = function () {
        console.log('navigate');
        this.router.navigate(['/userprofile/myparks']);
    };
    ProfileComponent.prototype.ishome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/user-profile') {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.isuser = function () {
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        if (tokenPayload.role == "user")
            return true;
        else
            return false;
    };
    ProfileComponent.prototype.editpic = function () {
        if (this.editpi == false)
            this.editpi = true;
        else
            this, this.editpi = false;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profileedit/profileedit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/profileedit/profileedit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div a class=\"row\">\n    <div class=\"col-md-12 mr-auto ml-auto\">\n      <div class=\"card\">\n        <p *ngIf=\"issuccess\">\n          <ngb-alert type=\"info\" [dismissible]=\"false\">\n            <div class=\"container\">\n              <ng-container>\n                <i class=\"nc-icon nc-check-2\"></i>\n              </ng-container>\n              {{ message }}\n              <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert()\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n              </button>\n            </div>\n          </ngb-alert>\n        </p>\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form #regForm=\"ngForm\">\n\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input #firstname=\"ngModel\" [value]=\"userDetails.firstName\" id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\"\n                    placeholder=\"Company\" [(ngModel)]=\"reg.firstName\">\n                  <!-- <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">First Name is </div> -->\n                  <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">Email is and must be valid</div>\n                </div>\n              </div>\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input #lastName=\"ngModel\" [value]=\"userDetails.lastName\" type=\"text\" id=\"lastName\" name=\"lastName\" class=\"form-control\"\n                    placeholder=\"Last Name\" [(ngModel)]=\"reg.lastName\">\n                  <div class=\"form-control-feedback\" [hidden]=\"lastName.valid\">Email is and must be valid</div>\n\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"row\"> -->\n            <!-- <div class=\"col-md-5 pr-1\">\n                  <div class=\"form-group\">\n                    <label>Company (disabled)</label>\n                    <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                  </div>\n                </div> -->\n            <!-- <div class=\"col-md-3 px-1\">\n                  <div class=\"form-group\">\n                    <label>Username</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                  </div>\n                </div> -->\n            <!-- <div class=\"col-md-12 pl-1\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                  </div>\n                </div> -->\n            <!-- </div> -->\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input disabled=\"\" #email=\"ngModel\" pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" [value]=\"userDetails.email\" type=\"email\"\n                    name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"reg.email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input #address=\"ngModel\" id=\"address\" [value]=\"userDetails.address\" name=\"address\" type=\"text\" class=\"form-control\" [(ngModel)]=\"reg.address\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input #city=\"ngModel\" type=\"text\" [value]=\"userDetails.city\" id=\"city\" name=\"city\" class=\"form-control\" placeholder=\"City\"\n                    [(ngModel)]=\"reg.city\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input #country=\"ngModel\" type=\"text\" [value]=\"userDetails.country\" id=\"country\" name=\"country\" class=\"form-control\" placeholder=\"Country\"\n                    [(ngModel)]=\"reg.country\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input #zip=\"ngModel\" type=\"number\" [value]=\"userDetails.email\" id=\"zip\" name=\"zip\" class=\"form-control\" placeholder=\"ZIP Code\"\n                    [(ngModel)]=\"reg.zip\">\n                  <div class=\"form-control-feedback\" [hidden]=\"email.valid\">Must be number</div>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\" >Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                </div>\n              </div>\n            </div> -->\n\n            <div class=\"ml-auto mr-auto text-center\">\n              <button (click)=\"edit()\" [disabled]=\"!regForm.valid\" class=\"btn btn-outline-default btn-round\">\n                <i class=\"nc-icon nc-tap-01\"></i>Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profileedit/profileedit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/profile/profileedit/profileedit.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profileedit/profileedit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/profileedit/profileedit.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileeditComponent", function() { return ProfileeditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileeditComponent = /** @class */ (function () {
    function ProfileeditComponent(service) {
        this.service = service;
        this.userId = '';
        this.name = "charindu";
        this.reg = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            country: '',
            zip: '',
            nic: '',
            password: '',
            confirmPassword: ''
        };
        this.issuccess = false;
        this.message = "Success";
    }
    ProfileeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            _this.userId = _this.userDetails._id;
            _this.service.setid(_this.userDetails._id);
            console.log(_this.name);
            // console.log(this.userId);
            // console.log(this.userDetails)
            _this.reg.firstName = _this.userDetails.firstName;
            _this.reg.lastName = _this.userDetails.lastName;
            _this.reg.address = _this.userDetails.address;
            _this.reg.city = _this.userDetails.city;
            _this.reg.country = _this.userDetails.country;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileeditComponent.prototype.edit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.service.edit(this.reg, tokenPayload._id).subscribe(function (res) {
            _this.issuccess = true;
            _this.message = "Success";
        }, function (err) {
        });
    };
    ProfileeditComponent.prototype.closeAlert = function () {
        this.issuccess = true;
    };
    ProfileeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profileedit',
            template: __webpack_require__(/*! ./profileedit.component.html */ "./src/app/profile/profileedit/profileedit.component.html"),
            styles: [__webpack_require__(/*! ./profileedit.component.scss */ "./src/app/profile/profileedit/profileedit.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], ProfileeditComponent);
    return ProfileeditComponent;
}());



/***/ }),

/***/ "./src/app/profile/progress/progress.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile/progress/progress.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\"> Progress</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Park Keeper Name\n                  </th>\n                  <th>\n                    Park Name\n                  </th>\n                  <th>\n                    Total Revenue\n                  </th>\n                  <th class=\"text-right\">\n  \n                  </th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let keeper of keepers\">\n                    <td>\n                      {{ keeper.name }}\n                    </td>\n                    <td>\n                      {{ keeper.parkName }}\n                    </td>\n                    <td>\n                        Rs. {{keeper.monthrev}}\n                       </td>\n                  </tr>\n  \n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/profile/progress/progress.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/progress/progress.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/progress/progress.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/progress/progress.component.ts ***!
  \********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(service, router) {
        this.service = service;
        this.router = router;
        this.keepers = [];
    }
    ProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        this.service.getkeepers(tokenPayload._id).subscribe(function (response) {
            _this.kepers = response;
            _this.res = _this.kepers.length;
            console.log(response);
            for (var i = 0; i < _this.kepers.length; i++) {
                if (_this.kepers[i].state == "open") {
                    _this.class = "btn btn-danger btn-round";
                    _this.kepers[i].state = "close";
                }
                else {
                    _this.class = "btn btn-warning btn-round";
                    _this.kepers[i].state = "open";
                }
                _this.keepers[i] = {
                    id: _this.kepers[i]._id,
                    name: _this.kepers[i].name,
                    class: _this.class,
                    isactivate: _this.kepers[i].isactivate,
                    state: _this.kepers[i].state,
                    monthrev: _this.kepers[i].monthrev,
                    parkName: _this.kepers[i].parkName
                    // time:response[i].state,
                };
            }
        });
    };
    ProgressComponent.prototype.update = function (state, id) {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
        if (tokenPayload.role == "admin")
            return;
        this.service.keeperstate(state, id).subscribe(function (response) {
            _this.ngOnInit();
        });
    };
    ProgressComponent.prototype.parkPro = function (id) {
        console.log(id);
        this.router.navigateByUrl('park/' + id);
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/profile/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/profile/progress/progress.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/profile/receive/receive.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/receive/receive.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>File Name</th>\n          <th>Date</th>\n          <th>Time</th>\n          <th>Link</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of files\">\n          <td>{{ file.originalname }}</td>\n          <td>{{file.time | date:'MMM dd, yyyy'}}</td>\n          <td>{{ file.time | date:'hh:mm' }}</td>\n          <td><button class=\"btn btn-primary button\" (click)=\"downloadPdf(file.filename, file.contentType)\">Download</button></td>\n        </tr>   \n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/profile/receive/receive.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/receive/receive.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/receive/receive.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/receive/receive.component.ts ***!
  \******************************************************/
/*! exports provided: ReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveComponent", function() { return ReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/files.service */ "./src/app/servers/files.service.ts");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReceiveComponent = /** @class */ (function () {
    function ReceiveComponent(FileService, service) {
        this.FileService = FileService;
        this.service = service;
        this.files = [];
    }
    ReceiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        this.FileService.recevefile(tokenPayload._id).subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.json().length; i++) {
                _this.files[i] = {
                    filename: response.json()[i].filename,
                    originalname: response.json()[i].originalname,
                    contentType: response.json()[i].mimetype,
                    time: response.json()[i].time
                };
                console.log(response.json()[i].mimetype);
            }
        });
    };
    ReceiveComponent.prototype.downloadPdf = function (filename, contentType) {
        this.FileService.downloadPDF(filename, contentType).subscribe(function (res) {
            console.log(res);
            var file = new Blob([res.blob()], { type: contentType });
            console.log(file);
            var fileURL = URL.createObjectURL(file);
            console.log(fileURL);
            window.open(fileURL);
            // window.open('/download');
        });
    };
    ReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receive',
            template: __webpack_require__(/*! ./receive.component.html */ "./src/app/profile/receive/receive.component.html"),
            styles: [__webpack_require__(/*! ./receive.component.scss */ "./src/app/profile/receive/receive.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"]])
    ], ReceiveComponent);
    return ReceiveComponent;
}());



/***/ }),

/***/ "./src/app/servers/files.service.ts":
/*!******************************************!*\
  !*** ./src/app/servers/files.service.ts ***!
  \******************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
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


var FilesService = /** @class */ (function () {
    function FilesService(http) {
        this.http = http;
    }
    FilesService.prototype.downloadPDF = function (filename, filetype) {
        return this.http.get('http://localhost:3000/api/adminfile/' + filename, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob });
    };
    FilesService.prototype.showFileNames = function (id) {
        return this.http.get('http://localhost:3001/api/files/' + id);
    };
    FilesService.prototype.recevefile = function (id) {
        return this.http.get('http://localhost:3001/api/rfiles/' + id);
    };
    FilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/servers/regservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servers/regservice.service.ts ***!
  \***********************************************/
/*! exports provided: RegserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegserviceService", function() { return RegserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegserviceService = /** @class */ (function () {
    function RegserviceService(http) {
        this.http = http;
        this.url = "http://157.230.218.160:3000/api/web";
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'NoAuth': 'True' }) };
    }
    RegserviceService.prototype.storedetails = function (details) {
        return this.http.post(this.url + '/register', details, this.noAuthHeader);
    };
    RegserviceService.prototype.regkeeper = function (details, id) {
        return this.http.post(this.url + '/regkeeper/' + id, details, this.noAuthHeader);
    };
    RegserviceService.prototype.editkeeper = function (details, id) {
        return this.http.post(this.url + '/editkeeper/' + id, details, this.noAuthHeader);
    };
    RegserviceService.prototype.login = function (authCredentials, p) {
        console.log(authCredentials);
        return this.http.post(this.url + p + '/authenticate', authCredentials, this.noAuthHeader);
    };
    RegserviceService.prototype.getUserProfile = function () {
        return this.http.get(this.url + '/userProfile');
    };
    RegserviceService.prototype.editPic = function (data) {
        console.log(data);
        return this.http.post(data.url, data, this.noAuthHeader);
    };
    RegserviceService.prototype.editkeeperPic = function (data) {
        console.log(data);
        return this.http.post(data.url, data, this.noAuthHeader);
    };
    RegserviceService.prototype.getKeeperProfile = function () {
        return this.http.get(this.url + '/keeperProfile');
    };
    RegserviceService.prototype.release = function (data) {
        return this.http.post(this.url + '/releaseslot', data);
    };
    RegserviceService.prototype.getowner = function (id) {
        return this.http.get(this.url + '/userProfile/' + id);
    };
    RegserviceService.prototype.getkeepers = function (id) {
        return this.http.get(this.url + '/getkeepers/' + id);
    };
    RegserviceService.prototype.sethistory = function (data) {
        return this.http.post(this.url + '/sethistory', data, this.noAuthHeader);
    };
    RegserviceService.prototype.getkeeperprofile = function (id) {
        return this.http.get(this.url + '/getkeeperprofile/' + id);
    };
    RegserviceService.prototype.getnewkeepers = function () {
        return this.http.get(this.url + '/getnewkeepers');
    };
    RegserviceService.prototype.reported = function () {
        return this.http.get(this.url + '/reported');
    };
    RegserviceService.prototype.allkeepers = function () {
        return this.http.get(this.url + '/allkeepers');
    };
    RegserviceService.prototype.getowners = function () {
        return this.http.get(this.url + '/getowners');
    };
    RegserviceService.prototype.edit = function (form, id) {
        console.log(form);
        return this.http.put(this.url + '/editpro/' + id, form);
    };
    RegserviceService.prototype.rstpw = function (email, link) {
        return this.http.get(this.url + '/rstpw/' + link + '/' + email);
    };
    RegserviceService.prototype.newpassword = function (token, type) {
        return this.http.get(this.url + '/resetpassword/' + type + '/' + token);
    };
    RegserviceService.prototype.keeperstate = function (state, id) {
        return this.http.get(this.url + '/setstate/' + id + '/' + state);
    };
    RegserviceService.prototype.acceptpark = function (id) {
        console.log(id);
        return this.http.get(this.url + '/acceptpark/' + id);
    };
    RegserviceService.prototype.reject = function (id) {
        console.log(id);
        return this.http.get(this.url + '/reject/' + id);
    };
    RegserviceService.prototype.savepassword = function (password, type) {
        return this.http.put(this.url + '/savepassword/' + type, password);
    };
    //Helper Methods
    RegserviceService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    RegserviceService.prototype.setid = function (id) {
        localStorage.setItem('id', id);
    };
    RegserviceService.prototype.getid = function () {
        return localStorage.getItem('id');
    };
    RegserviceService.prototype.deleteid = function () {
        localStorage.removeItem('id');
    };
    RegserviceService.prototype.setuser = function (name, id) {
        localStorage.setItem('usernic', name);
        localStorage.setItem('userid', id);
    };
    RegserviceService.prototype.getuser = function () {
        return localStorage.getItem('usernic');
    };
    RegserviceService.prototype.getuserid = function () {
        return localStorage.getItem('userid');
    };
    RegserviceService.prototype.deleteuser = function () {
        localStorage.removeItem('usernic');
    };
    RegserviceService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    RegserviceService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
        this.deleteid();
    };
    RegserviceService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    RegserviceService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    RegserviceService.prototype.getusers = function () {
        console.log('getuser');
        return this.http.get(this.url + '/users');
    };
    RegserviceService.prototype.newpost = function (post) {
        return this.http.post(this.url + '/newPost', post);
    };
    RegserviceService.prototype.getAllPosts = function () {
        return this.http.get(this.url + '/getPosts');
    };
    RegserviceService.prototype.getbookings = function (id) {
        return this.http.get(this.url + '/bookingDetails/' + id);
    };
    RegserviceService.prototype.getbooking = function (id) {
        return this.http.get(this.url + '/booking/' + id);
    };
    RegserviceService.prototype.gethistory = function (id) {
        return this.http.get(this.url + '/bookinghistory/' + id);
    };
    RegserviceService.prototype.deletebook = function (id) {
        return this.http.get(this.url + '/deletebook/' + id);
    };
    RegserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RegserviceService);
    return RegserviceService;
}());



/***/ }),

/***/ "./src/app/servers/validate.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servers/validate.service.ts ***!
  \*********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateDetail = function (detail) {
        if (detail.city == undefined || detail.street == undefined || detail.number == undefined || detail.MaxWeight == undefined || detail.MaxHeight == undefined || detail.category == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"\">Park Here Team</a></li>\n                    <!-- <li><a href=\"\">Blog</a></li> -->\n                    <!-- <li><a href=\"\">Licenses</a></li> -->\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{test | date: 'yyyy'}}, made with  by Park Here Team\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
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
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n        <div class=\"container\">\n                <div class=\"angular-logo\"><br>\n                        <img src=\"../../../assets/img/weblogo.png\" alt=\"\">\n                        <a  style=\"color: gray\" routerLink=\"/home\" ><b>PARK HERE</b></a>\n                    </div>\n            <div class=\"navbar-translate\">\n                    \n                    \n                <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                    <span class=\"navbar-toggler-bar\"></span>\n                    <span class=\"navbar-toggler-bar\"></span>\n                    <span class=\"navbar-toggler-bar\"></span>\n                </button>\n            </div>\n            <div class=\"navbar-collapse\" id=\"navbarToggler\">\n                <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\" *ngIf=\"isHome()\">\n                        <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                            <i class=\"fa fa-twitter\"></i>\n                            <p class=\"d-lg-none\">Twitter</p>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"isHome()\">\n                        <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                            <p class=\"d-lg-none\">Facebook</p>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"isHome()\">\n                        <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                            <i class=\"fa fa-instagram\"></i>\n                            <p class=\"d-lg-none\">Instagram</p>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"isHome()\">\n                        <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://github.com/charindukavishan/parkhere\" target=\"_blank\">\n                            <i class=\"fa fa-github\"></i>\n                            <p class=\"d-lg-none\">GitHub</p>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"isLogin()\">\n                            <a routerLink=\"/{{url}}\" class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                        </li>\n                        <li routerLink=\"/signup\"  class=\"nav-item\" *ngIf=\"!isLogin()\">\n                            <a target=\"_blank\" class=\"btn btn-info btn-default\">Log In</a>\n                        </li>\n                        <li routerLink=\"/signin\" class=\"nav-item\" *ngIf=\"!isLogin()\">\n                            <a  target=\"_blank\" class=\"btn btn-danger btn-round\">Register</a>\n                        </li>\n                        <!-- <li class=\"nav-item\" *ngIf=\"!isHome()\">\n                            <a [routerLink]=\"['/home']\" *ngIf=\"!isDocumentation()\" class=\"nav-link\"><i class=\"nc-icon nc-layout-11\"></i>Components</a>\n                            <a [routerLink]=\"['/home']\" *ngIf=\"isDocumentation()\" class=\"nav-link\">Back to Kit</a>\n                        </li>\n                        <li class=\"nav-item\" *ngIf=\"isDocumentation()\">\n                            <a href=\"https://github.com/creativetimofficial/paper-kit-2-angular/issues?ref=pk2-free-local\" target=\"_blank\" class=\"nav-link\">Have an issue</a>\n                        </li> -->\n                        <li *ngIf=\"isLogin()\" class=\"nav-item \">\n                            <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\n                            <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" style=\"color:grey\" aria-hidden=\"true\"></i></a>\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                    <a routerLink=\"/{{url}}/edit\" class=\"dropdown-item\">Edit Profile</a>\n                                   \n                                    <a *ngIf=\"isadmin()\" routerLink=\"/{{url}}/addadmin\" class=\"dropdown-item\">Add admin</a>\n                                    <!-- <a class=\"dropdown-item\">Something else is here</a> -->\n                                    <div class=\"dropdown-divider\"></div>\n                                    <a class=\"dropdown-item\" (click)=\"signout()\">Sign out</a>\n                                </div>\n                            </div>\n                        </li>\n                       \n                </ul>\n            </div>\n        </div>\n    </nav>\n    "

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
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
    function NavbarComponent(location, element, service, router) {
        this.location = location;
        this.element = element;
        this.service = service;
        this.router = router;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var token = this.service.getToken();
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        this.url = tokenPayload.role;
        if (this.url == "user")
            this.url = "user-profile";
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.isLogin = function () {
        return this.service.isLoggedIn();
    };
    NavbarComponent.prototype.signout = function () {
        this.service.deleteToken();
        this.router.navigate(['/signup']);
    };
    NavbarComponent.prototype.isProfile = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/user-profile/*') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isadmin = function () {
        var token = this.service.getToken();
        // decode the token to get its payload
        var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        if (tokenPayload.role == "admin")
            return true;
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _servers_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/login.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n\n<div class=\"panel-header panel-header-sm\">\n  </div>\n  <div class=\"main-content\">\n    <div a class=\"row\">\n      <div  class=\"col-md-12 mr-auto ml-auto\">\n        <div class=\"card\">\n          <div class=\"card-header\" style=\"font-size: 28px\">\n            <h5 class=\"title\"> Create Profile</h5>\n          </div>\n          <div class=\"card-body\" style=\"font-size: 20px\">\n            <form #regForm=\"ngForm\">\n              \n              \n              <div class=\"row\" style=\"color:black\" >\n                <div class=\"col-md-6 pr-1\">\n                  <div class=\"form-group\" >\n                    <label><b>First Name</b></label>\n                    <input #firstname=\"ngModel\" required id=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Company\" [(ngModel)]=\"reg.firstName\">\n                    <!-- <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">First Name is required</div> -->\n                    <div class=\"form-control-feedback\" [hidden]=\"firstname.valid\">First Name is required and must be valid</div>\n                  </div>\n                </div>\n                <div class=\"col-md-6 pl-1\">\n                  <div class=\"form-group\">\n                    <label><b>Last Name</b></label>\n                    <input #lastName=\"ngModel\" required type=\"text\" id=\"lastName\" name=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"reg.lastName\">\n                    <div class=\"form-control-feedback\" [hidden]=\"lastName.valid\">Last Name is required and must be valid</div>\n\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\"> -->\n                  <!-- <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                      <label>Company (disabled)</label>\n                      <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"col-md-3 px-1\">\n                    <div class=\"form-group\">\n                      <label>Username</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                    </div>\n                  </div> -->\n                  <!-- <div class=\"col-md-12 pl-1\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                    </div>\n                  </div> -->\n                <!-- </div> -->\n                <div class=\"row\" >\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\"><b>Email address</b></label>\n                          <input #email=\"ngModel\" pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" required type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"reg.email\">\n                          <div class=\"form-control-feedback\" [hidden]=\"email.valid\">Email is required and must be valid</div>\n                        </div>\n                    </div>\n                    \n                  </div>\n                  <p *ngIf=\"iserror\">\n                      <ngb-alert type=\"danger\"  [dismissible]=\"false\">\n                          <div class=\"container\">\n                              <ng-container>\n                                  <i class=\"nc-icon nc-bell-55\"></i>\n                              </ng-container>\n                  {{ serverErrorMessages }}\n                              <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert()\">\n                                  <i class=\"nc-icon nc-simple-remove\"></i>\n                              </button>\n                          </div>\n                      </ngb-alert>\n                  </p>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label><b>Address</b></label>\n                    <input #address=\"ngModel\" id=\"address\" required name=\"address\" type=\"text\" class=\"form-control\" [(ngModel)]=\"reg.address\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 pr-1\">\n                  <div class=\"form-group\">\n                    <label><b>City</b></label>\n                    <input #city=\"ngModel\" type=\"text\" required id=\"city\" name=\"city\" class=\"form-control\" placeholder=\"City\" [(ngModel)]=\"reg.city\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 px-1\">\n                  <div class=\"form-group\">\n                    <label><b>Country</b></label>\n                    <input #country=\"ngModel\" type=\"text\" required id=\"country\" name=\"country\" class=\"form-control\" placeholder=\"Country\" [(ngModel)]=\"reg.country\">\n                  </div>\n                </div>\n                <div class=\"col-md-4 pl-1\">\n                  <div class=\"form-group\">\n                    <label><b>Postal Code</b></label>\n                    <input #zip=\"ngModel\" type=\"number\" required id=\"zip\" name=\"zip\" class=\"form-control\" placeholder=\"ZIP Code\" [(ngModel)]=\"reg.zip\">\n                    <div class=\"form-control-feedback\" [hidden]=\"email.valid\">Must be number</div>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>About Me</label>\n                    <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\" >Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                  </div>\n                </div>\n              </div> -->\n              <div class=\"row\">\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"password\"><b>Create Password</b></label>  \n                          <input class=\"form-control input-md\" #password=\"ngModel\" pattern=\".{6,}\" required id=\"password\" name=\"password\" type=\"password\" placeholder=\"Create password\" [(ngModel)]=\"reg.password\">   \n                          <div class=\"form-control-feedback\" [hidden]=\"password.valid\">Password must be at least 6 characters long</div>\n                      </div>\n                  </div>\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                          <label class=\"control-label\" for=\"confirmPassword\"><b>Repeat Password</b></label>  \n                          <input  class=\"form-control input-md\" #confirmPassword=\"ngModel\" required id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" placeholder=\"Repeat password\" [(ngModel)]=\"reg.confirmPassword\">\n                          <div class=\"form-control-feedback\" *ngIf=\"password.value!=confirmPassword.value\">Password not match</div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"ml-auto mr-auto text-center\">\n                  <button (click)=\"register()\" [disabled]=\"!regForm.valid||(password.value!=confirmPassword.value)\" class=\"btn btn-danger btn-round\"><i class=\"nc-icon nc-tap-01\"></i><b>Sing Up</b></button>\n               </div>\n            </form>\n            \n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/signin/signin.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(service, router) {
        this.service = service;
        this.router = router;
        this.reg = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            country: '',
            zip: '',
            nic: '',
            password: '',
            confirmPassword: '',
            role: 'user'
        };
        this.iserror = false;
        this.res = '';
        this.serverErrorMessages = '';
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.register = function () {
        var _this = this;
        this.service.storedetails(this.reg)
            .subscribe(function (response) {
            if (response) {
                _this.res = response['status'];
                console.log(response);
                if (!_this.res) {
                    _this.serverErrorMessages = 'Your email is already exists';
                }
                else {
                    console.log(response);
                    _this.serverErrorMessages = "Registration Succsesfull";
                    _this.router.navigateByUrl('/signup');
                }
            }
        }, function (error) {
            console.log(error);
            _this.iserror = true;
            {
                if (error)
                    _this.serverErrorMessages = 'Your email is already exists';
            }
        });
    };
    SigninComponent.prototype.closeAlert = function () {
        this.iserror = false;
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/newpw/newpw.component.html":
/*!***************************************************!*\
  !*** ./src/app/signup/newpw/newpw.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header\" style=\"background-image: url('../assets/img/reset.jpg');\">\n      <div class=\"filter\"></div>\n          <div class=\"container\">\n              <div class=\"row\">\n                      \n                  <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                      <div class=\"card card-register\">\n                          <h3 class=\"title\">Reset password</h3>\n\n                          <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit()\" class=\"register-form\">\n                            \n                              <div class=\"form-group\">\n                                  <label for=\"exampleInputEmail1\">Email address</label>\n                                  <input disabled=\"\"  [value]=\"reg.email\" type=\"email\" name=\"email\" class=\"form-control\">\n                                </div>\n                            \n                             \n                                <div class=\"form-group\">\n                                  <label class=\"control-label\" for=\"password\">Create Password</label>  \n                                  <input class=\"form-control input-md\" #password=\"ngModel\" pattern=\".{6,}\" required id=\"password\" name=\"password\" type=\"password\" placeholder=\"Create password\" [(ngModel)]=\"reg.password\">   \n                                  <div class=\"form-control-feedback\" [hidden]=\"password.valid\">Password must be at least 6 characters long</div>\n                              </div>\n                         \n                          \n                              <div class=\"form-group\">\n                                  <label class=\"control-label\" for=\"confirmPassword\">Repeat Password</label>  \n                                  <input  class=\"form-control input-md\" #confirmPassword=\"ngModel\" required id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" placeholder=\"Repeat password\" [(ngModel)]=\"reg.confirmPassword\">\n                                  <div class=\"form-control-feedback\" *ngIf=\"password.value!=confirmPassword.value\">Password not match</div>\n                              </div>\n                              \n                          \n                              <!-- <button class=\"btn btn-danger btn-block btn-round\">Register</button> -->\n                              <input type=\"submit\" [disabled]=\"!signInForm.valid||(password.value!=confirmPassword.value)\" class=\"btn btn-danger btn-block btn-round\" value=\"Sign In\">\n                          </form>\n                         \n                      </div>\n                  </div>\n              </div>\n              <div class=\"footer register-footer text-center\">\n                  <h6>&copy;{{test | date: 'yyyy'}}, made with PARK HERE TEAM</h6>\n              </div>\n          </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/newpw/newpw.component.scss":
/*!***************************************************!*\
  !*** ./src/app/signup/newpw/newpw.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/newpw/newpw.component.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/newpw/newpw.component.ts ***!
  \*************************************************/
/*! exports provided: NewpwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpwComponent", function() { return NewpwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewpwComponent = /** @class */ (function () {
    function NewpwComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.reg = {
            password: '',
            confirmPassword: '',
            email: ''
        };
        this.userDetails = 'charindukavishan@gmail.com';
    }
    NewpwComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['token'];
            _this.type = params['type'];
        });
        console.log(this.type);
        this.service.newpassword(this.id, this.type).subscribe(function (res) {
            console.log(res);
            _this.emai = res['user'];
            _this.reg.email = _this.emai.email;
            console.log(_this.reg.email);
        }, function (err) {
            console.log(err);
        });
    };
    NewpwComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.savepassword(this.reg, this.type).subscribe(function (res) {
            console.log(res);
            if (res['sucsess'] == false) {
                _this.msg = res['message'];
                _this.router.navigate(['login']);
                _this.router.navigateByUrl('/signup');
            }
            else {
                _this.reg.password = '';
                _this.reg.confirmPassword = '';
                _this.msg = res['message'];
            }
        }, function (err) {
            console.log(err);
            _this.msg = '';
        });
    };
    NewpwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newpw',
            template: __webpack_require__(/*! ./newpw.component.html */ "./src/app/signup/newpw/newpw.component.html"),
            styles: [__webpack_require__(/*! ./newpw.component.scss */ "./src/app/signup/newpw/newpw.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewpwComponent);
    return NewpwComponent;
}());



/***/ }),

/***/ "./src/app/signup/resetpw/resetpw.component.html":
/*!*******************************************************!*\
  !*** ./src/app/signup/resetpw/resetpw.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/8.jpg');\">\n        <div class=\"filter\"></div>\n        <div class=\"container\"> \n            <div class=\"row\">\n\n                <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                    <div class=\"card card-register\">\n                        <h3 class=\"title\">Reset password</h3>\n\n                        <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit()\" class=\"register-form\">\n                            <label>Email</label>\n                            <input class=\"form-control\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\" type=\"text\"\n                                placeholder=\"Email\" [(ngModel)]=\"model.email\">\n                            <div *ngIf=\"email.errors?.pattern\">\n                                <label class=\"validation-message\">Invalid email address.</label>\n                            </div>\n\n                            <ngb-alert *ngIf=\"message\" type=\"Info\" [dismissible]=\"false\">\n                                <div style=\"color: blueviolet\" class=\"container\">\n                                    <ng-container>\n                                        <i class=\"nc-icon nc-check-2\"></i>\n                                    </ng-container>\n                                    {{serverErrorMessages}}\n                                    <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert()\">\n                                        <i class=\"nc-icon nc-simple-remove\"></i>\n                                    </button>\n                                </div>\n                            </ngb-alert>\n\n                            <input type=\"checkbox\" id=\"isKeeper\" name=\"isKeeper\" [(ngModel)]=\"isKeeper\" /> Are you a Keeper\n                            <!-- <button class=\"btn btn-danger btn-block btn-round\">Register</button> -->\n                            <input type=\"submit\" [disabled]=\"!signInForm.valid\" class=\"btn btn-danger btn-block btn-round\" value=\"Sign In\">\n                        </form>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"footer register-footer text-center\">\n                <h6>&copy;{{test | date: 'yyyy'}}, made with PARK HERE TEAM</h6>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/resetpw/resetpw.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/signup/resetpw/resetpw.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/resetpw/resetpw.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/signup/resetpw/resetpw.component.ts ***!
  \*****************************************************/
/*! exports provided: ResetpwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwComponent", function() { return ResetpwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetpwComponent = /** @class */ (function () {
    function ResetpwComponent(service) {
        this.service = service;
        // email='';
        this.model = {
            email: ''
        };
        this.message = false;
        this.p = "";
        //  isKeeper=true;
        this.isKeeper = false;
    }
    ResetpwComponent.prototype.ngOnInit = function () {
    };
    ResetpwComponent.prototype.changtokeeper = function () {
        if (this.isKeeper)
            this.isKeeper = false;
        this.isKeeper = true;
    };
    ResetpwComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model.email);
        var link = '';
        if (!this.isKeeper) {
            link = "user";
        }
        else if (this.isKeeper) {
            link = "keeper";
        }
        this.service.rstpw(this.model.email, link).subscribe(function (res) {
            _this.message = true;
            _this.serverErrorMessages = res['message'];
            console.log(_this.serverErrorMessages);
            console.log(res);
            if (res['sucsess'] == false) {
                _this.serverErrorMessages = res['message'];
                console.log(_this.serverErrorMessages);
                // this.router.navigate(['newpassword']);
            }
            else {
                _this.serverErrorMessages = res['message'];
            }
        }, function (err) {
            console.log(err);
            _this.serverErrorMessages = '';
        });
    };
    ResetpwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpw',
            template: __webpack_require__(/*! ./resetpw.component.html */ "./src/app/signup/resetpw/resetpw.component.html"),
            styles: [__webpack_require__(/*! ./resetpw.component.scss */ "./src/app/signup/resetpw/resetpw.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], ResetpwComponent);
    return ResetpwComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/5.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                        \n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <!-- <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div> -->\n                            <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\" class=\"register-form\">\n                                <label>Email</label>\n                                <input class=\"form-control\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"model.email\">\n                                <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n                                    <label class=\"validation-message\">Invalid email address.</label>\n                                  </div>\n                                  <input class=\"form-control\" #password=\"ngModel\" pattern=\".{6,}\" required id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\">   \n                                  <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n                                    <label class=\"validation-message\">Minimum 4 characters.</label>\n                                  </div>\n                                  <ngb-alert *ngIf=\"message\" type=\"danger\"  [dismissible]=\"false\">\n                                        <div class=\"container\">\n                                            <ng-container>\n                                                <i class=\"nc-icon nc-bell-55\"></i>\n                                            </ng-container>\n                                            {{serverErrorMessages}}\n                                            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert()\">\n                                                <i class=\"nc-icon nc-simple-remove\"></i>\n                                            </button>\n                                        </div>\n                                    \n                                    </ngb-alert>\n                                    \n                                      <input type=\"checkbox\" id=\"isKeeper\"name=\"isKeeper\" [(ngModel)]=\"isKeeper\"/> Are you a Keeper\n\n                                <!-- <button class=\"btn btn-danger btn-block btn-round\">Register</button> -->\n                                <input type=\"submit\" class=\"btn btn-danger btn-block btn-round\" value=\"Sign In\">\n                            </form>\n                            <div class=\"forgot\">\n                                <a routerLink=\"/resetpassword\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with  Park Here Team</h6>\n                </div>\n            </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servers/regservice.service */ "./src/app/servers/regservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(service, router, state) {
        this.service = service;
        this.router = router;
        this.state = state;
        this.model = {
            email: '',
            password: ''
        };
        this.roll = '';
        this.message = false;
        this.p = "";
        //  isKeeper=true;
        this.isKeeper = false;
    }
    // public alerts: Array<IAlert> = [];
    // private backup: Array<IAlert>;
    SignupComponent.prototype.ngOnInit = function () {
        if (this.service.isLoggedIn())
            this.router.navigateByUrl('/admin');
        this.isAdmin = false;
    };
    SignupComponent.prototype.changtokeeper = function () {
        if (this.isKeeper)
            this.isKeeper = false;
        this.isKeeper = true;
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value.isKeeper);
        this.p = "";
        if (form.value.isKeeper == true)
            this.p = "/keeper";
        this.service.login(form.value, this.p).subscribe(function (res) {
            _this.service.setToken(res['token']);
            var token = _this.service.getToken();
            var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
            console.log(tokenPayload.role);
            console.log(res);
            if (tokenPayload.role == "admin") {
                _this.router.navigateByUrl('/admin');
                // this.state.state=true;
            }
            else if (tokenPayload.role == "user") {
                _this.router.navigateByUrl('/user-profile');
                // //   this.state.state=true;
            }
            else {
                _this.router.navigateByUrl('/keeper');
            }
        }, function (err) {
            console.log(err.error.message);
            _this.message = true;
            _this.serverErrorMessages = err.error.message;
        });
    };
    SignupComponent.prototype.closeAlert = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_servers_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/tt/tt.component.html":
/*!**************************************!*\
  !*** ./src/app/tt/tt.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Edit Profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-5 pr-1\">\n                <div class=\"form-group\">\n                  <label>Company (disabled)</label>\n                  <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Email address</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"../assets/img/bg5.jpg\" alt=\"...\">\n        </div>\n        <div class=\"card-body\">\n          <div class=\"author\">\n            <a href=\"#\">\n              <img class=\"avatar border-gray\" src=\"../assets/img/mike.jpg\" alt=\"...\">\n              <h5 class=\"title\">Mike Andrew</h5>\n            </a>\n            <p class=\"description\">\n              michael24\n            </p>\n          </div>\n          <p class=\"description text-center\">\n            \"Lamborghini Mercy\n            <br> Your chick she so thirsty\n            <br> I'm in that two seat Lambo\"\n          </p>\n        </div>\n        <hr>\n        <div class=\"button-container\">\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-google-plus-g\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tt/tt.component.scss":
/*!**************************************!*\
  !*** ./src/app/tt/tt.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tt/tt.component.ts":
/*!************************************!*\
  !*** ./src/app/tt/tt.component.ts ***!
  \************************************/
/*! exports provided: TtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TtComponent", function() { return TtComponent; });
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

var TtComponent = /** @class */ (function () {
    function TtComponent() {
    }
    TtComponent.prototype.ngOnInit = function () {
    };
    TtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tt',
            template: __webpack_require__(/*! ./tt.component.html */ "./src/app/tt/tt.component.html"),
            styles: [__webpack_require__(/*! ./tt.component.scss */ "./src/app/tt/tt.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TtComponent);
    return TtComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
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

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\H.A.C.K.Hettiarachch\Desktop\New folder\New folder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map