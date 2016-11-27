import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'bs-sidebar',
    templateUrl: 'sidebar.template.html'
})
export class SidebarComponent {
    @Output() sidebarHasBeenToggled = new EventEmitter();
    @Output() searchTermChanged = new EventEmitter();
    
    navClosed: boolean = true;

    toggleSideBar(event: Event): void {
        event.preventDefault();
        this.navClosed = !this.navClosed;
        this.sidebarHasBeenToggled.emit(this.navClosed);
    }

    search(searchTerm) {
        this.searchTermChanged.emit(searchTerm);
    }
}