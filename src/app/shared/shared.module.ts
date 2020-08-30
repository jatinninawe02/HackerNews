import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HackernewsApiService } from './hackernews-api.service';
import { DomainPipe } from './domain.pipe';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, DomainPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  // providers: [HackernewsApiService],
  exports: [
    NavbarComponent, FooterComponent, DomainPipe
  ]
})
export class SharedModule { }
