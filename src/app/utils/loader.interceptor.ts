import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UiService } from './ui.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }

    if (this.requests.length == 0) {
      this.ui.loaderStop();
    }
  }
  constructor(
    private ui: UiService,
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    this.ui.loaderShow();
    console.log('test')
    this.requests.push(request);

    next.handle(request)
    return Observable.create((observer: any) => {
      const subscription = next.handle(request)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(request);
              observer.next(event);
            } else {
              // this.removeRequest(request);
            }
          },
          err => {
            this.removeRequest(request);
            observer.error(err);
          },
          () => {
            this.removeRequest(request);
            observer.complete();
          });
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(request);
        subscription.unsubscribe();
      };
    });

    // return next.handle(request);
  }
}
