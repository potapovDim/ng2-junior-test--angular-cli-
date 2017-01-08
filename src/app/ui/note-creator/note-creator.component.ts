import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-creator',
  templateUrl: './note-creator.template.html',
  styleUrls: ['./note-creator.style.css']
})
export class NoteCreatorComponent {
  @Output() createNode = new EventEmitter();
  newNote = {
    title: '',
    value: ''
  };
  addNewNote () {
    const {title, value} = this.newNote;
    if ( title && value ) {
      this.createNode.next(this.newNote);
    };
    this.resetValues();
  }

  resetValues() {
    this.newNote = {
      title: '',
      value: ''
    };
  };
};
