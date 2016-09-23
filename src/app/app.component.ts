import { Component, ViewEncapsulation } from '@angular/core';

import { ApiService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(public apiService: ApiService) { }
}
