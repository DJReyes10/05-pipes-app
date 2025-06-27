import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('douglas');
  nameUpper = signal('DOUGLAS');
  fullName = signal('DoUGlaS');
}
