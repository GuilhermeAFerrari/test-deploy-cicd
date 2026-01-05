import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidenavService } from '../layout/sidenav.service';
import { CommonModule } from '@angular/common';
import { GerarLinkModalComponent } from '../gerar-link-modal/gerar-link-modal.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, GerarLinkModalComponent]
})
export class SidenavComponent {
  authService = inject(AuthService);
  sidenavService = inject(SidenavService);
  isSidenavOpen = this.sidenavService.isOpen;

  isGerarLinkModalOpen = false;
  generatedLink = '';

  logout(): void {
    this.authService.logout();
    this.closeSidenav();
  }

  closeSidenav(): void {
    this.sidenavService.close();
  }

  abrirGerarLinkModal(): void {
    this.generatedLink = this.generateGuid();
    this.isGerarLinkModalOpen = true;
    this.closeSidenav(); // Close sidenav when modal opens on mobile
  }

  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
