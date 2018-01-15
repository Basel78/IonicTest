webpackJsonp([0],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_spacefinder_api_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationAddPage = (function () {
    function LocationAddPage(navCtrl, globals, client) {
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.client = client;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        this.formData = {
            name: "",
            description: "",
            imageUrl: "https://s3.amazonaws.com/spacefinder-public-image-repository/building.png"
        };
        this.submitted = false;
    }
    LocationAddPage.prototype.onSubmit = function (form) {
        this.submitted = true;
        if (form && form.valid) {
            this.addLocation(form);
        }
    };
    LocationAddPage.prototype.addLocation = function (form) {
        var _this = this;
        this.submitted = true;
        if (form && this.formData.name) {
            var location_1 = {
                name: this.formData.name,
                description: this.formData.description,
                imageUrl: this.formData.imageUrl
            };
            this.globals.displayLoader("Adding...");
            this.client.getClient().locationsCreate(location_1).subscribe(function (data) {
                _this.globals.dismissLoader();
                _this.globals.displayToast("Location successfully added.");
                _this.navCtrl.pop();
            }, function (err) {
                _this.globals.dismissLoader();
                _this.globals.displayAlert('Error encountered', "An error occurred when trying to add the location. Please check the console logs for more information.");
                console.error(err);
            });
        }
    };
    LocationAddPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* Logger */].banner("Add a Location");
    };
    return LocationAddPage;
}());
LocationAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\location-add\location-add.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Add a Location\'" [showSignup]="false"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <!--\n\n  <p *ngIf="submitted" style="color: #ea6153;">Please fill out all details accurately.</p>-->\n\n  <ion-list>\n\n    <form #theForm="ngForm" novalidate>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Location name</ion-label>\n\n        <ion-input [(ngModel)]="formData.name" ngControl="name" name="name" type="text" #name="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="name.valid || !submitted" color="danger" padding-left>\n\n        Location name is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Description</ion-label>\n\n        <ion-input [(ngModel)]="formData.description" ngControl="description" name="description" type="text" #description="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="description.valid || !submitted" color="danger" padding-left>\n\n        Description is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Image URL</ion-label>\n\n        <ion-input [(ngModel)]="formData.imageUrl" ngControl="imageUrl" name="imageUrl" type="text" #imageUrl="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="imageUrl.valid || !submitted" color="danger" padding-left>\n\n        Image URL is required\n\n      </p>\n\n\n\n    </form>\n\n  </ion-list>\n\n\n\n  <br>\n\n\n\n  <ion-row responsive-sm>\n\n    <ion-col>\n\n      <button ion-button (click)="onSubmit(theForm)" type="submit" primary block>Add location</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\location-add\location-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_4__services_spacefinder_api_service__["b" /* IamAuthorizerClient */]])
], LocationAddPage);

//# sourceMappingURL=location-add.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Logger = (function () {
    function Logger() {
    }
    Logger.banner = function (text) {
        console.log("%c  " + text + "  ", "color: white; font-size:15px; background-color: #666666; width: 100%");
    };
    Logger.heading = function (text) {
        console.log("%c  " + text + "  ", "color: white; color: #666666; background-color: #F2F2F2; width: 100%");
    };
    return Logger;
}());
// For more formatting options:
// https://developers.google.com/web/tools/chrome-devtools/console/console-reference?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3#dir
Logger.LeadInStyle = 'font-weight:bold; color:green';
Logger = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Logger);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GlobalStateService = (function () {
    function GlobalStateService(alertCtrl, toastCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewAdminFeaturesOverride = false;
        this.loader = null;
        // this needs to be a variable in order to support two-way binding,
        // to refresh the Angular2 templates when this value changes
        this.userId = '';
    }
    GlobalStateService.prototype.getUserId = function () {
        return __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserId();
    };
    GlobalStateService.prototype.getUnencodedUserId = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserId();
        return userId == null ? '' : userId;
    };
    GlobalStateService.prototype.getUsername = function () {
        return __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUsername();
    };
    GlobalStateService.prototype.getUserFirstName = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile() && __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['given_name']) {
            return (__WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['given_name']);
        }
        return '';
    };
    GlobalStateService.prototype.getUserLastName = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile() && __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['family_name']) {
            return __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['family_name'];
        }
        return null;
    };
    GlobalStateService.prototype.getUserFullName = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile() && __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['given_name'] && __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['family_name']) {
            return __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['given_name'] + ' ' + __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserProfile()['family_name'];
        }
        return null;
    };
    GlobalStateService.prototype.getViewAdminFeaturesOverride = function () {
        return this.viewAdminFeaturesOverride;
    };
    GlobalStateService.prototype.setViewAdminFeaturesOverride = function (setting) {
        this.viewAdminFeaturesOverride = setting;
    };
    GlobalStateService.prototype.displayAdminFeatures = function () {
        return this.isAdminRole() || this.viewAdminFeaturesOverride;
    };
    GlobalStateService.prototype.isAdminRole = function () {
        return __WEBPACK_IMPORTED_MODULE_2__account_management_service__["a" /* CognitoUtil */].getUserGroup() == 'adminGroup';
    };
    GlobalStateService.prototype.getAlertController = function () {
        return this.alertCtrl;
    };
    GlobalStateService.prototype.logout = function (navController) {
        if (navController === void 0) { navController = null; }
        __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].banner("Sign Out");
        this.showLogoutAlert();
        __WEBPACK_IMPORTED_MODULE_2__account_management_service__["b" /* UserLoginService */].signOut();
        this.userId = '';
        if (navController) {
            navController.popToRoot({ animate: false });
        }
    };
    GlobalStateService.prototype.showLogoutAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Signed out',
            subTitle: 'You have signed out of the system.',
            buttons: [{
                    text: 'OK',
                }]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Show logout alert exception', ex);
        });
        ;
    };
    GlobalStateService.prototype.displayAlert = function (title, subtitle, functionToRunWhenOkButtonIsPressed) {
        if (functionToRunWhenOkButtonIsPressed === void 0) { functionToRunWhenOkButtonIsPressed = null; }
        var okFunction = function () { };
        if (functionToRunWhenOkButtonIsPressed != null) {
            okFunction = functionToRunWhenOkButtonIsPressed;
        }
        var alert = this.getAlertController().create({
            title: title,
            subTitle: subtitle,
            buttons: [{ text: 'OK', handler: okFunction }]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Display alert exception', ex);
        });
    };
    GlobalStateService.prototype.displayToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present().then(function () {
        }).catch(function (ex) {
            console.log('Display toast exception', ex);
        });
    };
    GlobalStateService.prototype.displayLoader = function (message, durationInMilliseconds) {
        if (durationInMilliseconds === void 0) { durationInMilliseconds = 3000; }
        this.loader = this.loadingCtrl.create({
            content: message,
            duration: durationInMilliseconds,
            dismissOnPageChange: true
        });
        return this.loader.present().then(function () {
        }).catch(function (ex) {
            console.log('Display loader exception', ex);
        });
    };
    GlobalStateService.prototype.dismissLoader = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loader != null) {
                _this.loader.dismiss().then(function () {
                    _this.loader = null;
                    resolve();
                }).catch(function (ex) {
                    _this.loader = null;
                    // TODO: Debug Ionic 2 vs 3 change with dismiss loader creating issue with RemoteView not found - https://github.com/ionic-team/ionic/issues/11443
                    // console.log('Dismiss loader exception', ex);
                    // reject(ex);
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    };
    return GlobalStateService;
}());
GlobalStateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], GlobalStateService);

//# sourceMappingURL=global-state.service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserRegistrationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserLoginService; });
/* unused harmony export UserProfileService */
/* unused harmony export LocalStorage */
/* unused harmony export LOCAL_STORAGE_PROVIDERS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_vendor_sjcl__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_vendor_sjcl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_vendor_sjcl__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserState;
(function (UserState) {
    UserState[UserState["SignedOut"] = 0] = "SignedOut";
    UserState[UserState["SignedIn"] = 1] = "SignedIn";
    UserState[UserState["PendingConfirmation"] = 2] = "PendingConfirmation";
    UserState[UserState["InvalidCredentials"] = 3] = "InvalidCredentials";
})(UserState || (UserState = {}));
var CognitoUtil = CognitoUtil_1 = (function () {
    function CognitoUtil() {
    }
    CognitoUtil.getRegion = function () {
        return CognitoUtil_1._REGION;
    };
    CognitoUtil.getHostedUiLoginMobileUrl = function () {
        return 'https://' + CognitoUtil_1._USER_POOL_DOMAIN_NAME + '/login?redirect_uri=' + CognitoUtil_1._MOBILE_REDIRECT_URI + '&response_type=' + CognitoUtil_1._RESPONSE_TYPE + '&client_id=' + CognitoUtil_1._CLIENT_ID;
    };
    CognitoUtil.getHostedUiLoginWebUrl = function () {
        return 'https://' + CognitoUtil_1._USER_POOL_DOMAIN_NAME + '/login?redirect_uri=' + CognitoUtil_1._WEB_REDIRECT_URI + '&response_type=' + CognitoUtil_1._RESPONSE_TYPE + '&client_id=' + CognitoUtil_1._CLIENT_ID;
    };
    CognitoUtil.getHostedUiTokenUrl = function () {
        return 'https://' + CognitoUtil_1._USER_POOL_DOMAIN_NAME + '/oauth2/token';
    };
    CognitoUtil.getIdTokenFromAuthCode = function (authCode, platform, http) {
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            var requestRedirectUri;
            switch (platform) {
                case 'mobile':
                    requestRedirectUri = CognitoUtil_1._MOBILE_REDIRECT_URI;
                    break;
                case 'web':
                    requestRedirectUri = CognitoUtil_1._WEB_REDIRECT_URI;
                    break;
            }
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var body = 'grant_type=authorization_code&' +
                'client_id=' + CognitoUtil_1._CLIENT_ID + '&' +
                'redirect_uri=' + requestRedirectUri + '&' +
                'code=' + authCode;
            http.post(CognitoUtil_1.getHostedUiTokenUrl(), body, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                //TODO: Catch any post error
            });
        });
    };
    CognitoUtil.getClientId = function () {
        return CognitoUtil_1._CLIENT_ID;
    };
    CognitoUtil.getIdentityPoolId = function () {
        return CognitoUtil_1._IDENTITY_POOL_ID;
    };
    CognitoUtil.getUserPoolId = function () {
        return CognitoUtil_1._USER_POOL_ID;
    };
    CognitoUtil.getCognitoIdentityId = function () {
        return AWS.config.credentials.identityId;
    };
    CognitoUtil.getUsername = function () {
        // Retrieve username from local storage. Return null if it does not exist
        return LocalStorage.get('userName');
    };
    CognitoUtil.setUsername = function (username) {
        LocalStorage.set('userName', username);
    };
    CognitoUtil.getUserId = function () {
        // Retrieve user ID from local storage. Return null if it does not exist
        return LocalStorage.get('userId');
    };
    CognitoUtil.getUserProfile = function () {
        // Retrieve user profile attributes from local storage
        return LocalStorage.getObject('userProfile');
    };
    CognitoUtil.getUserGroup = function () {
        // Retrieve the user group from the local storage
        return LocalStorage.get("userGroup");
    };
    CognitoUtil.getUserState = function () {
        // Retrieve user state from local storage. Return null if it does not exist
        switch (parseInt(LocalStorage.get('userState'))) {
            case 0:
                return UserState.SignedOut;
            case 1:
                return UserState.SignedIn;
            case 2:
                return UserState.PendingConfirmation;
            case 3:
                return UserState.InvalidCredentials;
            default:
                return null;
        }
    };
    ;
    CognitoUtil.setUserState = function (userState) {
        LocalStorage.set('userState', JSON.stringify(userState));
    };
    CognitoUtil.getUserPool = function () {
        // Initialize Cognito User Pool
        var poolData = {
            UserPoolId: CognitoUtil_1._USER_POOL_ID,
            ClientId: CognitoUtil_1._CLIENT_ID
        };
        AWSCognito.config.region = CognitoUtil_1._REGION;
        AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: CognitoUtil_1._IDENTITY_POOL_ID
        });
        // Initialize AWS config object with dummy keys - required if unauthenticated access is not enabled for identity pool
        AWSCognito.config.update({ accessKeyId: 'dummyvalue', secretAccessKey: 'dummyvalue' });
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    };
    CognitoUtil.getCognitoUser = function () {
        var username = LocalStorage.get('userName');
        var userData = {
            Username: username,
            Pool: CognitoUtil_1.getUserPool()
        };
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    };
    CognitoUtil.getCurrentUser = function () {
        return CognitoUtil_1.getUserPool().getCurrentUser();
    };
    return CognitoUtil;
}());
CognitoUtil._USER_POOL_ID = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]['USER_POOL_ID'];
CognitoUtil._USER_POOL_DOMAIN_NAME = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]['USER_POOL_DOMAIN_NAME'];
CognitoUtil._CLIENT_ID = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]['CLIENT_ID'];
CognitoUtil._IDENTITY_POOL_ID = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]['IDENTITY_POOL_ID'];
CognitoUtil._REGION = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */]['REGION'];
CognitoUtil._MOBILE_REDIRECT_URI = 'spacefinder://callback';
CognitoUtil._WEB_REDIRECT_URI = 'http://localhost:8100';
CognitoUtil._RESPONSE_TYPE = 'code';
CognitoUtil = CognitoUtil_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CognitoUtil);

var UserRegistrationService = (function () {
    function UserRegistrationService() {
    }
    UserRegistrationService.signUp = function (signUpData) {
        var attributeList = [];
        var dataEmail = {
            Name: 'email',
            Value: signUpData.email
        };
        var dataGivenName = {
            Name: 'given_name',
            Value: signUpData.givenName
        };
        var dataFamilyName = {
            Name: 'family_name',
            Value: signUpData.familyName
        };
        var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
        var attributeGivenName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataGivenName);
        var attributeFamilyName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataFamilyName);
        attributeList.push(attributeEmail);
        attributeList.push(attributeGivenName);
        attributeList.push(attributeFamilyName);
        var promise = new Promise(function (resolve, reject) {
            CognitoUtil.getUserPool().signUp(signUpData.username, signUpData.password, attributeList, undefined, function (err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                console.log('Username is ' + result.user.getUsername());
                console.log('Sign-up successful!');
                // Update user state to 'pendingConfirmation'
                CognitoUtil.setUsername(signUpData.username);
                CognitoUtil.setUserState(UserState.PendingConfirmation);
                // Sign-up successful. Callback without error.
                resolve();
            });
        });
        return promise;
    };
    UserRegistrationService.confirmSignUp = function (confirmationCode) {
        var cognitoUser = CognitoUtil.getCognitoUser();
        var promise = new Promise(function (resolve, reject) {
            cognitoUser.confirmRegistration(confirmationCode, true, function (err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                CognitoUtil.setUserState(UserState.SignedIn);
                resolve(data);
            });
        });
        return promise;
    };
    UserRegistrationService.resendConfirmationCode = function () {
        var cognitoParams = {
            ClientId: CognitoUtil.getClientId(),
            Username: CognitoUtil.getUsername()
        };
        var promise = new Promise(function (resolve, reject) {
            new AWSCognito.CognitoIdentityServiceProvider().resendConfirmationCode(cognitoParams, function (err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
        });
        return promise;
    };
    return UserRegistrationService;
}());
UserRegistrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], UserRegistrationService);

