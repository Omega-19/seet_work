import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  word: string = '';

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter(); // émetteur d'évenement
  constructor(
    private albumService: AlbumService
  ) {}

  onSubmit(form: NgForm) {
    const results: Album[] = this.albumService.search(form.value.word);
    this.searchAlbums.emit(results);
  }

  onChangeEmit($event: string) {
    const results: Album[] = this.albumService.search($event);
    this.searchAlbums.emit(results);
  }
}