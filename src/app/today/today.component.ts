import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'button-toggle-overview-example',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent {

}
