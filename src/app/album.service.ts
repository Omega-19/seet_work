import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Album, List, SortAlbumCallback } from './album';
// import { AlbumDetailsComponent } from './album-details/album-details.component';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS
  private _albumsList: List[] = ALBUMS_LISTS;

  sendCurrentNumberPage = new Subject<number>

  constructor() { }

  getAlbums() {
    return this._albums.sort((a: Album, b: Album) => a.duration - b.duration)
  };


  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id)
  }

  getAlbumList(id: string): List | undefined {
    return this._albumsList.find(list => list.id === id)
  }

  count() {
    return this._albums.length
  }

  paginate(start: number, end: number): Album[] {
    return this.getAlbums().slice(start, end)
  }


  // Methode pour ordonner les albums
  oder(callBack: SortAlbumCallback): AlbumService {
    this._albums.sort(callBack);
    return this;
  }

  // Méthode pour afficher le nombre d'album qui doit s'afficher sur la page

  limit(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end);
    return this;
  }

  // Méthode pour faire la recherche des albums et les afficher 
  search(word: string): Album[] {
    return this._albums
      .filter(album => {
        return album.title
          .toLowercase()
          .includes(word.trim().toLowerCase());
      });
  }


  // Methode pour afficher le nombre d'album par changement de pagination

  paginateNumberPage(): number {
    return environment.numberPage;
  }

  //Méthode qui signale à tous les composants de la page actuelle le numéro de la page en cours

  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage)
  }

}

  paginate(start: number, end: number): Album[] {
    return this.getAlbums().slice(start, end)
   }
}