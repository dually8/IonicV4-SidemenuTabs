import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPage } from './tab.page';

const routes: Routes = [
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
        loadChildren: '../first/first.module#FirstPageModule'
      },
      {
        path: 'second',
        outlet: 'second',
        loadChildren: '../second/second.module#SecondPageModule'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/(first:first)',
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TabRouterModule { }
