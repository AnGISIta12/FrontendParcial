import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Biblioteca } from '../../models/biblioteca.model';

@Component({
  selector: 'app-biblioteca-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './biblioteca.html',
  styleUrls: ['./biblioteca.css'],
})
export class BibliotecaFormComponent {
  @Output() bibliotecaCreada = new EventEmitter<void>();

  biblioteca: Biblioteca = {
    nombre: '', direccion: '', telefono: '', responsable: ''
  };

  mensaje: string = '';
  esError: boolean = false;

  constructor(private bibliotecaService: BibliotecaService) {}

  onSubmit(): void {
    if (!this.biblioteca.nombre || !this.biblioteca.direccion ||
        !this.biblioteca.telefono || !this.biblioteca.responsable) {
      this.mensaje = 'Todos los campos son obligatorios.';
      this.esError = true;
      return;
    }
    this.bibliotecaService.crear(this.biblioteca).subscribe({
      next: () => {
        this.mensaje = '✓ Biblioteca registrada exitosamente.';
        this.esError = false;
        this.biblioteca = { nombre: '', direccion: '', telefono: '', responsable: '' };
        this.bibliotecaCreada.emit();
      },
      error: () => {
        this.mensaje = '✗ Error al conectar con el servidor.';
        this.esError = true;
      },
    });
  }
}