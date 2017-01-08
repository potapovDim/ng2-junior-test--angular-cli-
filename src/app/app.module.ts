import { NoteCreatorComponent } from './ui/note-creator/note-creator.component';
import { NotesContainer } from './containers/notes/notes.container';
import { NoteCardComponent } from './ui/note-card/note-card.component';
import { AppBarComponent } from './ui/app-bar/app-bar';
import { AppMainContainer } from './containers/main';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppBarComponent,
    AppComponent,
    AppMainContainer,
    NoteCardComponent,
    NotesContainer,
    NoteCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
