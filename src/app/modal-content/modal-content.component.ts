import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  modalContentLoaded = false;
  sentences!: string[];

  constructor(public dialogRef: MatDialogRef<ModalContentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.name);
  }

  ngOnInit() {
    this.modalContentLoaded = true;
    this.sentences = this.data.content.split('.');

  }

  ngOnDestroy() {
    this.modalContentLoaded = false;
  }
}
