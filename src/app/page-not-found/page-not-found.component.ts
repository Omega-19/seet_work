import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  animations: [fadeInAnimation]
})
export class PageNotFoundComponent {

}
