import { Component, Input, inject } from '@angular/core';
import { Show } from '../../types';
import { JsonPipe, NgIf } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [JsonPipe, NgIf],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  constructor(private router: Router) {

  }
  imageLoadError = false;
  @Input() item: Show | null = null;
  onNavigate(show: Show) {

    this.router.navigate(['/', 'details', show.id], { state: { detailsData: show } })
  }
}
