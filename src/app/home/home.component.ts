import { HapusComponent } from './../hapus/hapus.component';
import { ApiService } from './../api.service';
import { TambahComponent } from './../tambah/tambah.component';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    public dialog: MatDialog,
    public api: ApiService,
    public router: Router
  ) {
    this.getData();
  }

  dataBuku: any = [];

  getData() {
    this.api.baca().subscribe((res) => {
      this.dataBuku = res;
    });
  }

  buat() {
    const dialogRef = this.dialog.open(TambahComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  edit(data) {
    const dialogRef = this.dialog.open(TambahComponent, {
      width: '450px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }
  hapus(id) {
    const dialogRef = this.dialog.open(HapusComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        console.log('Menghapus data');
        this.api.hapus(id).subscribe((res) => {
          this.getData();
        });
      }
    });
  }
}