var UserLoginService = UserLoginService_1 = (function () {
    function UserLoginService() {
    }
    UserLoginService.getAccessToken = function () {
        var accessToken = UserLoginService_1._userTokens.accessToken;
        if (!accessToken) {
            // retrieve from Local Storage if it exists
            accessToken = LocalStorage.get('userTokens.accessToken');
            UserLoginService_1._userTokens.accessToken = accessToken;
        }
        return accessToken;
    };
    ;
    UserLoginService.getIdToken = function () {
        var idToken = UserLoginService_1._userTokens.idToken;
        if (!idToken) {
            // retrieve from Local Storage if it exists
            idToken = LocalStorage.get('userTokens.idToken');
            UserLoginService_1._userTokens.idToken = idToken;
        }
        return idToken;
    };
    ;
    UserLoginService.getRefreshToken = function () {
        var refreshToken = UserLoginService_1._userTokens.refreshToken;
        if (!refreshToken) {
            // retrieve from Local Storage if it exists
            refreshToken = LocalStorage.get('userTokens.refreshToken');
            UserLoginService_1._userTokens.refreshToken = refreshToken;
        }
        return refreshToken;
    };
    UserLoginService.getAwsAccessKey = function () {
        if (AWS.config.credentials == null) {
            return LocalStorage.get('userTokens.awsAccessKeyId');
        }
        return AWS.config.credentials.accessKeyId || LocalStorage.get('userTokens.awsAccessKeyId');
    };
    UserLoginService.getAwsSecretAccessKey = function () {
        return AWS.config.credentials.secretAccessKey || LocalStorage.get('userTokens.awsSecretAccessKey');
    };
    UserLoginService.getAwsSessionToken = function () {
        return AWS.config.credentials.sessionToken || LocalStorage.get('userTokens.awsSessionToken');
    };
    UserLoginService.clearUserState = function () {
        // Clear user tokens
        UserLoginService_1._userTokens = {
            accessToken: undefined,
            idToken: undefined,
            refreshToken: undefined
        };
        LocalStorage.set('userTokens.accessToken', null);
        LocalStorage.set('userTokens.idToken', null);
        LocalStorage.set('userTokens.refreshToken', null);
        LocalStorage.set('userTokens.awsAccessKeyId', null);
        LocalStorage.set('userTokens.awsSecretAccessKey', null);
        LocalStorage.set('userTokens.awsSessionToken', null);
        // Clear user state
        CognitoUtil.setUserState(UserState.SignedOut);
        // Clear user profile attributes
        LocalStorage.set('userProfile', null);
        // Clear username and user ID attributes
        LocalStorage.set('userId', null);
        LocalStorage.set('userName', null);
    };
    ;
    UserLoginService.signIn = function (userLogin) {
        var authenticationData = {
            Username: userLogin.username,
            Password: userLogin.password
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        CognitoUtil.setUsername(userLogin.username);
        console.log('Authenticating user ' + userLogin.username);
        var cognitoUser = CognitoUtil.getCognitoUser();
        var promise = new Promise(function (resolve, reject) {
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    console.log(result);
                    UserLoginService_1.completeSignIn(result.getAccessToken().getJwtToken(), result.getIdToken().getJwtToken(), result.getRefreshToken().getToken()).then(function () {
                        resolve();
                    }).catch(function (err) {
                        reject(err);
                    });
                },
                onFailure: function (err) {
                    // Check for user not confirmed exception
                    if (err.code === 'UserNotConfirmedException') {
                        // Set user state to pending confirmation
                        CognitoUtil.setUserState(UserState.PendingConfirmation);
                    }
                    else {
                        CognitoUtil.setUserState(UserState.InvalidCredentials);
                    }
                    reject(err);
                }
            });
        });
        return promise;
    };
    UserLoginService.completeSignIn = function (accessToken, idToken, refreshToken) {
        var promise = new Promise(function (resolve, reject) {
            // Save user tokens to local state
            UserLoginService_1._userTokens.accessToken = accessToken;
            UserLoginService_1._userTokens.idToken = idToken;
            UserLoginService_1._userTokens.refreshToken = refreshToken;
            LocalStorage.set('userTokens.idToken', UserLoginService_1._userTokens.idToken);
            console.log('%cCognito User Pools Identity Token: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, UserLoginService_1.getIdToken());
            LocalStorage.set('userTokens.accessToken', UserLoginService_1._userTokens.accessToken);
            console.log('%cCognito User Pools Access Token: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, UserLoginService_1.getAccessToken());
            LocalStorage.set('userTokens.refreshToken', UserLoginService_1._userTokens.refreshToken);
            console.log('%cCognito User Pools Refresh Token: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, UserLoginService_1.getRefreshToken());
            /*
            Extract the user group from the identity token.
            First, get the identity token payload and then perform a Base64 decoding
            so you can later extract the user group.
            */
            var idTokenPayload = UserLoginService_1._userTokens.idToken.split('.')[1];
            var idTokenDecoded = JSON.parse(__WEBPACK_IMPORTED_MODULE_4__assets_vendor_sjcl__["codec"].utf8String.fromBits(__WEBPACK_IMPORTED_MODULE_4__assets_vendor_sjcl__["codec"].base64url.toBits(idTokenPayload)));
            CognitoUtil.setUsername(idTokenDecoded["cognito:username"]);
            var userName = idTokenDecoded["cognito:username"];
            var userGroup = idTokenDecoded["cognito:groups"];
            if (userGroup && userGroup.length > 0) {
                LocalStorage.set('userGroup', userGroup);
            }
            else {
                /*
                  The user group is set only for the pre-defined users. By default
                  we assign them to client group.
                */
                userGroup = 'clientGroup';
                LocalStorage.set('userGroup', userGroup[0]);
            }
            console.log('%cCognito User Pools User Groups: ' + '%c%s belongs to group %s', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, "black", userName, userGroup[0]);
            // Set user state to authenticated
            CognitoUtil.setUserState(UserState.SignedIn);
            // Read user attributes and write to console
            console.log('%cCognito User Pools User Attributes: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, idTokenDecoded);
            // Write user profile attributes to local storage
            LocalStorage.setObject('userProfile', idTokenDecoded);
            UserLoginService_1.getAwsCredentials().then(function () {
                LocalStorage.set('userId', CognitoUtil.getCognitoIdentityId());
                console.log('%cCognito Identity ID: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, CognitoUtil.getCognitoIdentityId());
                LocalStorage.set('userTokens.awsAccessKeyId', AWS.config.credentials.accessKeyId);
                console.log('%cAWS Access Key ID: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, AWS.config.credentials.accessKeyId);
                LocalStorage.set('userTokens.awsSecretAccessKey', AWS.config.credentials.secretAccessKey);
                console.log('%cAWS Secret Access Key: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, AWS.config.credentials.secretAccessKey);
                LocalStorage.set('userTokens.awsSessionToken', AWS.config.credentials.sessionToken);
                console.log('%cAWS Session Token: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, AWS.config.credentials.sessionToken);
                // Resolve promise if all is successful
                resolve();
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserLoginService.signOut = function () {
        // Clear local user state
        UserLoginService_1.clearUserState();
        // Logout from Cognito service
        CognitoUtil.getCognitoUser().signOut();
        AWS.config.credentials.clearCachedId();
    };
    UserLoginService.globalSignOut = function () {
        // Clear local user state
        UserLoginService_1.clearUserState();
        // Logout from Cognito service
        CognitoUtil.getCognitoUser().globalSignOut();
        AWS.config.credentials.clearCachedId();
    };
    UserLoginService.changePassword = function (previousPassword, proposedPassword) {
        var promise = new Promise(function (resolve, reject) {
            // first, load the valid tokens cached in the local store, if they are available
            // see: https://github.com/aws/amazon-cognito-identity-js/issues/71
            var cognitoUser = CognitoUtil.getCognitoUser();
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    reject(err);
                    return;
                }
                cognitoUser.changePassword(previousPassword, proposedPassword, function (err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                });
            });
        });
        return promise;
    };
    UserLoginService.forgotPassword = function (username) {
        // Set target username
        CognitoUtil.setUsername(username);
        // Get Cognito User with session
        var cognitoUser = CognitoUtil.getCognitoUser();
        var promise = new Promise(function (resolve, reject) {
            cognitoUser.forgotPassword({
                onSuccess: function (result) {
                    console.log('Initiated reset password for username ' + username);
                    resolve(result);
                },
                onFailure: function (err) {
                    console.log('Failed to initiate reset password for username ' + username);
                    reject(err);
                    return;
                }
            });
        });
        return promise;
    };
    UserLoginService.confirmForgotPassword = function (username, verificationCode, password) {
        // Set target username
        CognitoUtil.setUsername(username);
        // Get Cognito User with session
        var cognitoUser = CognitoUtil.getCognitoUser();
        var promise = new Promise(function (resolve, reject) {
            cognitoUser.confirmPassword(verificationCode, password, {
                onSuccess: function (result) {
                    console.log('Password successfully reset for username ' + username);
                    resolve(result);
                },
                onFailure: function (err) {
                    console.log('Password was not reset for username ' + username);
                    console.log("Error: " + err.name + ". " + err.message);
                    reject(err);
                    return;
                }
            });
        });
        return promise;
    };
    UserLoginService.getAwsCredentials = function () {
        var promise = new Promise(function (resolve, reject) {
            // TODO: Integrate this method as needed into the overall module
            // Add the User's Id token to the Cognito credentials login map
            var logins = {};
            logins['cognito-idp.' + CognitoUtil.getRegion() + '.amazonaws.com/' + CognitoUtil.getUserPoolId()] = LocalStorage.get('userTokens.idToken');
            ;
            // Set Cognito Identity Pool details
            AWS.config.region = CognitoUtil.getRegion();
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: CognitoUtil.getIdentityPoolId()
            });
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: CognitoUtil.getIdentityPoolId(),
                Logins: logins
            });
            // Call refresh method to authenticate user and get new temp AWS credentials
            if (AWS.config.credentials.needsRefresh()) {
                AWS.config.credentials.clearCachedId();
                AWS.config.credentials.get(function (err) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
            }
            else {
                AWS.config.credentials.get(function (err) {
                    if (err) {
                        console.error(err);
                        reject(err);
                        return;
                    }
                    resolve();
                });
            }
        });
        return promise;
    };
    return UserLoginService;
}());
UserLoginService._userTokens = {
    accessToken: undefined,
    idToken: undefined,
    refreshToken: undefined
};
UserLoginService = UserLoginService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], UserLoginService);

var UserProfileService = (function () {
    function UserProfileService() {
    }
    UserProfileService.getUserAttributes = function () {
        var promise = new Promise(function (resolve, reject) {
            var cognitoUser = CognitoUtil.getCognitoUser();
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    reject(err);
                    return;
                }
                cognitoUser.getUserAttributes(function (err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    var userAttributes = {};
                    for (var i = 0; i < result.length; i++) {
                        userAttributes[result[i].getName()] = result[i].getValue();
                    }
                    console.log('%cCognito User Pools User Attributes: ', __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */].LeadInStyle, userAttributes);
                    // Write user profile attributes to local storage
                    LocalStorage.setObject('userProfile', userAttributes);
                    resolve(userAttributes);
                });
            });
        });
        return promise;
    };
    return UserProfileService;
}());

var LocalStorage = LocalStorage_1 = (function () {
    function LocalStorage() {
    }
    LocalStorage.getLocalStorage = function () {
        var storage = window.localStorage || localStorage;
        if (!localStorage) {
            throw new Error('Browser does not support local storage');
        }
        return storage;
    };
    LocalStorage.set = function (key, value) {
        LocalStorage_1.getLocalStorage().setItem(key, value);
    };
    LocalStorage.get = function (key) {
        return LocalStorage_1.getLocalStorage().getItem(key);
    };
    LocalStorage.setObject = function (key, value) {
        LocalStorage_1.set(key, JSON.stringify(value));
    };
    LocalStorage.getObject = function (key) {
        return JSON.parse(LocalStorage_1.get(key) || '{}');
    };
    LocalStorage.remove = function (key) {
        LocalStorage_1.getLocalStorage().removeItem(key);
    };
    return LocalStorage;
}());
LocalStorage = LocalStorage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], LocalStorage);

var LOCAL_STORAGE_PROVIDERS = [
    { provide: LocalStorage, useClass: LocalStorage }
];
var CognitoUtil_1, UserLoginService_1, LocalStorage_1;
//# sourceMappingURL=account-management.service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_signup_account_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_spacefinder_api_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BookingsPage = (function () {
    function BookingsPage(navCtrl, globals, authClient) {
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.authClient = authClient;
        this.initialized = false;
        this.accountSigninPage = __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__["a" /* AccountSigninPage */];
        this.accountSignupPage = __WEBPACK_IMPORTED_MODULE_5__account_signup_account_signup__["a" /* AccountSignupPage */];
        this.bookings = [];
        this.data = [];
        // empty
    }
    BookingsPage.prototype.displayCancelDialog = function (bookingId, timeslotDisplayText, locationName, resourceName) {
        var _this = this;
        console.log("Cancelling bookingId " + bookingId);
        var dialog = this.globals.getAlertController().create({
            title: 'Cancel booking?',
            message: "Are you sure you want to cancel the <b>" + resourceName + "</b> booking (at <b>" + locationName + "</b>), for the <b>" + timeslotDisplayText + "</b> timeslot?",
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes, cancel the booking',
                    handler: function () {
                        _this.cancelBooking(bookingId)
                            .then(function () {
                            _this.globals.dismissLoader();
                            _this.globals.displayToast("Booking was successfully cancelled.");
                        })
                            .catch(function (err) {
                            _this.globals.dismissLoader();
                            _this.globals.displayAlert('Error encountered', "Cancellation attempt failed. Please check the console logs for more information.");
                            console.log(err);
                        });
                    }
                }
            ]
        });
        dialog.present();
    };
    BookingsPage.prototype.cancelBooking = function (bookingId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // delete from the database
            _this.globals.displayLoader("Cancelling...");
            _this.authClient.getClient().bookingsDelete(_this.globals.getUserId(), bookingId).subscribe(function (data) {
                // after the database has been successfully updated, then
                // remove any in-memory references to the booking as well.
                // first, remove the item from the resources array
                var data2 = [];
                var index = _this.bookings.findIndex(function (booking) { return booking.bookingId == bookingId; });
                if (index > -1) {
                    _this.bookings.splice(index, 1);
                    // also remove any references from the data array
                    for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
                        var d = _a[_i];
                        var index_1 = d.bookings.findIndex(function (booking) { return booking.bookingId == bookingId; });
                        if (index_1 > -1) {
                            d.bookings.splice(index_1, 1);
                        }
                        // do bookings still remain? if so, then let's add it to our new data2 array
                        if (d.bookings.length > 0) {
                            data2.push({
                                "date": d.date,
                                "bookings": d.bookings
                            });
                        }
                    }
                    // swap the old data array with our newer data2 array
                    _this.data = data2;
                }
                resolve();
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    // note: this modifies the bookings array in place
    BookingsPage.prototype.generateDataHashFromBookings = function (bookings) {
        if (bookings.length == 0) {
            return [];
        }
        var result = [];
        // Here's what the desired data structure looks like
        /*
        this.data = [
          {
            "date": "Friday, June 7, 2016",
            "bookings": [this.bookings[0], this.bookings[1]]
          },
          {
            "date": "Friday, June 9, 2016",
            "bookings": [this.bookings[2]]
          },
        ];
        */
        // first, sort all the bookings by time
        bookings.sort(function (a, b) {
            return a.startTimeEpochTime - b.startTimeEpochTime;
        });
        // now, populate the desired data structure.
        // The bookings are already in sorted order.
        // if the current booking has the same date as the prior one,
        // then add it to the same array. Otherwise, create a new array
        // each time a new date is encountered.
        var currentDateString = null;
        var bookingsSoFar = [];
        // bookings.push({locationId: null, resourceId: null, userId: null, startTimeEpochTime: 0});
        for (var i = 0; i < bookings.length; i++) {
            var booking = bookings[i];
            var date = new Date(booking.startTimeEpochTime);
            var dateString = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
            if (dateString === currentDateString) {
                bookingsSoFar.push(booking);
            }
            else {
                // store the bookings seen so far...
                if (bookingsSoFar.length > 0) {
                    var b = {
                        "date": currentDateString,
                        "bookings": bookingsSoFar.slice(0) // clone the array
                    };
                    result.push(b);
                }
                // ...and start with a fresh array
                currentDateString = dateString;
                bookingsSoFar = [booking];
            }
        }
        if (bookingsSoFar.length > 0) {
            var b = {
                "date": currentDateString,
                "bookings": bookingsSoFar.slice(0) // clone the array
            };
            result.push(b);
        }
        return result;
    };
    BookingsPage.prototype.loadBookings = function (userId) {
        var _this = this;
        this.authClient.getClient().bookingsListByUserId(userId).subscribe(function (data) {
            _this.bookings = data.items;
            _this.data = _this.generateDataHashFromBookings(_this.bookings);
            _this.globals.dismissLoader();
            _this.initialized = true;
        }, function (err) {
            _this.globals.dismissLoader();
            _this.globals.displayAlert('Error encountered', 'Unable to load bookings. Please check the console logs for more information.');
            _this.initialized = true;
            console.error(err);
        });
    };
    ;
    BookingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7__services_logger_service__["a" /* Logger */].banner("My Bookings");
        this.data = [];
        if (!this.initialized) {
            if (this.globals.userId != '' && __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__["a" /* CognitoUtil */].getUserState() == __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__["d" /* UserState */].SignedIn && __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__["b" /* UserLoginService */].getAwsAccessKey() != null) {
                this.initialized = false;
                __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__["b" /* UserLoginService */].getAwsCredentials()
                    .then(function () {
                    _this.globals.displayLoader("Loading...");
                    _this.loadBookings(_this.globals.getUserId());
                })
                    .catch(function (err) {
                    _this.globals.displayAlert('Error encountered', 'Unable to load bookings. Please check the console logs for more information.');
                    console.log("ERROR: Unable to load bookings!");
                    console.log(err);
                });
            }
            else {
                this.initialized = true;
            }
        }
    };
    BookingsPage.prototype.ionViewDidLeave = function () {
        this.initialized = false;
        this.data = [];
    };
    return BookingsPage;
}());
BookingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\bookings\bookings.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'My Bookings\'"></navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div padding *ngIf="globals.userId == \'\'">\n\n    <p><b>You must be signed in to view and modify your bookings.</b></p>\n\n    <p>Click the "SIGN IN" button in the upper right of the screen, to sign in to the app.</p>\n\n    <p>Haven\'t registered yet? Click on the "REGISTER" button to register as a new user.</p>\n\n\n\n  </div>\n\n\n\n  <div padding *ngIf="globals.userId != \'\' && data.length == 0 && initialized">\n\n    <p>You currently have no bookings.</p>\n\n    <p>To browse the availability of conference rooms and desks, click on the "Resources" tab.</p>\n\n  </div>\n\n\n\n  <div *ngIf="globals.userId != \'\' && data.length > 0 && initialized">\n\n    <ion-list *ngFor="let d of data">\n\n        <ion-list-header style="color:white; background-color: #89bdd3 !important" >\n\n          {{d.date}}\n\n        </ion-list-header>\n\n        <ion-item *ngFor="let booking of d.bookings">\n\n          <div item-left style=\'width:25%\'>{{booking.timeslot}}</div>\n\n          <p>{{booking.locationName}}</p>\n\n          <h2>{{booking.resourceName}}</h2>\n\n          <p>{{booking.resourceDescription}}</p>\n\n          <button ion-button color="light" item-right (click)="displayCancelDialog(booking.bookingId, booking.timeslot, booking.locationName, booking.resourceName)">Cancel</button>\n\n        </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\bookings\bookings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_6__services_spacefinder_api_service__["b" /* IamAuthorizerClient */]])
], BookingsPage);

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountForgotPasswordPage = (function () {
    function AccountForgotPasswordPage(navCtrl, globals) {
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.formData = {};
        this.submitted = false;
    }
    AccountForgotPasswordPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form && form.valid) {
            console.log('Form User data' + this.formData);
            __WEBPACK_IMPORTED_MODULE_3__services_account_management_service__["b" /* UserLoginService */].confirmForgotPassword(__WEBPACK_IMPORTED_MODULE_3__services_account_management_service__["a" /* CognitoUtil */].getUsername(), this.formData.verificationCode, this.formData.password)
                .then(function () {
                console.log("Password successfully changed");
                _this.showSuccessAlert();
            }).catch(function (err) {
                console.log('Forgot password request failed to initiate', err);
                _this.showFailureAlert();
            });
        }
    };
    AccountForgotPasswordPage.prototype.showSuccessAlert = function () {
        var _this = this;
        var alertController = this.globals.getAlertController();
        var alert = alertController.create({
            title: 'Password changed.',
            subTitle: 'Your password has been successfully changed. Please try signing in again with your new password.',
            buttons: [{
                    text: 'Return to the Sign In screen',
                    handler: function (data) {
                        // go back to the Signin screen
                        _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    AccountForgotPasswordPage.prototype.showFailureAlert = function () {
        var _this = this;
        var alertController = this.globals.getAlertController();
        var alert = alertController.create({
            title: 'Error encountered',
            subTitle: 'There was a problem changing your password. Please try again.',
            buttons: [{
                    text: 'Return to the Sign In screen',
                    handler: function (data) {
                        // go back to the Signin screen
                        _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    AccountForgotPasswordPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_4__services_logger_service__["a" /* Logger */].banner("Forgot Password");
    };
    return AccountForgotPasswordPage;
}());
AccountForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-forgot-password\account-forgot-password.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Reset Password\'"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <p>A verification code has been emailed to your account. Please enter the verification code below, along with the new password you would like to use.</p>\n\n\n\n    <form #updatePasswordForm="ngForm" novalidate>\n\n      <ion-item>\n\n        <ion-label floating>Verification code</ion-label>\n\n        <ion-input [(ngModel)]="formData.verificationCode" name="verificationCode" type="text" #verificationCode="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="verificationCode.valid || submitted == false" color="danger" padding-left>\n\n        Verification code is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>New password</ion-label>\n\n        <ion-input [(ngModel)]="formData.password" name="password" type="password" #password="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n        Password is required\n\n      </p>\n\n\n\n    </form>\n\n  </ion-list>\n\n\n\n  <br>\n\n\n\n  <div class="item item-input-inset">\n\n  <button ion-button (click)="onSubmit(updatePasswordForm)" type="submit" primary block>Update password</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-forgot-password\account-forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__["a" /* GlobalStateService */]])
], AccountForgotPasswordPage);

//# sourceMappingURL=account-forgot-password.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountConfirmationCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountConfirmationCodePage = (function () {
    function AccountConfirmationCodePage(navCtrl, alertCtrl, globals) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.globals = globals;
        this.submitted = false;
        this.registrationCode = {
            code: undefined
        };
    }
    AccountConfirmationCodePage.prototype.confirmSignUp = function (form) {
        var _this = this;
        this.submitted = true;
        if (form && form.valid) {
            __WEBPACK_IMPORTED_MODULE_2__services_account_management_service__["c" /* UserRegistrationService */].confirmSignUp(this.registrationCode.code.toString())
                .then(function () {
                _this.showConfirmationSuccessAlert();
            }).catch(function (err) {
                console.error(err);
                _this.showConfirmationFailureAlert(err);
            });
        }
    };
    AccountConfirmationCodePage.prototype.showConfirmationSuccessAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: "You are now successfully registered! You can now sign-in using your username/password.",
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        _this.navCtrl.popToRoot({ animate: false });
                    }
                }]
        });
        alert.present();
    };
    AccountConfirmationCodePage.prototype.showConfirmationFailureAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'Verification failed',
            subTitle: err.message,
            buttons: [{
                    text: 'OK',
                }]
        });
        alert.present();
    };
    AccountConfirmationCodePage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_4__services_logger_service__["a" /* Logger */].banner("Confirmation Code");
    };
    return AccountConfirmationCodePage;
}());
AccountConfirmationCodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-confirmation-code\account-confirmation-code.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Confirm Sign Up\'"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <p>Please check your e-mail and enter your registration code.</p>\n\n  <form #confirmSignUpForm="ngForm" novalidate>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Registration Code</ion-label>\n\n      <ion-input [(ngModel)]="registrationCode.code" name="code" type="text" #code="ngModel" required></ion-input>\n\n    </ion-item>\n\n    <p [hidden]="code.valid || submitted == false" color="danger" padding-left>\n\n      Registration code is required\n\n    </p>\n\n\n\n  </form>\n\n\n\n  <button ion-button (click)="confirmSignUp(confirmSignUpForm)" type="submit" primary block>Confirm Sign Up</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-confirmation-code\account-confirmation-code.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__["a" /* GlobalStateService */]])
], AccountConfirmationCodePage);

