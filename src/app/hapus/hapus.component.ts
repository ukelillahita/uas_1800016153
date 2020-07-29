import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hapus',
  templateUrl: './hapus.component.html',
  styleUrls: ['./hapus.component.css'],
})
export class HapusComponent implements OnInit {
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<HapusComponent>,
    @Inject(MAT_DIALOG_DATA) public Id: any
  ) {}

  ngOnInit(): void {}
  konfirmasi() {
    this.dialogRef.close(true);
  }
}
