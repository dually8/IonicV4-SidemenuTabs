import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabRouterModule } from './tabs/tab/tab-router.module';

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
    loadChildren: './tabs/tab/tab.module#TabPageModule',
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    // enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
