import { Section } from './types/section';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'bs-section',
    styles: [`
        a.section {
            text-align: center;
            color: black;
            font-size: 20px;
            font-weight: 600;
            background: aliceblue;
        }
    `],
    template: `
        <section class="gallery">
            <ul>
            <a [href]="section.name" class="section" *ngFor="let section of sections">
                <img [src]="section.cover"/>
                <div [class]="section_name">{{section.name}}</div>
            </a> 
            </ul>
        </section>
    `,
})
export class SectionComponent {
    @Input() sections: Section[];
}