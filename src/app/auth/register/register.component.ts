import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as Aos from 'aos';
import { AnimService } from 'src/app/services/anim.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('passwordC') password: ElementRef = <ElementRef>{};
  @ViewChild('confirmPass') confirmPass: ElementRef = <ElementRef>{};
  @ViewChild('error_msg_ref') error_msg_ref: ElementRef = <ElementRef>{};
  @ViewChild('success_msg_ref') success_msg_ref: ElementRef = <ElementRef>{};

  // Cambiar cuando se cree la interfaz
  public user: any;
  public isSamePassword: boolean = true;
  public registerForm!: FormGroup;
  public isSubmitted: boolean = false;
  public passw: string = "";

  constructor(private router: Router, private anim_service: AnimService, private auth_service: AuthService, private formBuilder: FormBuilder) {
    
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
      ]),
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
    Aos.init()
  }

  checkConfirmPassword(): void {
    this.isSamePassword = (this.password.nativeElement.value == this.confirmPass.nativeElement.value)
  }

  // Cambiar cuando se cree la interfaz
  onSubmit() {
    
    if(this.registerForm.valid){
      this.isSubmitted = true;
      
      let user = this.registerForm.value;

      this.auth_service.register(user).subscribe(data => {
        this.anim_service.popupAnim(this.success_msg_ref, "Se ha creado el usuario", 2000);
        
        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 2000);
        
        
      }, error => {
          this.anim_service.popupAnim(this.error_msg_ref, "Hubo un error creando el usuario", 2000);
      });
    }
  }

}
