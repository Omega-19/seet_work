import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [fadeInAnimation]
})
// à chaque "hook" son interface
export class AlbumDetailsComponent implements OnInit, OnChanges {
  @Input() album: Album | undefined; // propriété liée qui sera passée par le parent
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  @Output() onHide: EventEmitter<Album> = new EventEmitter();

  albumLists: List[] = [];
  songs: string[] | undefined = []; // tableau qui stock la liste des chansons de l'album

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
  }

  // quand il y a du nouveau
  ngOnChanges(): void {
    if (this.album) {
     this.albumService.getAlbumList(this.album.id).subscribe(
      (albumList) => {
        this.songs = albumList.list;
      }
     );
    }

  }
//commmunication de l'enfant vers le parent
  play(songs: Album) {
    // emettre un album vers le parent
    this.onPlay.emit(songs);
    this.albumService.switchOn(songs);
  }

  shuffleAlbum(songs: string[]) {
    this.songs = this.albumService.shuffle(songs);
  }

  hide(album: Album) {
    this.onHide.emit(album);
  }
  
}
