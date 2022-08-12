import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('passwordC') password: ElementRef = <ElementRef>{};
  @ViewChild('confirmPass') confirmPass: ElementRef = <ElementRef>{};
 
  // Cambiar cuando se cree la interfaz
  public user: any;
  public isSamePassword: boolean = true;

  constructor() {
    this.user = {
      email: "",
      name: "",
      password: ""
    }
  }

  ngOnInit(): void {
  }

  checkConfirmPassword(): void {
    this.isSamePassword = (this.user.password == this.confirmPass.nativeElement.value)
  }

  // Cambiar cuando se cree la interfaz
  onSubmit(user: any) {
    console.log("llega");
  }

}
