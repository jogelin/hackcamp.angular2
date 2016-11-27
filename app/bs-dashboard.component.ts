import { Component, OnInit } from '@angular/core';
import { Section } from './types/section';
import { AppService } from './app.service';

@Component({
    selector: 'bs-dashboard',
    template: `
        <bs-header [title]="title"></bs-header>
        <bs-menubar>
            <div>Mon menu</div>
        </bs-menubar>
        <bs-section [sections]="sections | async"></bs-section>
    `,
})
export class DashboardComponent implements OnInit  {
    title: string = "Amazon by @Hackages!";
    sections: Section[] = [];

    constructor(private appService: AppService) { }

    ngOnInit(): void { 
        this.getSections();
    }

    getSections(): void {
        this.sections = this.appService.getSectionsSlowly();
    }
   
}