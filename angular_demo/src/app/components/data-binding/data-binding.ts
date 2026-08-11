import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding { 
  // basic primitive data types
  // string , number ,  boolean , date 
  
  courseName: string = 'Angular 20';
  isActive: boolean = false;
  currentDate: Date = new Date();
  rollNo = signal<number>(222);

  minTestLength = 5;

  spanClassName = 'classColor'

  constructor() {
    console.log(this.courseName);
    console.log(this.isActive);
    console.log(this.currentDate);
    console.log(this.rollNo());

    this.courseName = 'updated value';
    console.log(this.courseName);

    setTimeout(()=>{
        this.rollNo.set(786);
    },1000);

  }
}