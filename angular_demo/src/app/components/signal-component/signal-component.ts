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
  // define the signal type
  courseDuration = signal<string>('2 months');

  // creating the array by using signal
  cityArray = signal<string[]> (["RWP","lrh"]);

  // now create the obj

studentObj = signal<any>({
  name: 'AAA',
  city: 'Pune'
})

  cgDuration(){
    // by change the content of variable
    this.coureName = "happy";
    // but in signal we use set and get
    this.courseDuration.set("to you");

  }
  
  addcity(cityName: string){
    this.cityArray.update( (old: string[]) => [...old, cityName] )
  }

  chngeCity(){
    this.studentObj.update( (oldObj: any) => ({...oldObj,city: 'PSW' }) )
  }

}
