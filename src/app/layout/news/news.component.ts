import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HackernewsApiService } from 'src/app/shared/hackernews-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public items: any;
  public typeSub: any;
  public pageSub: any;
  public storiesType: any;
  public pageNum: number;
  public listStart: number;
  public scrollBottom: any;
  public scrollTop: any;
  public str: any;
  last: any;
  lastNum: any;

  constructor(
    public hackerNewsAPI: HackernewsApiService,
    private route: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => this.storiesType = (data as any).storiesType);

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = params['page'] ? +params['page'] : 1;
      this.hackerNewsAPI.fetchStories(this.storiesType, this.pageNum)
        .subscribe(
          items => this.items = items,
          error => console.log('Error fetching' + this.storiesType + 'stories'),
          () => {
            this.listStart = ((this.pageNum - 1) * 30) + 1;
            window.scrollTo(0, 0);
          });
    });
    this.str = window.location.href;
    this.last = this.str.split('/');
    this.lastNum = this.last[this.last.length - 1];

    // this.hackerNewsAPI.fetchStories('news', 1).subscribe(
    //   items => this.items = items,
    //   error => console.log('Error fetching stories'));
  }

  // handleScroll(event: ScrollEvent) {
  //   if (event.isReachingBottom) {
  //     this.scrollBottom = Number(this.lastNum);
  //     if (this.scrollBottom === this.pageNum) {
  //       this.router.navigate(['/' + this.storiesType, this.pageNum + 1]);
  //       this.lastNum = this.pageNum + 1;
  //       this.scrollBottom = 1000;
  //     }
  //   }
  //   if (event.isReachingTop) {
  //     this.scrollTop = Number(this.lastNum);
  //     if (this.scrollTop === this.pageNum.toString()) {
  //       if (this.pageNum > 2 || this.pageNum === 2) {
  //         this.router.navigate(['/' + this.storiesType, this.pageNum - 1]);
  //         this.lastNum = this.pageNum - 1;
  //         this.scrollTop = 1000;
  //       }
  //     }
  //     console.log('the user is reaching the top');
  //   }
  //   if (event.isWindowEvent) {
  //     console.log('This event is fired on Window not on an element.');
  //   }

  // }

}