//# sourceMappingURL=account-confirmation-code.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * We dont extend from Http since by doing that, it requires binding
 * to ConnectionBackend, which is not provided in HttpModule.
 * We cast this one directly with <any> as http, since it implements
 * the same methods than Http.
 */
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this._backend = http._backend;
        this._defaultOptions = http._defaultOptions;
    }
    /**
     * Performs a request with `get` http method.
     */
    HttpService.prototype.get = function (url, options) {
        return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get);
    };
    /**
     * Performs a request with `post` http method.
     */
    HttpService.prototype.post = function (url, body, options) {
        return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, body);
    };
    /**
     * Performs a request with `put` http method.
     */
    HttpService.prototype.put = function (url, body, options) {
        return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put, body);
    };
    /**
     * Performs a request with `delete` http method.
     */
    HttpService.prototype.delete = function (url, options) {
        return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete);
    };
    /**
     * Performs a request with `patch` http method.
     */
    HttpService.prototype.patch = function (url, body, options) {
        return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Patch, body);
    };
    /**
     * Performs a request with `head` http method.
     */
    HttpService.prototype.head = function (url, options) {
        return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Head);
    };
    /**
     * Performs a request with `options` http method.
     */
    HttpService.prototype.options = function (url, options) {
        return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options);
    };
    HttpService.prototype.addInterceptor = function (cb) {
        this.interceptor = cb;
    };
    HttpService.prototype.requestImpl = function (url, method, opt) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]();
        if (!opt) {
            options.url = url;
            options.method = method;
            options.headers = options.headers || headers;
            options.withCredentials = false;
        }
        else {
            options.url = url;
            options.method = method;
            options.body = opt.body;
            options.headers = opt.headers || headers;
            options.withCredentials = false;
        }
        options.responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ResponseContentType */].Json;
        if (this.interceptor) {
            this.interceptor(options);
        }
        // let request = new Request(options);
        return this.http.request(url, options);
    };
    HttpService.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (options && options.method) {
                return this.requestImpl(url, options.method, options);
            }
            else if (options) {
                return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get, options);
            }
            else {
                return this.requestImpl(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get);
            }
        }
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
], HttpService);

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = (function () {
    function WelcomePage(navCtrl, globals) {
        this.navCtrl = navCtrl;
        this.globals = globals;
    }
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'welcome',template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\welcome\welcome.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'SpaceFinder\'"></navbar>\n\n</ion-header>\n\n\n\n<ion-content class=\'main\'>\n\n  <div id=\'main-content\'>\n\n    <img width=\'100%\' src=\'assets/images/conference_room_unsplash.jpg\'>\n\n    <div id=\'top\'>\n\n      <span class=\'title\' *ngIf="globals.userId == \'\'">Welcome to SpaceFinder!</span>\n\n      <span class=\'title\' *ngIf="globals.userId !== \'\'">Welcome, {{globals.getUserFirstName()}} {{globals.getUserLastName()}}</span>\n\n      <table border="0">\n\n      <tr>\n\n        <td><img src="assets/images/noun_46945_cc.png" width="100"/></td>\n\n        <td>&nbsp;&nbsp;&nbsp;Book a conference room<br/>&nbsp;&nbsp;&nbsp;for your team meeting. </td>\n\n      </tr>\n\n      <tr>\n\n        <td><img src="assets/images/noun_82305_cc.png" width="100"/></td>\n\n        <td>&nbsp;&nbsp;&nbsp;Visiting a remote office?<br/>&nbsp;&nbsp;&nbsp;You can book a desk in advance.</td>\n\n      </tr>\n\n      </table>\n\n    </div>\n\n  </div><!-- main-content -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__["a" /* GlobalStateService */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_signup_account_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_add_location_add__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resource_list_resource_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_spacefinder_api_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LocationListPage = (function () {
    function LocationListPage(navCtrl, globals, noAuthClient, customAuthClient, userPoolsAuthClient) {
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.noAuthClient = noAuthClient;
        this.customAuthClient = customAuthClient;
        this.userPoolsAuthClient = userPoolsAuthClient;
        this.initialized = false;
        this.accountSigninPage = __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__["a" /* AccountSigninPage */];
        this.accountSignupPage = __WEBPACK_IMPORTED_MODULE_4__account_signup_account_signup__["a" /* AccountSignupPage */];
        this.locationAddPage = __WEBPACK_IMPORTED_MODULE_5__location_add_location_add__["a" /* LocationAddPage */];
        this.locations = [];
        this.resourceListPage = __WEBPACK_IMPORTED_MODULE_7__resource_list_resource_list__["a" /* ResourceListPage */];
    }
    LocationListPage.prototype.displayDeleteLocationConfirmation = function (locationId, locationName) {
        var _this = this;
        console.log("Deleting locationID " + locationId);
        var confirm = this.globals.getAlertController().create({
            title: 'Delete location?',
            message: "Are you sure you want to delete [<b>" + locationName + "</b>]? All resources and bookings associated with [<b>" + locationName + "</b>] will also be deleted!",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () { }
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.deleteLocation(locationId)
                            .then(function () {
                            _this.globals.dismissLoader();
                            _this.globals.displayToast("Location [" + locationName + "] has been successfully deleted");
                        })
                            .catch(function (err) {
                            _this.globals.dismissLoader();
                            _this.globals.displayAlert('Error encountered', 'Delete failed. Please check the console logs for more information.');
                            console.log(err);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    LocationListPage.prototype.deleteLocation = function (locationId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // delete from the database
            _this.globals.displayLoader("Deleting...");
            _this.customAuthClient.getClient().locationsDelete(locationId).subscribe(function () {
                // remove the item from the locations array
                var index = _this.locations.findIndex(function (location) { return location.locationId == locationId; });
                if (index > -1) {
                    _this.locations.splice(index, 1);
                }
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationListPage.prototype.gotoResourceListPage = function (location) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resource_list_resource_list__["a" /* ResourceListPage */], location);
    };
    LocationListPage.prototype.loadLocationsWithAuth = function () {
        var _this = this;
        this.locations = [];
        this.userPoolsAuthClient.getClient().locationsList().subscribe(function (data) {
            // this.locations = data.items
            // sort by name
            _this.locations = data.items.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            _this.globals.dismissLoader();
            _this.initialized = true;
        }, function (err) {
            _this.globals.dismissLoader();
            _this.initialized = true;
            console.error(err);
            _this.globals.displayAlert('Error encountered', "An error occurred when trying to load the locations. Please check the console logs for more information.");
        });
    };
    ;
    LocationListPage.prototype.loadLocationsWithoutAuth = function () {
        var _this = this;
        this.locations = [];
        this.noAuthClient.getClient().locationsList().subscribe(function (data) {
            // this.locations = data.items
            // sort by name
            _this.locations = data.items.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            _this.globals.dismissLoader();
            _this.initialized = true;
        }, function (err) {
            _this.globals.dismissLoader();
            _this.initialized = true;
            console.error(err);
            _this.globals.displayAlert('Error encountered', "An error occurred when trying to load the locations. Please check the console logs for more information.");
        });
    };
    ;
    LocationListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_10__services_logger_service__["a" /* Logger */].banner("Locations");
        this.initialized = true;
        this.locations = [];
        if (__WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* Config */]['DEVELOPER_MODE']) {
            this.initialized = false;
            if (__WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["b" /* UserLoginService */].getAwsAccessKey() != null) {
                // if (CognitoUtil.getUserState() === UserState.SignedIn) {
                // console.log(AWS.config.credentials);
                __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["b" /* UserLoginService */].getAwsCredentials()
                    .then(function () {
                    _this.globals.displayLoader("Loading...");
                    _this.loadLocationsWithAuth();
                })
                    .catch(function (err) {
                    console.log("ERROR: Unable to load locations!");
                    console.log(err);
                });
            }
        }
    };
    LocationListPage.prototype.ionViewDidLeave = function () {
        this.initialized = false;
        this.locations = [];
    };
    return LocationListPage;
}());
LocationListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\location-list\location-list.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Locations\'" [showSignup]="false"></navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div padding *ngIf="globals.userId == \'\'">\n\n    <p><b>You must be signed in to view available rooms and desks.</b></p>\n\n    <p>Click the "SIGN IN" button in the upper right of the screen, to sign in to the app.</p>\n\n    <p>Haven\'t registered yet? Click on the "REGISTER" button to register as a new user.</p>\n\n  </div>\n\n\n\n  <div *ngIf="globals.userId != \'\'">\n\n\n\n    <div align=\'center\' *ngIf="initialized">\n\n      <button ion-button (click)="loadLocationsWithoutAuth()" type="submit" color="light" style=\'text-transform:none\'>Load Locations without Auth</button>\n\n    </div>\n\n    <div align=\'center\' *ngIf="initialized">\n\n      <button ion-button (click)="loadLocationsWithAuth()" type="submit" color="light" style=\'text-transform:none\'>Load Locations with Auth</button>\n\n    </div>\n\n\n\n    <ion-list>\n\n      <ion-item *ngFor="let location of locations">\n\n        <ion-thumbnail item-left (click)="gotoResourceListPage(location)">\n\n          <img src="{{location.imageUrl}}">\n\n        </ion-thumbnail>\n\n        <!--<ion-icon name="compass" item-left (click)="gotoResourceListPage(location)"></ion-icon>-->\n\n        <h2 (click)="gotoResourceListPage(location)">{{location.name}}</h2>\n\n        <p (click)="gotoResourceListPage(location)">{{location.description}}</p>\n\n        <button *ngIf="globals.displayAdminFeatures()" (click)="displayDeleteLocationConfirmation(location.locationId, location.name)" ion-button color="danger" item-right>Delete</button>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <div align=\'center\' *ngIf="globals.displayAdminFeatures() && initialized">\n\n      <button ion-button [navPush]="locationAddPage" type="submit" color="primary">Add a location</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\location-list\location-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_8__services_spacefinder_api_service__["c" /* NoAuthorizationClient */], __WEBPACK_IMPORTED_MODULE_8__services_spacefinder_api_service__["a" /* CustomAuthorizerClient */], __WEBPACK_IMPORTED_MODULE_8__services_spacefinder_api_service__["d" /* UserPoolsAuthorizerClient */]])
], LocationListPage);

//# sourceMappingURL=location-list.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resource_add_resource_add__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resource_availability_resource_availability__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_spacefinder_api_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ResourceListPage = (function () {
    function ResourceListPage(navCtrl, navParams, globals, customAuthClient, iamAuthClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globals = globals;
        this.customAuthClient = customAuthClient;
        this.iamAuthClient = iamAuthClient;
        this.initialized = false;
        this.accountSigninPage = __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__["a" /* AccountSigninPage */];
        this.resourceAddPage = __WEBPACK_IMPORTED_MODULE_4__resource_add_resource_add__["a" /* ResourceAddPage */];
        this.location = null;
        this.resources = [];
        this.location = navParams.data;
    }
    ResourceListPage.prototype.displayDeleteResourceConfirmation = function (resourceId, resourceName) {
        var _this = this;
        console.log("Deleting resourceID " + resourceId);
        var confirm = this.globals.getAlertController().create({
            title: 'Delete resource?',
            message: "Are you sure you want to delete [<b>" + resourceName + "</b>]? All bookings associated with the resource will also be deleted!",
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.deleteResource(_this.location.locationId, resourceId)
                            .then(function () {
                            _this.globals.dismissLoader();
                            _this.globals.displayToast("[" + resourceName + "] has been successfully deleted");
                        })
                            .catch(function (err) {
                            _this.globals.dismissLoader();
                            _this.globals.displayAlert('Error encountered', "Attempt to delete resource failed. Please check the console logs for more information.");
                            console.error(err);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ResourceListPage.prototype.deleteResource = function (locationId, resourceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // delete from the database
            _this.globals.displayLoader("Deleting...");
            _this.customAuthClient.getClient().resourcesDelete(locationId, resourceId).subscribe(function () {
                // remove the item from the resources array
                var index = _this.resources.findIndex(function (resource) { return resource.resourceId == resourceId; });
                if (index > -1) {
                    _this.resources.splice(index, 1);
                }
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    ResourceListPage.prototype.loadResources = function (locationId) {
        var _this = this;
        this.iamAuthClient.getClient().resourcesList(locationId).subscribe(function (data) {
            _this.resources = data.items.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            _this.globals.dismissLoader();
            _this.initialized = true;
        }, function (err) { console.error(err); });
    };
    ;
    ResourceListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8__services_logger_service__["a" /* Logger */].banner("Resources");
        this.initialized = true;
        this.resources = [];
        if (__WEBPACK_IMPORTED_MODULE_5__services_account_management_service__["b" /* UserLoginService */].getAwsAccessKey() != null) {
            this.initialized = false;
            // if (CognitoUtil.getUserState() === UserState.SignedIn) {
            // console.log(AWS.config.credentials);
            __WEBPACK_IMPORTED_MODULE_5__services_account_management_service__["b" /* UserLoginService */].getAwsCredentials()
                .then(function () {
                _this.globals.displayLoader("Loading...");
                _this.loadResources(_this.location.locationId);
            })
                .catch(function (err) {
                console.log("ERROR: Unable to fetch AWS credentials!");
                console.log(err);
            });
        }
    };
    ResourceListPage.prototype.ionViewDidLeave = function () {
        this.initialized = false;
        this.resources = [];
    };
    ResourceListPage.prototype.gotoResourceAvailabilityPage = function (location, resource) {
        var navParams = {
            "location": location,
            "resource": resource
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resource_availability_resource_availability__["a" /* ResourceAvailabilityPage */], navParams);
    };
    ResourceListPage.prototype.gotoResourceAddPage = function (location) {
        var navParams = {
            "location": location,
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resource_add_resource_add__["a" /* ResourceAddPage */], navParams);
    };
    return ResourceListPage;
}());
ResourceListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\resource-list\resource-list.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Resources\'" [showSignup]="false"></navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div padding *ngIf="globals.userId == \'\'">\n\n    <p><b>You must be signed in to view available rooms and desks.</b></p>\n\n    <p>Click the "SIGN IN" button in the upper right of the screen, to sign in to the app.</p>\n\n    <p>Haven\'t registered yet? Click on the "Account" tab to register as a new user.</p>\n\n  </div>\n\n\n\n  <div *ngIf="globals.userId != \'\'">\n\n    <ion-list>\n\n      <ion-list-header style="color:white; background-color: #89bdd3 !important">\n\n        <b>{{location.name}}</b>\n\n      </ion-list-header>\n\n      <ion-item *ngFor="let resource of resources">\n\n        <ion-avatar item-left (click)="gotoResourceAvailabilityPage(location, resource)">\n\n          <img src="assets/images/noun_46945_cc.png" *ngIf="resource.type == \'room\'" width="170"/>\n\n          <img src="assets/images/noun_82305_cc.png" *ngIf="resource.type == \'desk\'" width="170"/>\n\n        </ion-avatar>\n\n        <h2 (click)="gotoResourceAvailabilityPage(location, resource)">{{resource.name}}</h2>\n\n        <p (click)="gotoResourceAvailabilityPage(location, resource)">{{resource.description}}</p>\n\n         <button *ngIf="globals.displayAdminFeatures()" (click)="displayDeleteResourceConfirmation(resource.resourceId, resource.name)" ion-button color="danger" item-right>Delete</button>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <div align=\'center\' *ngIf="globals.displayAdminFeatures() && initialized">\n\n      <button ion-button (click)="gotoResourceAddPage(location)" type="submit" color="primary">Add a resource</button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\resource-list\resource-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_7__services_spacefinder_api_service__["a" /* CustomAuthorizerClient */], __WEBPACK_IMPORTED_MODULE_7__services_spacefinder_api_service__["b" /* IamAuthorizerClient */]])
], ResourceListPage);

//# sourceMappingURL=resource-list.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_spacefinder_api_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResourceAddPage = (function () {
    function ResourceAddPage(navCtrl, navParams, globals, customAuthClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globals = globals;
        this.customAuthClient = customAuthClient;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        this.location = null;
        this.formData = {
            type: "room",
            name: "",
            description: ""
        };
        this.submitted = false;
        this.location = navParams.data.location;
    }
    ResourceAddPage.prototype.onSubmit = function (form) {
        this.submitted = true;
        if (form && form.valid) {
            this.addResource(form);
        }
    };
    ResourceAddPage.prototype.addResource = function (form) {
        var _this = this;
        this.submitted = true;
        if (form && this.formData.name) {
            var resource = {
                locationId: this.location.locationId,
                name: this.formData.name,
                type: this.formData.type,
                description: this.formData.description
            };
            this.globals.displayLoader("Adding...");
            this.customAuthClient.getClient().resourcesCreate(this.location.locationId, resource).subscribe(function () {
                _this.globals.dismissLoader();
                _this.globals.displayToast("Resource successfully added.");
                _this.navCtrl.pop();
            }, function (err) {
                _this.globals.dismissLoader();
                _this.globals.displayAlert('Error encountered', "Attempt to add resource failed. An error occurred. Please check the console logs for more information.");
                console.log(err);
            });
        }
    };
    ResourceAddPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* Logger */].banner("Add a Resource");
    };
    return ResourceAddPage;
}());
ResourceAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\resource-add\resource-add.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Add a Resource\'" [showSignup]="false"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <!--\n\n  <p *ngIf="submitted" style="color: #ea6153;">Please fill out all details accurately.</p>-->\n\n  <ion-list>\n\n    <form #theForm="ngForm" novalidate>\n\n\n\n      <ion-item>\n\n        <ion-label>Resource type</ion-label>\n\n        <ion-select [(ngModel)]="formData.type" ngControl="type" name="type" #type="ngModel">\n\n          <ion-option value="room" selected>Conference room</ion-option>\n\n          <ion-option value="desk">Desk</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Resource name</ion-label>\n\n        <ion-input [(ngModel)]="formData.name" ngControl="name" name="name" type="text" #name="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="name.valid || !submitted" color="danger" padding-left>\n\n        Resource name is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Description</ion-label>\n\n        <ion-input [(ngModel)]="formData.description" ngControl="description" name="description" type="text" #description="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="description.valid || !submitted" color="danger" padding-left>\n\n        Description is required\n\n      </p>\n\n\n\n    </form>\n\n  </ion-list>\n\n\n\n  <br>\n\n\n\n  <ion-row responsive-sm>\n\n    <ion-col>\n\n      <button ion-button (click)="onSubmit(theForm)" type="submit" primary block>Add resource</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\resource-add\resource-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_4__services_spacefinder_api_service__["a" /* CustomAuthorizerClient */]])
], ResourceAddPage);

