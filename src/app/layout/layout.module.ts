import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutAppComponent } from './about-app/about-app.component';



@NgModule({
  declarations: [NotFoundComponent, AboutAppComponent],
  exports: [
    AboutAppComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LayoutModule { }
