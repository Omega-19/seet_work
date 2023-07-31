import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations: [fadeInAnimation]

})
export class AlbumDescriptionComponent implements OnInit {
  album: Album | undefined;
  constructor(
    private route: ActivatedRoute,
    private aS: AlbumService // service
    ) { }

  ngOnInit(): void {
    // permet de récupérer l'identifiant
    const id: string = this.route.snapshot.params["albumId"];
    // const id = this.route.snapshot.paramMap.get('albumId');
    this.album = this.aS.getAlbum(id);
    console.log(this.album);
  }
}