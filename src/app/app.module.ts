import { TambahComponent } from './tambah/tambah.component';
import { MaterialDesign } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HapusComponent } from './hapus/hapus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Module Login
    HomeComponent, // Module Home
    TambahComponent, // Module Tambah dialog
    HapusComponent, // Module Hapus dialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Module Routing untuk mengatur navigasi pada aplikasi
    BrowserAnimationsModule,
    MaterialDesign, // Module Materia design
    FormsModule, // Module Form digunakan agar dapat membaca database
    HttpClientModule, // Module Http agar front-end (Angular) dapat terintegrasi dengan back-end (CodeIgniter)
  ],
  providers: [],
  // enteryComponent berfungsi untuk menampilkan dialog tambah dan hapus
  entryComponents: [TambahComponent, HapusComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
