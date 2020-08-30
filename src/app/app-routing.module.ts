import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',  redirectTo: 'hacker-news', pathMatch: 'full'
  },
  {
    path: 'hacker-news', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
