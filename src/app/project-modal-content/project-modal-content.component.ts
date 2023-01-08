import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-modal-content',
  templateUrl: './project-modal-content.component.html',
  styleUrls: ['./project-modal-content.component.css']
})
export class ProjectModalContentComponent {
  modalContentLoaded = false;

  constructor(public dialogRef: MatDialogRef<ProjectModalContentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  ngOnInit() {
    this.modalContentLoaded = true;
  }

  ngOnDestroy() {
    this.modalContentLoaded = false;
  }
}
