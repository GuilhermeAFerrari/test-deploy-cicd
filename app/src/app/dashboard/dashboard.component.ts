import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidenavService } from '../layout/sidenav.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, CommonModule]
})
export class DashboardComponent {
  sidenavService = inject(SidenavService);

  constructor(public router: Router) {}

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
