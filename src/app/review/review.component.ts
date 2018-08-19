import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  isVisible:boolean = true;
  isVisibleCart:boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  route(){
     this.router.navigate(['/acknowledgement']);
  }
}