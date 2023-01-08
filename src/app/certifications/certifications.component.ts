import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  color = 'primary'; // The color of the spinner progress bar
  diameter = 100; // The diameter of the spinner progress bar
  percentage = 70; // The progress of the spinner progress bar
}
