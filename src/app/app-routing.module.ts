import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPage } from './tabs/tab/tab.page';
import { TabPageModule } from './tabs/tab/tab.module';
import { FirstPage } from './tabs/first/first.page';
import { SecondPage } from './tabs/second/second.page';
import { FirstPageModule } from './tabs/first/first.module';
import { SecondPageModule } from './tabs/second/second.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'tabs',
    component: TabPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(first:first)',
        pathMatch: 'full',
      },
      {
        path: 'first',
        outlet: 'first',
        component: FirstPage,
      },
      {
        path: 'second',
        outlet: 'second',
        component: SecondPage,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    TabPageModule,
    FirstPageModule,
    SecondPageModule,
    RouterModule.forRoot(routes, {
      // enableTracing: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
