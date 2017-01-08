import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
    <div>
    <app-bar></app-bar>
      <main>
        content here
      </main>
    </div>     
  `
})
export class AppMainContainer {};