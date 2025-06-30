import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('douglas');
  nameUpper = signal('DOUGLAS');
  fullName = signal('DoUGlaS');

  customDate = signal(new Date());

  tickinDateEffect = effect(() => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    return () => clearInterval(interval);
  });

  //TODO: Este es otro metodo que se puede usar para limpiar el efecto

  //   tickinDateEffect = effect((onCleanup) => {
  //     const interval = setInterval(() => {
  //       this.customDate.set(new Date());
  //       console.log('tick');
  //     }, 1000);

  //     onCleanup(() => clearInterval(interval));
  //   });
  // }
}
