import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../models/cliente.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: Cliente[] = [
    { id: 1, nome: 'João da Silva', email: 'joao.silva@email.com', telefone: '(11) 98765-4321', pontos: 1250, dataCadastro: '2023-01-15' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.o@email.com', telefone: '(21) 91234-5678', pontos: 850, dataCadastro: '2023-02-20' },
    { id: 3, nome: 'Carlos Pereira', email: 'carlos.p@email.com', telefone: '(31) 95555-4444', pontos: 2300, dataCadastro: '2023-03-10' },
    { id: 4, nome: 'Ana Souza', email: 'ana.souza@email.com', telefone: '(41) 98888-7777', pontos: 500, dataCadastro: '2023-04-05' },
    { id: 5, nome: 'Rafael Lima', email: 'rafa.lima@email.com', telefone: '(51) 97777-6666', pontos: 4100, dataCadastro: '2022-11-28' },
    { id: 6, nome: 'Beatriz Costa', email: 'bia.costa@email.com', telefone: '(61) 96666-5555', pontos: 150, dataCadastro: '2023-05-18' },
  ];

  selectedCliente: Cliente | null = null;

  selecionarCliente(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

  fecharModal(): void {
    this.selectedCliente = null;
  }
}
