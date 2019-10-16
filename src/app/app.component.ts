import { Component } from '@angular/core';
import { version } from '../../package.json';
import { name } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'CarList Demo FrontEnd';
  public title: string  = name;
  public version: string = version;
}