//# sourceMappingURL=resource-add.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceAvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_spacefinder_api_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResourceAvailabilityPage = (function () {
    function ResourceAvailabilityPage(navCtrl, navParams, globals, authClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globals = globals;
        this.authClient = authClient;
        this.initialized = false;
        this.accountSigninPage = __WEBPACK_IMPORTED_MODULE_3__account_signin_account_signin__["a" /* AccountSigninPage */];
        this.location = null;
        this.resource = null;
        this.bookings = [];
        this.availableTimeslots = [
            "6am - 7am",
            "7am - 8am",
            "8am - 9am",
            "9am - 10am",
            "10am - 11am",
            "11am - noon",
            "noon - 1pm",
            "1pm - 2pm",
            "2pm - 3pm",
            "3pm - 4pm",
            "4pm - 5pm",
            "5pm - 6pm",
            "6pm - 7pm",
            "7pm - 8pm",
            "8pm - 9pm",
        ];
        this.timeslotMappings = {
            "6am - 7am": { start: "T06:00:00.000Z", end: "T07:00:00.000Z" },
            "7am - 8am": { start: "T07:00:00.000Z", end: "T08:00:00.000Z" },
            "8am - 9am": { start: "T08:00:00.000Z", end: "T09:00:00.000Z" },
            "9am - 10am": { start: "T09:00:00.000Z", end: "T10:00:00.000Z" },
            "10am - 11am": { start: "T10:00:00.000Z", end: "T11:00:00.000Z" },
            "11am - noon": { start: "T11:00:00.000Z", end: "T12:00:00.000Z" },
            "noon - 1pm": { start: "T12:00:00.000Z", end: "T13:00:00.000Z" },
            "1pm - 2pm": { start: "T13:00:00.000Z", end: "T14:00:00.000Z" },
            "2pm - 3pm": { start: "T14:00:00.000Z", end: "T15:00:00.000Z" },
            "3pm - 4pm": { start: "T15:00:00.000Z", end: "T16:00:00.000Z" },
            "4pm - 5pm": { start: "T16:00:00.000Z", end: "T17:00:00.000Z" },
            "5pm - 6pm": { start: "T17:00:00.000Z", end: "T18:00:00.000Z" },
            "6pm - 7pm": { start: "T18:00:00.000Z", end: "T19:00:00.000Z" },
            "7pm - 8pm": { start: "T19:00:00.000Z", end: "T20:00:00.000Z" },
            "8pm - 9pm": { start: "T20:00:00.000Z", end: "T21:00:00.000Z" },
        };
        this.location = navParams.data.location;
        this.resource = navParams.data.resource;
        this.date = (new Date()).toISOString();
        this.todaydate = (new Date()).toISOString();
    }
    ResourceAvailabilityPage.prototype.getBooking = function (timeslot) {
        // Date string manipulation to calculate the startTime that we'll match on
        var date = new Date(Date.parse(this.date));
        var datestamp = "" + date.getUTCFullYear() + "-" + (date.getUTCMonth() < 10 ? "0" : "") + (date.getUTCMonth() + 1) + "-" + (date.getUTCDate() < 10 ? "0" : "") + date.getUTCDate();
        var startTimeIsoTimestamp = datestamp + this.timeslotMappings[timeslot].start;
        var startTimeEpochTime = new Date(startTimeIsoTimestamp).getTime();
        // find the booking that matches that start time
        var index = this.bookings.findIndex(function (booking) {
            return booking.startTimeEpochTime === startTimeEpochTime;
        });
        if (index > -1) {
            return this.bookings[index];
        }
        else {
            return null;
        }
    };
    ResourceAvailabilityPage.prototype.displayBookingDialog = function (resourceId, timeslot) {
        var _this = this;
        var dialog = this.globals.getAlertController().create({
            title: 'Book resource?',
            message: "Are you sure you want to book the [<b>" + timeslot + "</b>] time slot?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.bookResource(resourceId, timeslot)
                            .then(function () {
                            _this.globals.dismissLoader();
                            _this.globals.displayToast("[" + timeslot + "] was successfully booked.");
                        })
                            .catch(function (err) {
                            _this.globals.dismissLoader();
                            _this.globals.displayAlert('Error encountered', 'Booking attempt failed. Please check the console logs for more information.');
                            console.error(err);
                        });
                    }
                }
            ]
        });
        dialog.present();
    };
    ResourceAvailabilityPage.prototype.changeDate = function (date) {
        this.globals.displayLoader("Loading...");
        this.loadBookings(this.location.locationId, this.resource.resourceId);
    };
    ResourceAvailabilityPage.prototype.bookResource = function (resourceId, timeslot) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.globals.displayLoader("Booking...");
            // Date string manipulation to calculate the startTime and endTime values, based on the timeslot. All dates are UTC.
            var date = new Date(Date.parse(_this.date));
            var datestamp = "" + date.getUTCFullYear() + "-" + (date.getUTCMonth() < 9 ? "0" : "") + (date.getUTCMonth() + 1) + "-" + (date.getUTCDate() < 10 ? "0" : "") + date.getUTCDate();
            var startTimeIsoTimestamp = datestamp + _this.timeslotMappings[timeslot].start;
            var endTimeIsoTimestamp = datestamp + _this.timeslotMappings[timeslot].end;
            var booking = {
                locationId: _this.location.locationId,
                locationName: _this.location.name,
                resourceId: _this.resource.resourceId,
                resourceName: _this.resource.name,
                resourceDescription: _this.resource.description,
                startTimeIsoTimestamp: startTimeIsoTimestamp,
                startTimeEpochTime: Date.parse(startTimeIsoTimestamp),
                endTimeIsoTimestamp: endTimeIsoTimestamp,
                endTimeEpochTime: Date.parse(endTimeIsoTimestamp),
                timeslot: timeslot,
                userId: _this.globals.getUserId(),
                userFirstName: _this.globals.getUserFirstName(),
                userLastName: _this.globals.getUserLastName(),
            };
            _this.authClient.getClient().bookingsCreate(_this.globals.getUserId(), booking).subscribe(function (data) {
                booking.bookingId = data.bookingId;
                _this.bookings.push(booking);
                resolve();
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ResourceAvailabilityPage.prototype.displayCancelDialog = function (timeslot) {
        var _this = this;
        var bookingId = this.getBooking(timeslot).bookingId;
        console.log("Cancelling bookingId " + bookingId);
        var dialog = this.globals.getAlertController().create({
            title: 'Cancel booking?',
            message: "Are you sure you want to cancel the booking for <b>" + timeslot + "</b>?",
            buttons: [
                {
                    text: 'No',
                },
                {
                    text: 'Yes, cancel the booking',
                    handler: function () {
                        _this.cancelBooking(bookingId)
                            .then(function () {
                            _this.globals.dismissLoader();
                            _this.globals.displayToast("[" + timeslot + "] booking was successfully cancelled.");
                        })
                            .catch(function (err) {
                            _this.globals.dismissLoader();
                            _this.globals.displayAlert('Error encountered', "Cancellation attempt failed. Please check the console logs for more information.");
                            console.error(err);
                        });
                    }
                }
            ]
        });
        dialog.present();
    };
    ResourceAvailabilityPage.prototype.cancelBooking = function (bookingId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.globals.displayLoader("Cancelling...");
            _this.authClient.getClient().bookingsDelete(_this.globals.getUserId(), bookingId).subscribe(function (data) {
                // remove the item from the in-memory array
                var index = _this.bookings.findIndex(function (booking) {
                    return booking.bookingId == bookingId;
                });
                if (index > -1) {
                    _this.bookings.splice(index, 1);
                    resolve();
                }
                else {
                    var err = "Could not retrieve the booking info.";
                    reject(err);
                }
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ResourceAvailabilityPage.prototype.loadBookings = function (locationId, resourceId) {
        var _this = this;
        this.authClient.getClient().bookingsListByResourceId(locationId, resourceId).subscribe(function (data) {
            _this.bookings = data.items;
            _this.globals.dismissLoader();
            _this.initialized = true;
        }, function (err) {
            console.error(err);
        });
    };
    ;
    ResourceAvailabilityPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6__services_logger_service__["a" /* Logger */].banner("Resource Availability");
        this.initialized = true;
        if (__WEBPACK_IMPORTED_MODULE_4__services_account_management_service__["b" /* UserLoginService */].getAwsAccessKey() != null) {
            this.initialized = false;
            __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__["b" /* UserLoginService */].getAwsCredentials()
                .then(function () {
                _this.globals.displayLoader("Loading...");
                _this.loadBookings(_this.location.locationId, _this.resource.resourceId); // TODO
            })
                .catch(function (err) {
                console.log("ERROR: Unable to load bookings!");
                console.log(err);
            });
        }
    };
    ResourceAvailabilityPage.prototype.ionViewDidLeave = function () {
        this.initialized = false;
        this.bookings = [];
    };
    return ResourceAvailabilityPage;
}());
ResourceAvailabilityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\resource-availability\resource-availability.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Resource Availability\'" [showSignup]="false"></navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div padding *ngIf="globals.userId == \'\'">\n\n    <p><b>You must be signed in to view available rooms and desks.</b></p>\n\n    <p>Click the "SIGN IN" button in the upper right of the screen, to sign in to the app.</p>\n\n    <p>Haven\'t registered yet? Click on the "Account" tab to register as a new user.</p>\n\n  </div>\n\n\n\n  <div *ngIf="globals.userId != \'\'">\n\n\n\n    <ion-list>\n\n      <ion-list-header style="color:white; background-color: #89bdd3 !important">\n\n        <b>{{location.name}} > {{resource.name}}</b>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>Showing availability for: </ion-label>\n\n        <ion-datetime displayFormat="MMM DD, YYYY" min="{{todaydate}}" max="2018-12-31"  [(ngModel)]="date" (change)="changeDate(date)"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item *ngFor="let timeslot of availableTimeslots">\n\n        <!-- TODO: want to re-use the Angular2 template variable getBooking(timeslot) but haven\'t figure it how yet -->\n\n        <div item-left style=\'width:25%\'>{{timeslot}}</div>\n\n        <h2 *ngIf="initialized && !getBooking(timeslot)">&nbsp;&nbsp;&nbsp;<b style=\'color:green\'>AVAILABLE</b></h2>\n\n        <h2 *ngIf="initialized && getBooking(timeslot)" style=\'color:#999999\'>&nbsp;&nbsp;&nbsp;{{getBooking(timeslot).userFirstName}} {{getBooking(timeslot).userLastName}}</h2>\n\n        <h2 *ngIf="!initialized">&nbsp;&nbsp;&nbsp;</h2>\n\n        <button *ngIf="initialized && !getBooking(timeslot)" ion-button color="light" item-right  (click)="displayBookingDialog(resource.resourceId, timeslot)">BOOK</button>\n\n        <button *ngIf="initialized && (getBooking(timeslot) && (globals.displayAdminFeatures() || (getBooking(timeslot).userId == globals.getUserId())))" (click)="displayCancelDialog(timeslot)" ion-button color="danger" item-right>Cancel</button>\n\n        <button style=\'display:none\' *ngIf="!initialized" ion-button item-right></button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\resource-availability\resource-availability.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_5__services_spacefinder_api_service__["b" /* IamAuthorizerClient */]])
], ResourceAvailabilityPage);

