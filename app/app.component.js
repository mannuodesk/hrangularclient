"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_component_1 = require('./Components/header.component');
var sidebar_component_1 = require('./Components/sidebar.component');
var footer_component_1 = require('./Components/footer.component');
var question_component_1 = require('./Components/question.component');
var users_component_1 = require('./Components/users.component');
var dashboard_component_1 = require('./Components/dashboard.component');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './../views/MainContainer.html',
            directives: [header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, footer_component_1.FooterComponent, question_component_1.QuestionComponent, router_1.RouterLink, router_2.ROUTER_DIRECTIVES, users_component_1.UsersComponent, dashboard_component_1.DashboardComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map