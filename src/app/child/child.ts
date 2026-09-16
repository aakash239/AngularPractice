import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  @Input() userName: string | undefined;
  @Output() selectedUser = new EventEmitter<string>();
  @Output() toBeDeletedUser = new EventEmitter<string>();

  selectCurrent(curr: string | undefined) {
    if (curr) this.selectedUser.emit(curr);
  }

  deleteCurrent(curr: string | undefined){
    if (curr) this.toBeDeletedUser.emit(curr);
  }
}