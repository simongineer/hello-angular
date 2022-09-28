import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { DownloadComponent } from './page/download/download.component';
import { HomeComponent } from './page/home/home.component';
import { InterestsComponent } from './page/interests/interests.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { SkillsComponent } from './page/skills/skills.component';
import { WantsComponent } from './page/wants/wants.component';

const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent},
  {path: 'wants', component: WantsComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
