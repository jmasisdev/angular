import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentExampleComponent } from '../dialog-content-example/dialog-content-example.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: false
})
export class IndexComponent {
  forms: FormGroup[] = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.agregarFormulario()
  }

  agregarFormulario() {
    this.forms.push(this.fb.group({
      nombre: [''],
      porcentaje: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      fecha: ['']
    }));
    this.actualizarPorcentajes();
  }

  validarPorcentajes() {
    const sumaPorcentajes = this.forms.reduce((total, form) => total + form.value.porcentaje, 0);
    console.log(sumaPorcentajes)
    return sumaPorcentajes === 100;
  }

  actualizarPorcentajes() {
    const numFormularios = this.forms.length;
    if(numFormularios > 1) {
      const porcentajeDistribuido = Math.floor(100 / numFormularios);
      for (let i = 0; i < numFormularios; i++) {
        this.forms[i].patchValue({
          porcentaje: porcentajeDistribuido
        })
      }
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleComponent, {
      width: '80%',
      height: '80%'
    });
    const base64Data = 'JVBERi0xLjQKJf';
    dialogRef.componentInstance['base64Data'] = base64Data
  }

  onSubmit() {
    if(this.validarPorcentajes()) {
      for (let i = 0; i < this.forms.length; i++) {
        console.log(this.forms[i].value)  
      }
    } else {
      alert('La suma de porcentajes debe ser igual al 100%');
    }
  }

}
