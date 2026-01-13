import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  totalClientes = 0;
  totalPontos = 0;

  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<{ totalCustomers: number; totalPoints: number }>('http://localhost:8080/dashboard/metrics').subscribe(data => {
      this.totalClientes = data.totalCustomers;
      this.totalPontos = data.totalPoints;
    });
  }
}