//# sourceMappingURL=resource-availability.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_signin_account_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_signup_account_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_change_password_account_change_password__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_add_location_add__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AccountPage = (function () {
    function AccountPage(navCtrl, globals, platform) {
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.viewAdminFeatures = false;
        this.accountSigninPage = __WEBPACK_IMPORTED_MODULE_2__account_signin_account_signin__["a" /* AccountSigninPage */];
        this.accountSignupPage = __WEBPACK_IMPORTED_MODULE_3__account_signup_account_signup__["a" /* AccountSignupPage */];
        this.accountChangePasswordPage = __WEBPACK_IMPORTED_MODULE_4__account_change_password_account_change_password__["a" /* AccountChangePasswordPage */];
        this.locationAddPage = __WEBPACK_IMPORTED_MODULE_5__location_add_location_add__["a" /* LocationAddPage */];
        this.imageUploadEventListenerAttached = false;
        this.profileImageURI = "https://s3-" + __WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* Config */].REGION + ".amazonaws.com/" + __WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* Config */].PROFILE_IMAGES_S3_BUCKET + "/test.jpg";
        this.profileImageDisplay = false;
        this.submitted = false;
        this.platform = platform;
    }
    AccountPage.prototype.setViewAdmin = function (event) {
        // console.log(this.viewAdminFeatures);
        this.globals.setViewAdminFeaturesOverride(this.viewAdminFeatures);
    };
    // code from: http://stackoverflow.com/questions/29644474/how-to-be-able-to-convert-image-to-base64-and-avoid-same-origin-policy
    AccountPage.prototype.convertImgToBase64URL = function (url, options, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            var canvas = document.createElement('CANVAS');
            var cvs = canvas;
            var ctx = cvs.getContext('2d');
            cvs.height = options.height;
            cvs.width = options.width;
            ctx.drawImage(this, 0, 0);
            var dataURL = cvs.toDataURL(outputFormat);
            callback(dataURL);
            canvas = null;
        };
        img.src = url;
        return url;
    };
    AccountPage.prototype.dataURItoBlob = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    AccountPage.prototype.generateHash = function (str) {
        // code adapted from: https://github.com/darkskyapp/string-hash
        var hash = 5381, i = str.length;
        while (i) {
            hash = (hash * 33) ^ str.charCodeAt(--i);
        }
        return hash >>> 0;
    };
    AccountPage.prototype.uploadFileToS3 = function (file, key) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9__services_logger_service__["a" /* Logger */].heading('Uploading image to S3');
        this.globals.displayLoader('Uploading image to Amazon S3...', 10000);
        var bucketName = __WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* Config */].PROFILE_IMAGES_S3_BUCKET;
        console.log("Attempting image upload to " + bucketName + "/" + key);
        var s3bucket = new AWS.S3({ region: __WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* Config */].REGION, params: { Bucket: bucketName } });
        var params = { Key: key, Body: file };
        s3bucket.upload(params, function (err, data) {
            _this.globals.dismissLoader();
            if (err) {
                var errorMessage = "Error uploading image to S3: " + err;
                _this.globals.displayAlert('Error encountered', errorMessage);
                console.log(errorMessage);
                console.log(err);
            }
            else {
                console.log("Successfully uploaded image to S3.");
                _this.profileImageURI = "https://s3.amazonaws.com/" + __WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* Config */].PROFILE_IMAGES_S3_BUCKET + "/" + key;
                console.log("Image can be viewed at: " + _this.profileImageURI);
                _this.profileImageDisplay = true;
            }
        });
    };
    AccountPage.prototype.selectImage = function () {
        // display a different FileSelector experience,
        // depending on whether the app is running on a mobile phone or a web browser
        if (this.platform.is('cordova')) {
            this.selectImageUsingNativeImageSelector();
        }
        else {
            this.selectImageUsingBrowserFileSelector();
        }
    };
    AccountPage.prototype.selectImageUsingBrowserFileSelector = function () {
        var selectedFiles = document.getElementById('imageUpload');
        var files = selectedFiles.files;
        if (selectedFiles.value !== '' && files.length > 0) {
            var filename = this.generateUniqueFilenameForS3Upload(files[0].name);
            this.uploadFileToS3(files[0], filename);
        }
        else {
            this.globals.dismissLoader();
            var errorMessage = 'Please select an image to upload first.';
            this.globals.displayAlert('Error encountered', errorMessage);
            console.log(errorMessage);
        }
        // reset the file selector UI
        var imageUploadFormSubmit = document.getElementById('imageUploadSubmit');
        imageUploadFormSubmit.style.visibility = 'hidden';
    };
    AccountPage.prototype.generateUniqueFilenameForS3Upload = function (originalFilename) {
        console.log(originalFilename);
        return this.globals.getUnencodedUserId() + "/" + this.generateHash(originalFilename) + "-" + (new Date()).getTime() + "." + originalFilename.split('.').pop();
    };
    AccountPage.prototype.selectImageUsingNativeImageSelector = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9__services_logger_service__["a" /* Logger */].heading('Displaying ImageSelector');
        // this.profileImageURI = 'https://s3-${Config.PROFILE_IMAGES_S3_BUCKET_REGION}.amazonaws.com/${Config.PROFILE_IMAGES_S3_BUCKET}/test.jpg'; // TODO
        try {
            var options_1 = {
                maximumImagesCount: 1,
                width: 200,
                height: 200,
                quality: 100
            };
            // code adapted from: http://blog.ionic.io/ionic-native-accessing-ios-photos-and-android-gallery-part-2/
            new __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */]().getPictures(options_1)
                .then(function (file_uris) {
                try {
                    if (file_uris !== null && file_uris !== '' && (file_uris.length > 0)) {
                        console.log("Image selected: [" + file_uris + "]");
                        console.log("Converting to Base64 image");
                        _this.convertImgToBase64URL(file_uris[0], options_1, function (base64Img) {
                            // console.log(base64Img);
                            console.log('Converting to Blob');
                            var blob = _this.dataURItoBlob(base64Img);
                            // generate a unique filename
                            var filename = _this.generateUniqueFilenameForS3Upload(file_uris[0]);
                            _this.uploadFileToS3(blob, filename);
                        }, null);
                    }
                }
                catch (err) {
                    throw (err);
                }
            }, function (err) {
                throw err;
            });
        }
        catch (err) {
            this.globals.dismissLoader();
            var errorMessage = 'Could not retrieve an image using the ImagePicker';
            this.globals.displayAlert('Error encountered', errorMessage);
            console.log(errorMessage);
            console.log(err);
        }
    };
    AccountPage.prototype.attachImageUploadEventListener = function () {
        if (this.platform.is('cordova')) {
            // Check If Cordova/Mobile. If it's mobile, then exit,
            // since this feature only applies to the Web experience, not mobile.
            // This event listener is a browser UI workaround, so that
            // we don't have to use the browser's standard, non-attractive FileSelector control
            return;
        }
        // check if the eventListener was already previously attached
        if (this.imageUploadEventListenerAttached) {
            return;
        }
        // console.log("Attaching event listener...");
        var imageUploadFormField = document.getElementById('imageUpload');
        var imageUploadFormSubmit = document.getElementById('imageUploadSubmit');
        // try again later if the DOM isn't fully ready yet
        if (imageUploadFormField == null) {
            return;
        }
        this.imageUploadEventListenerAttached = true;
        imageUploadFormField.addEventListener('change', function (e) {
            var fileName = e.target.value.split('\\').pop();
            if (fileName === null || fileName === '') {
                // reset the file selector UI
                var imageUploadFormSubmit_1 = document.getElementById('imageUploadSubmit');
                imageUploadFormSubmit_1.style.visibility = 'hidden';
            }
            else {
                // select your implementation approach (show upload button or not?)
                var showUploadButton = false;
                if (showUploadButton) {
                    imageUploadFormSubmit.querySelector('span').innerHTML = "UPLOAD (" + fileName + ")";
                    imageUploadFormSubmit.style.visibility = 'visible';
                }
                else {
                    // simulate the Upload button being selected
                    var evObj = document.createEvent('Events');
                    evObj.initEvent('click', true, false);
                    imageUploadFormSubmit.dispatchEvent(evObj);
                }
            }
        });
    };
    AccountPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_9__services_logger_service__["a" /* Logger */].banner("Account");
        this.attachImageUploadEventListener();
        this.viewAdminFeatures = this.globals.getViewAdminFeaturesOverride();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account\account.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'My Account\'"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<div *ngIf="globals.userId == \'\'">\n\n  <h5>Register</h5>\n\n  <p>Members can book conference rooms, desks, and other resources. Signing up is free, and only takes a minute.</p>\n\n  <button ion-button [navPush]="accountSignupPage" type="submit" primary block>Register</button>\n\n</div>\n\n\n\n\n\n<div *ngIf="globals.userId != \'\'">\n\n\n\n  <h5>Your profile image</h5>\n\n  <div *ngIf="profileImageDisplay">\n\n    <img src="{{profileImageURI}}" width="200" border="1"/><br/>\n\n  </div>\n\n\n\n  <div *ngIf="platform.is(\'cordova\')">\n\n    <button ion-button (click)="selectImage()" type="submit" color="primary">Select image</button>\n\n  </div>\n\n  <div *ngIf="!platform.is(\'cordova\')">\n\n    <input style=\'font-size:12px; width: 0.1px; height: 0.1px; opacity: 0; overflow: hidden; position: absolute; z-index: -1;\' id="imageUpload" type="file" accept="image/*">\n\n    <label ion-button (click)="attachImageUploadEventListener()" color="primary" style=\'none;display: inline-block;\' for="imageUpload" id="imageUploadLabel">Select image</label>\n\n    <button ion-button (click)="selectImage()" style=\'visibility:hidden; text-transform:none;\' type="submit" color="primary" id="imageUploadSubmit">UPLOAD</button>\n\n  </div>\n\n\n\n  <br/><br/>\n\n\n\n  <h5>Change password</h5>\n\n  As a general security best practice, we recommend changing your password every few months.<br/>\n\n  <button ion-button  [navPush]="accountChangePasswordPage" type="submit" color="primary">Change password</button>\n\n  <br/><br/>\n\n\n\n  <h5>View Admin features?</h5>\n\n  <span *ngIf="globals.isAdminRole()">\n\n    You are currently logged in with Admin privileges. If you wish, you can toggle off the display of Admin-only features, to see how the app appears to non-Admin users.\'\n\n  </span>\n\n  <span *ngIf="!globals.isAdminRole()">\n\n    You are currently logged in without Admin privileges. You can enable the display of Admin-only features, however note that due to API authorization settings, the Admin-only API calls will still not work.\n\n  </span>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>View Admin features (<span *ngIf="viewAdminFeatures">enabled</span><span *ngIf="!viewAdminFeatures">disabled</span>)</ion-label>\n\n      <ion-toggle (click)="setViewAdmin($event)" (ionChange)="setViewAdmin($event)" [(ngModel)]="viewAdminFeatures"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n  <br/><br/>\n\n\n\n\n\n  <h5>Image credits</h5>\n\n  Attribution for images used in this app.\n\n  <ul>\n\n    <li>"Conference room" photo by "Breather" used with permission under Creative Commons License from: https://unsplash.com/photos/bjhrzvzZeq4.</li>\n\n    <li>"Conference room" icon created by Dan Hetteix for The Noun Project (https://thenounproject.com/icon/46945/), used with permission under Creative Commons License.</li>\n\n    <li>"Desk" icon created by iconoci for The Noun Project (https://thenounproject.com/icon/82305/), used with permission under Creative Commons License</li>\n\n  </ul>\n\n  <!--\n\n  <br/><br/><br/>\n\n  <ion-card class=\'signedin\'>\n\n    <ion-card-content>\n\n      You are currently signed in as a registered user.<br/>\n\n      <ul>\n\n        <li>Username: {{globals.userName}}</li>\n\n        <li>First name: _______</li>\n\n        <li>Last name: _______</li>\n\n        <li>Email address: _______</li>\n\n        <li>Administrator role? No</li>\n\n        <li>AWS Cognito Federated Identity user ID: ____</li>\n\n        <li>AWS Cognito generated JSON Web Token (JWT): ____</li>\n\n        <li>AWS Access Key ID: ____</li>\n\n        <li>AWS Secret Key: ____</li>\n\n        <li>AWS Session Token: ____</li>\n\n      </ul>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  -->\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountChangePasswordPage = (function () {
    function AccountChangePasswordPage(navCtrl, globals) {
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.formData = {};
        this.submitted = false;
        // empty
    }
    AccountChangePasswordPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form && form.valid) {
            console.log('Form User data' + this.formData);
            __WEBPACK_IMPORTED_MODULE_3__services_account_management_service__["b" /* UserLoginService */].changePassword(this.formData.currentPassword, this.formData.newPassword)
                .then(function (data) {
                // Success
                console.log("Password successfully changed");
                var handler = function () {
                    // go back to the Signin screen
                    _this.navCtrl.pop();
                };
                _this.globals.displayAlert('Password changed', 'Your password has been successfully changed.', handler);
            }).catch(function (err) {
                // Failure
                console.log('Failure when attempting to change password', err);
                console.log(err);
                _this.globals.displayAlert('Error encountered', "There was a problem changing your password: [" + err.name + ". " + err.message + "]. Please try again.", null);
            });
        }
    };
    AccountChangePasswordPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_4__services_logger_service__["a" /* Logger */].banner("Change Password");
    };
    return AccountChangePasswordPage;
}());
AccountChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-change-password\account-change-password.html"*/'<ion-header>\n\n  <navbar [title]="globals.userId === \'\' ? \'\': \'Change Password\'"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <!--<p>To change your password to a new one, please enter your current password, and choose a new password.</p>-->\n\n\n\n    <form #changePasswordForm="ngForm" novalidate>\n\n      <ion-item>\n\n        <ion-label floating>Current password</ion-label>\n\n        <ion-input [(ngModel)]="formData.currentPassword" name="currentPassword" type="password" #currentPassword="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="currentPassword.valid || submitted == false" color="danger" padding-left>\n\n        Current password is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>New password</ion-label>\n\n        <ion-input [(ngModel)]="formData.newPassword" name="newPassword" type="password" #newPassword="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="newPassword.valid || submitted == false" color="danger" padding-left>\n\n        New password is required\n\n      </p>\n\n\n\n    </form>\n\n  </ion-list>\n\n\n\n  <br>\n\n\n\n  <div class="item item-input-inset">\n\n  <button ion-button (click)="onSubmit(changePasswordForm)" type="submit" primary block>Change password</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-change-password\account-change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_global_state_service__["a" /* GlobalStateService */]])
], AccountChangePasswordPage);

//# sourceMappingURL=account-change-password.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_account_signin_account_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_signup_account_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_logger_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_browser_tab__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var NavbarComponent = (function () {
    function NavbarComponent(navCtrl, globals, browserTab, deeplinks, http, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.browserTab = browserTab;
        this.deeplinks = deeplinks;
        this.http = http;
        this.platform = platform;
        this.showSignin = true;
        this.showSignup = true;
        this.accountSigninPage = __WEBPACK_IMPORTED_MODULE_3__pages_account_signin_account_signin__["a" /* AccountSigninPage */];
        this.accountSignupPage = __WEBPACK_IMPORTED_MODULE_4__pages_account_signup_account_signup__["a" /* AccountSignupPage */];
        this.alertCtrl = this.globals.getAlertController();
        this.initialized = false;
        this.cognitoUtil = null;
        // hack workaround: instantiation so that the code can be loaded in time for the IonViewDidEnter() method
        this.cognitoUtil = new __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["a" /* CognitoUtil */]();
        this.platform.ready().then(function (readySource) {
            // Platform now ready, execute any required native code
            if (_this.platform.is('cordova')) {
                // App running on mobile device; Deep linking supported with custom URL schemes
                var platform_1 = 'mobile';
                _this.deeplinks.route({
                    '/callback': __WEBPACK_IMPORTED_MODULE_3__pages_account_signin_account_signin__["a" /* AccountSigninPage */]
                }).subscribe(function (match) {
                    console.log('Successfully invoked mobile callback deeplink route', match);
                    _this.completeSignIn(match.$args.code, platform_1, http);
                }, function (nomatch) {
                    console.error('Got a deeplink that did not match known routes', nomatch);
                });
            }
            else {
                // App running in browser without Cordova. Deep linking not supported, so redirects used instead
                var platform_2 = 'web';
                if (window.location.search) {
                    var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* URLSearchParams */](window.location.search);
                    var authCode = params.get('?code');
                    console.log('authCode', authCode);
                    _this.completeSignIn(authCode, platform_2, http).then(function () {
                        // Reset query parameters from URL in browser
                        var clean_uri = location.protocol + "//" + location.host + location.pathname;
                        window.history.replaceState({}, document.title, clean_uri);
                    });
                }
            }
        });
    }
    // this method will be called each time the Ionic View is loaded
    NavbarComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8__services_logger_service__["a" /* Logger */].banner("Welcome to SpaceFinder!");
        if (!this.initialized) {
            console.log('%cConfiguration: ', __WEBPACK_IMPORTED_MODULE_8__services_logger_service__["a" /* Logger */].LeadInStyle, __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* Config */]);
            // Auto-login
            if (__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* Config */]['DEVELOPER_MODE']) {
                __WEBPACK_IMPORTED_MODULE_8__services_logger_service__["a" /* Logger */].heading("User sign-in");
                var userData = {
                    username: "user1",
                    password: "Test123!"
                };
                __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["b" /* UserLoginService */].signIn(userData).then(function () {
                    // set the property, so that Angular2's two-way variable binding works
                    _this.globals.userId = _this.globals.getUserId();
                });
            }
        }
        this.initialized = true;
    };
    NavbarComponent.prototype.launchHostedUi = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            // You're running in a Cordova app on a device. Use the browser tab plugin.
            this.browserTab.isAvailable()
                .then(function (isAvailable) {
                if (isAvailable) {
                    console.log('Cognito Hosted UI: ', __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["a" /* CognitoUtil */].getHostedUiLoginMobileUrl());
                    _this.browserTab.openUrl(__WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["a" /* CognitoUtil */].getHostedUiLoginMobileUrl());
                }
                else {
                    console.log('Browser tab not available');
                    // open URL with InAppBrowser instead or SafariViewController
                }
            });
        }
        else {
            // You're testing in a browser. Redirect to the hosted UI.
            console.log('Cognito Hosted UI: ', __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["a" /* CognitoUtil */].getHostedUiLoginWebUrl());
            window.location.href = __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["a" /* CognitoUtil */].getHostedUiLoginWebUrl();
        }
    };
    NavbarComponent.prototype.completeSignIn = function (authCode, platform, http) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["a" /* CognitoUtil */].getIdTokenFromAuthCode(authCode, platform, http).then(function (data) {
            _this.globals.displayLoader('Signing in...');
            console.log('Sign-in spinner');
            return __WEBPACK_IMPORTED_MODULE_7__services_account_management_service__["b" /* UserLoginService */].completeSignIn(data.access_token, data.id_token, data.refresh_token)
                .then(function () {
                // Login was successful
                _this.globals.dismissLoader();
                return _this.showLoginSuccessAlert(_this.globals.getUsername(), function () {
                    _this.globals.userId = _this.globals.getUserId();
                    _this.globals.setViewAdminFeaturesOverride(_this.globals.isAdminRole());
                    _this.navCtrl.popToRoot({ animate: false });
                    // this.navCtrl.push(WelcomePage);
                });
            }).catch(function (err) {
                // Login was unsuccessful
                _this.globals.dismissLoader();
                console.error(err);
                // this.allowButtonPresses = true;
            });
        }).catch(function (err) {
            console.error('error', err);
        });
    };
    NavbarComponent.prototype.showLoginSuccessAlert = function (username, callbackHandler) {
        var subtitle = "You are now signed in.";
        if (this.globals.isAdminRole()) {
            subtitle = "You are now signed in as an Administrator.";
        }
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: subtitle,
            message: "Username: <b>" + username + "</b><br/>First name: <b>" + this.globals.getUserFirstName() + "</b><br/>Last name: <b>" + this.globals.getUserLastName() + "</b>",
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        callbackHandler();
                    }
                }]
        });
        alert.present();
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "showSignin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "showSignup", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'navbar',template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\components\navbar\navbar.html"*/'  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons right *ngIf="globals.userId === \'\'">\n\n      <button ion-button *ngIf="showSignup" icon-left class="myButton" [navPush]="accountSignupPage">\n\n        <ion-icon name="contact"></ion-icon>Sign-Up\n\n      </button>\n\n      <button ion-button *ngIf="showSignin" icon-left class="myButton" [navPush]="accountSigninPage">\n\n        <ion-icon name="log-in"></ion-icon>Sign-In (Custom UI)\n\n      </button>\n\n      <button ion-button *ngIf="showSignin" icon-left class="myButton" (click)="launchHostedUi()">\n\n        <ion-icon name="log-in"></ion-icon>Sign-In (Hosted UI)\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons right *ngIf="globals.userId !== \'\'">\n\n      <button ion-button icon-right class="myButton" (click)="globals.logout()">\n\n        <ion-icon name="log-out"></ion-icon>Sign Out\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\components\navbar\navbar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_browser_tab__["a" /* BrowserTab */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], NavbarComponent);

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(300);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_browser_tab__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_confirmation_code_account_confirmation_code__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_change_password_account_change_password__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_forgot_password_account_forgot_password__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_signin_account_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_signup_account_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bookings_bookings__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_location_list_location_list__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_location_add_location_add__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_resource_list_resource_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_resource_add_resource_add__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_resource_availability_resource_availability__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_http_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__pages_account_confirmation_code_account_confirmation_code__["a" /* AccountConfirmationCodePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_account_change_password_account_change_password__["a" /* AccountChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_account_forgot_password_account_forgot_password__["a" /* AccountForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_account_signin_account_signin__["a" /* AccountSigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_account_signup_account_signup__["a" /* AccountSignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bookings_bookings__["a" /* BookingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_location_add_location_add__["a" /* LocationAddPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_location_list_location_list__["a" /* LocationListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_resource_add_resource_add__["a" /* ResourceAddPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_resource_list_resource_list__["a" /* ResourceListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_resource_availability_resource_availability__["a" /* ResourceAvailabilityPage */],
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar__["a" /* NavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__["a" /* BrowserModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__pages_account_confirmation_code_account_confirmation_code__["a" /* AccountConfirmationCodePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_account_change_password_account_change_password__["a" /* AccountChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_account_forgot_password_account_forgot_password__["a" /* AccountForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_account_signin_account_signin__["a" /* AccountSigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_account_signup_account_signup__["a" /* AccountSignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bookings_bookings__["a" /* BookingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_location_add_location_add__["a" /* LocationAddPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_location_list_location_list__["a" /* LocationListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_resource_add_resource_add__["a" /* ResourceAddPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_resource_list_resource_list__["a" /* ResourceListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_resource_availability_resource_availability__["a" /* ResourceAvailabilityPage */],
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_browser_tab__["a" /* BrowserTab */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
            { provide: __WEBPACK_IMPORTED_MODULE_23__services_http_service__["a" /* HttpService */], useClass: __WEBPACK_IMPORTED_MODULE_23__services_http_service__["a" /* HttpService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["a" /* CustomAuthorizerClient */], useClass: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["a" /* CustomAuthorizerClient */] },
            { provide: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["b" /* IamAuthorizerClient */], useClass: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["b" /* IamAuthorizerClient */] },
            { provide: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["d" /* UserPoolsAuthorizerClient */], useClass: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["d" /* UserPoolsAuthorizerClient */] },
            { provide: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["c" /* NoAuthorizationClient */], useClass: __WEBPACK_IMPORTED_MODULE_24__services_spacefinder_api_service__["c" /* NoAuthorizationClient */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_state_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            new __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]().styleDefault();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<ion-nav [root]=\"rootPage\"></ion-nav>",
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_account_management_service__["c" /* UserRegistrationService */], __WEBPACK_IMPORTED_MODULE_6__services_global_state_service__["a" /* GlobalStateService */], __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* Logger */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configOverridesGenerated; });
// Auto-generated file, do not modify directly
var configOverridesGenerated = {};

