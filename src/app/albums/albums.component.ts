import { Component, OnInit } from "@angular/core";
import { Album } from "../album";
import { AlbumService } from "../album.service";
import { fadeInAnimation } from "../animation.module";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {
  titlePage: string = "Page principale Albums Music";
  albums!: Album[];
  selectedAlbum: Album| undefined; // je suis sur qu'une valeur sera passé au moment opportun
  status: string | null = null;

  constructor(
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumService
    .paginate(0, this.albumService.paginateNumberPage())
    .subscribe({
      next: (alb: Album[]) => {
        this.albums = alb
      }
    });
  }

  onSelect(album: Album) {
    this.selectedAlbum = album;
  }

  playParent($event: Album) {
    this.status = $event.id;
  }

  search($event: Album[]) {
    if ($event) {
      this.albums = $event;
    }
  }

  resetSelectedAlbum() {
    this.selectedAlbum = undefined;
  }

  onSetPaginate($event: {start: number, end: number}) {
    // Récupérer les albums compris entre [start et end]
    this.albumService.paginate($event.start, $event.end)
      .subscribe({
        next: (alb: Album[]) => this.albums = alb
      });
  }
}