System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MenubarCategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MenubarCategoryComponent = (function () {
                function MenubarCategoryComponent() {
                    this.loading = true;
                }
                MenubarCategoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.categories.then(function () { return _this.loading = false; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MenubarCategoryComponent.prototype, "categories", void 0);
                MenubarCategoryComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'bs-menubar-category',
                        template: "\n        <bs-menubar>\n            <ul>\n                <li *ngIf=\"loading\">Loading...</li>\n                <template [ngIf]=\"!loading\">\n                    <li class=\"placeholder\">\n                        <a data-type=\"all\" href=\"#0\">All</a>\n                    </li>\n                    <li *ngFor=\"let category of categories | async\" (click)=\"changeCategory(category)\">\n                        <a class.selected=\"category.selected\" href=\"#0\">{{ category.name }}</a>\n                    </li>\n                </template>\n            </ul>\n\n        </bs-menubar>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenubarCategoryComponent);
                return MenubarCategoryComponent;
            }());
            exports_1("MenubarCategoryComponent", MenubarCategoryComponent);
        }
    }
});
//# sourceMappingURL=menubar-category.component.js.map