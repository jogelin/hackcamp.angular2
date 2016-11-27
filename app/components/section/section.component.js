System.register(['@angular/core', '../../types/section'], function(exports_1, context_1) {
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
    var core_1, section_1;
    var SectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (section_1_1) {
                section_1 = section_1_1;
            }],
        execute: function() {
            SectionComponent = (function () {
                function SectionComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', section_1.Section)
                ], SectionComponent.prototype, "section", void 0);
                SectionComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        styles: ["\n     a.section {\n        text-align: center;\n        color: black;\n        font-size: 20px;\n        font-weight: 600;\n        background: aliceblue;\n     }\n    "],
                        selector: 'bs-section',
                        template: "\n        <a [href]=\"section.name | lowercase\" class=\"section\">\n            <img [src]=\"section.cover\"/>\n            <div class=\"section_name\">{{section.name}}</div>\n        </a> \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SectionComponent);
                return SectionComponent;
            }());
            exports_1("SectionComponent", SectionComponent);
        }
    }
});
//# sourceMappingURL=section.component.js.map