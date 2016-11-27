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
    var appRoutes, AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    component: DashboardComponent,
                    data: {
                        title: 'Amazon by @Hackages!'
                    }
                },
                {
                    path: 'books',
                    component: BookStoreComponent,
                    data: {
                        title: 'Bookstore by Hackages'
                    }
                }
            ];
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
                        declarations: [
                            DashboardComponent,
                            HeaderComponent,
                            MenubarComponent,
                            SectionComponent,
                            FilterCategoryComponent,
                            BookComponent,
                            SidebarComponent,
                            BookStoreComponent,
                            ShellComponent
                        ],
                        bootstrap: [ShellComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.1.js.map