//# sourceMappingURL=config-overrides-generated.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
sjcl.cipher.aes=function(a){this.s[0][0][0]||this.O();var b,c,d,e,f=this.s[0][4],g=this.s[1];b=a.length;var h=1;if(4!==b&&6!==b&&8!==b)throw new sjcl.exception.invalid("invalid aes key size");this.b=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^g[3][f[c&
255]]};
sjcl.cipher.aes.prototype={encrypt:function(a){return t(this,a,0)},decrypt:function(a){return t(this,a,1)},s:[[[],[],[],[],[]],[[],[],[],[],[]]],O:function(){var a=this.s[0],b=this.s[1],c=a[4],d=b[4],e,f,g,h=[],k=[],l,n,m,p;for(e=0;0x100>e;e++)k[(h[e]=e<<1^283*(e>>7))^e]=e;for(f=g=0;!c[f];f^=l||1,g=k[g]||1)for(m=g^g<<1^g<<2^g<<3^g<<4,m=m>>8^m&255^99,c[f]=m,d[m]=f,n=h[e=h[l=h[f]]],p=0x1010101*n^0x10001*e^0x101*l^0x1010100*f,n=0x101*h[m]^0x1010100*m,e=0;4>e;e++)a[e][f]=n=n<<24^n>>>8,b[e][m]=p=p<<24^p>>>8;for(e=
0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)}};
function t(a,b,c){if(4!==b.length)throw new sjcl.exception.invalid("invalid aes block size");var d=a.b[c],e=b[0]^d[0],f=b[c?3:1]^d[1],g=b[2]^d[2];b=b[c?1:3]^d[3];var h,k,l,n=d.length/4-2,m,p=4,r=[0,0,0,0];h=a.s[c];a=h[0];var q=h[1],v=h[2],w=h[3],x=h[4];for(m=0;m<n;m++)h=a[e>>>24]^q[f>>16&255]^v[g>>8&255]^w[b&255]^d[p],k=a[f>>>24]^q[g>>16&255]^v[b>>8&255]^w[e&255]^d[p+1],l=a[g>>>24]^q[b>>16&255]^v[e>>8&255]^w[f&255]^d[p+2],b=a[b>>>24]^q[e>>16&255]^v[f>>8&255]^w[g&255]^d[p+3],p+=4,e=h,f=k,g=l;for(m=
0;4>m;m++)r[c?3&-m:m]=x[e>>>24]<<24^x[f>>16&255]<<16^x[g>>8&255]<<8^x[b&255]^d[p++],h=e,e=f,f=g,g=b,b=h;return r}
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.$(a.slice(b/32),32-(b&31)).slice(1);return void 0===c?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray.$(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return 0===
b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b=b&31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return!1;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^b[d];return 0===
c},$:function(a,b,c,d){var e;e=0;for(void 0===d&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},i:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]},byteswapM:function(a){var b,c;for(b=0;b<a.length;++b)c=a[b],a[b]=c>>>24|c>>>8&0xff00|(c&0xff00)<<8|c<<24;return a}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>24),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a=a+"00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};
sjcl.codec.base32={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",X:"0123456789ABCDEFGHIJKLMNOPQRSTUV",BITS:32,BASE:5,REMAINING:27,fromBits:function(a,b,c){var d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f="",g=0,h=sjcl.codec.base32.B,k=0,l=sjcl.bitArray.bitLength(a);c&&(h=sjcl.codec.base32.X);for(c=0;f.length*d<l;)f+=h.charAt((k^a[c]>>>g)>>>e),g<d?(k=a[c]<<d-g,g+=e,c++):(k<<=d,g-=d);for(;f.length&7&&!b;)f+="=";return f},toBits:function(a,b){a=a.replace(/\s|=/g,"").toUpperCase();var c=sjcl.codec.base32.BITS,
d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f=[],g,h=0,k=sjcl.codec.base32.B,l=0,n,m="base32";b&&(k=sjcl.codec.base32.X,m="base32hex");for(g=0;g<a.length;g++){n=k.indexOf(a.charAt(g));if(0>n){if(!b)try{return sjcl.codec.base32hex.toBits(a)}catch(p){}throw new sjcl.exception.invalid("this isn't "+m+"!");}h>e?(h-=e,f.push(l^n>>>h),l=n<<c-h):(h+=d,l^=n<<c-h)}h&56&&f.push(sjcl.bitArray.partial(h&56,l,1));return f}};
sjcl.codec.base32hex={fromBits:function(a,b){return sjcl.codec.base32.fromBits(a,b,1)},toBits:function(a){return sjcl.codec.base32.toBits(a,1)}};
sjcl.codec.base64={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.B,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;6*d.length<h;)d+=f.charAt((g^a[c]>>>e)>>>26),6>e?(g=a[c]<<6-e,e+=26,c++):(g<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,f=sjcl.codec.base64.B,g=0,h;b&&(f=f.substr(0,62)+"-_");for(d=0;d<a.length;d++){h=f.indexOf(a.charAt(d));
if(0>h)throw new sjcl.exception.invalid("this isn't base64!");26<e?(e-=26,c.push(g^h>>>e),g=h<<32-e):(e+=6,g^=h<<32-e)}e&56&&c.push(sjcl.bitArray.partial(e&56,g,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.b[0]||this.O();a?(this.F=a.F.slice(0),this.A=a.A.slice(0),this.l=a.l):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.F=this.Y.slice(0);this.A=[];this.l=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.A=sjcl.bitArray.concat(this.A,a);b=this.l;a=this.l=b+sjcl.bitArray.bitLength(a);if(0x1fffffffffffff<a)throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!==typeof Uint32Array){var d=new Uint32Array(c),e=0;for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,d.subarray(16*e,
16*(e+1))),e+=1;c.splice(0,16*e)}else for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,c.splice(0,16));return this},finalize:function(){var a,b=this.A,c=this.F,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.l/0x100000000));for(b.push(this.l|0);b.length;)u(this,b.splice(0,16));this.reset();return c},Y:[],b:[],O:function(){function a(a){return 0x100000000*(a-Math.floor(a))|0}for(var b=0,c=2,d,e;64>b;c++){e=!0;for(d=2;d*d<=c;d++)if(0===c%d){e=
!1;break}e&&(8>b&&(this.Y[b]=a(Math.pow(c,.5))),this.b[b]=a(Math.pow(c,1/3)),b++)}}};
function u(a,b){var c,d,e,f=a.F,g=a.b,h=f[0],k=f[1],l=f[2],n=f[3],m=f[4],p=f[5],r=f[6],q=f[7];for(c=0;64>c;c++)16>c?d=b[c]:(d=b[c+1&15],e=b[c+14&15],d=b[c&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+b[c&15]+b[c+9&15]|0),d=d+q+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(r^m&(p^r))+g[c],q=r,r=p,p=m,m=n+d|0,n=l,l=k,k=h,h=d+(k&l^n&(k^l))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;f[0]=f[0]+h|0;f[1]=f[1]+k|0;f[2]=f[2]+l|0;f[3]=f[3]+n|0;f[4]=f[4]+m|0;f[5]=f[5]+p|0;f[6]=f[6]+r|0;f[7]=
f[7]+q|0}
sjcl.mode.ccm={name:"ccm",G:[],listenProgress:function(a){sjcl.mode.ccm.G.push(a)},unListenProgress:function(a){a=sjcl.mode.ccm.G.indexOf(a);-1<a&&sjcl.mode.ccm.G.splice(a,1)},fa:function(a){var b=sjcl.mode.ccm.G.slice(),c;for(c=0;c<b.length;c+=1)b[c](a)},encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,k=h.bitLength(c)/8,l=h.bitLength(g)/8;e=e||64;d=d||[];if(7>k)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;4>f&&l>>>8*f;f++);f<15-k&&(f=15-k);c=h.clamp(c,
8*(15-f));b=sjcl.mode.ccm.V(a,b,c,d,e,f);g=sjcl.mode.ccm.C(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),k=f.clamp(b,h-e),l=f.bitSlice(b,h-e),h=(h-e)/8;if(7>g)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;4>b&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));k=sjcl.mode.ccm.C(a,k,c,l,e,b);a=sjcl.mode.ccm.V(a,k.data,c,d,e,b);if(!f.equal(k.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");
return k.data},na:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,k=h.i;d=[h.partial(8,(b.length?64:0)|d-2<<2|f-1)];d=h.concat(d,c);d[3]|=e;d=a.encrypt(d);if(b.length)for(c=h.bitLength(b)/8,65279>=c?g=[h.partial(16,c)]:0xffffffff>=c&&(g=h.concat([h.partial(16,65534)],[c])),g=h.concat(g,b),b=0;b<g.length;b+=4)d=a.encrypt(k(d,g.slice(b,b+4).concat([0,0,0])));return d},V:function(a,b,c,d,e,f){var g=sjcl.bitArray,h=g.i;e/=8;if(e%2||4>e||16<e)throw new sjcl.exception.invalid("ccm: invalid tag length");
if(0xffffffff<d.length||0xffffffff<b.length)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");c=sjcl.mode.ccm.na(a,d,c,e,g.bitLength(b)/8,f);for(d=0;d<b.length;d+=4)c=a.encrypt(h(c,b.slice(d,d+4).concat([0,0,0])));return g.clamp(c,8*e)},C:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.i;var k=b.length,l=h.bitLength(b),n=k/50,m=n;c=h.concat([h.partial(8,f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!k)return{tag:d,data:[]};for(g=0;g<k;g+=4)g>n&&(sjcl.mode.ccm.fa(g/
k),n+=m),c[3]++,e=a.encrypt(c),b[g]^=e[0],b[g+1]^=e[1],b[g+2]^=e[2],b[g+3]^=e[3];return{tag:d,data:h.clamp(b,l)}}};
sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");var g,h=sjcl.mode.ocb2.S,k=sjcl.bitArray,l=k.i,n=[0,0,0,0];c=h(a.encrypt(c));var m,p=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4)m=b.slice(g,g+4),n=l(n,m),p=p.concat(l(c,a.encrypt(l(c,m)))),c=h(c);m=b.slice(g);b=k.bitLength(m);g=a.encrypt(l(c,[0,0,0,b]));m=k.clamp(l(m.concat([0,0,0]),g),b);n=l(n,l(m.concat([0,0,0]),g));n=a.encrypt(l(n,l(c,h(c))));
d.length&&(n=l(n,f?d:sjcl.mode.ocb2.pmac(a,d)));return p.concat(k.concat(m,k.clamp(n,e)))},decrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");e=e||64;var g=sjcl.mode.ocb2.S,h=sjcl.bitArray,k=h.i,l=[0,0,0,0],n=g(a.encrypt(c)),m,p,r=sjcl.bitArray.bitLength(b)-e,q=[];d=d||[];for(c=0;c+4<r/32;c+=4)m=k(n,a.decrypt(k(n,b.slice(c,c+4)))),l=k(l,m),q=q.concat(m),n=g(n);p=r-32*c;m=a.encrypt(k(n,[0,0,0,p]));m=k(m,h.clamp(b.slice(c),p).concat([0,
0,0]));l=k(l,m);l=a.encrypt(k(l,k(n,g(n))));d.length&&(l=k(l,f?d:sjcl.mode.ocb2.pmac(a,d)));if(!h.equal(h.clamp(l,e),h.bitSlice(b,r)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");return q.concat(h.clamp(m,p))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.S,e=sjcl.bitArray,f=e.i,g=[0,0,0,0],h=a.encrypt([0,0,0,0]),h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4)h=d(h),g=f(g,a.encrypt(f(h,b.slice(c,c+4))));c=b.slice(c);128>e.bitLength(c)&&(h=f(h,d(h)),c=e.concat(c,[-2147483648,0,0,0]));g=f(g,c);
return a.encrypt(f(d(f(h,d(h))),g))},S:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^135*(a[0]>>>31)]}};
sjcl.mode.gcm={name:"gcm",encrypt:function(a,b,c,d,e){var f=b.slice(0);b=sjcl.bitArray;d=d||[];a=sjcl.mode.gcm.C(!0,a,f,d,c,e||128);return b.concat(a.data,a.tag)},decrypt:function(a,b,c,d,e){var f=b.slice(0),g=sjcl.bitArray,h=g.bitLength(f);e=e||128;d=d||[];e<=h?(b=g.bitSlice(f,h-e),f=g.bitSlice(f,0,h-e)):(b=f,f=[]);a=sjcl.mode.gcm.C(!1,a,f,d,c,e);if(!g.equal(a.tag,b))throw new sjcl.exception.corrupt("gcm: tag doesn't match");return a.data},ka:function(a,b){var c,d,e,f,g,h=sjcl.bitArray.i;e=[0,0,
0,0];f=b.slice(0);for(c=0;128>c;c++){(d=0!==(a[Math.floor(c/32)]&1<<31-c%32))&&(e=h(e,f));g=0!==(f[3]&1);for(d=3;0<d;d--)f[d]=f[d]>>>1|(f[d-1]&1)<<31;f[0]>>>=1;g&&(f[0]^=-0x1f000000)}return e},j:function(a,b,c){var d,e=c.length;b=b.slice(0);for(d=0;d<e;d+=4)b[0]^=0xffffffff&c[d],b[1]^=0xffffffff&c[d+1],b[2]^=0xffffffff&c[d+2],b[3]^=0xffffffff&c[d+3],b=sjcl.mode.gcm.ka(b,a);return b},C:function(a,b,c,d,e,f){var g,h,k,l,n,m,p,r,q=sjcl.bitArray;m=c.length;p=q.bitLength(c);r=q.bitLength(d);h=q.bitLength(e);
g=b.encrypt([0,0,0,0]);96===h?(e=e.slice(0),e=q.concat(e,[1])):(e=sjcl.mode.gcm.j(g,[0,0,0,0],e),e=sjcl.mode.gcm.j(g,e,[0,0,Math.floor(h/0x100000000),h&0xffffffff]));h=sjcl.mode.gcm.j(g,[0,0,0,0],d);n=e.slice(0);d=h.slice(0);a||(d=sjcl.mode.gcm.j(g,h,c));for(l=0;l<m;l+=4)n[3]++,k=b.encrypt(n),c[l]^=k[0],c[l+1]^=k[1],c[l+2]^=k[2],c[l+3]^=k[3];c=q.clamp(c,p);a&&(d=sjcl.mode.gcm.j(g,h,c));a=[Math.floor(r/0x100000000),r&0xffffffff,Math.floor(p/0x100000000),p&0xffffffff];d=sjcl.mode.gcm.j(g,d,a);k=b.encrypt(e);
d[0]^=k[0];d[1]^=k[1];d[2]^=k[2];d[3]^=k[3];return{tag:q.bitSlice(d,0,f),data:c}}};sjcl.misc.hmac=function(a,b){this.W=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this.w=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this.w[0].update(c[0]);this.w[1].update(c[1]);this.R=new b(this.w[0])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){if(this.aa)throw new sjcl.exception.invalid("encrypt on already updated hmac called!");this.update(a);return this.digest(a)};sjcl.misc.hmac.prototype.reset=function(){this.R=new this.W(this.w[0]);this.aa=!1};sjcl.misc.hmac.prototype.update=function(a){this.aa=!0;this.R.update(a)};sjcl.misc.hmac.prototype.digest=function(){var a=this.R.finalize(),a=(new this.W(this.w[1])).update(a).finalize();this.reset();return a};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E4;if(0>d||0>c)throw new sjcl.exception.invalid("invalid params to pbkdf2");"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,k,l=[],n=sjcl.bitArray;for(k=1;32*l.length<(d||1);k++){e=f=a.encrypt(n.concat(b,[k]));for(g=1;g<c;g++)for(f=a.encrypt(f),h=0;h<f.length;h++)e[h]^=f[h];l=l.concat(e)}d&&(l=n.clamp(l,d));return l};
sjcl.prng=function(a){this.c=[new sjcl.hash.sha256];this.m=[0];this.P=0;this.H={};this.N=0;this.U={};this.Z=this.f=this.o=this.ha=0;this.b=[0,0,0,0,0,0,0,0];this.h=[0,0,0,0];this.L=void 0;this.M=a;this.D=!1;this.K={progress:{},seeded:{}};this.u=this.ga=0;this.I=1;this.J=2;this.ca=0x10000;this.T=[0,48,64,96,128,192,0x100,384,512,768,1024];this.da=3E4;this.ba=80};
sjcl.prng.prototype={randomWords:function(a,b){var c=[],d;d=this.isReady(b);var e;if(d===this.u)throw new sjcl.exception.notReady("generator isn't seeded");if(d&this.J){d=!(d&this.I);e=[];var f=0,g;this.Z=e[0]=(new Date).valueOf()+this.da;for(g=0;16>g;g++)e.push(0x100000000*Math.random()|0);for(g=0;g<this.c.length&&(e=e.concat(this.c[g].finalize()),f+=this.m[g],this.m[g]=0,d||!(this.P&1<<g));g++);this.P>=1<<this.c.length&&(this.c.push(new sjcl.hash.sha256),this.m.push(0));this.f-=f;f>this.o&&(this.o=
f);this.P++;this.b=sjcl.hash.sha256.hash(this.b.concat(e));this.L=new sjcl.cipher.aes(this.b);for(d=0;4>d&&(this.h[d]=this.h[d]+1|0,!this.h[d]);d++);}for(d=0;d<a;d+=4)0===(d+1)%this.ca&&y(this),e=z(this),c.push(e[0],e[1],e[2],e[3]);y(this);return c.slice(0,a)},setDefaultParanoia:function(a,b){if(0===a&&"Setting paranoia=0 will ruin your security; use it only for testing"!==b)throw new sjcl.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.M=a},addEntropy:function(a,
b,c){c=c||"user";var d,e,f=(new Date).valueOf(),g=this.H[c],h=this.isReady(),k=0;d=this.U[c];void 0===d&&(d=this.U[c]=this.ha++);void 0===g&&(g=this.H[c]=0);this.H[c]=(this.H[c]+1)%this.c.length;switch(typeof a){case "number":void 0===b&&(b=1);this.c[g].update([d,this.N++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if("[object Uint32Array]"===c){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else for("[object Array]"!==c&&(k=1),c=0;c<a.length&&!k;c++)"number"!==typeof a[c]&&
(k=1);if(!k){if(void 0===b)for(c=b=0;c<a.length;c++)for(e=a[c];0<e;)b++,e=e>>>1;this.c[g].update([d,this.N++,2,b,f,a.length].concat(a))}break;case "string":void 0===b&&(b=a.length);this.c[g].update([d,this.N++,3,b,f,a.length]);this.c[g].update(a);break;default:k=1}if(k)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.m[g]+=b;this.f+=b;h===this.u&&(this.isReady()!==this.u&&A("seeded",Math.max(this.o,this.f)),A("progress",this.getProgress()))},
isReady:function(a){a=this.T[void 0!==a?a:this.M];return this.o&&this.o>=a?this.m[0]>this.ba&&(new Date).valueOf()>this.Z?this.J|this.I:this.I:this.f>=a?this.J|this.u:this.u},getProgress:function(a){a=this.T[a?a:this.M];return this.o>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.D){this.a={loadTimeCollector:B(this,this.ma),mouseCollector:B(this,this.oa),keyboardCollector:B(this,this.la),accelerometerCollector:B(this,this.ea),touchCollector:B(this,this.qa)};if(window.addEventListener)window.addEventListener("load",
this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else if(document.attachEvent)document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector);else throw new sjcl.exception.bug("can't attach event");
this.D=!0}},stopCollectors:function(){this.D&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",
this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.D=!1)},addEventListener:function(a,b){this.K[a][this.ga++]=b},removeEventListener:function(a,b){var c,d,e=this.K[a],f=[];for(d in e)e.hasOwnProperty(d)&&e[d]===b&&f.push(d);for(c=0;c<f.length;c++)d=f[c],delete e[d]},la:function(){C(this,1)},oa:function(a){var b,c;try{b=a.x||a.clientX||a.offsetX||0,c=a.y||a.clientY||a.offsetY||0}catch(d){c=b=0}0!=b&&0!=c&&this.addEntropy([b,c],2,"mouse");C(this,0)},qa:function(a){a=
a.touches[0]||a.changedTouches[0];this.addEntropy([a.pageX||a.clientX,a.pageY||a.clientY],1,"touch");C(this,0)},ma:function(){C(this,2)},ea:function(a){a=a.accelerationIncludingGravity.x||a.accelerationIncludingGravity.y||a.accelerationIncludingGravity.z;if(window.orientation){var b=window.orientation;"number"===typeof b&&this.addEntropy(b,1,"accelerometer")}a&&this.addEntropy(a,2,"accelerometer");C(this,0)}};
function A(a,b){var c,d=sjcl.random.K[a],e=[];for(c in d)d.hasOwnProperty(c)&&e.push(d[c]);for(c=0;c<e.length;c++)e[c](b)}function C(a,b){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?a.addEntropy(window.performance.now(),b,"loadtime"):a.addEntropy((new Date).valueOf(),b,"loadtime")}function y(a){a.b=z(a).concat(z(a));a.L=new sjcl.cipher.aes(a.b)}function z(a){for(var b=0;4>b&&(a.h[b]=a.h[b]+1|0,!a.h[b]);b++);return a.L.encrypt(a.h)}
function B(a,b){return function(){b.apply(a,arguments)}}sjcl.random=new sjcl.prng(6);
a:try{var D,E,F,G;if(G="undefined"!==typeof module&&module.exports){var H;try{H=__webpack_require__(352)}catch(a){H=null}G=E=H}if(G&&E.randomBytes)D=E.randomBytes(128),D=new Uint32Array((new Uint8Array(D)).buffer),sjcl.random.addEntropy(D,1024,"crypto['randomBytes']");else if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){F=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(F);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(F);
else break a;sjcl.random.addEntropy(F,1024,"crypto['getRandomValues']")}}catch(a){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(a))}
sjcl.json={defaults:{v:1,iter:1E4,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},ja:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e.g({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.g(f,c);c=f.adata;"string"===typeof f.salt&&(f.salt=sjcl.codec.base64.toBits(f.salt));"string"===typeof f.iv&&(f.iv=sjcl.codec.base64.toBits(f.iv));if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||"string"===typeof a&&100>=f.iter||64!==f.ts&&96!==f.ts&&128!==f.ts||128!==f.ks&&192!==f.ks&&0x100!==f.ks||2>f.iv.length||
4<f.iv.length)throw new sjcl.exception.invalid("json encrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,f),a=g.key.slice(0,f.ks/32),f.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.publicKey&&(g=a.kem(),f.kemtag=g.tag,a=g.key.slice(0,f.ks/32));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));"string"===typeof c&&(f.adata=c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e.g(d,f);d.key=a;f.ct="ccm"===f.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&
b instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.encrypt(g,b,f.iv,c,f.ts):sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return f},encrypt:function(a,b,c,d){var e=sjcl.json,f=e.ja.apply(e,arguments);return e.encode(f)},ia:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.g(e.g(e.g({},e.defaults),b),c,!0);var f,g;f=b.adata;"string"===typeof b.salt&&(b.salt=sjcl.codec.base64.toBits(b.salt));"string"===typeof b.iv&&(b.iv=sjcl.codec.base64.toBits(b.iv));if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||"string"===
typeof a&&100>=b.iter||64!==b.ts&&96!==b.ts&&128!==b.ts||128!==b.ks&&192!==b.ks&&0x100!==b.ks||!b.iv||2>b.iv.length||4<b.iv.length)throw new sjcl.exception.invalid("json decrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,b),a=g.key.slice(0,b.ks/32),b.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.secretKey&&(a=a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0,b.ks/32));"string"===typeof f&&(f=sjcl.codec.utf8String.toBits(f));g=new sjcl.cipher[b.cipher](a);f="ccm"===
b.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&b.ct instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.decrypt(g,b.ct,b.iv,b.tag,f,b.ts):sjcl.mode[b.mode].decrypt(g,b.ct,b.iv,f,b.ts);e.g(d,b);d.key=a;return 1===c.raw?f:sjcl.codec.utf8String.fromBits(f)},decrypt:function(a,b,c,d){var e=sjcl.json;return e.ia(a,e.decode(b),c,d)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c+=d+'"'+
b+'":';d=",";switch(typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+sjcl.codec.base64.fromBits(a[b],0)+'"';break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
null!=d[3]?b[d[2]]=parseInt(d[3],10):null!=d[4]?b[d[2]]=d[2].match(/^(ct|adata|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4]):null!=d[5]&&(b[d[2]]="true"===d[5])}return b},g:function(a,b,c){void 0===a&&(a={});if(void 0===b)return a;for(var d in b)if(b.hasOwnProperty(d)){if(c&&void 0!==a[d]&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},sa:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},ra:function(a,
b){var c={},d;for(d=0;d<b.length;d++)void 0!==a[b[d]]&&(c[b[d]]=a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.pa={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.pa,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=void 0===b.salt?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};
"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);"function"==="function"&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return sjcl}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 388:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_forgot_password_account_forgot_password__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_signup_account_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_logger_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_config__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { WelcomePage } from '../welcome/welcome';



var AccountSigninPage = (function () {
    function AccountSigninPage(navCtrl, globals) {
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.allowButtonPresses = true; // to prevent multiple clicks
        this.accountSignupPage = __WEBPACK_IMPORTED_MODULE_5__account_signup_account_signup__["a" /* AccountSignupPage */];
        this.accountForgotPasswordPage = __WEBPACK_IMPORTED_MODULE_4__account_forgot_password_account_forgot_password__["a" /* AccountForgotPasswordPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        this.alertCtrl = this.globals.getAlertController();
        this.userData = {
            username: "user1",
            password: "Test123!"
        };
        this.signInButtonClicked = false;
        this.forgotPasswordButtonClicked = false;
    }
    AccountSigninPage.prototype.onSignIn = function (form) {
        this.signInButtonClicked = true;
        this.forgotPasswordButtonClicked = false;
        if (form && form.valid) {
            this.login();
        }
    };
    AccountSigninPage.prototype.onForgotPassword = function (form) {
        var _this = this;
        if (!this.allowButtonPresses) {
            return;
        }
        // Check for a special exception:
        // Do not allow default users to change their passwords
        if (form && this.userData.username != null) {
            if (__WEBPACK_IMPORTED_MODULE_8__config_config__["a" /* Config */]['DEFAULT_USERNAMES'].findIndex(function (el) { return el === _this.userData.username; }) > -1) {
                this.globals.displayAlert('Cannot reset passwords for default users', "The user [" + this.userData.username + "] is a default user. " +
                    "Passwords for default users cannot be reset.<br/><br/>Please try " +
                    'again using a username for a user that you have manually registered.');
                return;
            }
        }
        this.signInButtonClicked = false;
        this.forgotPasswordButtonClicked = true;
        this.allowButtonPresses = false;
        if (form && this.userData.username != null) {
            __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["b" /* UserLoginService */].forgotPassword(this.userData.username).then(function (data) {
                // Forgot password request successfully initiated
                _this.allowButtonPresses = true;
                console.log('Forgot password request process initiated. Email sent. Data from Cognito response:\n' + data);
                _this.navCtrl.push(_this.accountForgotPasswordPage);
            }).catch(function (err) {
                _this.allowButtonPresses = true;
                // Forgot password request failed to initiate
                console.log('Forgot password request failed to initiate', err);
                _this.showForgotPasswordFailureAlert(err);
            });
        }
    };
    // return a LoginStatus
    AccountSigninPage.prototype.login = function () {
        var _this = this;
        // prevent multiple clicks
        if (!this.allowButtonPresses) {
            return;
        }
        this.allowButtonPresses = false;
        this.globals.displayLoader('Signing in...').then(function () {
            __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["b" /* UserLoginService */].signIn(_this.userData)
                .then(function () {
                // Login was successful
                return _this.globals.dismissLoader().then(function () {
                    return _this.showLoginSuccessAlert(_this.userData.username, function () {
                        _this.globals.userId = _this.globals.getUserId();
                        _this.globals.setViewAdminFeaturesOverride(_this.globals.isAdminRole());
                        _this.navCtrl.popToRoot({ animate: false });
                        // this.navCtrl.push(WelcomePage);
                    });
                });
            }).catch(function (err) {
                // Login was unsuccessful
                _this.globals.dismissLoader();
                _this.allowButtonPresses = true;
                _this.displayAlertError(err);
            });
        });
    };
    AccountSigninPage.prototype.displayAlertError = function (err) {
        var _this = this;
        switch (__WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["a" /* CognitoUtil */].getUserState()) {
            case __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["d" /* UserState */].InvalidCredentials:
                console.log('Sign-in failed: ' + err);
                var errorMessage = 'Incorrect username or password entered. Please try again.';
                this.showLoginFailureAlert(this.userData.username, errorMessage);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["d" /* UserState */].PendingConfirmation:
                // If a user has registered, but has not yet confirmed the registration code, then
                // display a dialog where he/she can input the verification code. Alternatively,
                // the user can request a new verification code be emailed.
                console.log('User has not confirmed verification code: ' + err);
                this.showOneTimeVerificationAlert(this.userData.username, function () {
                    _this.navCtrl.pop();
                });
                break;
            default:
                console.log('Sign-in failed: ' + err);
                errorMessage = "The login failed: " + err;
                this.showLoginFailureAlert(this.userData.username, errorMessage);
                break;
        }
    };
    AccountSigninPage.prototype.showLoginSuccessAlert = function (username, callbackHandler) {
        var subtitle = "You are now signed in.";
        if (this.globals.isAdminRole()) {
            subtitle = "You are now signed in as an Administrator.";
        }
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: subtitle,
            message: "Username: <b>" + username + "</b><br/>First name: <b>" + this.globals.getUserFirstName() + "</b><br/>Last name: <b>" + this.globals.getUserLastName() + "</b>",
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        callbackHandler();
                    }
                }]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Display alert exception', ex);
        });
        ;
    };
    AccountSigninPage.prototype.showResendSuccessAlert = function (callbackHandler) {
        var alert = this.alertCtrl.create({
            title: 'Verification code sent',
            subTitle: "A new verification code has been emailed to your account. Once you receive it, please try signing in again.",
            buttons: [{
                    text: 'OK',
                    handler: function (data) { callbackHandler(); }
                }]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Display alert exception', ex);
        });
    };
    AccountSigninPage.prototype.showOneTimeVerificationAlert = function (username, callbackHandler) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'One-time verification',
            subTitle: "When you registered, a verification code was emailed to you. Please enter the code, and click \"Verify\". Or click \"Re-send\" to receive another code.",
            inputs: [{
                    name: 'verificationCode',
                    placeholder: 'Verification code'
                }],
            buttons: [
                {
                    text: 'Verify',
                    handler: function (data) {
                        __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["c" /* UserRegistrationService */].confirmSignUp(data.verificationCode)
                            .then(function () {
                            // this.showLoginSuccessAlert(this.userData.username, () => {
                            // now, sign in
                            __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["b" /* UserLoginService */].signIn(_this.userData).then(function () {
                                // Login was successful
                                _this.showLoginSuccessAlert(_this.userData.username, function () {
                                    _this.globals.userId = _this.globals.getUserId();
                                    _this.navCtrl.popToRoot({ animate: false });
                                    // this.navCtrl.push(WelcomePage);
                                });
                            }).catch(function (err) {
                                // Login was unsuccessful
                                _this.displayAlertError(err);
                            });
                            // this.navCtrl.popToRoot({animate: false});
                            // this.navCtrl.pop();
                            // });
                        }).catch(function (err) {
                            console.error(err);
                            _this.showConfirmationFailureAlert(err);
                        });
                    }
                },
                {
                    text: 'Re-send',
                    handler: function (data) {
                        __WEBPACK_IMPORTED_MODULE_6__services_account_management_service__["c" /* UserRegistrationService */].resendConfirmationCode();
                        _this.showResendSuccessAlert(callbackHandler);
                    }
                },
                { text: 'Cancel' },
            ]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Display alert exception', ex);
        });
    };
    AccountSigninPage.prototype.showConfirmationFailureAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'Verification failed',
            subTitle: err.message,
            buttons: [{ text: 'OK' }]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Display alert exception', ex);
        });
    };
    AccountSigninPage.prototype.showLoginFailureAlert = function (username, message) {
        var alert = this.alertCtrl.create({
            title: 'Login was unsuccessful',
            subTitle: "" + message,
            buttons: [{ text: 'OK' }]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Display alert exception', ex);
        });
    };
    AccountSigninPage.prototype.showForgotPasswordFailureAlert = function (err) {
        var alert = this.alertCtrl.create({
            title: 'Error encountered',
            subTitle: "An error was encountered when attempting to initiate the password change process: [" + err + "]. Please try again.",
            buttons: [{ text: 'OK' }]
        });
        alert.present().then(function () {
        }).catch(function (ex) {
            console.log('Display alert exception', ex);
        });
    };
    AccountSigninPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_7__services_logger_service__["a" /* Logger */].banner("Sign-In");
        this.allowButtonPresses = true;
    };
    return AccountSigninPage;
}());
AccountSigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-signin\account-signin.html"*/'<ion-header>\n\n  <navbar title="Sign In" [showSignin]="false"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <h5>Sign-in using Cognito User Pools</h5>\n\n\n\n  <!--\n\n  <p *ngIf="submitted" style="color: #ea6153;">Please fill out all details accurately.</p>-->\n\n  <ion-list>\n\n    <form #signInForm="ngForm" novalidate>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input [(ngModel)]="userData.username" ngControl="username" name="username" type="text" #username="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="username.valid || (!signInButtonClicked && !forgotPasswordButtonClicked)" color="danger" padding-left>\n\n        Username is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input [(ngModel)]="userData.password" ngControl="password" name="password" type="password" #password="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="password.valid || !signInButtonClicked" color="danger" padding-left>\n\n        Password is required\n\n      </p>\n\n\n\n    </form>\n\n  </ion-list>\n\n\n\n  <br>\n\n\n\n  <ion-row responsive-sm>\n\n    <ion-col>\n\n      <button ion-button (click)="onSignIn(signInForm)" type="submit" primary block>Sign In</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="onForgotPassword(signInForm)" type="submit" primary block>Forgot password</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-signin\account-signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_global_state_service__["a" /* GlobalStateService */]])
], AccountSigninPage);

