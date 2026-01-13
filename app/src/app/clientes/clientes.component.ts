import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../models/cliente.model';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];
  filtroNome = '';
  selectedCliente: Cliente | null = null;
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Cliente[]>('http://localhost:8080/customers').subscribe(data => {
      this.clientes = data;
      this.clientesFiltrados = data;
    });
  }

  filtrarClientes(): void {
    if (!this.filtroNome) {
      this.clientesFiltrados = this.clientes;
      return;
    }
    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.name.toLowerCase().includes(this.filtroNome.toLowerCase())
    );
  }

  selecionarCliente(cliente: Cliente): void {
    this.http.get<Cliente>(`http://localhost:8080/customers?documento=${cliente.document}`).subscribe(data => {
      this.selectedCliente = data;
    });
  }

  fecharModal(): void {
    this.selectedCliente = null;
  }
}
