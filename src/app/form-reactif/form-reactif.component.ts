import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactif',
  templateUrl: './form-reactif.component.html',
  styleUrls: ['./form-reactif.component.css']
})
export class FormReactifComponent {
  constructor(private fb: FormBuilder) { }

  genres = ['Jazz', 'R&G', 'Zinli', 'Hip-Hop', 'Rap', 'Zouk', 'Salsa', 'Kizomba', 'Rock'];
  //sans fb
  // musicForm = new FormGroup({
  //   name: new FormControl(''),
  //   auteur: new FormControl(''),
  //   style: new FormControl(this.genres[0])
  // });

  //avec fb
  /**
   * Validators required dis a ma fonction qu'un tel champ est required
   * avec Validators minLength on spécifie le nombre de lettre à avoir
   */
  musicForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(8)]],
    auteur: ['', [Validators.required, Validators.minLength(5)]],
    style: [this.genres[0]]
  });

  search = new FormControl('');

  get name(){return this.musicForm.get("name"); }
  get auteur(){return this.musicForm.get("auteur"); }
  get style(){return this.musicForm.get("style"); }

  onSubmit() {
    //ceci permet de recuperer dans la console tous les éléments dont on a besoin de vérifier
    console.warn(this.musicForm.value)
    console.log(this.name)
    console.log(this.auteur)
    console.log(this.style)
  };
}