//# sourceMappingURL=account-signin.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomAuthorizerClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IamAuthorizerClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserPoolsAuthorizerClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NoAuthorizationClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spacefinder_sdk_api_DefaultApi__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomAuthorizerClient = (function () {
    function CustomAuthorizerClient(httpService) {
        httpService.addInterceptor(function (options) {
            options.headers.set('Authorization', __WEBPACK_IMPORTED_MODULE_3__account_management_service__["b" /* UserLoginService */].getIdToken());
            console.log('%cCustom Authorizer Request:\n', __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */].LeadInStyle, requestMethodToString(options.method), options.url, '\nHeaders:', options.headers.toJSON(), '\nBody:', options.body);
        });
        this.client = new __WEBPACK_IMPORTED_MODULE_2__spacefinder_sdk_api_DefaultApi__["a" /* DefaultApi */](httpService, __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */].API_ENDPOINT, null);
    }
    CustomAuthorizerClient.prototype.getClient = function () {
        return this.client;
    };
    return CustomAuthorizerClient;
}());
CustomAuthorizerClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */]])
], CustomAuthorizerClient);

var IamAuthorizerClient = (function () {
    function IamAuthorizerClient(http) {
        var httpService = new __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */](http);
        httpService.addInterceptor(function (options) {
            var awsSignConfig = {
                // AWS Region (default: 'eu-west-1')
                region: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */].REGION,
                // AWS service that is called (default: 'execute-api' -- AWS API Gateway)
                service: 'execute-api',
                // AWS IAM credentials, here some temporary credentials with a session token
                accessKeyId: __WEBPACK_IMPORTED_MODULE_3__account_management_service__["b" /* UserLoginService */].getAwsAccessKey(),
                secretAccessKey: __WEBPACK_IMPORTED_MODULE_3__account_management_service__["b" /* UserLoginService */].getAwsSecretAccessKey(),
                sessionToken: __WEBPACK_IMPORTED_MODULE_3__account_management_service__["b" /* UserLoginService */].getAwsSessionToken()
            };
            var signer = new awsSignWeb.AwsSigner(awsSignConfig);
            var request = {
                method: requestMethodToString(options.method),
                url: options.url,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: options.body
            };
            var signed = signer.sign(request);
            options.headers.set('Authorization', signed['Authorization']);
            options.headers.set('Accept', signed['Accept']);
            options.headers.set('Content-Type', signed['Content-Type']);
            options.headers.set('x-amz-date', signed['x-amz-date']);
            options.headers.set('x-amz-security-token', signed['x-amz-security-token']);
            console.log('%cIAM Authorization Request:\n', __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */].LeadInStyle, requestMethodToString(options.method), options.url, '\nHeaders:', options.headers.toJSON(), '\nBody:', options.body);
        });
        this.client = new __WEBPACK_IMPORTED_MODULE_2__spacefinder_sdk_api_DefaultApi__["a" /* DefaultApi */](httpService, __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */].API_ENDPOINT, null);
    }
    IamAuthorizerClient.prototype.getClient = function () {
        return this.client;
    };
    return IamAuthorizerClient;
}());
IamAuthorizerClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]])
], IamAuthorizerClient);

