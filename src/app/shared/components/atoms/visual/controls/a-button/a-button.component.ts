import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.scss']
})
export class AButtonComponent implements OnInit {
  public type:string = "button";


  constructor() { }

  ngOnInit(): void {
  }

}
