import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiServer } from '../cliente/apiServer';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  url = apiServer.url;

  formSubmitted: boolean = false;

  public loginForm: any = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  user: any = [{
    email: 'demo@demo.com',
    password: '123'
  }];

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, private loginService: LoginService) { }

  postMethod(url: string, body: any): Observable<any> {
    return this.http.post(`${this.url}${url}`, body);
  }
  login() {

    this.formSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.postMethod('token/generate.php', this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code == 1) {
        localStorage.setItem('token', res.document.access_token);

      }
      console.log(res.document.access_token);
      console.log(localStorage.getItem('token'));
      if (this.loginService.isLoggedIn()) {
        this.router.navigate(['/cliente-list']);
      } else {
        this.router.navigate(['/auth']);
      }

    });
    (error: any) => {
      console.error('Error en la petición HTTP:', error);
    }
    // this.router.navigate(['/cliente-list']);
  }

}
