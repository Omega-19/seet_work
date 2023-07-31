import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [fadeInAnimation]
})
export class OpenCloseComponent {
  isOpen: boolean = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}