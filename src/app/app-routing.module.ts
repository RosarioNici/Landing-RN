import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './me/me.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'Rosario', component: AboutComponent},
{path: 'About', component: MeComponent},
{path: 'Experience', component: ExperienceComponent},
{path: 'Works', component: WorksComponent},
{path: 'Skills', component: SkillsComponent},


]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
