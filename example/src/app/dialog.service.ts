import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openPdfDialog(pdfData: string): void {
    const dialogRef = this.dialog.open(DialogContentExampleComponent, {
      data: { pdfData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }
}
