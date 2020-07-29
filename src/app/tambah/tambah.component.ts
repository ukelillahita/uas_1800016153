import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.component.html',
  styleUrls: ['./tambah.component.css'],
})
export class TambahComponent implements OnInit {
  data: any = {};
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<TambahComponent>,
    @Inject(MAT_DIALOG_DATA) public itemData: any
  ) {
    if (itemData != null) {
      this.data = itemData;
    }
  }
  ngOnInit() {}

  simpan(data) {
    if (data.id === undefined) {
      this.api.simpan(data).subscribe((res) => {
        this.dialogRef.close(true);
      });
    } else {
      this.api.edit(data).subscribe((res) => {
        this.dialogRef.close(true);
      });
    }
  }
}
