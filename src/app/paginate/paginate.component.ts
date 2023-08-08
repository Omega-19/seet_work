import { Component, EventEmitter, Output } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: 'paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  total: number = 0;

  perPage: number;

  numberPages: number = 0;
  pages: number[] = [];

  @Output() setPaginate: EventEmitter<{ start: number, end: number }> = new EventEmitter;

  /**Variable stockant la page actuelle  */
  currentPage: number = 1; //par défaut = 1

  constructor(
    private albumService: AlbumService
  ) {

    this.perPage = this.albumService.paginateNumberPage();
  }

  ngOnInit(): void {
    this.albumService.count().subscribe(num => {
      this.total
    });
    this.numberPages = Math.ceil(this.total / this.perPage)

    for (let i = 1; i < this.numberPages; i++) {
      this.pages.push(i)

    }
  }
  next() {
    if (this.currentPage >= this.numberPages) {
      // this.currentPage = 1;//revenir à la première page
      return
    } else {//sinon
      this.currentPage++;//= +1 incrémenter
    };
    //demander au parent d'afficher des albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }
  previous() {
    if (this.currentPage >= this.numberPages) {
      // this.currentPage = 1;//revenir à la première page
      return
    } else {//sinon
      this.currentPage--;//= +1 incrémenter
    };
  }

  /**
   * fonction qui retourne le sous ensemble d'albums à afficher
   * @param page page courante
   * @returns un sous ensemble du tableau en fonction de la page courante
   0 * Album 1
   1 * Album 2
   2 * Album 3
   3 * Album 4
   4 * Album 5
   5 * Album 6
   6 * Album 7
   7 * Album 8
   8 * Album 9
   9 * Album 10
   */
  setAlbums(page: number): { start: number, end: number } {
    let start = (page - 1) * (this.perPage); // 0 2 
    let end = start + this.perPage; // 
    return { start: start, end: end };
    // return {start, end}; même chose que ce qui est en haut
  }
  changePage(page: number){
    this.currentPage = page;
    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

}