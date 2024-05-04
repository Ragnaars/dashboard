import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor() { }
  
  public isUserLogin = new BehaviorSubject<boolean>(false); 
  
  getToken() {
    const token = localStorage.getItem('token');
    console.log('Token recuperado:', token);
    return token;
  }

  isLoggedIn() {
    const userToken = this.getToken();
    const isLoggedIn = userToken !== null;
    this.isUserLogin.next(isLoggedIn);
    console.log('Usuario autenticado:', isLoggedIn);
    return isLoggedIn;
  }
}