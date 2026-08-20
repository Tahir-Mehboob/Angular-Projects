import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './components/users/users';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal-component/signal-component';
import {ControlFlow } from './components/control-flow/control-flow';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Users,Admin,DataBinding,SignalComponent,ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_demo');
}