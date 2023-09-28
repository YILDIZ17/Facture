import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
  date = '';
  prix: number = 0;
  DureeMission: number = 0;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onPrixChange(value: string) {
    this.prix = parseFloat(value);
  }

  onDureeMissionChange(value: string) {
    this.DureeMission = parseInt(value) * this.prix;
  }


}
