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
    var SectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SectionComponent = (function () {
                function SectionComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SectionComponent.prototype, "sections", void 0);
                SectionComponent = __decorate([
                    core_1.Component({
                        selector: 'bs-section',
                        styles: ["\n        a.section {\n            text-align: center;\n            color: black;\n            font-size: 20px;\n            font-weight: 600;\n            background: aliceblue;\n        }\n    "],
                        template: "\n        <section class=\"gallery\">\n            <ul>\n            <a [href]=\"section.name\" class=\"section\" *ngFor=\"let section of sections\">\n                <img [src]=\"section.cover\"/>\n                <div [class]=\"section_name\">{{section.name}}</div>\n            </a> \n            </ul>\n        </section>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], SectionComponent);
                return SectionComponent;
            }());
            exports_1("SectionComponent", SectionComponent);
        }
    }
});
//# sourceMappingURL=bs-section.component.js.map