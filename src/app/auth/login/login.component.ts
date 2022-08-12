import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Cambiar cuando se cree la interfaz
  public user: any;

  constructor() {
    this.user = {
      email: "",
      password: ""
    }
  }

  ngOnInit(): void {
  }

  // Cambiar cuando se cree la interfaz
  onSubmit(user: any) {
    console.log("llega");
  }

}
