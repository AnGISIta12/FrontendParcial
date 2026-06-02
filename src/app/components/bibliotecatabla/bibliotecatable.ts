import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Biblioteca } from '../../models/biblioteca.model';

@Component({
  selector: 'app-biblioteca-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biblioteca-table.component.html',
  styleUrls: ['./biblioteca-table.component.css']
})
export class BibliotecaTableComponent implements OnInit {

  bibliotecas: Biblioteca[] = [];
  cargando: boolean = false;
  error: string = '';

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.cargando = true;
    this.error = '';
    this.bibliotecaService.listarTodos().subscribe({
      next: (data) => {
        this.bibliotecas = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo conectar al backend.';
        this.cargando = false;
      }
    });
  }

  eliminar(id: number): void {
    if (!confirm('¿Eliminar esta biblioteca?')) return;
    this.bibliotecaService.eliminar(id).subscribe({
      next: () => this.cargar(),
      error: () => alert('Error al eliminar.')
    });
  }
}
