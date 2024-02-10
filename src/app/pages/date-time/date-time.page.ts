import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  public birthDate: Date = new Date();
  public max: Date = new Date(this.birthDate.getTime() + (24 * 60 * 60 * 1000));
  @ViewChild("datetime") element!: IonDatetime;

  constructor() { }

  ngOnInit() {
    console.log(this.birthDate);
    console.log(this.max);
  }

  changeDate(event: any) {
    console.log(event.detail.value);
  }

  onChangeCustom() {
    this.element.confirm(true)
    console.log(this.element.value)
    console.log(this.element.confirm())
  }

}
