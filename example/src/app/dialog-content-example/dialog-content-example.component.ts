import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
  styleUrls: ['./dialog-content-example.component.css']
})
export class DialogContentExampleComponent {
  @Input() base64Data!: string;
  pdfUrl!: string;


  constructor(public dialogRef: MatDialogRef<DialogContentExampleComponent>) {
    if (this.base64Data) {
      const blobData = this.base64toBlob(this.base64Data);
      this.pdfUrl = URL.createObjectURL(blobData);
    }
  }

  base64toBlob(base64: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'application/pdf' });
  }
}
