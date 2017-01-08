import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
    <div>
    <app-bar></app-bar>
      <main class="main">
       <notes-container></notes-container>
      </main>
    </div>     
  `
})
export class AppMainContainer {};