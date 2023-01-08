import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { CertificationsComponent } from "./certifications/certifications.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { WorkComponent } from "./work/work.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'work', component:  WorkComponent},
  { path: 'projects', component:  ProjectsComponent},
  { path: 'skills', component:  CertificationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
