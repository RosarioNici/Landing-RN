import { Component } from '@angular/core';
import { tech } from './skils.data';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
data = tech

constructor (public router: Router){}

}
