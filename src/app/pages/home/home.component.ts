import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { DatePipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MoviesResponse, MoviesServiceResponse, Show } from '../../types';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe, NgFor, NgIf, DatePipe, RouterModule, MovieListItemComponent,
    NgClass, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  clearForm() {
    this.form.patchValue({ query: null })
    this.items = []
  }
  form: FormGroup;
  items: Show[] | null = null;
  selectedItem = {} as Show;
  todayShows: Show[] = [];

  constructor(private service: MoviesService, private fb: FormBuilder, private router: Router) {
    this.service.searchShows$('earth').subscribe({
      next: res => {
        this.todayShows = res;
      }
    })
    this.form = this.fb.group({
      query: ['']
    });
    this.form.valueChanges.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      takeUntilDestroyed()
    )

      .subscribe(v => {
        if (v.query)
          var s = this.service.searchShows$(v.query).subscribe({
            next: res => {
              s.unsubscribe();
              this.items = res;
              if (res.length)
                this.selectedItem = res[0];
            }
          })
      });
    // this.form.patchValue({
    //   query: 'Earth'
    // })
  }
  onNavigate(show: Show) {
    this.router.navigate(['/', 'details', show.id], { state: { detailsData: show } })
  }
}
