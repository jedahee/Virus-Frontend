import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import * as Aos from 'aos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Cambiar cuando se cree la interfaz
  public user: User = <User>{};
  public loginForm!: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
        //Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)        
      ])
    });
  }

  ngOnInit(): void {
    Aos.init();
  }

  // Cambiar cuando se cree la interfaz
  onSubmit() {
    if(this.loginForm.valid){
      this.isSubmitted = true;      

      let user = this.loginForm.value;

      console.log("User Login Form Submit", user);
    }
  
  }

}
