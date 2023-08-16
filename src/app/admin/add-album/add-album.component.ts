import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})

export class AddAlbumComponent implements OnInit {
  albumForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,

  ) { }
  ngOnInit(): void {
    this.albumForm = this.fb.group({
      id: '',
      name: ['',
        [
          Validators.required,
          Validators.minLength(5),
        ]
      ],
      title: ['',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      ref: ['',
        [
          Validators.required,
          //Validators.pattern('\\w{5}')doit avoir cinq caractères; les deux passent
          Validators.pattern('[A-Z0-9]{5}')
        ]
      ],
      duration: ['',
        [
          Validators.required,
          // Validators.pattern('[0-9]*') doit avoir une suite de chiffre entre 0 et 9
          Validators.max(900)//doit pas excéder 900
        ]
      ],
      description: ['',
        [
          Validators.required,
          Validators.minLength(15)
        ]
      ],
      //rendre dynamique les champs de saisies
      tags: this.fb.array([
        this.fb.control('')
      ]) ,
      // tags: new FormArray([
      //   new FormControl('')
      // ]) ,
      status: 'off',
    })
  }

  //Getters qui seront utilisés pour la validation

  get name(){return this.albumForm.get('name')}
  get ref(){return this.albumForm.get('ref')}
  get title(){return this.albumForm.get('title')}
  get duration(){return this.albumForm.get('duration')}
  get description(){return this.albumForm.get('description')}
  get tags(){return this.albumForm.get('tags') as FormArray}

  onSubmit() {
    //envoi dans la BD
    console.log(this.albumForm.value);
    //Rediriger sur la page "admin"
    this.router.navigate(['/admin'], {
      queryParams: {
        message: "Album-ajout-E-avec-succEs",
        model: "text-davinci-002-render-sha"
      }})
  }

  addTags(){
    this.tags.push(this.fb.control('',[Validators.required]))
  }
}