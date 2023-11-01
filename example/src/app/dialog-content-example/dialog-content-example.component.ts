import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
  styleUrls: ['./dialog-content-example.component.css']
})
export class DialogContentExampleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  getPdfUrl(): string {
    return 'data:application/pdf;base64,' + this.data.pdfData;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
