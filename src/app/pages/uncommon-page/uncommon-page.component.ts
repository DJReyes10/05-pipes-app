import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Douglas Reyes',
  gender: 'male',
  age: 26,
  address: 'Tegucigalpa, Francisco Morazán, Honduras',
};

const client2 = {
  name: 'Pamela Anderson',
  gender: 'female',
  age: 30,
  address: 'San Pedro Sula, Cortés, Honduras',
};
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // Ejemplo de uso de un pipe personalizado
  // i18nSelectPipe
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
}
