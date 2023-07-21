import { Component , OnInit, Input} from '@angular/core';
import { Album } from '../album';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album] du parent dans le sélecteur
  @Input() album!: Album;
  constructor() { }
  ngOnInit() {
    console.log(this.album); // pour l'instant c'est undefined ... C'est normal
  }
  ngOnChanges(){

  }
}
