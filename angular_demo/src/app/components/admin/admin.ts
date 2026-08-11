import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit,AfterViewInit{

  constructor(){
    console.log("constructor executed") 
    // why use propery initialization
  }
  

  ngOnInit(): void {

    // why use it api call
    // subscription

    console.log("ngOnInit")
    //throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
   console.log(" after view on it");
  }



}
