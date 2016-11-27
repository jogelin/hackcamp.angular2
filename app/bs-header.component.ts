import { Component, Input } from '@angular/core';

@Component({
    selector: 'bs-header',
    template: `
        <header class="header">
            <div class='overlay'>
                <div class='logo'>
                    <h1>{{title}}</h1>
                </div>
            </div>
        </header>
    `,
})
export class HeaderComponent {
    @Input() title: string;
}