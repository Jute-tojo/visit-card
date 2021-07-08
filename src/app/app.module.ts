import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
