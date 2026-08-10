import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './components/users/users';
import { Admin } from './components/admin/admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Users,Admin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_demo');
}
