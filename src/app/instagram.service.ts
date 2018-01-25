import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/retry';

@Injectable()
export class InstagramService {

  constructor(private httpClient: HttpClient) { }

  private results: string[];
  private url: string = 'https://api.instagram.com/v1/users/5060760542/media/recent/?count=99&access_token=5060760542.8634957.020a7fa6e7f14c8984bcd37d29226b58';

  getPosts() {
    
  }
}