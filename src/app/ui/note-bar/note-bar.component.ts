import { Component, Input } from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: './note-bar.template.html',
  styleUrls: ['./note-bar.style.css']
})
export class NoteCardComponent {
    @Input() note = {};
};
