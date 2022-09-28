import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircularNavComponent } from './circular-nav/circular-nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { HomeComponent } from './page/home/home.component';
import { DownloadComponent } from './page/download/download.component';
import { InterestsComponent } from './page/interests/interests.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { SkillsComponent } from './page/skills/skills.component';
import { WantsComponent } from './page/wants/wants.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularNavComponent,
    NavItemComponent,
    SubtitleComponent,
    NotFoundComponent,
    AboutMeComponent,
    HomeComponent,
    DownloadComponent,
    InterestsComponent,
    ProjectsComponent,
    SkillsComponent,
    WantsComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
