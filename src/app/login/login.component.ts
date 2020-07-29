import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  data: any = {};

  ngOnInit() {}

  // fungsi ini berguna jika username dan password yang dimasukan sama, maka akan masuk ke halaman home
  masuk(data) {
    if (data.username === 'admin' && data.password === 'admin') {
      this.router.navigate(['/home']);
    }
  }
}