var UserPoolsAuthorizerClient = (function () {
    function UserPoolsAuthorizerClient(http) {
        var httpService = new __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */](http);
        httpService.addInterceptor(function (options) {
            options.headers.set('Authorization', __WEBPACK_IMPORTED_MODULE_3__account_management_service__["b" /* UserLoginService */].getIdToken());
            console.log('%cUser Pools Authorizer Request:\n', __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */].LeadInStyle, requestMethodToString(options.method), options.url, '\nHeaders:', options.headers.toJSON(), '\nBody:', options.body);
        });
        this.client = new __WEBPACK_IMPORTED_MODULE_2__spacefinder_sdk_api_DefaultApi__["a" /* DefaultApi */](httpService, __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */].API_ENDPOINT, null);
    }
    UserPoolsAuthorizerClient.prototype.getClient = function () {
        return this.client;
    };
    return UserPoolsAuthorizerClient;
}());
UserPoolsAuthorizerClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]])
], UserPoolsAuthorizerClient);

var NoAuthorizationClient = (function () {
    function NoAuthorizationClient(http) {
        var httpService = new __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */](http);
        httpService.addInterceptor(function (options) {
            console.log('%cRequest without authorization:\n', __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */].LeadInStyle, requestMethodToString(options.method), options.url, '\nHeaders:', options.headers.toJSON(), '\nBody:', options.body);
        });
        this.client = new __WEBPACK_IMPORTED_MODULE_2__spacefinder_sdk_api_DefaultApi__["a" /* DefaultApi */](httpService, __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */].API_ENDPOINT, null);
    }
    NoAuthorizationClient.prototype.getClient = function () {
        return this.client;
    };
    return NoAuthorizationClient;
}());
NoAuthorizationClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]])
], NoAuthorizationClient);

function requestMethodToString(requestmethod) {
    if (typeof requestmethod === 'string') {
        return requestmethod;
    }
    switch (requestmethod) {
        case __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Delete:
            return 'DELETE';
        case __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get:
            return 'GET';
        case __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Head:
            return 'HEAD';
        case __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Options:
            return 'OPTIONS';
        case __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Patch:
            return 'PATCH';
        case __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post:
            return 'POST';
        case __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Put:
            return 'PUT';
        default:
            return '';
    }
}
//# sourceMappingURL=spacefinder-api.service.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__(438);
/**
 * Spacefinder-API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable:no-unused-variable member-ordering */






var DefaultApi = (function () {
    function DefaultApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://cpoxt4iiyh.execute-api.us-east-1.amazonaws.com/development';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     *
     * @param userId
     * @param booking
     */
    DefaultApi.prototype.bookingsCreate = function (userId, booking, extraHttpRequestParams) {
        return this.bookingsCreateWithHttpInfo(userId, booking, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param userId
     * @param bookingId
     */
    DefaultApi.prototype.bookingsDelete = function (userId, bookingId, extraHttpRequestParams) {
        return this.bookingsDeleteWithHttpInfo(userId, bookingId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param userId
     * @param bookingId
     */
    DefaultApi.prototype.bookingsGet = function (userId, bookingId, extraHttpRequestParams) {
        return this.bookingsGetWithHttpInfo(userId, bookingId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.bookingsListByResourceId = function (locationId, resourceId, extraHttpRequestParams) {
        return this.bookingsListByResourceIdWithHttpInfo(locationId, resourceId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param userId
     */
    DefaultApi.prototype.bookingsListByUserId = function (userId, extraHttpRequestParams) {
        return this.bookingsListByUserIdWithHttpInfo(userId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param location
     */
    DefaultApi.prototype.locationsCreate = function (location, extraHttpRequestParams) {
        return this.locationsCreateWithHttpInfo(location, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsDelete = function (locationId, extraHttpRequestParams) {
        return this.locationsDeleteWithHttpInfo(locationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsGet = function (locationId, extraHttpRequestParams) {
        return this.locationsGetWithHttpInfo(locationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     */
    DefaultApi.prototype.locationsList = function (extraHttpRequestParams) {
        return this.locationsListWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsLocationIdOptions = function (locationId, extraHttpRequestParams) {
        return this.locationsLocationIdOptionsWithHttpInfo(locationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsLocationIdResourcesOptions = function (locationId, extraHttpRequestParams) {
        return this.locationsLocationIdResourcesOptionsWithHttpInfo(locationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.locationsLocationIdResourcesResourceIdBookingsOptions = function (locationId, resourceId, extraHttpRequestParams) {
        return this.locationsLocationIdResourcesResourceIdBookingsOptionsWithHttpInfo(locationId, resourceId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.locationsLocationIdResourcesResourceIdOptions = function (locationId, resourceId, extraHttpRequestParams) {
        return this.locationsLocationIdResourcesResourceIdOptionsWithHttpInfo(locationId, resourceId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     */
    DefaultApi.prototype.locationsOptions = function (extraHttpRequestParams) {
        return this.locationsOptionsWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     * @param resource
     */
    DefaultApi.prototype.resourcesCreate = function (locationId, resource, extraHttpRequestParams) {
        return this.resourcesCreateWithHttpInfo(locationId, resource, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.resourcesDelete = function (locationId, resourceId, extraHttpRequestParams) {
        return this.resourcesDeleteWithHttpInfo(locationId, resourceId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.resourcesGet = function (locationId, resourceId, extraHttpRequestParams) {
        return this.resourcesGetWithHttpInfo(locationId, resourceId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param locationId
     */
    DefaultApi.prototype.resourcesList = function (locationId, extraHttpRequestParams) {
        return this.resourcesListWithHttpInfo(locationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param userId
     * @param bookingId
     */
    DefaultApi.prototype.usersUserIdBookingsBookingIdOptions = function (userId, bookingId, extraHttpRequestParams) {
        return this.usersUserIdBookingsBookingIdOptionsWithHttpInfo(userId, bookingId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * @param userId
     */
    DefaultApi.prototype.usersUserIdBookingsOptions = function (userId, extraHttpRequestParams) {
        return this.usersUserIdBookingsOptionsWithHttpInfo(userId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     *
     * @param userId
     * @param booking
     */
    DefaultApi.prototype.bookingsCreateWithHttpInfo = function (userId, booking, extraHttpRequestParams) {
        var path = this.basePath + '/users/${userId}/bookings'
            .replace('${' + 'userId' + '}', String(userId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling bookingsCreate.');
        }
        // verify required parameter 'booking' is not null or undefined
        if (booking === null || booking === undefined) {
            throw new Error('Required parameter booking was null or undefined when calling bookingsCreate.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: booking == null ? '' : JSON.stringify(booking),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param userId
     * @param bookingId
     */
    DefaultApi.prototype.bookingsDeleteWithHttpInfo = function (userId, bookingId, extraHttpRequestParams) {
        var path = this.basePath + '/users/${userId}/bookings/${bookingId}'
            .replace('${' + 'userId' + '}', String(userId))
            .replace('${' + 'bookingId' + '}', String(bookingId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling bookingsDelete.');
        }
        // verify required parameter 'bookingId' is not null or undefined
        if (bookingId === null || bookingId === undefined) {
            throw new Error('Required parameter bookingId was null or undefined when calling bookingsDelete.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param userId
     * @param bookingId
     */
    DefaultApi.prototype.bookingsGetWithHttpInfo = function (userId, bookingId, extraHttpRequestParams) {
        var path = this.basePath + '/users/${userId}/bookings/${bookingId}'
            .replace('${' + 'userId' + '}', String(userId))
            .replace('${' + 'bookingId' + '}', String(bookingId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling bookingsGet.');
        }
        // verify required parameter 'bookingId' is not null or undefined
        if (bookingId === null || bookingId === undefined) {
            throw new Error('Required parameter bookingId was null or undefined when calling bookingsGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.bookingsListByResourceIdWithHttpInfo = function (locationId, resourceId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources/${resourceId}/bookings'
            .replace('${' + 'locationId' + '}', String(locationId))
            .replace('${' + 'resourceId' + '}', String(resourceId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling bookingsListByResourceId.');
        }
        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling bookingsListByResourceId.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param userId
     */
    DefaultApi.prototype.bookingsListByUserIdWithHttpInfo = function (userId, extraHttpRequestParams) {
        var path = this.basePath + '/users/${userId}/bookings'
            .replace('${' + 'userId' + '}', String(userId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling bookingsListByUserId.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param location
     */
    DefaultApi.prototype.locationsCreateWithHttpInfo = function (location, extraHttpRequestParams) {
        var path = this.basePath + '/locations';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'location' is not null or undefined
        if (location === null || location === undefined) {
            throw new Error('Required parameter location was null or undefined when calling locationsCreate.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: location == null ? '' : JSON.stringify(location),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsDeleteWithHttpInfo = function (locationId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}'
            .replace('${' + 'locationId' + '}', String(locationId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsDelete.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [];
        // authentication (spacefinder-custom-authorizer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsGetWithHttpInfo = function (locationId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}'
            .replace('${' + 'locationId' + '}', String(locationId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     */
    DefaultApi.prototype.locationsListWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/locations';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (spacefinder-userPool-authorizer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsLocationIdOptionsWithHttpInfo = function (locationId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}'
            .replace('${' + 'locationId' + '}', String(locationId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsLocationIdOptions.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     */
    DefaultApi.prototype.locationsLocationIdResourcesOptionsWithHttpInfo = function (locationId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources'
            .replace('${' + 'locationId' + '}', String(locationId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsLocationIdResourcesOptions.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.locationsLocationIdResourcesResourceIdBookingsOptionsWithHttpInfo = function (locationId, resourceId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources/${resourceId}/bookings'
            .replace('${' + 'locationId' + '}', String(locationId))
            .replace('${' + 'resourceId' + '}', String(resourceId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsLocationIdResourcesResourceIdBookingsOptions.');
        }
        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling locationsLocationIdResourcesResourceIdBookingsOptions.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.locationsLocationIdResourcesResourceIdOptionsWithHttpInfo = function (locationId, resourceId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources/${resourceId}'
            .replace('${' + 'locationId' + '}', String(locationId))
            .replace('${' + 'resourceId' + '}', String(resourceId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling locationsLocationIdResourcesResourceIdOptions.');
        }
        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling locationsLocationIdResourcesResourceIdOptions.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     */
    DefaultApi.prototype.locationsOptionsWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/locations';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     * @param resource
     */
    DefaultApi.prototype.resourcesCreateWithHttpInfo = function (locationId, resource, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources'
            .replace('${' + 'locationId' + '}', String(locationId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling resourcesCreate.');
        }
        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new Error('Required parameter resource was null or undefined when calling resourcesCreate.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (spacefinder-custom-authorizer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            headers: headers,
            body: resource == null ? '' : JSON.stringify(resource),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.resourcesDeleteWithHttpInfo = function (locationId, resourceId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources/${resourceId}'
            .replace('${' + 'locationId' + '}', String(locationId))
            .replace('${' + 'resourceId' + '}', String(resourceId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling resourcesDelete.');
        }
        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling resourcesDelete.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [];
        // authentication (spacefinder-custom-authorizer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     * @param resourceId
     */
    DefaultApi.prototype.resourcesGetWithHttpInfo = function (locationId, resourceId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources/${resourceId}'
            .replace('${' + 'locationId' + '}', String(locationId))
            .replace('${' + 'resourceId' + '}', String(resourceId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling resourcesGet.');
        }
        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new Error('Required parameter resourceId was null or undefined when calling resourcesGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param locationId
     */
    DefaultApi.prototype.resourcesListWithHttpInfo = function (locationId, extraHttpRequestParams) {
        var path = this.basePath + '/locations/${locationId}/resources'
            .replace('${' + 'locationId' + '}', String(locationId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling resourcesList.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (sigv4) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param userId
     * @param bookingId
     */
    DefaultApi.prototype.usersUserIdBookingsBookingIdOptionsWithHttpInfo = function (userId, bookingId, extraHttpRequestParams) {
        var path = this.basePath + '/users/${userId}/bookings/${bookingId}'
            .replace('${' + 'userId' + '}', String(userId))
            .replace('${' + 'bookingId' + '}', String(bookingId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling usersUserIdBookingsBookingIdOptions.');
        }
        // verify required parameter 'bookingId' is not null or undefined
        if (bookingId === null || bookingId === undefined) {
            throw new Error('Required parameter bookingId was null or undefined when calling usersUserIdBookingsBookingIdOptions.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     *
     * @param userId
     */
    DefaultApi.prototype.usersUserIdBookingsOptionsWithHttpInfo = function (userId, extraHttpRequestParams) {
        var path = this.basePath + '/users/${userId}/bookings'
            .replace('${' + 'userId' + '}', String(userId));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling usersUserIdBookingsOptions.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return DefaultApi;
}());
DefaultApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], String, __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]])
], DefaultApi);

//# sourceMappingURL=DefaultApi.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* unused harmony export COLLECTION_FORMATS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var BASE_PATH = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* OpaqueToken */]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration() {
    }
    return Configuration;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__navbar_navbar__["a" /* NavbarComponent */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__navbar_navbar__["a" /* NavbarComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_overrides_generated__ = __webpack_require__(350);

// DO NOT DELETE THIS FILE!!!
//==============================================
// Default configurations
//==============================================
var Config = {
    USER_POOL_ID: 'us-east-1_79D6i69td',
    USER_POOL_DOMAIN_NAME: 'spacefinder-development-us-east-1-79d6i69td.auth.us-east-1.amazoncognito.com',
    USER_POOL_DOMAIN_PREFIX: 'spacefinder-development-us-east-1-79d6i69td',
    CLIENT_ID: '58pvvcoktlrhcng34ve68i74uf',
    IDENTITY_POOL_ID: 'us-east-1:aac5e9e6-ff3a-4586-b984-2cd88b693f69',
    REGION: 'us-east-1',
    PROFILE_IMAGES_S3_BUCKET: 'spacefinder-development-stack-userdatabucket-11wtuhxdpzbp5',
    API_ENDPOINT: 'https://g2drvofsu8.execute-api.us-east-1.amazonaws.com/development',
    DEVELOPER_MODE: false,
    CODE_VERSION: '1.0.0',
    DEFAULT_USERNAMES: ['user1', 'admin1'] // default users cannot change their passwords
};
//==============================================
// Merge in the values from the auto-generated config.
// If there are are conflicts, then the values from the
// auto-generated config will override
function mergeConfigurations() {
    for (var _i = 0, _a = Object.keys(__WEBPACK_IMPORTED_MODULE_0__config_overrides_generated__["a" /* configOverridesGenerated */]); _i < _a.length; _i++) {
        var attributeName = _a[_i];
        Config[attributeName] = __WEBPACK_IMPORTED_MODULE_0__config_overrides_generated__["a" /* configOverridesGenerated */][attributeName];
    }
}
mergeConfigurations();

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_management_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_confirmation_code_account_confirmation_code__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_state_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountSignupPage = (function () {
    function AccountSignupPage(navCtrl, alertCtrl, userRegistrationService, globals) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userRegistrationService = userRegistrationService;
        this.globals = globals;
        this.accountConfirmationCodePage = __WEBPACK_IMPORTED_MODULE_3__account_confirmation_code_account_confirmation_code__["a" /* AccountConfirmationCodePage */];
        this.userData = {
            username: '',
            password: '',
            givenName: '',
            familyName: '',
            email: ''
        };
        this.submitted = false;
    }
    AccountSignupPage.prototype.onSignUp = function (form) {
        var _this = this;
        this.submitted = true;
        if (form && form.valid) {
            __WEBPACK_IMPORTED_MODULE_2__services_account_management_service__["c" /* UserRegistrationService */].signUp(this.userData).then(function () {
                // Sign-up successful. Redirect to confirm sign-up page.
                _this.navCtrl.push(_this.accountConfirmationCodePage);
            }).catch(function (err) {
                _this.showAlert('Sign-up error', err.message);
                console.log(err);
            });
        }
    };
    AccountSignupPage.prototype.showAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        console.log('OK clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AccountSignupPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* Logger */].banner("Register");
    };
    return AccountSignupPage;
}());
AccountSignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account-signup',template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-signup\account-signup.html"*/'<ion-header>\n\n  <navbar title="Register" [showSignin]="false" [showSignup]="false"></navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <p *ngIf="submitted && (!username.valid || !password.valid || !lastName.valid)" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n\n\n  <form #signUpForm="ngForm" novalidate>\n\n  <ion-list>\n\n\n\n      <p>\n\n        Registration is fast and free. Once you\'re a member, you\'ll be able to book conference rooms and other resources. After you fill out this form, you will receive an email with a verification code.\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input [(ngModel)]="userData.username" name="username" type="text" #username="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="username.valid || submitted == false" color="danger"  padding-left>\n\n        Username is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input [(ngModel)]="userData.password" name="password" type="password" #password="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n        Password is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>First name</ion-label>\n\n        <ion-input [(ngModel)]="userData.givenName" name="firstName" type="text" #firstName="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="firstName.valid || submitted == false" color="danger" padding-left>\n\n        First Name is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Last name</ion-label>\n\n        <ion-input [(ngModel)]="userData.familyName" name="lastName" type="text" #lastName="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="lastName.valid || submitted == false" color="danger" padding-left>\n\n        Last Name is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating>E-mail address</ion-label>\n\n        <ion-input [(ngModel)]="userData.email" name="email" type="text" #email="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <p [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n        E-mail address is required\n\n      </p>\n\n\n\n    </ion-list>\n\n  </form>\n\n\n\n  <br>\n\n\n\n  <ion-row responsive-sm>\n\n    <ion-col>\n\n      <button ion-button (click)="onSignUp(signUpForm)" type="submit" primary block>Sign Up</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="navCtrl.pop()" block>Cancel</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\account-signup\account-signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_account_management_service__["c" /* UserRegistrationService */], __WEBPACK_IMPORTED_MODULE_4__services_global_state_service__["a" /* GlobalStateService */]])
], AccountSignupPage);

//# sourceMappingURL=account-signup.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings_bookings__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_list_location_list__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__location_list_location_list__["a" /* LocationListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__bookings_bookings__["a" /* BookingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.showRoot = function (tabs, index) {
        // if a child page is associated with that Tab, then pop it off the NavController stack
        var tab = tabs.getByIndex(index);
        var views = tab['_views'];
        if (views.length > 1) {
            var navController = views[views.length - 1].instance.navCtrl;
            if (navController) {
                navController.popToRoot({ animate: false });
            }
        }
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\tabs\tabs.html"*/'<ion-tabs #mainTabs [selectedIndex]="mySelectedIndex">\n\n  <ion-tab [root]="tab1Root" tabTitle="Welcome"     (ionSelect)="showRoot(mainTabs,0)" tabIcon="ribbon"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Resources"   (ionSelect)="showRoot(mainTabs,1)" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Bookings"    (ionSelect)="showRoot(mainTabs,2)" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Account"     (ionSelect)="showRoot(mainTabs,3)" tabIcon="contact"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\IT\Projects\aws\aws-serverless-auth-reference-app\app\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map