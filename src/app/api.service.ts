import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // ApiUrl untuk membaca file api yang sudah kita buat
  apiUrl: any = 'http://localhost/rest-api/index.php/buku/';

  // fungsi untuk menampilkan data pada tabel komik
  baca() {
    return this.http.get(this.apiUrl + 'buku');
  }

  // fungsi untuk menyimpan data yang kita insert pada dialog Tambah
  simpan(data) {
    return this.http.post(this.apiUrl + 'buku', data);
  }

  // fungsi untuk menghapus data pada tabel komik berdasarkan kolom ID
  hapus(id) {
    return this.http.delete(this.apiUrl + 'buku/' + id);
  }

  // fungsi untuk menyimpan perubahan pada dialog Tambah
  edit(data) {
    return this.http.put(this.apiUrl + 'buku/' + data.id, data);
  }
}
