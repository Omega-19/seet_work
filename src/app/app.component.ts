import { Component } from '@angular/core';
import { interval, Observable, take } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-music';
  receivedText: string | undefined;
  //Insertion de chronomètre  dans notre appli
  timerObservable!: Observable<string>;

  //!: opérateur d'affirmation de non nullité ou opérateur de confiance
  count!: string

  constructor(){}

  ngOnInit(): void{
    this.timerObservable = interval(1000).pipe(
      take(3600 * 12),
      map(num => {
        const hours = Math.floor(num / 3600);
        const minutes = Math.floor(num / 60);
        return `Timer: ${this.format(hours)} h ${this.format(minutes - hours * 60)} min ${this.format(num - minutes * 60)}s`;
      })
    )
    this.timerObservable.subscribe(time => {
      this.count = time;
    })
  }

  format(num: number){
    return (num < 10 ? '0' : '') + num;
  }
  parentReceive($event: string){
    this.receivedText = $event;
  }
}
