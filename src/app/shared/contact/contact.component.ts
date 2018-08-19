import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [AppService]
})
export class ContactComponent implements OnInit {
  personData: any = {};
  @Input() isVisible: boolean;
  @Input() isVisibleCart: boolean;
  @Input() isVisibleSave: boolean;
  constructor(private ser: AppService) {
  }

  onKey(event: any) { 
    this.personData.name = event.target.value; 
  }

  onKeyT(event: any) { 
    this.personData.lastname = event.target.value; 
  }

  ngOnInit() {
    
    this.ser.getData().subscribe((personData) => {
      console.log(JSON.stringify(personData));
      this.personData = personData;

    })
  }

  editClick(){
    
    this.isVisibleCart =true;
    this.isVisibleSave =true;
    this.isVisible = false;
    console.log(this.isVisible);
  }
  saveClick(){
    this.isVisibleSave =false;
    this.isVisible = true;
    this.isVisibleCart =false;
    
  }

}