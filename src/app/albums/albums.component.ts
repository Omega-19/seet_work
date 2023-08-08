import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
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
  titlePage: string = "Page princiaple Albums Music";
  albums: Album[] = [];
  selectedAlbum: Album| undefined; // je suis sur qu'une valeur sera passé au moment opportun
  status: string | null = null;

  constructor(
    private albumService: AlbumService
  ) {
    console.log(`${this.albumService.count()} albums trouvés`);
  }

  ngOnInit(): void {
    this.albumService
              // .order((a: Album, b: Album) => a.duration - b.duration) // ordonne les albums
              // .limit(0, this.albumService.count()) // renvoyer une sous-partie
              // .getAlbums(); // recupère les albums
              .paginate(0,this.albumService.paginateNumberPage())
              .subscribe({
                next: (alb: Album[]) => {
                  this.albums = alb
                }
              });
  }

  onSelect(album: Album) {
    // console.log(album);
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
  onSetPaginate($event : {start: number, end: number}){
    //récupérer les albums compris entre [start et end]
    this.albumService.paginate($event.start, $event.end)
    .subscribe({
      next: (alb: Album[]) => this.albums = alb
    });
  }
}