import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavOasisComponent } from './components/nav-oasis/nav-oasis.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NavOasisComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OASIS';
}
