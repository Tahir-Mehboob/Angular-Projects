import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './components/users/users';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Users,Admin,DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_demo');
}
