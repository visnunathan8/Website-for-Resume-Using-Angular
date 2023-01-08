import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalContentComponent } from '../project-modal-content/project-modal-content.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isAlreadyopen: boolean = false;
  constructor(private dialog: MatDialog) {
  }
  openModal(val : string) {
    if(this.isAlreadyopen) {
      this.dialog.closeAll();
    }else {
      this.isAlreadyopen = true;
    }
    this.dialog.open(ProjectModalContentComponent);
  }
}
