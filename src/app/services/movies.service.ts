import { Injectable, inject } from '@angular/core';
import { MovieServiceResponse, MoviesResponse, MoviesServiceResponse, ResponseCache, Show } from '../types';
import { of } from 'rxjs';


import { Observable, map, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})

export class MoviesService {
  endpoint = 'https://api.tvmaze.com'
  cacheShows: Show[] = [];
  cacheResponses: ResponseCache[] = [];

  private _http = inject(HttpClient);

  searchShows$(q: string): Observable<Show[]> {

    var key = '/search/shows?q=' + encodeURIComponent(q.toLowerCase());
    var cache = this.getFromResponseCache(key);
    if (cache) {
      return Observable.create((observer: any) => {
        setTimeout(() => {
          observer.next(cache?.items);
          observer.complete();
        }, 1);
      });
    }
    return this._http
      .get(this.endpoint + key)
      .pipe(map((x: any) => {
        var _items = x.map((x: any) => {
          return x.show;
        });
        this.addToResponseCache({ url: key, items: _items })
        return _items;
      }
      ));
  }

  addToCache(show: Show) {
    var idx = this.cacheShows.filter((x: Show) => x.id == show.id)
    console.log(idx)
    if (idx.length == 0)
      this.cacheShows.push(show)
  }

  addToResponseCache(item: ResponseCache) {
    var idx = this.cacheResponses.filter((x: ResponseCache) => x.url == item.url)
    if (idx.length == 0)
      this.cacheResponses.push(item)
  }

  getFromCache(showId: number): Show | null {
    var idx = this.cacheShows.filter((x: Show) => x.id == showId)
    if (idx.length)
      return idx[0];
    return null;
  }

  getFromResponseCache(url: string): ResponseCache | null {
    var idx = this.cacheResponses.filter((x: ResponseCache) => x.url == url)
    if (idx.length)
      return idx[0];
    return null;
  }


  getById(showId: number): Observable<Show> {
    var local: Observable<Show>;
    var show = this.getFromCache(showId);
    if (show) {
      return Observable.create((observer: any) => {
        setTimeout(() => {
          observer.next(show);
          observer.complete();
        }, 1);
      });
    }
    return this._http
      .get(this.endpoint + '/shows/' + encodeURIComponent(showId))
      .pipe(map((x: any) => {
        this.addToCache(x);
        return x;
      }), shareReplay(1));


  }
}
