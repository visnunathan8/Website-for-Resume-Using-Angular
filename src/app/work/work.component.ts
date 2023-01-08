import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  isAlreadyopen: boolean = false;
  constructor(private dialog: MatDialog) {
  }
  openModal(val : string) {
    if(this.isAlreadyopen) {
      this.dialog.closeAll();
    }else {
      this.isAlreadyopen = true;
    }
    if(val === 'z') {
      this.dialog.open(ModalContentComponent, {
          data: {
            val : val,
            companyName: 'ZOHO CORPORATION',
            role : 'Member Of Technical Staff',
            period : 'July 2020 - August 2022',
            projects : 'CRM - Automation (using Struts, Lyte, kafka, postgres)',
            content : `Served as a full-stack developer for ZOHO CRM. Worked on third-party tools like Apache Kafka, struts, Mercurial-SCM, Git, Gitlab, and other internal
            frameworks. Discussed, analysed, and strategized product design with Product Managers, UX team, and Business Managers`
          }
      });
    } else if(val === 'zi') {
      this.dialog.open(ModalContentComponent, {
        data: {
          val : val,
          companyName: 'ZOHO CORPORATION - INTERN',
          role : 'Full stack developer',
          period : 'Jan 2020 - May 2020',
          projects : 'Attendance management system using spring boot and angular 7',
          content : `Created a Web-based application based on ATTENDANCE MANAGEMENT SYSTEM USING SPRING BOOT AND
          ANGULAR 7. Infused lightweight, ORM (Object Relational Mapping) tool - hibernate for the Java application to interact
          with the database. Link for the project: github.com/rocketvisnu/Attendance-management-system-using-spring-boot-andangular-
          7`
        }
    });
    } else if(val === 'i') {
      this.dialog.open(ModalContentComponent, {
        data: {
          val : val,
          companyName: 'I-INTERCHANGE SYSTEMS',
          role : 'INTERN –FRONTEND DEVELOPER',
          period : 'NOV 2017 – DEC 2017',
          projects : 'Internal Projects',
          content : `TRAINED ON ADVANCED JAVA ALONG WITH JAVA SERVLETS PAGE TO CREATE VARIOUS VIEWS OF A WEB
          APPLICATION. INTRODUCED JAVASCRIPT TO ADD DYNAMIC BEHAVIOR TO THE WEBPAGE AND ADD SPECIAL EFFECTS. AJAX WAS USED TO RETRIEVE THE REQUIRED DATA FROM THE SERVER-SIDE WITHOUT RELOADING THE
          ENTIRE CONTENT`
        }
    });
    } else if(val === 'l') {
      this.dialog.open(ModalContentComponent, {
        data: {
          val : val,
          companyName: 'LENOVO',
          role : 'INTERN –HARDWARE TEST ENGINEER',
          period : 'JUNE 2017 – JULY 2017',
          projects : 'Testing hardware components',
          content : `EXPLORED VARIOUS COMPONENTS USED AND STRUCTURED IN DESIGNING A COMPUTER AND ASSEMBLING
          THEM TOGETHER`
        }
    });
    }
  }
}
