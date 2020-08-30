import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from 'src/app/shared/hackernews-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public sub: any;
  public user: any;

  constructor(
    private hackerNewsAPI: HackernewsApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let userID = params['id'];
      this.hackerNewsAPI.fetchUser(userID).subscribe(data => {
        this.user = data;
      }, error => console.log('Could not load user'));
    });
  }

  goBack() {
    this.location.back();
  }

}
