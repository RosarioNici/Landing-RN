import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { AutoTypeWriterDirectiveDirective } from './auto-type-writer-directive.directive';
import { MeComponent } from './me/me.component';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    AutoTypeWriterDirectiveDirective,
    MeComponent,
    HeroComponent,
    ExperienceComponent,
    WorksComponent,
    SkillsComponent,
    ContactsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
