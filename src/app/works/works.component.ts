import { Component } from '@angular/core';
import { cards } from './works-cards';
import { Router } from '@angular/router';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
data = cards

constructor (public router: Router){}

}
