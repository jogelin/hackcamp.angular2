import { Component, Input } from '@angular/core';

// Our own components and services
import { Section } from '../../types/section';

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
    selector: 'bs-section',
    template: `
        <a [href]="section.name | lowercase" class="section">
            <img [src]="section.cover"/>
            <div class="section_name">{{section.name}}</div>
        </a> 
    `
})
export class SectionComponent {
    @Input() section: Section;
}