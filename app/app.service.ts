import { Injectable } from '@angular/core';

import { sections } from './mocks/sections';
import { Section } from './types/section';

@Injectable()
export class AppService {
    getSections(): Promise<Section[]> {
        return Promise.resolve(sections);
    }

    getSectionsSlowly(): Promise<Section[]> {
        return new Promise<Section[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getSections());
    }

}