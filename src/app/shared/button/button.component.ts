import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string;
  @Input() btnClass: string;
  @Input() wrapperClass: string;
  @Output() clickEvent = new EventEmitter(); 
  constructor() { }
  ngOnInit() {
  }
  buttonClick(){
      this.clickEvent.emit();
  }
}