import { ComponentFixture, TestBed } from '@angular/core/testing';


import { DetailsComponent } from './details.component';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let httpTestingController: HttpTestingController;
  let activatedRouteSpy;
  let sortService: any;

  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          showId: 1,
          else: 'else',
        })
      }
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DetailsComponent],
      providers: [
        MoviesService,
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    })
      .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  beforeEach(() => {
    sortService = TestBed.get(MoviesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const httpRequest = httpTestingController.expectOne('https://api.tvmaze.com/shows/1');
    expect(httpRequest.request.method).toBe('GET');
    expect(httpRequest.request.responseType).toBe('json');


  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
