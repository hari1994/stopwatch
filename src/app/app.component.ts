import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume_app';
  timesValue!: any;

  stopWatch(startValue: string) {
      this.timesValue = startValue;
  }
}


