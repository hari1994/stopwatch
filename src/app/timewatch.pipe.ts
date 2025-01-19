import { Pipe, PipeTransform } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Pipe({
  name: 'timewatch',
  pure: false
})
export class TimewatchPipe implements PipeTransform {
  private timestart: number = 1 + 1000;
  cacheValue!: number;
  latestValue: number = 0;
  stopSubscribe!: Subscription

  transform(value: string) {
    if (value == 'start') {
      this.timestart = this.timestart;
    } else if (value == 'stop') {
      this.stopSubscribeCall();
      this.cacheValue = 0;
      return this.latestValue
    } else if (value == 'reset') {
      this.stopSubscribeCall();
      this.timestart = 1 + 1000;
      return this.latestValue = 0;
    }
    if (this.cacheValue == this.timestart || value == undefined || null) {
      return this.latestValue
    }
    this.cacheValue = +this.timestart;
    this.stopSubscribe = interval(this.timestart).subscribe((values) => {
      this.latestValue = this.latestValue ? ++this.latestValue : values
      console.log('values', this.latestValue);
    })
    return this.latestValue;
  }

  stopSubscribeCall() {
    if (this.stopSubscribe) {
      this.stopSubscribe.unsubscribe();
    }
  }

}
