import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environnement';
import { Album, List, SortAlbumCallback } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  paginateNumberPage(): number {
    return environment.numberPage;
  }

  private _albums: Album[] = ALBUMS; // _ convention private & protected
  private _albumList: List[] = ALBUM_LISTS;

  constructor() { }

  /**
   * Fonction de recherche de tous les albums
   * @returns Retourne la liste de tous les albums
   */
  getAlbums(): Album[] {
    return this._albums;
  }

  /**
   * Fonction de recherche d'un album particulier
   * @param id identifiant de l'album à rechercher
   * @returns Retourne l'album correspondant; undefined si aucun identifiant ne correspond
   */
  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id);
  }

  /**
   * Fonction de recherche des sons d'un albums
   * @param id identifiant de l'album à rechercher
   * @returns La référence sera retourné si elle existe; undefined si l'id n'existe pas dans la liste.
   */
  getAlbumList(id: string): string[] | undefined {
    return this._albumList.find(list => list.id === id)?.list;
  }

  /**
   * Fonction qui retourne le nombre d'albums
   * @returns Le nombre d'albums
   */
  count(): number {
    return this._albums.length;
  }


  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort(callback);
    return this; // retourne le service pour permettre le chainage de méthodes
  }

  limit(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end)
    return this; // retourne le service pour permettre le chainage de méthodes
  }

  paginate(start: number, end: number): Album[] {
    return this.getAlbums().slice(start, end);
  }

  search(word: string): Album[] {
    return this._albums
      .filter(album => {
        return album.title
          .toLowerCase()
          .includes(word.trim().toLowerCase());
      });
  }

  searchV2(word: string): Album[] {
    let re = new RegExp(word.trim(), "g");
    return this._albums.filter(album => album.title.match(re));
  }

  shuffle(songs: string[]) {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    return songs;
  }
}