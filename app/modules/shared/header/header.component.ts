import { Component, Input } from '@angular/core';


@Component({
    moduleId: __moduleName,
    selector: 'bs-header',
    templateUrl: 'header.template.html',
    providers: []
})
export class HeaderComponent {
    @Input('appTitle') title: string;


}