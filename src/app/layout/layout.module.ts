import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NewsComponent } from './news/news.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article/article.component';
import { MomentModule } from 'ngx-moment';
import { CommentsComponent } from './comments/comments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { ScrollEventModule } from 'ngx-scroll-event';

@NgModule({
  declarations: [NewsComponent, BookmarksComponent, ArticleComponent, CommentsComponent, CommentTreeComponent,
    CommentComponent, UserComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    MomentModule,
    ScrollEventModule
  ]
})
export class LayoutModule { }
