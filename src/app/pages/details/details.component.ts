import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '../../types';
import { DatePipe, JsonPipe, NgClass, NgIf } from '@angular/common';
import { SafePipe } from 'safe-pipe';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [JsonPipe, SafePipe, DatePipe, NgIf, NgClass],
  providers: [HttpClient],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  @Input() showId?: number | null = null;
  item?: Show | null = null;
  loadedImage = false;


  constructor(private router: Router, private service: MoviesService, private activatedRoute: ActivatedRoute) {
    this.item = this.router?.getCurrentNavigation()?.extras.state?.['detailsData'] as Show
  }
  ngOnInit(): void {
    if (!this.item) {
      var _id = this.activatedRoute.snapshot.paramMap.get('showId');
      this.showId = (_id ? parseInt(_id!) : null);
      if (this.showId) {
        console.log('here')

        var s = this.service.getById(this.showId).subscribe({
          next: x => {
            this.item = x
            s.unsubscribe();
          }, error: e => {
            this.router.navigate(['/404']);
            s.unsubscribe();
          }
        })
      }
    }
  }


}


