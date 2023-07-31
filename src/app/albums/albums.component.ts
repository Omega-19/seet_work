import { Component } from '@angular/core';

import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  selectedAlbum!: Album;

  pageTitle: string = "Albums Music";

  albums: Album[] = ALBUMS;

  status: string |null = null;

  constructor(){ }

  ngOnInit(){  }

  onSelect(album: Album){
    this.selectedAlbum = album;    
  }

  playParent($event: Album){
    this.status = $event.id;
  }

}
