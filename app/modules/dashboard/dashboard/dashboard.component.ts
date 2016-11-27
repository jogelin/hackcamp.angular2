import { Component, Output, EventEmitter } from '@angular/core';
import { sections } from '../../../mocks/sections';
import { Section } from '../../../types/section';
import { AppService } from '../../../app.service';

@Component({
    moduleId: __moduleName,
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html',
    providers: [ AppService ]
})
export class DashboardComponent {
    sections//: Section[];

    constructor(private appService: AppService){}

    ngOnInit() {

        // Asynchronous process 
        this.sections = this.appService.getAsyncSections()
    }
}