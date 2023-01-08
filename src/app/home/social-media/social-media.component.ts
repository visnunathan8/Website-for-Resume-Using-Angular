import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {

  constructor(){}

  redirect(name : string) {
    console.log("HII");
    if (confirm('Are you sure you want to leave this page?')) {
      if(name === "instagram") {
        window.open('https://www.instagram.com/visnunathan_gaurav/?hl=en', '_blank');
      }else  if(name === "leetcode") {
        window.open('https://leetcode.com/visnunathan/', '_blank');
      }else  if(name === "hackerrank") {
        window.open('https://www.hackerrank.com/rocketvisnu', '_blank');
      }else  if(name === "github") {
        window.open('https://github.com/visnunathan8', '_blank');
      }else  if(name === "linkedin") {
        window.open('https://www.linkedin.com/in/visnunathan-chidambaranathan/', '_blank');
      }else  if(name === "codeforces") {
        window.open('https://codeforces.com/profile/rocketvisnu', '_blank');
      }
    }
  }
}
