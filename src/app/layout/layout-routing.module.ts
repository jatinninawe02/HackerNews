import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'news/1', pathMatch: 'full'
  },
  {
    path: 'news/:page', component: NewsComponent, data: {storiesType: 'news'}
  },
  // {
  //   path: 'newest/:page', component: NewsComponent, data: {storiesType: 'newest'}
  // },
  // {
  //   path: 'show/:page', component: NewsComponent, data: {storiesType: 'show'}
  // },
  // {
  //   path: 'ask/:page', component: NewsComponent, data: {storiesType: 'ask'}
  // },
  // {
  //   path: 'jobs/:page', component: NewsComponent, data: {storiesType: 'jobs'}
  // },
  {
    path: 'item/:id', component: CommentsComponent
  },
  {
    path: 'bookmarks', component: BookmarksComponent
  },
  {
    path: 'user/:id', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
