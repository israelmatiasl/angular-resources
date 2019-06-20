import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
      PagesComponent,
      HomeComponent
  ],
  imports: [
      CommonModule,
      RouterModule
  ],
  exports: [
      PagesComponent
  ]
})
export class SharedModule { }
