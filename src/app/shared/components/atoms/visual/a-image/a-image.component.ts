import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-image',
  templateUrl: './a-image.component.html',
  styleUrls: ['./a-image.component.scss']
})
export class AImageComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
