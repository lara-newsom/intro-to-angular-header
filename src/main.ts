import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    HeaderComponent, 
  ],
  template: `
  <section class="main-content">
    <app-header>
      <div 
        style="height: 200px; text-align: center;"
      >Projected Content can be replaced with router-outlet</div>
    </app-header>
  </section>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers:[importProvidersFrom([BrowserAnimationsModule])]
});
