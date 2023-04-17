import { Component } from '@angular/core';
import { cards } from './works-cards';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
data = cards
}
