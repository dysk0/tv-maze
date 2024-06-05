import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  public snacks: Subject<string>;
  public loaders: Subject<boolean>;
  public loading = false;

  constructor(

  ) {
    this.snacks = new Subject<string>();
    this.loaders = new Subject<boolean>();
  }
  loaderShow() {
    requestAnimationFrame(() => {
      this.loaders.next(true);
      this.loading = true;
    });
  }
  loaderStop() {
    requestAnimationFrame(() => {
      this.loading = false;
      this.loaders.next(false);
    });
  }

}
