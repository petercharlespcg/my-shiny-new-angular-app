import { Component, OnInit } from '@angular/core';

import { Note } from "../note.model";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  note: string;
  notes: Array<Note> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNote() {
    this.notes.push({ message: this.note });
    this.note = '';
  }

  changeFirstNote() {
    this.notes[0].message = 'This just got changed!';
  }

  deleteNote(indexOfNoteToDelete: number) {
    this.notes.splice(indexOfNoteToDelete, 1);
  }

  triggerChangeDetection() {
    // This should trigger Change Detection
  }
}
