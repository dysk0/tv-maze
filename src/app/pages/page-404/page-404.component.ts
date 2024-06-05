import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-404',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    RouterLinkActive],
  templateUrl: './page-404.component.html',
  styleUrl: './page-404.component.scss'
})
export class Page404Component {

}
