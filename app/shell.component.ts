import { Component, Input } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';


// Our own components and services
import { Section } from './types/section';

@Component({
    moduleId: __moduleName,
    styles: [`
     a.section {
        text-align: center;
        color: black;
        font-size: 20px;
        font-weight: 600;
        background: aliceblue;
     }
    `],
    selector: 'bs-shell',
    template: `
        <bs-header [appTitle]="title"></bs-header>

        <main class="main-content">
            <router-outlet></router-outlet>
        </main>
    `
})
export class ShellComponent {
    title: string;

    constructor(private route: Router) { }

    ngOnInit() {
        // Asynchronous process 

        this.route.events.subscribe((data) => {
            if (data instanceof RoutesRecognized) {
                this.title = data.state.root.firstChild.data.title;
            }
        });
   }
}