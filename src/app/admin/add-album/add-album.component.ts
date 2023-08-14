import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { AlbumService } from '../../album.service';

@Component({
selector: 'app-add-album',
templateUrl: './add-album.component.html',
styleUrls: ['./add-album.component.css']
})

export class AddAlbumComponent implements OnInit {
  constructor(private fb : FormBuilder, private aS : AlbumService) { }
  ngOnInit() {
  }
  }