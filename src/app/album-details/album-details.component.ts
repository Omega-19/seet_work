import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  // Propriété de stockage de l'album en instance au niveau du parent
  @Input() album : Album;

  // Propriété emettrice de l'album en instance vers le parent
  @Output() onPlay : EventEmitter<Album> = new EventEmitter();

  // Propriété stockant la liste de l'album en instance
  albumList : List[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.albumList = ALBUMS_LIST.find((album) => album.id === this.album.id).list;
  }

  /**
   * Méthode pour l'émission de l'album vers le parent
   * @param album Album
   */
  play(album : Album) {
    this.onPlay.emit(album);
  }

}
