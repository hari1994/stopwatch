import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TimewatchPipe } from './timewatch.pipe';

let component: any;
let fixture: any;
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, TimewatchPipe]
  }).compileComponents();
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
});

  it(`should have as title 'Resume_app'`, () => {
    expect(component.title).toEqual('Resume_app');
  });

  it(`should have as title 'Resume_app'`, () => {
    component.timesValue = 0;
    let stopwatch = "1";
    component.stopWatch(stopwatch);
    expect(component.timesValue).toEqual('1');
  });

});