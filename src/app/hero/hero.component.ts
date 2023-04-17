import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public typewriter_text: string = "HELLO MY NAME IS ROSARIO AND I'M A Jr. FULL-STACK WEB DEVELOPER";
public typewriter_display: string = "";

typingCallback(that: this) {
  let total_length = that.typewriter_text.length;
  let current_length = that.typewriter_display.length;
  if (current_length < total_length) {
    that.typewriter_display += that.typewriter_text[current_length];
    setTimeout(that.typingCallback, 150, that);
  }
}
ngOnInit() {
  this.typingCallback(this);
}

}
