import { Component } from '@angular/core';
import { tech } from './skils.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
data = tech

}
