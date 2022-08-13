import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';

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
  public registerForm!: FormGroup;
  public isSubmitted: boolean = false;
  public passw: string = "";

  constructor(private formBuilder: FormBuilder) {
    
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [
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
  }

  checkConfirmPassword(): void {
    this.isSamePassword = (this.password.nativeElement.value == this.confirmPass.nativeElement.value)
  }

  // Cambiar cuando se cree la interfaz
  onSubmit() {
    
    if(this.registerForm.valid){
      this.isSubmitted = true;      
      console.log("User Registration Form Submit", this.registerForm.value);
    }
  }

}
