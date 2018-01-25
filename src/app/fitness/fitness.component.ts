import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/retry';
import * as $ from 'jquery';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  constructor(
    private httpClient: HttpClient, 
    private instagramService: InstagramService
  ) { }

  private results: string[];
  img_url: string;
  img_width: number;
  img_height: number;
  username: string;
  profile_picture: string;
  click_url: string;
  private url: string = 'https://api.instagram.com/v1/users/5060760542/media/recent/?count=99&access_token=5060760542.8634957.020a7fa6e7f14c8984bcd37d29226b58';

  ngOnInit() {
    this.httpClient.get<JsonObject>(this.url).subscribe(value => {
      this.username = value.data[0].user.username;
      this.profile_picture = value.data[0].user.profile_picture;
      for (var i = 0; i < 20; i++) {
        this.img_url = value.data[i].images.low_resolution.url;
        this.img_width = value.data[i].images.standard_resolution.width;
        this.img_height = value.data[i].images.standard_resolution.height;

        if(value.data[i].type === "video") {
          this.click_url = value.data[i].videos.standard_resolution.url;
        } else {
          this.click_url = value.data[i].images.standard_resolution.url;
        }
        
        $("<a href=\"" + this.click_url + "\" target=\"_blank\"><img src=" + this.img_url +" width=\"100\"></a>").appendTo($(".instagram-feed"));
      }
    });
  }

  title = "Fitness";
}
interface JsonObject {
  data: {
    index: {
      user: {
        full_name: string,
        profile_picture: string,
        username: string
      },
      images: {
        low_resolution: {
          height: number,
          url: string,
          width: number
        },
        standard_resolution: {
          height: number,
          url: string,
          width: number
        }
      },
      caption: {
        text: string
      },
      type: string,
      videos: {
        standard_resolution: {
          width: number,
          height: number,
          url: string,
          id: number
        }
      }
    }
  }
}