import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.html',
  styleUrl: './signal-component.css',
})
export class SignalComponent {

  coureName: string = "Angular";
  
  // how to create signal

  ngVersion = signal("22");
  courseDuration = signal<string>('2 months');

  cgDuration(){

    // by change the content of variable

    this.coureName = "happy";

    // but in signal we use set and get

    this.courseDuration.set("to you");

  }

}
