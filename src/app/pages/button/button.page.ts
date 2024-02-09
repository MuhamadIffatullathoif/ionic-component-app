import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  public favorite: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.favorite = !this.favorite;
  }
}
