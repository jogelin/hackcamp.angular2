import { Component, Input } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'bs-gallery-item',
    template: `
        <ng-content></ng-content>
    `
})

export class GalleryItemComponent {
    @Input() item: any;
}