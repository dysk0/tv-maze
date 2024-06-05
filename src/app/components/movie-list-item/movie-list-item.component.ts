import { Component, Input } from '@angular/core';
import { Show } from '../../types';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.scss'
})
export class MovieListItemComponent {
  imageLoaded = false;
  imageError = false;
  @Input() item?: Show | null;
}
