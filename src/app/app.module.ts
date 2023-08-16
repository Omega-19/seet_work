import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { ShareModule } from './share/share.module';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactifComponent } from './form-reactif/form-reactif.component';
// import { PaginateComponent } from './paginate/paginate.component';

/**
 * L'ensemble des routes de notre application
 */
const albumsRoutes: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'album/:albumId', component: AlbumDescriptionComponent},

  /*========= ATTENTION DANGER ==========*/
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    AlbumDescriptionComponent,
    PageNotFoundComponent,
    AudioPlayerComponent,
    FormTemplateComponent,
    FormReactifComponent,
    
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    /**
     * forRoot: méthode utilisée pour définir les routes à utilisés dans le module de routage.
     */
    RouterModule.forRoot(albumsRoutes),
    HttpClientModule,
    ShareModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }