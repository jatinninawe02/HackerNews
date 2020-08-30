import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from 'src/app/shared/hackernews-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public sub: any;
  public item: any;
  public pollResults: any = [];
  public howManyPollResults: number;

  constructor(
    private hackerNewsAPI: HackernewsApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this.hackerNewsAPI.fetchItemContent(itemID).subscribe(data => {
        this.item = data;
        if (this.item.type === 'poll') {
          this.howManyPollResults = this.item.poll.length;
          for (let i = 1; i <= this.howManyPollResults; i++) {
            this.hackerNewsAPI.fetchItemContent(itemID + i).subscribe(data => {
              this.pollResults.push(data);
            });
          }
        }
      }, error => console.log('Could not load item' + itemID));
    });
  }

  goBack() {
    this.location.back();
  }

}
