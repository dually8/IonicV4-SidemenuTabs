import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabPage } from './tab.page';
import { FirstPageModule } from '../first/first.module';
import { SecondPageModule } from '../second/second.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstPageModule,
    SecondPageModule,
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
