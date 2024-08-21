import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppbarComponent } from "./appbar/appbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppbarComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoapp';
}
