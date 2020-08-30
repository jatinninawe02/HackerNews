import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { HackernewsApiService } from './shared/hackernews-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    MomentModule,
    ScrollEventModule
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
