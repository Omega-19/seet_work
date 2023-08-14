import { Component } from '@angular/core';
import { Music } from '../Music';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  genres = ['Jazz', 'Hip-Hop', 'Rap', 'Zouk', 'Salsa', 'Kizomba', 'Rock'];
  musicModel = new Music('','',this.genres[0]);
  submitted = false;


  //Qd on doit utiliser les templates
// name="Rodash";
// auteur=" Doe";
//style
// updateName(albumName: string){
//   // console.log(albumName.value);
//   this.name = albumName;
// }

onSubmit(form: any){
  // console.log(form);
  this.submitted = true;
  
  /**
   * Visité: touched | untouched
   * 
   * Changé: dirty | pristine
   * 
   * Valid: valid | invalid
   * 
   * 
   * FormGroup 
   * implique des forme controles (FormControl)
   */
}

}
