import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gerar-link-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gerar-link-modal.component.html',
  styleUrls: ['./gerar-link-modal.component.css']
})
export class GerarLinkModalComponent {
  @Input() link: string = '';
  @Output() close = new EventEmitter<void>();
  copyButtonText = 'Copiar';

  fechar(): void {
    this.close.emit();
  }

  copiarLink(): void {
    if (!navigator.clipboard) {
      // Fallback for older browsers
      try {
        const el = document.createElement('textarea');
        el.value = this.link;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.setCopiedState();
      } catch (err) {
        console.error('Falha ao usar o fallback de cópia.', err);
      }
      return;
    }
    navigator.clipboard.writeText(this.link).then(() => {
      this.setCopiedState();
    }).catch(err => {
      console.error('Falha ao copiar o link: ', err);
    });
  }

  private setCopiedState(): void {
    this.copyButtonText = 'Copiado!';
    setTimeout(() => {
      this.copyButtonText = 'Copiar';
    }, 2000); // Reset after 2 seconds
  }
}
