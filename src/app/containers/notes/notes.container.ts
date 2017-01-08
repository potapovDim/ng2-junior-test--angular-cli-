import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  styleUrls: ['./notes.styles.css'],
  templateUrl: './note.templete.html'
})
export class NotesContainer {
  notes = [{ title: 'test_title', value: 'test_value1', color: 'yellow'  },
          { title: 'test_title', value: 'test_value2', color: 'lightblue'},
          { title: 'test_title', value: 'test_value3', color: 'green'}
  ];
  count = 0;
  onNodeChecked(index: number) {
    this.notes.splice(index, 1);
  };
  addNewNote(note) {
    this.count++;
    if (this.count > 8) {
      this.notes = [{ title: 'ERROR', value: 'ERROR', color: 'red'  }]
        return;
    }
    this.notes.push(note);
  }
};
