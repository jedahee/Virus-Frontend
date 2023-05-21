import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  public register(user: User) {

    return this.http.post<any>(this.url + 'auth/sign-up', user);
  }
}